(ns async-visualizer.core
  (:require [ om.core :as om  :include-macros true ]
            [ om.dom  :as dom :include-macros true ]
            [ cljs.core.async :as async :refer [<! >! chan] ]
            [ cljs.core.async.impl.protocols :as protocols ]
            [ cljs.core.async.impl.buffers   :as buffers    ]
            [ cljs.core.async.impl.channels  :as channels  ])
  (:require-macros [cljs.core.async.macros :refer [ go ]]))

(enable-console-print!)

(def css-transition-group (-> js/React (aget "addons") (aget "CSSTransitionGroup")))

;;
;; -- Force core.async channels and buffers to reveal their state --
;;

(defprotocol XRay
  (reveal [item]))

(extend-type channels/ManyToManyChannel XRay
  (reveal [c] { :puts  (map #(.-val %) (remove nil? (reveal (.-puts c))))
                :takes (map (fn [_] :sleeping) (remove nil? (reveal (.-takes c))))
                :buf  (if (.-buf c) (remove nil? (reveal (.-buf c))) nil) }))

(extend-type buffers/RingBuffer XRay
  (reveal [buf]
          (let [ head (.-head buf)
                 tail (.-tail buf)
                 arr  (.-arr buf)]
            (cond
             (<  tail head) (take head (drop tail arr))
             (>= tail head) (concat (drop tail arr) (take head arr))))))

(extend-type buffers/SlidingBuffer XRay
  (reveal [buf] (reveal (.-buf buf))))

(extend-type buffers/FixedBuffer XRay
  (reveal [buf] (reveal (.-buf buf))))

(extend-type buffers/DroppingBuffer XRay
  (reveal [buf] (reveal (.-buf buf))))

;;
;; -- End awful core.async hackery
;;

(defn color [color owner]
  (om/component
   (dom/i #js { :className (str "dot " (name color)) } "")))

(defn buffer [buf owner]
  (reify
    om/IRender
    (render [_]
            (css-transition-group
             (clj->js { :className "buffer"
                        :transitionName "dots"
                        :children (map #(om/build color %) buf)})))))

(defn channel [ch owner]
  (reify
    om/IRender
    (render [_]
            (dom/div #js { :className "channel" }
                     (dom/div nil
                              "Wating puts:" (om/build buffer (:puts ch)))
                     (dom/div nil
                              "Buffer:" (om/build buffer (:buf ch)))
                     (dom/div nil
                              "Waiting takes:" (om/build buffer (:takes ch)))))))

(defn example-one [data owner]
  (reify
    om/IRender
    (render [_]
      (let [ ch (:ch data)]
        (dom/div #js { :className "example-container" }
                 (dom/div #js { :className "text-center controls" }
                          (dom/button
                           #js { :className "pure-button"
                                 :onClick (fn [_]
                                            (async/put! ch :red)
                                            (om/refresh! owner)) }

                           (dom/code nil ">! ch " (om/build color :red))))
                 (dom/div #js { :className "channel-container" }
                          (om/build channel (reveal ch)))

                 (dom/div #js { :className "text-center controls " }
                          (dom/button
                           #js { :className "pure-button"
                                 :onClick (fn [_]
                                            (async/take! ch #(prn %))
                                            (om/refresh! owner))}
                           (dom/code nil "<! ch"))))))))

(om/root example-one
         (atom { :ch (chan (async/buffer 5)) })
         { :target (js/document.querySelector ".example-one") })
