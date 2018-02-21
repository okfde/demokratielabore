System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.1.1",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-rc.1.0.3",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.2",
    "aurelia-framework": "npm:aurelia-framework@1.1.4",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
    "aurelia-router": "npm:aurelia-router@1.3.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "fetch": "github:github/fetch@1.1.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "horsey": "npm:horsey@4.2.2",
    "jquery": "npm:jquery@2.2.4",
    "localforage": "npm:localforage@1.5.0",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "simple-markdown": "npm:simple-markdown@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:rstacruz/nprogress@0.2.0": {
      "css": "github:systemjs/plugin-css@0.1.35"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@2.1.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.4",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-dialog@1.0.0-rc.1.0.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.2": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:bullseye@1.5.0": {
      "crossvent": "npm:crossvent@1.5.4",
      "seleccion": "npm:seleccion@2.0.0",
      "sell": "npm:sell@1.0.0"
    },
    "npm:contra@1.9.4": {
      "atoa": "npm:atoa@1.0.0",
      "ticky": "npm:ticky@1.0.1"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:crossvent@1.5.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "custom-event": "npm:custom-event@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:es3ify@0.1.4": {
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "jstransform": "npm:jstransform@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@3001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.35"
    },
    "npm:horsey@4.2.2": {
      "bullseye": "npm:bullseye@1.5.0",
      "contra": "npm:contra@1.9.4",
      "crossvent": "npm:crossvent@1.5.4",
      "fuzzysearch": "npm:fuzzysearch@1.0.3",
      "hash-sum": "npm:hash-sum@1.0.2",
      "lodash": "npm:lodash@4.13.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sektor": "npm:sektor@1.1.4",
      "sell": "npm:sell@1.0.0"
    },
    "npm:immediate@3.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-process-browser@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "falafel": "npm:falafel@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.6.5"
    },
    "npm:jstransform@3.0.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lie@3.0.2": {
      "es3ify": "npm:es3ify@0.1.4",
      "immediate": "npm:immediate@3.0.6",
      "inline-process-browser": "npm:inline-process-browser@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.3.0"
    },
    "npm:localforage@1.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "lie": "npm:lie@3.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.43": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.15",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:sektor@1.1.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:simple-markdown@0.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.34"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:ticky@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:unreachable-branch-transform@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.1",
      "recast": "npm:recast@0.10.43",
      "through2": "npm:through2@0.6.5"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "vendor.js": [
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:rstacruz/nprogress@0.2.0.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-css@0.1.35.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-text@0.0.8.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.js",
      "npm:atoa@1.0.0.js",
      "npm:atoa@1.0.0/atoa.js",
      "npm:bullseye@1.5.0.js",
      "npm:bullseye@1.5.0/bullseye.js",
      "npm:bullseye@1.5.0/tailormade.js",
      "npm:bullseye@1.5.0/throttle.js",
      "npm:contra@1.9.4/debounce.js",
      "npm:contra@1.9.4/emitter.js",
      "npm:crossvent@1.5.4.js",
      "npm:crossvent@1.5.4/src/crossvent.js",
      "npm:crossvent@1.5.4/src/eventmap.js",
      "npm:custom-event@1.0.0.js",
      "npm:custom-event@1.0.0/index.js",
      "npm:fuzzysearch@1.0.3.js",
      "npm:fuzzysearch@1.0.3/index.js",
      "npm:hash-sum@1.0.2.js",
      "npm:hash-sum@1.0.2/hash-sum.js",
      "npm:horsey@4.2.2.js",
      "npm:horsey@4.2.2/dist/horsey.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:horsey@4.2.2/horsey.es5.js",
      "npm:localforage@1.5.0.js",
      "npm:localforage@1.5.0/dist/localforage.js",
      "npm:lodash@4.13.1/debounce.js",
      "npm:lodash@4.13.1/isFunction.js",
      "npm:lodash@4.13.1/isObject.js",
      "npm:lodash@4.13.1/isObjectLike.js",
      "npm:lodash@4.13.1/isSymbol.js",
      "npm:lodash@4.13.1/now.js",
      "npm:lodash@4.13.1/toNumber.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:sektor@1.1.4.js",
      "npm:sektor@1.1.4/src/sektor.js",
      "npm:seleccion@2.0.0.js",
      "npm:seleccion@2.0.0/src/getSelection.js",
      "npm:seleccion@2.0.0/src/getSelectionNullOp.js",
      "npm:seleccion@2.0.0/src/getSelectionRaw.js",
      "npm:seleccion@2.0.0/src/getSelectionSynthetic.js",
      "npm:seleccion@2.0.0/src/isHost.js",
      "npm:seleccion@2.0.0/src/rangeToTextRange.js",
      "npm:seleccion@2.0.0/src/seleccion.js",
      "npm:seleccion@2.0.0/src/setSelection.js",
      "npm:sell@1.0.0.js",
      "npm:sell@1.0.0/sell.js",
      "npm:simple-markdown@0.2.1.js",
      "npm:simple-markdown@0.2.1/simple-markdown.js",
      "npm:ticky@1.0.1.js",
      "npm:ticky@1.0.1/ticky-browser.js"
    ],
    "aurelia.js": [
      "github:github/fetch@1.1.1.js",
      "github:github/fetch@1.1.1/fetch.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.2.js",
      "npm:aurelia-animator-css@1.0.2/aurelia-animator-css.js",
      "npm:aurelia-binding@1.2.1.js",
      "npm:aurelia-binding@1.2.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.1.1.js",
      "npm:aurelia-bootstrapper@2.1.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.1.js",
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/attach-focus.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/aurelia-dialog.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-cancel-error.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-configuration.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-controller.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-renderer.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-service.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-settings.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/lifecycle.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/renderer.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog-body.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog-footer.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog-header.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.2.js",
      "npm:aurelia-fetch-client@1.1.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.4.js",
      "npm:aurelia-framework@1.1.4/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.2.js",
      "npm:aurelia-loader-default@1.0.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.2.1.js",
      "npm:aurelia-pal-browser@1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.2.js",
      "npm:aurelia-polyfills@1.2.2/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.3.0.js",
      "npm:aurelia-router@1.3.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.3.0.js",
      "npm:aurelia-templating-binding@1.3.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.4.0.js",
      "npm:aurelia-templating-resources@1.4.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.4.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.4.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.4.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.4.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.4.0/compose.js",
      "npm:aurelia-templating-resources@1.4.0/css-resource.js",
      "npm:aurelia-templating-resources@1.4.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.4.0/focus.js",
      "npm:aurelia-templating-resources@1.4.0/hide.js",
      "npm:aurelia-templating-resources@1.4.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.4.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.4.0/if.js",
      "npm:aurelia-templating-resources@1.4.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.4.0/repeat.js",
      "npm:aurelia-templating-resources@1.4.0/replaceable.js",
      "npm:aurelia-templating-resources@1.4.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.4.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/show.js",
      "npm:aurelia-templating-resources@1.4.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/with.js",
      "npm:aurelia-templating-router@1.1.0.js",
      "npm:aurelia-templating-router@1.1.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.1.0/route-href.js",
      "npm:aurelia-templating-router@1.1.0/route-loader.js",
      "npm:aurelia-templating-router@1.1.0/router-view.js",
      "npm:aurelia-templating@1.4.2.js",
      "npm:aurelia-templating@1.4.2/aurelia-templating.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "app-build.js": [
      "about.html!github:systemjs/plugin-text@0.0.8.js",
      "about.js",
      "add-location-button.html!github:systemjs/plugin-text@0.0.8.js",
      "add-location-button.js",
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "build-version-display.html!github:systemjs/plugin-text@0.0.8.js",
      "build-version-display.js",
      "cache-update-checker.html!github:systemjs/plugin-text@0.0.8.js",
      "cache-update-checker.js",
      "data.js",
      "debug.html!github:systemjs/plugin-text@0.0.8.js",
      "debug.js",
      "dialog-cache-downloading.html!github:systemjs/plugin-text@0.0.8.js",
      "dialog-cache-downloading.js",
      "dialog-cache-refresh.html!github:systemjs/plugin-text@0.0.8.js",
      "dialog-cache-refresh.js",
      "dialog-confirmation.html!github:systemjs/plugin-text@0.0.8.js",
      "dialog-confirmation.js",
      "dialog-info.html!github:systemjs/plugin-text@0.0.8.js",
      "dialog-info.js",
      "game-info-editor.html!github:systemjs/plugin-text@0.0.8.js",
      "game-info-editor.js",
      "game-info.js",
      "loading-indicator.js",
      "location-editor.html!github:systemjs/plugin-text@0.0.8.js",
      "location-editor.js",
      "location-list.html!github:systemjs/plugin-text@0.0.8.js",
      "location-list.js",
      "location-no-selection.html!github:systemjs/plugin-text@0.0.8.js",
      "location-no-selection.js",
      "location-qr-code-display.html!github:systemjs/plugin-text@0.0.8.js",
      "location-qr-code-display.js",
      "location.js",
      "main.js",
      "messages.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "overview.html!github:systemjs/plugin-text@0.0.8.js",
      "overview.js",
      "print-area.html!github:systemjs/plugin-text@0.0.8.js",
      "print-area.js",
      "print-button.html!github:systemjs/plugin-text@0.0.8.js",
      "print-button.js",
      "print-content.html!github:systemjs/plugin-text@0.0.8.js",
      "print-content.js",
      "print.html!github:systemjs/plugin-text@0.0.8.js",
      "print.js",
      "qr-code-display.html!github:systemjs/plugin-text@0.0.8.js",
      "qr-code-display.js",
      "qr-code-service.js",
      "qrcode.js",
      "save-state-display.html!github:systemjs/plugin-text@0.0.8.js",
      "save-state-display.js",
      "tools-import.html!github:systemjs/plugin-text@0.0.8.js",
      "tools-import.js",
      "tools.html!github:systemjs/plugin-text@0.0.8.js",
      "tools.js",
      "utility.js",
      "value-converters.js",
      "vendor/horsey-modified.js"
    ]
  },
  depCache: {
    "add-location-button.js": [
      "./location",
      "./data",
      "aurelia-framework",
      "aurelia-router"
    ],
    "app.js": [
      "aurelia-framework",
      "./data"
    ],
    "cache-update-checker.js": [
      "aurelia-framework",
      "aurelia-dialog",
      "./dialog-cache-refresh",
      "./dialog-cache-downloading",
      "./dialog-info"
    ],
    "data.js": [
      "./location",
      "./game-info",
      "./utility",
      "localforage",
      "aurelia-framework",
      "aurelia-event-aggregator",
      "./messages"
    ],
    "debug.js": [
      "qrcode",
      "aurelia-framework",
      "./data",
      "./location"
    ],
    "dialog-cache-downloading.js": [
      "aurelia-framework",
      "aurelia-dialog"
    ],
    "dialog-cache-refresh.js": [
      "aurelia-framework",
      "aurelia-dialog"
    ],
    "dialog-confirmation.js": [
      "aurelia-framework",
      "aurelia-dialog"
    ],
    "dialog-info.js": [
      "aurelia-framework",
      "aurelia-dialog"
    ],
    "game-info-editor.js": [
      "./game-info",
      "./data",
      "aurelia-framework"
    ],
    "loading-indicator.js": [
      "nprogress",
      "aurelia-framework"
    ],
    "location-editor.js": [
      "./location",
      "./utility",
      "./data",
      "aurelia-framework",
      "aurelia-router",
      "aurelia-event-aggregator",
      "./messages",
      "aurelia-templating-resources",
      "aurelia-dialog",
      "vendor/horsey-modified"
    ],
    "location-list.js": [
      "./location",
      "./data",
      "aurelia-framework",
      "aurelia-event-aggregator",
      "./messages",
      "aurelia-router"
    ],
    "location-no-selection.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "./messages"
    ],
    "location-qr-code-display.js": [
      "aurelia-framework",
      "aurelia-router",
      "./data",
      "aurelia-event-aggregator",
      "./messages",
      "./qr-code-service",
      "./utility"
    ],
    "location.js": [
      "./utility",
      "./build-version-display"
    ],
    "main.js": [
      "bootstrap"
    ],
    "print-area.js": [
      "./location",
      "aurelia-framework",
      "aurelia-event-aggregator",
      "./messages"
    ],
    "print-button.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "./messages"
    ],
    "print-content.js": [
      "aurelia-framework",
      "./messages",
      "./data"
    ],
    "print.js": [
      "./data",
      "aurelia-framework",
      "aurelia-event-aggregator",
      "./messages"
    ],
    "qr-code-display.js": [
      "aurelia-framework",
      "./qr-code-service"
    ],
    "qr-code-service.js": [
      "qrcode"
    ],
    "save-state-display.js": [
      "./data",
      "aurelia-framework",
      "aurelia-event-aggregator",
      "./messages",
      "./utility"
    ],
    "tools-import.js": [
      "./location",
      "./data",
      "aurelia-framework",
      "aurelia-router",
      "aurelia-dialog",
      "./dialog-info",
      "./utility"
    ],
    "tools.js": [
      "./location",
      "./data",
      "aurelia-framework",
      "aurelia-router",
      "aurelia-dialog",
      "./dialog-info",
      "./utility"
    ],
    "utility.js": [
      "./dialog-confirmation"
    ],
    "value-converters.js": [
      "./utility"
    ]
  }
});