(ns async-visualizer.core
  (:require [ clojure.zip :as z ]))



(defn add-channel [zip channels]
  (assoc channels
    (keyword (-> zip z/next z/next z/node))
    (-> zip z/next z/next z/next z/node)))

(defn find-channels [forms]
  (loop [zip (z/seq-zip forms)
         channels {}]
    (cond
     (z/end? zip)          channels
     (= (z/node zip) 'def) (recur (z/next zip) (add-channel (z/up zip) channels))
     :else                 (recur (z/next zip) channels))))

(defn replace-show [n]
  (list 'om/set-state! 'owner :result [(second n)]))

(defn will-mount-forms [forms chs]
  (loop [zip (z/seq-zip forms)]
    (let [n (z/node zip)]
      (cond
       (z/end? zip)                            (z/root zip)
       (or (= n 'def) (= n 'button))           (recur (-> zip z/up z/remove z/next))
       (= n 'show)                             (recur (-> zip z/up (z/edit replace-show) z/next))
       (and (symbol? n) (get chs (keyword n))) (recur (-> zip (z/replace (list (keyword n) 'chans)) z/next))

       :else        (recur (z/next zip))))))

(defn replace-button [b] :button)

(defn wrap-form [f]
  (conj f :hello))

(defn display-forms [forms chs]
  (loop [zip (z/seq-zip forms)]
    (let [n (z/node zip)]
      (cond
       (z/end? zip) (z/root zip)
       (= n 'button) (recur (-> zip z/up (z/edit replace-button) z/next))
       (seq? n)      (recur (-> zip (z/edit wrap-form) z/next))
       :else         (recur (z/next zip))))))

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


(def example
  '((def ch (chan (sliding-buffer 1)))

   (button (put! ch :red-dot))
   (button (put! ch :blue-dot))

   (go (loop []
         (show (<! ch))
         (recur)))))

(display-forms example (find-channels example))

(assoc (find-channels example) :.show '(chan))
