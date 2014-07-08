(ns async-visualizer.core
  (:require [ clojure.zip :as z ]))



(defn add-channel [zip channels]
  (assoc channels
    (-> zip z/next z/next z/node)
    (-> zip z/next z/next z/next z/node)))

(defn traverse [forms]
  (loop [ zip (z/seq-zip forms)
          channels {} ]
    (let [ n (z/node zip) ]
      (cond
       (z/end? zip) { :channels channels :altered-forms (z/root zip) }
       (= n 'def)   (recur (z/next (z/remove (z/up zip))) (add-channel (z/up zip) channels))
       (get channels n) (recur (z/next (z/replace zip (list 'get 'chans (symbol (name n))))) channels)
       :else        (recur (z/next zip) channels)))))


(defmacro defexample [ex-name & forms]
  (let [ {:keys [channels altered-forms]} (traverse forms)]
    `(let [ chans ~channels ]
       (om/root
        (fn [_ owner]
          (reify
            om/IWillMount
            (will-mount [_] ~@altered-forms)
            om/IRender
            (render [_] (om/dom nil "HELLO WORLD"))))
        (atom {})
        { :target (js/document.querySelector ~(str "." (name ex-name)))}))))


(traverse
 '((def ch (chan (sliding-buffer 1)))

   (button (put! ch :red-dot))
   (button (put! ch :blue-dot))

   (go (loop []
         (show (<! ch))
         (recur)))))

