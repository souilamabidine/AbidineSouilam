(() => { "use strict"; var e, r, t, n, o, c, i, a = { 92: (e, r, t) => { t(434),
                    function() { var e = document.querySelector(".header"),
                            r = e.offsetTop,
                            t = document.querySelectorAll(".navbar__link"),
                            n = document.querySelectorAll(".projects__card"),
                            o = document.querySelectorAll(".overlay__close"),
                            c = (document.querySelector(".navbar-small"), document.querySelector(".navbar-small__icon")),
                            i = document.querySelector(".navbar-small__menu"),
                            a = document.querySelectorAll(".section");
                        window.addEventListener("scroll", (function() { window.pageYOffset > r ? e.classList.add("sticky") : e.classList.remove("sticky") })), window.addEventListener("scroll", (function() { var e = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
                            document.querySelector(".scroll-progress").style.width = e + "%" })); var d = function() { for (var r = document.querySelectorAll("section"), n = r.length, o = e.offsetHeight; n-- && window.scrollY < r[n].offsetTop + o;) t.forEach((function(e) { e.classList.remove("navbar__link--active"), t[n].classList.add("navbar__link--active") })) };
                        n.forEach((function(e) { return e.addEventListener("click", (function() { var r = e.id.slice(-1);
                                document.getElementById("overlay".concat(r)).classList.add("overlay--active") })) })), o.forEach((function(e) { return e.addEventListener("click", (function(r) { document.getElementById("overlay".concat(e.id.slice(-1))).classList.remove("overlay--active") })) })), document.querySelectorAll(".overlay").forEach((function(e) { e.addEventListener("click", (function(r) { document.getElementById("modal".concat(e.id.slice(-1))).contains(r.target) || e.classList.remove("overlay--active") })) })); var l, s = function(e) { var r = document.querySelectorAll(".overlay__slide".concat(e)),
                                    t = document.querySelector(".overlay__slider__btn--left".concat(e)),
                                    n = document.querySelector(".overlay__slider__btn--right".concat(e)),
                                    o = document.querySelector(".overlay__dots".concat(e)),
                                    c = 0,
                                    i = r.length,
                                    a = function(r) { document.querySelectorAll(".overlay__dots__dot".concat(e)).forEach((function(e) { return e.classList.remove("overlay__dots__dot--active") })), document.querySelector(".overlay__dots__dot".concat(e, '[data-slide="').concat(r, '"]')).classList.add("overlay__dots__dot--active") },
                                    d = function(e) { r.forEach((function(r, t) { return r.style.transform = "translateX(".concat(100 * (t - e), "%)") })) };
                                d(0), r.forEach((function(r, t) { o.insertAdjacentHTML("beforeend", '<button class="overlay__dots__dot overlay__dots__dot'.concat(e, '" data-slide="').concat(t, '"></button>')) })), a(0), n.addEventListener("click", (function() { c === i - 1 ? c = 0 : c++, d(c), a(c) })), t.addEventListener("click", (function() { 0 === c ? c = i - 1 : c--, d(c), a(c) })), o.addEventListener("click", (function(e) { if (e.target.classList.contains("overlay__dots__dot")) { var r = e.target.dataset.slide;
                                        d(r), a(r) } })) },
                            u = function(e) { var r = document.querySelector(".overlay__video-btn".concat(e)),
                                    t = document.querySelector(".overlay__gif".concat(e)),
                                    n = document.querySelector(".overlay__slider".concat(e)),
                                    o = document.querySelector(".overlay__images-btn".concat(e));
                                r.addEventListener("click", (function() { t.classList.contains("overlay__gif--active") || (t.classList.add("overlay__gif--active"), n.classList.remove("overlay__slider--active"), r.classList.add("overlay__btn--active"), o.classList.remove("overlay__btn--active")) })), o.addEventListener("click", (function() { n.classList.contains("overlay__slider--active") || (n.classList.add("overlay__slider--active"), t.classList.remove("overlay__gif--active"), o.classList.add("overlay__btn--active"), r.classList.remove("overlay__btn--active")) })) };
                        c.addEventListener("click", (function() { i.classList.toggle("navbar-small__menu--show"), c.classList.toggle("navbar-small__icon--active") })), t.forEach((function(e) { e.addEventListener("click", (function() { i.classList.contains("navbar-small__menu--show") && (i.classList.remove("navbar-small__menu--show"), c.classList.remove("navbar-small__icon--active")) })) })), navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0 && a.forEach((function(e) { return e.classList.add("safari") })), s(1), s(2), u(1), u(2), d(), window.addEventListener("scroll", d), (l = document.querySelector(".home__img")).addEventListener("mouseover", (function() { l.classList.add("home__img--active"), l.addEventListener("mouseout", (function() { l.classList.remove("home__img--active") })) })) }() }, 783: (e, r, t) => { var n = t(618),
                    o = Object.create(null),
                    c = "undefined" == typeof document,
                    i = Array.prototype.forEach;

                function a() {}

                function d(e, r) { if (!r) { if (!e.href) return;
                        r = e.href.split("?")[0] } if (s(r) && !1 !== e.isLoaded && r && r.indexOf(".css") > -1) { e.visited = !0; var t = e.cloneNode();
                        t.isLoaded = !1, t.addEventListener("load", (function() { t.isLoaded || (t.isLoaded = !0, e.parentNode.removeChild(e)) })), t.addEventListener("error", (function() { t.isLoaded || (t.isLoaded = !0, e.parentNode.removeChild(e)) })), t.href = "".concat(r, "?").concat(Date.now()), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t) } }

                function l() { var e = document.querySelectorAll("link");
                    i.call(e, (function(e) {!0 !== e.visited && d(e) })) }

                function s(e) { return !!/^https?:/i.test(e) }
                e.exports = function(e, r) { if (c) return console.log("no window.document found, will not HMR CSS"), a; var t, u, f = function(e) { var r = o[e]; if (!r) { if (document.currentScript) r = document.currentScript.src;
                            else { var t = document.getElementsByTagName("script"),
                                    c = t[t.length - 1];
                                c && (r = c.src) }
                            o[e] = r } return function(e) { if (!r) return null; var t = r.split(/([^\\/]+)\.js$/),
                                o = t && t[1]; return o && e ? e.split(",").map((function(e) { var t = new RegExp("".concat(o, "\\.js$"), "g"); return n(r.replace(t, "".concat(e.replace(/{fileName}/g, o), ".css"))) })) : [r.replace(".js", ".css")] } }(e); return t = function() { var e = f(r.filename),
                                t = function(e) { if (!e) return !1; var r = document.querySelectorAll("link"),
                                        t = !1; return i.call(r, (function(r) { if (r.href) { var o = function(e, r) { var t; return e = n(e, { stripWWW: !1 }), r.some((function(n) { e.indexOf(r) > -1 && (t = n) })), t }(r.href, e);
                                            s(o) && !0 !== r.visited && o && (d(r, o), t = !0) } })), t }(e); if (r.locals) return console.log("[HMR] Detected local css modules. Reload all css"), void l();
                            t ? console.log("[HMR] css reload %s", e.join(" ")) : (console.log("[HMR] Reload all css"), l()) }, 50, u = 0,
                        function() { var e = this,
                                r = arguments,
                                n = function() { return t.apply(e, r) };
                            clearTimeout(u), u = setTimeout(n, 50) } } }, 618: e => { e.exports = function(e) { if (e = e.trim(), /^data:/i.test(e)) return e; var r = -1 !== e.indexOf("//") ? e.split("//")[0] + "//" : "",
                        t = e.replace(new RegExp(r, "i"), "").split("/"),
                        n = t[0].toLowerCase().replace(/\.$/, ""); return t[0] = "", r + n + t.reduce((function(e, r) { switch (r) {
                            case "..":
                                e.pop(); break;
                            case ".":
                                break;
                            default:
                                e.push(r) } return e }), []).join("/") } }, 434: (e, r, t) => { var n = t(783)(e.id, { locals: !1 });
                e.hot.dispose(n), e.hot.accept(void 0, n) } },
        d = {};

    function l(e) { var r = d[e]; if (void 0 !== r) { if (void 0 !== r.error) throw r.error; return r.exports } var t = d[e] = { id: e, exports: {} }; try { var n = { id: e, module: t, factory: a[e], require: l };
            l.i.forEach((function(e) { e(n) })), t = n.module, n.factory.call(t.exports, t, t.exports, n.require) } catch (e) { throw t.error = e, e } return t.exports }
    l.m = a, l.c = d, l.i = [], l.hu = e => e + "." + l.h() + ".hot-update.js", l.miniCssF = e => {}, l.hmrF = () => "main." + l.h() + ".hot-update.json", l.h = () => "989565f1f18d2cca0dfd", l.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "portfolio:", l.l = (t, n, o, c) => { if (e[t]) e[t].push(n);
        else { var i, a; if (void 0 !== o)
                for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) { var u = d[s]; if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == r + o) { i = u; break } }
            i || (a = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", r + o), i.src = t), e[t] = [n]; var f = (r, n) => { i.onerror = i.onload = null, clearTimeout(p); var o = e[t]; if (delete e[t], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), r) return r(n) },
                p = setTimeout(f.bind(null, void 0, { type: "timeout", target: i }), 12e4);
            i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), a && document.head.appendChild(i) } }, (() => { var e, r, t, n, o = {},
            c = l.c,
            i = [],
            a = [],
            d = "idle";

        function s(e) { d = e; for (var r = 0; r < a.length; r++) a[r].call(null, e) }

        function u(e) { if (0 === r.length) return e(); var t = r; return r = [], Promise.all(t).then((function() { return u(e) })) }

        function f(e) { if ("idle" !== d) throw new Error("check() is only allowed in idle status"); return s("check"), l.hmrM().then((function(n) { if (!n) return s(v() ? "ready" : "idle"), null;
                s("prepare"); var o = []; return r = [], t = [], Promise.all(Object.keys(l.hmrC).reduce((function(e, r) { return l.hmrC[r](n.c, n.r, n.m, e, t, o), e }), [])).then((function() { return u((function() { return e ? h(e) : (s("ready"), o) })) })) })) }

        function p(e) { return "ready" !== d ? Promise.resolve().then((function() { throw new Error("apply() is only allowed in ready status") })) : h(e) }

        function h(e) { e = e || {}, v(); var r = t.map((function(r) { return r(e) }));
            t = void 0; var o, c = r.map((function(e) { return e.error })).filter(Boolean); if (c.length > 0) return s("abort"), Promise.resolve().then((function() { throw c[0] }));
            s("dispose"), r.forEach((function(e) { e.dispose && e.dispose() })), s("apply"); var i = function(e) { o || (o = e) },
                a = []; return r.forEach((function(e) { if (e.apply) { var r = e.apply(i); if (r)
                        for (var t = 0; t < r.length; t++) a.push(r[t]) } })), o ? (s("fail"), Promise.resolve().then((function() { throw o }))) : n ? h(e).then((function(e) { return a.forEach((function(r) { e.indexOf(r) < 0 && e.push(r) })), e })) : (s("idle"), Promise.resolve(a)) }

        function v() { if (n) return t || (t = []), Object.keys(l.hmrI).forEach((function(e) { n.forEach((function(r) { l.hmrI[e](r, t) })) })), n = void 0, !0 }
        l.hmrD = o, l.i.push((function(h) { var v, m, y, _ = h.module,
                g = function(t, n) { var o = c[n]; if (!o) return t; var a = function(r) { if (o.hot.active) { if (c[r]) { var a = c[r].parents; - 1 === a.indexOf(n) && a.push(n) } else i = [n], e = r; - 1 === o.children.indexOf(r) && o.children.push(r) } else console.warn("[HMR] unexpected require(" + r + ") from disposed module " + n), i = []; return t(r) },
                        l = function(e) { return { configurable: !0, enumerable: !0, get: function() { return t[e] }, set: function(r) { t[e] = r } } }; for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && "e" !== f && Object.defineProperty(a, f, l(f)); return a.e = function(e) { return function(e) { switch (d) {
                                case "ready":
                                    return s("prepare"), r.push(e), u((function() { s("ready") })), e;
                                case "prepare":
                                    return r.push(e), e;
                                default:
                                    return e } }(t.e(e)) }, a }(h.require, h.id);
            _.hot = (v = h.id, m = _, y = { _acceptedDependencies: {}, _acceptedErrorHandlers: {}, _declinedDependencies: {}, _selfAccepted: !1, _selfDeclined: !1, _selfInvalidated: !1, _disposeHandlers: [], _main: e !== v, _requireSelf: function() { i = m.parents.slice(), e = v, l(v) }, active: !0, accept: function(e, r, t) { if (void 0 === e) y._selfAccepted = !0;
                    else if ("function" == typeof e) y._selfAccepted = e;
                    else if ("object" == typeof e && null !== e)
                        for (var n = 0; n < e.length; n++) y._acceptedDependencies[e[n]] = r || function() {}, y._acceptedErrorHandlers[e[n]] = t;
                    else y._acceptedDependencies[e] = r || function() {}, y._acceptedErrorHandlers[e] = t }, decline: function(e) { if (void 0 === e) y._selfDeclined = !0;
                    else if ("object" == typeof e && null !== e)
                        for (var r = 0; r < e.length; r++) y._declinedDependencies[e[r]] = !0;
                    else y._declinedDependencies[e] = !0 }, dispose: function(e) { y._disposeHandlers.push(e) }, addDisposeHandler: function(e) { y._disposeHandlers.push(e) }, removeDisposeHandler: function(e) { var r = y._disposeHandlers.indexOf(e);
                    r >= 0 && y._disposeHandlers.splice(r, 1) }, invalidate: function() { switch (this._selfInvalidated = !0, d) {
                        case "idle":
                            t = [], Object.keys(l.hmrI).forEach((function(e) { l.hmrI[e](v, t) })), s("ready"); break;
                        case "ready":
                            Object.keys(l.hmrI).forEach((function(e) { l.hmrI[e](v, t) })); break;
                        case "prepare":
                        case "check":
                        case "dispose":
                        case "apply":
                            (n = n || []).push(v) } }, check: f, apply: p, status: function(e) { if (!e) return d;
                    a.push(e) }, addStatusHandler: function(e) { a.push(e) }, removeStatusHandler: function(e) { var r = a.indexOf(e);
                    r >= 0 && a.splice(r, 1) }, data: o[v] }, e = void 0, y), _.parents = i, _.children = [], i = [], h.require = g })), l.hmrC = {}, l.hmrI = {} })(), (() => { var e;
        l.g.importScripts && (e = l.g.location + ""); var r = l.g.document; if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) { var t = r.getElementsByTagName("script");
            t.length && (e = t[t.length - 1].src) } if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e })(), t = (e, r, t, n) => { var o = document.createElement("link"); return o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = c => { if (o.onerror = o.onload = null, "load" === c.type) t();
            else { var i = c && ("load" === c.type ? "missing" : c.type),
                    a = c && c.target && c.target.href || r,
                    d = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = a, o.parentNode.removeChild(o), n(d) } }, o.href = r, document.head.appendChild(o), o }, n = (e, r) => { for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) { var o = (i = t[n]).getAttribute("data-href") || i.getAttribute("href"); if ("stylesheet" === i.rel && (o === e || o === r)) return i } var c = document.getElementsByTagName("style"); for (n = 0; n < c.length; n++) { var i; if ((o = (i = c[n]).getAttribute("data-href")) === e || o === r) return i } }, o = [], c = [], i = e => ({ dispose: () => { for (var e = 0; e < o.length; e++) { var r = o[e];
                r.parentNode && r.parentNode.removeChild(r) }
            o.length = 0 }, apply: () => { for (var e = 0; e < c.length; e++) c[e].rel = "stylesheet";
            c.length = 0 } }), l.hmrC.miniCss = (e, r, a, d, s, u) => { s.push(i), e.forEach((e => { var r = l.miniCssF(e),
                i = l.p + r; const a = n(r, i);
            a && d.push(new Promise(((r, n) => { var d = t(e, i, (() => { d.as = "style", d.rel = "preload", r() }), n);
                o.push(a), c.push(d) }))) })) }, (() => { var e, r, t, n, o = { 179: 0 },
            c = {};

        function i(e) { return new Promise(((r, t) => { c[e] = r; var n = l.p + l.hu(e),
                    o = new Error;
                l.l(n, (r => { if (c[e]) { c[e] = void 0; var n = r && ("load" === r.type ? "missing" : r.type),
                            i = r && r.target && r.target.src;
                        o.message = "Loading hot update chunk " + e + " failed.\n(" + n + ": " + i + ")", o.name = "ChunkLoadError", o.type = n, o.request = i, t(o) } })) })) }

        function a(c) {
            function i(e) { for (var r = [e], t = {}, n = r.map((function(e) { return { chain: [e], id: e } })); n.length > 0;) { var o = n.pop(),
                        c = o.id,
                        i = o.chain,
                        d = l.c[c]; if (d && (!d.hot._selfAccepted || d.hot._selfInvalidated)) { if (d.hot._selfDeclined) return { type: "self-declined", chain: i, moduleId: c }; if (d.hot._main) return { type: "unaccepted", chain: i, moduleId: c }; for (var s = 0; s < d.parents.length; s++) { var u = d.parents[s],
                                f = l.c[u]; if (f) { if (f.hot._declinedDependencies[c]) return { type: "declined", chain: i.concat([u]), moduleId: c, parentId: u }; - 1 === r.indexOf(u) && (f.hot._acceptedDependencies[c] ? (t[u] || (t[u] = []), a(t[u], [c])) : (delete t[u], r.push(u), n.push({ chain: i.concat([u]), id: u }))) } } } } return { type: "accepted", moduleId: e, outdatedModules: r, outdatedDependencies: t } }

            function a(e, r) { for (var t = 0; t < r.length; t++) { var n = r[t]; - 1 === e.indexOf(n) && e.push(n) } }
            l.f && delete l.f.jsonpHmr, e = void 0; var d = {},
                s = [],
                u = {},
                f = function(e) { console.warn("[HMR] unexpected require(" + e.id + ") to disposed module") }; for (var p in r)
                if (l.o(r, p)) { var h, v = r[p],
                        m = !1,
                        y = !1,
                        _ = !1,
                        g = ""; switch ((h = v ? i(p) : { type: "disposed", moduleId: p }).chain && (g = "\nUpdate propagation: " + h.chain.join(" -> ")), h.type) {
                        case "self-declined":
                            c.onDeclined && c.onDeclined(h), c.ignoreDeclined || (m = new Error("Aborted because of self decline: " + h.moduleId + g)); break;
                        case "declined":
                            c.onDeclined && c.onDeclined(h), c.ignoreDeclined || (m = new Error("Aborted because of declined dependency: " + h.moduleId + " in " + h.parentId + g)); break;
                        case "unaccepted":
                            c.onUnaccepted && c.onUnaccepted(h), c.ignoreUnaccepted || (m = new Error("Aborted because " + p + " is not accepted" + g)); break;
                        case "accepted":
                            c.onAccepted && c.onAccepted(h), y = !0; break;
                        case "disposed":
                            c.onDisposed && c.onDisposed(h), _ = !0; break;
                        default:
                            throw new Error("Unexception type " + h.type) } if (m) return { error: m }; if (y)
                        for (p in u[p] = v, a(s, h.outdatedModules), h.outdatedDependencies) l.o(h.outdatedDependencies, p) && (d[p] || (d[p] = []), a(d[p], h.outdatedDependencies[p]));
                    _ && (a(s, [h.moduleId]), u[p] = f) }
            r = void 0; for (var E, b = [], w = 0; w < s.length; w++) { var L = s[w],
                    k = l.c[L];
                k && k.hot._selfAccepted && u[L] !== f && !k.hot._selfInvalidated && b.push({ module: L, require: k.hot._requireSelf, errorHandler: k.hot._selfAccepted }) } return { dispose: function() { var e;
                    t.forEach((function(e) { delete o[e] })), t = void 0; for (var r, n = s.slice(); n.length > 0;) { var c = n.pop(),
                            i = l.c[c]; if (i) { var a = {},
                                u = i.hot._disposeHandlers; for (w = 0; w < u.length; w++) u[w].call(null, a); for (l.hmrD[c] = a, i.hot.active = !1, delete l.c[c], delete d[c], w = 0; w < i.children.length; w++) { var f = l.c[i.children[w]];
                                f && (e = f.parents.indexOf(c)) >= 0 && f.parents.splice(e, 1) } } } for (var p in d)
                        if (l.o(d, p) && (i = l.c[p]))
                            for (E = d[p], w = 0; w < E.length; w++) r = E[w], (e = i.children.indexOf(r)) >= 0 && i.children.splice(e, 1) }, apply: function(e) { for (var r in u) l.o(u, r) && (l.m[r] = u[r]); for (var t = 0; t < n.length; t++) n[t](l); for (var o in d)
                        if (l.o(d, o)) { var i = l.c[o]; if (i) { E = d[o]; for (var a = [], f = [], p = [], h = 0; h < E.length; h++) { var v = E[h],
                                        m = i.hot._acceptedDependencies[v],
                                        y = i.hot._acceptedErrorHandlers[v]; if (m) { if (-1 !== a.indexOf(m)) continue;
                                        a.push(m), f.push(y), p.push(v) } } for (var _ = 0; _ < a.length; _++) try { a[_].call(null, E) } catch (r) { if ("function" == typeof f[_]) try { f[_](r, { moduleId: o, dependencyId: p[_] }) } catch (t) { c.onErrored && c.onErrored({ type: "accept-error-handler-errored", moduleId: o, dependencyId: p[_], error: t, originalError: r }), c.ignoreErrored || (e(t), e(r)) } else c.onErrored && c.onErrored({ type: "accept-errored", moduleId: o, dependencyId: p[_], error: r }), c.ignoreErrored || e(r) } } }
                    for (var g = 0; g < b.length; g++) { var w = b[g],
                            L = w.module; try { w.require(L) } catch (r) { if ("function" == typeof w.errorHandler) try { w.errorHandler(r, { moduleId: L, module: l.c[L] }) } catch (t) { c.onErrored && c.onErrored({ type: "self-accept-error-handler-errored", moduleId: L, error: t, originalError: r }), c.ignoreErrored || (e(t), e(r)) } else c.onErrored && c.onErrored({ type: "self-accept-errored", moduleId: L, error: r }), c.ignoreErrored || e(r) } } return s } } }
        self.webpackHotUpdateportfolio = (e, t, o) => { for (var i in t) l.o(t, i) && (r[i] = t[i]);
            o && n.push(o), c[e] && (c[e](), c[e] = void 0) }, l.hmrI.jsonp = function(e, o) { r || (r = {}, n = [], t = [], o.push(a)), l.o(r, e) || (r[e] = l.m[e]) }, l.hmrC.jsonp = function(c, d, s, u, f, p) { f.push(a), e = {}, t = d, r = s.reduce((function(e, r) { return e[r] = !1, e }), {}), n = [], c.forEach((function(r) { l.o(o, r) && void 0 !== o[r] && (u.push(i(r)), e[r] = !0) })), l.f && (l.f.jsonpHmr = function(r, t) { e && !l.o(e, r) && l.o(o, r) && void 0 !== o[r] && (t.push(i(r)), e[r] = !0) }) }, l.hmrM = () => { if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API"); return fetch(l.p + l.hmrF()).then((e => { if (404 !== e.status) { if (!e.ok) throw new Error("Failed to fetch update manifest " + e.statusText); return e.json() } })) } })(), l(92) })();