(defproject async-visualizer "0.1.0-SNAPSHOT"
  :description "A visualizer for core.async constructs"
  :url "http://github.com/nhusher/async-visualizer"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.4"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "async-visualizer"
              :source-paths ["src"]
              :compiler {
                :output-to "async_visualizer.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
