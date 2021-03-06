//"use strict";
/**
 * Author: CompJúnior
 */
//Criando Permalinks e uma navegação mais agradável
// var COMP = {
//     common: {
//         init: function() {
//             this.toc();
//             this.syntax();
//             this.stuff();
//
//             $('#toc').delegate('a', 'click', function(e) {
//                 var a = $(this).attr('href');
//                 $(window).scrollTo(a);
//                 e.preventDefault();
//             });
//         },
//         // Gera tabela de Conteúdo
//         toc: function() {
//             var main = document.getElementById('main'),
//                 toc = document.getElementById('toc'),
//                 hx = $('section h1, section h2, section h3, section h4, section h5'),
//                 frag = document.createDocumentFragment(),
//                 hx_len = hx.length,
//                 anchor, tag, the_text;
//
//             for (var i = 0, j = hx_len; i < j; i++) {
//                 tag = hx[i].tagName.toLowerCase();
//
//                 if (tag === 'h1' || tag == 'h2' || tag == 'h3' || tag == 'h4' || tag == 'h5') {
//                     the_text = $.trim(hx[i].innerHTML);
//                     anchor = '_' + the_text.replace(/\s+|\-/g, '_').replace(/[^A-Z0-9_]/gi, '').replace(/_+/g, '_').toLowerCase();
//
//                     hx[i].id = anchor;
//                     hx[i].innerHTML += '<a href="#' + anchor + '" class="anchor_link" title="Permalink">◊</a>';
//                     toc.innerHTML += '<li class="' + tag + '"><a href="#' + anchor + '">' + the_text + '</a></li>';
//                 }
//
//                 //console.log({ 'a': anchor, 'tag': tag, 'hx': hx[i] });
//
//                 if (tag === 'h1') {
//                     hx[i].innerHTML += '<a href="#" class="backAnchor" title="Topo">Voltar ao topo</a>';
//                 }
//             }
//             toc.style.display = 'block';
//         },
//         // Fazendo o "Voltar ao Topo" voltar ao topo ^^
//         stuff: function() {
//             $('a.backAnchor').live('click', function() {
//                 window.scrollTo(0, 0);
//                 return false;
//             });
//         },
//         // Configurando o syntax highlighter
//         syntax: function() {
//             SyntaxHighlighter.config.tagName = 'textarea';
//             SyntaxHighlighter.defaults['wrap-lines'] = false;
//             SyntaxHighlighter.defaults['auto-links'] = false;
//             SyntaxHighlighter.defaults['toolbar'] = false;
//             SyntaxHighlighter.defaults['tab-size'] = 4;
//             SyntaxHighlighter.all();
//         }
//     }
// };
//
// var UTIL = {
//     fire: function(func, funcname, args) {
//         var namespace = COMP; // indique aqui seu obj literal namespace
//         funcname = (funcname === undefined) ? 'init' : funcname;
//         if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function') {
//             namespace[func][funcname](args);
//         }
//     },
//     loadEvents: function() {
//         var bodyId = document.body.id;
//         // Primeiro o common.
//         UTIL.fire('common');
//         // Faça a todas as classes também.
//         $.each(document.body.className.split(/\s+/), function(i, classnm) {
//             UTIL.fire(classnm);
//             UTIL.fire(classnm, bodyId);
//         });
//         UTIL.fire('common', 'finalize');
//     }
// };
// $(document).ready(UTIL.loadEvents);


$(function() {
    smoothScroll(300);
});

function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

"use strict";
var COMPJ = {
    settings: {
        mobMenu: 770
    },
    common: {
        $body: {},
        init: function() {
            this.$body = COMPJ.util.$body, this.toc(), this.anchors()
        },
        toc: function() {
            for (var a, b, c, d, e = document.getElementById("toc"), f = $("h1, h2, h3, h4, h5", "section"), g = f.length, h = "", i = !1, j = /\w+/, k = "", l = 0, m = g; m > l; l++) b = f[l].tagName.toLowerCase(), d = "", "h2" === b && (k = j.exec(f[l].innerHTML), k = k[0].toLowerCase()), c = $.trim(f[l].innerHTML), a = k + "_" + c.replace(/\s+|\-/g, "_").replace(/[^A-Z0-9_]/gi, "").replace(/_+/g, "_").toLowerCase(), d += '<a href="#' + a + '" class="anchor_link js-here" title="Permalink">◊</a>', ("h1" === b || "h2" === b) && (h += '<li class="' + b + '"><a href="#' + a + '">' + c + "</a></li>"), "h1" === b && i === !0 && (d += '<a href="#" class="back-anchor" title="Top">Voltar ao Topo</a>'), "" !== d && (f[l].id = a, f[l].innerHTML += d), "h1" === b && (i = !0);
            e.innerHTML = h, e.style.display = "block"
        },
        anchors: function() {
            var a = COMPJ.util;
            this.$body.on("click", ".back-anchor", function() {
                return window.scrollTo(0, 0), window.location.hash = "", !1
            }), this.$body.on("click", ".js-here", function(b) {
                a.$body.hasClass("mob") && COMPJ.common.scrollNow(b)
            })
        },
        toggleMenu: function(a) {
            var b = COMPJ.util;
            b.$body.toggleClass("menu-open"), b.$body.hasClass("mob") && b.$body.on("click", "#toc a", COMPJ.common.scrollNow)
        },
        scrollNow: function(a) {
            a.preventDefault;
            var b = a.target.getAttribute("href");
            "#" === b[0] && $.scrollTo(b, {
                offset: -95,
                duration: 250
            })
        }
    },
    util: {
        $body: $("body"),
        settings: {},
        fire: function(a, b, c) {
            var d = COMPJ;
            b = "undefined" == typeof b ? "init" : b, "" !== a && d[a] && "function" == typeof d[a][b] && d[a][b](c)
        },
        loadEvents: function() {
            var a = COMPJ.util;
            a.settings = COMPJ.settings, $("html").removeClass("no-js"), window.addEventListener("resize", a.debounce(a.setLayout, 50)), FastClick.attach(document.body), a.fire("common"), a.$body.on("click", ".menu-button", COMPJ.common.toggleMenu), a.setLayout()
        },
        debounce: function(a, b, c) {
            var d;
            return function() {
                var e = this,
                    f = arguments,
                    g = function() {
                        d = null, c || a.apply(e, f)
                    },
                    h = c && !d;
                clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
            }
        },
        setLayout: function() {
            var a = COMPJ.util,
                b = window.innerWidth;
            b > a.settings.mobMenu ? (a.$body.removeClass("menu-open"), a.$body.hasClass("mob") && (a.$body.removeClass("mob"), a.$body.off("click", COMPJ.common.scrollNow))) : (a.$body.addClass("mob"), a.overlay())
        },
        overlay: function() {
            0 == $(".overlay").length && ($("body").append('<div class="overlay"></div>'), $(".overlay").on("click", function(a) {
                $("body").toggleClass("menu-open")
            }))
        }
    }
};
$(document).ready(COMPJ.util.loadEvents),
    function() {
        function a(b, d) {
            function e(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            }
            var f;
            if (d = d || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = d.touchBoundary || 10, this.layer = b, this.tapDelay = d.tapDelay || 200, this.tapTimeout = d.tapTimeout || 700, !a.notNeeded(b)) {
                for (var g = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
                c && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), b.addEventListener("mouseup", this.onMouse, !0)), b.addEventListener("click", this.onClick, !0), b.addEventListener("touchstart", this.onTouchStart, !1), b.addEventListener("touchmove", this.onTouchMove, !1), b.addEventListener("touchend", this.onTouchEnd, !1), b.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (b.removeEventListener = function(a, c, d) {
                    var e = Node.prototype.removeEventListener;
                    "click" === a ? e.call(b, a, c.hijacked || c, d) : e.call(b, a, c, d)
                }, b.addEventListener = function(a, c, d) {
                    var e = Node.prototype.addEventListener;
                    "click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function(a) {
                        a.propagationStopped || c(a)
                    }), d) : e.call(b, a, c, d)
                }), "function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click", function(a) {
                    f(a)
                }, !1), b.onclick = null)
            }
        }
        var b = navigator.userAgent.indexOf("Windows Phone") >= 0,
            c = navigator.userAgent.indexOf("Android") > 0 && !b,
            d = /iP(ad|hone|od)/.test(navigator.userAgent) && !b,
            e = d && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            f = d && /OS [6-7]_\d/.test(navigator.userAgent),
            g = navigator.userAgent.indexOf("BB10") > 0;
        a.prototype.needsClick = function(a) {
            switch (a.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (a.disabled) return !0;
                    break;
                case "input":
                    if (d && "file" === a.type || a.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(a.className)
        }, a.prototype.needsFocus = function(a) {
            switch (a.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !c;
                case "input":
                    switch (a.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !a.disabled && !a.readOnly;
                default:
                    return /\bneedsfocus\b/.test(a.className)
            }
        }, a.prototype.sendClick = function(a, b) {
            var c, d;
            document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
        }, a.prototype.determineEventType = function(a) {
            return c && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
        }, a.prototype.focus = function(a) {
            var b;
            d && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
        }, a.prototype.updateScrollParent = function(a) {
            var b, c;
            if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
                c = a;
                do {
                    if (c.scrollHeight > c.offsetHeight) {
                        b = c, a.fastClickScrollParent = c;
                        break
                    }
                    c = c.parentElement
                } while (c)
            }
            b && (b.fastClickLastScrollTop = b.scrollTop)
        }, a.prototype.getTargetElementFromEventTarget = function(a) {
            return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
        }, a.prototype.onTouchStart = function(a) {
            var b, c, f;
            if (a.targetTouches.length > 1) return !0;
            if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], d) {
                if (f = window.getSelection(), f.rangeCount && !f.isCollapsed) return !0;
                if (!e) {
                    if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                    this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0
        }, a.prototype.touchHasMoved = function(a) {
            var b = a.changedTouches[0],
                c = this.touchBoundary;
            return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
        }, a.prototype.onTouchMove = function(a) {
            return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
        }, a.prototype.findControl = function(a) {
            return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, a.prototype.onTouchEnd = function(a) {
            var b, g, h, i, j, k = this.targetElement;
            if (!this.trackingClick) return !0;
            if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, g = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, f && (j = a.changedTouches[0], k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), "label" === h) {
                if (b = this.findControl(k)) {
                    if (this.focus(k), c) return !1;
                    k = b
                }
            } else if (this.needsFocus(k)) return a.timeStamp - g > 100 || d && window.top !== window && "input" === h ? (this.targetElement = null, !1) : (this.focus(k), this.sendClick(k, a), d && "select" === h || (this.targetElement = null, a.preventDefault()), !1);
            return d && !e && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(k) || (a.preventDefault(), this.sendClick(k, a)), !1)
        }, a.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, a.prototype.onMouse = function(a) {
            return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
        }, a.prototype.onClick = function(a) {
            var b;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
        }, a.prototype.destroy = function() {
            var a = this.layer;
            c && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, a.notNeeded = function(a) {
            var b, d, e, f;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (d = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!c) return !0;
                if (b = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                    if (d > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (g && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
                if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 : (f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1)
        }, a.attach = function(b, c) {
            return new a(b, c)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return a
        }) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
    }(),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        function b(b) {
            return !b.nodeName || -1 !== a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }

        function c(b) {
            return a.isFunction(b) || a.isPlainObject(b) ? b : {
                top: b,
                left: b
            }
        }
        var d = a.scrollTo = function(b, c, d) {
            return a(window).scrollTo(b, c, d)
        };
        return d.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, a.fn.scrollTo = function(e, f, g) {
            "object" == typeof f && (g = f, f = 0), "function" == typeof g && (g = {
                onAfter: g
            }), "max" === e && (e = 9e9), g = a.extend({}, d.defaults, g), f = f || g.duration;
            var h = g.queue && g.axis.length > 1;
            return h && (f /= 2), g.offset = c(g.offset), g.over = c(g.over), this.each(function() {
                function i(b) {
                    var c = a.extend({}, g, {
                        queue: !0,
                        duration: f,
                        complete: b && function() {
                            b.call(l, n, g)
                        }
                    });
                    m.animate(o, c)
                }
                if (null !== e) {
                    var j, k = b(this),
                        l = k ? this.contentWindow || window : this,
                        m = a(l),
                        n = e,
                        o = {};
                    switch (typeof n) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(n)) {
                                n = c(n);
                                break
                            }
                            if (n = k ? a(n) : a(n, l), !n.length) return;
                        case "object":
                            (n.is || n.style) && (j = (n = a(n)).offset())
                    }
                    var p = a.isFunction(g.offset) && g.offset(l, n) || g.offset;
                    a.each(g.axis.split(""), function(a, b) {
                        var c = "x" === b ? "Left" : "Top",
                            e = c.toLowerCase(),
                            f = "scroll" + c,
                            q = m[f](),
                            r = d.max(l, b);
                        if (j) o[f] = j[e] + (k ? 0 : q - m.offset()[e]), g.margin && (o[f] -= parseInt(n.css("margin" + c), 10) || 0, o[f] -= parseInt(n.css("border" + c + "Width"), 10) || 0), o[f] += p[e] || 0, g.over[e] && (o[f] += n["x" === b ? "width" : "height"]() * g.over[e]);
                        else {
                            var s = n[e];
                            o[f] = s.slice && "%" === s.slice(-1) ? parseFloat(s) / 100 * r : s
                        }
                        g.limit && /^\d+$/.test(o[f]) && (o[f] = o[f] <= 0 ? 0 : Math.min(o[f], r)), !a && g.axis.length > 1 && (q === o[f] ? o = {} : h && (i(g.onAfterFirst), o = {}))
                    }), i(g.onAfter)
                }
            })
        }, d.max = function(c, d) {
            var e = "x" === d ? "Width" : "Height",
                f = "scroll" + e;
            if (!b(c)) return c[f] - a(c)[e.toLowerCase()]();
            var g = "client" + e,
                h = c.ownerDocument || c.document,
                i = h.documentElement,
                j = h.body;
            return Math.max(i[f], j[f]) - Math.min(i[g], j[g])
        }, a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
            get: function(b) {
                return a(b.elem)[b.prop]()
            },
            set: function(b) {
                var c = this.get(b);
                if (b.options.interrupt && b._last && b._last !== c) return a(b.elem).stop();
                var d = Math.round(b.now);
                c !== d && (a(b.elem)[b.prop](d), b._last = this.get(b))
            }
        }, d
    }),
    function(a) {
        function b() {}
        for (var c, d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","); c = d.pop();) a[c] = a[c] || b
    }(window.console = window.console || {}), window.requestAnimationFrame || (window.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
            window.setTimeout(a, 1e3 / 60)
        }
    }()), self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var Prism = function() {
    var a = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
        b = self.Prism = {
            util: {
                encode: function(a) {
                    return a instanceof c ? new c(a.type, b.util.encode(a.content), a.alias) : "Array" === b.util.type(a) ? a.map(b.util.encode) : a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                },
                type: function(a) {
                    return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]
                },
                clone: function(a) {
                    var c = b.util.type(a);
                    switch (c) {
                        case "Object":
                            var d = {};
                            for (var e in a) a.hasOwnProperty(e) && (d[e] = b.util.clone(a[e]));
                            return d;
                        case "Array":
                            return a.map(function(a) {
                                return b.util.clone(a)
                            })
                    }
                    return a
                }
            },
            languages: {
                extend: function(a, c) {
                    var d = b.util.clone(b.languages[a]);
                    for (var e in c) d[e] = c[e];
                    return d
                },
                insertBefore: function(a, c, d, e) {
                    e = e || b.languages;
                    var f = e[a];
                    if (2 == arguments.length) {
                        d = arguments[1];
                        for (var g in d) d.hasOwnProperty(g) && (f[g] = d[g]);
                        return f
                    }
                    var h = {};
                    for (var i in f)
                        if (f.hasOwnProperty(i)) {
                            if (i == c)
                                for (var g in d) d.hasOwnProperty(g) && (h[g] = d[g]);
                            h[i] = f[i]
                        }
                    return b.languages.DFS(b.languages, function(b, c) {
                        c === e[a] && b != a && (this[b] = h)
                    }), e[a] = h
                },
                DFS: function(a, c, d) {
                    for (var e in a) a.hasOwnProperty(e) && (c.call(a, e, a[e], d || e), "Object" === b.util.type(a[e]) ? b.languages.DFS(a[e], c) : "Array" === b.util.type(a[e]) && b.languages.DFS(a[e], c, e))
                }
            },
            highlightAll: function(a, c) {
                for (var d, e = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), f = 0; d = e[f++];) b.highlightElement(d, a === !0, c)
            },
            highlightElement: function(d, e, f) {
                for (var g, h, i = d; i && !a.test(i.className);) i = i.parentNode;
                if (i && (g = (i.className.match(a) || [, ""])[1], h = b.languages[g]), h) {
                    d.className = d.className.replace(a, "").replace(/\s+/g, " ") + " language-" + g, i = d.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(a, "").replace(/\s+/g, " ") + " language-" + g);
                    var j = d.textContent;
                    if (j) {
                        j = j.replace(/^(?:\r?\n|\r)/, "");
                        var k = {
                            element: d,
                            language: g,
                            grammar: h,
                            code: j
                        };
                        if (b.hooks.run("before-highlight", k), e && self.Worker) {
                            var l = new Worker(b.filename);
                            l.onmessage = function(a) {
                                k.highlightedCode = c.stringify(JSON.parse(a.data), g), b.hooks.run("before-insert", k), k.element.innerHTML = k.highlightedCode, f && f.call(k.element), b.hooks.run("after-highlight", k)
                            }, l.postMessage(JSON.stringify({
                                language: k.language,
                                code: k.code
                            }))
                        } else k.highlightedCode = b.highlight(k.code, k.grammar, k.language), b.hooks.run("before-insert", k), k.element.innerHTML = k.highlightedCode, f && f.call(d), b.hooks.run("after-highlight", k)
                    }
                }
            },
            highlight: function(a, d, e) {
                var f = b.tokenize(a, d);
                return c.stringify(b.util.encode(f), e)
            },
            tokenize: function(a, c) {
                var d = b.Token,
                    e = [a],
                    f = c.rest;
                if (f) {
                    for (var g in f) c[g] = f[g];
                    delete c.rest
                }
                a: for (var g in c)
                    if (c.hasOwnProperty(g) && c[g]) {
                        var h = c[g];
                        h = "Array" === b.util.type(h) ? h : [h];
                        for (var i = 0; i < h.length; ++i) {
                            var j = h[i],
                                k = j.inside,
                                l = !!j.lookbehind,
                                m = 0,
                                n = j.alias;
                            j = j.pattern || j;
                            for (var o = 0; o < e.length; o++) {
                                var p = e[o];
                                if (e.length > a.length) break a;
                                if (!(p instanceof d)) {
                                    j.lastIndex = 0;
                                    var q = j.exec(p);
                                    if (q) {
                                        l && (m = q[1].length);
                                        var r = q.index - 1 + m,
                                            q = q[0].slice(m),
                                            s = q.length,
                                            t = r + s,
                                            u = p.slice(0, r + 1),
                                            v = p.slice(t + 1),
                                            w = [o, 1];
                                        u && w.push(u);
                                        var x = new d(g, k ? b.tokenize(q, k) : q, n);
                                        w.push(x), v && w.push(v), Array.prototype.splice.apply(e, w)
                                    }
                                }
                            }
                        }
                    }
                return e
            },
            hooks: {
                all: {},
                add: function(a, c) {
                    var d = b.hooks.all;
                    d[a] = d[a] || [], d[a].push(c)
                },
                run: function(a, c) {
                    var d = b.hooks.all[a];
                    if (d && d.length)
                        for (var e, f = 0; e = d[f++];) e(c)
                }
            }
        },
        c = b.Token = function(a, b, c) {
            this.type = a, this.content = b, this.alias = c
        };
    if (c.stringify = function(a, d, e) {
            if ("string" == typeof a) return a;
            if ("Array" === b.util.type(a)) return a.map(function(b) {
                return c.stringify(b, d, a)
            }).join("");
            var f = {
                type: a.type,
                content: c.stringify(a.content, d, e),
                tag: "span",
                classes: ["token", a.type],
                attributes: {},
                language: d,
                parent: e
            };
            if ("comment" == f.type && (f.attributes.spellcheck = "true"), a.alias) {
                var g = "Array" === b.util.type(a.alias) ? a.alias : [a.alias];
                Array.prototype.push.apply(f.classes, g)
            }
            b.hooks.run("wrap", f);
            var h = "";
            for (var i in f.attributes) h += i + '="' + (f.attributes[i] || "") + '"';
            return "<" + f.tag + ' class="' + f.classes.join(" ") + '" ' + h + ">" + f.content + "</" + f.tag + ">"
        }, !self.document) return self.addEventListener ? (self.addEventListener("message", function(a) {
        var c = JSON.parse(a.data),
            d = c.language,
            e = c.code;
        self.postMessage(JSON.stringify(b.util.encode(b.tokenize(e, b.languages[d])))), self.close()
    }, !1), self.Prism) : self.Prism;
    var d = document.getElementsByTagName("script");
    return d = d[d.length - 1], d && (b.filename = d.src, document.addEventListener && !d.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", b.highlightAll)), self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?.+?\?>/,
    doctype: /<!DOCTYPE.+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[\w:-]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[\w-]+?:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /=|>|"/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[\w:-]+/,
                inside: {
                    namespace: /^[\w-]+?:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            punctuation: /[;:]/
        }
    },
    url: /url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/,
    string: /("|')(\\\n|\\?.)*?\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    punctuation: /[\{\};:]/,
    "function": /[-a-z0-9]+(?=\()/i
}, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
        inside: {
            tag: {
                pattern: /<style[\w\W]*?>|<\/style>/i,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.css
        },
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: /("|')(\\\n|\\?.)*?\1/,
    "class-name": {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": {
        pattern: /[a-z0-9_]+\(/i,
        inside: {
            punctuation: /\(/
        }
    },
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
    ignore: /&(lt|gt|amp);/i,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,
    "function": /(?!\d)[a-z0-9_$]+(?=\()/i
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
        inside: {
            tag: {
                pattern: /<script[\w\W]*?>|<\/script>/i,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.javascript
        },
        alias: "language-javascript"
    }
}), Prism.hooks.add("after-highlight", function(a) {
    var b = a.element.parentNode,
        c = /\s*\bline-numbers\b\s*/;
    if (b && /pre/i.test(b.nodeName) && (c.test(b.className) || c.test(a.element.className))) {
        c.test(a.element.className) && (a.element.className = a.element.className.replace(c, "")), c.test(b.className) || (b.className += " line-numbers");
        var d, e = 1 + a.code.split("\n").length,
            f = new Array(e);
        f = f.join("<span></span>"), d = document.createElement("span"), d.className = "line-numbers-rows", d.innerHTML = f, b.hasAttribute("data-start") && (b.style.counterReset = "linenumber " + (parseInt(b.getAttribute("data-start"), 10) - 1)), a.element.appendChild(d)
    }
});
