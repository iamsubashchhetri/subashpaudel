!function () {
    "use strict";
    class n {
        constructor() {
            this.callbacks = [],
            window.addEventListener("DOMContentLoaded", (() => this.onDOMContentLoaded()))
        }
        onDOMContentLoaded() {
            this
                .callbacks
                .sort(((n, t) => n.priority - t.priority))
                .forEach((({callback: n}) => n()))
        }
        runOnLoad(n) {
            "loading" === document.readyState
                ? this
                    .callbacks
                    .push(n)
                : n.callback()
        }
    }
    !function (t, c = Number.MAX_VALUE) {
        var o;
        (
            window.canva_scriptExecutor = null !== (o = window.canva_scriptExecutor) && void 0 !== o
                ? o
                : new n
        ).runOnLoad({callback: t, priority: c})
    }((function () {
        const n = document.getElementById("menuToggle");
        n && window.addEventListener("hashchange", (() => function (n) {
            n.checked = !1
        }(n)))
    }))
}();