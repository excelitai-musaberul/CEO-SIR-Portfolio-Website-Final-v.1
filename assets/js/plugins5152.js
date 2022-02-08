(window.Modernizr = (function (a, b, c) {
	function x(a) {
		j.cssText = a;
	}
	function y(a, b) {
		return x(prefixes.join(a + ";") + (b || ""));
	}
	function z(a, b) {
		return typeof a === b;
	}
	function A(a, b) {
		return !!~("" + a).indexOf(b);
	}
	function B(a, b) {
		for (var d in a) {
			var e = a[d];
			if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
		}
		return !1;
	}
	function C(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f;
		}
		return !1;
	}
	function D(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1),
			e = (a + " " + n.join(d + " ") + d).split(" ");
		return z(b, "string") || z(b, "undefined") ? B(e, b) : ((e = (a + " " + o.join(d + " ") + d).split(" ")), C(e, b, c));
	}
	var d = "2.6.2",
		e = {},
		f = !0,
		g = b.documentElement,
		h = "modernizr",
		i = b.createElement(h),
		j = i.style,
		k,
		l = {}.toString,
		m = "Webkit Moz O ms",
		n = m.split(" "),
		o = m.toLowerCase().split(" "),
		p = {},
		q = {},
		r = {},
		s = [],
		t = s.slice,
		u,
		v = {}.hasOwnProperty,
		w;
	!z(v, "undefined") && !z(v.call, "undefined")
		? (w = function (a, b) {
			return v.call(a, b);
		})
		: (w = function (a, b) {
			return b in a && z(a.constructor.prototype[b], "undefined");
		}),
		Function.prototype.bind ||
		(Function.prototype.bind = function (b) {
			var c = this;
			if (typeof c != "function") throw new TypeError();
			var d = t.call(arguments, 1),
				e = function () {
					if (this instanceof e) {
						var a = function () { };
						a.prototype = c.prototype;
						var f = new a(),
							g = c.apply(f, d.concat(t.call(arguments)));
						return Object(g) === g ? g : f;
					}
					return c.apply(b, d.concat(t.call(arguments)));
				};
			return e;
		}),
		(p.csstransitions = function () {
			return D("transition");
		});
	for (var E in p) w(p, E) && ((u = E.toLowerCase()), (e[u] = p[E]()), s.push((e[u] ? "" : "no-") + u));
	return (
		(e.addTest = function (a, b) {
			if (typeof a == "object") for (var d in a) w(a, d) && e.addTest(d, a[d]);
			else {
				a = a.toLowerCase();
				if (e[a] !== c) return e;
				(b = typeof b == "function" ? b() : b), typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), (e[a] = b);
			}
			return e;
		}),
		x(""),
		(i = k = null),
		(function (a, b) {
			function k(a, b) {
				var c = a.createElement("p"),
					d = a.getElementsByTagName("head")[0] || a.documentElement;
				return (c.innerHTML = "x<style>" + b + "</style>"), d.insertBefore(c.lastChild, d.firstChild);
			}
			function l() {
				var a = r.elements;
				return typeof a == "string" ? a.split(" ") : a;
			}
			function m(a) {
				var b = i[a[g]];
				return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
			}
			function n(a, c, f) {
				c || (c = b);
				if (j) return c.createElement(a);
				f || (f = m(c));
				var g;
				return f.cache[a] ? (g = f.cache[a].cloneNode()) : e.test(a) ? (g = (f.cache[a] = f.createElem(a)).cloneNode()) : (g = f.createElem(a)), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
			}
			function o(a, c) {
				a || (a = b);
				if (j) return a.createDocumentFragment();
				c = c || m(a);
				var d = c.frag.cloneNode(),
					e = 0,
					f = l(),
					g = f.length;
				for (; e < g; e++) d.createElement(f[e]);
				return d;
			}
			function p(a, b) {
				b.cache || ((b.cache = {}), (b.createElem = a.createElement), (b.createFrag = a.createDocumentFragment), (b.frag = b.createFrag())),
					(a.createElement = function (c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c);
					}),
					(a.createDocumentFragment = Function(
						"h,f",
						"return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
						l()
							.join()
							.replace(/\w+/g, function (a) {
								return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
							}) +
						");return n}"
					)(r, b.frag));
			}
			function q(a) {
				a || (a = b);
				var c = m(a);
				return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a;
			}
			var c = a.html5 || {},
				d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
				e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
				f,
				g = "_html5shiv",
				h = 0,
				i = {},
				j;
			(function () {
				try {
					var a = b.createElement("a");
					(a.innerHTML = "<xyz></xyz>"),
						(f = "hidden" in a),
						(j =
							a.childNodes.length == 1 ||
							(function () {
								b.createElement("a");
								var a = b.createDocumentFragment();
								return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
							})());
				} catch (c) {
					(f = !0), (j = !0);
				}
			})();
			var r = {
				elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
				shivCSS: c.shivCSS !== !1,
				supportsUnknownElements: j,
				shivMethods: c.shivMethods !== !1,
				type: "default",
				shivDocument: q,
				createElement: n,
				createDocumentFragment: o,
			};
			(a.html5 = r), q(b);
		})(this, b),
		(e._version = d),
		(e._domPrefixes = o),
		(e._cssomPrefixes = n),
		(e.testProp = function (a) {
			return B([a]);
		}),
		(e.testAllProps = D),
		(g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : "")),
		e
	);
})(this, this.document)),
	(function (a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a);
		}
		function e(a) {
			return "string" == typeof a;
		}
		function f() { }
		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
		}
		function h() {
			var a = p.shift();
			(q = 1),
				a
					? a.t
						? m(function () {
							("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
						}, 0)
						: (a(), h())
					: (q = 0);
		}
		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if (!o && g(l.readyState) && ((u.r = o = 1), !q && h(), (l.onload = l.onreadystatechange = null), b)) {
					"img" != a &&
						m(function () {
							t.removeChild(l);
						}, 50);
					for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = { t: d, s: c, e: f, a: i, x: j };
			1 === y[c] && ((r = 1), (y[c] = [])),
				"object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
				(l.width = l.height = "0"),
				(l.onerror = l.onload = l.onreadystatechange = function () {
					k.call(this, r);
				}),
				p.splice(e, 0, u),
				"img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
		}
		function j(a, b, c, d, f) {
			return (q = 0), (b = b || "j"), e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
		}
		function k() {
			var a = B;
			return (a.loader = { load: j, i: 0 }), a;
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w =
				Array.isArray ||
				function (a) {
					return "[object Array]" == o.call(a);
				},
			x = [],
			y = {},
			z = {
				timeout: function (a, b) {
					return b.length && (a.timeout = b[0]), a;
				},
			},
			A,
			B;
		(B = function (a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = { url: c, origUrl: c, prefixes: a },
					e,
					f,
					g;
				for (f = 0; f < d; f++) (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
				for (f = 0; f < b; f++) c = x[f](c);
				return c;
			}
			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(),
					i.bypass ||
					(e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
						i.instead
							? i.instead(a, e, f, g, h)
							: (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
								f.load(i.url, i.forceCSS || (!i.forceJS && "css" == i.url.split(".").pop().split("?").shift()) ? "c" : c, i.noexec, i.attrs, i.timeout),
								(d(e) || d(j)) &&
								f.load(function () {
									k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), (y[i.url] = 2);
								})));
			}
			function h(a, b) {
				function c(a, c) {
					if (a) {
						if (e(a))
							c ||
								(j = function () {
									var a = [].slice.call(arguments);
									k.apply(this, a), l();
								}),
								g(a, j, b, 0, h);
						else if (Object(a) === a)
							for (n in ((m = (function () {
								var b = 0,
									c;
								for (c in a) a.hasOwnProperty(c) && b++;
								return b;
							})()),
								a))
								a.hasOwnProperty(n) &&
									(!c &&
										!--m &&
										(d(j)
											? (j = function () {
												var a = [].slice.call(arguments);
												k.apply(this, a), l();
											})
											: (j[n] = (function (a) {
												return function () {
													var b = [].slice.call(arguments);
													a && a.apply(this, b), l();
												};
											})(k[n]))),
										g(a[n], j, b, n, h));
					} else !c && l();
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m,
					n;
				c(h ? a.yep : a.nope, !!i), i && c(i);
			}
			var i,
				j,
				l = this.yepnope.loader;
			if (e(a)) g(a, 0, l, 0);
			else if (w(a)) for (i = 0; i < a.length; i++) (j = a[i]), e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l);
		}),
			(B.addPrefix = function (a, b) {
				z[a] = b;
			}),
			(B.addFilter = function (a) {
				x.push(a);
			}),
			(B.errorTimeout = 1e4),
			null == b.readyState &&
			b.addEventListener &&
			((b.readyState = "loading"),
				b.addEventListener(
					"DOMContentLoaded",
					(A = function () {
						b.removeEventListener("DOMContentLoaded", A, 0), (b.readyState = "complete");
					}),
					0
				)),
			(a.yepnope = k()),
			(a.yepnope.executeStack = h),
			(a.yepnope.injectJs = function (a, c, d, e, i, j) {
				var k = b.createElement("script"),
					l,
					o,
					e = e || B.errorTimeout;
				k.src = a;
				for (o in d) k.setAttribute(o, d[o]);
				(c = j ? h : c || f),
					(k.onreadystatechange = k.onload = function () {
						!l && g(k.readyState) && ((l = 1), c(), (k.onload = k.onreadystatechange = null));
					}),
					m(function () {
						l || ((l = 1), c(1));
					}, e),
					i ? k.onload() : n.parentNode.insertBefore(k, n);
			}),
			(a.yepnope.injectCss = function (a, c, d, e, g, i) {
				var e = b.createElement("link"),
					j,
					c = i ? h : c || f;
				(e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
				for (j in d) e.setAttribute(j, d[j]);
				g || (n.parentNode.insertBefore(e, n), m(c, 0));
			});
	})(this, document),
	(Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0));
	});
/*! jQuery.easing*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
	},
	easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a;
	},
	easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a;
	},
	easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return (h / 2) * f * f + a;
		}
		return (-h / 2) * (--f * (f - 2) - 1) + a;
	},
	easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a;
	},
	easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a;
	},
	easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return (h / 2) * f * f * f + a;
		}
		return (h / 2) * ((f -= 2) * f * f + 2) + a;
	},
	easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a;
	},
	easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a;
	},
	easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return (h / 2) * f * f * f * f + a;
		}
		return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
	},
	easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a;
	},
	easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
	},
	easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return (h / 2) * f * f * f * f * f + a;
		}
		return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
	},
	easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
	},
	easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin((f / g) * (Math.PI / 2)) + a;
	},
	easeInOutSine: function (e, f, a, h, g) {
		return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
	},
	easeInExpo: function (e, f, a, h, g) {
		return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
	},
	easeOutExpo: function (e, f, a, h, g) {
		return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
	},
	easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a;
		}
		if (f == g) {
			return a + h;
		}
		if ((f /= g / 2) < 1) {
			return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
		}
		return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
	},
	easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
	},
	easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
	},
	easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
		}
		return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
	},
	easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e;
		}
		if ((h /= k) == 1) {
			return e + l;
		}
		if (!j) {
			j = k * 0.3;
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4;
		} else {
			var i = (j / (2 * Math.PI)) * Math.asin(l / g);
		}
		return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j)) + e;
	},
	easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e;
		}
		if ((h /= k) == 1) {
			return e + l;
		}
		if (!j) {
			j = k * 0.3;
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4;
		} else {
			var i = (j / (2 * Math.PI)) * Math.asin(l / g);
		}
		return g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) + l + e;
	},
	easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e;
		}
		if ((h /= k / 2) == 2) {
			return e + l;
		}
		if (!j) {
			j = k * (0.3 * 1.5);
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4;
		} else {
			var i = (j / (2 * Math.PI)) * Math.asin(l / g);
		}
		if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j)) + e;
		}
		return g * Math.pow(2, -10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) * 0.5 + l + e;
	},
	easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158;
		}
		return i * (f /= h) * f * ((g + 1) * f - g) + a;
	},
	easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158;
		}
		return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
	},
	easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158;
		}
		if ((f /= h / 2) < 1) {
			return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
		}
		return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
	},
	easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
	},
	easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < 1 / 2.75) {
			return h * (7.5625 * f * f) + a;
		} else {
			if (f < 2 / 2.75) {
				return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
			} else {
				if (f < 2.5 / 2.75) {
					return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
				} else {
					return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
				}
			}
		}
	},
	easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
	},
});

/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!(function (a, b, c, d) {
	"use strict";
	function e(b, d) {
		if (((this.el = b), (this.$el = a(b)), (this.s = a.extend({}, f, d)), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length))
			throw "When using dynamic mode, you must also define dynamicEl as an Array.";
		return (
			(this.modules = {}),
			(this.lGalleryOn = !1),
			(this.lgBusy = !1),
			(this.hideBartimeout = !1),
			(this.isTouch = "ontouchstart" in c.documentElement),
			this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
			this.s.dynamic
				? (this.$items = this.s.dynamicEl)
				: "this" === this.s.selector
					? (this.$items = this.$el)
					: "" !== this.s.selector
						? this.s.selectWithin
							? (this.$items = a(this.s.selectWithin).find(this.s.selector))
							: (this.$items = this.$el.find(a(this.s.selector)))
						: (this.$items = this.$el.children()),
			(this.$slide = ""),
			(this.$outer = ""),
			this.init(),
			this
		);
	}
	var f = {
		mode: "lg-slide",
		cssEasing: "ease",
		easing: "linear",
		speed: 600,
		height: "100%",
		width: "100%",
		addClass: "",
		startClass: "lg-start-zoom",
		backdropDuration: 150,
		hideBarsDelay: 6e3,
		useLeft: !1,
		closable: !0,
		loop: !0,
		escKey: !0,
		keyPress: !0,
		controls: !0,
		slideEndAnimatoin: !0,
		hideControlOnEnd: !1,
		mousewheel: !0,
		getCaptionFromTitleOrAlt: !0,
		appendSubHtmlTo: ".lg-sub-html",
		subHtmlSelectorRelative: !1,
		preload: 1,
		showAfterLoad: !0,
		selector: "",
		selectWithin: "",
		nextHtml: "",
		prevHtml: "",
		index: !1,
		iframeMaxWidth: "100%",
		download: !0,
		counter: !0,
		appendCounterTo: ".lg-toolbar",
		swipeThreshold: 50,
		enableSwipe: !0,
		enableDrag: !0,
		dynamic: !1,
		dynamicEl: [],
		galleryId: 1,
	};
	(e.prototype.init = function () {
		var c = this;
		c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
		var d = b.location.hash;
		d.indexOf("lg=" + this.s.galleryId) > 0 &&
			((c.index = parseInt(d.split("&slide=")[1], 10)),
				a("body").addClass("lg-from-hash"),
				a("body").hasClass("lg-on") ||
				(setTimeout(function () {
					c.build(c.index);
				}),
					a("body").addClass("lg-on"))),
			c.s.dynamic
				? (c.$el.trigger("onBeforeOpen.lg"),
					(c.index = c.s.index || 0),
					a("body").hasClass("lg-on") ||
					setTimeout(function () {
						c.build(c.index), a("body").addClass("lg-on");
					}))
				: c.$items.on("click.lgcustom", function (b) {
					try {
						b.preventDefault(), b.preventDefault();
					} catch (a) {
						b.returnValue = !1;
					}
					c.$el.trigger("onBeforeOpen.lg"), (c.index = c.s.index || c.$items.index(this)), a("body").hasClass("lg-on") || (c.build(c.index), a("body").addClass("lg-on"));
				});
	}),
		(e.prototype.build = function (b) {
			var c = this;
			c.structure(),
				a.each(a.fn.lightGallery.modules, function (b) {
					c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
				}),
				c.slide(b, !1, !1),
				c.s.keyPress && c.keyPress(),
				c.$items.length > 1 &&
				(c.arrow(),
					setTimeout(function () {
						c.enableDrag(), c.enableSwipe();
					}, 50),
					c.s.mousewheel && c.mousewheel()),
				c.counter(),
				c.closeGallery(),
				c.$el.trigger("onAfterOpen.lg"),
				c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
					c.$outer.removeClass("lg-hide-items"),
						clearTimeout(c.hideBartimeout),
						(c.hideBartimeout = setTimeout(function () {
							c.$outer.addClass("lg-hide-items");
						}, c.s.hideBarsDelay));
				});
		}),
		(e.prototype.structure = function () {
			var c,
				d = "",
				e = "",
				f = 0,
				g = "",
				h = this;
			for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), f = 0; f < this.$items.length; f++) d += '<div class="lg-item"></div>';
			if (
				(this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"),
					".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'),
					(c =
						'<div class="lg-outer ' +
						this.s.addClass +
						" " +
						this.s.startClass +
						'"><div class="lg" style="width:' +
						this.s.width +
						"; height:" +
						this.s.height +
						'"><div class="lg-inner">' +
						d +
						'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' +
						e +
						g +
						"</div></div>"),
					a("body").append(c),
					(this.$outer = a(".lg-outer")),
					(this.$slide = this.$outer.find(".lg-item")),
					this.s.useLeft ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide")) : this.$outer.addClass("lg-use-css3"),
					h.setTop(),
					a(b).on("resize.lg orientationchange.lg", function () {
						setTimeout(function () {
							h.setTop();
						}, 100);
					}),
					this.$slide.eq(this.index).addClass("lg-current"),
					this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
					this.$outer.addClass(this.s.mode),
					this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"),
					this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
					this.doCss())
			) {
				var i = this.$outer.find(".lg-inner");
				i.css("transition-timing-function", this.s.cssEasing), i.css("transition-duration", this.s.speed + "ms");
			}
			a(".lg-backdrop").addClass("in"),
				setTimeout(function () {
					h.$outer.addClass("lg-visible");
				}, this.s.backdropDuration),
				this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
				(this.prevScrollTop = a(b).scrollTop());
		}),
		(e.prototype.setTop = function () {
			if ("100%" !== this.s.height) {
				var c = a(b).height(),
					d = (c - parseInt(this.s.height, 10)) / 2,
					e = this.$outer.find(".lg");
				c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px");
			}
		}),
		(e.prototype.doCss = function () {
			var a = function () {
				var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
					b = c.documentElement,
					d = 0;
				for (d = 0; d < a.length; d++) if (a[d] in b.style) return !0;
			};
			return !!a();
		}),
		(e.prototype.isVideo = function (a, b) {
			var c;
			if (((c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html")), !a && c)) return { html5: !0 };
			var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
				e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
				f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
				g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
			return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : g ? { vk: g } : void 0;
		}),
		(e.prototype.counter = function () {
			this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>");
		}),
		(e.prototype.addHtml = function (b) {
			var c,
				d,
				e = null;
			if (
				(this.s.dynamic
					? this.s.dynamicEl[b].subHtmlUrl
						? (c = this.s.dynamicEl[b].subHtmlUrl)
						: (e = this.s.dynamicEl[b].subHtml)
					: ((d = this.$items.eq(b)),
						d.attr("data-sub-html-url") ? (c = d.attr("data-sub-html-url")) : ((e = d.attr("data-sub-html")), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))),
					!c)
			)
				if ("undefined" != typeof e && null !== e) {
					var f = e.substring(0, 1);
					("." !== f && "#" !== f) || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html());
				} else e = "";
			".lg-sub-html" === this.s.appendSubHtmlTo ? (c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e)) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e),
				"undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),
				this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
		}),
		(e.prototype.preload = function (a) {
			var b = 1,
				c = 1;
			for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
			for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0);
		}),
		(e.prototype.loadContent = function (c, d, e) {
			var f,
				g,
				h,
				i,
				j,
				k,
				l = this,
				m = !1,
				n = function (c) {
					for (var d = [], e = [], f = 0; f < c.length; f++) {
						var h = c[f].split(" ");
						"" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1]);
					}
					for (var i = a(b).width(), j = 0; j < d.length; j++)
						if (parseInt(d[j], 10) > i) {
							g = e[j];
							break;
						}
				};
			if (l.s.dynamic) {
				if ((l.s.dynamicEl[c].poster && ((m = !0), (h = l.s.dynamicEl[c].poster)), (k = l.s.dynamicEl[c].html), (g = l.s.dynamicEl[c].src), l.s.dynamicEl[c].responsive)) {
					var o = l.s.dynamicEl[c].responsive.split(",");
					n(o);
				}
				(i = l.s.dynamicEl[c].srcset), (j = l.s.dynamicEl[c].sizes);
			} else {
				if (
					(l.$items.eq(c).attr("data-poster") && ((m = !0), (h = l.$items.eq(c).attr("data-poster"))),
						(k = l.$items.eq(c).attr("data-html")),
						(g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src")),
						l.$items.eq(c).attr("data-responsive"))
				) {
					var p = l.$items.eq(c).attr("data-responsive").split(",");
					n(p);
				}
				(i = l.$items.eq(c).attr("data-srcset")), (j = l.$items.eq(c).attr("data-sizes"));
			}
			var q = !1;
			l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
			var r = l.isVideo(g, c);
			if (!l.$slide.eq(c).hasClass("lg-loaded")) {
				if (q)
					l.$slide
						.eq(c)
						.prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>');
				else if (m) {
					var s = "";
					(s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5"),
						l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>');
				} else
					r
						? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [c, g, k]))
						: l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');
				if ((l.$el.trigger("onAferAppendSlide.lg", [c]), (f = l.$slide.eq(c).find(".lg-object")), j && f.attr("sizes", j), i)) {
					f.attr("srcset", i);
					try {
						picturefill({ elements: [f[0]] });
					} catch (a) {
						console.error("Make sure you have included Picturefill version 2");
					}
				}
				".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c), l.$slide.eq(c).addClass("lg-loaded");
			}
			l.$slide
				.eq(c)
				.find(".lg-object")
				.on("load.lg error.lg", function () {
					var b = 0;
					e && !a("body").hasClass("lg-from-hash") && (b = e),
						setTimeout(function () {
							l.$slide.eq(c).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [c, e || 0]);
						}, b);
				}),
				r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"),
				d === !0 &&
				(l.$slide.eq(c).hasClass("lg-complete")
					? l.preload(c)
					: l.$slide
						.eq(c)
						.find(".lg-object")
						.on("load.lg error.lg", function () {
							l.preload(c);
						}));
		}),
		(e.prototype.slide = function (b, c, d) {
			var e = this.$outer.find(".lg-current").index(),
				f = this;
			if (!f.lGalleryOn || e !== b) {
				var g = this.$slide.length,
					h = f.lGalleryOn ? this.s.speed : 0,
					i = !1,
					j = !1;
				if (!f.lgBusy) {
					if (this.s.download) {
						var k;
						(k = f.s.dynamic
							? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src)
							: "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src"))),
							k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download");
					}
					if (
						(this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]),
							(f.lgBusy = !0),
							clearTimeout(f.hideBartimeout),
							".lg-sub-html" === this.s.appendSubHtmlTo &&
							setTimeout(function () {
								f.addHtml(b);
							}, h),
							this.arrowDisable(b),
							c)
					) {
						var l = b - 1,
							m = b + 1;
						0 === b && e === g - 1 ? ((m = 0), (l = g - 1)) : b === g - 1 && 0 === e && ((m = 0), (l = g - 1)),
							this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),
							f.$slide.eq(l).addClass("lg-prev-slide"),
							f.$slide.eq(m).addClass("lg-next-slide"),
							f.$slide.eq(b).addClass("lg-current");
					} else
						f.$outer.addClass("lg-no-trans"),
							this.$slide.removeClass("lg-prev-slide lg-next-slide"),
							b < e ? ((j = !0), 0 !== b || e !== g - 1 || d || ((j = !1), (i = !0))) : b > e && ((i = !0), b !== g - 1 || 0 !== e || d || ((j = !0), (i = !1))),
							j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")),
							setTimeout(function () {
								f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans");
							}, 50);
					f.lGalleryOn
						? (setTimeout(function () {
							f.loadContent(b, !0, 0);
						}, this.s.speed + 50),
							setTimeout(function () {
								(f.lgBusy = !1), f.$el.trigger("onAfterSlide.lg", [e, b, c, d]);
							}, this.s.speed))
						: (f.loadContent(b, !0, f.s.backdropDuration), (f.lgBusy = !1), f.$el.trigger("onAfterSlide.lg", [e, b, c, d])),
						(f.lGalleryOn = !0),
						this.s.counter && a("#lg-counter-current").text(b + 1);
				}
			}
		}),
		(e.prototype.goToNextSlide = function (a) {
			var b = this;
			b.lgBusy ||
				(b.index + 1 < b.$slide.length
					? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1))
					: b.s.loop
						? ((b.index = 0), b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1))
						: b.s.slideEndAnimatoin &&
						(b.$outer.addClass("lg-right-end"),
							setTimeout(function () {
								b.$outer.removeClass("lg-right-end");
							}, 400)));
		}),
		(e.prototype.goToPrevSlide = function (a) {
			var b = this;
			b.lgBusy ||
				(b.index > 0
					? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1))
					: b.s.loop
						? ((b.index = b.$items.length - 1), b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1))
						: b.s.slideEndAnimatoin &&
						(b.$outer.addClass("lg-left-end"),
							setTimeout(function () {
								b.$outer.removeClass("lg-left-end");
							}, 400)));
		}),
		(e.prototype.keyPress = function () {
			var c = this;
			this.$items.length > 1 &&
				a(b).on("keyup.lg", function (a) {
					c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()));
				}),
				a(b).on("keydown.lg", function (a) {
					c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy());
				});
		}),
		(e.prototype.arrow = function () {
			var a = this;
			this.$outer.find(".lg-prev").on("click.lg", function () {
				a.goToPrevSlide();
			}),
				this.$outer.find(".lg-next").on("click.lg", function () {
					a.goToNextSlide();
				});
		}),
		(e.prototype.arrowDisable = function (a) {
			!this.s.loop &&
				this.s.hideControlOnEnd &&
				(a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"),
					a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"));
		}),
		(e.prototype.setTranslate = function (a, b, c) {
			this.s.useLeft ? a.css("left", b) : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
		}),
		(e.prototype.touchMove = function (b, c) {
			var d = c - b;
			Math.abs(d) > 15 &&
				(this.$outer.addClass("lg-dragging"),
					this.setTranslate(this.$slide.eq(this.index), d, 0),
					this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0),
					this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0));
		}),
		(e.prototype.touchEnd = function (a) {
			var b = this;
			"lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
				this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"),
				setTimeout(function () {
					b.$outer.removeClass("lg-dragging"),
						a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
						b.$slide.removeAttr("style");
				}),
				setTimeout(function () {
					b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide");
				}, b.s.speed + 100);
		}),
		(e.prototype.enableSwipe = function () {
			var a = this,
				b = 0,
				c = 0,
				d = !1;
			a.s.enableSwipe &&
				a.isTouch &&
				a.doCss() &&
				(a.$slide.on("touchstart.lg", function (c) {
					a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), (b = c.originalEvent.targetTouches[0].pageX));
				}),
					a.$slide.on("touchmove.lg", function (e) {
						a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), (c = e.originalEvent.targetTouches[0].pageX), a.touchMove(b, c), (d = !0));
					}),
					a.$slide.on("touchend.lg", function () {
						a.$outer.hasClass("lg-zoomed") || (d ? ((d = !1), a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"));
					}));
		}),
		(e.prototype.enableDrag = function () {
			var c = this,
				d = 0,
				e = 0,
				f = !1,
				g = !1;
			c.s.enableDrag &&
				!c.isTouch &&
				c.doCss() &&
				(c.$slide.on("mousedown.lg", function (b) {
					c.$outer.hasClass("lg-zoomed") ||
						((a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) &&
							(b.preventDefault(),
								c.lgBusy || (c.manageSwipeClass(), (d = b.pageX), (f = !0), (c.$outer.scrollLeft += 1), (c.$outer.scrollLeft -= 1), c.$outer.removeClass("lg-grab").addClass("lg-grabbing"), c.$el.trigger("onDragstart.lg"))));
				}),
					a(b).on("mousemove.lg", function (a) {
						f && ((g = !0), (e = a.pageX), c.touchMove(d, e), c.$el.trigger("onDragmove.lg"));
					}),
					a(b).on("mouseup.lg", function (b) {
						g ? ((g = !1), c.touchEnd(e - d), c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"),
							f && ((f = !1), c.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
					}));
		}),
		(e.prototype.manageSwipeClass = function () {
			var a = this.index + 1,
				b = this.index - 1,
				c = this.$slide.length;
			this.s.loop && (0 === this.index ? (b = c - 1) : this.index === c - 1 && (a = 0)),
				this.$slide.removeClass("lg-next-slide lg-prev-slide"),
				b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
				this.$slide.eq(a).addClass("lg-next-slide");
		}),
		(e.prototype.mousewheel = function () {
			var a = this;
			a.$outer.on("mousewheel.lg", function (b) {
				b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault());
			});
		}),
		(e.prototype.closeGallery = function () {
			var b = this,
				c = !1;
			this.$outer.find(".lg-close").on("click.lg", function () {
				b.destroy();
			}),
				b.s.closable &&
				(b.$outer.on("mousedown.lg", function (b) {
					c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"));
				}),
					b.$outer.on("mouseup.lg", function (d) {
						(a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || (a(d.target).is(".lg-img-wrap") && c)) && (b.$outer.hasClass("lg-dragging") || b.destroy());
					}));
		}),
		(e.prototype.destroy = function (c) {
			var d = this;
			c || d.$el.trigger("onBeforeClose.lg"),
				a(b).scrollTop(d.prevScrollTop),
				c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(d.el, "lightGallery")),
				this.$el.off(".lg.tm"),
				a.each(a.fn.lightGallery.modules, function (a) {
					d.modules[a] && d.modules[a].destroy();
				}),
				(this.lGalleryOn = !1),
				clearTimeout(d.hideBartimeout),
				(this.hideBartimeout = !1),
				a(b).off(".lg"),
				a("body").removeClass("lg-on lg-from-hash"),
				d.$outer && d.$outer.removeClass("lg-visible"),
				a(".lg-backdrop").removeClass("in"),
				setTimeout(function () {
					d.$outer && d.$outer.remove(), a(".lg-backdrop").remove(), c || d.$el.trigger("onCloseAfter.lg");
				}, d.s.backdropDuration + 50);
		}),
		(a.fn.lightGallery = function (b) {
			return this.each(function () {
				if (a.data(this, "lightGallery"))
					try {
						a(this).data("lightGallery").init();
					} catch (a) {
						console.error("lightGallery has not initiated properly");
					}
				else a.data(this, "lightGallery", new e(this, b));
			});
		}),
		(a.fn.lightGallery.modules = {});
})(jQuery, window, document);
/*! lg-zoom - v1.0.4 - 2016-12-20
 * http://sachinchoolur.github.io/lightGallery
 * Copyright (c) 2016 Sachin N; Licensed GPLv3 */
!(function (a, b) {
	"function" == typeof define && define.amd
		? define(["jquery"], function (a) {
			return b(a);
		})
		: "object" == typeof exports
			? (module.exports = b(require("jquery")))
			: b(jQuery);
})(this, function (a) {
	!(function () {
		"use strict";
		var b = function () {
			var a = !1,
				b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
			return b && parseInt(b[2], 10) < 54 && (a = !0), a;
		},
			c = { scale: 1, zoom: !0, actualSize: !0, enableZoomAfter: 300, useLeftForZoom: b() },
			d = function (b) {
				return (
					(this.core = a(b).data("lightGallery")),
					(this.core.s = a.extend({}, c, this.core.s)),
					this.core.s.zoom && this.core.doCss() && (this.init(), (this.zoomabletimeout = !1), (this.pageX = a(window).width() / 2), (this.pageY = a(window).height() / 2 + a(window).scrollTop())),
					this
				);
			};
		(d.prototype.init = function () {
			var b = this,
				c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
			b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
				b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"),
				this.core.$outer.find(".lg-toolbar").append(c),
				b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
					var f = b.core.s.enableZoomAfter + e;
					a("body").hasClass("lg-from-hash") && e ? (f = 0) : a("body").removeClass("lg-from-hash"),
						(b.zoomabletimeout = setTimeout(function () {
							b.core.$slide.eq(d).addClass("lg-zoomable");
						}, f + 30));
				});
			var d = 1,
				e = function (c) {
					var e,
						f,
						d = b.core.$outer.find(".lg-current .lg-image"),
						g = (a(window).width() - d.prop("offsetWidth")) / 2,
						h = (a(window).height() - d.prop("offsetHeight")) / 2 + a(window).scrollTop();
					(e = b.pageX - g), (f = b.pageY - h);
					var i = (c - 1) * e,
						j = (c - 1) * f;
					d.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c),
						b.core.s.useLeftForZoom
							? d
								.parent()
								.css({ left: -i + "px", top: -j + "px" })
								.attr("data-x", i)
								.attr("data-y", j)
							: d
								.parent()
								.css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)")
								.attr("data-x", i)
								.attr("data-y", j);
				},
				f = function () {
					d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d);
				},
				g = function (c, e, g, h) {
					var j,
						i = e.prop("offsetWidth");
					j = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || i : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || i;
					var k;
					b.core.$outer.hasClass("lg-zoomed") ? (d = 1) : j > i && ((k = j / i), (d = k || 2)),
						h
							? ((b.pageX = a(window).width() / 2), (b.pageY = a(window).height() / 2 + a(window).scrollTop()))
							: ((b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX), (b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY)),
						f(),
						setTimeout(function () {
							b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
						}, 10);
				},
				h = !1;
			b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
				var d = b.core.$slide.eq(c).find(".lg-image");
				d.on("dblclick", function (a) {
					g(a, d, c);
				}),
					d.on("touchstart", function (a) {
						h
							? (clearTimeout(h), (h = null), g(a, d, c))
							: (h = setTimeout(function () {
								h = null;
							}, 300)),
							a.preventDefault();
					});
			}),
				a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
					(b.pageX = a(window).width() / 2), (b.pageY = a(window).height() / 2 + a(window).scrollTop()), e(d);
				}),
				a("#lg-zoom-out").on("click.lg", function () {
					b.core.$outer.find(".lg-current .lg-image").length && ((d -= b.core.s.scale), f());
				}),
				a("#lg-zoom-in").on("click.lg", function () {
					b.core.$outer.find(".lg-current .lg-image").length && ((d += b.core.s.scale), f());
				}),
				a("#lg-actual-size").on("click.lg", function (a) {
					g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0);
				}),
				b.core.$el.on("onBeforeSlide.lg.tm", function () {
					(d = 1), b.resetZoom();
				}),
				b.core.isTouch || b.zoomDrag(),
				b.core.isTouch && b.zoomSwipe();
		}),
			(d.prototype.resetZoom = function () {
				this.core.$outer.removeClass("lg-zoomed"),
					this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),
					this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
					(this.pageX = a(window).width() / 2),
					(this.pageY = a(window).height() / 2 + a(window).scrollTop());
			}),
			(d.prototype.zoomSwipe = function () {
				var a = this,
					b = {},
					c = {},
					d = !1,
					e = !1,
					f = !1;
				a.core.$slide.on("touchstart.lg", function (c) {
					if (a.core.$outer.hasClass("lg-zoomed")) {
						var d = a.core.$slide.eq(a.core.index).find(".lg-object");
						(f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height()),
							(e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width()),
							(e || f) && (c.preventDefault(), (b = { x: c.originalEvent.targetTouches[0].pageX, y: c.originalEvent.targetTouches[0].pageY }));
					}
				}),
					a.core.$slide.on("touchmove.lg", function (g) {
						if (a.core.$outer.hasClass("lg-zoomed")) {
							var i,
								j,
								h = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
							g.preventDefault(),
								(d = !0),
								(c = { x: g.originalEvent.targetTouches[0].pageX, y: g.originalEvent.targetTouches[0].pageY }),
								a.core.$outer.addClass("lg-zoom-dragging"),
								(j = f ? -Math.abs(h.attr("data-y")) + (c.y - b.y) : -Math.abs(h.attr("data-y"))),
								(i = e ? -Math.abs(h.attr("data-x")) + (c.x - b.x) : -Math.abs(h.attr("data-x"))),
								(Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? h.css({ left: i + "px", top: j + "px" }) : h.css("transform", "translate3d(" + i + "px, " + j + "px, 0)"));
						}
					}),
					a.core.$slide.on("touchend.lg", function () {
						a.core.$outer.hasClass("lg-zoomed") && d && ((d = !1), a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f));
					});
			}),
			(d.prototype.zoomDrag = function () {
				var b = this,
					c = {},
					d = {},
					e = !1,
					f = !1,
					g = !1,
					h = !1;
				b.core.$slide.on("mousedown.lg.zoom", function (d) {
					var f = b.core.$slide.eq(b.core.index).find(".lg-object");
					(h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height()),
						(g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width()),
						b.core.$outer.hasClass("lg-zoomed") &&
						a(d.target).hasClass("lg-object") &&
						(g || h) &&
						(d.preventDefault(), (c = { x: d.pageX, y: d.pageY }), (e = !0), (b.core.$outer.scrollLeft += 1), (b.core.$outer.scrollLeft -= 1), b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
				}),
					a(window).on("mousemove.lg.zoom", function (a) {
						if (e) {
							var j,
								k,
								i = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
							(f = !0),
								(d = { x: a.pageX, y: a.pageY }),
								b.core.$outer.addClass("lg-zoom-dragging"),
								(k = h ? -Math.abs(i.attr("data-y")) + (d.y - c.y) : -Math.abs(i.attr("data-y"))),
								(j = g ? -Math.abs(i.attr("data-x")) + (d.x - c.x) : -Math.abs(i.attr("data-x"))),
								b.core.s.useLeftForZoom ? i.css({ left: j + "px", top: k + "px" }) : i.css("transform", "translate3d(" + j + "px, " + k + "px, 0)");
						}
					}),
					a(window).on("mouseup.lg.zoom", function (a) {
						e && ((e = !1), b.core.$outer.removeClass("lg-zoom-dragging"), !f || (c.x === d.x && c.y === d.y) || ((d = { x: a.pageX, y: a.pageY }), b.touchendZoom(c, d, g, h)), (f = !1)),
							b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
					});
			}),
			(d.prototype.touchendZoom = function (a, b, c, d) {
				var e = this,
					f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
					g = e.core.$slide.eq(e.core.index).find(".lg-object"),
					h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
					i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
					j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
					k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
					l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
					m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
				(Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
					(d && (i <= -k ? (i = -k) : i >= -j && (i = -j)),
						c && (h <= -m ? (h = -m) : h >= -l && (h = -l)),
						d ? f.attr("data-y", Math.abs(i)) : (i = -Math.abs(f.attr("data-y"))),
						c ? f.attr("data-x", Math.abs(h)) : (h = -Math.abs(f.attr("data-x"))),
						e.core.s.useLeftForZoom ? f.css({ left: h + "px", top: i + "px" }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
			}),
			(d.prototype.destroy = function () {
				var b = this;
				b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), (b.zoomabletimeout = !1);
			}),
			(a.fn.lightGallery.modules.zoom = d);
	})();
});
/*!  lightGallery video */
!(function (e, o, i, l) {
	"use strict";
	var a = { videoMaxWidth: "855px", youtubePlayerParams: !1, vimeoPlayerParams: !1, dailymotionPlayerParams: !1, videojs: !1 },
		s = function (o) {
			return (this.core = e(o).data("lightGallery")), (this.$el = e(o)), (this.core.s = e.extend({}, a, this.core.s)), (this.videoLoaded = !1), this.init(), this;
		};
	(s.prototype.init = function () {
		var o = this;
		o.core.$el.on("hasVideo.lg.tm", function (e, i, l, a) {
			if ((o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l, "lg-object", !0, i, a)), a))
				if (o.core.s.videojs)
					try {
						videojs(o.core.$slide.eq(i).find(".lg-html5").get(0), {}, function () {
							o.videoLoaded || this.play();
						});
					} catch (s) {
						console.error("Make sure you have included videojs");
					}
				else o.core.$slide.eq(i).find(".lg-html5").get(0).play();
		}),
			o.core.$el.on("onAferAppendSlide.lg.tm", function (e, i) {
				o.core.$slide.eq(i).find(".lg-video-cont").css("max-width", o.core.s.videoMaxWidth), (o.videoLoaded = !0);
			});
		var i = function (e) {
			if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
				if (e.hasClass("lg-has-video")) {
					var i = e.find(".lg-youtube").get(0),
						l = e.find(".lg-vimeo").get(0),
						a = e.find(".lg-dailymotion").get(0),
						s = e.find(".lg-html5").get(0);
					if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
					else if (l)
						try {
							$f(l).api("play");
						} catch (r) {
							console.error("Make sure you have included froogaloop2 js");
						}
					else if (a) a.contentWindow.postMessage("play", "*");
					else if (s)
						if (o.core.s.videojs)
							try {
								videojs(s).play();
							} catch (r) {
								console.error("Make sure you have included videojs");
							}
						else s.play();
					e.addClass("lg-video-palying");
				} else {
					e.addClass("lg-video-palying lg-has-video");
					var t,
						d,
						c = function (i, l) {
							if ((e.find(".lg-video").append(o.loadVideo(i, "", !1, o.core.index, l)), l))
								if (o.core.s.videojs)
									try {
										videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), {}, function () {
											this.play();
										});
									} catch (a) {
										console.error("Make sure you have included videojs");
									}
								else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play();
						};
					o.core.s.dynamic
						? ((t = o.core.s.dynamicEl[o.core.index].src), (d = o.core.s.dynamicEl[o.core.index].html), c(t, d))
						: ((t = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src")), (d = o.core.$items.eq(o.core.index).attr("data-html")), c(t, d));
					var n = e.find(".lg-object");
					e.find(".lg-video").append(n),
						e.find(".lg-video-object").hasClass("lg-html5") ||
						(e.removeClass("lg-complete"),
							e.find(".lg-video-object").on("load.lg error.lg", function () {
								e.addClass("lg-complete");
							}));
				}
		};
		o.core.doCss() && o.core.$items.length > 1 && ((o.core.s.enableSwipe && o.core.isTouch) || (o.core.s.enableDrag && !o.core.isTouch))
			? o.core.$el.on("onSlideClick.lg.tm", function () {
				var e = o.core.$slide.eq(o.core.index);
				i(e);
			})
			: o.core.$slide.on("click.lg", function () {
				i(e(this));
			}),
			o.core.$el.on("onBeforeSlide.lg.tm", function (e, i, l) {
				var a = o.core.$slide.eq(i),
					s = a.find(".lg-youtube").get(0),
					r = a.find(".lg-vimeo").get(0),
					t = a.find(".lg-dailymotion").get(0),
					d = a.find(".lg-html5").get(0);
				if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
				else if (r)
					try {
						$f(r).api("pause");
					} catch (c) {
						console.error("Make sure you have included froogaloop2 js");
					}
				else if (t) t.contentWindow.postMessage("pause", "*");
				else if (d)
					if (o.core.s.videojs)
						try {
							videojs(d).pause();
						} catch (c) {
							console.error("Make sure you have included videojs");
						}
					else d.pause();
				var n;
				n = o.core.s.dynamic ? o.core.s.dynamicEl[l].src : o.core.$items.eq(l).attr("href") || o.core.$items.eq(l).attr("data-src");
				var m = o.core.isVideo(n, l) || {};
				(m.youtube || m.vimeo || m.dailymotion) && o.core.$outer.addClass("lg-hide-download");
			}),
			o.core.$el.on("onAfterSlide.lg.tm", function (e, i) {
				o.core.$slide.eq(i).removeClass("lg-video-palying");
			});
	}),
		(s.prototype.loadVideo = function (o, i, l, a, s) {
			var r = "",
				t = 1,
				d = "",
				c = this.core.isVideo(o, a) || {};
			if ((l && (t = this.videoLoaded ? 0 : 1), c.youtube))
				(d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1"),
					this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)),
					(r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>');
			else if (c.vimeo)
				(d = "?autoplay=" + t + "&api=1"),
					this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)),
					(r =
						'<iframe class="lg-video-object lg-vimeo ' +
						i +
						'" width="560" height="315"  src="//player.vimeo.com/video/' +
						c.vimeo[1] +
						d +
						'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
			else if (c.dailymotion)
				(d = "?wmode=opaque&autoplay=" + t + "&api=postMessage"),
					this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)),
					(r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>');
			else if (c.html5) {
				var n = s.substring(0, 1);
				("." === n || "#" === n) && (s = e(s).html()), (r = s);
			}
			return r;
		}),
		(s.prototype.destroy = function () {
			this.videoLoaded = !1;
		}),
		(e.fn.lightGallery.modules.video = s);
})(jQuery, window, document);
/*!
 * Isotope PACKAGED
 */
!(function (a) {
	function b() { }
	function c(a) {
		function c(b) {
			b.prototype.option ||
				(b.prototype.option = function (b) {
					a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
				});
		}
		function e(b, c) {
			a.fn[b] = function (e) {
				if ("string" == typeof e) {
					for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
						var j = this[h],
							k = a.data(j, b);
						if (k)
							if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
								var l = k[e].apply(k, g);
								if (void 0 !== l) return l;
							} else f("no such method '" + e + "' for " + b + " instance");
						else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'");
					}
					return this;
				}
				return this.each(function () {
					var d = a.data(this, b);
					d ? (d.option(e), d._init()) : ((d = new c(this, e)), a.data(this, b, d));
				});
			};
		}
		if (a) {
			var f =
				"undefined" == typeof console
					? b
					: function (a) {
						console.error(a);
					};
			return (
				(a.bridget = function (a, b) {
					c(b), e(a, b);
				}),
				a.bridget
			);
		}
	}
	var d = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery);
})(window),
	(function (a) {
		function b(b) {
			var c = a.event;
			return (c.target = c.target || c.srcElement || b), c;
		}
		var c = document.documentElement,
			d = function () { };
		c.addEventListener
			? (d = function (a, b, c) {
				a.addEventListener(b, c, !1);
			})
			: c.attachEvent &&
			(d = function (a, c, d) {
				(a[c + d] = d.handleEvent
					? function () {
						var c = b(a);
						d.handleEvent.call(d, c);
					}
					: function () {
						var c = b(a);
						d.call(a, c);
					}),
					a.attachEvent("on" + c, a[c + d]);
			});
		var e = function () { };
		c.removeEventListener
			? (e = function (a, b, c) {
				a.removeEventListener(b, c, !1);
			})
			: c.detachEvent &&
			(e = function (a, b, c) {
				a.detachEvent("on" + b, a[b + c]);
				try {
					delete a[b + c];
				} catch (d) {
					a[b + c] = void 0;
				}
			});
		var f = { bind: d, unbind: e };
		"function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? (module.exports = f) : (a.eventie = f);
	})(window),
	function () {
		"use strict";
		function a() { }
		function b(a, b) {
			for (var c = a.length; c--;) if (a[c].listener === b) return c;
			return -1;
		}
		function c(a) {
			return function () {
				return this[a].apply(this, arguments);
			};
		}
		var d = a.prototype,
			e = this,
			f = e.EventEmitter;
		(d.getListeners = function (a) {
			var b,
				c,
				d = this._getEvents();
			if (a instanceof RegExp) {
				b = {};
				for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
			} else b = d[a] || (d[a] = []);
			return b;
		}),
			(d.flattenListeners = function (a) {
				var b,
					c = [];
				for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
				return c;
			}),
			(d.getListenersAsObject = function (a) {
				var b,
					c = this.getListeners(a);
				return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
			}),
			(d.addListener = function (a, c) {
				var d,
					e = this.getListenersAsObject(a),
					f = "object" == typeof c;
				for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 });
				return this;
			}),
			(d.on = c("addListener")),
			(d.addOnceListener = function (a, b) {
				return this.addListener(a, { listener: b, once: !0 });
			}),
			(d.once = c("addOnceListener")),
			(d.defineEvent = function (a) {
				return this.getListeners(a), this;
			}),
			(d.defineEvents = function (a) {
				for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
				return this;
			}),
			(d.removeListener = function (a, c) {
				var d,
					e,
					f = this.getListenersAsObject(a);
				for (e in f) f.hasOwnProperty(e) && ((d = b(f[e], c)), -1 !== d && f[e].splice(d, 1));
				return this;
			}),
			(d.off = c("removeListener")),
			(d.addListeners = function (a, b) {
				return this.manipulateListeners(!1, a, b);
			}),
			(d.removeListeners = function (a, b) {
				return this.manipulateListeners(!0, a, b);
			}),
			(d.manipulateListeners = function (a, b, c) {
				var d,
					e,
					f = a ? this.removeListener : this.addListener,
					g = a ? this.removeListeners : this.addListeners;
				if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]);
				else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
				return this;
			}),
			(d.removeEvent = function (a) {
				var b,
					c = typeof a,
					d = this._getEvents();
				if ("string" === c) delete d[a];
				else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
				else delete this._events;
				return this;
			}),
			(d.removeAllListeners = c("removeEvent")),
			(d.emitEvent = function (a, b) {
				var c,
					d,
					e,
					f,
					g = this.getListenersAsObject(a);
				for (e in g)
					if (g.hasOwnProperty(e))
						for (d = g[e].length; d--;) (c = g[e][d]), c.once === !0 && this.removeListener(a, c.listener), (f = c.listener.apply(this, b || [])), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
				return this;
			}),
			(d.trigger = c("emitEvent")),
			(d.emit = function (a) {
				var b = Array.prototype.slice.call(arguments, 1);
				return this.emitEvent(a, b);
			}),
			(d.setOnceReturnValue = function (a) {
				return (this._onceReturnValue = a), this;
			}),
			(d._getOnceReturnValue = function () {
				return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
			}),
			(d._getEvents = function () {
				return this._events || (this._events = {});
			}),
			(a.noConflict = function () {
				return (e.EventEmitter = f), a;
			}),
			"function" == typeof define && define.amd
				? define("eventEmitter/EventEmitter", [], function () {
					return a;
				})
				: "object" == typeof module && module.exports
					? (module.exports = a)
					: (e.EventEmitter = a);
	}.call(this),
	(function (a) {
		function b(a) {
			if (a) {
				if ("string" == typeof d[a]) return a;
				a = a.charAt(0).toUpperCase() + a.slice(1);
				for (var b, e = 0, f = c.length; f > e; e++) if (((b = c[e] + a), "string" == typeof d[b])) return b;
			}
		}
		var c = "Webkit Moz ms Ms O".split(" "),
			d = document.documentElement.style;
		"function" == typeof define && define.amd
			? define("get-style-property/get-style-property", [], function () {
				return b;
			})
			: "object" == typeof exports
				? (module.exports = b)
				: (a.getStyleProperty = b);
	})(window),
	(function (a, b) {
		function c(a) {
			var b = parseFloat(a),
				c = -1 === a.indexOf("%") && !isNaN(b);
			return c && b;
		}
		function d() { }
		function e() {
			for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = h.length; c > b; b++) {
				var d = h[b];
				a[d] = 0;
			}
			return a;
		}
		function f(b) {
			function d() {
				if (!m) {
					m = !0;
					var d = a.getComputedStyle;
					if (
						((j = (function () {
							var a = d
								? function (a) {
									return d(a, null);
								}
								: function (a) {
									return a.currentStyle;
								};
							return function (b) {
								var c = a(b);
								return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c;
							};
						})()),
							(k = b("boxSizing")))
					) {
						var e = document.createElement("div");
						(e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style[k] = "border-box");
						var f = document.body || document.documentElement;
						f.appendChild(e);
						var h = j(e);
						(l = 200 === c(h.width)), f.removeChild(e);
					}
				}
			}
			function f(a) {
				if ((d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType)) {
					var b = j(a);
					if ("none" === b.display) return e();
					var f = {};
					(f.width = a.offsetWidth), (f.height = a.offsetHeight);
					for (var g = (f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k])), m = 0, n = h.length; n > m; m++) {
						var o = h[m],
							p = b[o];
						p = i(a, p);
						var q = parseFloat(p);
						f[o] = isNaN(q) ? 0 : q;
					}
					var r = f.paddingLeft + f.paddingRight,
						s = f.paddingTop + f.paddingBottom,
						t = f.marginLeft + f.marginRight,
						u = f.marginTop + f.marginBottom,
						v = f.borderLeftWidth + f.borderRightWidth,
						w = f.borderTopWidth + f.borderBottomWidth,
						x = g && l,
						y = c(b.width);
					y !== !1 && (f.width = y + (x ? 0 : r + v));
					var z = c(b.height);
					return z !== !1 && (f.height = z + (x ? 0 : s + w)), (f.innerWidth = f.width - (r + v)), (f.innerHeight = f.height - (s + w)), (f.outerWidth = f.width + t), (f.outerHeight = f.height + u), f;
				}
			}
			function i(b, c) {
				if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
				var d = b.style,
					e = d.left,
					f = b.runtimeStyle,
					g = f && f.left;
				return g && (f.left = b.currentStyle.left), (d.left = c), (c = d.pixelLeft), (d.left = e), g && (f.left = g), c;
			}
			var j,
				k,
				l,
				m = !1;
			return f;
		}
		var g =
			"undefined" == typeof console
				? d
				: function (a) {
					console.error(a);
				},
			h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd
			? define("get-size/get-size", ["get-style-property/get-style-property"], f)
			: "object" == typeof exports
				? (module.exports = f(require("desandro-get-style-property")))
				: (a.getSize = f(a.getStyleProperty));
	})(window),
	(function (a) {
		function b(a) {
			"function" == typeof a && (b.isReady ? a() : g.push(a));
		}
		function c(a) {
			var c = "readystatechange" === a.type && "complete" !== f.readyState;
			b.isReady || c || d();
		}
		function d() {
			b.isReady = !0;
			for (var a = 0, c = g.length; c > a; a++) {
				var d = g[a];
				d();
			}
		}
		function e(e) {
			return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b;
		}
		var f = a.document,
			g = [];
		(b.isReady = !1), "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? (module.exports = e(require("eventie"))) : (a.docReady = e(a.eventie));
	})(window),
	(function (a) {
		"use strict";
		function b(a, b) {
			return a[g](b);
		}
		function c(a) {
			if (!a.parentNode) {
				var b = document.createDocumentFragment();
				b.appendChild(a);
			}
		}
		function d(a, b) {
			c(a);
			for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++) if (d[e] === a) return !0;
			return !1;
		}
		function e(a, d) {
			return c(a), b(a, d);
		}
		var f,
			g = (function () {
				if (a.matches) return "matches";
				if (a.matchesSelector) return "matchesSelector";
				for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
					var e = b[c],
						f = e + "MatchesSelector";
					if (a[f]) return f;
				}
			})();
		if (g) {
			var h = document.createElement("div"),
				i = b(h, "div");
			f = i ? b : e;
		} else f = d;
		"function" == typeof define && define.amd
			? define("matches-selector/matches-selector", [], function () {
				return f;
			})
			: "object" == typeof exports
				? (module.exports = f)
				: (window.matchesSelector = f);
	})(Element.prototype),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
				return b(a, c, d);
			})
			: "object" == typeof exports
				? (module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")))
				: (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector));
	})(window, function (a, b, c) {
		var d = {};
		(d.extend = function (a, b) {
			for (var c in b) a[c] = b[c];
			return a;
		}),
			(d.modulo = function (a, b) {
				return ((a % b) + b) % b;
			});
		var e = Object.prototype.toString;
		(d.isArray = function (a) {
			return "[object Array]" == e.call(a);
		}),
			(d.makeArray = function (a) {
				var b = [];
				if (d.isArray(a)) b = a;
				else if (a && "number" == typeof a.length) for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
				else b.push(a);
				return b;
			}),
			(d.indexOf = Array.prototype.indexOf
				? function (a, b) {
					return a.indexOf(b);
				}
				: function (a, b) {
					for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
					return -1;
				}),
			(d.removeFrom = function (a, b) {
				var c = d.indexOf(a, b);
				-1 != c && a.splice(c, 1);
			}),
			(d.isElement =
				"function" == typeof HTMLElement || "object" == typeof HTMLElement
					? function (a) {
						return a instanceof HTMLElement;
					}
					: function (a) {
						return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName;
					}),
			(d.setText = (function () {
				function a(a, c) {
					(b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")), (a[b] = c);
				}
				var b;
				return a;
			})()),
			(d.getParent = function (a, b) {
				for (; a != document.body;) if (((a = a.parentNode), c(a, b))) return a;
			}),
			(d.getQueryElement = function (a) {
				return "string" == typeof a ? document.querySelector(a) : a;
			}),
			(d.handleEvent = function (a) {
				var b = "on" + a.type;
				this[b] && this[b](a);
			}),
			(d.filterFindElements = function (a, b) {
				a = d.makeArray(a);
				for (var e = [], f = 0, g = a.length; g > f; f++) {
					var h = a[f];
					if (d.isElement(h))
						if (b) {
							c(h, b) && e.push(h);
							for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j]);
						} else e.push(h);
				}
				return e;
			}),
			(d.debounceMethod = function (a, b, c) {
				var d = a.prototype[b],
					e = b + "Timeout";
				a.prototype[b] = function () {
					var a = this[e];
					a && clearTimeout(a);
					var b = arguments,
						f = this;
					this[e] = setTimeout(function () {
						d.apply(f, b), delete f[e];
					}, c || 100);
				};
			}),
			(d.toDashed = function (a) {
				return a
					.replace(/(.)([A-Z])/g, function (a, b, c) {
						return b + "-" + c;
					})
					.toLowerCase();
			});
		var f = a.console;
		return (
			(d.htmlInit = function (c, e) {
				b(function () {
					for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
						var k,
							l = g[i],
							m = l.getAttribute(h);
						try {
							k = m && JSON.parse(m);
						} catch (n) {
							f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
							continue;
						}
						var o = new c(l, k),
							p = a.jQuery;
						p && p.data(l, e, o);
					}
				});
			}),
			d
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
				return b(a, c, d, e, f);
			})
			: "object" == typeof exports
				? (module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")))
				: ((a.Outlayer = {}), (a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils)));
	})(window, function (a, b, c, d, e) {
		"use strict";
		function f(a) {
			for (var b in a) return !1;
			return (b = null), !0;
		}
		function g(a, b) {
			a && ((this.element = a), (this.layout = b), (this.position = { x: 0, y: 0 }), this._create());
		}
		function h(a) {
			return a.replace(/([A-Z])/g, function (a) {
				return "-" + a.toLowerCase();
			});
		}
		var i = a.getComputedStyle,
			j = i
				? function (a) {
					return i(a, null);
				}
				: function (a) {
					return a.currentStyle;
				},
			k = d("transition"),
			l = d("transform"),
			m = k && l,
			n = !!d("perspective"),
			o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[k],
			p = ["transform", "transition", "transitionDuration", "transitionProperty"],
			q = (function () {
				for (var a = {}, b = 0, c = p.length; c > b; b++) {
					var e = p[b],
						f = d(e);
					f && f !== e && (a[e] = f);
				}
				return a;
			})();
		e.extend(g.prototype, b.prototype),
			(g.prototype._create = function () {
				(this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
			}),
			(g.prototype.handleEvent = function (a) {
				var b = "on" + a.type;
				this[b] && this[b](a);
			}),
			(g.prototype.getSize = function () {
				this.size = c(this.element);
			}),
			(g.prototype.css = function (a) {
				var b = this.element.style;
				for (var c in a) {
					var d = q[c] || c;
					b[d] = a[c];
				}
			}),
			(g.prototype.getPosition = function () {
				var a = j(this.element),
					b = this.layout.options,
					c = b.isOriginLeft,
					d = b.isOriginTop,
					e = a[c ? "left" : "right"],
					f = a[d ? "top" : "bottom"],
					g = this.layout.size,
					h = -1 != e.indexOf("%") ? (parseFloat(e) / 100) * g.width : parseInt(e, 10),
					i = -1 != f.indexOf("%") ? (parseFloat(f) / 100) * g.height : parseInt(f, 10);
				(h = isNaN(h) ? 0 : h), (i = isNaN(i) ? 0 : i), (h -= c ? g.paddingLeft : g.paddingRight), (i -= d ? g.paddingTop : g.paddingBottom), (this.position.x = h), (this.position.y = i);
			}),
			(g.prototype.layoutPosition = function () {
				var a = this.layout.size,
					b = this.layout.options,
					c = {},
					d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
					e = b.isOriginLeft ? "left" : "right",
					f = b.isOriginLeft ? "right" : "left",
					g = this.position.x + a[d];
				(c[e] = this.getXValue(g)), (c[f] = "");
				var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
					i = b.isOriginTop ? "top" : "bottom",
					j = b.isOriginTop ? "bottom" : "top",
					k = this.position.y + a[h];
				(c[i] = this.getYValue(k)), (c[j] = ""), this.css(c), this.emitEvent("layout", [this]);
			}),
			(g.prototype.getXValue = function (a) {
				var b = this.layout.options;
				return b.percentPosition && !b.isHorizontal ? (a / this.layout.size.width) * 100 + "%" : a + "px";
			}),
			(g.prototype.getYValue = function (a) {
				var b = this.layout.options;
				return b.percentPosition && b.isHorizontal ? (a / this.layout.size.height) * 100 + "%" : a + "px";
			}),
			(g.prototype._transitionTo = function (a, b) {
				this.getPosition();
				var c = this.position.x,
					d = this.position.y,
					e = parseInt(a, 10),
					f = parseInt(b, 10),
					g = e === this.position.x && f === this.position.y;
				if ((this.setPosition(a, b), g && !this.isTransitioning)) return void this.layoutPosition();
				var h = a - c,
					i = b - d,
					j = {};
				(j.transform = this.getTranslate(h, i)), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
			}),
			(g.prototype.getTranslate = function (a, b) {
				var c = this.layout.options;
				return (a = c.isOriginLeft ? a : -a), (b = c.isOriginTop ? b : -b), n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)";
			}),
			(g.prototype.goTo = function (a, b) {
				this.setPosition(a, b), this.layoutPosition();
			}),
			(g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo),
			(g.prototype.setPosition = function (a, b) {
				(this.position.x = parseInt(a, 10)), (this.position.y = parseInt(b, 10));
			}),
			(g.prototype._nonTransition = function (a) {
				this.css(a.to), a.isCleaning && this._removeStyles(a.to);
				for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this);
			}),
			(g.prototype._transition = function (a) {
				if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
				var b = this._transn;
				for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
				for (c in a.to) (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0);
				if (a.from) {
					this.css(a.from);
					var d = this.element.offsetHeight;
					d = null;
				}
				this.enableTransition(a.to), this.css(a.to), (this.isTransitioning = !0);
			});
		var r = "opacity," + h(q.transform || "transform");
		(g.prototype.enableTransition = function () {
			this.isTransitioning || (this.css({ transitionProperty: r, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(o, this, !1));
		}),
			(g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"]),
			(g.prototype.onwebkitTransitionEnd = function (a) {
				this.ontransitionend(a);
			}),
			(g.prototype.onotransitionend = function (a) {
				this.ontransitionend(a);
			});
		var s = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
		(g.prototype.ontransitionend = function (a) {
			if (a.target === this.element) {
				var b = this._transn,
					c = s[a.propertyName] || a.propertyName;
				if ((delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && ((this.element.style[a.propertyName] = ""), delete b.clean[c]), c in b.onEnd)) {
					var d = b.onEnd[c];
					d.call(this), delete b.onEnd[c];
				}
				this.emitEvent("transitionEnd", [this]);
			}
		}),
			(g.prototype.disableTransition = function () {
				this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), (this.isTransitioning = !1);
			}),
			(g.prototype._removeStyles = function (a) {
				var b = {};
				for (var c in a) b[c] = "";
				this.css(b);
			});
		var t = { transitionProperty: "", transitionDuration: "" };
		return (
			(g.prototype.removeTransitionStyles = function () {
				this.css(t);
			}),
			(g.prototype.removeElem = function () {
				this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
			}),
			(g.prototype.remove = function () {
				if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
				var a = this;
				this.once("transitionEnd", function () {
					a.removeElem();
				}),
					this.hide();
			}),
			(g.prototype.reveal = function () {
				delete this.isHidden, this.css({ display: "" });
				var a = this.layout.options,
					b = {},
					c = this.getHideRevealTransitionEndProperty("visibleStyle");
				(b[c] = this.onRevealTransitionEnd), this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0, onTransitionEnd: b });
			}),
			(g.prototype.onRevealTransitionEnd = function () {
				this.isHidden || this.emitEvent("reveal");
			}),
			(g.prototype.getHideRevealTransitionEndProperty = function (a) {
				var b = this.layout.options[a];
				if (b.opacity) return "opacity";
				for (var c in b) return c;
			}),
			(g.prototype.hide = function () {
				(this.isHidden = !0), this.css({ display: "" });
				var a = this.layout.options,
					b = {},
					c = this.getHideRevealTransitionEndProperty("hiddenStyle");
				(b[c] = this.onHideTransitionEnd), this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: b });
			}),
			(g.prototype.onHideTransitionEnd = function () {
				this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
			}),
			(g.prototype.destroy = function () {
				this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
			}),
			g
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
				return b(a, c, d, e, f, g);
			})
			: "object" == typeof exports
				? (module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
				: (a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item));
	})(window, function (a, b, c, d, e, f) {
		"use strict";
		function g(a, b) {
			var c = e.getQueryElement(a);
			if (!c) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
			(this.element = c), i && (this.$element = i(this.element)), (this.options = e.extend({}, this.constructor.defaults)), this.option(b);
			var d = ++k;
			(this.element.outlayerGUID = d), (l[d] = this), this._create(), this.options.isInitLayout && this.layout();
		}
		var h = a.console,
			i = a.jQuery,
			j = function () { },
			k = 0,
			l = {};
		return (
			(g.namespace = "outlayer"),
			(g.Item = f),
			(g.defaults = {
				containerStyle: { position: "relative" },
				isInitLayout: !0,
				isOriginLeft: !0,
				isOriginTop: !0,
				isResizeBound: !0,
				isResizingContainer: !0,
				transitionDuration: "0.4s",
				hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
				visibleStyle: { opacity: 1, transform: "scale(1)" },
			}),
			e.extend(g.prototype, c.prototype),
			(g.prototype.option = function (a) {
				e.extend(this.options, a);
			}),
			(g.prototype._create = function () {
				this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
			}),
			(g.prototype.reloadItems = function () {
				this.items = this._itemize(this.element.children);
			}),
			(g.prototype._itemize = function (a) {
				for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
					var g = b[e],
						h = new c(g, this);
					d.push(h);
				}
				return d;
			}),
			(g.prototype._filterFindItemElements = function (a) {
				return e.filterFindElements(a, this.options.itemSelector);
			}),
			(g.prototype.getItemElements = function () {
				for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
				return a;
			}),
			(g.prototype.layout = function () {
				this._resetLayout(), this._manageStamps();
				var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				this.layoutItems(this.items, a), (this._isLayoutInited = !0);
			}),
			(g.prototype._init = g.prototype.layout),
			(g.prototype._resetLayout = function () {
				this.getSize();
			}),
			(g.prototype.getSize = function () {
				this.size = d(this.element);
			}),
			(g.prototype._getMeasurement = function (a, b) {
				var c,
					f = this.options[a];
				f ? ("string" == typeof f ? (c = this.element.querySelector(f)) : e.isElement(f) && (c = f), (this[a] = c ? d(c)[b] : f)) : (this[a] = 0);
			}),
			(g.prototype.layoutItems = function (a, b) {
				(a = this._getItemsForLayout(a)), this._layoutItems(a, b), this._postLayout();
			}),
			(g.prototype._getItemsForLayout = function (a) {
				for (var b = [], c = 0, d = a.length; d > c; c++) {
					var e = a[c];
					e.isIgnored || b.push(e);
				}
				return b;
			}),
			(g.prototype._layoutItems = function (a, b) {
				if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
					for (var c = [], d = 0, e = a.length; e > d; d++) {
						var f = a[d],
							g = this._getItemLayoutPosition(f);
						(g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g);
					}
					this._processLayoutQueue(c);
				}
			}),
			(g.prototype._getItemLayoutPosition = function () {
				return { x: 0, y: 0 };
			}),
			(g.prototype._processLayoutQueue = function (a) {
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					this._positionItem(d.item, d.x, d.y, d.isInstant);
				}
			}),
			(g.prototype._positionItem = function (a, b, c, d) {
				d ? a.goTo(b, c) : a.moveTo(b, c);
			}),
			(g.prototype._postLayout = function () {
				this.resizeContainer();
			}),
			(g.prototype.resizeContainer = function () {
				if (this.options.isResizingContainer) {
					var a = this._getContainerSize();
					a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1));
				}
			}),
			(g.prototype._getContainerSize = j),
			(g.prototype._setContainerMeasure = function (a, b) {
				if (void 0 !== a) {
					var c = this.size;
					c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
						(a = Math.max(a, 0)),
						(this.element.style[b ? "width" : "height"] = a + "px");
				}
			}),
			(g.prototype._emitCompleteOnItems = function (a, b) {
				function c() {
					e.dispatchEvent(a + "Complete", null, [b]);
				}
				function d() {
					g++, g === f && c();
				}
				var e = this,
					f = b.length;
				if (!b || !f) return void c();
				for (var g = 0, h = 0, i = b.length; i > h; h++) {
					var j = b[h];
					j.once(a, d);
				}
			}),
			(g.prototype.dispatchEvent = function (a, b, c) {
				var d = b ? [b].concat(c) : c;
				if ((this.emitEvent(a, d), i))
					if (((this.$element = this.$element || i(this.element)), b)) {
						var e = i.Event(b);
						(e.type = a), this.$element.trigger(e, c);
					} else this.$element.trigger(a, c);
			}),
			(g.prototype.ignore = function (a) {
				var b = this.getItem(a);
				b && (b.isIgnored = !0);
			}),
			(g.prototype.unignore = function (a) {
				var b = this.getItem(a);
				b && delete b.isIgnored;
			}),
			(g.prototype.stamp = function (a) {
				if ((a = this._find(a))) {
					this.stamps = this.stamps.concat(a);
					for (var b = 0, c = a.length; c > b; b++) {
						var d = a[b];
						this.ignore(d);
					}
				}
			}),
			(g.prototype.unstamp = function (a) {
				if ((a = this._find(a)))
					for (var b = 0, c = a.length; c > b; b++) {
						var d = a[b];
						e.removeFrom(this.stamps, d), this.unignore(d);
					}
			}),
			(g.prototype._find = function (a) {
				return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), (a = e.makeArray(a))) : void 0;
			}),
			(g.prototype._manageStamps = function () {
				if (this.stamps && this.stamps.length) {
					this._getBoundingRect();
					for (var a = 0, b = this.stamps.length; b > a; a++) {
						var c = this.stamps[a];
						this._manageStamp(c);
					}
				}
			}),
			(g.prototype._getBoundingRect = function () {
				var a = this.element.getBoundingClientRect(),
					b = this.size;
				this._boundingRect = {
					left: a.left + b.paddingLeft + b.borderLeftWidth,
					top: a.top + b.paddingTop + b.borderTopWidth,
					right: a.right - (b.paddingRight + b.borderRightWidth),
					bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth),
				};
			}),
			(g.prototype._manageStamp = j),
			(g.prototype._getElementOffset = function (a) {
				var b = a.getBoundingClientRect(),
					c = this._boundingRect,
					e = d(a),
					f = { left: b.left - c.left - e.marginLeft, top: b.top - c.top - e.marginTop, right: c.right - b.right - e.marginRight, bottom: c.bottom - b.bottom - e.marginBottom };
				return f;
			}),
			(g.prototype.handleEvent = function (a) {
				var b = "on" + a.type;
				this[b] && this[b](a);
			}),
			(g.prototype.bindResize = function () {
				this.isResizeBound || (b.bind(a, "resize", this), (this.isResizeBound = !0));
			}),
			(g.prototype.unbindResize = function () {
				this.isResizeBound && b.unbind(a, "resize", this), (this.isResizeBound = !1);
			}),
			(g.prototype.onresize = function () {
				function a() {
					b.resize(), delete b.resizeTimeout;
				}
				this.resizeTimeout && clearTimeout(this.resizeTimeout);
				var b = this;
				this.resizeTimeout = setTimeout(a, 100);
			}),
			(g.prototype.resize = function () {
				this.isResizeBound && this.needsResizeLayout() && this.layout();
			}),
			(g.prototype.needsResizeLayout = function () {
				var a = d(this.element),
					b = this.size && a;
				return b && a.innerWidth !== this.size.innerWidth;
			}),
			(g.prototype.addItems = function (a) {
				var b = this._itemize(a);
				return b.length && (this.items = this.items.concat(b)), b;
			}),
			(g.prototype.appended = function (a) {
				var b = this.addItems(a);
				b.length && (this.layoutItems(b, !0), this.reveal(b));
			}),
			(g.prototype.prepended = function (a) {
				var b = this._itemize(a);
				if (b.length) {
					var c = this.items.slice(0);
					(this.items = b.concat(c)), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c);
				}
			}),
			(g.prototype.reveal = function (a) {
				this._emitCompleteOnItems("reveal", a);
				for (var b = a && a.length, c = 0; b && b > c; c++) {
					var d = a[c];
					d.reveal();
				}
			}),
			(g.prototype.hide = function (a) {
				this._emitCompleteOnItems("hide", a);
				for (var b = a && a.length, c = 0; b && b > c; c++) {
					var d = a[c];
					d.hide();
				}
			}),
			(g.prototype.revealItemElements = function (a) {
				var b = this.getItems(a);
				this.reveal(b);
			}),
			(g.prototype.hideItemElements = function (a) {
				var b = this.getItems(a);
				this.hide(b);
			}),
			(g.prototype.getItem = function (a) {
				for (var b = 0, c = this.items.length; c > b; b++) {
					var d = this.items[b];
					if (d.element === a) return d;
				}
			}),
			(g.prototype.getItems = function (a) {
				a = e.makeArray(a);
				for (var b = [], c = 0, d = a.length; d > c; c++) {
					var f = a[c],
						g = this.getItem(f);
					g && b.push(g);
				}
				return b;
			}),
			(g.prototype.remove = function (a) {
				var b = this.getItems(a);
				if ((this._emitCompleteOnItems("remove", b), b && b.length))
					for (var c = 0, d = b.length; d > c; c++) {
						var f = b[c];
						f.remove(), e.removeFrom(this.items, f);
					}
			}),
			(g.prototype.destroy = function () {
				var a = this.element.style;
				(a.height = ""), (a.position = ""), (a.width = "");
				for (var b = 0, c = this.items.length; c > b; b++) {
					var d = this.items[b];
					d.destroy();
				}
				this.unbindResize();
				var e = this.element.outlayerGUID;
				delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace);
			}),
			(g.data = function (a) {
				a = e.getQueryElement(a);
				var b = a && a.outlayerGUID;
				return b && l[b];
			}),
			(g.create = function (a, b) {
				function c() {
					g.apply(this, arguments);
				}
				return (
					Object.create ? (c.prototype = Object.create(g.prototype)) : e.extend(c.prototype, g.prototype),
					(c.prototype.constructor = c),
					(c.defaults = e.extend({}, g.defaults)),
					e.extend(c.defaults, b),
					(c.prototype.settings = {}),
					(c.namespace = a),
					(c.data = g.data),
					(c.Item = function () {
						f.apply(this, arguments);
					}),
					(c.Item.prototype = new f()),
					e.htmlInit(c, a),
					i && i.bridget && i.bridget(a, c),
					c
				);
			}),
			(g.Item = f),
			g
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define("isotope/js/item", ["outlayer/outlayer"], b)
			: "object" == typeof exports
				? (module.exports = b(require("outlayer")))
				: ((a.Isotope = a.Isotope || {}), (a.Isotope.Item = b(a.Outlayer)));
	})(window, function (a) {
		"use strict";
		function b() {
			a.Item.apply(this, arguments);
		}
		(b.prototype = new a.Item()),
			(b.prototype._create = function () {
				(this.id = this.layout.itemGUID++), a.Item.prototype._create.call(this), (this.sortData = {});
			}),
			(b.prototype.updateSortData = function () {
				if (!this.isIgnored) {
					(this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
					var a = this.layout.options.getSortData,
						b = this.layout._sorters;
					for (var c in a) {
						var d = b[c];
						this.sortData[c] = d(this.element, this);
					}
				}
			});
		var c = b.prototype.destroy;
		return (
			(b.prototype.destroy = function () {
				c.apply(this, arguments), this.css({ display: "" });
			}),
			b
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b)
			: "object" == typeof exports
				? (module.exports = b(require("get-size"), require("outlayer")))
				: ((a.Isotope = a.Isotope || {}), (a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)));
	})(window, function (a, b) {
		"use strict";
		function c(a) {
			(this.isotope = a), a && ((this.options = a.options[this.namespace]), (this.element = a.element), (this.items = a.filteredItems), (this.size = a.size));
		}
		return (
			(function () {
				function a(a) {
					return function () {
						return b.prototype[a].apply(this.isotope, arguments);
					};
				}
				for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
					var g = d[e];
					c.prototype[g] = a(g);
				}
			})(),
			(c.prototype.needsVerticalResizeLayout = function () {
				var b = a(this.isotope.element),
					c = this.isotope.size && b;
				return c && b.innerHeight != this.isotope.size.innerHeight;
			}),
			(c.prototype._getMeasurement = function () {
				this.isotope._getMeasurement.apply(this, arguments);
			}),
			(c.prototype.getColumnWidth = function () {
				this.getSegmentSize("column", "Width");
			}),
			(c.prototype.getRowHeight = function () {
				this.getSegmentSize("row", "Height");
			}),
			(c.prototype.getSegmentSize = function (a, b) {
				var c = a + b,
					d = "outer" + b;
				if ((this._getMeasurement(c, d), !this[c])) {
					var e = this.getFirstItemSize();
					this[c] = (e && e[d]) || this.isotope.size["inner" + b];
				}
			}),
			(c.prototype.getFirstItemSize = function () {
				var b = this.isotope.filteredItems[0];
				return b && b.element && a(b.element);
			}),
			(c.prototype.layout = function () {
				this.isotope.layout.apply(this.isotope, arguments);
			}),
			(c.prototype.getSize = function () {
				this.isotope.getSize(), (this.size = this.isotope.size);
			}),
			(c.modes = {}),
			(c.create = function (a, b) {
				function d() {
					c.apply(this, arguments);
				}
				return (d.prototype = new c()), b && (d.options = b), (d.prototype.namespace = a), (c.modes[a] = d), d;
			}),
			c
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b)
			: "object" == typeof exports
				? (module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")))
				: (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils));
	})(window, function (a, b, c) {
		var d = a.create("masonry");
		return (
			(d.prototype._resetLayout = function () {
				this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
				var a = this.cols;
				for (this.colYs = []; a--;) this.colYs.push(0);
				this.maxY = 0;
			}),
			(d.prototype.measureColumns = function () {
				if ((this.getContainerWidth(), !this.columnWidth)) {
					var a = this.items[0],
						c = a && a.element;
					this.columnWidth = (c && b(c).outerWidth) || this.containerWidth;
				}
				var d = (this.columnWidth += this.gutter),
					e = this.containerWidth + this.gutter,
					f = e / d,
					g = d - (e % d),
					h = g && 1 > g ? "round" : "floor";
				(f = Math[h](f)), (this.cols = Math.max(f, 1));
			}),
			(d.prototype.getContainerWidth = function () {
				var a = this.options.isFitWidth ? this.element.parentNode : this.element,
					c = b(a);
				this.containerWidth = c && c.innerWidth;
			}),
			(d.prototype._getItemLayoutPosition = function (a) {
				a.getSize();
				var b = a.size.outerWidth % this.columnWidth,
					d = b && 1 > b ? "round" : "ceil",
					e = Math[d](a.size.outerWidth / this.columnWidth);
				e = Math.min(e, this.cols);
				for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
				return i;
			}),
			(d.prototype._getColGroup = function (a) {
				if (2 > a) return this.colYs;
				for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
					var e = this.colYs.slice(d, d + a);
					b[d] = Math.max.apply(Math, e);
				}
				return b;
			}),
			(d.prototype._manageStamp = function (a) {
				var c = b(a),
					d = this._getElementOffset(a),
					e = this.options.isOriginLeft ? d.left : d.right,
					f = e + c.outerWidth,
					g = Math.floor(e / this.columnWidth);
				g = Math.max(0, g);
				var h = Math.floor(f / this.columnWidth);
				(h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
				for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j]);
			}),
			(d.prototype._getContainerSize = function () {
				this.maxY = Math.max.apply(Math, this.colYs);
				var a = { height: this.maxY };
				return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a;
			}),
			(d.prototype._getContainerFitWidth = function () {
				for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
				return (this.cols - a) * this.columnWidth - this.gutter;
			}),
			(d.prototype.needsResizeLayout = function () {
				var a = this.containerWidth;
				return this.getContainerWidth(), a !== this.containerWidth;
			}),
			d
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b)
			: "object" == typeof exports
				? (module.exports = b(require("../layout-mode"), require("masonry-layout")))
				: b(a.Isotope.LayoutMode, a.Masonry);
	})(window, function (a, b) {
		"use strict";
		function c(a, b) {
			for (var c in b) a[c] = b[c];
			return a;
		}
		var d = a.create("masonry"),
			e = d.prototype._getElementOffset,
			f = d.prototype.layout,
			g = d.prototype._getMeasurement;
		c(d.prototype, b.prototype), (d.prototype._getElementOffset = e), (d.prototype.layout = f), (d.prototype._getMeasurement = g);
		var h = d.prototype.measureColumns;
		d.prototype.measureColumns = function () {
			(this.items = this.isotope.filteredItems), h.call(this);
		};
		var i = d.prototype._manageStamp;
		return (
			(d.prototype._manageStamp = function () {
				(this.options.isOriginLeft = this.isotope.options.isOriginLeft), (this.options.isOriginTop = this.isotope.options.isOriginTop), i.apply(this, arguments);
			}),
			d
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? (module.exports = b(require("../layout-mode"))) : b(a.Isotope.LayoutMode);
	})(window, function (a) {
		"use strict";
		var b = a.create("fitRows");
		return (
			(b.prototype._resetLayout = function () {
				(this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
			}),
			(b.prototype._getItemLayoutPosition = function (a) {
				a.getSize();
				var b = a.size.outerWidth + this.gutter,
					c = this.isotope.size.innerWidth + this.gutter;
				0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY));
				var d = { x: this.x, y: this.y };
				return (this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)), (this.x += b), d;
			}),
			(b.prototype._getContainerSize = function () {
				return { height: this.maxY };
			}),
			b
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? (module.exports = b(require("../layout-mode"))) : b(a.Isotope.LayoutMode);
	})(window, function (a) {
		"use strict";
		var b = a.create("vertical", { horizontalAlignment: 0 });
		return (
			(b.prototype._resetLayout = function () {
				this.y = 0;
			}),
			(b.prototype._getItemLayoutPosition = function (a) {
				a.getSize();
				var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
					c = this.y;
				return (this.y += a.size.outerHeight), { x: b, y: c };
			}),
			(b.prototype._getContainerSize = function () {
				return { height: this.y };
			}),
			b
		);
	}),
	(function (a, b) {
		"use strict";
		"function" == typeof define && define.amd
			? define([
				"outlayer/outlayer",
				"get-size/get-size",
				"matches-selector/matches-selector",
				"fizzy-ui-utils/utils",
				"isotope/js/item",
				"isotope/js/layout-mode",
				"isotope/js/layout-modes/masonry",
				"isotope/js/layout-modes/fit-rows",
				"isotope/js/layout-modes/vertical",
			], function (c, d, e, f, g, h) {
				return b(a, c, d, e, f, g, h);
			})
			: "object" == typeof exports
				? (module.exports = b(
					a,
					require("outlayer"),
					require("get-size"),
					require("desandro-matches-selector"),
					require("fizzy-ui-utils"),
					require("./item"),
					require("./layout-mode"),
					require("./layout-modes/masonry"),
					require("./layout-modes/fit-rows"),
					require("./layout-modes/vertical")
				))
				: (a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode));
	})(window, function (a, b, c, d, e, f, g) {
		function h(a, b) {
			return function (c, d) {
				for (var e = 0, f = a.length; f > e; e++) {
					var g = a[e],
						h = c.sortData[g],
						i = d.sortData[g];
					if (h > i || i > h) {
						var j = void 0 !== b[g] ? b[g] : b,
							k = j ? 1 : -1;
						return (h > i ? 1 : -1) * k;
					}
				}
				return 0;
			};
		}
		var i = a.jQuery,
			j = String.prototype.trim
				? function (a) {
					return a.trim();
				}
				: function (a) {
					return a.replace(/^\s+|\s+$/g, "");
				},
			k = document.documentElement,
			l = k.textContent
				? function (a) {
					return a.textContent;
				}
				: function (a) {
					return a.innerText;
				},
			m = b.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
		(m.Item = f),
			(m.LayoutMode = g),
			(m.prototype._create = function () {
				(this.itemGUID = 0), (this._sorters = {}), this._getSorters(), b.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
				for (var a in g.modes) this._initLayoutMode(a);
			}),
			(m.prototype.reloadItems = function () {
				(this.itemGUID = 0), b.prototype.reloadItems.call(this);
			}),
			(m.prototype._itemize = function () {
				for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
					var e = a[c];
					e.id = this.itemGUID++;
				}
				return this._updateItemsSortData(a), a;
			}),
			(m.prototype._initLayoutMode = function (a) {
				var b = g.modes[a],
					c = this.options[a] || {};
				(this.options[a] = b.options ? e.extend(b.options, c) : c), (this.modes[a] = new b(this));
			}),
			(m.prototype.layout = function () {
				return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout();
			}),
			(m.prototype._layout = function () {
				var a = this._getIsInstant();
				this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), (this._isLayoutInited = !0);
			}),
			(m.prototype.arrange = function (a) {
				function b() {
					d.reveal(c.needReveal), d.hide(c.needHide);
				}
				this.option(a), this._getIsInstant();
				var c = this._filter(this.items);
				this.filteredItems = c.matches;
				var d = this;
				this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout();
			}),
			(m.prototype._init = m.prototype.arrange),
			(m.prototype._getIsInstant = function () {
				var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				return (this._isInstant = a), a;
			}),
			(m.prototype._bindArrangeComplete = function () {
				function a() {
					b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems]);
				}
				var b,
					c,
					d,
					e = this;
				this.once("layoutComplete", function () {
					(b = !0), a();
				}),
					this.once("hideComplete", function () {
						(c = !0), a();
					}),
					this.once("revealComplete", function () {
						(d = !0), a();
					});
			}),
			(m.prototype._filter = function (a) {
				var b = this.options.filter;
				b = b || "*";
				for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
					var i = a[g];
					if (!i.isIgnored) {
						var j = f(i);
						j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i);
					}
				}
				return { matches: c, needReveal: d, needHide: e };
			}),
			(m.prototype._getFilterTest = function (a) {
				return i && this.options.isJQueryFiltering
					? function (b) {
						return i(b.element).is(a);
					}
					: "function" == typeof a
						? function (b) {
							return a(b.element);
						}
						: function (b) {
							return d(b.element, a);
						};
			}),
			(m.prototype.updateSortData = function (a) {
				var b;
				a ? ((a = e.makeArray(a)), (b = this.getItems(a))) : (b = this.items), this._getSorters(), this._updateItemsSortData(b);
			}),
			(m.prototype._getSorters = function () {
				var a = this.options.getSortData;
				for (var b in a) {
					var c = a[b];
					this._sorters[b] = n(c);
				}
			}),
			(m.prototype._updateItemsSortData = function (a) {
				for (var b = a && a.length, c = 0; b && b > c; c++) {
					var d = a[c];
					d.updateSortData();
				}
			});
		var n = (function () {
			function a(a) {
				if ("string" != typeof a) return a;
				var c = j(a).split(" "),
					d = c[0],
					e = d.match(/^\[(.+)\]$/),
					f = e && e[1],
					g = b(f, d),
					h = m.sortDataParsers[c[1]];
				return (a = h
					? function (a) {
						return a && h(g(a));
					}
					: function (a) {
						return a && g(a);
					});
			}
			function b(a, b) {
				var c;
				return (c = a
					? function (b) {
						return b.getAttribute(a);
					}
					: function (a) {
						var c = a.querySelector(b);
						return c && l(c);
					});
			}
			return a;
		})();
		(m.sortDataParsers = {
			parseInt: function (a) {
				return parseInt(a, 10);
			},
			parseFloat: function (a) {
				return parseFloat(a);
			},
		}),
			(m.prototype._sort = function () {
				var a = this.options.sortBy;
				if (a) {
					var b = [].concat.apply(a, this.sortHistory),
						c = h(b, this.options.sortAscending);
					this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a);
				}
			}),
			(m.prototype._mode = function () {
				var a = this.options.layoutMode,
					b = this.modes[a];
				if (!b) throw new Error("No layout mode: " + a);
				return (b.options = this.options[a]), b;
			}),
			(m.prototype._resetLayout = function () {
				b.prototype._resetLayout.call(this), this._mode()._resetLayout();
			}),
			(m.prototype._getItemLayoutPosition = function (a) {
				return this._mode()._getItemLayoutPosition(a);
			}),
			(m.prototype._manageStamp = function (a) {
				this._mode()._manageStamp(a);
			}),
			(m.prototype._getContainerSize = function () {
				return this._mode()._getContainerSize();
			}),
			(m.prototype.needsResizeLayout = function () {
				return this._mode().needsResizeLayout();
			}),
			(m.prototype.appended = function (a) {
				var b = this.addItems(a);
				if (b.length) {
					var c = this._filterRevealAdded(b);
					this.filteredItems = this.filteredItems.concat(c);
				}
			}),
			(m.prototype.prepended = function (a) {
				var b = this._itemize(a);
				if (b.length) {
					this._resetLayout(), this._manageStamps();
					var c = this._filterRevealAdded(b);
					this.layoutItems(this.filteredItems), (this.filteredItems = c.concat(this.filteredItems)), (this.items = b.concat(this.items));
				}
			}),
			(m.prototype._filterRevealAdded = function (a) {
				var b = this._filter(a);
				return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches;
			}),
			(m.prototype.insert = function (a) {
				var b = this.addItems(a);
				if (b.length) {
					var c,
						d,
						e = b.length;
					for (c = 0; e > c; c++) (d = b[c]), this.element.appendChild(d.element);
					var f = this._filter(b).matches;
					for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
					for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
					this.reveal(f);
				}
			});
		var o = m.prototype.remove;
		return (
			(m.prototype.remove = function (a) {
				a = e.makeArray(a);
				var b = this.getItems(a);
				o.call(this, a);
				var c = b && b.length;
				if (c)
					for (var d = 0; c > d; d++) {
						var f = b[d];
						e.removeFrom(this.filteredItems, f);
					}
			}),
			(m.prototype.shuffle = function () {
				for (var a = 0, b = this.items.length; b > a; a++) {
					var c = this.items[a];
					c.sortData.random = Math.random();
				}
				(this.options.sortBy = "random"), this._sort(), this._layout();
			}),
			(m.prototype._noTransition = function (a) {
				var b = this.options.transitionDuration;
				this.options.transitionDuration = 0;
				var c = a.call(this);
				return (this.options.transitionDuration = b), c;
			}),
			(m.prototype.getFilteredItemElements = function () {
				for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
				return a;
			}),
			m
		);
	});
(function () {
	function e() { }
	function t(e, t) {
		for (var n = e.length; n--;) if (e[n].listener === t) return n;
		return -1;
	}
	function n(e) {
		return function () {
			return this[e].apply(this, arguments);
		};
	}
	var i = e.prototype,
		r = this,
		o = r.EventEmitter;
	(i.getListeners = function (e) {
		var t,
			n,
			i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
		} else t = i[e] || (i[e] = []);
		return t;
	}),
		(i.flattenListeners = function (e) {
			var t,
				n = [];
			for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
			return n;
		}),
		(i.getListenersAsObject = function (e) {
			var t,
				n = this.getListeners(e);
			return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
		}),
		(i.addListener = function (e, n) {
			var i,
				r = this.getListenersAsObject(e),
				o = "object" == typeof n;
			for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
			return this;
		}),
		(i.on = n("addListener")),
		(i.addOnceListener = function (e, t) {
			return this.addListener(e, { listener: t, once: !0 });
		}),
		(i.once = n("addOnceListener")),
		(i.defineEvent = function (e) {
			return this.getListeners(e), this;
		}),
		(i.defineEvents = function (e) {
			for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
			return this;
		}),
		(i.removeListener = function (e, n) {
			var i,
				r,
				o = this.getListenersAsObject(e);
			for (r in o) o.hasOwnProperty(r) && ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
			return this;
		}),
		(i.off = n("removeListener")),
		(i.addListeners = function (e, t) {
			return this.manipulateListeners(!1, e, t);
		}),
		(i.removeListeners = function (e, t) {
			return this.manipulateListeners(!0, e, t);
		}),
		(i.manipulateListeners = function (e, t, n) {
			var i,
				r,
				o = e ? this.removeListener : this.addListener,
				s = e ? this.removeListeners : this.addListeners;
			if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]);
			else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
			return this;
		}),
		(i.removeEvent = function (e) {
			var t,
				n = typeof e,
				i = this._getEvents();
			if ("string" === n) delete i[e];
			else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
			else delete this._events;
			return this;
		}),
		(i.removeAllListeners = n("removeEvent")),
		(i.emitEvent = function (e, t) {
			var n,
				i,
				r,
				o,
				s = this.getListenersAsObject(e);
			for (r in s)
				if (s.hasOwnProperty(r))
					for (i = s[r].length; i--;) (n = s[r][i]), n.once === !0 && this.removeListener(e, n.listener), (o = n.listener.apply(this, t || [])), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
			return this;
		}),
		(i.trigger = n("emitEvent")),
		(i.emit = function (e) {
			var t = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(e, t);
		}),
		(i.setOnceReturnValue = function (e) {
			return (this._onceReturnValue = e), this;
		}),
		(i._getOnceReturnValue = function () {
			return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
		}),
		(i._getEvents = function () {
			return this._events || (this._events = {});
		}),
		(e.noConflict = function () {
			return (r.EventEmitter = o), e;
		}),
		"function" == typeof define && define.amd
			? define("eventEmitter/EventEmitter", [], function () {
				return e;
			})
			: "object" == typeof module && module.exports
				? (module.exports = e)
				: (this.EventEmitter = e);
}.call(this),
	(function (e) {
		function t(t) {
			var n = e.event;
			return (n.target = n.target || n.srcElement || t), n;
		}
		var n = document.documentElement,
			i = function () { };
		n.addEventListener
			? (i = function (e, t, n) {
				e.addEventListener(t, n, !1);
			})
			: n.attachEvent &&
			(i = function (e, n, i) {
				(e[n + i] = i.handleEvent
					? function () {
						var n = t(e);
						i.handleEvent.call(i, n);
					}
					: function () {
						var n = t(e);
						i.call(e, n);
					}),
					e.attachEvent("on" + n, e[n + i]);
			});
		var r = function () { };
		n.removeEventListener
			? (r = function (e, t, n) {
				e.removeEventListener(t, n, !1);
			})
			: n.detachEvent &&
			(r = function (e, t, n) {
				e.detachEvent("on" + t, e[t + n]);
				try {
					delete e[t + n];
				} catch (i) {
					e[t + n] = void 0;
				}
			});
		var o = { bind: i, unbind: r };
		"function" == typeof define && define.amd ? define("eventie/eventie", o) : (e.eventie = o);
	})(this),
	(function (e, t) {
		"function" == typeof define && define.amd
			? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
				return t(e, n, i);
			})
			: "object" == typeof exports
				? (module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")))
				: (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
	})(window, function (e, t, n) {
		function i(e, t) {
			for (var n in t) e[n] = t[n];
			return e;
		}
		function r(e) {
			return "[object Array]" === d.call(e);
		}
		function o(e) {
			var t = [];
			if (r(e)) t = e;
			else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
			else t.push(e);
			return t;
		}
		function s(e, t, n) {
			if (!(this instanceof s)) return new s(e, t);
			"string" == typeof e && (e = document.querySelectorAll(e)),
				(this.elements = o(e)),
				(this.options = i({}, this.options)),
				"function" == typeof t ? (n = t) : i(this.options, t),
				n && this.on("always", n),
				this.getImages(),
				a && (this.jqDeferred = new a.Deferred());
			var r = this;
			setTimeout(function () {
				r.check();
			});
		}
		function f(e) {
			this.img = e;
		}
		function c(e) {
			(this.src = e), (v[e] = this);
		}
		var a = e.jQuery,
			u = e.console,
			h = u !== void 0,
			d = Object.prototype.toString;
		(s.prototype = new t()),
			(s.prototype.options = {}),
			(s.prototype.getImages = function () {
				this.images = [];
				for (var e = 0, t = this.elements.length; t > e; e++) {
					var n = this.elements[e];
					"IMG" === n.nodeName && this.addImage(n);
					var i = n.nodeType;
					if (i && (1 === i || 9 === i || 11 === i))
						for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
							var f = r[o];
							this.addImage(f);
						}
				}
			}),
			(s.prototype.addImage = function (e) {
				var t = new f(e);
				this.images.push(t);
			}),
			(s.prototype.check = function () {
				function e(e, r) {
					return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0;
				}
				var t = this,
					n = 0,
					i = this.images.length;
				if (((this.hasAnyBroken = !1), !i)) return this.complete(), void 0;
				for (var r = 0; i > r; r++) {
					var o = this.images[r];
					o.on("confirm", e), o.check();
				}
			}),
			(s.prototype.progress = function (e) {
				this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
				var t = this;
				setTimeout(function () {
					t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
				});
			}),
			(s.prototype.complete = function () {
				var e = this.hasAnyBroken ? "fail" : "done";
				this.isComplete = !0;
				var t = this;
				setTimeout(function () {
					if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
						var n = t.hasAnyBroken ? "reject" : "resolve";
						t.jqDeferred[n](t);
					}
				});
			}),
			a &&
			(a.fn.imagesLoaded = function (e, t) {
				var n = new s(this, e, t);
				return n.jqDeferred.promise(a(this));
			}),
			(f.prototype = new t()),
			(f.prototype.check = function () {
				var e = v[this.img.src] || new c(this.img.src);
				if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
				if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
				var t = this;
				e.on("confirm", function (e, n) {
					return t.confirm(e.isLoaded, n), !0;
				}),
					e.check();
			}),
			(f.prototype.confirm = function (e, t) {
				(this.isLoaded = e), this.emit("confirm", this, t);
			});
		var v = {};
		return (
			(c.prototype = new t()),
			(c.prototype.check = function () {
				if (!this.isChecked) {
					var e = new Image();
					n.bind(e, "load", this), n.bind(e, "error", this), (e.src = this.src), (this.isChecked = !0);
				}
			}),
			(c.prototype.handleEvent = function (e) {
				var t = "on" + e.type;
				this[t] && this[t](e);
			}),
			(c.prototype.onload = function (e) {
				this.confirm(!0, "onload"), this.unbindProxyEvents(e);
			}),
			(c.prototype.onerror = function (e) {
				this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
			}),
			(c.prototype.confirm = function (e, t) {
				(this.isConfirmed = !0), (this.isLoaded = e), this.emit("confirm", this, t);
			}),
			(c.prototype.unbindProxyEvents = function (e) {
				n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
			}),
			s
		);
	}));
/*!
 * Packery layout mode PACKAGED
 */
!(function (a) {
	function b(a) {
		return new RegExp("(^|\\s+)" + a + "(\\s+|$)");
	}
	function c(a, b) {
		var c = d(a, b) ? f : e;
		c(a, b);
	}
	var d, e, f;
	"classList" in document.documentElement
		? ((d = function (a, b) {
			return a.classList.contains(b);
		}),
			(e = function (a, b) {
				a.classList.add(b);
			}),
			(f = function (a, b) {
				a.classList.remove(b);
			}))
		: ((d = function (a, c) {
			return b(c).test(a.className);
		}),
			(e = function (a, b) {
				d(a, b) || (a.className = a.className + " " + b);
			}),
			(f = function (a, c) {
				a.className = a.className.replace(b(c), " ");
			}));
	var g = { hasClass: d, addClass: e, removeClass: f, toggleClass: c, has: d, add: e, remove: f, toggle: c };
	"function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? (module.exports = g) : (a.classie = g);
})(window),
	(function (a, b) {
		"function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? (module.exports = b()) : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
	})(window, function () {
		function a(b) {
			for (var c in a.defaults) this[c] = a.defaults[c];
			for (c in b) this[c] = b[c];
		}
		var b = (window.Packery = function () { });
		return (
			(b.Rect = a),
			(a.defaults = { x: 0, y: 0, width: 0, height: 0 }),
			(a.prototype.contains = function (a) {
				var b = a.width || 0,
					c = a.height || 0;
				return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c;
			}),
			(a.prototype.overlaps = function (a) {
				var b = this.x + this.width,
					c = this.y + this.height,
					d = a.x + a.width,
					e = a.y + a.height;
				return this.x < d && b > a.x && this.y < e && c > a.y;
			}),
			(a.prototype.getMaximalFreeRects = function (b) {
				if (!this.overlaps(b)) return !1;
				var c,
					d = [],
					e = this.x + this.width,
					f = this.y + this.height,
					g = b.x + b.width,
					h = b.y + b.height;
				return (
					this.y < b.y && ((c = new a({ x: this.x, y: this.y, width: this.width, height: b.y - this.y })), d.push(c)),
					e > g && ((c = new a({ x: g, y: this.y, width: e - g, height: this.height })), d.push(c)),
					f > h && ((c = new a({ x: this.x, y: h, width: this.width, height: f - h })), d.push(c)),
					this.x < b.x && ((c = new a({ x: this.x, y: this.y, width: b.x - this.x, height: this.height })), d.push(c)),
					d
				);
			}),
			(a.prototype.canFit = function (a) {
				return this.width >= a.width && this.height >= a.height;
			}),
			a
		);
	}),
	(function (a, b) {
		if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
		else if ("object" == typeof exports) module.exports = b(require("./rect"));
		else {
			var c = (a.Packery = a.Packery || {});
			c.Packer = b(c.Rect);
		}
	})(window, function (a) {
		function b(a, b, c) {
			(this.width = a || 0), (this.height = b || 0), (this.sortDirection = c || "downwardLeftToRight"), this.reset();
		}
		(b.prototype.reset = function () {
			(this.spaces = []), (this.newSpaces = []);
			var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
			this.spaces.push(b), (this.sorter = c[this.sortDirection] || c.downwardLeftToRight);
		}),
			(b.prototype.pack = function (a) {
				for (var b = 0, c = this.spaces.length; c > b; b++) {
					var d = this.spaces[b];
					if (d.canFit(a)) {
						this.placeInSpace(a, d);
						break;
					}
				}
			}),
			(b.prototype.placeInSpace = function (a, b) {
				(a.x = b.x), (a.y = b.y), this.placed(a);
			}),
			(b.prototype.placed = function (a) {
				for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
					var e = this.spaces[c],
						f = e.getMaximalFreeRects(a);
					f ? b.push.apply(b, f) : b.push(e);
				}
				(this.spaces = b), this.mergeSortSpaces();
			}),
			(b.prototype.mergeSortSpaces = function () {
				b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
			}),
			(b.prototype.addSpace = function (a) {
				this.spaces.push(a), this.mergeSortSpaces();
			}),
			(b.mergeRects = function (a) {
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					if (d) {
						var e = a.slice(0);
						e.splice(b, 1);
						for (var f = 0, g = 0, h = e.length; h > g; g++) {
							var i = e[g],
								j = b > g ? 0 : 1;
							d.contains(i) && (a.splice(g + j - f, 1), f++);
						}
					}
				}
				return a;
			});
		var c = {
			downwardLeftToRight: function (a, b) {
				return a.y - b.y || a.x - b.x;
			},
			rightwardTopToBottom: function (a, b) {
				return a.x - b.x || a.y - b.y;
			},
		};
		return b;
	}),
	(function (a, b) {
		"function" == typeof define && define.amd
			? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b)
			: "object" == typeof exports
				? (module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")))
				: (a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect));
	})(window, function (a, b, c) {
		var d = a("transform"),
			e = function () {
				b.Item.apply(this, arguments);
			};
		e.prototype = new b.Item();
		var f = e.prototype._create;
		return (
			(e.prototype._create = function () {
				f.call(this), (this.rect = new c()), (this.placeRect = new c());
			}),
			(e.prototype.dragStart = function () {
				this.getPosition(),
					this.removeTransitionStyles(),
					this.isTransitioning && d && (this.element.style[d] = "none"),
					this.getSize(),
					(this.isPlacing = !0),
					(this.needsPositioning = !1),
					this.positionPlaceRect(this.position.x, this.position.y),
					(this.isTransitioning = !1),
					(this.didDrag = !1);
			}),
			(e.prototype.dragMove = function (a, b) {
				this.didDrag = !0;
				var c = this.layout.size;
				(a -= c.paddingLeft), (b -= c.paddingTop), this.positionPlaceRect(a, b);
			}),
			(e.prototype.dragStop = function () {
				this.getPosition();
				var a = this.position.x != this.placeRect.x,
					b = this.position.y != this.placeRect.y;
				(this.needsPositioning = a || b), (this.didDrag = !1);
			}),
			(e.prototype.positionPlaceRect = function (a, b, c) {
				(this.placeRect.x = this.getPlaceRectCoord(a, !0)), (this.placeRect.y = this.getPlaceRectCoord(b, !1, c));
			}),
			(e.prototype.getPlaceRectCoord = function (a, b, c) {
				var d = b ? "Width" : "Height",
					e = this.size["outer" + d],
					f = this.layout[b ? "columnWidth" : "rowHeight"],
					g = this.layout.size["inner" + d];
				b || ((g = Math.max(g, this.layout.maxY)), this.layout.rowHeight || (g -= this.layout.gutter));
				var h;
				if (f) {
					(f += this.layout.gutter), (g += b ? this.layout.gutter : 0), (a = Math.round(a / f));
					var i;
					i = this.layout.options.isHorizontal ? (b ? "ceil" : "floor") : b ? "floor" : "ceil";
					var j = Math[i](g / f);
					(j -= Math.ceil(e / f)), (h = j);
				} else h = g - e;
				return (a = c ? a : Math.min(a, h)), (a *= f || 1), Math.max(0, a);
			}),
			(e.prototype.copyPlaceRectPosition = function () {
				(this.rect.x = this.placeRect.x), (this.rect.y = this.placeRect.y);
			}),
			(e.prototype.removeElem = function () {
				this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]);
			}),
			e
		);
	}),
	(function (a, b) {
		"function" == typeof define && define.amd
			? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b)
			: "object" == typeof exports
				? (module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")))
				: (a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item));
	})(window, function (a, b, c, d, e, f) {
		function g(a, b) {
			return a.position.y - b.position.y || a.position.x - b.position.x;
		}
		function h(a, b) {
			return a.position.x - b.position.x || a.position.y - b.position.y;
		}
		d.prototype.canFit = function (a) {
			return this.width >= a.width - 1 && this.height >= a.height - 1;
		};
		var i = c.create("packery");
		return (
			(i.Item = f),
			(i.prototype._create = function () {
				c.prototype._create.call(this), (this.packer = new e()), this.stamp(this.options.stamped);
				var a = this;
				(this.handleDraggabilly = {
					dragStart: function () {
						a.itemDragStart(this.element);
					},
					dragMove: function () {
						a.itemDragMove(this.element, this.position.x, this.position.y);
					},
					dragEnd: function () {
						a.itemDragEnd(this.element);
					},
				}),
					(this.handleUIDraggable = {
						start: function (b) {
							a.itemDragStart(b.currentTarget);
						},
						drag: function (b, c) {
							a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
						},
						stop: function (b) {
							a.itemDragEnd(b.currentTarget);
						},
					});
			}),
			(i.prototype._resetLayout = function () {
				this.getSize(), this._getMeasurements();
				var a = this.packer;
				this.options.isHorizontal
					? ((a.width = Number.POSITIVE_INFINITY), (a.height = this.size.innerHeight + this.gutter), (a.sortDirection = "rightwardTopToBottom"))
					: ((a.width = this.size.innerWidth + this.gutter), (a.height = Number.POSITIVE_INFINITY), (a.sortDirection = "downwardLeftToRight")),
					a.reset(),
					(this.maxY = 0),
					(this.maxX = 0);
			}),
			(i.prototype._getMeasurements = function () {
				this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width");
			}),
			(i.prototype._getItemLayoutPosition = function (a) {
				return this._packItem(a), a.rect;
			}),
			(i.prototype._packItem = function (a) {
				this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect);
			}),
			(i.prototype._setMaxXY = function (a) {
				(this.maxX = Math.max(a.x + a.width, this.maxX)), (this.maxY = Math.max(a.y + a.height, this.maxY));
			}),
			(i.prototype._setRectSize = function (a, c) {
				var d = b(a),
					e = d.outerWidth,
					f = d.outerHeight;
				(e || f) && ((e = this._applyGridGutter(e, this.columnWidth)), (f = this._applyGridGutter(f, this.rowHeight))), (c.width = Math.min(e, this.packer.width)), (c.height = Math.min(f, this.packer.height));
			}),
			(i.prototype._applyGridGutter = function (a, b) {
				if (!b) return a + this.gutter;
				b += this.gutter;
				var c = a % b,
					d = c && 1 > c ? "round" : "ceil";
				return (a = Math[d](a / b) * b);
			}),
			(i.prototype._getContainerSize = function () {
				return this.options.isHorizontal ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter };
			}),
			(i.prototype._manageStamp = function (a) {
				var b,
					c = this.getItem(a);
				if (c && c.isPlacing) b = c.placeRect;
				else {
					var e = this._getElementOffset(a);
					b = new d({ x: this.options.isOriginLeft ? e.left : e.right, y: this.options.isOriginTop ? e.top : e.bottom });
				}
				this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
			}),
			(i.prototype.sortItemsByPosition = function () {
				var a = this.options.isHorizontal ? h : g;
				this.items.sort(a);
			}),
			(i.prototype.fit = function (a, b, c) {
				var d = this.getItem(a);
				d &&
					(this._getMeasurements(),
						this.stamp(d.element),
						d.getSize(),
						(d.isPlacing = !0),
						(b = void 0 === b ? d.rect.x : b),
						(c = void 0 === c ? d.rect.y : c),
						d.positionPlaceRect(b, c, !0),
						this._bindFitEvents(d),
						d.moveTo(d.placeRect.x, d.placeRect.y),
						this.layout(),
						this.unstamp(d.element),
						this.sortItemsByPosition(),
						(d.isPlacing = !1),
						d.copyPlaceRectPosition());
			}),
			(i.prototype._bindFitEvents = function (a) {
				function b() {
					d++, 2 == d && c.emitEvent("fitComplete", [a]);
				}
				var c = this,
					d = 0;
				a.on("layout", function () {
					return b(), !0;
				}),
					this.on("layoutComplete", function () {
						return b(), !0;
					});
			}),
			(i.prototype.resize = function () {
				var a = b(this.element),
					c = this.size && a,
					d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
				(c && a[d] == this.size[d]) || this.layout();
			}),
			(i.prototype.itemDragStart = function (a) {
				this.stamp(a);
				var b = this.getItem(a);
				b && b.dragStart();
			}),
			(i.prototype.itemDragMove = function (a, b, c) {
				function d() {
					f.layout(), delete f.dragTimeout;
				}
				var e = this.getItem(a);
				e && e.dragMove(b, c);
				var f = this;
				this.clearDragTimeout(), (this.dragTimeout = setTimeout(d, 40));
			}),
			(i.prototype.clearDragTimeout = function () {
				this.dragTimeout && clearTimeout(this.dragTimeout);
			}),
			(i.prototype.itemDragEnd = function (b) {
				var c,
					d = this.getItem(b);
				if ((d && ((c = d.didDrag), d.dragStop()), !d || (!c && !d.needsPositioning))) return void this.unstamp(b);
				a.add(d.element, "is-positioning-post-drag");
				var e = this._getDragEndLayoutComplete(b, d);
				d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout();
			}),
			(i.prototype._getDragEndLayoutComplete = function (b, c) {
				var d = c && c.needsPositioning,
					e = 0,
					f = d ? 2 : 1,
					g = this;
				return function () {
					return e++, e != f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), (c.isPlacing = !1), c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [c]), !0);
				};
			}),
			(i.prototype.bindDraggabillyEvents = function (a) {
				a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd);
			}),
			(i.prototype.bindUIDraggableEvents = function (a) {
				a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop);
			}),
			(i.Rect = d),
			(i.Packer = e),
			i
		);
	}),
	(function (a, b) {
		"function" == typeof define && define.amd
			? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], b)
			: "object" == typeof exports
				? (module.exports = b(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")))
				: b(a.Isotope.LayoutMode, a.Packery, a.getSize);
	})(window, function (a, b, c) {
		function d(a, b) {
			for (var c in b) a[c] = b[c];
			return a;
		}
		var e = a.create("packery"),
			f = e.prototype._getElementOffset,
			g = e.prototype._getMeasurement;
		d(e.prototype, b.prototype), (e.prototype._getElementOffset = f), (e.prototype._getMeasurement = g);
		var h = e.prototype._resetLayout;
		e.prototype._resetLayout = function () {
			(this.packer = this.packer || new b.Packer()), h.apply(this, arguments);
		};
		var i = e.prototype._getItemLayoutPosition;
		e.prototype._getItemLayoutPosition = function (a) {
			return (a.rect = a.rect || new b.Rect()), i.call(this, a);
		};
		var j = e.prototype._manageStamp;
		return (
			(e.prototype._manageStamp = function () {
				(this.options.isOriginLeft = this.isotope.options.isOriginLeft), (this.options.isOriginTop = this.isotope.options.isOriginTop), j.apply(this, arguments);
			}),
			(e.prototype.needsResizeLayout = function () {
				var a = c(this.element),
					b = this.size && a,
					d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
				return b && a[d] != this.size[d];
			}),
			e
		);
	});
/**
 * jQuery.share - social media sharing plugin
 */
!(function (t, e) {
	var s = e.document;
	(t.fn.share = function (i) {
		var r = {
			init: function (i) {
				this.share.settings = t.extend({}, this.share.defaults, i);
				var r = (this.share.settings, this.share.settings.networks),
					o = this.share.settings.theme,
					a = this.share.settings.orientation,
					u = this.share.settings.affix,
					h = this.share.settings.margin,
					l = this.share.settings.title || t(s).attr("title"),
					c = this.share.settings.urlToShare || t(location).attr("href"),
					p = "";
				return (
					t.each(t(s).find('meta[name="description"]'), function (e, s) {
						p = t(s).attr("content");
					}),
					this.each(function () {
						var s,
							i = t(this),
							m = i.attr("id"),
							d = encodeURIComponent(c),
							f = l.replace("|", ""),
							g = p.substring(0, 250);
						r.forEach(function (e) {
							(s = n.networkDefs[e].url),
								(s = s.replace("|u|", d).replace("|t|", f).replace("|d|", g).replace("|140|", f.substring(0, 130))),
								t("<a href='" + s + "'   class='pop share-" + o + " share-" + o + "-" + e + "'></a>").appendTo(i);
						}),
							t("#" + m + ".share-" + o).css("margin", h),
							"horizontal" != a ? t("#" + m + " a.share-" + o).css("display", "block") : t("#" + m + " a.share-" + o).css("display", "inline-block"),
							"undefined" != typeof u &&
							(i.addClass("share-affix"),
								-1 != u.indexOf("right") ? (i.css("left", "auto"), i.css("right", "0px"), -1 != u.indexOf("center") && i.css("top", "40%")) : -1 != u.indexOf("left center") && i.css("top", "40%"),
								-1 != u.indexOf("bottom") && (i.css("bottom", "0px"), i.css("top", "auto"), -1 != u.indexOf("center") && i.css("left", "40%"))),
							t(".pop").click(function () {
								return e.open(t(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"), !1;
							});
					})
				);
			},
		},
			n = {
				networkDefs: {
					facebook: { url: "http://www.facebook.com/share.php?u=|u|" },
					twitter: { url: "https://twitter.com/share?via=in1.com&text=|140|" },
					linkedin: { url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com" },
					in1: { url: "http://www.in1.com/cast?u=|u|", w: "490", h: "529" },
					tumblr: { url: "http://www.tumblr.com/share?v=3&u=|u|" },
					digg: { url: "http://digg.com/submit?url=|u|&title=|t|" },
					googleplus: { url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|" },
					reddit: { url: "http://reddit.com/submit?url=|u|" },
					pinterest: { url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|" },
					posterous: { url: "http://posterous.com/share?linkto=|u|&title=|t|" },
					stumbleupon: { url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|" },
					email: { url: "mailto:?subject=|t|" },
				},
			};
		return r[i] ? r[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error('Method "' + i + '" does not exist in social plugin') : r.init.apply(this, arguments);
	}),
		(t.fn.share.defaults = { networks: ["in1", "facebook", "twitter", "linkedin"], theme: "icon", autoShow: !0, margin: "3px", orientation: "horizontal", useIn1: !0 }),
		(t.fn.share.settings = {});
})(jQuery, window);
/** video**/
"function" != typeof Object.create &&
	(Object.create = function (e) {
		function t() { }
		return (t.prototype = e), new t();
	}),
	(function (e, t, o) {
		var a = function (e) {
			var t = o.createElement("script"),
				a = o.getElementsByTagName("head")[0];
			(t.src = location.protocol + "//www.youtube.com/iframe_api"), a.appendChild(t), (a = null), (t = null), n(e);
		},
			n = function (o) {
				"undefined" == typeof YT && "undefined" == typeof t.loadingPlayer
					? ((t.loadingPlayer = !0),
						(t.dfd = e.Deferred()),
						(t.onYouTubeIframeAPIReady = function () {
							(t.onYouTubeIframeAPIReady = null), t.dfd.resolve("John"), o();
						}))
					: t.dfd.done(function (e) {
						o();
					});
			};
		(YTPlayer = {
			player: null,
			defaults: {
				ratio: 16 / 9,
				videoId: "LSmgKRx5pBo",
				mute: !0,
				repeat: !0,
				width: e(t).width(),
				playButtonClass: "YTPlayer-play",
				pauseButtonClass: "YTPlayer-pause",
				muteButtonClass: "YTPlayer-mute",
				volumeUpClass: "YTPlayer-volume-up",
				volumeDownClass: "YTPlayer-volume-down",
				start: 0,
				pauseOnScroll: !1,
				fitToBackground: !0,
				playerVars: { modestbranding: 1, autoplay: 1, controls: 0, showinfo: 0, wmode: "transparent", branding: 0, rel: 0, autohide: 0, origin: t.location.origin },
				events: null,
			},
			init: function (o, n) {
				var i = this;
				return (
					(i.userOptions = n),
					(i.$body = e("body")),
					(i.$node = e(o)),
					(i.$window = e(t)),
					(i.defaults.events = {
						onReady: function (e) {
							i.onPlayerReady(e), i.options.pauseOnScroll && i.pauseOnScroll(), "function" == typeof i.options.callback && i.options.callback.call(this);
						},
						onStateChange: function (e) {
							1 === e.data ? i.$node.addClass("loaded") : 0 === e.data && i.options.repeat && i.player.seekTo(i.options.start);
						},
					}),
					(i.options = e.extend(!0, {}, i.defaults, i.userOptions)),
					(i.ID = new Date().getTime()),
					(i.holderID = "YTPlayer-ID-" + i.ID),
					i.options.fitToBackground ? i.createBackgroundVideo() : i.createContainerVideo(),
					i.$window.on("resize.YTplayer" + i.ID, function () {
						i.resize(i);
					}),
					a(i.onYouTubeIframeAPIReady.bind(i)),
					i.resize(i),
					i
				);
			},
			pauseOnScroll: function () {
				var e = this;
				e.$window.on("scroll.YTplayer" + e.ID, function () {
					var t = e.player.getPlayerState();
					1 === t && e.player.pauseVideo();
				}),
					e.$window.scrollStopped(function () {
						var t = e.player.getPlayerState();
						2 === t && e.player.playVideo();
					});
			},
			createContainerVideo: function () {
				var t = this,
					o = e(
						'<div id="ytplayer-container' +
						t.ID +
						'" >                                    <div id="' +
						t.holderID +
						'" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>'
					);
				t.$node.append(o), (t.$YTPlayerString = o), (o = null);
			},
			createBackgroundVideo: function () {
				var t = this,
					o = e(
						'<div id="ytplayer-container' +
						t.ID +
						'" class="ytplayer-container background">                                    <div id="' +
						t.holderID +
						'" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>'
					);
				t.$node.append(o), (t.$YTPlayerString = o), (o = null);
			},
			resize: function (t) {
				var o = e(".media-container");
				t.options.fitToBackground || (o = t.$node);
				var a,
					n,
					i = o.width(),
					r = o.height(),
					l = e("#" + t.holderID);
				i / t.options.ratio < r
					? ((a = Math.ceil(r * t.options.ratio)),
						l
							.width(a)
							.height(r)
							.css({ left: (i - a) / 2, top: 0 }))
					: ((n = Math.ceil(i / t.options.ratio)), l.width(i).height(n).css({ left: 0, top: 0 })),
					(l = null),
					(o = null);
			},
			onYouTubeIframeAPIReady: function () {
				var e = this;
				e.player = new t.YT.Player(e.holderID, { width: e.options.width, height: Math.ceil(e.options.width / e.options.ratio), videoId: e.options.videoId, playerVars: e.options.playerVars, events: e.options.events });
			},
			onPlayerReady: function (e) {
				this.options.mute && e.target.mute(), e.target.playVideo();
			},
			getPlayer: function () {
				return this.player;
			},
			destroy: function () {
				var o = this;
				o.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"),
					o.$YTPlayerString.remove(),
					e(t).off("resize.YTplayer" + o.ID),
					e(t).off("scroll.YTplayer" + o.ID),
					(o.$body = null),
					(o.$node = null),
					(o.$YTPlayerString = null),
					o.player.destroy(),
					(o.player = null);
			},
		}),
			(e.fn.scrollStopped = function (t) {
				var o = e(this),
					a = this;
				o.scroll(function () {
					o.data("scrollTimeout") && clearTimeout(o.data("scrollTimeout")), o.data("scrollTimeout", setTimeout(t, 250, a));
				});
			}),
			(e.fn.YTPlayer = function (t) {
				return this.each(function () {
					var o = this;
					e(o).data("yt-init", !0);
					var a = Object.create(YTPlayer);
					a.init(o, t), e.data(o, "ytPlayer", a);
				});
			});
	})(jQuery, window, document);
// appear
(function ($) {
	$.fn.appear = function (f, o) {
		var s = $.extend({ one: true }, o);
		return this.each(function () {
			var t = $(this);
			t.appeared = false;
			if (!f) {
				t.trigger("appear", s.data);
				return;
			}
			var w = $(window);
			var c = function () {
				if (!t.is(":visible")) {
					t.appeared = false;
					return;
				}
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;
				if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
					if (!t.appeared) t.trigger("appear", s.data);
				} else {
					t.appeared = false;
				}
			};
			var m = function () {
				t.appeared = true;
				if (s.one) {
					w.unbind("scroll", c);
					var i = $.inArray(c, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}
				f.apply(this, arguments);
			};
			if (s.one) t.one("appear", s.data, m);
			else t.bind("appear", s.data, m);
			w.scroll(c);
			$.fn.appear.checks.push(c);
			c();
		});
	};
	$.extend($.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function () {
			var l = $.fn.appear.checks.length;
			if (l > 0) while (l--) $.fn.appear.checks[l]();
		},
		run: function () {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		},
	});
	$.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (i, n) {
		var u = $.fn[n];
		if (u) {
			$.fn[n] = function () {
				var r = u.apply(this, arguments);
				$.fn.appear.run();
				return r;
			};
		}
	});
})(jQuery);
// text rotator
(function (a) {
	a.fn.extend({
		rotaterator: function (b) {
			var c = { fadeSpeed: 500, pauseSpeed: 100, child: null };
			var b = a.extend(c, b);
			return this.each(function () {
				var g = b;
				var f = a(this);
				var d = a(f.children(), f);
				d.each(function () {
					a(this).hide();
				});
				if (!g.child) {
					var e = a(f).children(":first");
				} else {
					var e = g.child;
				}
				a(e).fadeIn(g.fadeSpeed, function () {
					a(e)
						.delay(g.pauseSpeed)
						.fadeOut(g.fadeSpeed, function () {
							var h = a(this).next();
							if (h.length == 0) {
								h = a(f).children(":first");
							}
							a(f).rotaterator({ child: h, fadeSpeed: g.fadeSpeed, pauseSpeed: g.pauseSpeed });
						});
				});
			});
		},
	});
})(jQuery);
// count
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		return $(this).each(function () {
			var settings = $.extend(
				{},
				$.fn.countTo.defaults,
				{ from: $(this).data("from"), to: $(this).data("num"), speed: $(this).data("speed"), refreshInterval: $(this).data("refresh-interval"), decimals: $(this).data("decimals") },
				options
			);
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data("countTo") || {};
			$self.data("countTo", data);
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			render(value);
			function updateTimer() {
				value += increment;
				loopCount++;
				render(value);
				if (typeof settings.onUpdate == "function") {
					settings.onUpdate.call(self, value);
				}
				if (loopCount >= loops) {
					$self.removeData("countTo");
					clearInterval(data.interval);
					value = settings.to;
					if (typeof settings.onComplete == "function") {
						settings.onComplete.call(self, value);
					}
				}
			}
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};
	$.fn.countTo.defaults = { from: 0, to: 0, speed: 2500, refreshInterval: 100, decimals: 0, formatter: formatter, onUpdate: null, onComplete: null };
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
})(jQuery);
/*  TweenMax js */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	"use strict";
	_gsScope._gsDefine(
		"TweenMax",
		["core.Animation", "core.SimpleTimeline", "TweenLite"],
		function (a, b, c) {
			var d = function (a) {
				var b,
					c = [],
					d = a.length;
				for (b = 0; b !== d; c.push(a[b++]));
				return c;
			},
				e = function (a, b, c) {
					var d,
						e,
						f = a.cycle;
					for (d in f) (e = f[d]), (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
					delete a.cycle;
				},
				f = function (a, b, d) {
					c.call(this, a, b, d),
						(this._cycle = 0),
						(this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
						(this._repeat = this.vars.repeat || 0),
						(this._repeatDelay = this.vars.repeatDelay || 0),
						this._repeat && this._uncache(!0),
						(this.render = f.prototype.render);
				},
				g = 1e-10,
				h = c._internals,
				i = h.isSelector,
				j = h.isArray,
				k = (f.prototype = c.to({}, 0.1, {})),
				l = [];
			(f.version = "1.20.3"),
				(k.constructor = f),
				(k.kill()._gc = !1),
				(f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
				(f.getTweensOf = c.getTweensOf),
				(f.lagSmoothing = c.lagSmoothing),
				(f.ticker = c.ticker),
				(f.render = c.render),
				(k.invalidate = function () {
					return (
						(this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
						(this._repeat = this.vars.repeat || 0),
						(this._repeatDelay = this.vars.repeatDelay || 0),
						(this._yoyoEase = null),
						this._uncache(!0),
						c.prototype.invalidate.call(this)
					);
				}),
				(k.updateTo = function (a, b) {
					var d,
						e = this.ratio,
						f = this.vars.immediateRender || a.immediateRender;
					b && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for (d in a) this.vars[d] = a[d];
					if (this._initted || f)
						if (b) (this._initted = !1), f && this.render(0, !0, !0);
						else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
							var g = this._totalTime;
							this.render(0, !0, !1), (this._initted = !1), this.render(g, !0, !1);
						} else if (((this._initted = !1), this._init(), this._time > 0 || f)) for (var h, i = 1 / (1 - e), j = this._firstPT; j;) (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
					return this;
				}),
				(k.render = function (a, b, d) {
					this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
					var e,
						f,
						i,
						j,
						k,
						l,
						m,
						n,
						o,
						p = this._dirty ? this.totalDuration() : this._totalDuration,
						q = this._time,
						r = this._totalTime,
						s = this._cycle,
						t = this._duration,
						u = this._rawPrevTime;
					if (
						(a >= p - 1e-7 && a >= 0
							? ((this._totalTime = p),
								(this._cycle = this._repeat),
								this._yoyo && 0 !== (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = t), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
								this._reversed || ((e = !0), (f = "onComplete"), (d = d || this._timeline.autoRemoveChildren)),
								0 === t &&
								(this._initted || !this.vars.lazy || d) &&
								(this._startTime === this._timeline._duration && (a = 0),
									(0 > u || (0 >= a && a >= -1e-7) || (u === g && "isPause" !== this.data)) && u !== a && ((d = !0), u > g && (f = "onReverseComplete")),
									(this._rawPrevTime = n = !b || a || u === a ? a : g)))
							: 1e-7 > a
								? ((this._totalTime = this._time = this._cycle = 0),
									(this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
									(0 !== r || (0 === t && u > 0)) && ((f = "onReverseComplete"), (e = this._reversed)),
									0 > a && ((this._active = !1), 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), (this._rawPrevTime = n = !b || a || u === a ? a : g))),
									this._initted || (d = !0))
								: ((this._totalTime = this._time = a),
									0 !== this._repeat &&
									((j = t + this._repeatDelay),
										(this._cycle = (this._totalTime / j) >> 0),
										0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--,
										(this._time = this._totalTime - this._cycle * j),
										this._yoyo &&
										0 !== (1 & this._cycle) &&
										((this._time = t - this._time),
											(o = this._yoyoEase || this.vars.yoyoEase),
											o &&
											(this._yoyoEase ||
												(o !== !0 || this._initted
													? (this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o])
													: ((o = this.vars.ease), (this._yoyoEase = o = o ? (o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase) : c.defaultEase))),
												(this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0))),
										this._time > t ? (this._time = t) : this._time < 0 && (this._time = 0)),
									this._easeType && !o
										? ((k = this._time / t),
											(l = this._easeType),
											(m = this._easePower),
											(1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
											3 === l && (k *= 2),
											1 === m ? (k *= k) : 2 === m ? (k *= k * k) : 3 === m ? (k *= k * k * k) : 4 === m && (k *= k * k * k * k),
											1 === l ? (this.ratio = 1 - k) : 2 === l ? (this.ratio = k) : this._time / t < 0.5 ? (this.ratio = k / 2) : (this.ratio = 1 - k / 2))
										: o || (this.ratio = this._ease.getRatio(this._time / t))),
							q === this._time && !d && s === this._cycle)
					)
						return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
					if (!this._initted) {
						if ((this._init(), !this._initted || this._gc)) return;
						if (!d && this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)))
							return (this._time = q), (this._totalTime = r), (this._rawPrevTime = u), (this._cycle = s), h.lazyTweens.push(this), void (this._lazy = [a, b]);
						!this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : (this.ratio = this._ease.getRatio(this._time / t));
					}
					for (
						this._lazy !== !1 && (this._lazy = !1),
						this._active || (!this._paused && this._time !== q && a >= 0 && (this._active = !0)),
						0 === r &&
						(2 === this._initted && a > 0 && this._init(),
							this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")),
							this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))),
						i = this._firstPT;
						i;

					)
						i.f ? i.t[i.p](i.c * this.ratio + i.s) : (i.t[i.p] = i.c * this.ratio + i.s), (i = i._next);
					this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || ((this._totalTime !== r || f) && this._callback("onUpdate"))),
						this._cycle !== s && (b || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
						f &&
						(!this._gc || d) &&
						(0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d),
							e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
							!b && this.vars[f] && this._callback(f),
							0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0));
				}),
				(f.to = function (a, b, c) {
					return new f(a, b, c);
				}),
				(f.from = function (a, b, c) {
					return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new f(a, b, c);
				}),
				(f.fromTo = function (a, b, c, d) {
					return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), new f(a, b, d);
				}),
				(f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
					h = h || 0;
					var o,
						p,
						q,
						r,
						s = 0,
						t = [],
						u = function () {
							g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l);
						},
						v = g.cycle,
						w = g.startAt && g.startAt.cycle;
					for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && ((a = d(a)), a.reverse(), (h *= -1)), o = a.length - 1, q = 0; o >= q; q++) {
						p = {};
						for (r in g) p[r] = g[r];
						if ((v && (e(p, a, q), null != p.duration && ((b = p.duration), delete p.duration)), w)) {
							w = p.startAt = {};
							for (r in g.startAt) w[r] = g.startAt[r];
							e(p.startAt, a, q);
						}
						(p.delay = s + (p.delay || 0)), q === o && k && (p.onComplete = u), (t[q] = new f(a[q], b, p)), (s += h);
					}
					return t;
				}),
				(f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
					return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), f.staggerTo(a, b, c, d, e, g, h);
				}),
				(f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
					return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), f.staggerTo(a, b, d, e, g, h, i);
				}),
				(f.delayedCall = function (a, b, c, d, e) {
					return new f(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: e, overwrite: 0 });
				}),
				(f.set = function (a, b) {
					return new f(a, 0, b);
				}),
				(f.isTweening = function (a) {
					return c.getTweensOf(a, !0).length > 0;
				});
			var m = function (a, b) {
				for (var d = [], e = 0, f = a._first; f;) f instanceof c ? (d[e++] = f) : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)), (f = f._next);
				return d;
			},
				n = (f.getAllTweens = function (b) {
					return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
				});
			(f.killAll = function (a, c, d, e) {
				null == c && (c = !0), null == d && (d = !0);
				var f,
					g,
					h,
					i = n(0 != e),
					j = i.length,
					k = c && d && e;
				for (h = 0; j > h; h++) (g = i[h]), (k || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
			}),
				(f.killChildTweensOf = function (a, b) {
					if (null != a) {
						var e,
							g,
							k,
							l,
							m,
							n = h.tweenLookup;
						if (("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))) for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
						else {
							e = [];
							for (k in n) for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
							for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
						}
					}
				});
			var o = function (a, c, d, e) {
				(c = c !== !1), (d = d !== !1), (e = e !== !1);
				for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) (g = h[j]), (i || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) && g.paused(a);
			};
			return (
				(f.pauseAll = function (a, b, c) {
					o(!0, a, b, c);
				}),
				(f.resumeAll = function (a, b, c) {
					o(!1, a, b, c);
				}),
				(f.globalTimeScale = function (b) {
					var d = a._rootTimeline,
						e = c.ticker.time;
					return arguments.length
						? ((b = b || g),
							(d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
							(d = a._rootFramesTimeline),
							(e = c.ticker.frame),
							(d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
							(d._timeScale = a._rootTimeline._timeScale = b),
							b)
						: d._timeScale;
				}),
				(k.progress = function (a, b) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration();
				}),
				(k.totalProgress = function (a, b) {
					return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
				}),
				(k.time = function (a, b) {
					return arguments.length
						? (this._dirty && this.totalDuration(),
							a > this._duration && (a = this._duration),
							this._yoyo && 0 !== (1 & this._cycle) ? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
							this.totalTime(a, b))
						: this._time;
				}),
				(k.duration = function (b) {
					return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
				}),
				(k.totalDuration = function (a) {
					return arguments.length
						? -1 === this._repeat
							? this
							: this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1))
						: (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
				}),
				(k.repeat = function (a) {
					return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
				}),
				(k.repeatDelay = function (a) {
					return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
				}),
				(k.yoyo = function (a) {
					return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
				}),
				f
			);
		},
		!0
	),
		_gsScope._gsDefine(
			"TimelineLite",
			["core.Animation", "core.SimpleTimeline", "TweenLite"],
			function (a, b, c) {
				var d = function (a) {
					b.call(this, a),
						(this._labels = {}),
						(this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
						(this.smoothChildTiming = this.vars.smoothChildTiming === !0),
						(this._sortChildren = !0),
						(this._onUpdate = this.vars.onUpdate);
					var c,
						d,
						e = this.vars;
					for (d in e) (c = e[d]), i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
					i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
				},
					e = 1e-10,
					f = c._internals,
					g = (d._internals = {}),
					h = f.isSelector,
					i = f.isArray,
					j = f.lazyTweens,
					k = f.lazyRender,
					l = _gsScope._gsDefine.globals,
					m = function (a) {
						var b,
							c = {};
						for (b in a) c[b] = a[b];
						return c;
					},
					n = function (a, b, c) {
						var d,
							e,
							f = a.cycle;
						for (d in f) (e = f[d]), (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
						delete a.cycle;
					},
					o = (g.pauseCallback = function () { }),
					p = function (a) {
						var b,
							c = [],
							d = a.length;
						for (b = 0; b !== d; c.push(a[b++]));
						return c;
					},
					q = (d.prototype = new b());
				return (
					(d.version = "1.20.3"),
					(q.constructor = d),
					(q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
					(q.to = function (a, b, d, e) {
						var f = (d.repeat && l.TweenMax) || c;
						return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
					}),
					(q.from = function (a, b, d, e) {
						return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
					}),
					(q.fromTo = function (a, b, d, e, f) {
						var g = (e.repeat && l.TweenMax) || c;
						return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
					}),
					(q.staggerTo = function (a, b, e, f, g, i, j, k) {
						var l,
							o,
							q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }),
							r = e.cycle;
						for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && ((a = p(a)), a.reverse(), (f *= -1)), o = 0; o < a.length; o++)
							(l = m(e)), l.startAt && ((l.startAt = m(l.startAt)), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && ((b = l.duration), delete l.duration)), q.to(a[o], b, l, o * f);
						return this.add(q, g);
					}),
					(q.staggerFrom = function (a, b, c, d, e, f, g, h) {
						return (c.immediateRender = 0 != c.immediateRender), (c.runBackwards = !0), this.staggerTo(a, b, c, d, e, f, g, h);
					}),
					(q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
						return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), this.staggerTo(a, b, d, e, f, g, h, i);
					}),
					(q.call = function (a, b, d, e) {
						return this.add(c.delayedCall(0, a, b, d), e);
					}),
					(q.set = function (a, b, d) {
						return (d = this._parseTimeOrLabel(d, 0, !0)), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d);
					}),
					(d.exportRoot = function (a, b) {
						(a = a || {}), null == a.smoothChildTiming && (a.smoothChildTiming = !0);
						var e,
							f,
							g,
							h,
							i = new d(a),
							j = i._timeline;
						for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;)
							(h = g._next), (b && g instanceof c && g.target === g.vars.onComplete) || ((f = g._startTime - g._delay), 0 > f && (e = 1), i.add(g, f)), (g = h);
						return j.add(i, 0), e && i.totalDuration(), i;
					}),
					(q.add = function (e, f, g, h) {
						var j, k, l, m, n, o;
						if (("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a))) {
							if (e instanceof Array || (e && e.push && i(e))) {
								for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++)
									i((m = e[l])) && (m = new d({ tweens: m })),
										this.add(m, j),
										"string" != typeof m && "function" != typeof m && ("sequence" === g ? (j = m._startTime + m.totalDuration() / m._timeScale) : "start" === g && (m._startTime -= m.delay())),
										(j += h);
								return this._uncache(!0);
							}
							if ("string" == typeof e) return this.addLabel(e, f);
							if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
							e = c.delayedCall(0, e);
						}
						if ((b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
							for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), (n = n._timeline);
						return this;
					}),
					(q.remove = function (b) {
						if (b instanceof a) {
							this._remove(b, !1);
							var c = (b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline);
							return (b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale), this;
						}
						if (b instanceof Array || (b && b.push && i(b))) {
							for (var d = b.length; --d > -1;) this.remove(b[d]);
							return this;
						}
						return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
					}),
					(q._remove = function (a, c) {
						b.prototype._remove.call(this, a, c);
						var d = this._last;
						return d ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0), this;
					}),
					(q.append = function (a, b) {
						return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
					}),
					(q.insert = q.insertMultiple = function (a, b, c, d) {
						return this.add(a, b || 0, c, d);
					}),
					(q.appendMultiple = function (a, b, c, d) {
						return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
					}),
					(q.addLabel = function (a, b) {
						return (this._labels[a] = this._parseTimeOrLabel(b)), this;
					}),
					(q.addPause = function (a, b, d, e) {
						var f = c.delayedCall(0, o, d, e || this);
						return (f.vars.onComplete = f.vars.onReverseComplete = b), (f.data = "isPause"), (this._hasPause = !0), this.add(f, a);
					}),
					(q.removeLabel = function (a) {
						return delete this._labels[a], this;
					}),
					(q.getLabelTime = function (a) {
						return null != this._labels[a] ? this._labels[a] : -1;
					}),
					(q._parseTimeOrLabel = function (b, c, d, e) {
						var f, g;
						if (e instanceof a && e.timeline === this) this.remove(e);
						else if (e && (e instanceof Array || (e.push && i(e)))) for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
						if (((f = "number" != typeof b || c ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof c))
							return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
						if (((c = c || 0), "string" != typeof b || (!isNaN(b) && null == this._labels[b]))) null == b && (b = f);
						else {
							if (((g = b.indexOf("=")), -1 === g)) return null == this._labels[b] ? (d ? (this._labels[b] = f + c) : c) : this._labels[b] + c;
							(c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))), (b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
						}
						return Number(b) + c;
					}),
					(q.seek = function (a, b) {
						return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
					}),
					(q.stop = function () {
						return this.paused(!0);
					}),
					(q.gotoAndPlay = function (a, b) {
						return this.play(a, b);
					}),
					(q.gotoAndStop = function (a, b) {
						return this.pause(a, b);
					}),
					(q.render = function (a, b, c) {
						this._gc && this._enabled(!0, !1);
						var d,
							f,
							g,
							h,
							i,
							l,
							m,
							n = this._time,
							o = this._dirty ? this.totalDuration() : this._totalDuration,
							p = this._startTime,
							q = this._timeScale,
							r = this._paused;
						if ((n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0))
							(this._totalTime = this._time = o),
								this._reversed ||
								this._hasPausedChild() ||
								((f = !0),
									(h = "onComplete"),
									(i = !!this._timeline.autoRemoveChildren),
									0 === this._duration &&
									((0 >= a && a >= -1e-7) || this._rawPrevTime < 0 || this._rawPrevTime === e) &&
									this._rawPrevTime !== a &&
									this._first &&
									((i = !0), this._rawPrevTime > e && (h = "onReverseComplete"))),
								(this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
								(a = o + 1e-4);
						else if (1e-7 > a)
							if (
								((this._totalTime = this._time = 0),
									(0 !== n || (0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || (0 > a && this._rawPrevTime >= 0)))) && ((h = "onReverseComplete"), (f = this._reversed)),
									0 > a)
							)
								(this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((i = f = !0), (h = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (i = !0), (this._rawPrevTime = a);
							else {
								if (((this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e), 0 === a && f)) for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), (d = d._next);
								(a = 0), this._initted || (i = !0);
							}
						else {
							if (this._hasPause && !this._forcingPlayhead && !b) {
								if (a >= n) for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || (0 === d._startTime && 0 === this._rawPrevTime) || (l = d), (d = d._next);
								else for (d = this._last; d && d._startTime >= a && !l;) d._duration || ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)), (d = d._prev);
								l && ((this._time = a = l._startTime), (this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
							}
							this._totalTime = this._time = this._rawPrevTime = a;
						}
						if ((this._time !== n && this._first) || c || i || l) {
							if (
								(this._initted || (this._initted = !0),
									this._active || (!this._paused && this._time !== n && a > 0 && (this._active = !0)),
									0 === n && this.vars.onStart && ((0 === this._time && this._duration) || b || this._callback("onStart")),
									(m = this._time),
									m >= n)
							)
								for (d = this._first; d && ((g = d._next), m === this._time && (!this._paused || r));)
									(d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
										(l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
										(d = g);
							else
								for (d = this._last; d && ((g = d._prev), m === this._time && (!this._paused || r));) {
									if (d._active || (d._startTime <= n && !d._paused && !d._gc)) {
										if (l === d) {
											for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), (l = l._prev);
											(l = null), this.pause();
										}
										d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
									}
									d = g;
								}
							this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))),
								h &&
								(this._gc ||
									((p === this._startTime || q !== this._timeScale) &&
										(0 === this._time || o >= this.totalDuration()) &&
										(f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !b && this.vars[h] && this._callback(h))));
						}
					}),
					(q._hasPausedChild = function () {
						for (var a = this._first; a;) {
							if (a._paused || (a instanceof d && a._hasPausedChild())) return !0;
							a = a._next;
						}
						return !1;
					}),
					(q.getChildren = function (a, b, d, e) {
						e = e || -9999999999;
						for (var f = [], g = this._first, h = 0; g;)
							g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && ((f = f.concat(g.getChildren(!0, b, d))), (h = f.length)))), (g = g._next);
						return f;
					}),
					(q.getTweensOf = function (a, b) {
						var d,
							e,
							f = this._gc,
							g = [],
							h = 0;
						for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) (d[e].timeline === this || (b && this._contains(d[e]))) && (g[h++] = d[e]);
						return f && this._enabled(!1, !0), g;
					}),
					(q.recent = function () {
						return this._recent;
					}),
					(q._contains = function (a) {
						for (var b = a.timeline; b;) {
							if (b === this) return !0;
							b = b.timeline;
						}
						return !1;
					}),
					(q.shiftChildren = function (a, b, c) {
						c = c || 0;
						for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), (e = e._next);
						if (b) for (d in f) f[d] >= c && (f[d] += a);
						return this._uncache(!0);
					}),
					(q._kill = function (a, b) {
						if (!a && !b) return this._enabled(!1, !1);
						for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
						return e;
					}),
					(q.clear = function (a) {
						var b = this.getChildren(!1, !0, !0),
							c = b.length;
						for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
						return a !== !1 && (this._labels = {}), this._uncache(!0);
					}),
					(q.invalidate = function () {
						for (var b = this._first; b;) b.invalidate(), (b = b._next);
						return a.prototype.invalidate.call(this);
					}),
					(q._enabled = function (a, c) {
						if (a === this._gc) for (var d = this._first; d;) d._enabled(a, !0), (d = d._next);
						return b.prototype._enabled.call(this, a, c);
					}),
					(q.totalTime = function (b, c, d) {
						this._forcingPlayhead = !0;
						var e = a.prototype.totalTime.apply(this, arguments);
						return (this._forcingPlayhead = !1), e;
					}),
					(q.duration = function (a) {
						return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
					}),
					(q.totalDuration = function (a) {
						if (!arguments.length) {
							if (this._dirty) {
								for (var b, c, d = 0, e = this._last, f = 999999999999; e;)
									(b = e._prev),
										e._dirty && e.totalDuration(),
										e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration
											? ((this._calculatingDuration = 1), this.add(e, e._startTime - e._delay), (this._calculatingDuration = 0))
											: (f = e._startTime),
										e._startTime < 0 &&
										!e._paused &&
										((d -= e._startTime),
											this._timeline.smoothChildTiming && ((this._startTime += e._startTime / this._timeScale), (this._time -= e._startTime), (this._totalTime -= e._startTime), (this._rawPrevTime -= e._startTime)),
											this.shiftChildren(-e._startTime, !1, -9999999999),
											(f = 0)),
										(c = e._startTime + e._totalDuration / e._timeScale),
										c > d && (d = c),
										(e = b);
								(this._duration = this._totalDuration = d), (this._dirty = !1);
							}
							return this._totalDuration;
						}
						return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
					}),
					(q.paused = function (b) {
						if (!b) for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), (c = c._next);
						return a.prototype.paused.apply(this, arguments);
					}),
					(q.usesFrames = function () {
						for (var b = this._timeline; b._timeline;) b = b._timeline;
						return b === a._rootFramesTimeline;
					}),
					(q.rawTime = function (a) {
						return a && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
							? this._totalTime % (this._duration + this._repeatDelay)
							: this._paused
								? this._totalTime
								: (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
					}),
					d
				);
			},
			!0
		),
		_gsScope._gsDefine(
			"TimelineMax",
			["TimelineLite", "TweenLite", "easing.Ease"],
			function (a, b, c) {
				var d = function (b) {
					a.call(this, b), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = this.vars.yoyo === !0), (this._dirty = !0);
				},
					e = 1e-10,
					f = b._internals,
					g = f.lazyTweens,
					h = f.lazyRender,
					i = _gsScope._gsDefine.globals,
					j = new c(null, null, 1, 0),
					k = (d.prototype = new a());
				return (
					(k.constructor = d),
					(k.kill()._gc = !1),
					(d.version = "1.20.3"),
					(k.invalidate = function () {
						return (this._yoyo = this.vars.yoyo === !0), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), a.prototype.invalidate.call(this);
					}),
					(k.addCallback = function (a, c, d, e) {
						return this.add(b.delayedCall(0, a, d, e), c);
					}),
					(k.removeCallback = function (a, b) {
						if (a)
							if (null == b) this._kill(null, a);
							else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
						return this;
					}),
					(k.removePause = function (b) {
						return this.removeCallback(a._internals.pauseCallback, b);
					}),
					(k.tweenTo = function (a, c) {
						c = c || {};
						var d,
							e,
							f,
							g = { ease: j, useFrames: this.usesFrames(), immediateRender: !1 },
							h = (c.repeat && i.TweenMax) || b;
						for (e in c) g[e] = c[e];
						return (
							(g.time = this._parseTimeOrLabel(a)),
							(d = Math.abs(Number(g.time) - this._time) / this._timeScale || 0.001),
							(f = new h(this, d, g)),
							(g.onStart = function () {
								f.target.paused(!0),
									f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale),
									c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
							}),
							f
						);
					}),
					(k.tweenFromTo = function (a, b, c) {
						(c = c || {}), (a = this._parseTimeOrLabel(a)), (c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }), (c.immediateRender = c.immediateRender !== !1);
						var d = this.tweenTo(b, c);
						return d.duration(Math.abs(d.vars.time - a) / this._timeScale || 0.001);
					}),
					(k.render = function (a, b, c) {
						this._gc && this._enabled(!0, !1);
						var d,
							f,
							i,
							j,
							k,
							l,
							m,
							n,
							o = this._time,
							p = this._dirty ? this.totalDuration() : this._totalDuration,
							q = this._duration,
							r = this._totalTime,
							s = this._startTime,
							t = this._timeScale,
							u = this._rawPrevTime,
							v = this._paused,
							w = this._cycle;
						if ((o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0))
							this._locked || ((this._totalTime = p), (this._cycle = this._repeat)),
								this._reversed ||
								this._hasPausedChild() ||
								((f = !0),
									(j = "onComplete"),
									(k = !!this._timeline.autoRemoveChildren),
									0 === this._duration && ((0 >= a && a >= -1e-7) || 0 > u || u === e) && u !== a && this._first && ((k = !0), u > e && (j = "onReverseComplete"))),
								(this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
								this._yoyo && 0 !== (1 & this._cycle) ? (this._time = a = 0) : ((this._time = q), (a = q + 1e-4));
						else if (1e-7 > a)
							if (
								(this._locked || (this._totalTime = this._cycle = 0),
									(this._time = 0),
									(0 !== o || (0 === q && u !== e && (u > 0 || (0 > a && u >= 0)) && !this._locked)) && ((j = "onReverseComplete"), (f = this._reversed)),
									0 > a)
							)
								(this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((k = f = !0), (j = "onReverseComplete")) : u >= 0 && this._first && (k = !0), (this._rawPrevTime = a);
							else {
								if (((this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e), 0 === a && f)) for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), (d = d._next);
								(a = 0), this._initted || (k = !0);
							}
						else if (
							(0 === q && 0 > u && (k = !0),
								(this._time = this._rawPrevTime = a),
								this._locked ||
								((this._totalTime = a),
									0 !== this._repeat &&
									((l = q + this._repeatDelay),
										(this._cycle = (this._totalTime / l) >> 0),
										0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--,
										(this._time = this._totalTime - this._cycle * l),
										this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time),
										this._time > q ? ((this._time = q), (a = q + 1e-4)) : this._time < 0 ? (this._time = a = 0) : (a = this._time))),
								this._hasPause && !this._forcingPlayhead && !b)
						) {
							if (((a = this._time), a >= o || (this._repeat && w !== this._cycle)))
								for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || (0 === d._startTime && 0 === this._rawPrevTime) || (m = d), (d = d._next);
							else for (d = this._last; d && d._startTime >= a && !m;) d._duration || ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)), (d = d._prev);
							m && m._startTime < q && ((this._time = a = m._startTime), (this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
						}
						if (this._cycle !== w && !this._locked) {
							var x = this._yoyo && 0 !== (1 & w),
								y = x === (this._yoyo && 0 !== (1 & this._cycle)),
								z = this._totalTime,
								A = this._cycle,
								B = this._rawPrevTime,
								C = this._time;
							if (
								((this._totalTime = w * q),
									this._cycle < w ? (x = !x) : (this._totalTime += q),
									(this._time = o),
									(this._rawPrevTime = 0 === q ? u - 1e-4 : u),
									(this._cycle = w),
									(this._locked = !0),
									(o = x ? 0 : q),
									this.render(o, b, 0 === q),
									b || this._gc || (this.vars.onRepeat && ((this._cycle = A), (this._locked = !1), this._callback("onRepeat"))),
									o !== this._time)
							)
								return;
							if ((y && ((this._cycle = w), (this._locked = !0), (o = x ? q + 1e-4 : -1e-4), this.render(o, !0, !1)), (this._locked = !1), this._paused && !v)) return;
							(this._time = C), (this._totalTime = z), (this._cycle = A), (this._rawPrevTime = B);
						}
						if (!((this._time !== o && this._first) || c || k || m)) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
						if (
							(this._initted || (this._initted = !0),
								this._active || (!this._paused && this._totalTime !== r && a > 0 && (this._active = !0)),
								0 === r && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || b || this._callback("onStart")),
								(n = this._time),
								n >= o)
						)
							for (d = this._first; d && ((i = d._next), n === this._time && (!this._paused || v));)
								(d._active || (d._startTime <= this._time && !d._paused && !d._gc)) &&
									(m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
									(d = i);
						else
							for (d = this._last; d && ((i = d._prev), n === this._time && (!this._paused || v));) {
								if (d._active || (d._startTime <= o && !d._paused && !d._gc)) {
									if (m === d) {
										for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), (m = m._prev);
										(m = null), this.pause();
									}
									d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
								}
								d = i;
							}
						this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))),
							j &&
							(this._locked ||
								this._gc ||
								((s === this._startTime || t !== this._timeScale) &&
									(0 === this._time || p >= this.totalDuration()) &&
									(f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !b && this.vars[j] && this._callback(j))));
					}),
					(k.getActive = function (a, b, c) {
						null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
						var d,
							e,
							f = [],
							g = this.getChildren(a, b, c),
							h = 0,
							i = g.length;
						for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
						return f;
					}),
					(k.getLabelAfter = function (a) {
						a || (0 !== a && (a = this._time));
						var b,
							c = this.getLabelsArray(),
							d = c.length;
						for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
						return null;
					}),
					(k.getLabelBefore = function (a) {
						null == a && (a = this._time);
						for (var b = this.getLabelsArray(), c = b.length; --c > -1;) if (b[c].time < a) return b[c].name;
						return null;
					}),
					(k.getLabelsArray = function () {
						var a,
							b = [],
							c = 0;
						for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
						return (
							b.sort(function (a, b) {
								return a.time - b.time;
							}),
							b
						);
					}),
					(k.invalidate = function () {
						return (this._locked = !1), a.prototype.invalidate.call(this);
					}),
					(k.progress = function (a, b) {
						return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
					}),
					(k.totalProgress = function (a, b) {
						return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
					}),
					(k.totalDuration = function (b) {
						return arguments.length
							? -1 !== this._repeat && b
								? this.timeScale(this.totalDuration() / b)
								: this
							: (this._dirty && (a.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
					}),
					(k.time = function (a, b) {
						return arguments.length
							? (this._dirty && this.totalDuration(),
								a > this._duration && (a = this._duration),
								this._yoyo && 0 !== (1 & this._cycle) ? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
								this.totalTime(a, b))
							: this._time;
					}),
					(k.repeat = function (a) {
						return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
					}),
					(k.repeatDelay = function (a) {
						return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
					}),
					(k.yoyo = function (a) {
						return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
					}),
					(k.currentLabel = function (a) {
						return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
					}),
					d
				);
			},
			!0
		),
		(function () {
			var a = 180 / Math.PI,
				b = [],
				c = [],
				d = [],
				e = {},
				f = _gsScope._gsDefine.globals,
				g = function (a, b, c, d) {
					c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), (this.a = a), (this.b = b), (this.c = c), (this.d = d), (this.da = d - a), (this.ca = c - a), (this.ba = b - a);
				},
				h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
				i = function (a, b, c, d) {
					var e = { a: a },
						f = {},
						g = {},
						h = { c: d },
						i = (a + b) / 2,
						j = (b + c) / 2,
						k = (c + d) / 2,
						l = (i + j) / 2,
						m = (j + k) / 2,
						n = (m - l) / 8;
					return (e.b = i + (a - i) / 4), (f.b = l + n), (e.c = f.a = (e.b + f.b) / 2), (f.c = g.a = (l + m) / 2), (g.b = m - n), (h.b = k + (d - k) / 4), (g.c = h.a = (g.b + h.b) / 2), [e, f, g, h];
				},
				j = function (a, e, f, g, h) {
					var j,
						k,
						l,
						m,
						n,
						o,
						p,
						q,
						r,
						s,
						t,
						u,
						v,
						w = a.length - 1,
						x = 0,
						y = a[0].a;
					for (j = 0; w > j; j++)
						(n = a[x]),
							(k = n.a),
							(l = n.d),
							(m = a[x + 1].d),
							h
								? ((t = b[j]),
									(u = c[j]),
									(v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
									(o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
									(p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
									(q = l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
								: ((o = l - (l - k) * e * 0.5), (p = l + (m - l) * e * 0.5), (q = l - (o + p) / 2)),
							(o += q),
							(p += q),
							(n.c = r = o),
							0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
							(n.da = l - k),
							(n.ca = r - k),
							(n.ba = y - k),
							f ? ((s = i(k, y, r, l)), a.splice(x, 1, s[0], s[1], s[2], s[3]), (x += 4)) : x++,
							(y = p);
					(n = a[x]), (n.b = y), (n.c = y + 0.4 * (n.d - y)), (n.da = n.d - n.a), (n.ca = n.c - n.a), (n.ba = y - n.a), f && ((s = i(n.a, y, n.c, n.d)), a.splice(x, 1, s[0], s[1], s[2], s[3]));
				},
				k = function (a, d, e, f) {
					var h,
						i,
						j,
						k,
						l,
						m,
						n = [];
					if (f) for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
					if (((h = a.length - 2), 0 > h)) return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
					for (i = 0; h > i; i++) (j = a[i][d]), (k = a[i + 1][d]), (n[i] = new g(j, 0, 0, k)), e && ((l = a[i + 2][d]), (b[i] = (b[i] || 0) + (k - j) * (k - j)), (c[i] = (c[i] || 0) + (l - k) * (l - k)));
					return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
				},
				l = function (a, f, g, i, l, m) {
					var n,
						o,
						p,
						q,
						r,
						s,
						t,
						u,
						v = {},
						w = [],
						x = m || a[0];
					(l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
					for (o in a[0]) w.push(o);
					if (a.length > 1) {
						for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
							if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
								t = !1;
								break;
							}
						t && ((a = a.concat()), m && a.unshift(m), a.push(a[1]), (m = a[a.length - 3]));
					}
					for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) (o = w[n]), (e[o] = -1 !== l.indexOf("," + o + ",")), (v[o] = k(a, o, e[o], m));
					for (n = b.length; --n > -1;) (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
					if (!i) {
						for (n = w.length; --n > -1;) if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0), (d[q] = (d[q] || 0) + r * r);
						for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n]);
					}
					for (n = w.length, q = g ? 4 : 1; --n > -1;) (o = w[n]), (p = v[o]), j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
					return v;
				},
				m = function (a, b, c) {
					b = b || "soft";
					var d,
						e,
						f,
						h,
						i,
						j,
						k,
						l,
						m,
						n,
						o,
						p = {},
						q = "cubic" === b ? 3 : 2,
						r = "soft" === b,
						s = [];
					if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1)) throw "invalid Bezier data";
					for (m in a[0]) s.push(m);
					for (j = s.length; --j > -1;) {
						for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++)
							(d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o)), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), (i[n++] = d);
						for (l = n - q + 1, n = 0, k = 0; l > k; k += q) (d = i[k]), (e = i[k + 1]), (f = i[k + 2]), (h = 2 === q ? 0 : i[k + 3]), (i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
						i.length = n;
					}
					return p;
				},
				n = function (a, b, c) {
					for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
						for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++)
							(j = o * k), (l = 1 - j), (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)), (n = p * c + k - 1), (b[n] = (b[n] || 0) + d * d);
				},
				o = function (a, b) {
					b = b >> 0 || 6;
					var c,
						d,
						e,
						f,
						g = [],
						h = [],
						i = 0,
						j = 0,
						k = b - 1,
						l = [],
						m = [];
					for (c in a) n(a[c], g, b);
					for (e = g.length, d = 0; e > d; d++) (i += Math.sqrt(g[d])), (f = d % b), (m[f] = i), f === k && ((j += i), (f = (d / b) >> 0), (l[f] = m), (h[f] = j), (i = 0), (m = []));
					return { length: j, lengths: h, segments: l };
				},
				p = _gsScope._gsDefine.plugin({
					propName: "bezier",
					priority: -1,
					version: "1.3.8",
					API: 2,
					global: !0,
					init: function (a, b, c) {
						(this._target = a), b instanceof Array && (b = { values: b }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
						var d,
							e,
							f,
							g,
							h,
							i = b.values || [],
							j = {},
							k = i[0],
							n = b.autoRotate || c.vars.orientToBezier;
						this._autoRotate = n ? (n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]) : null;
						for (d in k) this._props.push(d);
						for (f = this._props.length; --f > -1;)
							(d = this._props[f]),
								this._overwriteProps.push(d),
								(e = this._func[d] = "function" == typeof a[d]),
								(j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d])),
								h || (j[d] !== i[0][d] && (h = j));
						if (
							((this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j)),
								(this._segCount = this._beziers[d].length),
								this._timeRes)
						) {
							var p = o(this._beziers, this._timeRes);
							(this._length = p.length),
								(this._lengths = p.lengths),
								(this._segments = p.segments),
								(this._l1 = this._li = this._s1 = this._si = 0),
								(this._l2 = this._lengths[0]),
								(this._curSeg = this._segments[0]),
								(this._s2 = this._curSeg[0]),
								(this._prec = 1 / this._curSeg.length);
						}
						if ((n = this._autoRotate))
							for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
								for (g = 0; 3 > g; g++) (d = n[f][g]), (this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1);
								(d = n[f][2]), (this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0), this._overwriteProps.push(d);
							}
						return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
					},
					set: function (b) {
						var c,
							d,
							e,
							f,
							g,
							h,
							i,
							j,
							k,
							l,
							m = this._segCount,
							n = this._func,
							o = this._target,
							p = b !== this._startRatio;
						if (this._timeRes) {
							if (((k = this._lengths), (l = this._curSeg), (b *= this._length), (e = this._li), b > this._l2 && m - 1 > e)) {
								for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
								(this._l1 = k[e - 1]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s2 = l[(this._s1 = this._si = 0)]);
							} else if (b < this._l1 && e > 0) {
								for (; e > 0 && (this._l1 = k[--e]) >= b;);
								0 === e && b < this._l1 ? (this._l1 = 0) : e++, (this._l2 = k[e]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s1 = l[(this._si = l.length - 1) - 1] || 0), (this._s2 = l[this._si]);
							}
							if (((c = e), (b -= this._l1), (e = this._si), b > this._s2 && e < l.length - 1)) {
								for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
								(this._s1 = l[e - 1]), (this._si = e);
							} else if (b < this._s1 && e > 0) {
								for (; e > 0 && (this._s1 = l[--e]) >= b;);
								0 === e && b < this._s1 ? (this._s1 = 0) : e++, (this._s2 = l[e]), (this._si = e);
							}
							h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
						} else (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0), (h = (b - c * (1 / m)) * m);
						for (d = 1 - h, e = this._props.length; --e > -1;)
							(f = this._props[e]), (g = this._beziers[f][c]), (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a), this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : (o[f] = i);
						if (this._autoRotate) {
							var q,
								r,
								s,
								t,
								u,
								v,
								w,
								x = this._autoRotate;
							for (e = x.length; --e > -1;)
								(f = x[e][2]),
									(v = x[e][3] || 0),
									(w = x[e][4] === !0 ? 1 : a),
									(g = this._beziers[x[e][0]]),
									(q = this._beziers[x[e][1]]),
									g &&
									q &&
									((g = g[c]),
										(q = q[c]),
										(r = g.a + (g.b - g.a) * h),
										(t = g.b + (g.c - g.b) * h),
										(r += (t - r) * h),
										(t += (g.c + (g.d - g.c) * h - t) * h),
										(s = q.a + (q.b - q.a) * h),
										(u = q.b + (q.c - q.b) * h),
										(s += (u - s) * h),
										(u += (q.c + (q.d - q.c) * h - u) * h),
										(i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e]),
										this._mod[f] && (i = this._mod[f](i, o)),
										n[f] ? o[f](i) : (o[f] = i));
						}
					},
				}),
				q = p.prototype;
			(p.bezierThrough = l),
				(p.cubicToQuadratic = i),
				(p._autoCSS = !0),
				(p.quadraticToCubic = function (a, b, c) {
					return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
				}),
				(p._cssRegister = function () {
					var a = f.CSSPlugin;
					if (a) {
						var b = a._internals,
							c = b._parseToProxy,
							d = b._setPluginRatio,
							e = b.CSSPropTween;
						b._registerComplexSpecialProp("bezier", {
							parser: function (a, b, f, g, h, i) {
								b instanceof Array && (b = { values: b }), (i = new p());
								var j,
									k,
									l,
									m = b.values,
									n = m.length - 1,
									o = [],
									q = {};
								if (0 > n) return h;
								for (j = 0; n >= j; j++) (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
								for (k in b) q[k] = b[k];
								return (
									(q.values = o),
									(h = new e(a, "bezier", 0, 0, l.pt, 2)),
									(h.data = l),
									(h.plugin = i),
									(h.setRatio = d),
									0 === q.autoRotate && (q.autoRotate = !0),
									!q.autoRotate ||
									q.autoRotate instanceof Array ||
									((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)), (q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1)),
									q.autoRotate && (g._transform || g._enableTransforms(!1), (l.autoRotate = g._target._gsTransform), (l.proxy.rotation = l.autoRotate.rotation || 0), g._overwriteProps.push("rotation")),
									i._onInitTween(l.proxy, q, g._tween),
									h
								);
							},
						});
					}
				}),
				(q._mod = function (a) {
					for (var b, c = this._overwriteProps, d = c.length; --d > -1;) (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
				}),
				(q._kill = function (a) {
					var b,
						c,
						d = this._props;
					for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
					if ((d = this._autoRotate)) for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
					return this._super._kill.call(this, a);
				});
		})(),
		_gsScope._gsDefine(
			"plugins.CSSPlugin",
			["plugins.TweenPlugin", "TweenLite"],
			function (a, b) {
				var c,
					d,
					e,
					f,
					g = function () {
						a.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = g.prototype.setRatio);
					},
					h = _gsScope._gsDefine.globals,
					i = {},
					j = (g.prototype = new a("css"));
				(j.constructor = g),
					(g.version = "1.20.3"),
					(g.API = 2),
					(g.defaultTransformPerspective = 0),
					(g.defaultSkewType = "compensated"),
					(g.defaultSmoothOrigin = !0),
					(j = "px"),
					(g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" });
				var k,
					l,
					m,
					n,
					o,
					p,
					q,
					r,
					s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
					t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					w = /(?:\d|\-|\+|=|#|\.)*/g,
					x = /opacity *= *([^)]*)/i,
					y = /opacity:([^;]*)/i,
					z = /alpha\(opacity *=.+?\)/i,
					A = /^(rgb|hsl)/,
					B = /([A-Z])/g,
					C = /-([a-z])/gi,
					D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					E = function (a, b) {
						return b.toUpperCase();
					},
					F = /(?:Left|Right|Width)/i,
					G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					I = /,(?=[^\)]*(?:\(|$))/gi,
					J = /[\s,\(]/i,
					K = Math.PI / 180,
					L = 180 / Math.PI,
					M = {},
					N = { style: {} },
					O = _gsScope.document || {
						createElement: function () {
							return N;
						},
					},
					P = function (a, b) {
						return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a);
					},
					Q = P("div"),
					R = P("img"),
					S = (g._internals = { _specialProps: i }),
					T = (_gsScope.navigator || {}).userAgent || "",
					U = (function () {
						var a = T.indexOf("Android"),
							b = P("a");
						return (
							(m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
							(o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
							(n = -1 !== T.indexOf("Firefox")),
							(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)),
							b ? ((b.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(b.style.opacity)) : !1
						);
					})(),
					V = function (a) {
						return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
					},
					W = function (a) {
						_gsScope.console && console.log(a);
					},
					X = "",
					Y = "",
					Z = function (a, b) {
						b = b || Q;
						var c,
							d,
							e = b.style;
						if (void 0 !== e[a]) return a;
						for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
						return d >= 0 ? ((Y = 3 === d ? "ms" : c[d]), (X = "-" + Y.toLowerCase() + "-"), Y + a) : null;
					},
					$ = O.defaultView ? O.defaultView.getComputedStyle : function () { },
					_ = (g.getStyle = function (a, b, c, d, e) {
						var f;
						return U || "opacity" !== b
							? (!d && a.style[b] ? (f = a.style[b]) : (c = c || $(a)) ? (f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase())) : a.currentStyle && (f = a.currentStyle[b]),
								null == e || (f && "none" !== f && "auto" !== f && "auto auto" !== f) ? f : e)
							: V(a);
					}),
					aa = (S.convertToPixels = function (a, c, d, e, f) {
						if ("px" === e || (!e && "lineHeight" !== c)) return d;
						if ("auto" === e || !d) return 0;
						var h,
							i,
							j,
							k = F.test(c),
							l = a,
							m = Q.style,
							n = 0 > d,
							o = 1 === d;
						if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
							if ("%" === e && -1 !== c.indexOf("border")) h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
							else {
								if (((m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;"), "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e))
									m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
								else {
									if (((l = a.parentNode || O.body), -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), (i = l._gsCache), (j = b.ticker.frame), i && k && i.time === j)) return (i.width * d) / 100;
									m[k ? "width" : "height"] = d + e;
								}
								l.appendChild(Q),
									(h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
									l.removeChild(Q),
									k && "%" === e && g.cacheWidths !== !1 && ((i = l._gsCache = l._gsCache || {}), (i.time = j), (i.width = (h / d) * 100)),
									0 !== h || f || (h = aa(a, c, d, e, !0));
							}
						else (i = $(a).lineHeight), (a.style.lineHeight = d), (h = parseFloat($(a).lineHeight)), (a.style.lineHeight = i);
						return o && (h /= 100), n ? -h : h;
					}),
					ba = (S.calculateOffset = function (a, b, c) {
						if ("absolute" !== _(a, "position", c)) return 0;
						var d = "left" === b ? "Left" : "Top",
							e = _(a, "margin" + d, c);
						return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0);
					}),
					ca = function (a, b) {
						var c,
							d,
							e,
							f = {};
						if ((b = b || $(a, null)))
							if ((c = b.length)) for (; --c > -1;) (e = b[c]), (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
							else for (c in b) (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
						else if ((b = a.currentStyle || a.style)) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
						return (
							U || (f.opacity = V(a)),
							(d = Ra(a, b, !1)),
							(f.rotation = d.rotation),
							(f.skewX = d.skewX),
							(f.scaleX = d.scaleX),
							(f.scaleY = d.scaleY),
							(f.x = d.x),
							(f.y = d.y),
							Fa && ((f.z = d.z), (f.rotationX = d.rotationX), (f.rotationY = d.rotationY), (f.scaleZ = d.scaleZ)),
							f.filters && delete f.filters,
							f
						);
					},
					da = function (a, b, c, d, e) {
						var f,
							g,
							h,
							i = {},
							j = a.style;
						for (g in c)
							"cssText" !== g &&
								"length" !== g &&
								isNaN(g) &&
								(b[g] !== (f = c[g]) || (e && e[g])) &&
								-1 === g.indexOf("Origin") &&
								("number" == typeof f || "string" == typeof f) &&
								((i[g] = "auto" !== f || ("left" !== g && "top" !== g) ? (("" !== f && "auto" !== f && "none" !== f) || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0) : ba(a, g)),
									void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
						if (d) for (g in d) "className" !== g && (i[g] = d[g]);
						return { difs: i, firstMPT: h };
					},
					ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
					fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					ga = function (a, b, c) {
						if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
						if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
						var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
							e = ea[b],
							f = e.length;
						for (c = c || $(a, null); --f > -1;) (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0), (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
						return d;
					},
					ha = function (a, b) {
						if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
						(null == a || "" === a) && (a = "0 0");
						var c,
							d = a.split(" "),
							e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
							f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
						if (d.length > 3 && !b) {
							for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
							return a.join(",");
						}
						return (
							null == f ? (f = "center" === e ? "50%" : "0") : "center" === f && (f = "50%"),
							("center" === e || (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) && (e = "50%"),
							(a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
							b &&
							((b.oxp = -1 !== e.indexOf("%")),
								(b.oyp = -1 !== f.indexOf("%")),
								(b.oxr = "=" === e.charAt(1)),
								(b.oyr = "=" === f.charAt(1)),
								(b.ox = parseFloat(e.replace(v, ""))),
								(b.oy = parseFloat(f.replace(v, ""))),
								(b.v = a)),
							b || a
						);
					},
					ia = function (a, b) {
						return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
					},
					ja = function (a, b) {
						return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
					},
					ka = function (a, b, c, d) {
						var e,
							f,
							g,
							h,
							i,
							j = 1e-6;
						return (
							"function" == typeof a && (a = a(r, q)),
							null == a
								? (h = b)
								: "number" == typeof a
									? (h = a)
									: ((e = 360),
										(f = a.split("_")),
										(i = "=" === a.charAt(1)),
										(g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b)),
										f.length &&
										(d && (d[c] = b + g),
											-1 !== a.indexOf("short") && ((g %= e), g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
											-1 !== a.indexOf("_cw") && 0 > g ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e) : -1 !== a.indexOf("ccw") && g > 0 && (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
										(h = b + g)),
							j > h && h > -j && (h = 0),
							h
						);
					},
					la = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0],
					},
					ma = function (a, b, c) {
						return (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a), (255 * (1 > 6 * a ? b + (c - b) * a * 6 : 0.5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + 0.5) | 0;
					},
					na = (g.parseColor = function (a, b) {
						var c, d, e, f, g, h, i, j, k, l, m;
						if (a)
							if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
							else {
								if (("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a])) c = la[a];
								else if ("#" === a.charAt(0))
									4 === a.length && ((d = a.charAt(1)), (e = a.charAt(2)), (f = a.charAt(3)), (a = "#" + d + d + e + e + f + f)), (a = parseInt(a.substr(1), 16)), (c = [a >> 16, (a >> 8) & 255, 255 & a]);
								else if ("hsl" === a.substr(0, 3))
									if (((c = m = a.match(s)), b)) {
										if (-1 !== a.indexOf("=")) return a.match(t);
									} else
										(g = (Number(c[0]) % 360) / 360),
											(h = Number(c[1]) / 100),
											(i = Number(c[2]) / 100),
											(e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
											(d = 2 * i - e),
											c.length > 3 && (c[3] = Number(c[3])),
											(c[0] = ma(g + 1 / 3, d, e)),
											(c[1] = ma(g, d, e)),
											(c[2] = ma(g - 1 / 3, d, e));
								else c = a.match(s) || la.transparent;
								(c[0] = Number(c[0])), (c[1] = Number(c[1])), (c[2] = Number(c[2])), c.length > 3 && (c[3] = Number(c[3]));
							}
						else c = la.black;
						return (
							b &&
							!m &&
							((d = c[0] / 255),
								(e = c[1] / 255),
								(f = c[2] / 255),
								(j = Math.max(d, e, f)),
								(k = Math.min(d, e, f)),
								(i = (j + k) / 2),
								j === k ? (g = h = 0) : ((l = j - k), (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)), (g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4), (g *= 60)),
								(c[0] = (g + 0.5) | 0),
								(c[1] = (100 * h + 0.5) | 0),
								(c[2] = (100 * i + 0.5) | 0)),
							c
						);
					}),
					oa = function (a, b) {
						var c,
							d,
							e,
							f = a.match(pa) || [],
							g = 0,
							h = "";
						if (!f.length) return a;
						for (c = 0; c < f.length; c++)
							(d = f[c]),
								(e = a.substr(g, a.indexOf(d, g) - g)),
								(g += e.length + d.length),
								(d = na(d, b)),
								3 === d.length && d.push(1),
								(h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")");
						return h + a.substr(g);
					},
					pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for (j in la) pa += "|" + j + "\\b";
				(pa = new RegExp(pa + ")", "gi")),
					(g.colorStringFilter = function (a) {
						var b,
							c = a[0] + " " + a[1];
						pa.test(c) && ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")), (a[0] = oa(a[0], b)), (a[1] = oa(a[1], b))), (pa.lastIndex = 0);
					}),
					b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
				var qa = function (a, b, c, d) {
					if (null == a)
						return function (a) {
							return a;
						};
					var e,
						f = b ? (a.match(pa) || [""])[0] : "",
						g = a.split(f).join("").match(u) || [],
						h = a.substr(0, a.indexOf(g[0])),
						i = ")" === a.charAt(a.length - 1) ? ")" : "",
						j = -1 !== a.indexOf(" ") ? " " : ",",
						k = g.length,
						l = k > 0 ? g[0].replace(s, "") : "";
					return k
						? (e = b
							? function (a) {
								var b, m, n, o;
								if ("number" == typeof a) a += l;
								else if (d && I.test(a)) {
									for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
									return o.join(",");
								}
								if (((b = (a.match(pa) || [f])[0]), (m = a.split(b).join("").match(u) || []), (n = m.length), k > n--)) for (; ++n < k;) m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
								return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
							}
							: function (a) {
								var b, f, m;
								if ("number" == typeof a) a += l;
								else if (d && I.test(a)) {
									for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
									return f.join(",");
								}
								if (((b = a.match(u) || []), (m = b.length), k > m--)) for (; ++m < k;) b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
								return h + b.join(j) + i;
							})
						: function (a) {
							return a;
						};
				},
					ra = function (a) {
						return (
							(a = a.split(",")),
							function (b, c, d, e, f, g, h) {
								var i,
									j = (c + "").split(" ");
								for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
								return e.parse(b, h, f, g);
							}
						);
					},
					sa =
						((S._setPluginRatio = function (a) {
							this.plugin.setRatio(a);
							for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) (b = h[i.v]), i.r ? (b = Math.round(b)) : j > b && b > -j && (b = 0), (i.t[i.p] = b), (i = i._next);
							if ((g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a))
								for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
									if (((c = i.t), c.type)) {
										if (1 === c.type) {
											for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
											c[f] = e;
										}
									} else c[f] = c.s + c.xs0;
									i = i._next;
								}
						}),
							function (a, b, c, d, e) {
								(this.t = a), (this.p = b), (this.v = c), (this.r = e), d && ((d._prev = this), (this._next = d));
							}),
					ta =
						((S._parseToProxy = function (a, b, c, d, e, f) {
							var g,
								h,
								i,
								j,
								k,
								l = d,
								m = {},
								n = {},
								o = c._transform,
								p = M;
							for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && ((c._transform = o), l && ((l._prev = null), l._prev && (l._prev._next = null))); d && d !== l;) {
								if (d.type <= 1 && ((h = d.p), (n[h] = d.s + d.c), (m[h] = d.s), f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)), 1 === d.type))
									for (g = d.l; --g > 0;) (i = "xn" + g), (h = d.p + "_" + i), (n[h] = d.data[i]), (m[h] = d[i]), f || (j = new sa(d, i, h, j, d.rxp[i]));
								d = d._next;
							}
							return { proxy: m, end: n, firstMPT: j, pt: k };
						}),
							(S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
								(this.t = a),
									(this.p = b),
									(this.s = d),
									(this.c = e),
									(this.n = i || b),
									a instanceof ta || f.push(this.n),
									(this.r = j),
									(this.type = h || 0),
									k && ((this.pr = k), (c = !0)),
									(this.b = void 0 === l ? d : l),
									(this.e = void 0 === m ? d + e : m),
									g && ((this._next = g), (g._prev = this));
							})),
					ua = function (a, b, c, d, e, f) {
						var g = new ta(a, b, c, d - c, e, -1, f);
						return (g.b = c), (g.e = g.xs0 = d), g;
					},
					va = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
						(c = c || f || ""),
							"function" == typeof d && (d = d(r, q)),
							(h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
							(d += ""),
							e && pa.test(d + c) && ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
						var m,
							n,
							o,
							p,
							u,
							v,
							w,
							x,
							y,
							z,
							A,
							B,
							C,
							D = c.split(", ").join(",").split(" "),
							E = d.split(", ").join(",").split(" "),
							F = D.length,
							G = k !== !1;
						for (
							(-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
							(-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
								? ((D = D.join(" ").replace(I, ", ").split(" ")), (E = E.join(" ").replace(I, ", ").split(" ")))
								: ((D = D.join(" ").split(",").join(", ").split(" ")), (E = E.join(" ").split(",").join(", ").split(" "))),
								(F = D.length)),
							F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
							h.plugin = j,
							h.setRatio = l,
							pa.lastIndex = 0,
							m = 0;
							F > m;
							m++
						)
							if (((p = D[m]), (u = E[m]), (x = parseFloat(p)), x || 0 === x)) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
							else if (e && pa.test(p))
								(B = u.indexOf(")") + 1),
									(B = ")" + (B ? u.substr(B) : "")),
									(C = -1 !== u.indexOf("hsl") && U),
									(z = u),
									(p = na(p, C)),
									(u = na(u, C)),
									(y = p.length + u.length > 6),
									y && !U && 0 === u[3]
										? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"), (h.e = h.e.split(E[m]).join("transparent")))
										: (U || (y = !1),
											C
												? h
													.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0)
													.appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
													.appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1)
												: h
													.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0)
													.appendXtra("", p[1], u[1] - p[1], ",", !0)
													.appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
											y && ((p = p.length < 4 ? 1 : p[3]), h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))),
									(pa.lastIndex = 0);
							else if ((v = p.match(s))) {
								if (((w = u.match(t)), !w || w.length !== v.length)) return h;
								for (o = 0, n = 0; n < v.length; n++) (A = v[n]), (z = p.indexOf(A, o)), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), (o = z + A.length);
								h["xs" + h.l] += p.substr(o);
							} else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
						if (-1 !== d.indexOf("=") && h.data) {
							for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
							h.e = B + h["xs" + m];
						}
						return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
					}),
					wa = 9;
				for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) (j["xn" + wa] = 0), (j["xs" + wa] = "");
				(j.xs0 = ""),
					(j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null),
					(j.appendXtra = function (a, b, c, d, e, f) {
						var g = this,
							h = g.l;
						return (
							(g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
							c || 0 === h || g.plugin
								? (g.l++,
									(g.type = g.setRatio ? 2 : 1),
									(g["xs" + g.l] = d || ""),
									h > 0
										? ((g.data["xn" + h] = b + c), (g.rxp["xn" + h] = e), (g["xn" + h] = b), g.plugin || ((g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr)), (g.xfirst.xs0 = 0)), g)
										: ((g.data = { s: b + c }), (g.rxp = {}), (g.s = b), (g.c = c), (g.r = e), g))
								: ((g["xs" + h] += b + (d || "")), g)
						);
					});
				var xa = function (a, b) {
					(b = b || {}),
						(this.p = b.prefix ? Z(a) || a : a),
						(i[a] = i[this.p] = this),
						(this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi)),
						b.parser && (this.parse = b.parser),
						(this.clrs = b.color),
						(this.multi = b.multi),
						(this.keyword = b.keyword),
						(this.dflt = b.defaultValue),
						(this.pr = b.priority || 0);
				},
					ya = (S._registerComplexSpecialProp = function (a, b, c) {
						"object" != typeof b && (b = { parser: c });
						var d,
							e,
							f = a.split(","),
							g = b.defaultValue;
						for (c = c || [g], d = 0; d < f.length; d++) (b.prefix = 0 === d && b.prefix), (b.defaultValue = c[d] || g), (e = new xa(f[d], b));
					}),
					za = (S._registerPluginProp = function (a) {
						if (!i[a]) {
							var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
							ya(a, {
								parser: function (a, c, d, e, f, g, j) {
									var k = h.com.greensock.plugins[b];
									return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f);
								},
							});
						}
					});
				(j = xa.prototype),
					(j.parseComplex = function (a, b, c, d, e, f) {
						var g,
							h,
							i,
							j,
							k,
							l,
							m = this.keyword;
						if ((this.multi && (I.test(c) || I.test(b) ? ((h = b.replace(I, "|").split("|")), (i = c.replace(I, "|").split("|"))) : m && ((h = [b]), (i = [c]))), i)) {
							for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++)
								(b = h[g] = h[g] || this.dflt), (c = i[g] = i[g] || this.dflt), m && ((k = b.indexOf(m)), (l = c.indexOf(m)), k !== l && (-1 === l ? (h[g] = h[g].split(m).join("")) : -1 === k && (h[g] += " " + m)));
							(b = h.join(", ")), (c = i.join(", "));
						}
						return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
					}),
					(j.parse = function (a, b, c, d, f, g, h) {
						return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
					}),
					(g.registerSpecialProp = function (a, b, c) {
						ya(a, {
							parser: function (a, d, e, f, g, h, i) {
								var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
								return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
							},
							priority: c,
						});
					}),
					(g.useSVGTransformAttr = !0);
				var Aa,
					Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					Ca = Z("transform"),
					Da = X + "transform",
					Ea = Z("transformOrigin"),
					Fa = null !== Z("perspective"),
					Ga = (S.Transform = function () {
						(this.perspective = parseFloat(g.defaultTransformPerspective) || 0), (this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1);
					}),
					Ha = _gsScope.SVGElement,
					Ia = function (a, b, c) {
						var d,
							e = O.createElementNS("http://www.w3.org/2000/svg", a),
							f = /([a-z])([A-Z])/g;
						for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
						return b.appendChild(e), e;
					},
					Ja = O.documentElement || {},
					Ka = (function () {
						var a,
							b,
							c,
							d = p || (/Android/i.test(T) && !_gsScope.chrome);
						return (
							O.createElementNS &&
							!d &&
							((a = Ia("svg", Ja)),
								(b = Ia("rect", a, { width: 100, height: 50, x: 100 })),
								(c = b.getBoundingClientRect().width),
								(b.style[Ea] = "50% 50%"),
								(b.style[Ca] = "scaleX(0.5)"),
								(d = c === b.getBoundingClientRect().width && !(n && Fa)),
								Ja.removeChild(a)),
							d
						);
					})(),
					La = function (a, b, c, d, e, f) {
						var h,
							i,
							j,
							k,
							l,
							m,
							n,
							o,
							p,
							q,
							r,
							s,
							t,
							u,
							v = a._gsTransform,
							w = Qa(a, !0);
						v && ((t = v.xOrigin), (u = v.yOrigin)),
							(!d || (h = d.split(" ")).length < 2) &&
							((n = a.getBBox()),
								0 === n.x &&
								0 === n.y &&
								n.width + n.height === 0 &&
								(n = {
									x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
									y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
									width: 0,
									height: 0,
								}),
								(b = ha(b).split(" ")),
								(h = [(-1 !== b[0].indexOf("%") ? (parseFloat(b[0]) / 100) * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? (parseFloat(b[1]) / 100) * n.height : parseFloat(b[1])) + n.y])),
							(c.xOrigin = k = parseFloat(h[0])),
							(c.yOrigin = l = parseFloat(h[1])),
							d &&
							w !== Pa &&
							((m = w[0]),
								(n = w[1]),
								(o = w[2]),
								(p = w[3]),
								(q = w[4]),
								(r = w[5]),
								(s = m * p - n * o),
								s && ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s), (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s), (k = c.xOrigin = h[0] = i), (l = c.yOrigin = h[1] = j))),
							v &&
							(f && ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
								e || (e !== !1 && g.defaultSmoothOrigin !== !1) ? ((i = k - t), (j = l - u), (v.xOffset += i * w[0] + j * w[2] - i), (v.yOffset += i * w[1] + j * w[3] - j)) : (v.xOffset = v.yOffset = 0)),
							f || a.setAttribute("data-svg-origin", h.join(" "));
					},
					Ma = function (a) {
						var b,
							c = P("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
							d = this.parentNode,
							e = this.nextSibling,
							f = this.style.cssText;
						if ((Ja.appendChild(c), c.appendChild(this), (this.style.display = "block"), a))
							try {
								(b = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Ma);
							} catch (g) { }
						else this._originalGetBBox && (b = this._originalGetBBox());
						return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), (this.style.cssText = f), b;
					},
					Na = function (a) {
						try {
							return a.getBBox();
						} catch (b) {
							return Ma.call(a, !0);
						}
					},
					Oa = function (a) {
						return !(!Ha || !a.getCTM || (a.parentNode && !a.ownerSVGElement) || !Na(a));
					},
					Pa = [1, 0, 0, 1, 0, 0],
					Qa = function (a, b) {
						var c,
							d,
							e,
							f,
							g,
							h,
							i = a._gsTransform || new Ga(),
							j = 1e5,
							k = a.style;
						if (
							(Ca
								? (d = _(a, Da, null, !0))
								: a.currentStyle && ((d = a.currentStyle.filter.match(G)), (d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : "")),
								(c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
								!Ca ||
								(!(h = !$(a) || "none" === $(a).display) && a.parentNode) ||
								(h && ((f = k.display), (k.display = "block")),
									a.parentNode || ((g = 1), Ja.appendChild(a)),
									(d = _(a, Da, null, !0)),
									(c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
									f ? (k.display = f) : h && Va(k, "display"),
									g && Ja.removeChild(a)),
								(i.svg || (a.getCTM && Oa(a))) &&
								(c && -1 !== (k[Ca] + "").indexOf("matrix") && ((d = k[Ca]), (c = 0)),
									(e = a.getAttribute("transform")),
									c && e && (-1 !== e.indexOf("matrix") ? ((d = e), (c = 0)) : -1 !== e.indexOf("translate") && ((d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (c = 0)))),
								c)
						)
							return Pa;
						for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) (f = Number(e[wa])), (e[wa] = (g = f - (f |= 0)) ? ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f : f);
						return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
					},
					Ra = (S.getTransform = function (a, c, d, e) {
						if (a._gsTransform && d && !e) return a._gsTransform;
						var f,
							h,
							i,
							j,
							k,
							l,
							m = d ? a._gsTransform || new Ga() : new Ga(),
							n = m.scaleX < 0,
							o = 2e-5,
							p = 1e5,
							q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
							r = parseFloat(g.defaultTransformPerspective) || 0;
						if (((m.svg = !(!a.getCTM || !Oa(a))), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), (Aa = g.useSVGTransformAttr || Ka)), (f = Qa(a)), f !== Pa)) {
							if (16 === f.length) {
								var s,
									t,
									u,
									v,
									w,
									x = f[0],
									y = f[1],
									z = f[2],
									A = f[3],
									B = f[4],
									C = f[5],
									D = f[6],
									E = f[7],
									F = f[8],
									G = f[9],
									H = f[10],
									I = f[12],
									J = f[13],
									K = f[14],
									M = f[11],
									N = Math.atan2(D, H);
								m.zOrigin && ((K = -m.zOrigin), (I = F * K - f[12]), (J = G * K - f[13]), (K = H * K + m.zOrigin - f[14])),
									(m.rotationX = N * L),
									N &&
									((v = Math.cos(-N)),
										(w = Math.sin(-N)),
										(s = B * v + F * w),
										(t = C * v + G * w),
										(u = D * v + H * w),
										(F = B * -w + F * v),
										(G = C * -w + G * v),
										(H = D * -w + H * v),
										(M = E * -w + M * v),
										(B = s),
										(C = t),
										(D = u)),
									(N = Math.atan2(-z, H)),
									(m.rotationY = N * L),
									N && ((v = Math.cos(-N)), (w = Math.sin(-N)), (s = x * v - F * w), (t = y * v - G * w), (u = z * v - H * w), (G = y * w + G * v), (H = z * w + H * v), (M = A * w + M * v), (x = s), (y = t), (z = u)),
									(N = Math.atan2(y, x)),
									(m.rotation = N * L),
									N && ((v = Math.cos(N)), (w = Math.sin(N)), (s = x * v + y * w), (t = B * v + C * w), (u = F * v + G * w), (y = y * v - x * w), (C = C * v - B * w), (G = G * v - F * w), (x = s), (B = t), (F = u)),
									m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && ((m.rotationX = m.rotation = 0), (m.rotationY = 180 - m.rotationY)),
									(N = Math.atan2(B, C)),
									(m.scaleX = ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
									(m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
									(m.scaleZ = ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
									(x /= m.scaleX),
									(B /= m.scaleY),
									(y /= m.scaleX),
									(C /= m.scaleY),
									Math.abs(N) > o ? ((m.skewX = N * L), (B = 0), "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : (m.skewX = 0),
									(m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
									(m.x = I),
									(m.y = J),
									(m.z = K),
									m.svg && ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)), (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
							} else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || (!m.rotationX && !m.rotationY)) {
								var O = f.length >= 6,
									P = O ? f[0] : 1,
									Q = f[1] || 0,
									R = f[2] || 0,
									S = O ? f[3] : 1;
								(m.x = f[4] || 0),
									(m.y = f[5] || 0),
									(i = Math.sqrt(P * P + Q * Q)),
									(j = Math.sqrt(S * S + R * R)),
									(k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
									(l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
									(m.scaleX = i),
									(m.scaleY = j),
									(m.rotation = k),
									(m.skewX = l),
									Fa && ((m.rotationX = m.rotationY = m.z = 0), (m.perspective = r), (m.scaleZ = 1)),
									m.svg && ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)), (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
							}
							Math.abs(m.skewX) > 90 &&
								Math.abs(m.skewX) < 270 &&
								(n ? ((m.scaleX *= -1), (m.skewX += m.rotation <= 0 ? 180 : -180), (m.rotation += m.rotation <= 0 ? 180 : -180)) : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
								(m.zOrigin = q);
							for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
						}
						return (
							d &&
							((a._gsTransform = m),
								m.svg &&
								(Aa && a.style[Ca]
									? b.delayedCall(0.001, function () {
										Va(a.style, Ca);
									})
									: !Aa &&
									a.getAttribute("transform") &&
									b.delayedCall(0.001, function () {
										a.removeAttribute("transform");
									}))),
							m
						);
					}),
					Sa = function (a) {
						var b,
							c,
							d = this.data,
							e = -d.rotation * K,
							f = e + d.skewX * K,
							g = 1e5,
							h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
							i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
							j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
							k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
							l = this.t.style,
							m = this.t.currentStyle;
						if (m) {
							(c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
							var n,
								o,
								q = this.t.offsetWidth,
								r = this.t.offsetHeight,
								s = "absolute" !== m.position,
								t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
								u = d.x + (q * d.xPercent) / 100,
								v = d.y + (r * d.yPercent) / 100;
							if (
								(null != d.ox && ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2), (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2), (u += n - (n * h + o * i)), (v += o - (n * j + o * k))),
									s ? ((n = q / 2), (o = r / 2), (t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")")) : (t += ", sizingMethod='auto expand')"),
									-1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? (l.filter = b.replace(H, t)) : (l.filter = t + " " + b),
									(0 === a || 1 === a) &&
									1 === h &&
									0 === i &&
									0 === j &&
									1 === k &&
									((s && -1 === t.indexOf("Dx=0, Dy=0")) || (x.test(b) && 100 !== parseFloat(RegExp.$1)) || (-1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter"))),
									!s)
							) {
								var y,
									z,
									A,
									B = 8 > p ? 1 : -1;
								for (
									n = d.ieOffsetX || 0,
									o = d.ieOffsetY || 0,
									d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u),
									d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v),
									wa = 0;
									4 > wa;
									wa++
								)
									(z = fa[wa]),
										(y = m[z]),
										(c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
										(A = c !== d[z] ? (2 > wa ? -d.ieOffsetX : -d.ieOffsetY) : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY),
										(l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px");
							}
						}
					},
					Ta = (S.set3DTransformRatio = S.setTransformRatio = function (a) {
						var b,
							c,
							d,
							e,
							f,
							g,
							h,
							i,
							j,
							k,
							l,
							m,
							o,
							p,
							q,
							r,
							s,
							t,
							u,
							v,
							w,
							x,
							y,
							z = this.data,
							A = this.t.style,
							B = z.rotation,
							C = z.rotationX,
							D = z.rotationY,
							E = z.scaleX,
							F = z.scaleY,
							G = z.scaleZ,
							H = z.x,
							I = z.y,
							J = z.z,
							L = z.svg,
							M = z.perspective,
							N = z.force3D,
							O = z.skewY,
							P = z.skewX;
						if (
							(O && ((P += O), (B += O)),
								((((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !N) && !J && !M && !D && !C && 1 === G) || (Aa && L) || !Fa)
						)
							return void (B || P || L
								? ((B *= K),
									(x = P * K),
									(y = 1e5),
									(c = Math.cos(B) * E),
									(f = Math.sin(B) * E),
									(d = Math.sin(B - x) * -F),
									(g = Math.cos(B - x) * F),
									x && "simple" === z.skewType && ((b = Math.tan(x - O * K)), (b = Math.sqrt(1 + b * b)), (d *= b), (g *= b), O && ((b = Math.tan(O * K)), (b = Math.sqrt(1 + b * b)), (c *= b), (f *= b))),
									L &&
									((H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset),
										(I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset),
										Aa && (z.xPercent || z.yPercent) && ((q = this.t.getBBox()), (H += 0.01 * z.xPercent * q.width), (I += 0.01 * z.yPercent * q.height)),
										(q = 1e-6),
										q > H && H > -q && (H = 0),
										q > I && I > -q && (I = 0)),
									(u = ((c * y) | 0) / y + "," + ((f * y) | 0) / y + "," + ((d * y) | 0) / y + "," + ((g * y) | 0) / y + "," + H + "," + I + ")"),
									L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u))
								: (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")"));
						if ((n && ((q = 1e-4), q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P))
							(B *= K),
								(r = c = Math.cos(B)),
								(s = f = Math.sin(B)),
								P &&
								((B -= P * K),
									(r = Math.cos(B)),
									(s = Math.sin(B)),
									"simple" === z.skewType && ((b = Math.tan((P - O) * K)), (b = Math.sqrt(1 + b * b)), (r *= b), (s *= b), z.skewY && ((b = Math.tan(O * K)), (b = Math.sqrt(1 + b * b)), (c *= b), (f *= b)))),
								(d = -s),
								(g = r);
						else {
							if (!(D || C || 1 !== G || M || L))
								return void (A[Ca] =
									(z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") +
									H +
									"px," +
									I +
									"px," +
									J +
									"px)" +
									(1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
							(c = g = 1), (d = f = 0);
						}
						(k = 1),
							(e = h = i = j = l = m = 0),
							(o = M ? -1 / M : 0),
							(p = z.zOrigin),
							(q = 1e-6),
							(v = ","),
							(w = "0"),
							(B = D * K),
							B && ((r = Math.cos(B)), (s = Math.sin(B)), (i = -s), (l = o * -s), (e = c * s), (h = f * s), (k = r), (o *= r), (c *= r), (f *= r)),
							(B = C * K),
							B && ((r = Math.cos(B)), (s = Math.sin(B)), (b = d * r + e * s), (t = g * r + h * s), (j = k * s), (m = o * s), (e = d * -s + e * r), (h = g * -s + h * r), (k *= r), (o *= r), (d = b), (g = t)),
							1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
							1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
							1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
							(p || L) &&
							(p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
								L && ((H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset), (I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset)),
								q > H && H > -q && (H = w),
								q > I && I > -q && (I = w),
								q > J && J > -q && (J = 0)),
							(u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d("),
							(u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i)),
							(u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g)),
							C || D || 1 !== G
								? ((u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e)),
									(u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v))
								: (u += ",0,0,0,0,1,0,"),
							(u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
							(A[Ca] = u);
					});
				(j = Ga.prototype),
					(j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0),
					(j.scaleX = j.scaleY = j.scaleZ = 1),
					ya(
						"transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
						{
							parser: function (a, b, c, d, f, h, i) {
								if (d._lastParsedTransform === i) return f;
								d._lastParsedTransform = i;
								var j,
									k = i.scale && "function" == typeof i.scale ? i.scale : 0;
								"function" == typeof i[c] && ((j = i[c]), (i[c] = b)), k && (i.scale = k(r, a));
								var l,
									m,
									n,
									o,
									p,
									s,
									t,
									u,
									v,
									w = a._gsTransform,
									x = a.style,
									y = 1e-6,
									z = Ba.length,
									A = i,
									B = {},
									C = "transformOrigin",
									D = Ra(a, e, !0, A.parseTransform),
									E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
								if (((D.skewType = A.skewType || D.skewType || g.defaultSkewType), (d._transform = D), E && "string" == typeof E && Ca))
									(m = Q.style),
										(m[Ca] = E),
										(m.display = "block"),
										(m.position = "absolute"),
										O.body.appendChild(Q),
										(l = Ra(Q, null, !1)),
										"simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)),
										D.svg &&
										((s = D.xOrigin),
											(t = D.yOrigin),
											(l.x -= D.xOffset),
											(l.y -= D.yOffset),
											(A.transformOrigin || A.svgOrigin) &&
											((E = {}), La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), (s = E.xOrigin), (t = E.yOrigin), (l.x -= E.xOffset - D.xOffset), (l.y -= E.yOffset - D.yOffset)),
											(s || t) && ((u = Qa(Q, !0)), (l.x -= s - (s * u[0] + t * u[2])), (l.y -= t - (s * u[1] + t * u[3])))),
										O.body.removeChild(Q),
										l.perspective || (l.perspective = D.perspective),
										null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)),
										null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
								else if ("object" == typeof A) {
									if (
										((l = {
											scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
											scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
											scaleZ: ja(A.scaleZ, D.scaleZ),
											x: ja(A.x, D.x),
											y: ja(A.y, D.y),
											z: ja(A.z, D.z),
											xPercent: ja(A.xPercent, D.xPercent),
											yPercent: ja(A.yPercent, D.yPercent),
											perspective: ja(A.transformPerspective, D.perspective),
										}),
											(p = A.directionalRotation),
											null != p)
									)
										if ("object" == typeof p) for (m in p) A[m] = p[m];
										else A.rotation = p;
									"string" == typeof A.x && -1 !== A.x.indexOf("%") && ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
										"string" == typeof A.y && -1 !== A.y.indexOf("%") && ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
										(l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B)),
										Fa &&
										((l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B)),
											(l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B))),
										(l.skewX = ka(A.skewX, D.skewX)),
										(l.skewY = ka(A.skewY, D.skewY));
								}
								for (
									Fa && null != A.force3D && ((D.force3D = A.force3D), (o = !0)),
									n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective,
									n || null == A.scale || (l.scaleZ = 1);
									--z > -1;

								)
									(v = Ba[z]),
										(E = l[v] - D[v]),
										(E > y || -y > E || null != A[v] || null != M[v]) && ((o = !0), (f = new ta(D, v, D[v], E, f)), v in B && (f.e = B[v]), (f.xs0 = 0), (f.plugin = h), d._overwriteProps.push(f.n));
								return (
									(E = A.transformOrigin),
									D.svg &&
									(E || A.svgOrigin) &&
									((s = D.xOffset),
										(t = D.yOffset),
										La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
										(f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C)),
										(f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C)),
										(s !== D.xOffset || t !== D.yOffset) && ((f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C)), (f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C))),
										(E = "0px 0px")),
									(E || (Fa && n && D.zOrigin)) &&
									(Ca
										? ((o = !0),
											(v = Ea),
											(E = (E || _(a, v, e, !1, "50% 50%")) + ""),
											(f = new ta(x, v, 0, 0, f, -1, C)),
											(f.b = x[v]),
											(f.plugin = h),
											Fa
												? ((m = D.zOrigin),
													(E = E.split(" ")),
													(D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0),
													(f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px"),
													(f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
													(f.b = m),
													(f.xs0 = f.e = D.zOrigin))
												: (f.xs0 = f.e = E))
										: ha(E + "", D)),
									o && (d._transformType = (D.svg && Aa) || (!n && 3 !== this._transformType) ? 2 : 3),
									j && (i[c] = j),
									k && (i.scale = k),
									f
								);
							},
							prefix: !0,
						}
					),
					ya("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
					ya("borderRadius", {
						defaultValue: "0px",
						parser: function (a, b, c, f, g, h) {
							b = this.format(b);
							var i,
								j,
								k,
								l,
								m,
								n,
								o,
								p,
								q,
								r,
								s,
								t,
								u,
								v,
								w,
								x,
								y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
								z = a.style;
							for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++)
								this.p.indexOf("border") && (y[j] = Z(y[j])),
									(m = l = _(a, y[j], e, !1, "0px")),
									-1 !== m.indexOf(" ") && ((l = m.split(" ")), (m = l[0]), (l = l[1])),
									(n = k = i[j]),
									(o = parseFloat(m)),
									(t = m.substr((o + "").length)),
									(u = "=" === n.charAt(1)),
									u ? ((p = parseInt(n.charAt(0) + "1", 10)), (n = n.substr(2)), (p *= parseFloat(n)), (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "")) : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
									"" === s && (s = d[c] || t),
									s !== t &&
									((v = aa(a, "borderLeft", o, t)),
										(w = aa(a, "borderTop", o, t)),
										"%" === s ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%")) : "em" === s ? ((x = aa(a, "borderLeft", 1, "em")), (m = v / x + "em"), (l = w / x + "em")) : ((m = v + "px"), (l = w + "px")),
										u && ((n = parseFloat(m) + p + s), (k = parseFloat(l) + p + s))),
									(g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
							return g;
						},
						prefix: !0,
						formatter: qa("0px 0px 0px 0px", !1, !0),
					}),
					ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
						defaultValue: "0px",
						parser: function (a, b, c, d, f, g) {
							return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
						},
						prefix: !0,
						formatter: qa("0px 0px", !1, !0),
					}),
					ya("backgroundPosition", {
						defaultValue: "0 0",
						parser: function (a, b, c, d, f, g) {
							var h,
								i,
								j,
								k,
								l,
								m,
								n = "background-position",
								o = e || $(a, null),
								q = this.format((o ? (p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n)) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
								r = this.format(b);
							if ((-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && ((m = _(a, "backgroundImage").replace(D, "")), m && "none" !== m)) {
								for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;)
									(q = h[j]),
										(k = -1 !== q.indexOf("%")),
										k !== (-1 !== i[j].indexOf("%")) && ((l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height), (h[j] = k ? (parseFloat(q) / 100) * l + "px" : (parseFloat(q) / l) * 100 + "%"));
								q = h.join(" ");
							}
							return this.parseComplex(a.style, q, r, f, g);
						},
						formatter: ha,
					}),
					ya("backgroundSize", {
						defaultValue: "0 0",
						formatter: function (a) {
							return (a += ""), ha(-1 === a.indexOf(" ") ? a + " " + a : a);
						},
					}),
					ya("perspective", { defaultValue: "0px", prefix: !0 }),
					ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
					ya("transformStyle", { prefix: !0 }),
					ya("backfaceVisibility", { prefix: !0 }),
					ya("userSelect", { prefix: !0 }),
					ya("margin", { parser: ra("marginTop,marginRight,marginBottom,marginLeft") }),
					ya("padding", { parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
					ya("clip", {
						defaultValue: "rect(0px,0px,0px,0px)",
						parser: function (a, b, c, d, f, g) {
							var h, i, j;
							return (
								9 > p
									? ((i = a.currentStyle), (j = 8 > p ? " " : ","), (h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")"), (b = this.format(b).split(",").join(j)))
									: ((h = this.format(_(a, this.p, e, !1, this.dflt))), (b = this.format(b))),
								this.parseComplex(a.style, h, b, f, g)
							);
						},
					}),
					ya("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
					ya("autoRound,strictUnits", {
						parser: function (a, b, c, d, e) {
							return e;
						},
					}),
					ya("border", {
						defaultValue: "0px solid #000",
						parser: function (a, b, c, d, f, g) {
							var h = _(a, "borderTopWidth", e, !1, "0px"),
								i = this.format(b).split(" "),
								j = i[0].replace(w, "");
							return (
								"px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
								this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
							);
						},
						color: !0,
						formatter: function (a) {
							var b = a.split(" ");
							return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0];
						},
					}),
					ya("borderWidth", { parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
					ya("float,cssFloat,styleFloat", {
						parser: function (a, b, c, d, e, f) {
							var g = a.style,
								h = "cssFloat" in g ? "cssFloat" : "styleFloat";
							return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
						},
					});
				var Ua = function (a) {
					var b,
						c = this.t,
						d = c.filter || _(this.data, "filter") || "",
						e = (this.s + this.c * a) | 0;
					100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), (b = !_(this.data, "filter"))) : ((c.filter = d.replace(z, "")), (b = !0))),
						b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? (0 === e && this.xn1) || (c.filter = d + " alpha(opacity=" + e + ")") : (c.filter = d.replace(x, "opacity=" + e)));
				};
				ya("opacity,alpha,autoAlpha", {
					defaultValue: "1",
					parser: function (a, b, c, d, f, g) {
						var h = parseFloat(_(a, "opacity", e, !1, "1")),
							i = a.style,
							j = "autoAlpha" === c;
						return (
							"string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
							j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0),
							U
								? (f = new ta(i, "opacity", h, b - h, f))
								: ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
									(f.xn1 = j ? 1 : 0),
									(i.zoom = 1),
									(f.type = 2),
									(f.b = "alpha(opacity=" + f.s + ")"),
									(f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
									(f.data = a),
									(f.plugin = g),
									(f.setRatio = Ua)),
							j && ((f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit")), (f.xs0 = "inherit"), d._overwriteProps.push(f.n), d._overwriteProps.push(c)),
							f
						);
					},
				});
				var Va = function (a, b) {
					b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b));
				},
					Wa = function (a) {
						if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
							this.t.setAttribute("class", 0 === a ? this.b : this.e);
							for (var b = this.data, c = this.t.style; b;) b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
							1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
						} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
					};
				ya("className", {
					parser: function (a, b, d, f, g, h, i) {
						var j,
							k,
							l,
							m,
							n,
							o = a.getAttribute("class") || "",
							p = a.style.cssText;
						if (((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)), (g.setRatio = Wa), (g.pr = -11), (c = !0), (g.b = o), (k = ca(a, e)), (l = a._gsClassPT))) {
							for (m = {}, n = l.data; n;) (m[n.p] = 1), (n = n._next);
							l.setRatio(1);
						}
						return (
							(a._gsClassPT = g),
							(g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
							a.setAttribute("class", g.e),
							(j = da(a, k, ca(a), i, m)),
							a.setAttribute("class", o),
							(g.data = j.firstMPT),
							(a.style.cssText = p),
							(g = g.xfirst = f.parse(a, j.difs, g, h))
						);
					},
				});
				var Xa = function (a) {
					if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
						var b,
							c,
							d,
							e,
							f,
							g = this.t.style,
							h = i.transform.parse;
						if ("all" === this.e) (g.cssText = ""), (e = !0);
						else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) (c = b[d]), i[c] && (i[c].parse === h ? (e = !0) : (c = "transformOrigin" === c ? Ea : i[c].p)), Va(g, c);
						e && (Va(g, Ca), (f = this.t._gsTransform), f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
					}
				};
				for (
					ya("clearProps", {
						parser: function (a, b, d, e, f) {
							return (f = new ta(a, d, 0, 0, f, 2)), (f.setRatio = Xa), (f.e = b), (f.pr = -10), (f.data = e._tween), (c = !0), f;
						},
					}),
					j = "bezier,throwProps,physicsProps,physics2D".split(","),
					wa = j.length;
					wa--;

				)
					za(j[wa]);
				(j = g.prototype),
					(j._firstPT = j._lastParsedTransform = j._transform = null),
					(j._onInitTween = function (a, b, h, j) {
						if (!a.nodeType) return !1;
						(this._target = q = a), (this._tween = h), (this._vars = b), (r = j), (k = b.autoRound), (c = !1), (d = b.suffixMap || g.suffixMap), (e = $(a, "")), (f = this._overwriteProps);
						var n,
							p,
							s,
							t,
							u,
							v,
							w,
							x,
							z,
							A = a.style;
						if (
							(l && "" === A.zIndex && ((n = _(a, "zIndex", e)), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
								"string" == typeof b && ((t = A.cssText), (n = ca(a, e)), (A.cssText = t + ";" + b), (n = da(a, n, ca(a)).difs), !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), (b = n), (A.cssText = t)),
								b.className ? (this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b)) : (this._firstPT = p = this.parse(a, b, null)),
								this._transformType)
						) {
							for (
								z = 3 === this._transformType,
								Ca
									? m &&
									((l = !0),
										"" === A.zIndex && ((w = _(a, "zIndex", e)), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)),
										o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden")))
									: (A.zoom = 1),
								s = p;
								s && s._next;

							)
								s = s._next;
							(x = new ta(a, "transform", 0, 0, null, 2)), this._linkCSSP(x, null, s), (x.setRatio = Ca ? Ta : Sa), (x.data = this._transform || Ra(a, e, !0)), (x.tween = h), (x.pr = -1), f.pop();
						}
						if (c) {
							for (; p;) {
								for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
								(p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p), (p._next = s) ? (s._prev = p) : (u = p), (p = v);
							}
							this._firstPT = t;
						}
						return !0;
					}),
					(j.parse = function (a, b, c, f) {
						var g,
							h,
							j,
							l,
							m,
							n,
							o,
							p,
							s,
							t,
							u = a.style;
						for (g in b) {
							if (((n = b[g]), "function" == typeof n && (n = n(r, q)), (h = i[g]))) c = h.parse(a, n, g, this, c, f, b);
							else {
								if ("--" === g.substr(0, 2)) {
									this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
									continue;
								}
								(m = _(a, g, e) + ""),
									(s = "string" == typeof n),
									"color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || (s && A.test(n))
										? (s || ((n = na(n)), (n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")")), (c = va(u, g, m, n, !0, "transparent", c, 0, f)))
										: s && J.test(n)
											? (c = va(u, g, m, n, !0, null, c, 0, f))
											: ((j = parseFloat(m)),
												(o = j || 0 === j ? m.substr((j + "").length) : ""),
												("" === m || "auto" === m) &&
												("width" === g || "height" === g ? ((j = ga(a, g, e)), (o = "px")) : "left" === g || "top" === g ? ((j = ba(a, g, e)), (o = "px")) : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
												(t = s && "=" === n.charAt(1)),
												t ? ((l = parseInt(n.charAt(0) + "1", 10)), (n = n.substr(2)), (l *= parseFloat(n)), (p = n.replace(w, ""))) : ((l = parseFloat(n)), (p = s ? n.replace(w, "") : "")),
												"" === p && (p = g in d ? d[g] : o),
												(n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
												o !== p &&
												("" !== p || "lineHeight" === g) &&
												(l || 0 === l) &&
												j &&
												((j = aa(a, g, j, o)),
													"%" === p
														? ((j /= aa(a, g, 100, "%") / 100), b.strictUnits !== !0 && (m = j + "%"))
														: "em" === p || "rem" === p || "vw" === p || "vh" === p
															? (j /= aa(a, g, 1, p))
															: "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
													t && (l || 0 === l) && (n = l + j + p)),
												t && (l += j),
												(!j && 0 !== j) || (!l && 0 !== l)
													? void 0 !== u[g] && (n || (n + "" != "NaN" && null != n))
														? ((c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n)), (c.xs0 = "none" !== n || ("display" !== g && -1 === g.indexOf("Style")) ? n : m))
														: W("invalid " + g + " tween value: " + b[g])
													: ((c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n)), (c.xs0 = p)));
							}
							f && c && !c.plugin && (c.plugin = f);
						}
						return c;
					}),
					(j.setRatio = function (a) {
						var b,
							c,
							d,
							e = this._firstPT,
							f = 1e-6;
						if (1 !== a || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
							if (a || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || this._tween._rawPrevTime === -1e-6)
								for (; e;) {
									if (((b = e.c * a + e.s), e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0), e.type))
										if (1 === e.type)
											if (((d = e.l), 2 === d)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
											else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
											else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
											else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
											else {
												for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
												e.t[e.p] = c;
											}
										else -1 === e.type ? (e.t[e.p] = e.xs0) : e.setRatio && e.setRatio(a);
									else e.t[e.p] = b + e.xs0;
									e = e._next;
								}
							else for (; e;) 2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a), (e = e._next);
						else
							for (; e;) {
								if (2 !== e.type)
									if (e.r && -1 !== e.type)
										if (((b = Math.round(e.s + e.c)), e.type)) {
											if (1 === e.type) {
												for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
												e.t[e.p] = c;
											}
										} else e.t[e.p] = b + e.xs0;
									else e.t[e.p] = e.e;
								else e.setRatio(a);
								e = e._next;
							}
					}),
					(j._enableTransforms = function (a) {
						(this._transform = this._transform || Ra(this._target, e, !0)), (this._transformType = (this._transform.svg && Aa) || (!a && 3 !== this._transformType) ? 2 : 3);
					});
				var Ya = function (a) {
					(this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
				};
				(j._addLazySet = function (a, b, c) {
					var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
					(d.e = c), (d.setRatio = Ya), (d.data = this);
				}),
					(j._linkCSSP = function (a, b, c, d) {
						return (
							a &&
							(b && (b._prev = a),
								a._next && (a._next._prev = a._prev),
								a._prev ? (a._prev._next = a._next) : this._firstPT === a && ((this._firstPT = a._next), (d = !0)),
								c ? (c._next = a) : d || null !== this._firstPT || (this._firstPT = a),
								(a._next = b),
								(a._prev = c)),
							a
						);
					}),
					(j._mod = function (a) {
						for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), (b = b._next);
					}),
					(j._kill = function (b) {
						var c,
							d,
							e,
							f = b;
						if (b.autoAlpha || b.alpha) {
							f = {};
							for (d in b) f[d] = b[d];
							(f.opacity = 1), f.autoAlpha && (f.visibility = 1);
						}
						for (
							b.className &&
							(c = this._classNamePT) &&
							((e = c.xfirst),
								e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
								c._next && this._linkCSSP(c._next, c._next._next, e._prev),
								(this._classNamePT = null)),
							c = this._firstPT;
							c;

						)
							c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), (d = c.plugin)), (c = c._next);
						return a.prototype._kill.call(this, f);
					});
				var Za = function (a, b, c) {
					var d, e, f, g;
					if (a.slice) for (e = a.length; --e > -1;) Za(a[e], b, c);
					else for (d = a.childNodes, e = d.length; --e > -1;) (f = d[e]), (g = f.type), f.style && (b.push(ca(f)), c && c.push(f)), (1 !== g && 9 !== g && 11 !== g) || !f.childNodes.length || Za(f, b, c);
				};
				return (
					(g.cascadeTo = function (a, c, d) {
						var e,
							f,
							g,
							h,
							i = b.to(a, c, d),
							j = [i],
							k = [],
							l = [],
							m = [],
							n = b._internals.reservedProps;
						for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
							if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
								f = f.difs;
								for (g in d) n[g] && (f[g] = d[g]);
								h = {};
								for (g in f) h[g] = k[e][g];
								j.push(b.fromTo(m[e], c, h, f));
							}
						return j;
					}),
					a.activate([g]),
					g
				);
			},
			!0
		),
		(function () {
			var a = _gsScope._gsDefine.plugin({
				propName: "roundProps",
				version: "1.6.0",
				priority: -1,
				API: 2,
				init: function (a, b, c) {
					return (this._tween = c), !0;
				},
			}),
				b = function (a) {
					for (; a;) a.f || a.blob || (a.m = Math.round), (a = a._next);
				},
				c = a.prototype;
			(c._onInitAllProps = function () {
				for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = Math.round;
				for (g = f.length; --g > -1;)
					for (a = f[g], c = e._firstPT; c;)
						(d = c._next),
							c.pg
								? c.t._mod(h)
								: c.n === a &&
								(2 === c.f && c.t
									? b(c.t._firstPT)
									: (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? (c._prev._next = d) : e._firstPT === c && (e._firstPT = d), (c._next = c._prev = null), (e._propLookup[a] = i))),
							(c = d);
				return !1;
			}),
				(c._add = function (a, b, c, d) {
					this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b);
				});
		})(),
		(function () {
			_gsScope._gsDefine.plugin({
				propName: "attr",
				API: 2,
				version: "0.6.1",
				init: function (a, b, c, d) {
					var e, f;
					if ("function" != typeof a.setAttribute) return !1;
					for (e in b) (f = b[e]), "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
					return !0;
				},
			});
		})(),
		(_gsScope._gsDefine.plugin({
			propName: "directionalRotation",
			version: "0.3.1",
			API: 2,
			init: function (a, b, c, d) {
				"object" != typeof b && (b = { rotation: b }), (this.finals = {});
				var e,
					f,
					g,
					h,
					i,
					j,
					k = b.useRadians === !0 ? 2 * Math.PI : 360,
					l = 1e-6;
				for (e in b)
					"useRadians" !== e &&
						((h = b[e]),
							"function" == typeof h && (h = h(d, a)),
							(j = (h + "").split("_")),
							(f = j[0]),
							(g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]())),
							(h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0),
							(i = h - g),
							j.length &&
							((f = j.join("_")),
								-1 !== f.indexOf("short") && ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
								-1 !== f.indexOf("_cw") && 0 > i ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k) : -1 !== f.indexOf("ccw") && i > 0 && (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
							(i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
				return !0;
			},
			set: function (a) {
				var b;
				if (1 !== a) this._super.setRatio.call(this, a);
				else for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]), (b = b._next);
			},
		})._autoCSS = !0),
		_gsScope._gsDefine(
			"easing.Back",
			["easing.Ease"],
			function (a) {
				var b,
					c,
					d,
					e = _gsScope.GreenSockGlobals || _gsScope,
					f = e.com.greensock,
					g = 2 * Math.PI,
					h = Math.PI / 2,
					i = f._class,
					j = function (b, c) {
						var d = i("easing." + b, function () { }, !0),
							e = (d.prototype = new a());
						return (e.constructor = d), (e.getRatio = c), d;
					},
					k = a.register || function () { },
					l = function (a, b, c, d, e) {
						var f = i("easing." + a, { easeOut: new b(), easeIn: new c(), easeInOut: new d() }, !0);
						return k(f, a), f;
					},
					m = function (a, b, c) {
						(this.t = a), (this.v = b), c && ((this.next = c), (c.prev = this), (this.c = c.v - b), (this.gap = c.t - a));
					},
					n = function (b, c) {
						var d = i(
							"easing." + b,
							function (a) {
								(this._p1 = a || 0 === a ? a : 1.70158), (this._p2 = 1.525 * this._p1);
							},
							!0
						),
							e = (d.prototype = new a());
						return (
							(e.constructor = d),
							(e.getRatio = c),
							(e.config = function (a) {
								return new d(a);
							}),
							d
						);
					},
					o = l(
						"Back",
						n("BackOut", function (a) {
							return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
						}),
						n("BackIn", function (a) {
							return a * a * ((this._p1 + 1) * a - this._p1);
						}),
						n("BackInOut", function (a) {
							return (a *= 2) < 1 ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
						})
					),
					p = i(
						"easing.SlowMo",
						function (a, b, c) {
							(b = b || 0 === b ? b : 0.7), null == a ? (a = 0.7) : a > 1 && (a = 1), (this._p = 1 !== a ? b : 0), (this._p1 = (1 - a) / 2), (this._p2 = a), (this._p3 = this._p1 + this._p2), (this._calcEnd = c === !0);
						},
						!0
					),
					q = (p.prototype = new a());
				return (
					(q.constructor = p),
					(q.getRatio = function (a) {
						var b = a + (0.5 - a) * this._p;
						return a < this._p1
							? this._calcEnd
								? 1 - (a = 1 - a / this._p1) * a
								: b - (a = 1 - a / this._p1) * a * a * a * b
							: a > this._p3
								? this._calcEnd
									? 1 === a
										? 0
										: 1 - (a = (a - this._p3) / this._p1) * a
									: b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
								: this._calcEnd
									? 1
									: b;
					}),
					(p.ease = new p(0.7, 0.7)),
					(q.config = p.config = function (a, b, c) {
						return new p(a, b, c);
					}),
					(b = i(
						"easing.SteppedEase",
						function (a, b) {
							(a = a || 1), (this._p1 = 1 / a), (this._p2 = a + (b ? 0 : 1)), (this._p3 = b ? 1 : 0);
						},
						!0
					)),
					(q = b.prototype = new a()),
					(q.constructor = b),
					(q.getRatio = function (a) {
						return 0 > a ? (a = 0) : a >= 1 && (a = 0.999999999), (((this._p2 * a) | 0) + this._p3) * this._p1;
					}),
					(q.config = b.config = function (a, c) {
						return new b(a, c);
					}),
					(c = i(
						"easing.RoughEase",
						function (b) {
							b = b || {};
							for (
								var c,
								d,
								e,
								f,
								g,
								h,
								i = b.taper || "none",
								j = [],
								k = 0,
								l = 0 | (b.points || 20),
								n = l,
								o = b.randomize !== !1,
								p = b.clamp === !0,
								q = b.template instanceof a ? b.template : null,
								r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
								--n > -1;

							)
								(c = o ? Math.random() : (1 / l) * n),
									(d = q ? q.getRatio(c) : c),
									"none" === i ? (e = r) : "out" === i ? ((f = 1 - c), (e = f * f * r)) : "in" === i ? (e = c * c * r) : 0.5 > c ? ((f = 2 * c), (e = f * f * 0.5 * r)) : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
									o ? (d += Math.random() * e - 0.5 * e) : n % 2 ? (d += 0.5 * e) : (d -= 0.5 * e),
									p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
									(j[k++] = { x: c, y: d });
							for (
								j.sort(function (a, b) {
									return a.x - b.x;
								}),
								h = new m(1, 1, null),
								n = l;
								--n > -1;

							)
								(g = j[n]), (h = new m(g.x, g.y, h));
							this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
						},
						!0
					)),
					(q = c.prototype = new a()),
					(q.constructor = c),
					(q.getRatio = function (a) {
						var b = this._prev;
						if (a > b.t) {
							for (; b.next && a >= b.t;) b = b.next;
							b = b.prev;
						} else for (; b.prev && a <= b.t;) b = b.prev;
						return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
					}),
					(q.config = function (a) {
						return new c(a);
					}),
					(c.ease = new c()),
					l(
						"Bounce",
						j("BounceOut", function (a) {
							return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
						}),
						j("BounceIn", function (a) {
							return (a = 1 - a) < 1 / 2.75
								? 1 - 7.5625 * a * a
								: 2 / 2.75 > a
									? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
									: 2.5 / 2.75 > a
										? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
										: 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
						}),
						j("BounceInOut", function (a) {
							var b = 0.5 > a;
							return (
								(a = b ? 1 - 2 * a : 2 * a - 1),
								(a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
								b ? 0.5 * (1 - a) : 0.5 * a + 0.5
							);
						})
					),
					l(
						"Circ",
						j("CircOut", function (a) {
							return Math.sqrt(1 - (a -= 1) * a);
						}),
						j("CircIn", function (a) {
							return -(Math.sqrt(1 - a * a) - 1);
						}),
						j("CircInOut", function (a) {
							return (a *= 2) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
						})
					),
					(d = function (b, c, d) {
						var e = i(
							"easing." + b,
							function (a, b) {
								(this._p1 = a >= 1 ? a : 1), (this._p2 = (b || d) / (1 > a ? a : 1)), (this._p3 = (this._p2 / g) * (Math.asin(1 / this._p1) || 0)), (this._p2 = g / this._p2);
							},
							!0
						),
							f = (e.prototype = new a());
						return (
							(f.constructor = e),
							(f.getRatio = c),
							(f.config = function (a, b) {
								return new e(a, b);
							}),
							e
						);
					}),
					l(
						"Elastic",
						d(
							"ElasticOut",
							function (a) {
								return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
							},
							0.3
						),
						d(
							"ElasticIn",
							function (a) {
								return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
							},
							0.3
						),
						d(
							"ElasticInOut",
							function (a) {
								return (a *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * 0.5 + 1;
							},
							0.45
						)
					),
					l(
						"Expo",
						j("ExpoOut", function (a) {
							return 1 - Math.pow(2, -10 * a);
						}),
						j("ExpoIn", function (a) {
							return Math.pow(2, 10 * (a - 1)) - 0.001;
						}),
						j("ExpoInOut", function (a) {
							return (a *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
						})
					),
					l(
						"Sine",
						j("SineOut", function (a) {
							return Math.sin(a * h);
						}),
						j("SineIn", function (a) {
							return -Math.cos(a * h) + 1;
						}),
						j("SineInOut", function (a) {
							return -0.5 * (Math.cos(Math.PI * a) - 1);
						})
					),
					i(
						"easing.EaseLookup",
						{
							find: function (b) {
								return a.map[b];
							},
						},
						!0
					),
					k(e.SlowMo, "SlowMo", "ease,"),
					k(c, "RoughEase", "ease,"),
					k(b, "SteppedEase", "ease,"),
					o
				);
			},
			!0
		);
}),
	_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	(function (a, b) {
		"use strict";
		var c = {},
			d = a.document,
			e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
		if (!e.TweenLite) {
			var f,
				g,
				h,
				i,
				j,
				k = function (a) {
					var b,
						c = a.split("."),
						d = e;
					for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
					return d;
				},
				l = k("com.greensock"),
				m = 1e-10,
				n = function (a) {
					var b,
						c = [],
						d = a.length;
					for (b = 0; b !== d; c.push(a[b++]));
					return c;
				},
				o = function () { },
				p = (function () {
					var a = Object.prototype.toString,
						b = a.call([]);
					return function (c) {
						return null != c && (c instanceof Array || ("object" == typeof c && !!c.push && a.call(c) === b));
					};
				})(),
				q = {},
				r = function (d, f, g, h) {
					(this.sc = q[d] ? q[d].sc : []), (q[d] = this), (this.gsClass = null), (this.func = g);
					var i = [];
					(this.check = function (j) {
						for (var l, m, n, o, p = f.length, s = p; --p > -1;) (l = q[f[p]] || new r(f[p], [])).gsClass ? ((i[p] = l.gsClass), s--) : j && l.sc.push(this);
						if (0 === s && g) {
							if (((m = ("com.greensock." + d).split(".")), (n = m.pop()), (o = k(m.join("."))[n] = this.gsClass = g.apply(g, i)), h))
								if (((e[n] = c[n] = o), "undefined" != typeof module && module.exports))
									if (d === b) {
										module.exports = c[b] = o;
										for (p in c) o[p] = c[p];
									} else c[b] && (c[b][n] = o);
								else
									"function" == typeof define &&
										define.amd &&
										define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
											return o;
										});
							for (p = 0; p < this.sc.length; p++) this.sc[p].check();
						}
					}),
						this.check(!0);
				},
				s = (a._gsDefine = function (a, b, c, d) {
					return new r(a, b, c, d);
				}),
				t = (l._class = function (a, b, c) {
					return (
						(b = b || function () { }),
						s(
							a,
							[],
							function () {
								return b;
							},
							c
						),
						b
					);
				});
			s.globals = e;
			var u = [0, 0, 1, 1],
				v = t(
					"easing.Ease",
					function (a, b, c, d) {
						(this._func = a), (this._type = c || 0), (this._power = d || 0), (this._params = b ? u.concat(b) : u);
					},
					!0
				),
				w = (v.map = {}),
				x = (v.register = function (a, b, c, d) {
					for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
						for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) (h = k[g]), (w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a());
				});
			for (
				h = v.prototype,
				h._calcEnd = !1,
				h.getRatio = function (a) {
					if (this._func) return (this._params[0] = a), this._func.apply(null, this._params);
					var b = this._type,
						c = this._power,
						d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
					return 1 === c ? (d *= d) : 2 === c ? (d *= d * d) : 3 === c ? (d *= d * d * d) : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2;
				},
				f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
				g = f.length;
				--g > -1;

			)
				(h = f[g] + ",Power" + g), x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
			(w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
			var y = t("events.EventDispatcher", function (a) {
				(this._listeners = {}), (this._eventTarget = a || this);
			});
			(h = y.prototype),
				(h.addEventListener = function (a, b, c, d, e) {
					e = e || 0;
					var f,
						g,
						h = this._listeners[a],
						k = 0;
					for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) (f = h[g]), f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
					h.splice(k, 0, { c: b, s: c, up: d, pr: e });
				}),
				(h.removeEventListener = function (a, b) {
					var c,
						d = this._listeners[a];
					if (d) for (c = d.length; --c > -1;) if (d[c].c === b) return void d.splice(c, 1);
				}),
				(h.dispatchEvent = function (a) {
					var b,
						c,
						d,
						e = this._listeners[a];
					if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) (d = e[b]), d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c));
				});
			var z = a.requestAnimationFrame,
				A = a.cancelAnimationFrame,
				B =
					Date.now ||
					function () {
						return new Date().getTime();
					},
				C = B();
			for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) (z = a[f[g] + "RequestAnimationFrame"]), (A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"]);
			t("Ticker", function (a, b) {
				var c,
					e,
					f,
					g,
					h,
					k = this,
					l = B(),
					n = b !== !1 && z ? "auto" : !1,
					p = 500,
					q = 33,
					r = "tick",
					s = function (a) {
						var b,
							d,
							i = B() - C;
						i > p && (l += i - q), (C += i), (k.time = (C - l) / 1e3), (b = k.time - h), (!c || b > 0 || a === !0) && (k.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)), a !== !0 && (f = e(s)), d && k.dispatchEvent(r);
					};
				y.call(k),
					(k.time = k.frame = 0),
					(k.tick = function () {
						s(!0);
					}),
					(k.lagSmoothing = function (a, b) {
						return arguments.length ? ((p = a || 1 / m), void (q = Math.min(b, p, 0))) : 1 / m > p;
					}),
					(k.sleep = function () {
						null != f && (n && A ? A(f) : clearTimeout(f), (e = o), (f = null), k === i && (j = !1));
					}),
					(k.wake = function (a) {
						null !== f ? k.sleep() : a ? (l += -C + (C = B())) : k.frame > 10 && (C = B() - p + 5),
							(e =
								0 === c
									? o
									: n && z
										? z
										: function (a) {
											return setTimeout(a, (1e3 * (h - k.time) + 1) | 0);
										}),
							k === i && (j = !0),
							s(2);
					}),
					(k.fps = function (a) {
						return arguments.length ? ((c = a), (g = 1 / (c || 60)), (h = this.time + g), void k.wake()) : c;
					}),
					(k.useRAF = function (a) {
						return arguments.length ? (k.sleep(), (n = a), void k.fps(c)) : n;
					}),
					k.fps(a),
					setTimeout(function () {
						"auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1);
					}, 1500);
			}),
				(h = l.Ticker.prototype = new l.events.EventDispatcher()),
				(h.constructor = l.Ticker);
			var D = t("core.Animation", function (a, b) {
				if (
					((this.vars = b = b || {}),
						(this._duration = this._totalDuration = a || 0),
						(this._delay = Number(b.delay) || 0),
						(this._timeScale = 1),
						(this._active = b.immediateRender === !0),
						(this.data = b.data),
						(this._reversed = b.reversed === !0),
						X)
				) {
					j || i.wake();
					var c = this.vars.useFrames ? W : X;
					c.add(this, c._time), this.vars.paused && this.paused(!0);
				}
			});
			(i = D.ticker = new l.Ticker()),
				(h = D.prototype),
				(h._dirty = h._gc = h._initted = h._paused = !1),
				(h._totalTime = h._time = 0),
				(h._rawPrevTime = -1),
				(h._next = h._last = h._onUpdate = h._timeline = h.timeline = null),
				(h._paused = !1);
			var E = function () {
				j && B() - C > 2e3 && ("hidden" !== d.visibilityState || !i.lagSmoothing()) && i.wake();
				var a = setTimeout(E, 2e3);
				a.unref && a.unref();
			};
			E(),
				(h.play = function (a, b) {
					return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
				}),
				(h.pause = function (a, b) {
					return null != a && this.seek(a, b), this.paused(!0);
				}),
				(h.resume = function (a, b) {
					return null != a && this.seek(a, b), this.paused(!1);
				}),
				(h.seek = function (a, b) {
					return this.totalTime(Number(a), b !== !1);
				}),
				(h.restart = function (a, b) {
					return this.reversed(!1)
						.paused(!1)
						.totalTime(a ? -this._delay : 0, b !== !1, !0);
				}),
				(h.reverse = function (a, b) {
					return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
				}),
				(h.render = function (a, b, c) { }),
				(h.invalidate = function () {
					return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
				}),
				(h.isActive = function () {
					var a,
						b = this._timeline,
						c = this._startTime;
					return !b || (!this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7);
				}),
				(h._enabled = function (a, b) {
					return (
						j || i.wake(),
						(this._gc = !a),
						(this._active = this.isActive()),
						b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
						!1
					);
				}),
				(h._kill = function (a, b) {
					return this._enabled(!1, !1);
				}),
				(h.kill = function (a, b) {
					return this._kill(a, b), this;
				}),
				(h._uncache = function (a) {
					for (var b = a ? this : this.timeline; b;) (b._dirty = !0), (b = b.timeline);
					return this;
				}),
				(h._swapSelfInParams = function (a) {
					for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
					return c;
				}),
				(h._callback = function (a) {
					var b = this.vars,
						c = b[a],
						d = b[a + "Params"],
						e = b[a + "Scope"] || b.callbackScope || this,
						f = d ? d.length : 0;
					switch (f) {
						case 0:
							c.call(e);
							break;
						case 1:
							c.call(e, d[0]);
							break;
						case 2:
							c.call(e, d[0], d[1]);
							break;
						default:
							c.apply(e, d);
					}
				}),
				(h.eventCallback = function (a, b, c, d) {
					if ("on" === (a || "").substr(0, 2)) {
						var e = this.vars;
						if (1 === arguments.length) return e[a];
						null == b ? delete e[a] : ((e[a] = b), (e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c), (e[a + "Scope"] = d)), "onUpdate" === a && (this._onUpdate = b);
					}
					return this;
				}),
				(h.delay = function (a) {
					return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), (this._delay = a), this) : this._delay;
				}),
				(h.duration = function (a) {
					return arguments.length
						? ((this._duration = this._totalDuration = a),
							this._uncache(!0),
							this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
							this)
						: ((this._dirty = !1), this._duration);
				}),
				(h.totalDuration = function (a) {
					return (this._dirty = !1), arguments.length ? this.duration(a) : this._totalDuration;
				}),
				(h.time = function (a, b) {
					return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
				}),
				(h.totalTime = function (a, b, c) {
					if ((j || i.wake(), !arguments.length)) return this._totalTime;
					if (this._timeline) {
						if ((0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming)) {
							this._dirty && this.totalDuration();
							var d = this._totalDuration,
								e = this._timeline;
							if ((a > d && !c && (a = d), (this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale), e._dirty || this._uncache(!1), e._timeline))
								for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), (e = e._timeline);
						}
						this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z());
					}
					return this;
				}),
				(h.progress = h.totalProgress = function (a, b) {
					var c = this.duration();
					return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
				}),
				(h.startTime = function (a) {
					return arguments.length ? (a !== this._startTime && ((this._startTime = a), this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
				}),
				(h.endTime = function (a) {
					return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
				}),
				(h.timeScale = function (a) {
					if (!arguments.length) return this._timeScale;
					var b, c;
					for (
						a = a || m,
						this._timeline && this._timeline.smoothChildTiming && ((b = this._pauseTime), (c = b || 0 === b ? b : this._timeline.totalTime()), (this._startTime = c - ((c - this._startTime) * this._timeScale) / a)),
						this._timeScale = a,
						c = this.timeline;
						c && c.timeline;

					)
						(c._dirty = !0), c.totalDuration(), (c = c.timeline);
					return this;
				}),
				(h.reversed = function (a) {
					return arguments.length
						? (a != this._reversed && ((this._reversed = a), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
						: this._reversed;
				}),
				(h.paused = function (a) {
					if (!arguments.length) return this._paused;
					var b,
						c,
						d = this._timeline;
					return (
						a != this._paused &&
						d &&
						(j || a || i.wake(),
							(b = d.rawTime()),
							(c = b - this._pauseTime),
							!a && d.smoothChildTiming && ((this._startTime += c), this._uncache(!1)),
							(this._pauseTime = a ? b : null),
							(this._paused = a),
							(this._active = this.isActive()),
							!a && 0 !== c && this._initted && this.duration() && ((b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale), this.render(b, b === this._totalTime, !0))),
						this._gc && !a && this._enabled(!0, !1),
						this
					);
				});
			var F = t("core.SimpleTimeline", function (a) {
				D.call(this, 0, a), (this.autoRemoveChildren = this.smoothChildTiming = !0);
			});
			(h = F.prototype = new D()),
				(h.constructor = F),
				(h.kill()._gc = !1),
				(h._first = h._last = h._recent = null),
				(h._sortChildren = !1),
				(h.add = h.insert = function (a, b, c, d) {
					var e, f;
					if (
						((a._startTime = Number(b || 0) + a._delay),
							a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
							a.timeline && a.timeline._remove(a, !0),
							(a.timeline = a._timeline = this),
							a._gc && a._enabled(!0, !0),
							(e = this._last),
							this._sortChildren)
					)
						for (f = a._startTime; e && e._startTime > f;) e = e._prev;
					return (
						e ? ((a._next = e._next), (e._next = a)) : ((a._next = this._first), (this._first = a)), a._next ? (a._next._prev = a) : (this._last = a), (a._prev = e), (this._recent = a), this._timeline && this._uncache(!0), this
					);
				}),
				(h._remove = function (a, b) {
					return (
						a.timeline === this &&
						(b || a._enabled(!1, !0),
							a._prev ? (a._prev._next = a._next) : this._first === a && (this._first = a._next),
							a._next ? (a._next._prev = a._prev) : this._last === a && (this._last = a._prev),
							(a._next = a._prev = a.timeline = null),
							a === this._recent && (this._recent = this._last),
							this._timeline && this._uncache(!0)),
						this
					);
				}),
				(h.render = function (a, b, c) {
					var d,
						e = this._first;
					for (this._totalTime = this._time = this._rawPrevTime = a; e;)
						(d = e._next),
							(e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
							(e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
							(e = d);
				}),
				(h.rawTime = function () {
					return j || i.wake(), this._totalTime;
				});
			var G = t(
				"TweenLite",
				function (b, c, d) {
					if ((D.call(this, c, d), (this.render = G.prototype.render), null == b)) throw "Cannot tween a null target.";
					this.target = b = "string" != typeof b ? b : G.selector(b) || b;
					var e,
						f,
						g,
						h = b.jquery || (b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
						i = this.vars.overwrite;
					if (((this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i]), (h || b instanceof Array || (b.push && p(b))) && "number" != typeof b[0]))
						for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)
							(f = g[e]),
								f
									? "string" != typeof f
										? f.length && f !== a && f[0] && (f[0] === a || (f[0].nodeType && f[0].style && !f.nodeType))
											? (g.splice(e--, 1), (this._targets = g = g.concat(n(f))))
											: ((this._siblings[e] = $(f, this, !1)), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e]))
										: ((f = g[e--] = G.selector(f)), "string" == typeof f && g.splice(e + 1, 1))
									: g.splice(e--, 1);
					else (this._propLookup = {}), (this._siblings = $(b, this, !1)), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
					(this.vars.immediateRender || (0 === c && 0 === this._delay && this.vars.immediateRender !== !1)) && ((this._time = -m), this.render(Math.min(0, -this._delay)));
				},
				!0
			),
				H = function (b) {
					return b && b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType));
				},
				I = function (a, b) {
					var c,
						d = {};
					for (c in a)
						U[c] || (c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c) || !(!R[c] || (R[c] && R[c]._autoCSS)) || ((d[c] = a[c]), delete a[c]);
					a.css = d;
				};
			(h = G.prototype = new D()),
				(h.constructor = G),
				(h.kill()._gc = !1),
				(h.ratio = 0),
				(h._firstPT = h._targets = h._overwrittenProps = h._startAt = null),
				(h._notifyPluginsOfEnabled = h._lazy = !1),
				(G.version = "1.20.3"),
				(G.defaultEase = h._ease = new v(null, null, 1, 1)),
				(G.defaultOverwrite = "auto"),
				(G.ticker = i),
				(G.autoSleep = 120),
				(G.lagSmoothing = function (a, b) {
					i.lagSmoothing(a, b);
				}),
				(G.selector =
					a.$ ||
					a.jQuery ||
					function (b) {
						var c = a.$ || a.jQuery;
						return c ? ((G.selector = c), c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
					});
			var J = [],
				K = {},
				L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				M = /[\+-]=-?[\.\d]/,
				N = function (a) {
					for (var b, c = this._firstPT, d = 1e-6; c;)
						(b = c.blob ? (1 === a && null != this.end ? this.end : a ? this.join("") : this.start) : c.c * a + c.s),
							c.m ? (b = c.m(b, this._target || c.t)) : d > b && b > -d && !c.blob && (b = 0),
							c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
							(c = c._next);
				},
				O = function (a, b, c, d) {
					var e,
						f,
						g,
						h,
						i,
						j,
						k,
						l = [],
						m = 0,
						n = "",
						o = 0;
					for (
						l.start = a,
						l.end = b,
						a = l[0] = a + "",
						b = l[1] = b + "",
						c && (c(l), (a = l[0]), (b = l[1])),
						l.length = 0,
						e = a.match(L) || [],
						f = b.match(L) || [],
						d && ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
						i = f.length,
						h = 0;
						i > h;
						h++
					)
						(k = f[h]),
							(j = b.substr(m, b.indexOf(k, m) - m)),
							(n += j || !h ? j : ","),
							(m += j.length),
							o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
							k === e[h] || e.length <= h
								? (n += k)
								: (n && (l.push(n), (n = "")),
									(g = parseFloat(e[h])),
									l.push(g),
									(l._firstPT = {
										_next: l._firstPT,
										t: l,
										p: l.length - 1,
										s: g,
										c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
										f: 0,
										m: o && 4 > o ? Math.round : 0,
									})),
							(m += k.length);
					return (n += b.substr(m)), n && l.push(n), (l.setRatio = N), M.test(b) && (l.end = null), l;
				},
				P = function (a, b, c, d, e, f, g, h, i) {
					"function" == typeof d && (d = d(i || 0, a));
					var j,
						k = typeof a[b],
						l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
						m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
						n = "string" == typeof d && "=" === d.charAt(1),
						o = { t: a, p: b, s: m, f: "function" === k, pg: 0, n: e || b, m: f ? ("function" == typeof f ? f : Math.round) : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0 };
					return (
						("number" != typeof m || ("number" != typeof d && !n)) &&
						(g || isNaN(m) || (!n && isNaN(d)) || "boolean" == typeof m || "boolean" == typeof d
							? ((o.fp = g), (j = O(m, n ? parseFloat(o.s) + o.c : d, h || G.defaultStringFilter, o)), (o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }))
							: ((o.s = parseFloat(m)), n || (o.c = parseFloat(d) - o.s || 0))),
						o.c ? ((o._next = this._firstPT) && (o._next._prev = o), (this._firstPT = o), o) : void 0
					);
				},
				Q = (G._internals = { isArray: p, isSelector: H, lazyTweens: J, blobDif: O }),
				R = (G._plugins = {}),
				S = (Q.tweenLookup = {}),
				T = 0,
				U = (Q.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1,
					yoyoEase: 1,
				}),
				V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
				W = (D._rootFramesTimeline = new F()),
				X = (D._rootTimeline = new F()),
				Y = 30,
				Z = (Q.lazyRender = function () {
					var a,
						b = J.length;
					for (K = {}; --b > -1;) (a = J[b]), a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
					J.length = 0;
				});
			(X._startTime = i.time),
				(W._startTime = i.frame),
				(X._active = W._active = !0),
				setTimeout(Z, 1),
				(D._updateRoot = G.render = function () {
					var a, b, c;
					if ((J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y)) {
						Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
						for (c in S) {
							for (b = S[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
							0 === b.length && delete S[c];
						}
						if (((c = X._first), (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length)) {
							for (; c && c._paused;) c = c._next;
							c || i.sleep();
						}
					}
				}),
				i.addEventListener("tick", D._updateRoot);
			var $ = function (a, b, c) {
				var d,
					e,
					f = a._gsTweenID;
				if ((S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = { target: a, tweens: [] }), b && ((d = S[f].tweens), (d[(e = d.length)] = b), c))) for (; --e > -1;) d[e] === b && d.splice(e, 1);
				return S[f].tweens;
			},
				_ = function (a, b, c, d) {
					var e,
						f,
						g = a.vars.onOverwrite;
					return g && (e = g(a, b, c, d)), (g = G.onOverwrite), g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
				},
				aa = function (a, b, c, d, e) {
					var f, g, h, i;
					if (1 === d || d >= 4) {
						for (i = e.length, f = 0; i > f; f++)
							if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
							else if (5 === d) break;
						return g;
					}
					var j,
						k = b._startTime + m,
						l = [],
						n = 0,
						o = 0 === b._duration;
					for (f = e.length; --f > -1;)
						(h = e[f]) === b ||
							h._gc ||
							h._paused ||
							(h._timeline !== b._timeline
								? ((j = j || ba(b, 0, o)), 0 === ba(h, j, o) && (l[n++] = h))
								: h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && (((o || !h._initted) && k - h._startTime <= 2e-10) || (l[n++] = h)));
					for (f = n; --f > -1;)
						if (((h = l[f]), 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || (!h._firstPT && h._initted))) {
							if (2 !== d && !_(h, b)) continue;
							h._enabled(!1, !1) && (g = !0);
						}
					return g;
				},
				ba = function (a, b, c) {
					for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
						if (((f += d._startTime), (e *= d._timeScale), d._paused)) return -100;
						d = d._timeline;
					}
					return (f /= e), f > b ? f - b : (c && f === b) || (!a._initted && 2 * m > f - b) ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m;
				};
			(h._init = function () {
				var a,
					b,
					c,
					d,
					e,
					f,
					g = this.vars,
					h = this._overwrittenProps,
					i = this._duration,
					j = !!g.immediateRender,
					k = g.ease;
				if (g.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (e = {});
					for (d in g.startAt) e[d] = g.startAt[d];
					if (
						((e.data = "isStart"),
							(e.overwrite = !1),
							(e.immediateRender = !0),
							(e.lazy = j && g.lazy !== !1),
							(e.startAt = e.delay = null),
							(e.onUpdate = g.onUpdate),
							(e.onUpdateParams = g.onUpdateParams),
							(e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
							(this._startAt = G.to(this.target, 0, e)),
							j)
					)
						if (this._time > 0) this._startAt = null;
						else if (0 !== i) return;
				} else if (g.runBackwards && 0 !== i)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
					else {
						0 !== this._time && (j = !1), (c = {});
						for (d in g) (U[d] && "autoCSS" !== d) || (c[d] = g[d]);
						if (((c.overwrite = 0), (c.data = "isFromStart"), (c.lazy = j && g.lazy !== !1), (c.immediateRender = j), (this._startAt = G.to(this.target, 0, c)), j)) {
							if (0 === this._time) return;
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
					}
				if (
					((this._ease = k = k ? (k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase) : G.defaultEase),
						g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)),
						(this._easeType = this._ease._type),
						(this._easePower = this._ease._power),
						(this._firstPT = null),
						this._targets)
				)
					for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], (this._propLookup[a] = {}), this._siblings[a], h ? h[a] : null, a) && (b = !0);
				else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
				if ((b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), g.runBackwards))
					for (c = this._firstPT; c;) (c.s += c.c), (c.c = -c.c), (c = c._next);
				(this._onUpdate = g.onUpdate), (this._initted = !0);
			}),
				(h._initProps = function (b, c, d, e, f) {
					var g, h, i, j, k, l;
					if (null == b) return !1;
					K[b._gsTweenID] && Z(), this.vars.css || (b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b));
					for (g in this.vars)
						if (((l = this.vars[g]), U[g])) l && (l instanceof Array || (l.push && p(l))) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
						else if (R[g] && (j = new R[g]())._onInitTween(b, this.vars[g], this, f)) {
							for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
							(j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
						} else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
					return e && this._kill(e, b)
						? this._initProps(b, c, d, e, f)
						: this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d)
							? (this._kill(c, b), this._initProps(b, c, d, e, f))
							: (this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)) && (K[b._gsTweenID] = !0), i);
				}),
				(h.render = function (a, b, c) {
					var d,
						e,
						f,
						g,
						h = this._time,
						i = this._duration,
						j = this._rawPrevTime;
					if (a >= i - 1e-7 && a >= 0)
						(this._totalTime = this._time = i),
							(this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
							this._reversed || ((d = !0), (e = "onComplete"), (c = c || this._timeline.autoRemoveChildren)),
							0 === i &&
							(this._initted || !this.vars.lazy || c) &&
							(this._startTime === this._timeline._duration && (a = 0),
								(0 > j || (0 >= a && a >= -1e-7) || (j === m && "isPause" !== this.data)) && j !== a && ((c = !0), j > m && (e = "onReverseComplete")),
								(this._rawPrevTime = g = !b || a || j === a ? a : m));
					else if (1e-7 > a)
						(this._totalTime = this._time = 0),
							(this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
							(0 !== h || (0 === i && j > 0)) && ((e = "onReverseComplete"), (d = this._reversed)),
							0 > a && ((this._active = !1), 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), (this._rawPrevTime = g = !b || a || j === a ? a : m))),
							(!this._initted || (this._startAt && this._startAt.progress())) && (c = !0);
					else if (((this._totalTime = this._time = a), this._easeType)) {
						var k = a / i,
							l = this._easeType,
							n = this._easePower;
						(1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
							3 === l && (k *= 2),
							1 === n ? (k *= k) : 2 === n ? (k *= k * k) : 3 === n ? (k *= k * k * k) : 4 === n && (k *= k * k * k * k),
							1 === l ? (this.ratio = 1 - k) : 2 === l ? (this.ratio = k) : 0.5 > a / i ? (this.ratio = k / 2) : (this.ratio = 1 - k / 2);
					} else this.ratio = this._ease.getRatio(a / i);
					if (this._time !== h || c) {
						if (!this._initted) {
							if ((this._init(), !this._initted || this._gc)) return;
							if (!c && this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)))
								return (this._time = this._totalTime = h), (this._rawPrevTime = j), J.push(this), void (this._lazy = [a, b]);
							this._time && !d ? (this.ratio = this._ease.getRatio(this._time / i)) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
						}
						for (
							this._lazy !== !1 && (this._lazy = !1),
							this._active || (!this._paused && this._time !== h && a >= 0 && (this._active = !0)),
							0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),
							f = this._firstPT;
							f;

						)
							f.f ? f.t[f.p](f.c * this.ratio + f.s) : (f.t[f.p] = f.c * this.ratio + f.s), (f = f._next);
						this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || ((this._time !== h || d || c) && this._callback("onUpdate"))),
							e &&
							(!this._gc || c) &&
							(0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c),
								d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
								!b && this.vars[e] && this._callback(e),
								0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0));
					}
				}),
				(h._kill = function (a, b, c) {
					if (("all" === a && (a = null), null == a && (null == b || b === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
					b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
					var d,
						e,
						f,
						g,
						h,
						i,
						j,
						k,
						l,
						m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
					if ((p(b) || H(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
					else {
						if (this._targets) {
							for (d = this._targets.length; --d > -1;)
								if (b === this._targets[d]) {
									(h = this._propLookup[d] || {}), (this._overwrittenProps = this._overwrittenProps || []), (e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all");
									break;
								}
						} else {
							if (b !== this.target) return !1;
							(h = this._propLookup), (e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all");
						}
						if (h) {
							if (((j = a || h), (k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill)), c && (G.onOverwrite || this.vars.onOverwrite))) {
								for (f in j) h[f] && (l || (l = []), l.push(f));
								if ((l || !a) && !_(this, c, b, l)) return !1;
							}
							for (f in j)
								(g = h[f]) &&
									(m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
										g.pg && g.t._kill(j) && (i = !0),
										(g.pg && 0 !== g.t._overwriteProps.length) || (g._prev ? (g._prev._next = g._next) : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), (g._next = g._prev = null)),
										delete h[f]),
									k && (e[f] = 1);
							!this._firstPT && this._initted && this._enabled(!1, !1);
						}
					}
					return i;
				}),
				(h.invalidate = function () {
					return (
						this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this),
						(this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
						(this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
						(this._propLookup = this._targets ? {} : []),
						D.prototype.invalidate.call(this),
						this.vars.immediateRender && ((this._time = -m), this.render(Math.min(0, -this._delay))),
						this
					);
				}),
				(h._enabled = function (a, b) {
					if ((j || i.wake(), a && this._gc)) {
						var c,
							d = this._targets;
						if (d) for (c = d.length; --c > -1;) this._siblings[c] = $(d[c], this, !0);
						else this._siblings = $(this.target, this, !0);
					}
					return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
				}),
				(G.to = function (a, b, c) {
					return new G(a, b, c);
				}),
				(G.from = function (a, b, c) {
					return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new G(a, b, c);
				}),
				(G.fromTo = function (a, b, c, d) {
					return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), new G(a, b, d);
				}),
				(G.delayedCall = function (a, b, c, d, e) {
					return new G(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 });
				}),
				(G.set = function (a, b) {
					return new G(a, 0, b);
				}),
				(G.getTweensOf = function (a, b) {
					if (null == a) return [];
					a = "string" != typeof a ? a : G.selector(a) || a;
					var c, d, e, f;
					if ((p(a) || H(a)) && "number" != typeof a[0]) {
						for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
						for (c = d.length; --c > -1;) for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1);
					} else if (a._gsTweenID) for (d = $(a).concat(), c = d.length; --c > -1;) (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
					return d || [];
				}),
				(G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
					"object" == typeof b && ((c = b), (b = !1));
					for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a);
				});
			var ca = t(
				"plugins.TweenPlugin",
				function (a, b) {
					(this._overwriteProps = (a || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = b || 0), (this._super = ca.prototype);
				},
				!0
			);
			if (
				((h = ca.prototype),
					(ca.version = "1.19.0"),
					(ca.API = 2),
					(h._firstPT = null),
					(h._addTween = P),
					(h.setRatio = N),
					(h._kill = function (a) {
						var b,
							c = this._overwriteProps,
							d = this._firstPT;
						if (null != a[this._propName]) this._overwriteProps = [];
						else for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
						for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? ((d._prev._next = d._next), (d._prev = null)) : this._firstPT === d && (this._firstPT = d._next)), (d = d._next);
						return !1;
					}),
					(h._mod = h._roundProps = function (a) {
						for (var b, c = this._firstPT; c;) (b = a[this._propName] || (null != c.n && a[c.n.split(this._propName + "_").join("")])), b && "function" == typeof b && (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)), (c = c._next);
					}),
					(G._onPluginEvent = function (a, b) {
						var c,
							d,
							e,
							f,
							g,
							h = b._firstPT;
						if ("_onInitAllProps" === a) {
							for (; h;) {
								for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
								(h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h), (h._next = d) ? (d._prev = h) : (f = h), (h = g);
							}
							h = b._firstPT = e;
						}
						for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), (h = h._next);
						return c;
					}),
					(ca.activate = function (a) {
						for (var b = a.length; --b > -1;) a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
						return !0;
					}),
					(s.plugin = function (a) {
						if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
						var b,
							c = a.propName,
							d = a.priority || 0,
							e = a.overwriteProps,
							f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
							g = t(
								"plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
								function () {
									ca.call(this, c, d), (this._overwriteProps = e || []);
								},
								a.global === !0
							),
							h = (g.prototype = new ca(c));
						(h.constructor = g), (g.API = a.API);
						for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
						return (g.version = a.version), ca.activate([g]), g;
					}),
					(f = a._gsQueue))
			) {
				for (g = 0; g < f.length; g++) f[g]();
				for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h);
			}
			j = !1;
		}
	})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/*!
 greensock.com
 
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	"use strict";
	var a = (_gsScope.document || {}).documentElement,
		b = _gsScope,
		c = function (c, d) {
			var e = "x" === d ? "Width" : "Height",
				f = "scroll" + e,
				g = "client" + e,
				h = document.body;
			return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : c[f] - c["offset" + e];
		},
		d = function (a) {
			return "string" == typeof a && (a = TweenLite.selector(a)), a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === b || (a.nodeType && a.style) ? a : null;
		},
		e = function (c, d) {
			var e = "scroll" + ("x" === d ? "Left" : "Top");
			return (
				c === b && (null != c.pageXOffset ? (e = "page" + d.toUpperCase() + "Offset") : (c = null != a[e] ? a : document.body)),
				function () {
					return c[e];
				}
			);
		},
		f = function (c, f) {
			var g = d(c).getBoundingClientRect(),
				h = document.body,
				i = !f || f === b || f === h,
				j = i ? { top: a.clientTop - (window.pageYOffset || a.scrollTop || h.scrollTop || 0), left: a.clientLeft - (window.pageXOffset || a.scrollLeft || h.scrollLeft || 0) } : f.getBoundingClientRect(),
				k = { x: g.left - j.left, y: g.top - j.top };
			return !i && f && ((k.x += e(f, "x")()), (k.y += e(f, "y")())), k;
		},
		g = function (a, b, d) {
			var e = typeof a;
			return isNaN(a) ? ("number" === e || ("string" === e && "=" === a.charAt(1)) ? a : "max" === a ? c(b, d) : Math.min(c(b, d), f(a, b)[d])) : parseFloat(a);
		},
		h = _gsScope._gsDefine.plugin({
			propName: "scrollTo",
			API: 2,
			global: !0,
			version: "1.9.1",
			init: function (a, c, d) {
				return (
					(this._wdw = a === b),
					(this._target = a),
					(this._tween = d),
					"object" != typeof c ? ((c = { y: c }), "string" == typeof c.y && "max" !== c.y && "=" !== c.y.charAt(1) && (c.x = c.y)) : c.nodeType && (c = { y: c, x: c }),
					(this.vars = c),
					(this._autoKill = c.autoKill !== !1),
					(this.getX = e(a, "x")),
					(this.getY = e(a, "y")),
					(this.x = this.xPrev = this.getX()),
					(this.y = this.yPrev = this.getY()),
					null != c.x ? (this._addTween(this, "x", this.x, g(c.x, a, "x") - (c.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
					null != c.y ? (this._addTween(this, "y", this.y, g(c.y, a, "y") - (c.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
					!0
				);
			},
			set: function (a) {
				this._super.setRatio.call(this, a);
				var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
					e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
					f = e - this.yPrev,
					g = d - this.xPrev,
					i = h.autoKillThreshold;
				this.x < 0 && (this.x = 0),
					this.y < 0 && (this.y = 0),
					this._autoKill &&
					(!this.skipX && (g > i || -i > g) && d < c(this._target, "x") && (this.skipX = !0),
						!this.skipY && (f > i || -i > f) && e < c(this._target, "y") && (this.skipY = !0),
						this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
					this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
					(this.xPrev = this.x),
					(this.yPrev = this.y);
			},
		}),
		i = h.prototype;
	(h.max = c),
		(h.getOffset = f),
		(h.buildGetter = e),
		(h.autoKillThreshold = 7),
		(i._kill = function (a) {
			return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a);
		});
}),
	_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	(function (a) {
		"use strict";
		var b = function () {
			return (_gsScope.GreenSockGlobals || _gsScope)[a];
		};
		"undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), (module.exports = b())) : "function" == typeof define && define.amd && define(["TweenLite"], b);
	})("ScrollToPlugin");
/**
 *	jQuery Sliding Menu Plugin
 */
(function ($) {
	var usedIds = [];
	$.fn.menu = function (options) {
		var selector = this.selector;
		var settings = $.extend({ dataJSON: false, backLabel: "" }, options);
		return this.each(function () {
			var self = this,
				menu = $(self),
				data;
			if (menu.hasClass("sliding-menu")) {
				return;
			}
			var menuWidth = menu.width();
			if (settings.dataJSON) {
				data = processJSON(settings.dataJSON);
			} else {
				data = process(menu);
			}
			menu.empty().addClass("sliding-menu");
			var rootPanel;
			if (settings.dataJSON) {
				$(data).each(function (index, item) {
					var panel = $("<ul></ul>");
					if (item.root) {
						rootPanel = "#" + item.id;
					}
					panel.attr("id", item.id);
					panel.addClass("menu-panel");
					panel.width(menuWidth);
					$(item.children).each(function (index, item) {
						var link = $("<a></a>");
						link.attr("class", item.styleClass);
						link.attr("href", item.href);
						link.text(item.label);
						var li = $("<li></li>");
						li.append(link);
						panel.append(li);
					});
					menu.append(panel);
				});
			} else {
				$(data).each(function (index, item) {
					var panel = $(item);
					if (panel.hasClass("menu-panel-root")) {
						rootPanel = "#" + panel.attr("id");
					}
					panel.width(menuWidth);
					menu.append(item);
				});
			}
			rootPanel = $(rootPanel);
			rootPanel.addClass("menu-panel-root");
			var currentPanel = rootPanel;
			menu.height(rootPanel.height());
			var wrapper = $("<div></div>")
				.addClass("sliding-menu-wrapper")
				.width(data.length * menuWidth);
			menu.wrapInner(wrapper);
			wrapper = $(".sliding-menu-wrapper", menu);
			$("a", self).on("click", function (e) {
				var href = $(this).attr("href"),
					label = $(this).text();
				if (wrapper.is(":animated")) {
					e.preventDefault();
					return;
				}
				if (href == "#") {
					e.preventDefault();
				} else if (href.indexOf("#menu-panel") == 0) {
					var target = $(href),
						isBack = $(this).hasClass("back"),
						marginLeft = parseInt(wrapper.css("margin-left"));
					if (isBack) {
						if (href == "#menu-panel-back") {
							target = currentPanel.prev();
						}
						wrapper.stop(true, true).animate({ marginLeft: marginLeft + menuWidth }, "fast");
					} else {
						target.insertAfter(currentPanel);
						if (settings.backLabel === true) {
							$(".back", target).text(label);
						} else {
							$(".back", target).text(settings.backLabel);
						}
						wrapper.stop(true, true).animate({ marginLeft: marginLeft - menuWidth }, "fast");
					}
					currentPanel = target;
					menu.stop(true, true).animate({ height: target.height() }, "fast");
					e.preventDefault();
				}
			});
			return this;
		});
		function process(data) {
			var ul = $("ul", data),
				panels = [];
			$(ul).each(function (index, item) {
				var panel = $(item),
					handler = panel.prev(),
					id = getNewId();
				if (handler.length == 1) {
					handler.addClass("nav").attr("href", "#menu-panel-" + id);
				}
				panel.attr("id", "menu-panel-" + id);
				if (index == 0) {
					panel.addClass("menu-panel-root");
				} else {
					panel.addClass("menu-panel");
					var li = $("<li></li>"),
						back = $("<a></a>").addClass("back").attr("href", "#menu-panel-back");
					panel.prepend(back);
				}
				panels.push(item);
			});
			return panels;
		}
		function processJSON(data, parent) {
			var root = { id: "menu-panel-" + getNewId(), children: [], root: parent ? false : true },
				panels = [];
			if (parent) {
				root.children.push({ styleClass: "back", href: "#" + parent.id });
			}
			$(data).each(function (index, item) {
				root.children.push(item);
				if (item.children) {
					var panel = processJSON(item.children, root);
					item.href = "#" + panel[0].id;
					item.styleClass = "nav";
					panels = panels.concat(panel);
				}
			});
			return [root].concat(panels);
		}
		function getNewId() {
			var id;
			do {
				id = Math.random().toString(36).substring(3, 8);
			} while (usedIds.indexOf(id) >= 0);
			usedIds.push(id);
			return id;
		}
	};
})(jQuery);

/**
 * Single Page Nav Plugin
 */

if (typeof Object.create !== "function") {
	Object.create = function (c) {
		function d() { }
		d.prototype = c;
		return new d();
	};
}
(function (j, f, g, h) {
	var i = {
		init: function (a, b) {
			this.options = j.extend({}, j.fn.singlePageNav.defaults, a);
			this.container = b;
			this.$container = j(b);
			this.$links = this.$container.find("a.fbgs");
			if (this.options.filter !== "") {
				this.$links = this.$links.filter(this.options.filter);
			}
			this.$window = j(f);
			this.$htmlbody = j("html, body");
			this.$links.on("click.singlePageNav", j.proxy(this.handleClick, this));
			this.didScroll = false;
			this.checkPosition();
			this.setTimer();
		},
		handleClick: function (a) {
			var c = this,
				b = a.currentTarget,
				d = j(b.hash);
			a.preventDefault();
			if (d.length) {
				c.clearTimer();
				if (typeof c.options.beforeStart === "function") {
					c.options.beforeStart();
				}
				c.setActiveLink(b.hash);
				c.scrollTo(d, function () {
					if (c.options.updateHash && history.pushState) {
						history.pushState(null, null, b.hash);
					}
					c.setTimer();
					if (typeof c.options.onComplete === "function") {
						c.options.onComplete();
					}
				});
			}
		},
		scrollTo: function (d, a) {
			var e = this;
			var b = e.getCoords(d).top;
			var c = false;
			e.$htmlbody.stop().animate(
				{ scrollTop: b },
				{
					duration: e.options.speed,
					easing: e.options.easing,
					complete: function () {
						if (typeof a === "function" && !c) {
							a();
						}
						c = true;
					},
				}
			);
		},
		setTimer: function () {
			var a = this;
			a.$window.on("scroll.singlePageNav", function () {
				a.didScroll = true;
			});
			a.timer = setInterval(function () {
				if (a.didScroll) {
					a.didScroll = false;
					a.checkPosition();
				}
			}, 250);
		},
		clearTimer: function () {
			clearInterval(this.timer);
			this.$window.off("scroll.singlePageNav");
			this.didScroll = false;
		},
		checkPosition: function () {
			var a = this.$window.scrollTop();
			var b = this.getCurrentSection(a);
			if (b !== null) {
				this.setActiveLink(b);
			}
		},
		getCoords: function (a) {
			return { top: Math.round(a.offset().top) - this.options.offset };
		},
		setActiveLink: function (b) {
			var a = this.$container.find("a[href$='" + b + "']");
			if (!a.hasClass(this.options.currentClass)) {
				this.$links.removeClass(this.options.currentClass);
				a.addClass(this.options.currentClass);
				if (j(".scroll-init  a.fbgs").hasClass("act-sec")) {
					j(".scroll-init  a.act-sec").each(function () {
						var c = j(this).data("bgtext");
						TweenMax.to(j(".sc_current span"), 0.2, {
							force3D: true,
							y: -10,
							opacity: 0,
							ease: Power2.easeOut,
							onComplete: function () {
								TweenMax.to(j(".sc_current span"), 0.1, { force3D: true, y: 10 });
								jQuery(".sc_current span").html(c);
							},
						});
						TweenMax.to(j(".sc_current span"), 0.2, { force3D: true, y: 0, delay: 0.3, opacity: 1, ease: Power2.easeOut });
					});
				}
			}
		},
		getCurrentSection: function (a) {
			var e, b, d, c;
			for (e = 0; e < this.$links.length; e++) {
				b = this.$links[e].hash;
				if (j(b).length) {
					d = this.getCoords(j(b));
					if (a >= d.top - this.options.threshold) {
						c = b;
					}
				}
			}
			return c || (this.$links.length === 0 ? null : this.$links[0].hash);
		},
	};
	j.fn.singlePageNav = function (a) {
		return this.each(function () {
			var b = Object.create(i);
			b.init(a, this);
		});
	};
	j.fn.singlePageNav.defaults = { offset: 0, threshold: 120, speed: 400, currentClass: "act-sec", easing: "swing", updateHash: false, filter: "", onComplete: false, beforeStart: false };
})(jQuery, window, document);
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/
(function (e, t) {
	if (typeof exports === "object") {
		module.exports = t(require("jquery"));
	} else if (typeof define === "function" && define.amd) {
		define("EasyPieChart", ["jquery"], t);
	} else {
		t(e.jQuery);
	}
})(this, function (e) {
	var t = function (e, t) {
		var n;
		var r = document.createElement("canvas");
		if (typeof G_vmlCanvasManager !== "undefined") {
			G_vmlCanvasManager.initElement(r);
		}
		var i = r.getContext("2d");
		r.width = r.height = t.size;
		e.appendChild(r);
		var s = 1;
		if (window.devicePixelRatio > 1) {
			s = window.devicePixelRatio;
			r.style.width = r.style.height = [t.size, "px"].join("");
			r.width = r.height = t.size * s;
			i.scale(s, s);
		}
		i.translate(t.size / 2, t.size / 2);
		i.rotate((-1 / 2 + t.rotate / 180) * Math.PI);
		var o = (t.size - t.lineWidth) / 2;
		if (t.scaleColor && t.scaleLength) {
			o -= t.scaleLength + 2;
		}
		Date.now =
			Date.now ||
			function () {
				return +new Date();
			};
		var u = function (e, t, n) {
			n = Math.min(Math.max(0, n || 1), 1);
			i.beginPath();
			i.arc(0, 0, o, 0, Math.PI * 2 * n, false);
			i.strokeStyle = e;
			i.lineWidth = t;
			i.stroke();
		};
		var a = function () {
			var e;
			var n;
			var r = 24;
			i.lineWidth = 1;
			i.fillStyle = t.scaleColor;
			i.save();
			for (var r = 24; r > 0; --r) {
				if (r % 6 === 0) {
					n = t.scaleLength;
					e = 0;
				} else {
					n = t.scaleLength * 0.6;
					e = t.scaleLength - n;
				}
				i.fillRect(-t.size / 2 + e, 0, n, 1);
				i.rotate(Math.PI / 12);
			}
			i.restore();
		};
		var f = (function () {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function (e) {
					window.setTimeout(e, 1e3 / 60);
				}
			);
		})();
		var l = function () {
			t.scaleColor && a();
			t.trackColor && u(t.trackColor, t.lineWidth);
		};
		this.clear = function () {
			i.clearRect(t.size / -2, t.size / -2, t.size, t.size);
		};
		this.draw = function (e) {
			if (!!t.scaleColor || !!t.trackColor) {
				if (i.getImageData && i.putImageData) {
					if (!n) {
						l();
						n = i.getImageData(0, 0, t.size * s, t.size * s);
					} else {
						i.putImageData(n, 0, 0);
					}
				} else {
					this.clear();
					l();
				}
			} else {
				this.clear();
			}
			i.lineCap = t.lineCap;
			var r;
			if (typeof t.barColor === "function") {
				r = t.barColor(e);
			} else {
				r = t.barColor;
			}
			if (e > 0) {
				u(r, t.lineWidth, e / 100);
			}
		}.bind(this);
		this.animate = function (e, n) {
			var r = Date.now();
			t.onStart(e, n);
			var i = function () {
				var s = Math.min(Date.now() - r, t.animate);
				var o = t.easing(this, s, e, n - e, t.animate);
				this.draw(o);
				t.onStep(e, n, o);
				if (s >= t.animate) {
					t.onStop(e, n);
				} else {
					f(i);
				}
			}.bind(this);
			f(i);
		}.bind(this);
	};
	var n = function (e, n) {
		var r = {
			barColor: "#F54A4B",
			trackColor: "#ccc",
			scaleColor: "#ccc",
			scaleLength: 0,
			lineCap: "round",
			lineWidth: 10,
			size: 152,
			rotate: 0,
			animate: 4e3,
			easing: function (e, t, n, r, i) {
				t = t / (i / 2);
				if (t < 1) {
					return (r / 2) * t * t + n;
				}
				return (-r / 2) * (--t * (t - 2) - 1) + n;
			},
			onStart: function (e, t) {
				return;
			},
			onStep: function (e, t, n) {
				return;
			},
			onStop: function (e, t) {
				return;
			},
		};
		if (typeof t !== "undefined") {
			r.renderer = t;
		} else if (typeof SVGRenderer !== "undefined") {
			r.renderer = SVGRenderer;
		} else {
			throw new Error("Please load either the SVG- or the CanvasRenderer");
		}
		var i = {};
		var s = 0;
		var o = function () {
			this.el = e;
			this.options = i;
			for (var t in r) {
				if (r.hasOwnProperty(t)) {
					i[t] = n && typeof n[t] !== "undefined" ? n[t] : r[t];
					if (typeof i[t] === "function") {
						i[t] = i[t].bind(this);
					}
				}
			}
			if (typeof i.easing === "string" && typeof jQuery !== "undefined" && jQuery.isFunction(jQuery.easing[i.easing])) {
				i.easing = jQuery.easing[i.easing];
			} else {
				i.easing = r.easing;
			}
			this.renderer = new i.renderer(e, i);
			this.renderer.draw(s);
			if (e.dataset && e.dataset.percent) {
				this.update(parseFloat(e.dataset.percent));
			} else if (e.getAttribute && e.getAttribute("data-percent")) {
				this.update(parseFloat(e.getAttribute("data-percent")));
			}
		}.bind(this);
		this.update = function (e) {
			e = parseFloat(e);
			if (i.animate) {
				this.renderer.animate(s, e);
			} else {
				this.renderer.draw(e);
			}
			s = e;
			return this;
		}.bind(this);
		o();
	};
	e.fn.easyPieChart = function (t) {
		return this.each(function () {
			if (!e.data(this, "easyPieChart")) {
				e.data(this, "easyPieChart", new n(this, t));
			}
		});
	};
});

/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://www.codrops.com
 */
!(function (t, e, o) {
	"use strict";
	(t.HoverDir = function (e, o) {
		(this.$el = t(o)), this._init(e);
	}),
		(t.HoverDir.defaults = { speed: 300, easing: "ease", hoverDelay: 0, inverse: !1 }),
		(t.HoverDir.prototype = {
			_init: function (e) {
				(this.options = t.extend(!0, {}, t.HoverDir.defaults, e)), (this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing), (this.support = Modernizr.csstransitions), this._loadEvents();
			},
			_loadEvents: function () {
				var e = this;
				this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (o) {
					var i = t(this),
						n = i.find("div.grid-det"),
						s = e._getDir(i, { x: o.pageX, y: o.pageY }),
						r = e._getStyle(s);
					"mouseenter" === o.type
						? (n.hide().css(r.from),
							clearTimeout(e.tmhover),
							(e.tmhover = setTimeout(function () {
								n.show(0, function () {
									var o = t(this);
									e.support && o.css("transition", e.transitionProp), e._applyAnimation(o, r.to, e.options.speed);
								});
							}, e.options.hoverDelay)))
						: (e.support && n.css("transition", e.transitionProp), clearTimeout(e.tmhover), e._applyAnimation(n, r.from, e.options.speed));
				});
			},
			_getDir: function (t, e) {
				var o = t.width(),
					i = t.height(),
					n = (e.x - t.offset().left - o / 2) * (o > i ? i / o : 1),
					s = (e.y - t.offset().top - i / 2) * (i > o ? o / i : 1),
					r = Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
				return r;
			},
			_getStyle: function (t) {
				var e,
					o,
					i = { left: "0px", top: "-100%" },
					n = { left: "0px", top: "100%" },
					s = { left: "-100%", top: "0px" },
					r = { left: "100%", top: "0px" },
					a = { top: "0px" },
					p = { left: "0px" };
				switch (t) {
					case 0:
						(e = this.options.inverse ? n : i), (o = a);
						break;
					case 1:
						(e = this.options.inverse ? s : r), (o = p);
						break;
					case 2:
						(e = this.options.inverse ? i : n), (o = a);
						break;
					case 3:
						(e = this.options.inverse ? r : s), (o = p);
				}
				return { from: e, to: o };
			},
			_applyAnimation: function (e, o, i) {
				(t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate), e.stop().applyStyle(o, t.extend(!0, [], { duration: i + "ms" }));
			},
		});
	var i = function (t) {
		e.console && e.console.error(t);
	};
	t.fn.hoverdir = function (e) {
		var o = t.data(this, "hoverdir");
		if ("string" == typeof e) {
			var n = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				return o
					? t.isFunction(o[e]) && "_" !== e.charAt(0)
						? void o[e].apply(o, n)
						: void i("no such method '" + e + "' for hoverdir instance")
					: void i("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'");
			});
		} else
			this.each(function () {
				o ? o._init() : (o = t.data(this, "hoverdir", new t.HoverDir(e, this)));
			});
		return o;
	};
})(jQuery, window);

/* jquery.nicescroll 3.6.0 InuYaksa*2014 MIT http://nicescroll.areaaperta.com */ (function (f) {
	"function" === typeof define && define.amd ? define(["jquery"], f) : f(jQuery);
})(function (f) {
	var y = !1,
		D = !1,
		N = 0,
		O = 2e3,
		x = 0,
		H = ["webkit", "ms", "moz", "o"],
		s = window.requestAnimationFrame || !1,
		t = window.cancelAnimationFrame || !1;
	if (!s)
		for (var P in H) {
			var E = H[P];
			s || (s = window[E + "RequestAnimationFrame"]);
			t || (t = window[E + "CancelAnimationFrame"] || window[E + "CancelRequestAnimationFrame"]);
		}
	var v = window.MutationObserver || window.WebKitMutationObserver || !1,
		I = {
			zindex: "auto",
			cursoropacitymin: 0,
			cursoropacitymax: 1,
			cursorcolor: "#424242",
			cursorwidth: "5px",
			cursorborder: "1px solid #fff",
			cursorborderradius: "5px",
			scrollspeed: 60,
			mousescrollstep: 24,
			touchbehavior: !1,
			hwacceleration: !0,
			usetransition: !0,
			boxzoom: !1,
			dblclickzoom: !0,
			gesturezoom: !0,
			grabcursorenabled: !0,
			autohidemode: !0,
			background: "",
			iframeautoresize: !0,
			cursorminheight: 32,
			preservenativescrolling: !0,
			railoffset: !1,
			railhoffset: !1,
			bouncescroll: !0,
			spacebarenabled: !0,
			railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
			disableoutline: !0,
			horizrailenabled: !0,
			railalign: "right",
			railvalign: "bottom",
			enabletranslate3d: !0,
			enablemousewheel: !0,
			enablekeyboard: !0,
			smoothscroll: !0,
			sensitiverail: !0,
			enablemouselockapi: !0,
			cursorfixedheight: !1,
			directionlockdeadzone: 6,
			hidecursordelay: 400,
			nativeparentscrolling: !0,
			enablescrollonselection: !0,
			overflowx: !0,
			overflowy: !0,
			cursordragspeed: 0.3,
			rtlmode: "auto",
			cursordragontouch: !1,
			oneaxismousemode: "auto",
			scriptpath: (function () {
				var f = document.getElementsByTagName("script"),
					f = f[f.length - 1].src.split("?")[0];
				return 0 < f.split("/").length ? f.split("/").slice(0, -1).join("/") + "/" : "";
			})(),
			preventmultitouchscrolling: !0,
		},
		F = !1,
		Q = function () {
			if (F) return F;
			var f = document.createElement("DIV"),
				c = f.style,
				h = navigator.userAgent,
				m = navigator.platform,
				d = { haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document };
			d.isopera = "opera" in window;
			d.isopera12 = d.isopera && "getUserMedia" in navigator;
			d.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
			d.isie = "all" in document && "attachEvent" in f && !d.isopera;
			d.isieold = d.isie && !("msInterpolationMode" in c);
			d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || 7 == document.documentMode);
			d.isie8 = d.isie && "documentMode" in document && 8 == document.documentMode;
			d.isie9 = d.isie && "performance" in window && 9 <= document.documentMode;
			d.isie10 = d.isie && "performance" in window && 10 == document.documentMode;
			d.isie11 = "msRequestFullscreen" in f && 11 <= document.documentMode;
			d.isie9mobile = /iemobile.9/i.test(h);
			d.isie9mobile && (d.isie9 = !1);
			d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(h);
			d.ismozilla = "MozAppearance" in c;
			d.iswebkit = "WebkitAppearance" in c;
			d.ischrome = "chrome" in window;
			d.ischrome22 = d.ischrome && d.haspointerlock;
			d.ischrome26 = d.ischrome && "transition" in c;
			d.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
			d.hasmstouch = window.MSPointerEvent || !1;
			d.hasw3ctouch = window.PointerEvent || !1;
			d.ismac = /^mac$/i.test(m);
			d.isios = d.cantouch && /iphone|ipad|ipod/i.test(m);
			d.isios4 = d.isios && !("seal" in Object);
			d.isios7 = d.isios && "webkitHidden" in document;
			d.isandroid = /android/i.test(h);
			d.haseventlistener = "addEventListener" in f;
			d.trstyle = !1;
			d.hastransform = !1;
			d.hastranslate3d = !1;
			d.transitionstyle = !1;
			d.hastransition = !1;
			d.transitionend = !1;
			m = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
			for (h = 0; h < m.length; h++)
				if ("undefined" != typeof c[m[h]]) {
					d.trstyle = m[h];
					break;
				}
			d.hastransform = !!d.trstyle;
			d.hastransform && ((c[d.trstyle] = "translate3d(1px,2px,3px)"), (d.hastranslate3d = /translate3d/.test(c[d.trstyle])));
			d.transitionstyle = !1;
			d.prefixstyle = "";
			d.transitionend = !1;
			for (
				var m = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "),
				n = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "),
				p = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "),
				h = 0;
				h < m.length;
				h++
			)
				if (m[h] in c) {
					d.transitionstyle = m[h];
					d.prefixstyle = n[h];
					d.transitionend = p[h];
					break;
				}
			d.ischrome26 && (d.prefixstyle = n[1]);
			d.hastransition = d.transitionstyle;
			a: {
				h = ["-webkit-grab", "-moz-grab", "grab"];
				if ((d.ischrome && !d.ischrome22) || d.isie) h = [];
				for (m = 0; m < h.length; m++)
					if (((n = h[m]), (c.cursor = n), c.cursor == n)) {
						c = n;
						break a;
					}
				c = "url(//mail.google.com/mail/images/2/openhand.cur),n-resize";
			}
			d.cursorgrabvalue = c;
			d.hasmousecapture = "setCapture" in f;
			d.hasMutationObserver = !1 !== v;
			return (F = d);
		},
		R = function (k, c) {
			function h() {
				var b = a.doc.css(e.trstyle);
				return b && "matrix" == b.substr(0, 6)
					? b
						.replace(/^.*\((.*)\)$/g, "$1")
						.replace(/px/g, "")
						.split(/, +/)
					: !1;
			}
			function m() {
				var b = a.win;
				if ("zIndex" in b) return b.zIndex();
				for (; 0 < b.length && 9 != b[0].nodeType;) {
					var g = b.css("zIndex");
					if (!isNaN(g) && 0 != g) return parseInt(g);
					b = b.parent();
				}
				return !1;
			}
			function d(b, g, q) {
				g = b.css(g);
				b = parseFloat(g);
				return isNaN(b) ? ((b = w[g] || 0), (q = 3 == b ? (q ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth()) : 1), a.isie8 && b && (b += 1), q ? b : 0) : b;
			}
			function n(b, g, q, c) {
				a._bind(
					b,
					g,
					function (a) {
						a = a ? a : window.event;
						var c = {
							original: a,
							target: a.target || a.srcElement,
							type: "wheel",
							deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
							deltaX: 0,
							deltaZ: 0,
							preventDefault: function () {
								a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
								return !1;
							},
							stopImmediatePropagation: function () {
								a.stopImmediatePropagation ? a.stopImmediatePropagation() : (a.cancelBubble = !0);
							},
						};
						"mousewheel" == g ? ((c.deltaY = -0.025 * a.wheelDelta), a.wheelDeltaX && (c.deltaX = -0.025 * a.wheelDeltaX)) : (c.deltaY = a.detail);
						return q.call(b, c);
					},
					c
				);
			}
			function p(b, g, c) {
				var d, e;
				0 == b.deltaMode
					? ((d = -Math.floor((a.opt.mousescrollstep / 54) * b.deltaX)), (e = -Math.floor((a.opt.mousescrollstep / 54) * b.deltaY)))
					: 1 == b.deltaMode && ((d = -Math.floor(b.deltaX * a.opt.mousescrollstep)), (e = -Math.floor(b.deltaY * a.opt.mousescrollstep)));
				g && a.opt.oneaxismousemode && 0 == d && e && ((d = e), (e = 0), c && (0 > d ? a.getScrollLeft() >= a.page.maxw : 0 >= a.getScrollLeft()) && ((e = d), (d = 0)));
				d &&
					(a.scrollmom && a.scrollmom.stop(),
						(a.lastdeltax += d),
						a.debounced(
							"mousewheelx",
							function () {
								var b = a.lastdeltax;
								a.lastdeltax = 0;
								a.rail.drag || a.doScrollLeftBy(b);
							},
							15
						));
				if (e) {
					if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive)
						if (0 > e) {
							if (a.getScrollTop() >= a.page.maxh) return !0;
						} else if (0 >= a.getScrollTop()) return !0;
					a.scrollmom && a.scrollmom.stop();
					a.lastdeltay += e;
					a.debounced(
						"mousewheely",
						function () {
							var b = a.lastdeltay;
							a.lastdeltay = 0;
							a.rail.drag || a.doScrollBy(b);
						},
						15
					);
				}
				b.stopImmediatePropagation();
				return b.preventDefault();
			}
			var a = this;
			this.version = "3.6.0";
			this.name = "nicescroll";
			this.me = c;
			this.opt = { doc: f("body"), win: !1 };
			f.extend(this.opt, I);
			this.opt.snapbackspeed = 80;
			if (k) for (var G in a.opt) "undefined" != typeof k[G] && (a.opt[G] = k[G]);
			this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
			this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
			this.haswrapper = !1 !== a.opt.win;
			this.win = a.opt.win || (this.ispage ? f(window) : this.doc);
			this.docscroll = this.ispage && !this.haswrapper ? f(window) : this.win;
			this.body = f("body");
			this.iframe = this.isfixed = this.viewport = !1;
			this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
			this.istextarea = "TEXTAREA" == this.win[0].nodeName;
			this.forcescreen = !1;
			this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
			this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
			this.scroll = { x: 0, y: 0 };
			this.scrollratio = { x: 0, y: 0 };
			this.cursorheight = 20;
			this.scrollvaluemax = 0;
			this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : !0 === this.opt.rtlmode;
			this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
			do this.id = "ascrail" + O++;
			while (document.getElementById(this.id));
			this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
			this.visibility = !0;
			this.hidden = this.locked = this.railslocked = !1;
			this.cursoractive = !0;
			this.wheelprevented = !1;
			this.overflowx = a.opt.overflowx;
			this.overflowy = a.opt.overflowy;
			this.nativescrollingarea = !1;
			this.checkarea = 0;
			this.events = [];
			this.saved = {};
			this.delaylist = {};
			this.synclist = {};
			this.lastdeltay = this.lastdeltax = 0;
			this.detected = Q();
			var e = f.extend({}, this.detected);
			this.ishwscroll = (this.canhwscroll = e.hastransform && a.opt.hwacceleration) && a.haswrapper;
			this.hasreversehr = this.isrtlmode && !e.iswebkit;
			this.istouchcapable = !1;
			!e.cantouch || e.isios || e.isandroid || (!e.iswebkit && !e.ismozilla) || ((this.istouchcapable = !0), (e.cantouch = !1));
			a.opt.enablemouselockapi || ((e.hasmousecapture = !1), (e.haspointerlock = !1));
			this.debounced = function (b, g, c) {
				var d = a.delaylist[b];
				a.delaylist[b] = g;
				d ||
					setTimeout(function () {
						var g = a.delaylist[b];
						a.delaylist[b] = !1;
						g.call(a);
					}, c);
			};
			var r = !1;
			this.synched = function (b, g) {
				a.synclist[b] = g;
				(function () {
					r ||
						(s(function () {
							r = !1;
							for (var b in a.synclist) {
								var g = a.synclist[b];
								g && g.call(a);
								a.synclist[b] = !1;
							}
						}),
							(r = !0));
				})();
				return b;
			};
			this.unsynched = function (b) {
				a.synclist[b] && (a.synclist[b] = !1);
			};
			this.css = function (b, g) {
				for (var c in g) a.saved.css.push([b, c, b.css(c)]), b.css(c, g[c]);
			};
			this.scrollTop = function (b) {
				return "undefined" == typeof b ? a.getScrollTop() : a.setScrollTop(b);
			};
			this.scrollLeft = function (b) {
				return "undefined" == typeof b ? a.getScrollLeft() : a.setScrollLeft(b);
			};
			var A = function (a, g, c, d, e, f, h) {
				this.st = a;
				this.ed = g;
				this.spd = c;
				this.p1 = d || 0;
				this.p2 = e || 1;
				this.p3 = f || 0;
				this.p4 = h || 1;
				this.ts = new Date().getTime();
				this.df = this.ed - this.st;
			};
			A.prototype = {
				B2: function (a) {
					return 3 * a * a * (1 - a);
				},
				B3: function (a) {
					return 3 * a * (1 - a) * (1 - a);
				},
				B4: function (a) {
					return (1 - a) * (1 - a) * (1 - a);
				},
				getNow: function () {
					var a = 1 - (new Date().getTime() - this.ts) / this.spd,
						g = this.B2(a) + this.B3(a) + this.B4(a);
					return 0 > a ? this.ed : this.st + Math.round(this.df * g);
				},
				update: function (a, g) {
					this.st = this.getNow();
					this.ed = a;
					this.spd = g;
					this.ts = new Date().getTime();
					this.df = this.ed - this.st;
					return this;
				},
			};
			if (this.ishwscroll) {
				this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" };
				e.hastranslate3d && e.isios && this.doc.css("-webkit-backface-visibility", "hidden");
				this.getScrollTop = function (b) {
					if (!b) {
						if ((b = h())) return 16 == b.length ? -b[13] : -b[5];
						if (a.timerscroll && a.timerscroll.bz) return a.timerscroll.bz.getNow();
					}
					return a.doc.translate.y;
				};
				this.getScrollLeft = function (b) {
					if (!b) {
						if ((b = h())) return 16 == b.length ? -b[12] : -b[4];
						if (a.timerscroll && a.timerscroll.bh) return a.timerscroll.bh.getNow();
					}
					return a.doc.translate.x;
				};
				this.notifyScrollEvent = function (a) {
					var g = document.createEvent("UIEvents");
					g.initUIEvent("scroll", !1, !0, window, 1);
					g.niceevent = !0;
					a.dispatchEvent(g);
				};
				var K = this.isrtlmode ? 1 : -1;
				e.hastranslate3d && a.opt.enabletranslate3d
					? ((this.setScrollTop = function (b, g) {
						a.doc.translate.y = b;
						a.doc.translate.ty = -1 * b + "px";
						a.doc.css(e.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
						g || a.notifyScrollEvent(a.win[0]);
					}),
						(this.setScrollLeft = function (b, g) {
							a.doc.translate.x = b;
							a.doc.translate.tx = b * K + "px";
							a.doc.css(e.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
							g || a.notifyScrollEvent(a.win[0]);
						}))
					: ((this.setScrollTop = function (b, g) {
						a.doc.translate.y = b;
						a.doc.translate.ty = -1 * b + "px";
						a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
						g || a.notifyScrollEvent(a.win[0]);
					}),
						(this.setScrollLeft = function (b, g) {
							a.doc.translate.x = b;
							a.doc.translate.tx = b * K + "px";
							a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
							g || a.notifyScrollEvent(a.win[0]);
						}));
			} else
				(this.getScrollTop = function () {
					return a.docscroll.scrollTop();
				}),
					(this.setScrollTop = function (b) {
						return a.docscroll.scrollTop(b);
					}),
					(this.getScrollLeft = function () {
						return a.detected.ismozilla && a.isrtlmode ? Math.abs(a.docscroll.scrollLeft()) : a.docscroll.scrollLeft();
					}),
					(this.setScrollLeft = function (b) {
						return a.docscroll.scrollLeft(a.detected.ismozilla && a.isrtlmode ? -b : b);
					});
			this.getTarget = function (a) {
				return a ? (a.target ? a.target : a.srcElement ? a.srcElement : !1) : !1;
			};
			this.hasParent = function (a, g) {
				if (!a) return !1;
				for (var c = a.target || a.srcElement || a || !1; c && c.id != g;) c = c.parentNode || !1;
				return !1 !== c;
			};
			var w = { thin: 1, medium: 3, thick: 5 };
			this.getDocumentScrollOffset = function () {
				return { top: window.pageYOffset || document.documentElement.scrollTop, left: window.pageXOffset || document.documentElement.scrollLeft };
			};
			this.getOffset = function () {
				if (a.isfixed) {
					var b = a.win.offset(),
						g = a.getDocumentScrollOffset();
					b.top -= g.top;
					b.left -= g.left;
					return b;
				}
				b = a.win.offset();
				if (!a.viewport) return b;
				g = a.viewport.offset();
				return { top: b.top - g.top, left: b.left - g.left };
			};
			this.updateScrollBar = function (b) {
				if (a.ishwscroll) a.rail.css({ height: a.win.innerHeight() - (a.opt.railpadding.top + a.opt.railpadding.bottom) }), a.railh && a.railh.css({ width: a.win.innerWidth() - (a.opt.railpadding.left + a.opt.railpadding.right) });
				else {
					var g = a.getOffset(),
						c = g.top,
						e = g.left - (a.opt.railpadding.left + a.opt.railpadding.right),
						c = c + d(a.win, "border-top-width", !0),
						e = e + (a.rail.align ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width : d(a.win, "border-left-width")),
						f = a.opt.railoffset;
					f && (f.top && (c += f.top), a.rail.align && f.left && (e += f.left));
					a.railslocked || a.rail.css({ top: c, left: e, height: (b ? b.h : a.win.innerHeight()) - (a.opt.railpadding.top + a.opt.railpadding.bottom) });
					a.zoom && a.zoom.css({ top: c + 1, left: 1 == a.rail.align ? e - 20 : e + a.rail.width + 4 });
					if (a.railh && !a.railslocked) {
						c = g.top;
						e = g.left;
						if ((f = a.opt.railhoffset)) f.top && (c += f.top), f.left && (e += f.left);
						b = a.railh.align ? c + d(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : c + d(a.win, "border-top-width", !0);
						e += d(a.win, "border-left-width");
						a.railh.css({
							top: b - (a.opt.railpadding.top + a.opt.railpadding.bottom),
							left: e,
							width: a.railh.width,
						});
					}
				}
			};
			this.doRailClick = function (b, g, c) {
				var e;
				a.railslocked ||
					(a.cancelEvent(b),
						g
							? ((g = c ? a.doScrollLeft : a.doScrollTop), (e = c ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (b.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y), g(e))
							: ((g = c ? a.doScrollLeftBy : a.doScrollBy), (e = c ? a.scroll.x : a.scroll.y), (b = c ? b.pageX - a.railh.offset().left : b.pageY - a.rail.offset().top), (c = c ? a.view.w : a.view.h), g(e >= b ? c : -c)));
			};
			a.hasanimationframe = s;
			a.hascancelanimationframe = t;
			a.hasanimationframe
				? a.hascancelanimationframe ||
				(t = function () {
					a.cancelAnimationFrame = !0;
				})
				: ((s = function (a) {
					return setTimeout(a, 15 - (Math.floor(+new Date() / 1e3) % 16));
				}),
					(t = clearInterval));
			this.init = function () {
				a.saved.css = [];
				if (e.isie7mobile || e.isoperamini) return !0;
				e.hasmstouch && a.css(a.ispage ? f("html") : a.win, { "-ms-touch-action": "none" });
				a.zindex = "auto";
				a.zindex = a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : m() || "auto";
				!a.ispage && "auto" != a.zindex && a.zindex > x && (x = a.zindex);
				a.isie && 0 == a.zindex && "auto" == a.opt.zindex && (a.zindex = "auto");
				if (!a.ispage || (!e.cantouch && !e.isieold && !e.isie9mobile)) {
					var b = a.docscroll;
					a.ispage && (b = a.haswrapper ? a.win : a.doc);
					e.isie9mobile || a.css(b, { "overflow-y": "hidden" });
					a.ispage && e.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(f("html"), { "overflow-y": "hidden" }) : "HTML" == a.doc[0].nodeName && a.css(f("body"), { "overflow-y": "hidden" }));
					!e.isios || a.ispage || a.haswrapper || a.css(f("body"), { "-webkit-overflow-scrolling": "touch" });
					var g = f(document.createElement("div"));
					g.css({
						position: "relative",
						top: 0,
						float: "right",
						width: a.opt.cursorwidth,
						height: "0px",
						"background-color": a.opt.cursorcolor,
						border: a.opt.cursorborder,
						"background-clip": "padding-box",
						"-webkit-border-radius": a.opt.cursorborderradius,
						"-moz-border-radius": a.opt.cursorborderradius,
						"border-radius": a.opt.cursorborderradius,
					});
					g.hborder = parseFloat(g.outerHeight() - g.innerHeight());
					g.addClass("nicescroll-cursors");
					a.cursor = g;
					var c = f(document.createElement("div"));
					c.attr("id", a.id);
					c.addClass("nicescroll-rails nicescroll-rails-vr");
					var d,
						h,
						k = ["left", "right", "top", "bottom"],
						J;
					for (J in k) (h = k[J]), (d = a.opt.railpadding[h]) ? c.css("padding-" + h, d + "px") : (a.opt.railpadding[h] = 0);
					c.append(g);
					c.width = Math.max(parseFloat(a.opt.cursorwidth), g.outerWidth());
					c.css({ width: c.width + "px", zIndex: a.zindex, background: a.opt.background, cursor: "default" });
					c.visibility = !0;
					c.scrollable = !0;
					c.align = "left" == a.opt.railalign ? 0 : 1;
					a.rail = c;
					g = a.rail.drag = !1;
					!a.opt.boxzoom ||
						a.ispage ||
						e.isieold ||
						((g = document.createElement("div")),
							a.bind(g, "click", a.doZoom),
							a.bind(g, "mouseenter", function () {
								a.zoom.css("opacity", a.opt.cursoropacitymax);
							}),
							a.bind(g, "mouseleave", function () {
								a.zoom.css("opacity", a.opt.cursoropacitymin);
							}),
							(a.zoom = f(g)),
							a.zoom.css({ cursor: "pointer", "z-index": a.zindex, backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)", height: 18, width: 18, backgroundPosition: "0px 0px" }),
							a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom),
							e.cantouch &&
							a.opt.gesturezoom &&
							((a.ongesturezoom = function (b) {
								1.5 < b.scale && a.doZoomIn(b);
								0.8 > b.scale && a.doZoomOut(b);
								return a.cancelEvent(b);
							}),
								a.bind(a.win, "gestureend", a.ongesturezoom)));
					a.railh = !1;
					var l;
					a.opt.horizrailenabled &&
						(a.css(b, { "overflow-x": "hidden" }),
							(g = f(document.createElement("div"))),
							g.css({
								position: "absolute",
								top: 0,
								height: a.opt.cursorwidth,
								width: "0px",
								"background-color": a.opt.cursorcolor,
								border: a.opt.cursorborder,
								"background-clip": "padding-box",
								"-webkit-border-radius": a.opt.cursorborderradius,
								"-moz-border-radius": a.opt.cursorborderradius,
								"border-radius": a.opt.cursorborderradius,
							}),
							e.isieold && g.css({ overflow: "hidden" }),
							(g.wborder = parseFloat(g.outerWidth() - g.innerWidth())),
							g.addClass("nicescroll-cursors"),
							(a.cursorh = g),
							(l = f(document.createElement("div"))),
							l.attr("id", a.id + "-hr"),
							l.addClass("nicescroll-rails nicescroll-rails-hr"),
							(l.height = Math.max(parseFloat(a.opt.cursorwidth), g.outerHeight())),
							l.css({ height: l.height + "px", zIndex: a.zindex, background: a.opt.background }),
							l.append(g),
							(l.visibility = !0),
							(l.scrollable = !0),
							(l.align = "top" == a.opt.railvalign ? 0 : 1),
							(a.railh = l),
							(a.railh.drag = !1));
					a.ispage
						? (c.css({ position: "fixed", top: "0px", height: "100%" }),
							c.align ? c.css({ right: "0px" }) : c.css({ left: "0px" }),
							a.body.append(c),
							a.railh && (l.css({ position: "fixed", left: "0px", width: "100%" }), l.align ? l.css({ bottom: "0px" }) : l.css({ top: "0px" }), a.body.append(l)))
						: (a.ishwscroll
							? ("static" == a.win.css("position") && a.css(a.win, { position: "relative" }),
								(b = "HTML" == a.win[0].nodeName ? a.body : a.win),
								f(b).scrollTop(0).scrollLeft(0),
								a.zoom && (a.zoom.css({ position: "absolute", top: 1, right: 0, "margin-right": c.width + 4 }), b.append(a.zoom)),
								c.css({ position: "absolute", top: 0 }),
								c.align ? c.css({ right: 0 }) : c.css({ left: 0 }),
								b.append(c),
								l &&
								(l.css({
									position: "absolute",
									left: 0,
									bottom: 0,
								}),
									l.align ? l.css({ bottom: 0 }) : l.css({ top: 0 }),
									b.append(l)))
							: ((a.isfixed = "fixed" == a.win.css("position")),
								(b = a.isfixed ? "fixed" : "absolute"),
								a.isfixed || (a.viewport = a.getViewport(a.win[0])),
								a.viewport && ((a.body = a.viewport), 0 == /fixed|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, { position: "relative" })),
								c.css({ position: b }),
								a.zoom && a.zoom.css({ position: b }),
								a.updateScrollBar(),
								a.body.append(c),
								a.zoom && a.body.append(a.zoom),
								a.railh && (l.css({ position: b }), a.body.append(l))),
							e.isios && a.css(a.win, { "-webkit-tap-highlight-color": "rgba(0,0,0,0)", "-webkit-touch-callout": "none" }),
							e.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"),
							e.iswebkit && a.opt.disableoutline && a.win.css({ outline: "none" }));
					!1 === a.opt.autohidemode
						? ((a.autohidedom = !1), a.rail.css({ opacity: a.opt.cursoropacitymax }), a.railh && a.railh.css({ opacity: a.opt.cursoropacitymax }))
						: !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode
							? ((a.autohidedom = f().add(a.rail)),
								e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)),
								a.railh && (a.autohidedom = a.autohidedom.add(a.railh)),
								a.railh && e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh)))
							: "scroll" == a.opt.autohidemode
								? ((a.autohidedom = f().add(a.rail)), a.railh && (a.autohidedom = a.autohidedom.add(a.railh)))
								: "cursor" == a.opt.autohidemode
									? ((a.autohidedom = f().add(a.cursor)), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh)))
									: "hidden" == a.opt.autohidemode && ((a.autohidedom = !1), a.hide(), (a.railslocked = !1));
					if (e.isie9mobile)
						(a.scrollmom = new L(a)),
							(a.onmangotouch = function () {
								var b = a.getScrollTop(),
									c = a.getScrollLeft();
								if (b == a.scrollmom.lastscrolly && c == a.scrollmom.lastscrollx) return !0;
								var g = b - a.mangotouch.sy,
									e = c - a.mangotouch.sx;
								if (0 != Math.round(Math.sqrt(Math.pow(e, 2) + Math.pow(g, 2)))) {
									var d = 0 > g ? -1 : 1,
										f = 0 > e ? -1 : 1,
										q = +new Date();
									a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
									80 < q - a.mangotouch.tm || a.mangotouch.dry != d || a.mangotouch.drx != f
										? (a.scrollmom.stop(),
											a.scrollmom.reset(c, b),
											(a.mangotouch.sy = b),
											(a.mangotouch.ly = b),
											(a.mangotouch.sx = c),
											(a.mangotouch.lx = c),
											(a.mangotouch.dry = d),
											(a.mangotouch.drx = f),
											(a.mangotouch.tm = q))
										: (a.scrollmom.stop(),
											a.scrollmom.update(a.mangotouch.sx - e, a.mangotouch.sy - g),
											(a.mangotouch.tm = q),
											(g = Math.max(Math.abs(a.mangotouch.ly - b), Math.abs(a.mangotouch.lx - c))),
											(a.mangotouch.ly = b),
											(a.mangotouch.lx = c),
											2 < g &&
											(a.mangotouch.lazy = setTimeout(function () {
												a.mangotouch.lazy = !1;
												a.mangotouch.dry = 0;
												a.mangotouch.drx = 0;
												a.mangotouch.tm = 0;
												a.scrollmom.doMomentum(30);
											}, 100)));
								}
							}),
							(c = a.getScrollTop()),
							(l = a.getScrollLeft()),
							(a.mangotouch = { sy: c, ly: c, dry: 0, sx: l, lx: l, drx: 0, lazy: !1, tm: 0 }),
							a.bind(a.docscroll, "scroll", a.onmangotouch);
					else {
						if (e.cantouch || a.istouchcapable || a.opt.touchbehavior || e.hasmstouch) {
							a.scrollmom = new L(a);
							a.ontouchstart = function (b) {
								if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
								a.hasmoving = !1;
								if (!a.railslocked) {
									var c;
									if (e.hasmstouch)
										for (c = b.target ? b.target : !1; c;) {
											var g = f(c).getNiceScroll();
											if (0 < g.length && g[0].me == a.me) break;
											if (0 < g.length) return !1;
											if ("DIV" == c.nodeName && c.id == a.id) break;
											c = c.parentNode ? c.parentNode : !1;
										}
									a.cancelScroll();
									if ((c = a.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return a.stopPropagation(b);
									!("clientX" in b) && "changedTouches" in b && ((b.clientX = b.changedTouches[0].clientX), (b.clientY = b.changedTouches[0].clientY));
									a.forcescreen && ((g = b), (b = { original: b.original ? b.original : b }), (b.clientX = g.screenX), (b.clientY = g.screenY));
									a.rail.drag = { x: b.clientX, y: b.clientY, sx: a.scroll.x, sy: a.scroll.y, st: a.getScrollTop(), sl: a.getScrollLeft(), pt: 2, dl: !1 };
									if (a.ispage || !a.opt.directionlockdeadzone) a.rail.drag.dl = "f";
									else {
										var g = f(window).width(),
											d = f(window).height(),
											q = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
											h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
											d = Math.max(0, h - d),
											g = Math.max(0, q - g);
										a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? (0 < d ? "v" : !1) : a.rail.scrollable && !a.railh.scrollable ? (0 < g ? "h" : !1) : !1;
										a.rail.drag.ck || (a.rail.drag.dl = "f");
									}
									a.opt.touchbehavior && a.isiframe && e.isie && ((g = a.win.position()), (a.rail.drag.x += g.left), (a.rail.drag.y += g.top));
									a.hasmoving = !1;
									a.lastmouseup = !1;
									a.scrollmom.reset(b.clientX, b.clientY);
									if (!e.cantouch && !this.istouchcapable && !b.pointerType) {
										if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))
											return (
												!a.ispage && e.hasmousecapture && c.setCapture(),
												a.opt.touchbehavior
													? (c.onclick &&
														!c._onclick &&
														((c._onclick = c.onclick),
															(c.onclick = function (b) {
																if (a.hasmoving) return !1;
																c._onclick.call(this, b);
															})),
														a.cancelEvent(b))
													: a.stopPropagation(b)
											);
										/SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type")) && ((pc = { tg: c, click: !1 }), (a.preventclick = pc));
									}
								}
							};
							a.ontouchend = function (b) {
								if (!a.rail.drag) return !0;
								if (2 == a.rail.drag.pt) {
									if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
									a.scrollmom.doMomentum();
									a.rail.drag = !1;
									if (a.hasmoving && ((a.lastmouseup = !0), a.hideCursor(), e.hasmousecapture && document.releaseCapture(), !e.cantouch)) return a.cancelEvent(b);
								} else if (1 == a.rail.drag.pt) return a.onmouseup(b);
							};
							var n = a.opt.touchbehavior && a.isiframe && !e.hasmousecapture;
							a.ontouchmove = function (b, c) {
								if (!a.rail.drag || (b.targetTouches && a.opt.preventmultitouchscrolling && 1 < b.targetTouches.length) || (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType)) return !1;
								if (2 == a.rail.drag.pt) {
									if (e.cantouch && e.isios && "undefined" == typeof b.original) return !0;
									a.hasmoving = !0;
									a.preventclick && !a.preventclick.click && ((a.preventclick.click = a.preventclick.tg.onclick || !1), (a.preventclick.tg.onclick = a.onpreventclick));
									b = f.extend({ original: b }, b);
									"changedTouches" in b && ((b.clientX = b.changedTouches[0].clientX), (b.clientY = b.changedTouches[0].clientY));
									if (a.forcescreen) {
										var g = b;
										b = { original: b.original ? b.original : b };
										b.clientX = g.screenX;
										b.clientY = g.screenY;
									}
									var d,
										g = (d = 0);
									n && !c && ((d = a.win.position()), (g = -d.left), (d = -d.top));
									var q = b.clientY + d;
									d = q - a.rail.drag.y;
									var h = b.clientX + g,
										u = h - a.rail.drag.x,
										k = a.rail.drag.st - d;
									a.ishwscroll && a.opt.bouncescroll
										? 0 > k
											? (k = Math.round(k / 2))
											: k > a.page.maxh && (k = a.page.maxh + Math.round((k - a.page.maxh) / 2))
										: (0 > k && (q = k = 0), k > a.page.maxh && ((k = a.page.maxh), (q = 0)));
									var l;
									a.railh &&
										a.railh.scrollable &&
										((l = a.isrtlmode ? u - a.rail.drag.sl : a.rail.drag.sl - u),
											a.ishwscroll && a.opt.bouncescroll
												? 0 > l
													? (l = Math.round(l / 2))
													: l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) / 2))
												: (0 > l && (h = l = 0), l > a.page.maxw && ((l = a.page.maxw), (h = 0))));
									g = !1;
									if (a.rail.drag.dl) (g = !0), "v" == a.rail.drag.dl ? (l = a.rail.drag.sl) : "h" == a.rail.drag.dl && (k = a.rail.drag.st);
									else {
										d = Math.abs(d);
										var u = Math.abs(u),
											z = a.opt.directionlockdeadzone;
										if ("v" == a.rail.drag.ck) {
											if (d > z && u <= 0.3 * d) return (a.rail.drag = !1), !0;
											u > z && ((a.rail.drag.dl = "f"), f("body").scrollTop(f("body").scrollTop()));
										} else if ("h" == a.rail.drag.ck) {
											if (u > z && d <= 0.3 * u) return (a.rail.drag = !1), !0;
											d > z && ((a.rail.drag.dl = "f"), f("body").scrollLeft(f("body").scrollLeft()));
										}
									}
									a.synched("touchmove", function () {
										a.rail.drag &&
											2 == a.rail.drag.pt &&
											(a.prepareTransition && a.prepareTransition(0),
												a.rail.scrollable && a.setScrollTop(k),
												a.scrollmom.update(h, q),
												a.railh && a.railh.scrollable ? (a.setScrollLeft(l), a.showCursor(k, l)) : a.showCursor(k),
												e.isie10 && document.selection.clear());
									});
									e.ischrome && a.istouchcapable && (g = !1);
									if (g) return a.cancelEvent(b);
								} else if (1 == a.rail.drag.pt) return a.onmousemove(b);
							};
						}
						a.onmousedown = function (b, c) {
							if (!a.rail.drag || 1 == a.rail.drag.pt) {
								if (a.railslocked) return a.cancelEvent(b);
								a.cancelScroll();
								a.rail.drag = {
									x: b.clientX,
									y: b.clientY,
									sx: a.scroll.x,
									sy: a.scroll.y,
									pt: 1,
									hr: !!c,
								};
								var g = a.getTarget(b);
								!a.ispage && e.hasmousecapture && g.setCapture();
								a.isiframe && !e.hasmousecapture && ((a.saved.csspointerevents = a.doc.css("pointer-events")), a.css(a.doc, { "pointer-events": "none" }));
								a.hasmoving = !1;
								return a.cancelEvent(b);
							}
						};
						a.onmouseup = function (b) {
							if (a.rail.drag) {
								if (1 != a.rail.drag.pt) return !0;
								e.hasmousecapture && document.releaseCapture();
								a.isiframe && !e.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents);
								a.rail.drag = !1;
								a.hasmoving && a.triggerScrollEnd();
								return a.cancelEvent(b);
							}
						};
						a.onmousemove = function (b) {
							if (a.rail.drag && 1 == a.rail.drag.pt) {
								if (e.ischrome && 0 == b.which) return a.onmouseup(b);
								a.cursorfreezed = !0;
								a.hasmoving = !0;
								if (a.rail.drag.hr) {
									a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x);
									0 > a.scroll.x && (a.scroll.x = 0);
									var c = a.scrollvaluemaxw;
									a.scroll.x > c && (a.scroll.x = c);
								} else (a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y)), 0 > a.scroll.y && (a.scroll.y = 0), (c = a.scrollvaluemax), a.scroll.y > c && (a.scroll.y = c);
								a.synched("mousemove", function () {
									a.rail.drag &&
										1 == a.rail.drag.pt &&
										(a.showCursor(),
											a.rail.drag.hr
												? a.hasreversehr
													? a.doScrollLeft(a.scrollvaluemaxw - Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed)
													: a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed)
												: a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed));
								});
								return a.cancelEvent(b);
							}
						};
						if (e.cantouch || a.opt.touchbehavior)
							(a.onpreventclick = function (b) {
								if (a.preventclick) return (a.preventclick.tg.onclick = a.preventclick.click), (a.preventclick = !1), a.cancelEvent(b);
							}),
								a.bind(a.win, "mousedown", a.ontouchstart),
								(a.onclick = e.isios
									? !1
									: function (b) {
										return a.lastmouseup ? ((a.lastmouseup = !1), a.cancelEvent(b)) : !0;
									}),
								a.opt.grabcursorenabled && e.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, { cursor: e.cursorgrabvalue }), a.css(a.rail, { cursor: e.cursorgrabvalue }));
						else {
							var p = function (b) {
								if (a.selectiondrag) {
									if (b) {
										var c = a.win.outerHeight();
										b = b.pageY - a.selectiondrag.top;
										0 < b && b < c && (b = 0);
										b >= c && (b -= c);
										a.selectiondrag.df = b;
									}
									0 != a.selectiondrag.df &&
										(a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)),
											a.debounced(
												"doselectionscroll",
												function () {
													p();
												},
												50
											));
								}
							};
							a.hasTextSelected =
								"getSelection" in document
									? function () {
										return 0 < document.getSelection().rangeCount;
									}
									: "selection" in document
										? function () {
											return "None" != document.selection.type;
										}
										: function () {
											return !1;
										};
							a.onselectionstart = function (b) {
								a.ispage || (a.selectiondrag = a.win.offset());
							};
							a.onselectionend = function (b) {
								a.selectiondrag = !1;
							};
							a.onselectiondrag = function (b) {
								a.selectiondrag &&
									a.hasTextSelected() &&
									a.debounced(
										"selectionscroll",
										function () {
											p(b);
										},
										250
									);
							};
						}
						e.hasw3ctouch
							? (a.css(a.rail, { "touch-action": "none" }),
								a.css(a.cursor, { "touch-action": "none" }),
								a.bind(a.win, "pointerdown", a.ontouchstart),
								a.bind(document, "pointerup", a.ontouchend),
								a.bind(document, "pointermove", a.ontouchmove))
							: e.hasmstouch
								? (a.css(a.rail, { "-ms-touch-action": "none" }),
									a.css(a.cursor, { "-ms-touch-action": "none" }),
									a.bind(a.win, "MSPointerDown", a.ontouchstart),
									a.bind(document, "MSPointerUp", a.ontouchend),
									a.bind(document, "MSPointerMove", a.ontouchmove),
									a.bind(a.cursor, "MSGestureHold", function (a) {
										a.preventDefault();
									}),
									a.bind(a.cursor, "contextmenu", function (a) {
										a.preventDefault();
									}))
								: this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document, "touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove));
						if (a.opt.cursordragontouch || (!e.cantouch && !a.opt.touchbehavior))
							a.rail.css({ cursor: "default" }),
								a.railh && a.railh.css({ cursor: "default" }),
								a.jqbind(a.rail, "mouseenter", function () {
									if (!a.ispage && !a.win.is(":visible")) return !1;
									a.canshowonmouseevent && a.showCursor();
									a.rail.active = !0;
								}),
								a.jqbind(a.rail, "mouseleave", function () {
									a.rail.active = !1;
									a.rail.drag || a.hideCursor();
								}),
								a.opt.sensitiverail &&
								(a.bind(a.rail, "click", function (b) {
									a.doRailClick(b, !1, !1);
								}),
									a.bind(a.rail, "dblclick", function (b) {
										a.doRailClick(b, !0, !1);
									}),
									a.bind(a.cursor, "click", function (b) {
										a.cancelEvent(b);
									}),
									a.bind(a.cursor, "dblclick", function (b) {
										a.cancelEvent(b);
									})),
								a.railh &&
								(a.jqbind(a.railh, "mouseenter", function () {
									if (!a.ispage && !a.win.is(":visible")) return !1;
									a.canshowonmouseevent && a.showCursor();
									a.rail.active = !0;
								}),
									a.jqbind(a.railh, "mouseleave", function () {
										a.rail.active = !1;
										a.rail.drag || a.hideCursor();
									}),
									a.opt.sensitiverail &&
									(a.bind(a.railh, "click", function (b) {
										a.doRailClick(b, !1, !0);
									}),
										a.bind(a.railh, "dblclick", function (b) {
											a.doRailClick(b, !0, !0);
										}),
										a.bind(a.cursorh, "click", function (b) {
											a.cancelEvent(b);
										}),
										a.bind(a.cursorh, "dblclick", function (b) {
											a.cancelEvent(b);
										})));
						e.cantouch || a.opt.touchbehavior
							? (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.ontouchend),
								a.bind(document, "mousemove", a.ontouchmove),
								a.onclick && a.bind(document, "click", a.onclick),
								a.opt.cursordragontouch &&
								(a.bind(a.cursor, "mousedown", a.onmousedown),
									a.bind(a.cursor, "mouseup", a.onmouseup),
									a.cursorh &&
									a.bind(a.cursorh, "mousedown", function (b) {
										a.onmousedown(b, !0);
									}),
									a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup)))
							: (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.onmouseup),
								a.bind(document, "mousemove", a.onmousemove),
								a.onclick && a.bind(document, "click", a.onclick),
								a.bind(a.cursor, "mousedown", a.onmousedown),
								a.bind(a.cursor, "mouseup", a.onmouseup),
								a.railh &&
								(a.bind(a.cursorh, "mousedown", function (b) {
									a.onmousedown(b, !0);
								}),
									a.bind(a.cursorh, "mouseup", a.onmouseup)),
								!a.ispage &&
								a.opt.enablescrollonselection &&
								(a.bind(a.win[0], "mousedown", a.onselectionstart),
									a.bind(document, "mouseup", a.onselectionend),
									a.bind(a.cursor, "mouseup", a.onselectionend),
									a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend),
									a.bind(document, "mousemove", a.onselectiondrag)),
								a.zoom &&
								(a.jqbind(a.zoom, "mouseenter", function () {
									a.canshowonmouseevent && a.showCursor();
									a.rail.active = !0;
								}),
									a.jqbind(a.zoom, "mouseleave", function () {
										a.rail.active = !1;
										a.rail.drag || a.hideCursor();
									})));
						a.opt.enablemousewheel &&
							(a.isiframe || a.bind(e.isie && a.ispage ? document : a.win, "mousewheel", a.onmousewheel), a.bind(a.rail, "mousewheel", a.onmousewheel), a.railh && a.bind(a.railh, "mousewheel", a.onmousewheelhr));
						a.ispage ||
							e.cantouch ||
							/HTML|^BODY/.test(a.win[0].nodeName) ||
							(a.win.attr("tabindex") || a.win.attr({ tabindex: N++ }),
								a.jqbind(a.win, "focus", function (b) {
									y = a.getTarget(b).id || !0;
									a.hasfocus = !0;
									a.canshowonmouseevent && a.noticeCursor();
								}),
								a.jqbind(a.win, "blur", function (b) {
									y = !1;
									a.hasfocus = !1;
								}),
								a.jqbind(a.win, "mouseenter", function (b) {
									D = a.getTarget(b).id || !0;
									a.hasmousefocus = !0;
									a.canshowonmouseevent && a.noticeCursor();
								}),
								a.jqbind(a.win, "mouseleave", function () {
									D = !1;
									a.hasmousefocus = !1;
									a.rail.drag || a.hideCursor();
								}));
					}
					a.onkeypress = function (b) {
						if (a.railslocked && 0 == a.page.maxh) return !0;
						b = b ? b : window.e;
						var c = a.getTarget(b);
						if ((c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && ((!c.getAttribute("type") && !c.type) || !/submit|button|cancel/i.tp)) || f(c).attr("contenteditable")) return !0;
						if (a.hasfocus || (a.hasmousefocus && !y) || (a.ispage && !y && !D)) {
							c = b.keyCode;
							if (a.railslocked && 27 != c) return a.cancelEvent(b);
							var g = b.ctrlKey || !1,
								d = b.shiftKey || !1,
								e = !1;
							switch (c) {
								case 38:
								case 63233:
									a.doScrollBy(72);
									e = !0;
									break;
								case 40:
								case 63235:
									a.doScrollBy(-72);
									e = !0;
									break;
								case 37:
								case 63232:
									a.railh && (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72), (e = !0));
									break;
								case 39:
								case 63234:
									a.railh && (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), (e = !0));
									break;
								case 33:
								case 63276:
									a.doScrollBy(a.view.h);
									e = !0;
									break;
								case 34:
								case 63277:
									a.doScrollBy(-a.view.h);
									e = !0;
									break;
								case 36:
								case 63273:
									a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0);
									e = !0;
									break;
								case 35:
								case 63275:
									a.railh && g ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
									e = !0;
									break;
								case 32:
									a.opt.spacebarenabled && (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), (e = !0));
									break;
								case 27:
									a.zoomactive && (a.doZoom(), (e = !0));
							}
							if (e) return a.cancelEvent(b);
						}
					};
					a.opt.enablekeyboard && a.bind(document, e.isopera && !e.isopera12 ? "keypress" : "keydown", a.onkeypress);
					a.bind(document, "keydown", function (b) {
						b.ctrlKey && (a.wheelprevented = !0);
					});
					a.bind(document, "keyup", function (b) {
						b.ctrlKey || (a.wheelprevented = !1);
					});
					a.bind(window, "blur", function (b) {
						a.wheelprevented = !1;
					});
					a.bind(window, "resize", a.lazyResize);
					a.bind(window, "orientationchange", a.lazyResize);
					a.bind(window, "load", a.lazyResize);
					if (e.ischrome && !a.ispage && !a.haswrapper) {
						var r = a.win.attr("style"),
							c = parseFloat(a.win.css("width")) + 1;
						a.win.css("width", c);
						a.synched("chromefix", function () {
							a.win.attr("style", r);
						});
					}
					a.onAttributeChange = function (b) {
						a.lazyResize(a.isieold ? 250 : 30);
					};
					!1 !== v &&
						((a.observerbody = new v(function (b) {
							b.forEach(function (b) {
								if ("attributes" == b.type) return f("body").hasClass("modal-open") ? a.hide() : a.show();
							});
							if (document.body.scrollHeight != a.page.maxh) return a.lazyResize(30);
						})),
							a.observerbody.observe(document.body, { childList: !0, subtree: !0, characterData: !1, attributes: !0, attributeFilter: ["class"] }));
					a.ispage ||
						a.haswrapper ||
						(!1 !== v
							? ((a.observer = new v(function (b) {
								b.forEach(a.onAttributeChange);
							})),
								a.observer.observe(a.win[0], {
									childList: !0,
									characterData: !1,
									attributes: !0,
									subtree: !1,
								}),
								(a.observerremover = new v(function (b) {
									b.forEach(function (b) {
										if (0 < b.removedNodes.length) for (var c in b.removedNodes) if (a && b.removedNodes[c] == a.win[0]) return a.remove();
									});
								})),
								a.observerremover.observe(a.win[0].parentNode, { childList: !0, characterData: !1, attributes: !1, subtree: !1 }))
							: (a.bind(a.win, e.isie && !e.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange),
								e.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange),
								a.bind(a.win, "DOMNodeRemoved", function (b) {
									b.target == a.win[0] && a.remove();
								})));
					!a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
					a.istextarea && a.bind(a.win, "mouseup", a.lazyResize);
					a.lazyResize(30);
				}
				if ("IFRAME" == this.doc[0].nodeName) {
					var M = function () {
						a.iframexd = !1;
						var b;
						try {
							b = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
						} catch (c) {
							(a.iframexd = !0), (b = !1);
						}
						if (a.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
						a.forcescreen = !0;
						a.isiframe &&
							((a.iframe = {
								doc: f(b),
								html: a.doc.contents().find("html")[0],
								body: a.doc.contents().find("body")[0],
							}),
								(a.getContentSize = function () {
									return { w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth), h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight) };
								}),
								(a.docscroll = f(a.iframe.body)));
						if (!e.isios && a.opt.iframeautoresize && !a.isiframe) {
							a.win.scrollTop(0);
							a.doc.height("");
							var g = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight);
							a.doc.height(g);
						}
						a.lazyResize(30);
						e.isie7 && a.css(f(a.iframe.html), { "overflow-y": "hidden" });
						a.css(f(a.iframe.body), { "overflow-y": "hidden" });
						e.isios && a.haswrapper && a.css(f(b.body), { "-webkit-transform": "translate3d(0,0,0)" });
						"contentWindow" in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(b, "scroll", a.onscroll);
						a.opt.enablemousewheel && a.bind(b, "mousewheel", a.onmousewheel);
						a.opt.enablekeyboard && a.bind(b, e.isopera ? "keypress" : "keydown", a.onkeypress);
						if (e.cantouch || a.opt.touchbehavior)
							a.bind(b, "mousedown", a.ontouchstart),
								a.bind(b, "mousemove", function (b) {
									return a.ontouchmove(b, !0);
								}),
								a.opt.grabcursorenabled && e.cursorgrabvalue && a.css(f(b.body), { cursor: e.cursorgrabvalue });
						a.bind(b, "mouseup", a.ontouchend);
						a.zoom && (a.opt.dblclickzoom && a.bind(b, "dblclick", a.doZoom), a.ongesturezoom && a.bind(b, "gestureend", a.ongesturezoom));
					};
					this.doc[0].readyState &&
						"complete" == this.doc[0].readyState &&
						setTimeout(function () {
							M.call(a.doc[0], !1);
						}, 500);
					a.bind(this.doc, "load", M);
				}
			};
			this.showCursor = function (b, c) {
				a.cursortimeout && (clearTimeout(a.cursortimeout), (a.cursortimeout = 0));
				if (a.rail) {
					a.autohidedom && (a.autohidedom.stop().css({ opacity: a.opt.cursoropacitymax }), (a.cursoractive = !0));
					(a.rail.drag && 1 == a.rail.drag.pt) || ("undefined" != typeof b && !1 !== b && (a.scroll.y = Math.round((1 * b) / a.scrollratio.y)), "undefined" != typeof c && (a.scroll.x = Math.round((1 * c) / a.scrollratio.x)));
					a.cursor.css({ height: a.cursorheight, top: a.scroll.y });
					if (a.cursorh) {
						var d = a.hasreversehr ? a.scrollvaluemaxw - a.scroll.x : a.scroll.x;
						!a.rail.align && a.rail.visibility ? a.cursorh.css({ width: a.cursorwidth, left: d + a.rail.width }) : a.cursorh.css({ width: a.cursorwidth, left: d });
						a.cursoractive = !0;
					}
					a.zoom && a.zoom.stop().css({ opacity: a.opt.cursoropacitymax });
				}
			};
			this.hideCursor = function (b) {
				a.cursortimeout ||
					!a.rail ||
					!a.autohidedom ||
					(a.hasmousefocus && "leave" == a.opt.autohidemode) ||
					(a.cursortimeout = setTimeout(function () {
						(a.rail.active && a.showonmouseevent) || (a.autohidedom.stop().animate({ opacity: a.opt.cursoropacitymin }), a.zoom && a.zoom.stop().animate({ opacity: a.opt.cursoropacitymin }), (a.cursoractive = !1));
						a.cursortimeout = 0;
					}, b || a.opt.hidecursordelay));
			};
			this.noticeCursor = function (b, c, d) {
				a.showCursor(c, d);
				a.rail.active || a.hideCursor(b);
			};
			this.getContentSize = a.ispage
				? function () {
					return {
						w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
						h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
					};
				}
				: a.haswrapper
					? function () {
						return { w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")), h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom")) };
					}
					: function () {
						return { w: a.docscroll[0].scrollWidth, h: a.docscroll[0].scrollHeight };
					};
			this.onResize = function (b, c) {
				if (!a || !a.win) return !1;
				if (!a.haswrapper && !a.ispage) {
					if ("none" == a.win.css("display")) return a.visibility && a.hideRail().hideRailHr(), !1;
					a.hidden || a.visibility || a.showRail().showRailHr();
				}
				var d = a.page.maxh,
					e = a.page.maxw,
					f = a.view.h,
					h = a.view.w;
				a.view = { w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth), h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight) };
				a.page = c ? c : a.getContentSize();
				a.page.maxh = Math.max(0, a.page.h - a.view.h);
				a.page.maxw = Math.max(0, a.page.w - a.view.w);
				if (a.page.maxh == d && a.page.maxw == e && a.view.w == h && a.view.h == f) {
					if (a.ispage) return a;
					d = a.win.offset();
					if (a.lastposition && ((e = a.lastposition), e.top == d.top && e.left == d.left)) return a;
					a.lastposition = d;
				}
				0 == a.page.maxh
					? (a.hideRail(), (a.scrollvaluemax = 0), (a.scroll.y = 0), (a.scrollratio.y = 0), (a.cursorheight = 0), a.setScrollTop(0), (a.rail.scrollable = !1))
					: ((a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom), (a.rail.scrollable = !0));
				0 == a.page.maxw
					? (a.hideRailHr(), (a.scrollvaluemaxw = 0), (a.scroll.x = 0), (a.scrollratio.x = 0), (a.cursorwidth = 0), a.setScrollLeft(0), (a.railh.scrollable = !1))
					: ((a.page.maxw -= a.opt.railpadding.left + a.opt.railpadding.right), (a.railh.scrollable = !0));
				a.railslocked = a.locked || (0 == a.page.maxh && 0 == a.page.maxw);
				if (a.railslocked) return a.ispage || a.updateScrollBar(a.view), !1;
				a.hidden || a.visibility ? a.hidden || a.railh.visibility || a.showRailHr() : a.showRail().showRailHr();
				a.istextarea && a.win.css("resize") && "none" != a.win.css("resize") && (a.view.h -= 20);
				a.cursorheight = Math.min(a.view.h, Math.round((a.view.h / a.page.h) * a.view.h));
				a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
				a.cursorwidth = Math.min(a.view.w, Math.round((a.view.w / a.page.w) * a.view.w));
				a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
				a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder - (a.opt.railpadding.top + a.opt.railpadding.bottom);
				a.railh && ((a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w), (a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder - (a.opt.railpadding.left + a.opt.railpadding.right)));
				a.ispage || a.updateScrollBar(a.view);
				a.scrollratio = { x: a.page.maxw / a.scrollvaluemaxw, y: a.page.maxh / a.scrollvaluemax };
				a.getScrollTop() > a.page.maxh
					? a.doScrollTop(a.page.maxh)
					: ((a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y))), (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x))), a.cursoractive && a.noticeCursor());
				a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
				return a;
			};
			this.resize = a.onResize;
			this.lazyResize = function (b) {
				b = isNaN(b) ? 30 : b;
				a.debounced("resize", a.resize, b);
				return a;
			};
			this.jqbind = function (b, c, d) {
				a.events.push({ e: b, n: c, f: d, q: !0 });
				f(b).bind(c, d);
			};
			this.bind = function (b, c, d, f) {
				var h = "jquery" in b ? b[0] : b;
				"mousewheel" == c
					? window.addEventListener || "onwheel" in document
						? a._bind(h, "wheel", d, f || !1)
						: ((b = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll"), n(h, b, d, f || !1), "DOMMouseScroll" == b && n(h, "MozMousePixelScroll", d, f || !1))
					: h.addEventListener
						? (e.cantouch &&
							/mouseup|mousedown|mousemove/.test(c) &&
							a._bind(
								h,
								"mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove",
								function (a) {
									if (a.touches) {
										if (2 > a.touches.length) {
											var b = a.touches.length ? a.touches[0] : a;
											b.original = a;
											d.call(this, b);
										}
									} else a.changedTouches && ((b = a.changedTouches[0]), (b.original = a), d.call(this, b));
								},
								f || !1
							),
							a._bind(h, c, d, f || !1),
							e.cantouch && "mouseup" == c && a._bind(h, "touchcancel", d, f || !1))
						: a._bind(h, c, function (b) {
							(b = b || window.event || !1) && b.srcElement && (b.target = b.srcElement);
							"pageY" in b || ((b.pageX = b.clientX + document.documentElement.scrollLeft), (b.pageY = b.clientY + document.documentElement.scrollTop));
							return !1 === d.call(h, b) || !1 === f ? a.cancelEvent(b) : !0;
						});
			};
			e.haseventlistener
				? ((this._bind = function (b, c, d, e) {
					a.events.push({ e: b, n: c, f: d, b: e, q: !1 });
					b.addEventListener(c, d, e || !1);
				}),
					(this.cancelEvent = function (a) {
						if (!a) return !1;
						a = a.original ? a.original : a;
						a.preventDefault();
						a.stopPropagation();
						a.preventManipulation && a.preventManipulation();
						return !1;
					}),
					(this.stopPropagation = function (a) {
						if (!a) return !1;
						a = a.original ? a.original : a;
						a.stopPropagation();
						return !1;
					}),
					(this._unbind = function (a, c, d, e) {
						a.removeEventListener(c, d, e);
					}))
				: ((this._bind = function (b, c, d, e) {
					a.events.push({
						e: b,
						n: c,
						f: d,
						b: e,
						q: !1,
					});
					b.attachEvent ? b.attachEvent("on" + c, d) : (b["on" + c] = d);
				}),
					(this.cancelEvent = function (a) {
						a = window.event || !1;
						if (!a) return !1;
						a.cancelBubble = !0;
						a.cancel = !0;
						return (a.returnValue = !1);
					}),
					(this.stopPropagation = function (a) {
						a = window.event || !1;
						if (!a) return !1;
						a.cancelBubble = !0;
						return !1;
					}),
					(this._unbind = function (a, c, d, e) {
						a.detachEvent ? a.detachEvent("on" + c, d) : (a["on" + c] = !1);
					}));
			this.unbindAll = function () {
				for (var b = 0; b < a.events.length; b++) {
					var c = a.events[b];
					c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e, c.n, c.f, c.b);
				}
			};
			this.showRail = function () {
				0 == a.page.maxh || (!a.ispage && "none" == a.win.css("display")) || ((a.visibility = !0), (a.rail.visibility = !0), a.rail.css("display", "block"));
				return a;
			};
			this.showRailHr = function () {
				if (!a.railh) return a;
				0 == a.page.maxw || (!a.ispage && "none" == a.win.css("display")) || ((a.railh.visibility = !0), a.railh.css("display", "block"));
				return a;
			};
			this.hideRail = function () {
				a.visibility = !1;
				a.rail.visibility = !1;
				a.rail.css("display", "none");
				return a;
			};
			this.hideRailHr = function () {
				if (!a.railh) return a;
				a.railh.visibility = !1;
				a.railh.css("display", "none");
				return a;
			};
			this.show = function () {
				a.hidden = !1;
				a.railslocked = !1;
				return a.showRail().showRailHr();
			};
			this.hide = function () {
				a.hidden = !0;
				a.railslocked = !0;
				return a.hideRail().hideRailHr();
			};
			this.toggle = function () {
				return a.hidden ? a.show() : a.hide();
			};
			this.remove = function () {
				a.stop();
				a.cursortimeout && clearTimeout(a.cursortimeout);
				a.doZoomOut();
				a.unbindAll();
				e.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
				!1 !== a.observer && a.observer.disconnect();
				!1 !== a.observerremover && a.observerremover.disconnect();
				!1 !== a.observerbody && a.observerbody.disconnect();
				a.events = null;
				a.cursor && a.cursor.remove();
				a.cursorh && a.cursorh.remove();
				a.rail && a.rail.remove();
				a.railh && a.railh.remove();
				a.zoom && a.zoom.remove();
				for (var b = 0; b < a.saved.css.length; b++) {
					var c = a.saved.css[b];
					c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2]);
				}
				a.saved = !1;
				a.me.data("__nicescroll", "");
				var d = f.nicescroll;
				d.each(function (b) {
					if (this && this.id === a.id) {
						delete d[b];
						for (var c = ++b; c < d.length; c++, b++) d[b] = d[c];
						d.length--;
						d.length && delete d[d.length];
					}
				});
				for (var h in a) (a[h] = null), delete a[h];
				a = null;
			};
			this.scrollstart = function (b) {
				this.onscrollstart = b;
				return a;
			};
			this.scrollend = function (b) {
				this.onscrollend = b;
				return a;
			};
			this.scrollcancel = function (b) {
				this.onscrollcancel = b;
				return a;
			};
			this.zoomin = function (b) {
				this.onzoomin = b;
				return a;
			};
			this.zoomout = function (b) {
				this.onzoomout = b;
				return a;
			};
			this.isScrollable = function (a) {
				a = a.target ? a.target : a;
				if ("OPTION" == a.nodeName) return !0;
				for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
					var c = f(a),
						c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
					if (/scroll|auto/.test(c)) return a.clientHeight != a.scrollHeight;
					a = a.parentNode ? a.parentNode : !1;
				}
				return !1;
			};
			this.getViewport = function (a) {
				for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
					var c = f(a);
					if (/fixed|absolute/.test(c.css("position"))) return c;
					var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
					if ((/scroll|auto/.test(d) && a.clientHeight != a.scrollHeight) || 0 < c.getNiceScroll().length) return c;
					a = a.parentNode ? a.parentNode : !1;
				}
				return !1;
			};
			this.triggerScrollEnd = function () {
				if (a.onscrollend) {
					var b = a.getScrollLeft(),
						c = a.getScrollTop();
					a.onscrollend.call(a, { type: "scrollend", current: { x: b, y: c }, end: { x: b, y: c } });
				}
			};
			this.onmousewheel = function (b) {
				if (!a.wheelprevented) {
					if (a.railslocked) return a.debounced("checkunlock", a.resize, 250), !0;
					if (a.rail.drag) return a.cancelEvent(b);
					"auto" == a.opt.oneaxismousemode && 0 != b.deltaX && (a.opt.oneaxismousemode = !1);
					if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable) return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) : !0;
					var c = +new Date(),
						d = !1;
					a.opt.preservenativescrolling && a.checkarea + 600 < c && ((a.nativescrollingarea = a.isScrollable(b)), (d = !0));
					a.checkarea = c;
					if (a.nativescrollingarea) return !0;
					if ((b = p(b, !1, d))) a.checkarea = 0;
					return b;
				}
			};
			this.onmousewheelhr = function (b) {
				if (!a.wheelprevented) {
					if (a.railslocked || !a.railh.scrollable) return !0;
					if (a.rail.drag) return a.cancelEvent(b);
					var c = +new Date(),
						d = !1;
					a.opt.preservenativescrolling && a.checkarea + 600 < c && ((a.nativescrollingarea = a.isScrollable(b)), (d = !0));
					a.checkarea = c;
					return a.nativescrollingarea ? !0 : a.railslocked ? a.cancelEvent(b) : p(b, !0, d);
				}
			};
			this.stop = function () {
				a.cancelScroll();
				a.scrollmon && a.scrollmon.stop();
				a.cursorfreezed = !1;
				a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
				a.noticeCursor();
				return a;
			};
			this.getTransitionSpeed = function (b) {
				var c = Math.round(10 * a.opt.scrollspeed);
				b = Math.min(c, Math.round((b / 20) * a.opt.scrollspeed));
				return 20 < b ? b : 0;
			};
			a.opt.smoothscroll
				? a.ishwscroll && e.hastransition && a.opt.usetransition && a.opt.smoothscroll
					? ((this.prepareTransition = function (b, c) {
						var d = c ? (20 < b ? b : 0) : a.getTransitionSpeed(b),
							f = d ? e.prefixstyle + "transform " + d + "ms ease-out" : "";
						(a.lasttransitionstyle && a.lasttransitionstyle == f) || ((a.lasttransitionstyle = f), a.doc.css(e.transitionstyle, f));
						return d;
					}),
						(this.doScrollLeft = function (b, c) {
							var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
							a.doScrollPos(b, d, c);
						}),
						(this.doScrollTop = function (b, c) {
							var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
							a.doScrollPos(d, b, c);
						}),
						(this.doScrollPos = function (b, c, d) {
							var f = a.getScrollTop(),
								h = a.getScrollLeft();
							(0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
							0 == a.opt.bouncescroll && (0 > c ? (c = 0) : c > a.page.maxh && (c = a.page.maxh), 0 > b ? (b = 0) : b > a.page.maxw && (b = a.page.maxw));
							if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly) return !1;
							a.newscrolly = c;
							a.newscrollx = b;
							a.newscrollspeed = d || !1;
							if (a.timer) return !1;
							a.timer = setTimeout(function () {
								var d = a.getScrollTop(),
									f = a.getScrollLeft(),
									h,
									k;
								h = b - f;
								k = c - d;
								h = Math.round(Math.sqrt(Math.pow(h, 2) + Math.pow(k, 2)));
								h = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(h);
								a.newscrollspeed && 1 >= a.newscrollspeed && (h *= a.newscrollspeed);
								a.prepareTransition(h, !0);
								a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
								0 < h &&
									(!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, { type: "scrollstart", current: { x: f, y: d }, request: { x: b, y: c }, end: { x: a.newscrollx, y: a.newscrolly }, speed: h }),
										e.transitionend
											? a.scrollendtrapped || ((a.scrollendtrapped = !0), a.bind(a.doc, e.transitionend, a.onScrollTransitionEnd, !1))
											: (a.scrollendtrapped && clearTimeout(a.scrollendtrapped), (a.scrollendtrapped = setTimeout(a.onScrollTransitionEnd, h))),
										(a.timerscroll = { bz: new A(d, a.newscrolly, h, 0, 0, 0.58, 1), bh: new A(f, a.newscrollx, h, 0, 0, 0.58, 1) }),
										a.cursorfreezed ||
										(a.timerscroll.tm = setInterval(function () {
											a.showCursor(a.getScrollTop(), a.getScrollLeft());
										}, 60)));
								a.synched("doScroll-set", function () {
									a.timer = 0;
									a.scrollendtrapped && (a.scrollrunning = !0);
									a.setScrollTop(a.newscrolly);
									a.setScrollLeft(a.newscrollx);
									if (!a.scrollendtrapped) a.onScrollTransitionEnd();
								});
							}, 50);
						}),
						(this.cancelScroll = function () {
							if (!a.scrollendtrapped) return !0;
							var b = a.getScrollTop(),
								c = a.getScrollLeft();
							a.scrollrunning = !1;
							e.transitionend || clearTimeout(e.transitionend);
							a.scrollendtrapped = !1;
							a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
							a.prepareTransition(0);
							a.setScrollTop(b);
							a.railh && a.setScrollLeft(c);
							a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
							a.timerscroll = !1;
							a.cursorfreezed = !1;
							a.showCursor(b, c);
							return a;
						}),
						(this.onScrollTransitionEnd = function () {
							a.scrollendtrapped && a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
							a.scrollendtrapped = !1;
							a.prepareTransition(0);
							a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
							a.timerscroll = !1;
							var b = a.getScrollTop(),
								c = a.getScrollLeft();
							a.setScrollTop(b);
							a.railh && a.setScrollLeft(c);
							a.noticeCursor(!1, b, c);
							a.cursorfreezed = !1;
							0 > b ? (b = 0) : b > a.page.maxh && (b = a.page.maxh);
							0 > c ? (c = 0) : c > a.page.maxw && (c = a.page.maxw);
							if (b != a.newscrolly || c != a.newscrollx) return a.doScrollPos(c, b, a.opt.snapbackspeed);
							a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
							a.scrollrunning = !1;
						}))
					: ((this.doScrollLeft = function (b, c) {
						var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
						a.doScrollPos(b, d, c);
					}),
						(this.doScrollTop = function (b, c) {
							var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
							a.doScrollPos(d, b, c);
						}),
						(this.doScrollPos = function (b, c, d) {
							function e() {
								if (a.cancelAnimationFrame) return !0;
								a.scrollrunning = !0;
								if ((n = 1 - n)) return (a.timer = s(e) || 1);
								var b = 0,
									c,
									d,
									g = (d = a.getScrollTop());
								if (a.dst.ay) {
									g = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly;
									c = g - d;
									if ((0 > c && g < a.newscrolly) || (0 < c && g > a.newscrolly)) g = a.newscrolly;
									a.setScrollTop(g);
									g == a.newscrolly && (b = 1);
								} else b = 1;
								d = c = a.getScrollLeft();
								if (a.dst.ax) {
									d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
									c = d - c;
									if ((0 > c && d < a.newscrollx) || (0 < c && d > a.newscrollx)) d = a.newscrollx;
									a.setScrollLeft(d);
									d == a.newscrollx && (b += 1);
								} else b += 1;
								2 == b
									? ((a.timer = 0),
										(a.cursorfreezed = !1),
										(a.bzscroll = !1),
										(a.scrollrunning = !1),
										0 > g ? (g = 0) : g > a.page.maxh && (g = a.page.maxh),
										0 > d ? (d = 0) : d > a.page.maxw && (d = a.page.maxw),
										d != a.newscrollx || g != a.newscrolly ? a.doScrollPos(d, g) : a.onscrollend && a.triggerScrollEnd())
									: (a.timer = s(e) || 1);
							}
							c = "undefined" == typeof c || !1 === c ? a.getScrollTop(!0) : c;
							if (a.timer && a.newscrolly == c && a.newscrollx == b) return !0;
							a.timer && t(a.timer);
							a.timer = 0;
							var f = a.getScrollTop(),
								h = a.getScrollLeft();
							(0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
							a.newscrolly = c;
							a.newscrollx = b;
							(a.bouncescroll && a.rail.visibility) || (0 > a.newscrolly ? (a.newscrolly = 0) : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh));
							(a.bouncescroll && a.railh.visibility) || (0 > a.newscrollx ? (a.newscrollx = 0) : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw));
							a.dst = {};
							a.dst.x = b - h;
							a.dst.y = c - f;
							a.dst.px = h;
							a.dst.py = f;
							var k = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
							a.dst.ax = a.dst.x / k;
							a.dst.ay = a.dst.y / k;
							var l = 0,
								m = k;
							0 == a.dst.x ? ((l = f), (m = c), (a.dst.ay = 1), (a.dst.py = 0)) : 0 == a.dst.y && ((l = h), (m = b), (a.dst.ax = 1), (a.dst.px = 0));
							k = a.getTransitionSpeed(k);
							d && 1 >= d && (k *= d);
							a.bzscroll = 0 < k ? (a.bzscroll ? a.bzscroll.update(m, k) : new A(l, m, k, 0, 1, 0, 1)) : !1;
							if (!a.timer) {
								((f == a.page.maxh && c >= a.page.maxh) || (h == a.page.maxw && b >= a.page.maxw)) && a.checkContentSize();
								var n = 1;
								a.cancelAnimationFrame = !1;
								a.timer = 1;
								a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, { type: "scrollstart", current: { x: h, y: f }, request: { x: b, y: c }, end: { x: a.newscrollx, y: a.newscrolly }, speed: k });
								e();
								((f == a.page.maxh && c >= f) || (h == a.page.maxw && b >= h)) && a.checkContentSize();
								a.noticeCursor();
							}
						}),
						(this.cancelScroll = function () {
							a.timer && t(a.timer);
							a.timer = 0;
							a.bzscroll = !1;
							a.scrollrunning = !1;
							return a;
						}))
				: ((this.doScrollLeft = function (b, c) {
					var d = a.getScrollTop();
					a.doScrollPos(b, d, c);
				}),
					(this.doScrollTop = function (b, c) {
						var d = a.getScrollLeft();
						a.doScrollPos(d, b, c);
					}),
					(this.doScrollPos = function (b, c, d) {
						var e = b > a.page.maxw ? a.page.maxw : b;
						0 > e && (e = 0);
						var f = c > a.page.maxh ? a.page.maxh : c;
						0 > f && (f = 0);
						a.synched("scroll", function () {
							a.setScrollTop(f);
							a.setScrollLeft(e);
						});
					}),
					(this.cancelScroll = function () { }));
			this.doScrollBy = function (b, c) {
				var d = 0,
					d = c ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
				if (a.bouncescroll) {
					var e = Math.round(a.view.h / 2);
					d < -e ? (d = -e) : d > a.page.maxh + e && (d = a.page.maxh + e);
				}
				a.cursorfreezed = !1;
				e = a.getScrollTop(!0);
				if (0 > d && 0 >= e) return a.noticeCursor();
				if (d > a.page.maxh && e >= a.page.maxh) return a.checkContentSize(), a.noticeCursor();
				a.doScrollTop(d);
			};
			this.doScrollLeftBy = function (b, c) {
				var d = 0,
					d = c ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
				if (a.bouncescroll) {
					var e = Math.round(a.view.w / 2);
					d < -e ? (d = -e) : d > a.page.maxw + e && (d = a.page.maxw + e);
				}
				a.cursorfreezed = !1;
				e = a.getScrollLeft(!0);
				if ((0 > d && 0 >= e) || (d > a.page.maxw && e >= a.page.maxw)) return a.noticeCursor();
				a.doScrollLeft(d);
			};
			this.doScrollTo = function (b, c) {
				c && Math.round(b * a.scrollratio.y);
				a.cursorfreezed = !1;
				a.doScrollTop(b);
			};
			this.checkContentSize = function () {
				var b = a.getContentSize();
				(b.h == a.page.h && b.w == a.page.w) || a.resize(!1, b);
			};
			a.onscroll = function (b) {
				a.rail.drag ||
					a.cursorfreezed ||
					a.synched("scroll", function () {
						a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
						a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
						a.noticeCursor();
					});
			};
			a.bind(a.docscroll, "scroll", a.onscroll);
			this.doZoomIn = function (b) {
				if (!a.zoomactive) {
					a.zoomactive = !0;
					a.zoomrestore = { style: {} };
					var c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
						d = a.win[0].style,
						h;
					for (h in c) {
						var k = c[h];
						a.zoomrestore.style[k] = "undefined" != typeof d[k] ? d[k] : "";
					}
					a.zoomrestore.style.width = a.win.css("width");
					a.zoomrestore.style.height = a.win.css("height");
					a.zoomrestore.padding = { w: a.win.outerWidth() - a.win.width(), h: a.win.outerHeight() - a.win.height() };
					e.isios4 && ((a.zoomrestore.scrollTop = f(window).scrollTop()), f(window).scrollTop(0));
					a.win.css({ position: e.isios4 ? "absolute" : "fixed", top: 0, left: 0, "z-index": x + 100, margin: "0px" });
					c = a.win.css("backgroundColor");
					("" == c || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) && a.win.css("backgroundColor", "#fff");
					a.rail.css({ "z-index": x + 101 });
					a.zoom.css({ "z-index": x + 102 });
					a.zoom.css("backgroundPosition", "0px -18px");
					a.resizeZoom();
					a.onzoomin && a.onzoomin.call(a);
					return a.cancelEvent(b);
				}
			};
			this.doZoomOut = function (b) {
				if (a.zoomactive)
					return (
						(a.zoomactive = !1),
						a.win.css("margin", ""),
						a.win.css(a.zoomrestore.style),
						e.isios4 && f(window).scrollTop(a.zoomrestore.scrollTop),
						a.rail.css({ "z-index": a.zindex }),
						a.zoom.css({ "z-index": a.zindex }),
						(a.zoomrestore = !1),
						a.zoom.css("backgroundPosition", "0px 0px"),
						a.onResize(),
						a.onzoomout && a.onzoomout.call(a),
						a.cancelEvent(b)
					);
			};
			this.doZoom = function (b) {
				return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b);
			};
			this.resizeZoom = function () {
				if (a.zoomactive) {
					var b = a.getScrollTop();
					a.win.css({ width: f(window).width() - a.zoomrestore.padding.w + "px", height: f(window).height() - a.zoomrestore.padding.h + "px" });
					a.onResize();
					a.setScrollTop(Math.min(a.page.maxh, b));
				}
			};
			this.init();
			f.nicescroll.push(this);
		},
		L = function (f) {
			var c = this;
			this.nc = f;
			this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
			this.snapy = this.snapx = !1;
			this.demuly = this.demulx = 0;
			this.lastscrolly = this.lastscrollx = -1;
			this.timer = this.chky = this.chkx = 0;
			this.time = function () {
				return +new Date();
			};
			this.reset = function (f, k) {
				c.stop();
				var d = c.time();
				c.steptime = 0;
				c.lasttime = d;
				c.speedx = 0;
				c.speedy = 0;
				c.lastx = f;
				c.lasty = k;
				c.lastscrollx = -1;
				c.lastscrolly = -1;
			};
			this.update = function (f, k) {
				var d = c.time();
				c.steptime = d - c.lasttime;
				c.lasttime = d;
				var d = k - c.lasty,
					n = f - c.lastx,
					p = c.nc.getScrollTop(),
					a = c.nc.getScrollLeft(),
					p = p + d,
					a = a + n;
				c.snapx = 0 > a || a > c.nc.page.maxw;
				c.snapy = 0 > p || p > c.nc.page.maxh;
				c.speedx = n;
				c.speedy = d;
				c.lastx = f;
				c.lasty = k;
			};
			this.stop = function () {
				c.nc.unsynched("domomentum2d");
				c.timer && clearTimeout(c.timer);
				c.timer = 0;
				c.lastscrollx = -1;
				c.lastscrolly = -1;
			};
			this.doSnapy = function (f, k) {
				var d = !1;
				0 > k ? ((k = 0), (d = !0)) : k > c.nc.page.maxh && ((k = c.nc.page.maxh), (d = !0));
				0 > f ? ((f = 0), (d = !0)) : f > c.nc.page.maxw && ((f = c.nc.page.maxw), (d = !0));
				d ? c.nc.doScrollPos(f, k, c.nc.opt.snapbackspeed) : c.nc.triggerScrollEnd();
			};
			this.doMomentum = function (f) {
				var k = c.time(),
					d = f ? k + f : c.lasttime;
				f = c.nc.getScrollLeft();
				var n = c.nc.getScrollTop(),
					p = c.nc.page.maxh,
					a = c.nc.page.maxw;
				c.speedx = 0 < a ? Math.min(60, c.speedx) : 0;
				c.speedy = 0 < p ? Math.min(60, c.speedy) : 0;
				d = d && 60 >= k - d;
				if (0 > n || n > p || 0 > f || f > a) d = !1;
				f = c.speedx && d ? c.speedx : !1;
				if ((c.speedy && d && c.speedy) || f) {
					var s = Math.max(16, c.steptime);
					50 < s && ((f = s / 50), (c.speedx *= f), (c.speedy *= f), (s = 50));
					c.demulxy = 0;
					c.lastscrollx = c.nc.getScrollLeft();
					c.chkx = c.lastscrollx;
					c.lastscrolly = c.nc.getScrollTop();
					c.chky = c.lastscrolly;
					var e = c.lastscrollx,
						r = c.lastscrolly,
						t = function () {
							var d = 600 < c.time() - k ? 0.04 : 0.02;
							c.speedx && ((e = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy))), (c.lastscrollx = e), 0 > e || e > a) && (d = 0.1);
							c.speedy && ((r = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy))), (c.lastscrolly = r), 0 > r || r > p) && (d = 0.1);
							c.demulxy = Math.min(1, c.demulxy + d);
							c.nc.synched("domomentum2d", function () {
								c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), (c.chkx = e), c.nc.setScrollLeft(e));
								c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), (c.chky = r), c.nc.setScrollTop(r));
								c.timer || (c.nc.hideCursor(), c.doSnapy(e, r));
							});
							1 > c.demulxy ? (c.timer = setTimeout(t, s)) : (c.stop(), c.nc.hideCursor(), c.doSnapy(e, r));
						};
					t();
				} else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
			};
		},
		w = f.fn.scrollTop;
	f.cssHooks.pageYOffset = {
		get: function (k, c, h) {
			return (c = f.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : w.call(k);
		},
		set: function (k, c) {
			var h = f.data(k, "__nicescroll") || !1;
			h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : w.call(k, c);
			return this;
		},
	};
	f.fn.scrollTop = function (k) {
		if ("undefined" == typeof k) {
			var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollTop() : w.call(this);
		}
		return this.each(function () {
			var c = f.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : w.call(f(this), k);
		});
	};
	var B = f.fn.scrollLeft;
	f.cssHooks.pageXOffset = {
		get: function (k, c, h) {
			return (c = f.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : B.call(k);
		},
		set: function (k, c) {
			var h = f.data(k, "__nicescroll") || !1;
			h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c);
			return this;
		},
	};
	f.fn.scrollLeft = function (k) {
		if ("undefined" == typeof k) {
			var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollLeft() : B.call(this);
		}
		return this.each(function () {
			var c = f.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(f(this), k);
		});
	};
	var C = function (k) {
		var c = this;
		this.length = 0;
		this.name = "nicescrollarray";
		this.each = function (d) {
			for (var f = 0, h = 0; f < c.length; f++) d.call(c[f], h++);
			return c;
		};
		this.push = function (d) {
			c[c.length] = d;
			c.length++;
		};
		this.eq = function (d) {
			return c[d];
		};
		if (k)
			for (var h = 0; h < k.length; h++) {
				var m = f.data(k[h], "__nicescroll") || !1;
				m && ((this[this.length] = m), this.length++);
			}
		return this;
	};
	(function (f, c, h) {
		for (var m = 0; m < c.length; m++) h(f, c[m]);
	})(C.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (f, c) {
		f[c] = function () {
			var f = arguments;
			return this.each(function () {
				this[c].apply(this, f);
			});
		};
	});
	f.fn.getNiceScroll = function (k) {
		return "undefined" == typeof k ? new C(this) : (this[k] && f.data(this[k], "__nicescroll")) || !1;
	};
	f.extend(f.expr[":"], {
		nicescroll: function (k) {
			return f.data(k, "__nicescroll") ? !0 : !1;
		},
	});
	f.fn.niceScroll = function (k, c) {
		"undefined" != typeof c || "object" != typeof k || "jquery" in k || ((c = k), (k = !1));
		c = f.extend({}, c);
		var h = new C();
		"undefined" == typeof c && (c = {});
		k && ((c.doc = f(k)), (c.win = f(this)));
		var m = !("doc" in c);
		m || "win" in c || (c.win = f(this));
		this.each(function () {
			var d = f(this).data("__nicescroll") || !1;
			d || ((c.doc = m ? f(this) : c.doc), (d = new R(c, f(this))), f(this).data("__nicescroll", d));
			h.push(d);
		});
		return 1 == h.length ? h[0] : h;
	};
	window.NiceScroll = {
		getjQuery: function () {
			return f;
		},
	};
	f.nicescroll || ((f.nicescroll = new C()), (f.nicescroll.options = I));
});
/* jQuery SelectBox Styler v1.0.1 | (c) Dimox | http://dimox.name/styling-select-boxes-using-jquery-css/ */
(function ($) {
	$.fn.selectbox = function () {
		$(this).each(function () {
			var select = $(this);
			if (select.prev("span.selectbox").length < 1) {
				function doSelect() {
					var option = select.find("option");
					var optionSelected = option.filter(":selected");
					var optionText = option.filter(":first").text();
					if (optionSelected.length) optionText = optionSelected.text();
					var ddlist = "";
					for (i = 0; i < option.length; i++) {
						var selected = "";
						var disabled = ' class="disabled"';
						if (option.eq(i).is(":selected")) selected = ' class="selected sel"';
						if (option.eq(i).is(":disabled")) selected = disabled;
						ddlist += "<li" + selected + ">" + option.eq(i).text() + "</li>";
					}
					var selectbox = $(
						'<span class="selectbox" style="display:inline-block;position:relative">' +
						'<div class="select" style="float:left;position:relative;z-index:10000"><div class="text">' +
						optionText +
						"</div>" +
						'<b class="trigger"><i class="arrow"></i></b>' +
						"</div>" +
						'<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">' +
						"<ul>" +
						ddlist +
						"</ul>" +
						"</div>" +
						"</span>"
					);
					select.before(selectbox).css({ position: "absolute", top: -9999 });
					var divSelect = selectbox.find("div.select");
					var divText = selectbox.find("div.text");
					var dropdown = selectbox.find("div.dropdown");
					var li = dropdown.find("li");
					var selectHeight = selectbox.outerHeight();
					if (dropdown.css("left") == "auto") dropdown.css({ left: 0 });
					if (dropdown.css("top") == "auto") dropdown.css({ top: selectHeight });
					var liHeight = li.outerHeight();
					var position = dropdown.css("top");
					dropdown.hide();
					divSelect.click(function () {
						var topOffset = selectbox.offset().top;
						var bottomOffset = $(window).height() - selectHeight - (topOffset - $(window).scrollTop());
						if (bottomOffset < 0 || bottomOffset < liHeight * 6) {
							dropdown.height("auto").css({ top: "auto", bottom: position });
							if (dropdown.outerHeight() > topOffset - $(window).scrollTop() - 20) {
								dropdown.height(Math.floor((topOffset - $(window).scrollTop() - 20) / liHeight) * liHeight);
							}
						} else if (bottomOffset > liHeight * 6) {
							dropdown.height("auto").css({ bottom: "auto", top: position });
							if (dropdown.outerHeight() > bottomOffset - 20) {
								dropdown.height(Math.floor((bottomOffset - 20) / liHeight) * liHeight);
							}
						}
						$("span.selectbox").css({ zIndex: 1 }).removeClass("focused");
						selectbox.css({ zIndex: 2 });
						if (dropdown.is(":hidden")) {
							$("div.dropdown:visible").hide();
							dropdown.show();
						} else {
							dropdown.hide();
						}
						return false;
					});
					li.hover(function () {
						$(this).siblings().removeClass("selected");
					});
					var selectedText = li.filter(".selected").text();
					li.filter(":not(.disabled)").click(function () {
						var liText = $(this).text();
						if (selectedText != liText) {
							$(this).addClass("selected sel").siblings().removeClass("selected sel");
							option.removeAttr("selected").eq($(this).index()).attr("selected", true);
							selectedText = liText;
							divText.text(liText);
							select.change();
						}
						dropdown.hide();
					});
					dropdown.mouseout(function () {
						dropdown.find("li.sel").addClass("selected");
					});
					select
						.focus(function () {
							$("span.selectbox").removeClass("focused");
							selectbox.addClass("focused");
						})
						.keyup(function () {
							divText.text(option.filter(":selected").text());
							li.removeClass("selected sel").eq(option.filter(":selected").index()).addClass("selected sel");
						});
					$(document).on("click", function (e) {
						if (!$(e.target).parents().hasClass("selectbox")) {
							dropdown.hide().find("li.sel").addClass("selected");
							selectbox.removeClass("focused");
						}
					});
				}
				doSelect();
				select.on("refresh", function () {
					select.prev().remove();
					doSelect();
				});
			}
		});
	};
})(jQuery);
/* @preserve
 * Leaflet 1.3.4, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, i) {
	"object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i((t.L = {}));
})(this, function (t) {
	"use strict";
	function i(t) {
		var i, e, n, o;
		for (e = 1, n = arguments.length; e < n; e++) {
			o = arguments[e];
			for (i in o) t[i] = o[i];
		}
		return t;
	}
	function e(t, i) {
		var e = Array.prototype.slice;
		if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
		var n = e.call(arguments, 2);
		return function () {
			return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
		};
	}
	function n(t) {
		return (t._leaflet_id = t._leaflet_id || ++ei), t._leaflet_id;
	}
	function o(t, i, e) {
		var n, o, s, r;
		return (
			(r = function () {
				(n = !1), o && (s.apply(e, o), (o = !1));
			}),
			(s = function () {
				n ? (o = arguments) : (t.apply(e, arguments), setTimeout(r, i), (n = !0));
			})
		);
	}
	function s(t, i, e) {
		var n = i[1],
			o = i[0],
			s = n - o;
		return t === n && e ? t : ((((t - o) % s) + s) % s) + o;
	}
	function r() {
		return !1;
	}
	function a(t, i) {
		var e = Math.pow(10, void 0 === i ? 6 : i);
		return Math.round(t * e) / e;
	}
	function h(t) {
		return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
	}
	function u(t) {
		return h(t).split(/\s+/);
	}
	function l(t, i) {
		t.hasOwnProperty("options") || (t.options = t.options ? ii(t.options) : {});
		for (var e in i) t.options[e] = i[e];
		return t.options;
	}
	function c(t, i, e) {
		var n = [];
		for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
		return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
	}
	function _(t, i) {
		return t.replace(ni, function (t, e) {
			var n = i[e];
			if (void 0 === n) throw new Error("No value provided for variable " + t);
			return "function" == typeof n && (n = n(i)), n;
		});
	}
	function d(t, i) {
		for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
		return -1;
	}
	function p(t) {
		return window["webkit" + t] || window["moz" + t] || window["ms" + t];
	}
	function m(t) {
		var i = +new Date(),
			e = Math.max(0, 16 - (i - ri));
		return (ri = i + e), window.setTimeout(t, e);
	}
	function f(t, i, n) {
		if (!n || ai !== m) return ai.call(window, e(t, i));
		t.call(i);
	}
	function g(t) {
		t && hi.call(window, t);
	}
	function v() { }
	function y(t) {
		if ("undefined" != typeof L && L && L.Mixin) {
			t = oi(t) ? t : [t];
			for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
		}
	}
	function x(t, i, e) {
		(this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
	}
	function w(t, i, e) {
		return t instanceof x ? t : oi(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e);
	}
	function P(t, i) {
		if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]);
	}
	function b(t, i) {
		return !t || t instanceof P ? t : new P(t, i);
	}
	function T(t, i) {
		if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]);
	}
	function z(t, i) {
		return t instanceof T ? t : new T(t, i);
	}
	function M(t, i, e) {
		if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
		(this.lat = +t), (this.lng = +i), void 0 !== e && (this.alt = +e);
	}
	function C(t, i, e) {
		return t instanceof M
			? t
			: oi(t) && "object" != typeof t[0]
				? 3 === t.length
					? new M(t[0], t[1], t[2])
					: 2 === t.length
						? new M(t[0], t[1])
						: null
				: void 0 === t || null === t
					? t
					: "object" == typeof t && "lat" in t
						? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
						: void 0 === i
							? null
							: new M(t, i, e);
	}
	function S(t, i, e, n) {
		if (oi(t)) return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
		(this._a = t), (this._b = i), (this._c = e), (this._d = n);
	}
	function Z(t, i, e, n) {
		return new S(t, i, e, n);
	}
	function E(t) {
		return document.createElementNS("http://www.w3.org/2000/svg", t);
	}
	function k(t, i) {
		var e,
			n,
			o,
			s,
			r,
			a,
			h = "";
		for (e = 0, o = t.length; e < o; e++) {
			for (n = 0, s = (r = t[e]).length; n < s; n++) (a = r[n]), (h += (n ? "L" : "M") + a.x + " " + a.y);
			h += i ? (Ji ? "z" : "x") : "";
		}
		return h || "M0 0";
	}
	function A(t) {
		return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
	}
	function B(t, i, e, n) {
		return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this;
	}
	function I(t, i, e) {
		var n = t["_leaflet_" + i + e];
		return "touchstart" === i ? t.removeEventListener(te, n, !1) : "touchmove" === i ? t.removeEventListener(ie, n, !1) : "touchend" === i && (t.removeEventListener(ee, n, !1), t.removeEventListener(ne, n, !1)), this;
	}
	function O(t, i, n) {
		var o = e(function (t) {
			if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
				if (!(oe.indexOf(t.target.tagName) < 0)) return;
				Pt(t);
			}
			j(t, i);
		});
		(t["_leaflet_touchstart" + n] = o),
			t.addEventListener(te, o, !1),
			re ||
			(document.documentElement.addEventListener(te, R, !0),
				document.documentElement.addEventListener(ie, N, !0),
				document.documentElement.addEventListener(ee, D, !0),
				document.documentElement.addEventListener(ne, D, !0),
				(re = !0));
	}
	function R(t) {
		(se[t.pointerId] = t), ae++;
	}
	function N(t) {
		se[t.pointerId] && (se[t.pointerId] = t);
	}
	function D(t) {
		delete se[t.pointerId], ae--;
	}
	function j(t, i) {
		t.touches = [];
		for (var e in se) t.touches.push(se[e]);
		(t.changedTouches = [t]), i(t);
	}
	function W(t, i, e) {
		var n = function (t) {
			((t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) || 0 !== t.buttons) && j(t, i);
		};
		(t["_leaflet_touchmove" + e] = n), t.addEventListener(ie, n, !1);
	}
	function H(t, i, e) {
		var n = function (t) {
			j(t, i);
		};
		(t["_leaflet_touchend" + e] = n), t.addEventListener(ee, n, !1), t.addEventListener(ne, n, !1);
	}
	function F(t, i, e) {
		function n(t) {
			var i;
			if (Vi) {
				if (!bi || "mouse" === t.pointerType) return;
				i = ae;
			} else i = t.touches.length;
			if (!(i > 1)) {
				var e = Date.now(),
					n = e - (s || e);
				(r = t.touches ? t.touches[0] : t), (a = n > 0 && n <= h), (s = e);
			}
		}
		function o(t) {
			if (a && !r.cancelBubble) {
				if (Vi) {
					if (!bi || "mouse" === t.pointerType) return;
					var e,
						n,
						o = {};
					for (n in r) (e = r[n]), (o[n] = e && e.bind ? e.bind(r) : e);
					r = o;
				}
				(r.type = "dblclick"), i(r), (s = null);
			}
		}
		var s,
			r,
			a = !1,
			h = 250;
		return (t[le + he + e] = n), (t[le + ue + e] = o), (t[le + "dblclick" + e] = i), t.addEventListener(he, n, !1), t.addEventListener(ue, o, !1), t.addEventListener("dblclick", i, !1), this;
	}
	function U(t, i) {
		var e = t[le + he + i],
			n = t[le + ue + i],
			o = t[le + "dblclick" + i];
		return t.removeEventListener(he, e, !1), t.removeEventListener(ue, n, !1), bi || t.removeEventListener("dblclick", o, !1), this;
	}
	function V(t) {
		return "string" == typeof t ? document.getElementById(t) : t;
	}
	function q(t, i) {
		var e = t.style[i] || (t.currentStyle && t.currentStyle[i]);
		if ((!e || "auto" === e) && document.defaultView) {
			var n = document.defaultView.getComputedStyle(t, null);
			e = n ? n[i] : null;
		}
		return "auto" === e ? null : e;
	}
	function G(t, i, e) {
		var n = document.createElement(t);
		return (n.className = i || ""), e && e.appendChild(n), n;
	}
	function K(t) {
		var i = t.parentNode;
		i && i.removeChild(t);
	}
	function Y(t) {
		for (; t.firstChild;) t.removeChild(t.firstChild);
	}
	function X(t) {
		var i = t.parentNode;
		i.lastChild !== t && i.appendChild(t);
	}
	function J(t) {
		var i = t.parentNode;
		i.firstChild !== t && i.insertBefore(t, i.firstChild);
	}
	function $(t, i) {
		if (void 0 !== t.classList) return t.classList.contains(i);
		var e = et(t);
		return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
	}
	function Q(t, i) {
		if (void 0 !== t.classList) for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
		else if (!$(t, i)) {
			var s = et(t);
			it(t, (s ? s + " " : "") + i);
		}
	}
	function tt(t, i) {
		void 0 !== t.classList ? t.classList.remove(i) : it(t, h((" " + et(t) + " ").replace(" " + i + " ", " ")));
	}
	function it(t, i) {
		void 0 === t.className.baseVal ? (t.className = i) : (t.className.baseVal = i);
	}
	function et(t) {
		return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
	}
	function nt(t, i) {
		"opacity" in t.style ? (t.style.opacity = i) : "filter" in t.style && ot(t, i);
	}
	function ot(t, i) {
		var e = !1,
			n = "DXImageTransform.Microsoft.Alpha";
		try {
			e = t.filters.item(n);
		} catch (t) {
			if (1 === i) return;
		}
		(i = Math.round(100 * i)), e ? ((e.Enabled = 100 !== i), (e.Opacity = i)) : (t.style.filter += " progid:" + n + "(opacity=" + i + ")");
	}
	function st(t) {
		for (var i = document.documentElement.style, e = 0; e < t.length; e++) if (t[e] in i) return t[e];
		return !1;
	}
	function rt(t, i, e) {
		var n = i || new x(0, 0);
		t.style[ce] = (Ri ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "");
	}
	function at(t, i) {
		(t._leaflet_pos = i), ji ? rt(t, i) : ((t.style.left = i.x + "px"), (t.style.top = i.y + "px"));
	}
	function ht(t) {
		return t._leaflet_pos || new x(0, 0);
	}
	function ut() {
		mt(window, "dragstart", Pt);
	}
	function lt() {
		ft(window, "dragstart", Pt);
	}
	function ct(t) {
		for (; -1 === t.tabIndex;) t = t.parentNode;
		t.style && (_t(), (me = t), (fe = t.style.outline), (t.style.outline = "none"), mt(window, "keydown", _t));
	}
	function _t() {
		me && ((me.style.outline = fe), (me = void 0), (fe = void 0), ft(window, "keydown", _t));
	}
	function dt(t) {
		do {
			t = t.parentNode;
		} while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
		return t;
	}
	function pt(t) {
		var i = t.getBoundingClientRect();
		return { x: i.width / t.offsetWidth || 1, y: i.height / t.offsetHeight || 1, boundingClientRect: i };
	}
	function mt(t, i, e, n) {
		if ("object" == typeof i) for (var o in i) gt(t, o, i[o], e);
		else for (var s = 0, r = (i = u(i)).length; s < r; s++) gt(t, i[s], e, n);
		return this;
	}
	function ft(t, i, e, n) {
		if ("object" == typeof i) for (var o in i) vt(t, o, i[o], e);
		else if (i) for (var s = 0, r = (i = u(i)).length; s < r; s++) vt(t, i[s], e, n);
		else {
			for (var a in t[ye]) vt(t, a, t[ye][a]);
			delete t[ye];
		}
		return this;
	}
	function gt(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : "");
		if (t[ye] && t[ye][s]) return this;
		var r = function (i) {
			return e.call(o || t, i || window.event);
		},
			a = r;
		Vi && 0 === i.indexOf("touch")
			? B(t, i, r, s)
			: !qi || "dblclick" !== i || !F || (Vi && Ei)
				? "addEventListener" in t
					? "mousewheel" === i
						? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1)
						: "mouseenter" === i || "mouseleave" === i
							? ((r = function (i) {
								(i = i || window.event), Ct(t, i) && a(i);
							}),
								t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1))
							: ("click" === i &&
								zi &&
								(r = function (t) {
									St(t, a);
								}),
								t.addEventListener(i, r, !1))
					: "attachEvent" in t && t.attachEvent("on" + i, r)
				: F(t, r, s),
			(t[ye] = t[ye] || {}),
			(t[ye][s] = r);
	}
	function vt(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : ""),
			r = t[ye] && t[ye][s];
		if (!r) return this;
		Vi && 0 === i.indexOf("touch")
			? I(t, i, s)
			: !qi || "dblclick" !== i || !U || (Vi && Ei)
				? "removeEventListener" in t
					? "mousewheel" === i
						? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1)
						: t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1)
					: "detachEvent" in t && t.detachEvent("on" + i, r)
				: U(t, s),
			(t[ye][s] = null);
	}
	function yt(t) {
		return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? (t.originalEvent._stopped = !0) : (t.cancelBubble = !0), Mt(t), this;
	}
	function xt(t) {
		return gt(t, "mousewheel", yt), this;
	}
	function wt(t) {
		return mt(t, "mousedown touchstart dblclick", yt), gt(t, "click", zt), this;
	}
	function Pt(t) {
		return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
	}
	function Lt(t) {
		return Pt(t), yt(t), this;
	}
	function bt(t, i) {
		if (!i) return new x(t.clientX, t.clientY);
		var e = pt(i),
			n = e.boundingClientRect;
		return new x((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop);
	}
	function Tt(t) {
		return bi
			? t.wheelDeltaY / 2
			: t.deltaY && 0 === t.deltaMode
				? -t.deltaY / xe
				: t.deltaY && 1 === t.deltaMode
					? 20 * -t.deltaY
					: t.deltaY && 2 === t.deltaMode
						? 60 * -t.deltaY
						: t.deltaX || t.deltaZ
							? 0
							: t.wheelDelta
								? (t.wheelDeltaY || t.wheelDelta) / 2
								: t.detail && Math.abs(t.detail) < 32765
									? 20 * -t.detail
									: t.detail
										? (t.detail / -32765) * 60
										: 0;
	}
	function zt(t) {
		we[t.type] = !0;
	}
	function Mt(t) {
		var i = we[t.type];
		return (we[t.type] = !1), i;
	}
	function Ct(t, i) {
		var e = i.relatedTarget;
		if (!e) return !0;
		try {
			for (; e && e !== t;) e = e.parentNode;
		} catch (t) {
			return !1;
		}
		return e !== t;
	}
	function St(t, i) {
		var e = t.timeStamp || (t.originalEvent && t.originalEvent.timeStamp),
			n = ge && e - ge;
		(n && n > 100 && n < 500) || (t.target._simulatedClick && !t._simulated) ? Lt(t) : ((ge = e), i(t));
	}
	function Zt(t, i) {
		if (!i || !t.length) return t.slice();
		var e = i * i;
		return (t = Bt(t, e)), (t = kt(t, e));
	}
	function Et(t, i, e) {
		return Math.sqrt(Dt(t, i, e, !0));
	}
	function kt(t, i) {
		var e = t.length,
			n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
		(n[0] = n[e - 1] = 1), At(t, n, i, 0, e - 1);
		var o,
			s = [];
		for (o = 0; o < e; o++) n[o] && s.push(t[o]);
		return s;
	}
	function At(t, i, e, n, o) {
		var s,
			r,
			a,
			h = 0;
		for (r = n + 1; r <= o - 1; r++) (a = Dt(t[r], t[n], t[o], !0)) > h && ((s = r), (h = a));
		h > e && ((i[s] = 1), At(t, i, e, n, s), At(t, i, e, s, o));
	}
	function Bt(t, i) {
		for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Nt(t[n], t[o]) > i && (e.push(t[n]), (o = n));
		return o < s - 1 && e.push(t[s - 1]), e;
	}
	function It(t, i, e, n, o) {
		var s,
			r,
			a,
			h = n ? ke : Rt(t, e),
			u = Rt(i, e);
		for (ke = u; ;) {
			if (!(h | u)) return [t, i];
			if (h & u) return !1;
			(a = Rt((r = Ot(t, i, (s = h || u), e, o)), e)), s === h ? ((t = r), (h = a)) : ((i = r), (u = a));
		}
	}
	function Ot(t, i, e, n, o) {
		var s,
			r,
			a = i.x - t.x,
			h = i.y - t.y,
			u = n.min,
			l = n.max;
		return (
			8 & e ? ((s = t.x + (a * (l.y - t.y)) / h), (r = l.y)) : 4 & e ? ((s = t.x + (a * (u.y - t.y)) / h), (r = u.y)) : 2 & e ? ((s = l.x), (r = t.y + (h * (l.x - t.x)) / a)) : 1 & e && ((s = u.x), (r = t.y + (h * (u.x - t.x)) / a)),
			new x(s, r, o)
		);
	}
	function Rt(t, i) {
		var e = 0;
		return t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2), t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8), e;
	}
	function Nt(t, i) {
		var e = i.x - t.x,
			n = i.y - t.y;
		return e * e + n * n;
	}
	function Dt(t, i, e, n) {
		var o,
			s = i.x,
			r = i.y,
			a = e.x - s,
			h = e.y - r,
			u = a * a + h * h;
		return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? ((s = e.x), (r = e.y)) : o > 0 && ((s += a * o), (r += h * o))), (a = t.x - s), (h = t.y - r), n ? a * a + h * h : new x(s, r);
	}
	function jt(t) {
		return !oi(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
	}
	function Wt(t) {
		return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), jt(t);
	}
	function Ht(t, i, e) {
		var n,
			o,
			s,
			r,
			a,
			h,
			u,
			l,
			c,
			_ = [1, 4, 2, 8];
		for (o = 0, u = t.length; o < u; o++) t[o]._code = Rt(t[o], i);
		for (r = 0; r < 4; r++) {
			for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++)
				(a = t[o]), (h = t[s]), a._code & l ? h._code & l || (((c = Ot(h, a, l, i, e))._code = Rt(c, i)), n.push(c)) : (h._code & l && (((c = Ot(h, a, l, i, e))._code = Rt(c, i)), n.push(c)), n.push(a));
			t = n;
		}
		return t;
	}
	function Ft(t, i) {
		var e,
			n,
			o,
			s,
			r = "Feature" === t.type ? t.geometry : t,
			a = r ? r.coordinates : null,
			h = [],
			u = i && i.pointToLayer,
			l = (i && i.coordsToLatLng) || Ut;
		if (!a && !r) return null;
		switch (r.type) {
			case "Point":
				return (e = l(a)), u ? u(t, e) : new $e(e);
			case "MultiPoint":
				for (o = 0, s = a.length; o < s; o++) (e = l(a[o])), h.push(u ? u(t, e) : new $e(e));
				return new Ke(h);
			case "LineString":
			case "MultiLineString":
				return (n = Vt(a, "LineString" === r.type ? 0 : 1, l)), new nn(n, i);
			case "Polygon":
			case "MultiPolygon":
				return (n = Vt(a, "Polygon" === r.type ? 1 : 2, l)), new on(n, i);
			case "GeometryCollection":
				for (o = 0, s = r.geometries.length; o < s; o++) {
					var c = Ft({ geometry: r.geometries[o], type: "Feature", properties: t.properties }, i);
					c && h.push(c);
				}
				return new Ke(h);
			default:
				throw new Error("Invalid GeoJSON object.");
		}
	}
	function Ut(t) {
		return new M(t[1], t[0], t[2]);
	}
	function Vt(t, i, e) {
		for (var n, o = [], s = 0, r = t.length; s < r; s++) (n = i ? Vt(t[s], i - 1, e) : (e || Ut)(t[s])), o.push(n);
		return o;
	}
	function qt(t, i) {
		return (i = "number" == typeof i ? i : 6), void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)];
	}
	function Gt(t, i, e, n) {
		for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Gt(t[s], i - 1, e, n) : qt(t[s], n));
		return !i && e && o.push(o[0]), o;
	}
	function Kt(t, e) {
		return t.feature ? i({}, t.feature, { geometry: e }) : Yt(e);
	}
	function Yt(t) {
		return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t };
	}
	function Xt(t, i) {
		return new sn(t, i);
	}
	function Jt(t, i) {
		return new mn(t, i);
	}
	function $t(t) {
		return Xi ? new vn(t) : null;
	}
	function Qt(t) {
		return Ji || $i ? new Pn(t) : null;
	}
	var ti = Object.freeze;
	Object.freeze = function (t) {
		return t;
	};
	var ii =
		Object.create ||
		(function () {
			function t() { }
			return function (i) {
				return (t.prototype = i), new t();
			};
		})(),
		ei = 0,
		ni = /\{ *([\w_-]+) *\}/g,
		oi =
			Array.isArray ||
			function (t) {
				return "[object Array]" === Object.prototype.toString.call(t);
			},
		si = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		ri = 0,
		ai = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
		hi =
			window.cancelAnimationFrame ||
			p("CancelAnimationFrame") ||
			p("CancelRequestAnimationFrame") ||
			function (t) {
				window.clearTimeout(t);
			},
		ui = (Object.freeze || Object)({
			freeze: ti,
			extend: i,
			create: ii,
			bind: e,
			lastId: ei,
			stamp: n,
			throttle: o,
			wrapNum: s,
			falseFn: r,
			formatNum: a,
			trim: h,
			splitWords: u,
			setOptions: l,
			getParamString: c,
			template: _,
			isArray: oi,
			indexOf: d,
			emptyImageUrl: si,
			requestFn: ai,
			cancelFn: hi,
			requestAnimFrame: f,
			cancelAnimFrame: g,
		});
	(v.extend = function (t) {
		var e = function () {
			this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
		},
			n = (e.__super__ = this.prototype),
			o = ii(n);
		(o.constructor = e), (e.prototype = o);
		for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
		return (
			t.statics && (i(e, t.statics), delete t.statics),
			t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes),
			o.options && (t.options = i(ii(o.options), t.options)),
			i(o, t),
			(o._initHooks = []),
			(o.callInitHooks = function () {
				if (!this._initHooksCalled) {
					n.callInitHooks && n.callInitHooks.call(this), (this._initHooksCalled = !0);
					for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this);
				}
			}),
			e
		);
	}),
		(v.include = function (t) {
			return i(this.prototype, t), this;
		}),
		(v.mergeOptions = function (t) {
			return i(this.prototype.options, t), this;
		}),
		(v.addInitHook = function (t) {
			var i = Array.prototype.slice.call(arguments, 1),
				e =
					"function" == typeof t
						? t
						: function () {
							this[t].apply(this, i);
						};
			return (this.prototype._initHooks = this.prototype._initHooks || []), this.prototype._initHooks.push(e), this;
		});
	var li = {
		on: function (t, i, e) {
			if ("object" == typeof t) for (var n in t) this._on(n, t[n], i);
			else for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
			return this;
		},
		off: function (t, i, e) {
			if (t)
				if ("object" == typeof t) for (var n in t) this._off(n, t[n], i);
				else for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
			else delete this._events;
			return this;
		},
		_on: function (t, i, e) {
			this._events = this._events || {};
			var n = this._events[t];
			n || ((n = []), (this._events[t] = n)), e === this && (e = void 0);
			for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++) if (s[r].fn === i && s[r].ctx === e) return;
			s.push(o);
		},
		_off: function (t, i, e) {
			var n, o, s;
			if (this._events && (n = this._events[t]))
				if (i) {
					if ((e === this && (e = void 0), n))
						for (o = 0, s = n.length; o < s; o++) {
							var a = n[o];
							if (a.ctx === e && a.fn === i) return (a.fn = r), this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
						}
				} else {
					for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
					delete this._events[t];
				}
		},
		fire: function (t, e, n) {
			if (!this.listens(t, n)) return this;
			var o = i({}, e, { type: t, target: this, sourceTarget: (e && e.sourceTarget) || this });
			if (this._events) {
				var s = this._events[t];
				if (s) {
					this._firingCount = this._firingCount + 1 || 1;
					for (var r = 0, a = s.length; r < a; r++) {
						var h = s[r];
						h.fn.call(h.ctx || this, o);
					}
					this._firingCount--;
				}
			}
			return n && this._propagateEvent(o), this;
		},
		listens: function (t, i) {
			var e = this._events && this._events[t];
			if (e && e.length) return !0;
			if (i) for (var n in this._eventParents) if (this._eventParents[n].listens(t, i)) return !0;
			return !1;
		},
		once: function (t, i, n) {
			if ("object" == typeof t) {
				for (var o in t) this.once(o, t[o], i);
				return this;
			}
			var s = e(function () {
				this.off(t, i, n).off(t, s, n);
			}, this);
			return this.on(t, i, n).on(t, s, n);
		},
		addEventParent: function (t) {
			return (this._eventParents = this._eventParents || {}), (this._eventParents[n(t)] = t), this;
		},
		removeEventParent: function (t) {
			return this._eventParents && delete this._eventParents[n(t)], this;
		},
		_propagateEvent: function (t) {
			for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({ layer: t.target, propagatedFrom: t.target }, t), !0);
		},
	};
	(li.addEventListener = li.on), (li.removeEventListener = li.clearAllEventListeners = li.off), (li.addOneTimeEventListener = li.once), (li.fireEvent = li.fire), (li.hasEventListeners = li.listens);
	var ci = v.extend(li),
		_i =
			Math.trunc ||
			function (t) {
				return t > 0 ? Math.floor(t) : Math.ceil(t);
			};
	(x.prototype = {
		clone: function () {
			return new x(this.x, this.y);
		},
		add: function (t) {
			return this.clone()._add(w(t));
		},
		_add: function (t) {
			return (this.x += t.x), (this.y += t.y), this;
		},
		subtract: function (t) {
			return this.clone()._subtract(w(t));
		},
		_subtract: function (t) {
			return (this.x -= t.x), (this.y -= t.y), this;
		},
		divideBy: function (t) {
			return this.clone()._divideBy(t);
		},
		_divideBy: function (t) {
			return (this.x /= t), (this.y /= t), this;
		},
		multiplyBy: function (t) {
			return this.clone()._multiplyBy(t);
		},
		_multiplyBy: function (t) {
			return (this.x *= t), (this.y *= t), this;
		},
		scaleBy: function (t) {
			return new x(this.x * t.x, this.y * t.y);
		},
		unscaleBy: function (t) {
			return new x(this.x / t.x, this.y / t.y);
		},
		round: function () {
			return this.clone()._round();
		},
		_round: function () {
			return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
		},
		floor: function () {
			return this.clone()._floor();
		},
		_floor: function () {
			return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
		},
		ceil: function () {
			return this.clone()._ceil();
		},
		_ceil: function () {
			return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
		},
		trunc: function () {
			return this.clone()._trunc();
		},
		_trunc: function () {
			return (this.x = _i(this.x)), (this.y = _i(this.y)), this;
		},
		distanceTo: function (t) {
			var i = (t = w(t)).x - this.x,
				e = t.y - this.y;
			return Math.sqrt(i * i + e * e);
		},
		equals: function (t) {
			return (t = w(t)).x === this.x && t.y === this.y;
		},
		contains: function (t) {
			return (t = w(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
		},
		toString: function () {
			return "Point(" + a(this.x) + ", " + a(this.y) + ")";
		},
	}),
		(P.prototype = {
			extend: function (t) {
				return (
					(t = w(t)),
					this.min || this.max
						? ((this.min.x = Math.min(t.x, this.min.x)), (this.max.x = Math.max(t.x, this.max.x)), (this.min.y = Math.min(t.y, this.min.y)), (this.max.y = Math.max(t.y, this.max.y)))
						: ((this.min = t.clone()), (this.max = t.clone())),
					this
				);
			},
			getCenter: function (t) {
				return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
			},
			getBottomLeft: function () {
				return new x(this.min.x, this.max.y);
			},
			getTopRight: function () {
				return new x(this.max.x, this.min.y);
			},
			getTopLeft: function () {
				return this.min;
			},
			getBottomRight: function () {
				return this.max;
			},
			getSize: function () {
				return this.max.subtract(this.min);
			},
			contains: function (t) {
				var i, e;
				return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? ((i = t.min), (e = t.max)) : (i = e = t), i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
			},
			intersects: function (t) {
				t = b(t);
				var i = this.min,
					e = this.max,
					n = t.min,
					o = t.max,
					s = o.x >= i.x && n.x <= e.x,
					r = o.y >= i.y && n.y <= e.y;
				return s && r;
			},
			overlaps: function (t) {
				t = b(t);
				var i = this.min,
					e = this.max,
					n = t.min,
					o = t.max,
					s = o.x > i.x && n.x < e.x,
					r = o.y > i.y && n.y < e.y;
				return s && r;
			},
			isValid: function () {
				return !(!this.min || !this.max);
			},
		}),
		(T.prototype = {
			extend: function (t) {
				var i,
					e,
					n = this._southWest,
					o = this._northEast;
				if (t instanceof M) (i = t), (e = t);
				else {
					if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
					if (((i = t._southWest), (e = t._northEast), !i || !e)) return this;
				}
				return (
					n || o
						? ((n.lat = Math.min(i.lat, n.lat)), (n.lng = Math.min(i.lng, n.lng)), (o.lat = Math.max(e.lat, o.lat)), (o.lng = Math.max(e.lng, o.lng)))
						: ((this._southWest = new M(i.lat, i.lng)), (this._northEast = new M(e.lat, e.lng))),
					this
				);
			},
			pad: function (t) {
				var i = this._southWest,
					e = this._northEast,
					n = Math.abs(i.lat - e.lat) * t,
					o = Math.abs(i.lng - e.lng) * t;
				return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o));
			},
			getCenter: function () {
				return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
			},
			getSouthWest: function () {
				return this._southWest;
			},
			getNorthEast: function () {
				return this._northEast;
			},
			getNorthWest: function () {
				return new M(this.getNorth(), this.getWest());
			},
			getSouthEast: function () {
				return new M(this.getSouth(), this.getEast());
			},
			getWest: function () {
				return this._southWest.lng;
			},
			getSouth: function () {
				return this._southWest.lat;
			},
			getEast: function () {
				return this._northEast.lng;
			},
			getNorth: function () {
				return this._northEast.lat;
			},
			contains: function (t) {
				t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
				var i,
					e,
					n = this._southWest,
					o = this._northEast;
				return t instanceof T ? ((i = t.getSouthWest()), (e = t.getNorthEast())) : (i = e = t), i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
			},
			intersects: function (t) {
				t = z(t);
				var i = this._southWest,
					e = this._northEast,
					n = t.getSouthWest(),
					o = t.getNorthEast(),
					s = o.lat >= i.lat && n.lat <= e.lat,
					r = o.lng >= i.lng && n.lng <= e.lng;
				return s && r;
			},
			overlaps: function (t) {
				t = z(t);
				var i = this._southWest,
					e = this._northEast,
					n = t.getSouthWest(),
					o = t.getNorthEast(),
					s = o.lat > i.lat && n.lat < e.lat,
					r = o.lng > i.lng && n.lng < e.lng;
				return s && r;
			},
			toBBoxString: function () {
				return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
			},
			equals: function (t, i) {
				return !!t && ((t = z(t)), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
			},
			isValid: function () {
				return !(!this._southWest || !this._northEast);
			},
		}),
		(M.prototype = {
			equals: function (t, i) {
				return !!t && ((t = C(t)), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
			},
			toString: function (t) {
				return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")";
			},
			distanceTo: function (t) {
				return pi.distance(this, C(t));
			},
			wrap: function () {
				return pi.wrapLatLng(this);
			},
			toBounds: function (t) {
				var i = (180 * t) / 40075017,
					e = i / Math.cos((Math.PI / 180) * this.lat);
				return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
			},
			clone: function () {
				return new M(this.lat, this.lng, this.alt);
			},
		});
	var di = {
		latLngToPoint: function (t, i) {
			var e = this.projection.project(t),
				n = this.scale(i);
			return this.transformation._transform(e, n);
		},
		pointToLatLng: function (t, i) {
			var e = this.scale(i),
				n = this.transformation.untransform(t, e);
			return this.projection.unproject(n);
		},
		project: function (t) {
			return this.projection.project(t);
		},
		unproject: function (t) {
			return this.projection.unproject(t);
		},
		scale: function (t) {
			return 256 * Math.pow(2, t);
		},
		zoom: function (t) {
			return Math.log(t / 256) / Math.LN2;
		},
		getProjectedBounds: function (t) {
			if (this.infinite) return null;
			var i = this.projection.bounds,
				e = this.scale(t);
			return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e));
		},
		infinite: !1,
		wrapLatLng: function (t) {
			var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
			return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt);
		},
		wrapLatLngBounds: function (t) {
			var i = t.getCenter(),
				e = this.wrapLatLng(i),
				n = i.lat - e.lat,
				o = i.lng - e.lng;
			if (0 === n && 0 === o) return t;
			var s = t.getSouthWest(),
				r = t.getNorthEast();
			return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o));
		},
	},
		pi = i({}, di, {
			wrapLng: [-180, 180],
			R: 6371e3,
			distance: function (t, i) {
				var e = Math.PI / 180,
					n = t.lat * e,
					o = i.lat * e,
					s = Math.sin(((i.lat - t.lat) * e) / 2),
					r = Math.sin(((i.lng - t.lng) * e) / 2),
					a = s * s + Math.cos(n) * Math.cos(o) * r * r,
					h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				return this.R * h;
			},
		}),
		mi = {
			R: 6378137,
			MAX_LATITUDE: 85.0511287798,
			project: function (t) {
				var i = Math.PI / 180,
					e = this.MAX_LATITUDE,
					n = Math.max(Math.min(e, t.lat), -e),
					o = Math.sin(n * i);
				return new x(this.R * t.lng * i, (this.R * Math.log((1 + o) / (1 - o))) / 2);
			},
			unproject: function (t) {
				var i = 180 / Math.PI;
				return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, (t.x * i) / this.R);
			},
			bounds: (function () {
				var t = 6378137 * Math.PI;
				return new P([-t, -t], [t, t]);
			})(),
		};
	S.prototype = {
		transform: function (t, i) {
			return this._transform(t.clone(), i);
		},
		_transform: function (t, i) {
			return (i = i || 1), (t.x = i * (this._a * t.x + this._b)), (t.y = i * (this._c * t.y + this._d)), t;
		},
		untransform: function (t, i) {
			return (i = i || 1), new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
		},
	};
	var fi,
		gi,
		vi,
		yi = i({}, pi, {
			code: "EPSG:3857",
			projection: mi,
			transformation: (function () {
				var t = 0.5 / (Math.PI * mi.R);
				return Z(t, 0.5, -t, 0.5);
			})(),
		}),
		xi = i({}, yi, { code: "EPSG:900913" }),
		wi = document.documentElement.style,
		Pi = "ActiveXObject" in window,
		Li = Pi && !document.addEventListener,
		bi = "msLaunchUri" in navigator && !("documentMode" in document),
		Ti = A("webkit"),
		zi = A("android"),
		Mi = A("android 2") || A("android 3"),
		Ci = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
		Si = zi && A("Google") && Ci < 537 && !("AudioNode" in window),
		Zi = !!window.opera,
		Ei = A("chrome"),
		ki = A("gecko") && !Ti && !Zi && !Pi,
		Ai = !Ei && A("safari"),
		Bi = A("phantom"),
		Ii = "OTransition" in wi,
		Oi = 0 === navigator.platform.indexOf("Win"),
		Ri = Pi && "transition" in wi,
		Ni = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Mi,
		Di = "MozPerspective" in wi,
		ji = !window.L_DISABLE_3D && (Ri || Ni || Di) && !Ii && !Bi,
		Wi = "undefined" != typeof orientation || A("mobile"),
		Hi = Wi && Ti,
		Fi = Wi && Ni,
		Ui = !window.PointerEvent && window.MSPointerEvent,
		Vi = !(!window.PointerEvent && !Ui),
		qi = !window.L_NO_TOUCH && (Vi || "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
		Gi = Wi && Zi,
		Ki = Wi && ki,
		Yi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
		Xi = !!document.createElement("canvas").getContext,
		Ji = !(!document.createElementNS || !E("svg").createSVGRect),
		$i =
			!Ji &&
			(function () {
				try {
					var t = document.createElement("div");
					t.innerHTML = '<v:shape adj="1"/>';
					var i = t.firstChild;
					return (i.style.behavior = "url(#default#VML)"), i && "object" == typeof i.adj;
				} catch (t) {
					return !1;
				}
			})(),
		Qi = (Object.freeze || Object)({
			ie: Pi,
			ielt9: Li,
			edge: bi,
			webkit: Ti,
			android: zi,
			android23: Mi,
			androidStock: Si,
			opera: Zi,
			chrome: Ei,
			gecko: ki,
			safari: Ai,
			phantom: Bi,
			opera12: Ii,
			win: Oi,
			ie3d: Ri,
			webkit3d: Ni,
			gecko3d: Di,
			any3d: ji,
			mobile: Wi,
			mobileWebkit: Hi,
			mobileWebkit3d: Fi,
			msPointer: Ui,
			pointer: Vi,
			touch: qi,
			mobileOpera: Gi,
			mobileGecko: Ki,
			retina: Yi,
			canvas: Xi,
			svg: Ji,
			vml: $i,
		}),
		te = Ui ? "MSPointerDown" : "pointerdown",
		ie = Ui ? "MSPointerMove" : "pointermove",
		ee = Ui ? "MSPointerUp" : "pointerup",
		ne = Ui ? "MSPointerCancel" : "pointercancel",
		oe = ["INPUT", "SELECT", "OPTION"],
		se = {},
		re = !1,
		ae = 0,
		he = Ui ? "MSPointerDown" : Vi ? "pointerdown" : "touchstart",
		ue = Ui ? "MSPointerUp" : Vi ? "pointerup" : "touchend",
		le = "_leaflet_",
		ce = st(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
		_e = st(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
		de = "webkitTransition" === _e || "OTransition" === _e ? _e + "End" : "transitionend";
	if ("onselectstart" in document)
		(fi = function () {
			mt(window, "selectstart", Pt);
		}),
			(gi = function () {
				ft(window, "selectstart", Pt);
			});
	else {
		var pe = st(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
		(fi = function () {
			if (pe) {
				var t = document.documentElement.style;
				(vi = t[pe]), (t[pe] = "none");
			}
		}),
			(gi = function () {
				pe && ((document.documentElement.style[pe] = vi), (vi = void 0));
			});
	}
	var me,
		fe,
		ge,
		ve = (Object.freeze || Object)({
			TRANSFORM: ce,
			TRANSITION: _e,
			TRANSITION_END: de,
			get: V,
			getStyle: q,
			create: G,
			remove: K,
			empty: Y,
			toFront: X,
			toBack: J,
			hasClass: $,
			addClass: Q,
			removeClass: tt,
			setClass: it,
			getClass: et,
			setOpacity: nt,
			testProp: st,
			setTransform: rt,
			setPosition: at,
			getPosition: ht,
			disableTextSelection: fi,
			enableTextSelection: gi,
			disableImageDrag: ut,
			enableImageDrag: lt,
			preventOutline: ct,
			restoreOutline: _t,
			getSizedParentNode: dt,
			getScale: pt,
		}),
		ye = "_leaflet_events",
		xe = Oi && Ei ? 2 * window.devicePixelRatio : ki ? window.devicePixelRatio : 1,
		we = {},
		Pe = (Object.freeze || Object)({
			on: mt,
			off: ft,
			stopPropagation: yt,
			disableScrollPropagation: xt,
			disableClickPropagation: wt,
			preventDefault: Pt,
			stop: Lt,
			getMousePosition: bt,
			getWheelDelta: Tt,
			fakeStop: zt,
			skipped: Mt,
			isExternalTarget: Ct,
			addListener: mt,
			removeListener: ft,
		}),
		Le = ci.extend({
			run: function (t, i, e, n) {
				this.stop(),
					(this._el = t),
					(this._inProgress = !0),
					(this._duration = e || 0.25),
					(this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
					(this._startPos = ht(t)),
					(this._offset = i.subtract(this._startPos)),
					(this._startTime = +new Date()),
					this.fire("start"),
					this._animate();
			},
			stop: function () {
				this._inProgress && (this._step(!0), this._complete());
			},
			_animate: function () {
				(this._animId = f(this._animate, this)), this._step();
			},
			_step: function (t) {
				var i = +new Date() - this._startTime,
					e = 1e3 * this._duration;
				i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
			},
			_runFrame: function (t, i) {
				var e = this._startPos.add(this._offset.multiplyBy(t));
				i && e._round(), at(this._el, e), this.fire("step");
			},
			_complete: function () {
				g(this._animId), (this._inProgress = !1), this.fire("end");
			},
			_easeOut: function (t) {
				return 1 - Math.pow(1 - t, this._easeOutPower);
			},
		}),
		be = ci.extend({
			options: {
				crs: yi,
				center: void 0,
				zoom: void 0,
				minZoom: void 0,
				maxZoom: void 0,
				layers: [],
				maxBounds: void 0,
				renderer: void 0,
				zoomAnimation: !0,
				zoomAnimationThreshold: 4,
				fadeAnimation: !0,
				markerZoomAnimation: !0,
				transform3DLimit: 8388608,
				zoomSnap: 1,
				zoomDelta: 1,
				trackResize: !0,
			},
			initialize: function (t, i) {
				(i = l(this, i)),
					this._initContainer(t),
					this._initLayout(),
					(this._onResize = e(this._onResize, this)),
					this._initEvents(),
					i.maxBounds && this.setMaxBounds(i.maxBounds),
					void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
					i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, { reset: !0 }),
					(this._handlers = []),
					(this._layers = {}),
					(this._zoomBoundLayers = {}),
					(this._sizeChanged = !0),
					this.callInitHooks(),
					(this._zoomAnimated = _e && ji && !Gi && this.options.zoomAnimation),
					this._zoomAnimated && (this._createAnimProxy(), mt(this._proxy, de, this._catchTransitionEnd, this)),
					this._addLayers(this.options.layers);
			},
			setView: function (t, e, n) {
				return (
					(e = void 0 === e ? this._zoom : this._limitZoom(e)),
					(t = this._limitCenter(C(t), e, this.options.maxBounds)),
					(n = n || {}),
					this._stop(),
					this._loaded &&
						!n.reset &&
						!0 !== n &&
						(void 0 !== n.animate && ((n.zoom = i({ animate: n.animate }, n.zoom)), (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan))),
							this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan))
						? (clearTimeout(this._sizeTimer), this)
						: (this._resetView(t, e), this)
				);
			},
			setZoom: function (t, i) {
				return this._loaded ? this.setView(this.getCenter(), t, { zoom: i }) : ((this._zoom = t), this);
			},
			zoomIn: function (t, i) {
				return (t = t || (ji ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, i);
			},
			zoomOut: function (t, i) {
				return (t = t || (ji ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, i);
			},
			setZoomAround: function (t, i, e) {
				var n = this.getZoomScale(i),
					o = this.getSize().divideBy(2),
					s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
					r = this.containerPointToLatLng(o.add(s));
				return this.setView(r, i, { zoom: e });
			},
			_getBoundsCenterZoom: function (t, i) {
				(i = i || {}), (t = t.getBounds ? t.getBounds() : z(t));
				var e = w(i.paddingTopLeft || i.padding || [0, 0]),
					n = w(i.paddingBottomRight || i.padding || [0, 0]),
					o = this.getBoundsZoom(t, !1, e.add(n));
				if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return { center: t.getCenter(), zoom: o };
				var s = n.subtract(e).divideBy(2),
					r = this.project(t.getSouthWest(), o),
					a = this.project(t.getNorthEast(), o);
				return { center: this.unproject(r.add(a).divideBy(2).add(s), o), zoom: o };
			},
			fitBounds: function (t, i) {
				if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
				var e = this._getBoundsCenterZoom(t, i);
				return this.setView(e.center, e.zoom, i);
			},
			fitWorld: function (t) {
				return this.fitBounds(
					[
						[-90, -180],
						[90, 180],
					],
					t
				);
			},
			panTo: function (t, i) {
				return this.setView(t, this._zoom, { pan: i });
			},
			panBy: function (t, i) {
				if (((t = w(t).round()), (i = i || {}), !t.x && !t.y)) return this.fire("moveend");
				if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
				if ((this._panAnim || ((this._panAnim = new Le()), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate)) {
					Q(this._mapPane, "leaflet-pan-anim");
					var e = this._getMapPanePos().subtract(t).round();
					this._panAnim.run(this._mapPane, e, i.duration || 0.25, i.easeLinearity);
				} else this._rawPanBy(t), this.fire("move").fire("moveend");
				return this;
			},
			flyTo: function (t, i, e) {
				function n(t) {
					var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
						e = Math.sqrt(i * i + 1) - i;
					return e < 1e-9 ? -18 : Math.log(e);
				}
				function o(t) {
					return (Math.exp(t) - Math.exp(-t)) / 2;
				}
				function s(t) {
					return (Math.exp(t) + Math.exp(-t)) / 2;
				}
				function r(t) {
					return o(t) / s(t);
				}
				function a(t) {
					return m * (s(w) / s(w + y * t));
				}
				function h(t) {
					return (m * (s(w) * r(w + y * t) - o(w))) / x;
				}
				function u(t) {
					return 1 - Math.pow(1 - t, 1.5);
				}
				function l() {
					var e = (Date.now() - P) / b,
						n = u(e) * L;
					e <= 1 ? ((this._flyToFrame = f(l, this)), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), { flyTo: !0 })) : this._move(t, i)._moveEnd(!0);
				}
				if (!1 === (e = e || {}).animate || !ji) return this.setView(t, i, e);
				this._stop();
				var c = this.project(this.getCenter()),
					_ = this.project(t),
					d = this.getSize(),
					p = this._zoom;
				(t = C(t)), (i = void 0 === i ? p : i);
				var m = Math.max(d.x, d.y),
					g = m * this.getZoomScale(p, i),
					v = _.distanceTo(c) || 1,
					y = 1.42,
					x = y * y,
					w = n(0),
					P = Date.now(),
					L = (n(1) - w) / y,
					b = e.duration ? 1e3 * e.duration : 1e3 * L * 0.8;
				return this._moveStart(!0, e.noMoveStart), l.call(this), this;
			},
			flyToBounds: function (t, i) {
				var e = this._getBoundsCenterZoom(t, i);
				return this.flyTo(e.center, e.zoom, i);
			},
			setMaxBounds: function (t) {
				return (t = z(t)).isValid()
					? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), (this.options.maxBounds = t), this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds))
					: ((this.options.maxBounds = null), this.off("moveend", this._panInsideMaxBounds));
			},
			setMinZoom: function (t) {
				var i = this.options.minZoom;
				return (this.options.minZoom = t), this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
			},
			setMaxZoom: function (t) {
				var i = this.options.maxZoom;
				return (this.options.maxZoom = t), this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
			},
			panInsideBounds: function (t, i) {
				this._enforcingBounds = !0;
				var e = this.getCenter(),
					n = this._limitCenter(e, this._zoom, z(t));
				return e.equals(n) || this.panTo(n, i), (this._enforcingBounds = !1), this;
			},
			invalidateSize: function (t) {
				if (!this._loaded) return this;
				t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
				var n = this.getSize();
				(this._sizeChanged = !0), (this._lastCenter = null);
				var o = this.getSize(),
					s = n.divideBy(2).round(),
					r = o.divideBy(2).round(),
					a = s.subtract(r);
				return a.x || a.y
					? (t.animate && t.pan
						? this.panBy(a)
						: (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), (this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200))) : this.fire("moveend")),
						this.fire("resize", { oldSize: n, newSize: o }))
					: this;
			},
			stop: function () {
				return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
			},
			locate: function (t) {
				if (((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)), !("geolocation" in navigator))) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
				var n = e(this._handleGeolocationResponse, this),
					o = e(this._handleGeolocationError, this);
				return t.watch ? (this._locationWatchId = navigator.geolocation.watchPosition(n, o, t)) : navigator.geolocation.getCurrentPosition(n, o, t), this;
			},
			stopLocate: function () {
				return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
			},
			_handleGeolocationError: function (t) {
				var i = t.code,
					e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
				this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: i, message: "Geolocation error: " + e + "." });
			},
			_handleGeolocationResponse: function (t) {
				var i = new M(t.coords.latitude, t.coords.longitude),
					e = i.toBounds(2 * t.coords.accuracy),
					n = this._locateOptions;
				if (n.setView) {
					var o = this.getBoundsZoom(e);
					this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o);
				}
				var s = { latlng: i, bounds: e, timestamp: t.timestamp };
				for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
				this.fire("locationfound", s);
			},
			addHandler: function (t, i) {
				if (!i) return this;
				var e = (this[t] = new i(this));
				return this._handlers.push(e), this.options[t] && e.enable(), this;
			},
			remove: function () {
				if ((this._initEvents(!0), this._containerId !== this._container._leaflet_id)) throw new Error("Map container is being reused by another instance");
				try {
					delete this._container._leaflet_id, delete this._containerId;
				} catch (t) {
					(this._container._leaflet_id = void 0), (this._containerId = void 0);
				}
				void 0 !== this._locationWatchId && this.stopLocate(),
					this._stop(),
					K(this._mapPane),
					this._clearControlPos && this._clearControlPos(),
					this._resizeRequest && (g(this._resizeRequest), (this._resizeRequest = null)),
					this._clearHandlers(),
					this._loaded && this.fire("unload");
				var t;
				for (t in this._layers) this._layers[t].remove();
				for (t in this._panes) K(this._panes[t]);
				return (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this;
			},
			createPane: function (t, i) {
				var e = G("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
				return t && (this._panes[t] = e), e;
			},
			getCenter: function () {
				return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
			},
			getZoom: function () {
				return this._zoom;
			},
			getBounds: function () {
				var t = this.getPixelBounds();
				return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
			},
			getMinZoom: function () {
				return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
			},
			getMaxZoom: function () {
				return void 0 === this.options.maxZoom ? (void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom) : this.options.maxZoom;
			},
			getBoundsZoom: function (t, i, e) {
				(t = z(t)), (e = w(e || [0, 0]));
				var n = this.getZoom() || 0,
					o = this.getMinZoom(),
					s = this.getMaxZoom(),
					r = t.getNorthWest(),
					a = t.getSouthEast(),
					h = this.getSize().subtract(e),
					u = b(this.project(a, n), this.project(r, n)).getSize(),
					l = ji ? this.options.zoomSnap : 1,
					c = h.x / u.x,
					_ = h.y / u.y,
					d = i ? Math.max(c, _) : Math.min(c, _);
				return (n = this.getScaleZoom(d, n)), l && ((n = Math.round(n / (l / 100)) * (l / 100)), (n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l)), Math.max(o, Math.min(s, n));
			},
			getSize: function () {
				return (this._size && !this._sizeChanged) || ((this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0)), (this._sizeChanged = !1)), this._size.clone();
			},
			getPixelBounds: function (t, i) {
				var e = this._getTopLeftPoint(t, i);
				return new P(e, e.add(this.getSize()));
			},
			getPixelOrigin: function () {
				return this._checkIfLoaded(), this._pixelOrigin;
			},
			getPixelWorldBounds: function (t) {
				return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
			},
			getPane: function (t) {
				return "string" == typeof t ? this._panes[t] : t;
			},
			getPanes: function () {
				return this._panes;
			},
			getContainer: function () {
				return this._container;
			},
			getZoomScale: function (t, i) {
				var e = this.options.crs;
				return (i = void 0 === i ? this._zoom : i), e.scale(t) / e.scale(i);
			},
			getScaleZoom: function (t, i) {
				var e = this.options.crs;
				i = void 0 === i ? this._zoom : i;
				var n = e.zoom(t * e.scale(i));
				return isNaN(n) ? 1 / 0 : n;
			},
			project: function (t, i) {
				return (i = void 0 === i ? this._zoom : i), this.options.crs.latLngToPoint(C(t), i);
			},
			unproject: function (t, i) {
				return (i = void 0 === i ? this._zoom : i), this.options.crs.pointToLatLng(w(t), i);
			},
			layerPointToLatLng: function (t) {
				var i = w(t).add(this.getPixelOrigin());
				return this.unproject(i);
			},
			latLngToLayerPoint: function (t) {
				return this.project(C(t))._round()._subtract(this.getPixelOrigin());
			},
			wrapLatLng: function (t) {
				return this.options.crs.wrapLatLng(C(t));
			},
			wrapLatLngBounds: function (t) {
				return this.options.crs.wrapLatLngBounds(z(t));
			},
			distance: function (t, i) {
				return this.options.crs.distance(C(t), C(i));
			},
			containerPointToLayerPoint: function (t) {
				return w(t).subtract(this._getMapPanePos());
			},
			layerPointToContainerPoint: function (t) {
				return w(t).add(this._getMapPanePos());
			},
			containerPointToLatLng: function (t) {
				var i = this.containerPointToLayerPoint(w(t));
				return this.layerPointToLatLng(i);
			},
			latLngToContainerPoint: function (t) {
				return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)));
			},
			mouseEventToContainerPoint: function (t) {
				return bt(t, this._container);
			},
			mouseEventToLayerPoint: function (t) {
				return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
			},
			mouseEventToLatLng: function (t) {
				return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
			},
			_initContainer: function (t) {
				var i = (this._container = V(t));
				if (!i) throw new Error("Map container not found.");
				if (i._leaflet_id) throw new Error("Map container is already initialized.");
				mt(i, "scroll", this._onScroll, this), (this._containerId = n(i));
			},
			_initLayout: function () {
				var t = this._container;
				(this._fadeAnimated = this.options.fadeAnimation && ji),
					Q(t, "leaflet-container" + (qi ? " leaflet-touch" : "") + (Yi ? " leaflet-retina" : "") + (Li ? " leaflet-oldie" : "") + (Ai ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
				var i = q(t, "position");
				"absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
			},
			_initPanes: function () {
				var t = (this._panes = {});
				(this._paneRenderers = {}),
					(this._mapPane = this.createPane("mapPane", this._container)),
					at(this._mapPane, new x(0, 0)),
					this.createPane("tilePane"),
					this.createPane("shadowPane"),
					this.createPane("overlayPane"),
					this.createPane("markerPane"),
					this.createPane("tooltipPane"),
					this.createPane("popupPane"),
					this.options.markerZoomAnimation || (Q(t.markerPane, "leaflet-zoom-hide"), Q(t.shadowPane, "leaflet-zoom-hide"));
			},
			_resetView: function (t, i) {
				at(this._mapPane, new x(0, 0));
				var e = !this._loaded;
				(this._loaded = !0), (i = this._limitZoom(i)), this.fire("viewprereset");
				var n = this._zoom !== i;
				this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load");
			},
			_moveStart: function (t, i) {
				return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
			},
			_move: function (t, i, e) {
				void 0 === i && (i = this._zoom);
				var n = this._zoom !== i;
				return (this._zoom = i), (this._lastCenter = t), (this._pixelOrigin = this._getNewPixelOrigin(t)), (n || (e && e.pinch)) && this.fire("zoom", e), this.fire("move", e);
			},
			_moveEnd: function (t) {
				return t && this.fire("zoomend"), this.fire("moveend");
			},
			_stop: function () {
				return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
			},
			_rawPanBy: function (t) {
				at(this._mapPane, this._getMapPanePos().subtract(t));
			},
			_getZoomSpan: function () {
				return this.getMaxZoom() - this.getMinZoom();
			},
			_panInsideMaxBounds: function () {
				this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
			},
			_checkIfLoaded: function () {
				if (!this._loaded) throw new Error("Set map center and zoom first.");
			},
			_initEvents: function (t) {
				(this._targets = {}), (this._targets[n(this._container)] = this);
				var i = t ? ft : mt;
				i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this),
					this.options.trackResize && i(window, "resize", this._onResize, this),
					ji && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
			},
			_onResize: function () {
				g(this._resizeRequest),
					(this._resizeRequest = f(function () {
						this.invalidateSize({ debounceMoveend: !0 });
					}, this));
			},
			_onScroll: function () {
				(this._container.scrollTop = 0), (this._container.scrollLeft = 0);
			},
			_onMoveEnd: function () {
				var t = this._getMapPanePos();
				Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
			},
			_findEventTargets: function (t, i) {
				for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
					if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
						a = !0;
						break;
					}
					if (e && e.listens(i, !0)) {
						if (s && !Ct(r, t)) break;
						if ((o.push(e), s)) break;
					}
					if (r === this._container) break;
					r = r.parentNode;
				}
				return o.length || a || s || !Ct(r, t) || (o = [this]), o;
			},
			_handleDOMEvent: function (t) {
				if (this._loaded && !Mt(t)) {
					var i = t.type;
					("mousedown" !== i && "keypress" !== i) || ct(t.target || t.srcElement), this._fireDOMEvent(t, i);
				}
			},
			_mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
			_fireDOMEvent: function (t, e, n) {
				if ("click" === t.type) {
					var o = i({}, t);
					(o.type = "preclick"), this._fireDOMEvent(o, o.type, n);
				}
				if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
					var s = n[0];
					"contextmenu" === e && s.listens(e, !0) && Pt(t);
					var r = { originalEvent: t };
					if ("keypress" !== t.type) {
						var a = s.getLatLng && (!s._radius || s._radius <= 10);
						(r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t)),
							(r.layerPoint = this.containerPointToLayerPoint(r.containerPoint)),
							(r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint));
					}
					for (var h = 0; h < n.length; h++) if ((n[h].fire(e, r, !0), r.originalEvent._stopped || (!1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)))) return;
				}
			},
			_draggableMoved: function (t) {
				return ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
			},
			_clearHandlers: function () {
				for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable();
			},
			whenReady: function (t, i) {
				return this._loaded ? t.call(i || this, { target: this }) : this.on("load", t, i), this;
			},
			_getMapPanePos: function () {
				return ht(this._mapPane) || new x(0, 0);
			},
			_moved: function () {
				var t = this._getMapPanePos();
				return t && !t.equals([0, 0]);
			},
			_getTopLeftPoint: function (t, i) {
				return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
			},
			_getNewPixelOrigin: function (t, i) {
				var e = this.getSize()._divideBy(2);
				return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
			},
			_latLngToNewLayerPoint: function (t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return this.project(t, i)._subtract(n);
			},
			_latLngBoundsToNewLayerBounds: function (t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]);
			},
			_getCenterLayerPoint: function () {
				return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
			},
			_getCenterOffset: function (t) {
				return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
			},
			_limitCenter: function (t, i, e) {
				if (!e) return t;
				var n = this.project(t, i),
					o = this.getSize().divideBy(2),
					s = new P(n.subtract(o), n.add(o)),
					r = this._getBoundsOffset(s, e, i);
				return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
			},
			_limitOffset: function (t, i) {
				if (!i) return t;
				var e = this.getPixelBounds(),
					n = new P(e.min.add(t), e.max.add(t));
				return t.add(this._getBoundsOffset(n, i));
			},
			_getBoundsOffset: function (t, i, e) {
				var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
					o = n.min.subtract(t.min),
					s = n.max.subtract(t.max);
				return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
			},
			_rebound: function (t, i) {
				return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
			},
			_limitZoom: function (t) {
				var i = this.getMinZoom(),
					e = this.getMaxZoom(),
					n = ji ? this.options.zoomSnap : 1;
				return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
			},
			_onPanTransitionStep: function () {
				this.fire("move");
			},
			_onPanTransitionEnd: function () {
				tt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
			},
			_tryAnimatedPan: function (t, i) {
				var e = this._getCenterOffset(t)._trunc();
				return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0);
			},
			_createAnimProxy: function () {
				var t = (this._proxy = G("div", "leaflet-proxy leaflet-zoom-animated"));
				this._panes.mapPane.appendChild(t),
					this.on(
						"zoomanim",
						function (t) {
							var i = ce,
								e = this._proxy.style[i];
							rt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
						},
						this
					),
					this.on(
						"load moveend",
						function () {
							var t = this.getCenter(),
								i = this.getZoom();
							rt(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
						},
						this
					),
					this._on("unload", this._destroyAnimProxy, this);
			},
			_destroyAnimProxy: function () {
				K(this._proxy), delete this._proxy;
			},
			_catchTransitionEnd: function (t) {
				this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
			},
			_nothingToAnimate: function () {
				return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
			},
			_tryAnimatedZoom: function (t, i, e) {
				if (this._animatingZoom) return !0;
				if (((e = e || {}), !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)) return !1;
				var n = this.getZoomScale(i),
					o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
				return (
					!(!0 !== e.animate && !this.getSize().contains(o)) &&
					(f(function () {
						this._moveStart(!0, !1)._animateZoom(t, i, !0);
					}, this),
						!0)
				);
			},
			_animateZoom: function (t, i, n, o) {
				this._mapPane &&
					(n && ((this._animatingZoom = !0), (this._animateToCenter = t), (this._animateToZoom = i), Q(this._mapPane, "leaflet-zoom-anim")),
						this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }),
						setTimeout(e(this._onZoomTransitionEnd, this), 250));
			},
			_onZoomTransitionEnd: function () {
				this._animatingZoom &&
					(this._mapPane && tt(this._mapPane, "leaflet-zoom-anim"),
						(this._animatingZoom = !1),
						this._move(this._animateToCenter, this._animateToZoom),
						f(function () {
							this._moveEnd(!0);
						}, this));
			},
		}),
		Te = v.extend({
			options: { position: "topright" },
			initialize: function (t) {
				l(this, t);
			},
			getPosition: function () {
				return this.options.position;
			},
			setPosition: function (t) {
				var i = this._map;
				return i && i.removeControl(this), (this.options.position = t), i && i.addControl(this), this;
			},
			getContainer: function () {
				return this._container;
			},
			addTo: function (t) {
				this.remove(), (this._map = t);
				var i = (this._container = this.onAdd(t)),
					e = this.getPosition(),
					n = t._controlCorners[e];
				return Q(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this;
			},
			remove: function () {
				return this._map ? (K(this._container), this.onRemove && this.onRemove(this._map), (this._map = null), this) : this;
			},
			_refocusOnMap: function (t) {
				this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
			},
		}),
		ze = function (t) {
			return new Te(t);
		};
	be.include({
		addControl: function (t) {
			return t.addTo(this), this;
		},
		removeControl: function (t) {
			return t.remove(), this;
		},
		_initControlPos: function () {
			function t(t, o) {
				var s = e + t + " " + e + o;
				i[t + o] = G("div", s, n);
			}
			var i = (this._controlCorners = {}),
				e = "leaflet-",
				n = (this._controlContainer = G("div", e + "control-container", this._container));
			t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
		},
		_clearControlPos: function () {
			for (var t in this._controlCorners) K(this._controlCorners[t]);
			K(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
		},
	});
	var Me = Te.extend({
		options: {
			collapsed: !0,
			position: "topright",
			autoZIndex: !0,
			hideSingleBase: !1,
			sortLayers: !1,
			sortFunction: function (t, i, e, n) {
				return e < n ? -1 : n < e ? 1 : 0;
			},
		},
		initialize: function (t, i, e) {
			l(this, e), (this._layerControlInputs = []), (this._layers = []), (this._lastZIndex = 0), (this._handlingClick = !1);
			for (var n in t) this._addLayer(t[n], n);
			for (n in i) this._addLayer(i[n], n, !0);
		},
		onAdd: function (t) {
			this._initLayout(), this._update(), (this._map = t), t.on("zoomend", this._checkDisabledLayers, this);
			for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
			return this._container;
		},
		addTo: function (t) {
			return Te.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
		},
		onRemove: function () {
			this._map.off("zoomend", this._checkDisabledLayers, this);
			for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
		},
		addBaseLayer: function (t, i) {
			return this._addLayer(t, i), this._map ? this._update() : this;
		},
		addOverlay: function (t, i) {
			return this._addLayer(t, i, !0), this._map ? this._update() : this;
		},
		removeLayer: function (t) {
			t.off("add remove", this._onLayerChange, this);
			var i = this._getLayer(n(t));
			return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this;
		},
		expand: function () {
			Q(this._container, "leaflet-control-layers-expanded"), (this._form.style.height = null);
			var t = this._map.getSize().y - (this._container.offsetTop + 50);
			return t < this._form.clientHeight ? (Q(this._form, "leaflet-control-layers-scrollbar"), (this._form.style.height = t + "px")) : tt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
		},
		collapse: function () {
			return tt(this._container, "leaflet-control-layers-expanded"), this;
		},
		_initLayout: function () {
			var t = "leaflet-control-layers",
				i = (this._container = G("div", t)),
				e = this.options.collapsed;
			i.setAttribute("aria-haspopup", !0), wt(i), xt(i);
			var n = (this._form = G("form", t + "-list"));
			e && (this._map.on("click", this.collapse, this), zi || mt(i, { mouseenter: this.expand, mouseleave: this.collapse }, this));
			var o = (this._layersLink = G("a", t + "-toggle", i));
			(o.href = "#"),
				(o.title = "Layers"),
				qi ? (mt(o, "click", Lt), mt(o, "click", this.expand, this)) : mt(o, "focus", this.expand, this),
				e || this.expand(),
				(this._baseLayersList = G("div", t + "-base", n)),
				(this._separator = G("div", t + "-separator", n)),
				(this._overlaysList = G("div", t + "-overlays", n)),
				i.appendChild(n);
		},
		_getLayer: function (t) {
			for (var i = 0; i < this._layers.length; i++) if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i];
		},
		_addLayer: function (t, i, n) {
			this._map && t.on("add remove", this._onLayerChange, this),
				this._layers.push({ layer: t, name: i, overlay: n }),
				this.options.sortLayers &&
				this._layers.sort(
					e(function (t, i) {
						return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
					}, this)
				),
				this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
				this._expandIfNotCollapsed();
		},
		_update: function () {
			if (!this._container) return this;
			Y(this._baseLayersList), Y(this._overlaysList), (this._layerControlInputs = []);
			var t,
				i,
				e,
				n,
				o = 0;
			for (e = 0; e < this._layers.length; e++) (n = this._layers[e]), this._addItem(n), (i = i || n.overlay), (t = t || !n.overlay), (o += n.overlay ? 0 : 1);
			return this.options.hideSingleBase && ((t = t && o > 1), (this._baseLayersList.style.display = t ? "" : "none")), (this._separator.style.display = i && t ? "" : "none"), this;
		},
		_onLayerChange: function (t) {
			this._handlingClick || this._update();
			var i = this._getLayer(n(t.target)),
				e = i.overlay ? ("add" === t.type ? "overlayadd" : "overlayremove") : "add" === t.type ? "baselayerchange" : null;
			e && this._map.fire(e, i);
		},
		_createRadioElement: function (t, i) {
			var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
				n = document.createElement("div");
			return (n.innerHTML = e), n.firstChild;
		},
		_addItem: function (t) {
			var i,
				e = document.createElement("label"),
				o = this._map.hasLayer(t.layer);
			t.overlay ? (((i = document.createElement("input")).type = "checkbox"), (i.className = "leaflet-control-layers-selector"), (i.defaultChecked = o)) : (i = this._createRadioElement("leaflet-base-layers", o)),
				this._layerControlInputs.push(i),
				(i.layerId = n(t.layer)),
				mt(i, "click", this._onInputClick, this);
			var s = document.createElement("span");
			s.innerHTML = " " + t.name;
			var r = document.createElement("div");
			return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e;
		},
		_onInputClick: function () {
			var t,
				i,
				e = this._layerControlInputs,
				n = [],
				o = [];
			this._handlingClick = !0;
			for (var s = e.length - 1; s >= 0; s--) (t = e[s]), (i = this._getLayer(t.layerId).layer), t.checked ? n.push(i) : t.checked || o.push(i);
			for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
			for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
			(this._handlingClick = !1), this._refocusOnMap();
		},
		_checkDisabledLayers: function () {
			for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--)
				(t = e[o]), (i = this._getLayer(t.layerId).layer), (t.disabled = (void 0 !== i.options.minZoom && n < i.options.minZoom) || (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
		},
		_expandIfNotCollapsed: function () {
			return this._map && !this.options.collapsed && this.expand(), this;
		},
		_expand: function () {
			return this.expand();
		},
		_collapse: function () {
			return this.collapse();
		},
	}),
		Ce = Te.extend({
			options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "&#x2212;", zoomOutTitle: "Zoom out" },
			onAdd: function (t) {
				var i = "leaflet-control-zoom",
					e = G("div", i + " leaflet-bar"),
					n = this.options;
				return (
					(this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn)),
					(this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut)),
					this._updateDisabled(),
					t.on("zoomend zoomlevelschange", this._updateDisabled, this),
					e
				);
			},
			onRemove: function (t) {
				t.off("zoomend zoomlevelschange", this._updateDisabled, this);
			},
			disable: function () {
				return (this._disabled = !0), this._updateDisabled(), this;
			},
			enable: function () {
				return (this._disabled = !1), this._updateDisabled(), this;
			},
			_zoomIn: function (t) {
				!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
			},
			_zoomOut: function (t) {
				!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
			},
			_createButton: function (t, i, e, n, o) {
				var s = G("a", e, n);
				return (s.innerHTML = t), (s.href = "#"), (s.title = i), s.setAttribute("role", "button"), s.setAttribute("aria-label", i), wt(s), mt(s, "click", Lt), mt(s, "click", o, this), mt(s, "click", this._refocusOnMap, this), s;
			},
			_updateDisabled: function () {
				var t = this._map,
					i = "leaflet-disabled";
				tt(this._zoomInButton, i), tt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && Q(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && Q(this._zoomInButton, i);
			},
		});
	be.mergeOptions({ zoomControl: !0 }),
		be.addInitHook(function () {
			this.options.zoomControl && ((this.zoomControl = new Ce()), this.addControl(this.zoomControl));
		});
	var Se = Te.extend({
		options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 },
		onAdd: function (t) {
			var i = G("div", "leaflet-control-scale"),
				e = this.options;
			return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
		},
		onRemove: function (t) {
			t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
		},
		_addScales: function (t, i, e) {
			t.metric && (this._mScale = G("div", i, e)), t.imperial && (this._iScale = G("div", i, e));
		},
		_update: function () {
			var t = this._map,
				i = t.getSize().y / 2,
				e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
			this._updateScales(e);
		},
		_updateScales: function (t) {
			this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
		},
		_updateMetric: function (t) {
			var i = this._getRoundNum(t),
				e = i < 1e3 ? i + " m" : i / 1e3 + " km";
			this._updateScale(this._mScale, e, i / t);
		},
		_updateImperial: function (t) {
			var i,
				e,
				n,
				o = 3.2808399 * t;
			o > 5280 ? ((i = o / 5280), (e = this._getRoundNum(i)), this._updateScale(this._iScale, e + " mi", e / i)) : ((n = this._getRoundNum(o)), this._updateScale(this._iScale, n + " ft", n / o));
		},
		_updateScale: function (t, i, e) {
			(t.style.width = Math.round(this.options.maxWidth * e) + "px"), (t.innerHTML = i);
		},
		_getRoundNum: function (t) {
			var i = Math.pow(10, (Math.floor(t) + "").length - 1),
				e = t / i;
			return (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1), i * e;
		},
	}),
		Ze = Te.extend({
			options: { position: "bottomright", prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' },
			initialize: function (t) {
				l(this, t), (this._attributions = {});
			},
			onAdd: function (t) {
				(t.attributionControl = this), (this._container = G("div", "leaflet-control-attribution")), wt(this._container);
				for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
				return this._update(), this._container;
			},
			setPrefix: function (t) {
				return (this.options.prefix = t), this._update(), this;
			},
			addAttribution: function (t) {
				return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
			},
			removeAttribution: function (t) {
				return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
			},
			_update: function () {
				if (this._map) {
					var t = [];
					for (var i in this._attributions) this._attributions[i] && t.push(i);
					var e = [];
					this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), (this._container.innerHTML = e.join(" | "));
				}
			},
		});
	be.mergeOptions({ attributionControl: !0 }),
		be.addInitHook(function () {
			this.options.attributionControl && new Ze().addTo(this);
		});
	(Te.Layers = Me),
		(Te.Zoom = Ce),
		(Te.Scale = Se),
		(Te.Attribution = Ze),
		(ze.layers = function (t, i, e) {
			return new Me(t, i, e);
		}),
		(ze.zoom = function (t) {
			return new Ce(t);
		}),
		(ze.scale = function (t) {
			return new Se(t);
		}),
		(ze.attribution = function (t) {
			return new Ze(t);
		});
	var Ee = v.extend({
		initialize: function (t) {
			this._map = t;
		},
		enable: function () {
			return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
		},
		disable: function () {
			return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
		},
		enabled: function () {
			return !!this._enabled;
		},
	});
	Ee.addTo = function (t, i) {
		return t.addHandler(i, this), this;
	};
	var ke,
		Ae = { Events: li },
		Be = qi ? "touchstart mousedown" : "mousedown",
		Ie = { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" },
		Oe = { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" },
		Re = ci.extend({
			options: { clickTolerance: 3 },
			initialize: function (t, i, e, n) {
				l(this, n), (this._element = t), (this._dragStartTarget = i || t), (this._preventOutline = e);
			},
			enable: function () {
				this._enabled || (mt(this._dragStartTarget, Be, this._onDown, this), (this._enabled = !0));
			},
			disable: function () {
				this._enabled && (Re._dragging === this && this.finishDrag(), ft(this._dragStartTarget, Be, this._onDown, this), (this._enabled = !1), (this._moved = !1));
			},
			_onDown: function (t) {
				if (
					!t._simulated &&
					this._enabled &&
					((this._moved = !1),
						!$(this._element, "leaflet-zoom-anim") && !(Re._dragging || t.shiftKey || (1 !== t.which && 1 !== t.button && !t.touches) || ((Re._dragging = this), this._preventOutline && ct(this._element), ut(), fi(), this._moving)))
				) {
					this.fire("down");
					var i = t.touches ? t.touches[0] : t,
						e = dt(this._element);
					(this._startPoint = new x(i.clientX, i.clientY)), (this._parentScale = pt(e)), mt(document, Oe[t.type], this._onMove, this), mt(document, Ie[t.type], this._onUp, this);
				}
			},
			_onMove: function (t) {
				if (!t._simulated && this._enabled)
					if (t.touches && t.touches.length > 1) this._moved = !0;
					else {
						var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
							e = new x(i.clientX, i.clientY)._subtract(this._startPoint);
						(e.x || e.y) &&
							(Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
								((e.x /= this._parentScale.x),
									(e.y /= this._parentScale.y),
									Pt(t),
									this._moved ||
									(this.fire("dragstart"),
										(this._moved = !0),
										(this._startPos = ht(this._element).subtract(e)),
										Q(document.body, "leaflet-dragging"),
										(this._lastTarget = t.target || t.srcElement),
										window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
										Q(this._lastTarget, "leaflet-drag-target")),
									(this._newPos = this._startPos.add(e)),
									(this._moving = !0),
									g(this._animRequest),
									(this._lastEvent = t),
									(this._animRequest = f(this._updatePosition, this, !0))));
					}
			},
			_updatePosition: function () {
				var t = { originalEvent: this._lastEvent };
				this.fire("predrag", t), at(this._element, this._newPos), this.fire("drag", t);
			},
			_onUp: function (t) {
				!t._simulated && this._enabled && this.finishDrag();
			},
			finishDrag: function () {
				tt(document.body, "leaflet-dragging"), this._lastTarget && (tt(this._lastTarget, "leaflet-drag-target"), (this._lastTarget = null));
				for (var t in Oe) ft(document, Oe[t], this._onMove, this), ft(document, Ie[t], this._onUp, this);
				lt(), gi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), (this._moving = !1), (Re._dragging = !1);
			},
		}),
		Ne = (Object.freeze || Object)({
			simplify: Zt,
			pointToSegmentDistance: Et,
			closestPointOnSegment: function (t, i, e) {
				return Dt(t, i, e);
			},
			clipSegment: It,
			_getEdgeIntersection: Ot,
			_getBitCode: Rt,
			_sqClosestPointOnSegment: Dt,
			isFlat: jt,
			_flat: Wt,
		}),
		De = (Object.freeze || Object)({ clipPolygon: Ht }),
		je = {
			project: function (t) {
				return new x(t.lng, t.lat);
			},
			unproject: function (t) {
				return new M(t.y, t.x);
			},
			bounds: new P([-180, -90], [180, 90]),
		},
		We = {
			R: 6378137,
			R_MINOR: 6356752.314245179,
			bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
			project: function (t) {
				var i = Math.PI / 180,
					e = this.R,
					n = t.lat * i,
					o = this.R_MINOR / e,
					s = Math.sqrt(1 - o * o),
					r = s * Math.sin(n),
					a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
				return (n = -e * Math.log(Math.max(a, 1e-10))), new x(t.lng * i * e, n);
			},
			unproject: function (t) {
				for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = 0.1; h < 15 && Math.abs(u) > 1e-7; h++)
					(i = s * Math.sin(a)), (i = Math.pow((1 - i) / (1 + i), s / 2)), (a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a);
				return new M(a * e, (t.x * e) / n);
			},
		},
		He = (Object.freeze || Object)({ LonLat: je, Mercator: We, SphericalMercator: mi }),
		Fe = i({}, pi, {
			code: "EPSG:3395",
			projection: We,
			transformation: (function () {
				var t = 0.5 / (Math.PI * We.R);
				return Z(t, 0.5, -t, 0.5);
			})(),
		}),
		Ue = i({}, pi, { code: "EPSG:4326", projection: je, transformation: Z(1 / 180, 1, -1 / 180, 0.5) }),
		Ve = i({}, di, {
			projection: je,
			transformation: Z(1, 0, -1, 0),
			scale: function (t) {
				return Math.pow(2, t);
			},
			zoom: function (t) {
				return Math.log(t) / Math.LN2;
			},
			distance: function (t, i) {
				var e = i.lng - t.lng,
					n = i.lat - t.lat;
				return Math.sqrt(e * e + n * n);
			},
			infinite: !0,
		});
	(di.Earth = pi), (di.EPSG3395 = Fe), (di.EPSG3857 = yi), (di.EPSG900913 = xi), (di.EPSG4326 = Ue), (di.Simple = Ve);
	var qe = ci.extend({
		options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 },
		addTo: function (t) {
			return t.addLayer(this), this;
		},
		remove: function () {
			return this.removeFrom(this._map || this._mapToAdd);
		},
		removeFrom: function (t) {
			return t && t.removeLayer(this), this;
		},
		getPane: function (t) {
			return this._map.getPane(t ? this.options[t] || t : this.options.pane);
		},
		addInteractiveTarget: function (t) {
			return (this._map._targets[n(t)] = this), this;
		},
		removeInteractiveTarget: function (t) {
			return delete this._map._targets[n(t)], this;
		},
		getAttribution: function () {
			return this.options.attribution;
		},
		_layerAdd: function (t) {
			var i = t.target;
			if (i.hasLayer(this)) {
				if (((this._map = i), (this._zoomAnimated = i._zoomAnimated), this.getEvents)) {
					var e = this.getEvents();
					i.on(e, this),
						this.once(
							"remove",
							function () {
								i.off(e, this);
							},
							this
						);
				}
				this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", { layer: this });
			}
		},
	});
	be.include({
		addLayer: function (t) {
			if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
			var i = n(t);
			return this._layers[i] ? this : ((this._layers[i] = t), (t._mapToAdd = this), t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
		},
		removeLayer: function (t) {
			var i = n(t);
			return this._layers[i]
				? (this._loaded && t.onRemove(this),
					t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
					delete this._layers[i],
					this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")),
					(t._map = t._mapToAdd = null),
					this)
				: this;
		},
		hasLayer: function (t) {
			return !!t && n(t) in this._layers;
		},
		eachLayer: function (t, i) {
			for (var e in this._layers) t.call(i, this._layers[e]);
			return this;
		},
		_addLayers: function (t) {
			for (var i = 0, e = (t = t ? (oi(t) ? t : [t]) : []).length; i < e; i++) this.addLayer(t[i]);
		},
		_addZoomLimit: function (t) {
			(!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) || ((this._zoomBoundLayers[n(t)] = t), this._updateZoomLevels());
		},
		_removeZoomLimit: function (t) {
			var i = n(t);
			this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
		},
		_updateZoomLevels: function () {
			var t = 1 / 0,
				i = -1 / 0,
				e = this._getZoomSpan();
			for (var n in this._zoomBoundLayers) {
				var o = this._zoomBoundLayers[n].options;
				(t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)), (i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom));
			}
			(this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
				(this._layersMinZoom = t === 1 / 0 ? void 0 : t),
				e !== this._getZoomSpan() && this.fire("zoomlevelschange"),
				void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
				void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
		},
	});
	var Ge = qe.extend({
		initialize: function (t, i) {
			l(this, i), (this._layers = {});
			var e, n;
			if (t) for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
		},
		addLayer: function (t) {
			var i = this.getLayerId(t);
			return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
		},
		removeLayer: function (t) {
			var i = t in this._layers ? t : this.getLayerId(t);
			return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this;
		},
		hasLayer: function (t) {
			return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
		},
		clearLayers: function () {
			return this.eachLayer(this.removeLayer, this);
		},
		invoke: function (t) {
			var i,
				e,
				n = Array.prototype.slice.call(arguments, 1);
			for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
			return this;
		},
		onAdd: function (t) {
			this.eachLayer(t.addLayer, t);
		},
		onRemove: function (t) {
			this.eachLayer(t.removeLayer, t);
		},
		eachLayer: function (t, i) {
			for (var e in this._layers) t.call(i, this._layers[e]);
			return this;
		},
		getLayer: function (t) {
			return this._layers[t];
		},
		getLayers: function () {
			var t = [];
			return this.eachLayer(t.push, t), t;
		},
		setZIndex: function (t) {
			return this.invoke("setZIndex", t);
		},
		getLayerId: function (t) {
			return n(t);
		},
	}),
		Ke = Ge.extend({
			addLayer: function (t) {
				return this.hasLayer(t) ? this : (t.addEventParent(this), Ge.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
			},
			removeLayer: function (t) {
				return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ge.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
			},
			setStyle: function (t) {
				return this.invoke("setStyle", t);
			},
			bringToFront: function () {
				return this.invoke("bringToFront");
			},
			bringToBack: function () {
				return this.invoke("bringToBack");
			},
			getBounds: function () {
				var t = new T();
				for (var i in this._layers) {
					var e = this._layers[i];
					t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
				}
				return t;
			},
		}),
		Ye = v.extend({
			options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
			initialize: function (t) {
				l(this, t);
			},
			createIcon: function (t) {
				return this._createIcon("icon", t);
			},
			createShadow: function (t) {
				return this._createIcon("shadow", t);
			},
			_createIcon: function (t, i) {
				var e = this._getIconUrl(t);
				if (!e) {
					if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
					return null;
				}
				var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
				return this._setIconStyles(n, t), n;
			},
			_setIconStyles: function (t, i) {
				var e = this.options,
					n = e[i + "Size"];
				"number" == typeof n && (n = [n, n]);
				var o = w(n),
					s = w(("shadow" === i && e.shadowAnchor) || e.iconAnchor || (o && o.divideBy(2, !0)));
				(t.className = "leaflet-marker-" + i + " " + (e.className || "")), s && ((t.style.marginLeft = -s.x + "px"), (t.style.marginTop = -s.y + "px")), o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
			},
			_createImg: function (t, i) {
				return (i = i || document.createElement("img")), (i.src = t), i;
			},
			_getIconUrl: function (t) {
				return (Yi && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
			},
		}),
		Xe = Ye.extend({
			options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] },
			_getIconUrl: function (t) {
				return Xe.imagePath || (Xe.imagePath = this._detectIconPath()), (this.options.imagePath || Xe.imagePath) + Ye.prototype._getIconUrl.call(this, t);
			},
			_detectIconPath: function () {
				var t = G("div", "leaflet-default-icon-path", document.body),
					i = q(t, "background-image") || q(t, "backgroundImage");
				return document.body.removeChild(t), (i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, ""));
			},
		}),
		Je = Ee.extend({
			initialize: function (t) {
				this._marker = t;
			},
			addHooks: function () {
				var t = this._marker._icon;
				this._draggable || (this._draggable = new Re(t, t, !0)),
					this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(),
					Q(t, "leaflet-marker-draggable");
			},
			removeHooks: function () {
				this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && tt(this._marker._icon, "leaflet-marker-draggable");
			},
			moved: function () {
				return this._draggable && this._draggable._moved;
			},
			_adjustPan: function (t) {
				var i = this._marker,
					e = i._map,
					n = this._marker.options.autoPanSpeed,
					o = this._marker.options.autoPanPadding,
					s = ht(i._icon),
					r = e.getPixelBounds(),
					a = e.getPixelOrigin(),
					h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
				if (!h.contains(s)) {
					var u = w(
						(Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
						(Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
					).multiplyBy(n);
					e.panBy(u, { animate: !1 }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), at(i._icon, this._draggable._newPos), this._onDrag(t), (this._panRequest = f(this._adjustPan.bind(this, t)));
				}
			},
			_onDragStart: function () {
				(this._oldLatLng = this._marker.getLatLng()), this._marker.closePopup().fire("movestart").fire("dragstart");
			},
			_onPreDrag: function (t) {
				this._marker.options.autoPan && (g(this._panRequest), (this._panRequest = f(this._adjustPan.bind(this, t))));
			},
			_onDrag: function (t) {
				var i = this._marker,
					e = i._shadow,
					n = ht(i._icon),
					o = i._map.layerPointToLatLng(n);
				e && at(e, n), (i._latlng = o), (t.latlng = o), (t.oldLatLng = this._oldLatLng), i.fire("move", t).fire("drag", t);
			},
			_onDragEnd: function (t) {
				g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
			},
		}),
		$e = qe.extend({
			options: {
				icon: new Xe(),
				interactive: !0,
				keyboard: !0,
				title: "",
				alt: "",
				zIndexOffset: 0,
				opacity: 1,
				riseOnHover: !1,
				riseOffset: 250,
				pane: "markerPane",
				bubblingMouseEvents: !1,
				draggable: !1,
				autoPan: !1,
				autoPanPadding: [50, 50],
				autoPanSpeed: 10,
			},
			initialize: function (t, i) {
				l(this, i), (this._latlng = C(t));
			},
			onAdd: function (t) {
				(this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation), this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
			},
			onRemove: function (t) {
				this.dragging && this.dragging.enabled() && ((this.options.draggable = !0), this.dragging.removeHooks()),
					delete this.dragging,
					this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
					this._removeIcon(),
					this._removeShadow();
			},
			getEvents: function () {
				return { zoom: this.update, viewreset: this.update };
			},
			getLatLng: function () {
				return this._latlng;
			},
			setLatLng: function (t) {
				var i = this._latlng;
				return (this._latlng = C(t)), this.update(), this.fire("move", { oldLatLng: i, latlng: this._latlng });
			},
			setZIndexOffset: function (t) {
				return (this.options.zIndexOffset = t), this.update();
			},
			setIcon: function (t) {
				return (this.options.icon = t), this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
			},
			getElement: function () {
				return this._icon;
			},
			update: function () {
				if (this._icon && this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng).round();
					this._setPos(t);
				}
				return this;
			},
			_initIcon: function () {
				var t = this.options,
					i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
					e = t.icon.createIcon(this._icon),
					n = !1;
				e !== this._icon && (this._icon && this._removeIcon(), (n = !0), t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")),
					Q(e, i),
					t.keyboard && (e.tabIndex = "0"),
					(this._icon = e),
					t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex });
				var o = t.icon.createShadow(this._shadow),
					s = !1;
				o !== this._shadow && (this._removeShadow(), (s = !0)),
					o && (Q(o, i), (o.alt = "")),
					(this._shadow = o),
					t.opacity < 1 && this._updateOpacity(),
					n && this.getPane().appendChild(this._icon),
					this._initInteraction(),
					o && s && this.getPane("shadowPane").appendChild(this._shadow);
			},
			_removeIcon: function () {
				this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), K(this._icon), this.removeInteractiveTarget(this._icon), (this._icon = null);
			},
			_removeShadow: function () {
				this._shadow && K(this._shadow), (this._shadow = null);
			},
			_setPos: function (t) {
				at(this._icon, t), this._shadow && at(this._shadow, t), (this._zIndex = t.y + this.options.zIndexOffset), this._resetZIndex();
			},
			_updateZIndex: function (t) {
				this._icon.style.zIndex = this._zIndex + t;
			},
			_animateZoom: function (t) {
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
				this._setPos(i);
			},
			_initInteraction: function () {
				if (this.options.interactive && (Q(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Je)) {
					var t = this.options.draggable;
					this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()), (this.dragging = new Je(this)), t && this.dragging.enable();
				}
			},
			setOpacity: function (t) {
				return (this.options.opacity = t), this._map && this._updateOpacity(), this;
			},
			_updateOpacity: function () {
				var t = this.options.opacity;
				nt(this._icon, t), this._shadow && nt(this._shadow, t);
			},
			_bringToFront: function () {
				this._updateZIndex(this.options.riseOffset);
			},
			_resetZIndex: function () {
				this._updateZIndex(0);
			},
			_getPopupAnchor: function () {
				return this.options.icon.options.popupAnchor;
			},
			_getTooltipAnchor: function () {
				return this.options.icon.options.tooltipAnchor;
			},
		}),
		Qe = qe.extend({
			options: {
				stroke: !0,
				color: "#3388ff",
				weight: 3,
				opacity: 1,
				lineCap: "round",
				lineJoin: "round",
				dashArray: null,
				dashOffset: null,
				fill: !1,
				fillColor: null,
				fillOpacity: 0.2,
				fillRule: "evenodd",
				interactive: !0,
				bubblingMouseEvents: !0,
			},
			beforeAdd: function (t) {
				this._renderer = t.getRenderer(this);
			},
			onAdd: function () {
				this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
			},
			onRemove: function () {
				this._renderer._removePath(this);
			},
			redraw: function () {
				return this._map && this._renderer._updatePath(this), this;
			},
			setStyle: function (t) {
				return l(this, t), this._renderer && this._renderer._updateStyle(this), this;
			},
			bringToFront: function () {
				return this._renderer && this._renderer._bringToFront(this), this;
			},
			bringToBack: function () {
				return this._renderer && this._renderer._bringToBack(this), this;
			},
			getElement: function () {
				return this._path;
			},
			_reset: function () {
				this._project(), this._update();
			},
			_clickTolerance: function () {
				return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
			},
		}),
		tn = Qe.extend({
			options: { fill: !0, radius: 10 },
			initialize: function (t, i) {
				l(this, i), (this._latlng = C(t)), (this._radius = this.options.radius);
			},
			setLatLng: function (t) {
				return (this._latlng = C(t)), this.redraw(), this.fire("move", { latlng: this._latlng });
			},
			getLatLng: function () {
				return this._latlng;
			},
			setRadius: function (t) {
				return (this.options.radius = this._radius = t), this.redraw();
			},
			getRadius: function () {
				return this._radius;
			},
			setStyle: function (t) {
				var i = (t && t.radius) || this._radius;
				return Qe.prototype.setStyle.call(this, t), this.setRadius(i), this;
			},
			_project: function () {
				(this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
			},
			_updateBounds: function () {
				var t = this._radius,
					i = this._radiusY || t,
					e = this._clickTolerance(),
					n = [t + e, i + e];
				this._pxBounds = new P(this._point.subtract(n), this._point.add(n));
			},
			_update: function () {
				this._map && this._updatePath();
			},
			_updatePath: function () {
				this._renderer._updateCircle(this);
			},
			_empty: function () {
				return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
			},
			_containsPoint: function (t) {
				return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
			},
		}),
		en = tn.extend({
			initialize: function (t, e, n) {
				if (("number" == typeof e && (e = i({}, n, { radius: e })), l(this, e), (this._latlng = C(t)), isNaN(this.options.radius))) throw new Error("Circle radius cannot be NaN");
				this._mRadius = this.options.radius;
			},
			setRadius: function (t) {
				return (this._mRadius = t), this.redraw();
			},
			getRadius: function () {
				return this._mRadius;
			},
			getBounds: function () {
				var t = [this._radius, this._radiusY || this._radius];
				return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
			},
			setStyle: Qe.prototype.setStyle,
			_project: function () {
				var t = this._latlng.lng,
					i = this._latlng.lat,
					e = this._map,
					n = e.options.crs;
				if (n.distance === pi.distance) {
					var o = Math.PI / 180,
						s = this._mRadius / pi.R / o,
						r = e.project([i + s, t]),
						a = e.project([i - s, t]),
						h = r.add(a).divideBy(2),
						u = e.unproject(h).lat,
						l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
					(isNaN(l) || 0 === l) && (l = s / Math.cos((Math.PI / 180) * i)), (this._point = h.subtract(e.getPixelOrigin())), (this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x), (this._radiusY = h.y - r.y);
				} else {
					var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
					(this._point = e.latLngToLayerPoint(this._latlng)), (this._radius = this._point.x - e.latLngToLayerPoint(c).x);
				}
				this._updateBounds();
			},
		}),
		nn = Qe.extend({
			options: { smoothFactor: 1, noClip: !1 },
			initialize: function (t, i) {
				l(this, i), this._setLatLngs(t);
			},
			getLatLngs: function () {
				return this._latlngs;
			},
			setLatLngs: function (t) {
				return this._setLatLngs(t), this.redraw();
			},
			isEmpty: function () {
				return !this._latlngs.length;
			},
			closestLayerPoint: function (t) {
				for (var i, e, n = 1 / 0, o = null, s = Dt, r = 0, a = this._parts.length; r < a; r++)
					for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
						var c = s(t, (i = h[u - 1]), (e = h[u]), !0);
						c < n && ((n = c), (o = s(t, i, e)));
					}
				return o && (o.distance = Math.sqrt(n)), o;
			},
			getCenter: function () {
				if (!this._map) throw new Error("Must add layer to map before using getCenter()");
				var t,
					i,
					e,
					n,
					o,
					s,
					r,
					a = this._rings[0],
					h = a.length;
				if (!h) return null;
				for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
				if (0 === i) return this._map.layerPointToLatLng(a[0]);
				for (t = 0, n = 0; t < h - 1; t++) if (((o = a[t]), (s = a[t + 1]), (e = o.distanceTo(s)), (n += e) > i)) return (r = (n - i) / e), this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
			},
			getBounds: function () {
				return this._bounds;
			},
			addLatLng: function (t, i) {
				return (i = i || this._defaultShape()), (t = C(t)), i.push(t), this._bounds.extend(t), this.redraw();
			},
			_setLatLngs: function (t) {
				(this._bounds = new T()), (this._latlngs = this._convertLatLngs(t));
			},
			_defaultShape: function () {
				return jt(this._latlngs) ? this._latlngs : this._latlngs[0];
			},
			_convertLatLngs: function (t) {
				for (var i = [], e = jt(t), n = 0, o = t.length; n < o; n++) e ? ((i[n] = C(t[n])), this._bounds.extend(i[n])) : (i[n] = this._convertLatLngs(t[n]));
				return i;
			},
			_project: function () {
				var t = new P();
				(this._rings = []), this._projectLatlngs(this._latlngs, this._rings, t);
				var i = this._clickTolerance(),
					e = new x(i, i);
				this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), (this._pxBounds = t));
			},
			_projectLatlngs: function (t, i, e) {
				var n,
					o,
					s = t[0] instanceof M,
					r = t.length;
				if (s) {
					for (o = [], n = 0; n < r; n++) (o[n] = this._map.latLngToLayerPoint(t[n])), e.extend(o[n]);
					i.push(o);
				} else for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e);
			},
			_clipPoints: function () {
				var t = this._renderer._bounds;
				if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
					if (this.options.noClip) this._parts = this._rings;
					else {
						var i,
							e,
							n,
							o,
							s,
							r,
							a,
							h = this._parts;
						for (i = 0, n = 0, o = this._rings.length; i < o; i++)
							for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++) (r = It(a[e], a[e + 1], t, e, !0)) && ((h[n] = h[n] || []), h[n].push(r[0]), (r[1] === a[e + 1] && e !== s - 2) || (h[n].push(r[1]), n++));
					}
			},
			_simplifyPoints: function () {
				for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Zt(t[e], i);
			},
			_update: function () {
				this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
			},
			_updatePath: function () {
				this._renderer._updatePoly(this);
			},
			_containsPoint: function (t, i) {
				var e,
					n,
					o,
					s,
					r,
					a,
					h = this._clickTolerance();
				if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
				for (e = 0, s = this._parts.length; e < s; e++) for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++) if ((i || 0 !== n) && Et(t, a[o], a[n]) <= h) return !0;
				return !1;
			},
		});
	nn._flat = Wt;
	var on = nn.extend({
		options: { fill: !0 },
		isEmpty: function () {
			return !this._latlngs.length || !this._latlngs[0].length;
		},
		getCenter: function () {
			if (!this._map) throw new Error("Must add layer to map before using getCenter()");
			var t,
				i,
				e,
				n,
				o,
				s,
				r,
				a,
				h,
				u = this._rings[0],
				l = u.length;
			if (!l) return null;
			for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) (e = u[t]), (n = u[i]), (o = e.y * n.x - n.y * e.x), (r += (e.x + n.x) * o), (a += (e.y + n.y) * o), (s += 3 * o);
			return (h = 0 === s ? u[0] : [r / s, a / s]), this._map.layerPointToLatLng(h);
		},
		_convertLatLngs: function (t) {
			var i = nn.prototype._convertLatLngs.call(this, t),
				e = i.length;
			return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i;
		},
		_setLatLngs: function (t) {
			nn.prototype._setLatLngs.call(this, t), jt(this._latlngs) && (this._latlngs = [this._latlngs]);
		},
		_defaultShape: function () {
			return jt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
		},
		_clipPoints: function () {
			var t = this._renderer._bounds,
				i = this.options.weight,
				e = new x(i, i);
			if (((t = new P(t.min.subtract(e), t.max.add(e))), (this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
				if (this.options.noClip) this._parts = this._rings;
				else for (var n, o = 0, s = this._rings.length; o < s; o++) (n = Ht(this._rings[o], t, !0)).length && this._parts.push(n);
		},
		_updatePath: function () {
			this._renderer._updatePoly(this, !0);
		},
		_containsPoint: function (t) {
			var i,
				e,
				n,
				o,
				s,
				r,
				a,
				h,
				u = !1;
			if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
			for (o = 0, a = this._parts.length; o < a; o++)
				for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) (e = i[s]), (n = i[r]), e.y > t.y != n.y > t.y && t.x < ((n.x - e.x) * (t.y - e.y)) / (n.y - e.y) + e.x && (u = !u);
			return u || nn.prototype._containsPoint.call(this, t, !0);
		},
	}),
		sn = Ke.extend({
			initialize: function (t, i) {
				l(this, i), (this._layers = {}), t && this.addData(t);
			},
			addData: function (t) {
				var i,
					e,
					n,
					o = oi(t) ? t : t.features;
				if (o) {
					for (i = 0, e = o.length; i < e; i++) ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
					return this;
				}
				var s = this.options;
				if (s.filter && !s.filter(t)) return this;
				var r = Ft(t, s);
				return r ? ((r.feature = Yt(t)), (r.defaultOptions = r.options), this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
			},
			resetStyle: function (t) {
				return (t.options = i({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this;
			},
			setStyle: function (t) {
				return this.eachLayer(function (i) {
					this._setLayerStyle(i, t);
				}, this);
			},
			_setLayerStyle: function (t, i) {
				"function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i);
			},
		}),
		rn = {
			toGeoJSON: function (t) {
				return Kt(this, { type: "Point", coordinates: qt(this.getLatLng(), t) });
			},
		};
	$e.include(rn),
		en.include(rn),
		tn.include(rn),
		nn.include({
			toGeoJSON: function (t) {
				var i = !jt(this._latlngs),
					e = Gt(this._latlngs, i ? 1 : 0, !1, t);
				return Kt(this, { type: (i ? "Multi" : "") + "LineString", coordinates: e });
			},
		}),
		on.include({
			toGeoJSON: function (t) {
				var i = !jt(this._latlngs),
					e = i && !jt(this._latlngs[0]),
					n = Gt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
				return i || (n = [n]), Kt(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n });
			},
		}),
		Ge.include({
			toMultiPoint: function (t) {
				var i = [];
				return (
					this.eachLayer(function (e) {
						i.push(e.toGeoJSON(t).geometry.coordinates);
					}),
					Kt(this, { type: "MultiPoint", coordinates: i })
				);
			},
			toGeoJSON: function (t) {
				var i = this.feature && this.feature.geometry && this.feature.geometry.type;
				if ("MultiPoint" === i) return this.toMultiPoint(t);
				var e = "GeometryCollection" === i,
					n = [];
				return (
					this.eachLayer(function (i) {
						if (i.toGeoJSON) {
							var o = i.toGeoJSON(t);
							if (e) n.push(o.geometry);
							else {
								var s = Yt(o);
								"FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s);
							}
						}
					}),
					e ? Kt(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n }
				);
			},
		});
	var an = Xt,
		hn = qe.extend({
			options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" },
			initialize: function (t, i, e) {
				(this._url = t), (this._bounds = z(i)), l(this, e);
			},
			onAdd: function () {
				this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
					this.options.interactive && (Q(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)),
					this.getPane().appendChild(this._image),
					this._reset();
			},
			onRemove: function () {
				K(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
			},
			setOpacity: function (t) {
				return (this.options.opacity = t), this._image && this._updateOpacity(), this;
			},
			setStyle: function (t) {
				return t.opacity && this.setOpacity(t.opacity), this;
			},
			bringToFront: function () {
				return this._map && X(this._image), this;
			},
			bringToBack: function () {
				return this._map && J(this._image), this;
			},
			setUrl: function (t) {
				return (this._url = t), this._image && (this._image.src = t), this;
			},
			setBounds: function (t) {
				return (this._bounds = z(t)), this._map && this._reset(), this;
			},
			getEvents: function () {
				var t = { zoom: this._reset, viewreset: this._reset };
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
			},
			setZIndex: function (t) {
				return (this.options.zIndex = t), this._updateZIndex(), this;
			},
			getBounds: function () {
				return this._bounds;
			},
			getElement: function () {
				return this._image;
			},
			_initImage: function () {
				var t = "IMG" === this._url.tagName,
					i = (this._image = t ? this._url : G("img"));
				Q(i, "leaflet-image-layer"),
					this._zoomAnimated && Q(i, "leaflet-zoom-animated"),
					this.options.className && Q(i, this.options.className),
					(i.onselectstart = r),
					(i.onmousemove = r),
					(i.onload = e(this.fire, this, "load")),
					(i.onerror = e(this._overlayOnError, this, "error")),
					(this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
					this.options.zIndex && this._updateZIndex(),
					t ? (this._url = i.src) : ((i.src = this._url), (i.alt = this.options.alt));
			},
			_animateZoom: function (t) {
				var i = this._map.getZoomScale(t.zoom),
					e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
				rt(this._image, e, i);
			},
			_reset: function () {
				var t = this._image,
					i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
					e = i.getSize();
				at(t, i.min), (t.style.width = e.x + "px"), (t.style.height = e.y + "px");
			},
			_updateOpacity: function () {
				nt(this._image, this.options.opacity);
			},
			_updateZIndex: function () {
				this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
			},
			_overlayOnError: function () {
				this.fire("error");
				var t = this.options.errorOverlayUrl;
				t && this._url !== t && ((this._url = t), (this._image.src = t));
			},
		}),
		un = hn.extend({
			options: { autoplay: !0, loop: !0 },
			_initImage: function () {
				var t = "VIDEO" === this._url.tagName,
					i = (this._image = t ? this._url : G("video"));
				if ((Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), (i.onselectstart = r), (i.onmousemove = r), (i.onloadeddata = e(this.fire, this, "load")), t)) {
					for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
					this._url = n.length > 0 ? o : [i.src];
				} else {
					oi(this._url) || (this._url = [this._url]), (i.autoplay = !!this.options.autoplay), (i.loop = !!this.options.loop);
					for (var a = 0; a < this._url.length; a++) {
						var h = G("source");
						(h.src = this._url[a]), i.appendChild(h);
					}
				}
			},
		}),
		ln = qe.extend({
			options: { offset: [0, 7], className: "", pane: "popupPane" },
			initialize: function (t, i) {
				l(this, t), (this._source = i);
			},
			onAdd: function (t) {
				(this._zoomAnimated = t._zoomAnimated),
					this._container || this._initLayout(),
					t._fadeAnimated && nt(this._container, 0),
					clearTimeout(this._removeTimeout),
					this.getPane().appendChild(this._container),
					this.update(),
					t._fadeAnimated && nt(this._container, 1),
					this.bringToFront();
			},
			onRemove: function (t) {
				t._fadeAnimated ? (nt(this._container, 0), (this._removeTimeout = setTimeout(e(K, void 0, this._container), 200))) : K(this._container);
			},
			getLatLng: function () {
				return this._latlng;
			},
			setLatLng: function (t) {
				return (this._latlng = C(t)), this._map && (this._updatePosition(), this._adjustPan()), this;
			},
			getContent: function () {
				return this._content;
			},
			setContent: function (t) {
				return (this._content = t), this.update(), this;
			},
			getElement: function () {
				return this._container;
			},
			update: function () {
				this._map && ((this._container.style.visibility = "hidden"), this._updateContent(), this._updateLayout(), this._updatePosition(), (this._container.style.visibility = ""), this._adjustPan());
			},
			getEvents: function () {
				var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
			},
			isOpen: function () {
				return !!this._map && this._map.hasLayer(this);
			},
			bringToFront: function () {
				return this._map && X(this._container), this;
			},
			bringToBack: function () {
				return this._map && J(this._container), this;
			},
			_updateContent: function () {
				if (this._content) {
					var t = this._contentNode,
						i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
					if ("string" == typeof i) t.innerHTML = i;
					else {
						for (; t.hasChildNodes();) t.removeChild(t.firstChild);
						t.appendChild(i);
					}
					this.fire("contentupdate");
				}
			},
			_updatePosition: function () {
				if (this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng),
						i = w(this.options.offset),
						e = this._getAnchor();
					this._zoomAnimated ? at(this._container, t.add(e)) : (i = i.add(t).add(e));
					var n = (this._containerBottom = -i.y),
						o = (this._containerLeft = -Math.round(this._containerWidth / 2) + i.x);
					(this._container.style.bottom = n + "px"), (this._container.style.left = o + "px");
				}
			},
			_getAnchor: function () {
				return [0, 0];
			},
		}),
		cn = ln.extend({
			options: {
				maxWidth: 300,
				minWidth: 50,
				maxHeight: null,
				autoPan: !0,
				autoPanPaddingTopLeft: null,
				autoPanPaddingBottomRight: null,
				autoPanPadding: [5, 5],
				keepInView: !1,
				closeButton: !0,
				autoClose: !0,
				closeOnEscapeKey: !0,
				className: "",
			},
			openOn: function (t) {
				return t.openPopup(this), this;
			},
			onAdd: function (t) {
				ln.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Qe || this._source.on("preclick", yt));
			},
			onRemove: function (t) {
				ln.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Qe || this._source.off("preclick", yt));
			},
			getEvents: function () {
				var t = ln.prototype.getEvents.call(this);
				return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
			},
			_close: function () {
				this._map && this._map.closePopup(this);
			},
			_initLayout: function () {
				var t = "leaflet-popup",
					i = (this._container = G("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")),
					e = (this._wrapper = G("div", t + "-content-wrapper", i));
				if (
					((this._contentNode = G("div", t + "-content", e)),
						wt(e),
						xt(this._contentNode),
						mt(e, "contextmenu", yt),
						(this._tipContainer = G("div", t + "-tip-container", i)),
						(this._tip = G("div", t + "-tip", this._tipContainer)),
						this.options.closeButton)
				) {
					var n = (this._closeButton = G("a", t + "-close-button", i));
					(n.href = "#close"), (n.innerHTML = "&#215;"), mt(n, "click", this._onCloseButtonClick, this);
				}
			},
			_updateLayout: function () {
				var t = this._contentNode,
					i = t.style;
				(i.width = ""), (i.whiteSpace = "nowrap");
				var e = t.offsetWidth;
				(e = Math.min(e, this.options.maxWidth)), (e = Math.max(e, this.options.minWidth)), (i.width = e + 1 + "px"), (i.whiteSpace = ""), (i.height = "");
				var n = t.offsetHeight,
					o = this.options.maxHeight;
				o && n > o ? ((i.height = o + "px"), Q(t, "leaflet-popup-scrolled")) : tt(t, "leaflet-popup-scrolled"), (this._containerWidth = this._container.offsetWidth);
			},
			_animateZoom: function (t) {
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
					e = this._getAnchor();
				at(this._container, i.add(e));
			},
			_adjustPan: function () {
				if (!(!this.options.autoPan || (this._map._panAnim && this._map._panAnim._inProgress))) {
					var t = this._map,
						i = parseInt(q(this._container, "marginBottom"), 10) || 0,
						e = this._container.offsetHeight + i,
						n = this._containerWidth,
						o = new x(this._containerLeft, -e - this._containerBottom);
					o._add(ht(this._container));
					var s = t.layerPointToContainerPoint(o),
						r = w(this.options.autoPanPadding),
						a = w(this.options.autoPanPaddingTopLeft || r),
						h = w(this.options.autoPanPaddingBottomRight || r),
						u = t.getSize(),
						l = 0,
						c = 0;
					s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
						s.x - l - a.x < 0 && (l = s.x - a.x),
						s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y),
						s.y - c - a.y < 0 && (c = s.y - a.y),
						(l || c) && t.fire("autopanstart").panBy([l, c]);
				}
			},
			_onCloseButtonClick: function (t) {
				this._close(), Lt(t);
			},
			_getAnchor: function () {
				return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
			},
		});
	be.mergeOptions({ closePopupOnClick: !0 }),
		be.include({
			openPopup: function (t, i, e) {
				return t instanceof cn || (t = new cn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), (this._popup = t), this.addLayer(t));
			},
			closePopup: function (t) {
				return (t && t !== this._popup) || ((t = this._popup), (this._popup = null)), t && this.removeLayer(t), this;
			},
		}),
		qe.include({
			bindPopup: function (t, i) {
				return (
					t instanceof cn ? (l(t, i), (this._popup = t), (t._source = this)) : ((this._popup && !i) || (this._popup = new cn(i, this)), this._popup.setContent(t)),
					this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !0)),
					this
				);
			},
			unbindPopup: function () {
				return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !1), (this._popup = null)), this;
			},
			openPopup: function (t, i) {
				if ((t instanceof qe || ((i = t), (t = this)), t instanceof Ke))
					for (var e in this._layers) {
						t = this._layers[e];
						break;
					}
				return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && ((this._popup._source = t), this._popup.update(), this._map.openPopup(this._popup, i)), this;
			},
			closePopup: function () {
				return this._popup && this._popup._close(), this;
			},
			togglePopup: function (t) {
				return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
			},
			isPopupOpen: function () {
				return !!this._popup && this._popup.isOpen();
			},
			setPopupContent: function (t) {
				return this._popup && this._popup.setContent(t), this;
			},
			getPopup: function () {
				return this._popup;
			},
			_openPopup: function (t) {
				var i = t.layer || t.target;
				this._popup && this._map && (Lt(t), i instanceof Qe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng));
			},
			_movePopup: function (t) {
				this._popup.setLatLng(t.latlng);
			},
			_onKeyPress: function (t) {
				13 === t.originalEvent.keyCode && this._openPopup(t);
			},
		});
	var _n = ln.extend({
		options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, interactive: !1, opacity: 0.9 },
		onAdd: function (t) {
			ln.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
		},
		onRemove: function (t) {
			ln.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && this._source.fire("tooltipclose", { tooltip: this }, !0);
		},
		getEvents: function () {
			var t = ln.prototype.getEvents.call(this);
			return qi && !this.options.permanent && (t.preclick = this._close), t;
		},
		_close: function () {
			this._map && this._map.closeTooltip(this);
		},
		_initLayout: function () {
			var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
			this._contentNode = this._container = G("div", t);
		},
		_updateLayout: function () { },
		_adjustPan: function () { },
		_setPosition: function (t) {
			var i = this._map,
				e = this._container,
				n = i.latLngToContainerPoint(i.getCenter()),
				o = i.layerPointToContainerPoint(t),
				s = this.options.direction,
				r = e.offsetWidth,
				a = e.offsetHeight,
				h = w(this.options.offset),
				u = this._getAnchor();
			"top" === s
				? (t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)))
				: "bottom" === s
					? (t = t.subtract(w(r / 2 - h.x, -h.y, !0)))
					: "center" === s
						? (t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)))
						: "right" === s || ("auto" === s && o.x < n.x)
							? ((s = "right"), (t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))))
							: ((s = "left"), (t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0)))),
				tt(e, "leaflet-tooltip-right"),
				tt(e, "leaflet-tooltip-left"),
				tt(e, "leaflet-tooltip-top"),
				tt(e, "leaflet-tooltip-bottom"),
				Q(e, "leaflet-tooltip-" + s),
				at(e, t);
		},
		_updatePosition: function () {
			var t = this._map.latLngToLayerPoint(this._latlng);
			this._setPosition(t);
		},
		setOpacity: function (t) {
			(this.options.opacity = t), this._container && nt(this._container, t);
		},
		_animateZoom: function (t) {
			var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
			this._setPosition(i);
		},
		_getAnchor: function () {
			return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
		},
	});
	be.include({
		openTooltip: function (t, i, e) {
			return t instanceof _n || (t = new _n(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t);
		},
		closeTooltip: function (t) {
			return t && this.removeLayer(t), this;
		},
	}),
		qe.include({
			bindTooltip: function (t, i) {
				return (
					t instanceof _n ? (l(t, i), (this._tooltip = t), (t._source = this)) : ((this._tooltip && !i) || (this._tooltip = new _n(i, this)), this._tooltip.setContent(t)),
					this._initTooltipInteractions(),
					this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
					this
				);
			},
			unbindTooltip: function () {
				return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)), this;
			},
			_initTooltipInteractions: function (t) {
				if (t || !this._tooltipHandlersAdded) {
					var i = t ? "off" : "on",
						e = { remove: this.closeTooltip, move: this._moveTooltip };
					this._tooltip.options.permanent
						? (e.add = this._openTooltip)
						: ((e.mouseover = this._openTooltip), (e.mouseout = this.closeTooltip), this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), qi && (e.click = this._openTooltip)),
						this[i](e),
						(this._tooltipHandlersAdded = !t);
				}
			},
			openTooltip: function (t, i) {
				if ((t instanceof qe || ((i = t), (t = this)), t instanceof Ke))
					for (var e in this._layers) {
						t = this._layers[e];
						break;
					}
				return (
					i || (i = t.getCenter ? t.getCenter() : t.getLatLng()),
					this._tooltip &&
					this._map &&
					((this._tooltip._source = t),
						this._tooltip.update(),
						this._map.openTooltip(this._tooltip, i),
						this._tooltip.options.interactive && this._tooltip._container && (Q(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))),
					this
				);
			},
			closeTooltip: function () {
				return (
					this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (tt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))),
					this
				);
			},
			toggleTooltip: function (t) {
				return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
			},
			isTooltipOpen: function () {
				return this._tooltip.isOpen();
			},
			setTooltipContent: function (t) {
				return this._tooltip && this._tooltip.setContent(t), this;
			},
			getTooltip: function () {
				return this._tooltip;
			},
			_openTooltip: function (t) {
				var i = t.layer || t.target;
				this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
			},
			_moveTooltip: function (t) {
				var i,
					e,
					n = t.latlng;
				this._tooltip.options.sticky && t.originalEvent && ((i = this._map.mouseEventToContainerPoint(t.originalEvent)), (e = this._map.containerPointToLayerPoint(i)), (n = this._map.layerPointToLatLng(e))),
					this._tooltip.setLatLng(n);
			},
		});
	var dn = Ye.extend({
		options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" },
		createIcon: function (t) {
			var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
				e = this.options;
			if (((i.innerHTML = !1 !== e.html ? e.html : ""), e.bgPos)) {
				var n = w(e.bgPos);
				i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
			}
			return this._setIconStyles(i, "icon"), i;
		},
		createShadow: function () {
			return null;
		},
	});
	Ye.Default = Xe;
	var pn = qe.extend({
		options: {
			tileSize: 256,
			opacity: 1,
			updateWhenIdle: Wi,
			updateWhenZooming: !0,
			updateInterval: 200,
			zIndex: 1,
			bounds: null,
			minZoom: 0,
			maxZoom: void 0,
			maxNativeZoom: void 0,
			minNativeZoom: void 0,
			noWrap: !1,
			pane: "tilePane",
			className: "",
			keepBuffer: 2,
		},
		initialize: function (t) {
			l(this, t);
		},
		onAdd: function () {
			this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView(), this._update();
		},
		beforeAdd: function (t) {
			t._addZoomLimit(this);
		},
		onRemove: function (t) {
			this._removeAllTiles(), K(this._container), t._removeZoomLimit(this), (this._container = null), (this._tileZoom = void 0);
		},
		bringToFront: function () {
			return this._map && (X(this._container), this._setAutoZIndex(Math.max)), this;
		},
		bringToBack: function () {
			return this._map && (J(this._container), this._setAutoZIndex(Math.min)), this;
		},
		getContainer: function () {
			return this._container;
		},
		setOpacity: function (t) {
			return (this.options.opacity = t), this._updateOpacity(), this;
		},
		setZIndex: function (t) {
			return (this.options.zIndex = t), this._updateZIndex(), this;
		},
		isLoading: function () {
			return this._loading;
		},
		redraw: function () {
			return this._map && (this._removeAllTiles(), this._update()), this;
		},
		getEvents: function () {
			var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
			return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), (t.move = this._onMove)), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
		},
		createTile: function () {
			return document.createElement("div");
		},
		getTileSize: function () {
			var t = this.options.tileSize;
			return t instanceof x ? t : new x(t, t);
		},
		_updateZIndex: function () {
			this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
		},
		_setAutoZIndex: function (t) {
			for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) (i = e[o].style.zIndex), e[o] !== this._container && i && (n = t(n, +i));
			isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
		},
		_updateOpacity: function () {
			if (this._map && !Li) {
				nt(this._container, this.options.opacity);
				var t = +new Date(),
					i = !1,
					e = !1;
				for (var n in this._tiles) {
					var o = this._tiles[n];
					if (o.current && o.loaded) {
						var s = Math.min(1, (t - o.loaded) / 200);
						nt(o.el, s), s < 1 ? (i = !0) : (o.active ? (e = !0) : this._onOpaqueTile(o), (o.active = !0));
					}
				}
				e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), (this._fadeFrame = f(this._updateOpacity, this)));
			}
		},
		_onOpaqueTile: r,
		_initContainer: function () {
			this._container || ((this._container = G("div", "leaflet-layer " + (this.options.className || ""))), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
		},
		_updateLevels: function () {
			var t = this._tileZoom,
				i = this.options.maxZoom;
			if (void 0 !== t) {
				for (var e in this._levels)
					this._levels[e].el.children.length || e === t
						? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)), this._onUpdateLevel(e))
						: (K(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
				var n = this._levels[t],
					o = this._map;
				return (
					n ||
					(((n = this._levels[t] = {}).el = G("div", "leaflet-tile-container leaflet-zoom-animated", this._container)),
						(n.el.style.zIndex = i),
						(n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
						(n.zoom = t),
						this._setZoomTransform(n, o.getCenter(), o.getZoom()),
						n.el.offsetWidth,
						this._onCreateLevel(n)),
					(this._level = n),
					n
				);
			}
		},
		_onUpdateLevel: r,
		_onRemoveLevel: r,
		_onCreateLevel: r,
		_pruneTiles: function () {
			if (this._map) {
				var t,
					i,
					e = this._map.getZoom();
				if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
				else {
					for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
					for (t in this._tiles)
						if ((i = this._tiles[t]).current && !i.active) {
							var n = i.coords;
							this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
						}
					for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
				}
			}
		},
		_removeTilesAtZoom: function (t) {
			for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i);
		},
		_removeAllTiles: function () {
			for (var t in this._tiles) this._removeTile(t);
		},
		_invalidateAll: function () {
			for (var t in this._levels) K(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
			this._removeAllTiles(), (this._tileZoom = void 0);
		},
		_retainParent: function (t, i, e, n) {
			var o = Math.floor(t / 2),
				s = Math.floor(i / 2),
				r = e - 1,
				a = new x(+o, +s);
			a.z = +r;
			var h = this._tileCoordsToKey(a),
				u = this._tiles[h];
			return u && u.active ? ((u.retain = !0), !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n));
		},
		_retainChildren: function (t, i, e, n) {
			for (var o = 2 * t; o < 2 * t + 2; o++)
				for (var s = 2 * i; s < 2 * i + 2; s++) {
					var r = new x(o, s);
					r.z = e + 1;
					var a = this._tileCoordsToKey(r),
						h = this._tiles[a];
					h && h.active ? (h.retain = !0) : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n));
				}
		},
		_resetView: function (t) {
			var i = t && (t.pinch || t.flyTo);
			this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
		},
		_animateZoom: function (t) {
			this._setView(t.center, t.zoom, !0, t.noUpdate);
		},
		_clampZoom: function (t) {
			var i = this.options;
			return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
		},
		_setView: function (t, i, e, n) {
			var o = this._clampZoom(Math.round(i));
			((void 0 !== this.options.maxZoom && o > this.options.maxZoom) || (void 0 !== this.options.minZoom && o < this.options.minZoom)) && (o = void 0);
			var s = this.options.updateWhenZooming && o !== this._tileZoom;
			(n && !s) || ((this._tileZoom = o), this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), (this._noPrune = !!e)),
				this._setZoomTransforms(t, i);
		},
		_setZoomTransforms: function (t, i) {
			for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i);
		},
		_setZoomTransform: function (t, i, e) {
			var n = this._map.getZoomScale(e, t.zoom),
				o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
			ji ? rt(t.el, o, n) : at(t.el, o);
		},
		_resetGrid: function () {
			var t = this._map,
				i = t.options.crs,
				e = (this._tileSize = this.getTileSize()),
				n = this._tileZoom,
				o = this._map.getPixelWorldBounds(this._tileZoom);
			o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
				(this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)]),
				(this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]);
		},
		_onMoveEnd: function () {
			this._map && !this._map._animatingZoom && this._update();
		},
		_getTiledPixelBounds: function (t) {
			var i = this._map,
				e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
				n = i.getZoomScale(e, this._tileZoom),
				o = i.project(t, this._tileZoom).floor(),
				s = i.getSize().divideBy(2 * n);
			return new P(o.subtract(s), o.add(s));
		},
		_update: function (t) {
			var i = this._map;
			if (i) {
				var e = this._clampZoom(i.getZoom());
				if ((void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom)) {
					var n = this._getTiledPixelBounds(t),
						o = this._pxBoundsToTileRange(n),
						s = o.getCenter(),
						r = [],
						a = this.options.keepBuffer,
						h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
					if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
					for (var u in this._tiles) {
						var l = this._tiles[u].coords;
						(l.z === this._tileZoom && h.contains(new x(l.x, l.y))) || (this._tiles[u].current = !1);
					}
					if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
					else {
						for (var c = o.min.y; c <= o.max.y; c++)
							for (var _ = o.min.x; _ <= o.max.x; _++) {
								var d = new x(_, c);
								if (((d.z = this._tileZoom), this._isValidTile(d))) {
									var p = this._tiles[this._tileCoordsToKey(d)];
									p ? (p.current = !0) : r.push(d);
								}
							}
						if (
							(r.sort(function (t, i) {
								return t.distanceTo(s) - i.distanceTo(s);
							}),
								0 !== r.length)
						) {
							this._loading || ((this._loading = !0), this.fire("loading"));
							var m = document.createDocumentFragment();
							for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
							this._level.el.appendChild(m);
						}
					}
				}
			}
		},
		_isValidTile: function (t) {
			var i = this._map.options.crs;
			if (!i.infinite) {
				var e = this._globalTileRange;
				if ((!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) || (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))) return !1;
			}
			if (!this.options.bounds) return !0;
			var n = this._tileCoordsToBounds(t);
			return z(this.options.bounds).overlaps(n);
		},
		_keyToBounds: function (t) {
			return this._tileCoordsToBounds(this._keyToTileCoords(t));
		},
		_tileCoordsToNwSe: function (t) {
			var i = this._map,
				e = this.getTileSize(),
				n = t.scaleBy(e),
				o = n.add(e);
			return [i.unproject(n, t.z), i.unproject(o, t.z)];
		},
		_tileCoordsToBounds: function (t) {
			var i = this._tileCoordsToNwSe(t),
				e = new T(i[0], i[1]);
			return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
		},
		_tileCoordsToKey: function (t) {
			return t.x + ":" + t.y + ":" + t.z;
		},
		_keyToTileCoords: function (t) {
			var i = t.split(":"),
				e = new x(+i[0], +i[1]);
			return (e.z = +i[2]), e;
		},
		_removeTile: function (t) {
			var i = this._tiles[t];
			i && (K(i.el), delete this._tiles[t], this.fire("tileunload", { tile: i.el, coords: this._keyToTileCoords(t) }));
		},
		_initTile: function (t) {
			Q(t, "leaflet-tile");
			var i = this.getTileSize();
			(t.style.width = i.x + "px"),
				(t.style.height = i.y + "px"),
				(t.onselectstart = r),
				(t.onmousemove = r),
				Li && this.options.opacity < 1 && nt(t, this.options.opacity),
				zi && !Mi && (t.style.WebkitBackfaceVisibility = "hidden");
		},
		_addTile: function (t, i) {
			var n = this._getTilePos(t),
				o = this._tileCoordsToKey(t),
				s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
			this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), at(s, n), (this._tiles[o] = { el: s, coords: t, current: !0 }), i.appendChild(s), this.fire("tileloadstart", { tile: s, coords: t });
		},
		_tileReady: function (t, i, n) {
			i && this.fire("tileerror", { error: i, tile: n, coords: t });
			var o = this._tileCoordsToKey(t);
			(n = this._tiles[o]) &&
				((n.loaded = +new Date()),
					this._map._fadeAnimated ? (nt(n.el, 0), g(this._fadeFrame), (this._fadeFrame = f(this._updateOpacity, this))) : ((n.active = !0), this._pruneTiles()),
					i || (Q(n.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: n.el, coords: t })),
					this._noTilesToLoad() && ((this._loading = !1), this.fire("load"), Li || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)));
		},
		_getTilePos: function (t) {
			return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
		},
		_wrapCoords: function (t) {
			var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
			return (i.z = t.z), i;
		},
		_pxBoundsToTileRange: function (t) {
			var i = this.getTileSize();
			return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
		},
		_noTilesToLoad: function () {
			for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
			return !0;
		},
	}),
		mn = pn.extend({
			options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1 },
			initialize: function (t, i) {
				(this._url = t),
					(i = l(this, i)).detectRetina && Yi && i.maxZoom > 0 && ((i.tileSize = Math.floor(i.tileSize / 2)), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), (i.minZoom = Math.max(0, i.minZoom))),
					"string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")),
					zi || this.on("tileunload", this._onTileRemove);
			},
			setUrl: function (t, i) {
				return (this._url = t), i || this.redraw(), this;
			},
			createTile: function (t, i) {
				var n = document.createElement("img");
				return (
					mt(n, "load", e(this._tileOnLoad, this, i, n)),
					mt(n, "error", e(this._tileOnError, this, i, n)),
					(this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
					(n.alt = ""),
					n.setAttribute("role", "presentation"),
					(n.src = this.getTileUrl(t)),
					n
				);
			},
			getTileUrl: function (t) {
				var e = { r: Yi ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
				if (this._map && !this._map.options.crs.infinite) {
					var n = this._globalTileRange.max.y - t.y;
					this.options.tms && (e.y = n), (e["-y"] = n);
				}
				return _(this._url, i(e, this.options));
			},
			_tileOnLoad: function (t, i) {
				Li ? setTimeout(e(t, this, null, i), 0) : t(null, i);
			},
			_tileOnError: function (t, i, e) {
				var n = this.options.errorTileUrl;
				n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
			},
			_onTileRemove: function (t) {
				t.tile.onload = null;
			},
			_getZoomForUrl: function () {
				var t = this._tileZoom,
					i = this.options.maxZoom,
					e = this.options.zoomReverse,
					n = this.options.zoomOffset;
				return e && (t = i - t), t + n;
			},
			_getSubdomain: function (t) {
				var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
				return this.options.subdomains[i];
			},
			_abortLoading: function () {
				var t, i;
				for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && (((i = this._tiles[t].el).onload = r), (i.onerror = r), i.complete || ((i.src = si), K(i), delete this._tiles[t]));
			},
			_removeTile: function (t) {
				var i = this._tiles[t];
				if (i) return Si || i.el.setAttribute("src", si), pn.prototype._removeTile.call(this, t);
			},
			_tileReady: function (t, i, e) {
				if (this._map && (!e || e.getAttribute("src") !== si)) return pn.prototype._tileReady.call(this, t, i, e);
			},
		}),
		fn = mn.extend({
			defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" },
			options: { crs: null, uppercase: !1 },
			initialize: function (t, e) {
				this._url = t;
				var n = i({}, this.defaultWmsParams);
				for (var o in e) o in this.options || (n[o] = e[o]);
				var s = (e = l(this, e)).detectRetina && Yi ? 2 : 1,
					r = this.getTileSize();
				(n.width = r.x * s), (n.height = r.y * s), (this.wmsParams = n);
			},
			onAdd: function (t) {
				(this._crs = this.options.crs || t.options.crs), (this._wmsVersion = parseFloat(this.wmsParams.version));
				var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
				(this.wmsParams[i] = this._crs.code), mn.prototype.onAdd.call(this, t);
			},
			getTileUrl: function (t) {
				var i = this._tileCoordsToNwSe(t),
					e = this._crs,
					n = b(e.project(i[0]), e.project(i[1])),
					o = n.min,
					s = n.max,
					r = (this._wmsVersion >= 1.3 && this._crs === Ue ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
					a = mn.prototype.getTileUrl.call(this, t);
				return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
			},
			setParams: function (t, e) {
				return i(this.wmsParams, t), e || this.redraw(), this;
			},
		});
	(mn.WMS = fn),
		(Jt.wms = function (t, i) {
			return new fn(t, i);
		});
	var gn = qe.extend({
		options: { padding: 0.1, tolerance: 0 },
		initialize: function (t) {
			l(this, t), n(this), (this._layers = this._layers || {});
		},
		onAdd: function () {
			this._container || (this._initContainer(), this._zoomAnimated && Q(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
		},
		onRemove: function () {
			this.off("update", this._updatePaths, this), this._destroyContainer();
		},
		getEvents: function () {
			var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
			return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
		},
		_onAnimZoom: function (t) {
			this._updateTransform(t.center, t.zoom);
		},
		_onZoom: function () {
			this._updateTransform(this._map.getCenter(), this._map.getZoom());
		},
		_updateTransform: function (t, i) {
			var e = this._map.getZoomScale(i, this._zoom),
				n = ht(this._container),
				o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
				s = this._map.project(this._center, i),
				r = this._map.project(t, i).subtract(s),
				a = o.multiplyBy(-e).add(n).add(o).subtract(r);
			ji ? rt(this._container, a, e) : at(this._container, a);
		},
		_reset: function () {
			this._update(), this._updateTransform(this._center, this._zoom);
			for (var t in this._layers) this._layers[t]._reset();
		},
		_onZoomEnd: function () {
			for (var t in this._layers) this._layers[t]._project();
		},
		_updatePaths: function () {
			for (var t in this._layers) this._layers[t]._update();
		},
		_update: function () {
			var t = this.options.padding,
				i = this._map.getSize(),
				e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
			(this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round())), (this._center = this._map.getCenter()), (this._zoom = this._map.getZoom());
		},
	}),
		vn = gn.extend({
			getEvents: function () {
				var t = gn.prototype.getEvents.call(this);
				return (t.viewprereset = this._onViewPreReset), t;
			},
			_onViewPreReset: function () {
				this._postponeUpdatePaths = !0;
			},
			onAdd: function () {
				gn.prototype.onAdd.call(this), this._draw();
			},
			_initContainer: function () {
				var t = (this._container = document.createElement("canvas"));
				mt(t, "mousemove", o(this._onMouseMove, 32, this), this), mt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), mt(t, "mouseout", this._handleMouseOut, this), (this._ctx = t.getContext("2d"));
			},
			_destroyContainer: function () {
				g(this._redrawRequest), delete this._ctx, K(this._container), ft(this._container), delete this._container;
			},
			_updatePaths: function () {
				if (!this._postponeUpdatePaths) {
					this._redrawBounds = null;
					for (var t in this._layers) this._layers[t]._update();
					this._redraw();
				}
			},
			_update: function () {
				if (!this._map._animatingZoom || !this._bounds) {
					(this._drawnLayers = {}), gn.prototype._update.call(this);
					var t = this._bounds,
						i = this._container,
						e = t.getSize(),
						n = Yi ? 2 : 1;
					at(i, t.min), (i.width = n * e.x), (i.height = n * e.y), (i.style.width = e.x + "px"), (i.style.height = e.y + "px"), Yi && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
				}
			},
			_reset: function () {
				gn.prototype._reset.call(this), this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
			},
			_initPath: function (t) {
				this._updateDashArray(t), (this._layers[n(t)] = t);
				var i = (t._order = { layer: t, prev: this._drawLast, next: null });
				this._drawLast && (this._drawLast.next = i), (this._drawLast = i), (this._drawFirst = this._drawFirst || this._drawLast);
			},
			_addPath: function (t) {
				this._requestRedraw(t);
			},
			_removePath: function (t) {
				var i = t._order,
					e = i.next,
					o = i.prev;
				e ? (e.prev = o) : (this._drawLast = o), o ? (o.next = e) : (this._drawFirst = e), delete this._drawnLayers[t._leaflet_id], delete t._order, delete this._layers[n(t)], this._requestRedraw(t);
			},
			_updatePath: function (t) {
				this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
			},
			_updateStyle: function (t) {
				this._updateDashArray(t), this._requestRedraw(t);
			},
			_updateDashArray: function (t) {
				if ("string" == typeof t.options.dashArray) {
					var i,
						e = t.options.dashArray.split(/[, ]+/),
						n = [];
					for (i = 0; i < e.length; i++) n.push(Number(e[i]));
					t.options._dashArray = n;
				} else t.options._dashArray = t.options.dashArray;
			},
			_requestRedraw: function (t) {
				this._map && (this._extendRedrawBounds(t), (this._redrawRequest = this._redrawRequest || f(this._redraw, this)));
			},
			_extendRedrawBounds: function (t) {
				if (t._pxBounds) {
					var i = (t.options.weight || 0) + 1;
					(this._redrawBounds = this._redrawBounds || new P()), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
				}
			},
			_redraw: function () {
				(this._redrawRequest = null), this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), (this._redrawBounds = null);
			},
			_clear: function () {
				var t = this._redrawBounds;
				if (t) {
					var i = t.getSize();
					this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
				} else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
			},
			_draw: function () {
				var t,
					i = this._redrawBounds;
				if ((this._ctx.save(), i)) {
					var e = i.getSize();
					this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip();
				}
				this._drawing = !0;
				for (var n = this._drawFirst; n; n = n.next) (t = n.layer), (!i || (t._pxBounds && t._pxBounds.intersects(i))) && t._updatePath();
				(this._drawing = !1), this._ctx.restore();
			},
			_updatePoly: function (t, i) {
				if (this._drawing) {
					var e,
						n,
						o,
						s,
						r = t._parts,
						a = r.length,
						h = this._ctx;
					if (a) {
						for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
							for (n = 0, o = r[e].length; n < o; n++) (s = r[e][n]), h[n ? "lineTo" : "moveTo"](s.x, s.y);
							i && h.closePath();
						}
						this._fillStroke(h, t);
					}
				}
			},
			_updateCircle: function (t) {
				if (this._drawing && !t._empty()) {
					var i = t._point,
						e = this._ctx,
						n = Math.max(Math.round(t._radius), 1),
						o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
					(this._drawnLayers[t._leaflet_id] = t), 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t);
				}
			},
			_fillStroke: function (t, i) {
				var e = i.options;
				e.fill && ((t.globalAlpha = e.fillOpacity), (t.fillStyle = e.fillColor || e.color), t.fill(e.fillRule || "evenodd")),
					e.stroke &&
					0 !== e.weight &&
					(t.setLineDash && t.setLineDash((i.options && i.options._dashArray) || []),
						(t.globalAlpha = e.opacity),
						(t.lineWidth = e.weight),
						(t.strokeStyle = e.color),
						(t.lineCap = e.lineCap),
						(t.lineJoin = e.lineJoin),
						t.stroke());
			},
			_onClick: function (t) {
				for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) (i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
				e && (zt(t), this._fireEvent([e], t));
			},
			_onMouseMove: function (t) {
				if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
					var i = this._map.mouseEventToLayerPoint(t);
					this._handleMouseHover(t, i);
				}
			},
			_handleMouseOut: function (t) {
				var i = this._hoveredLayer;
				i && (tt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), (this._hoveredLayer = null));
			},
			_handleMouseHover: function (t, i) {
				for (var e, n, o = this._drawFirst; o; o = o.next) (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
				n !== this._hoveredLayer && (this._handleMouseOut(t), n && (Q(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), (this._hoveredLayer = n))),
					this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
			},
			_fireEvent: function (t, i, e) {
				this._map._fireDOMEvent(i, e || i.type, t);
			},
			_bringToFront: function (t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				e && ((e.prev = n), n ? (n.next = e) : e && (this._drawFirst = e), (i.prev = this._drawLast), (this._drawLast.next = i), (i.next = null), (this._drawLast = i), this._requestRedraw(t));
			},
			_bringToBack: function (t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				n && ((n.next = e), e ? (e.prev = n) : n && (this._drawLast = n), (i.prev = null), (i.next = this._drawFirst), (this._drawFirst.prev = i), (this._drawFirst = i), this._requestRedraw(t));
			},
		}),
		yn = (function () {
			try {
				return (
					document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
					function (t) {
						return document.createElement("<lvml:" + t + ' class="lvml">');
					}
				);
			} catch (t) {
				return function (t) {
					return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
				};
			}
		})(),
		xn = {
			_initContainer: function () {
				this._container = G("div", "leaflet-vml-container");
			},
			_update: function () {
				this._map._animatingZoom || (gn.prototype._update.call(this), this.fire("update"));
			},
			_initPath: function (t) {
				var i = (t._container = yn("shape"));
				Q(i, "leaflet-vml-shape " + (this.options.className || "")), (i.coordsize = "1 1"), (t._path = yn("path")), i.appendChild(t._path), this._updateStyle(t), (this._layers[n(t)] = t);
			},
			_addPath: function (t) {
				var i = t._container;
				this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
			},
			_removePath: function (t) {
				var i = t._container;
				K(i), t.removeInteractiveTarget(i), delete this._layers[n(t)];
			},
			_updateStyle: function (t) {
				var i = t._stroke,
					e = t._fill,
					n = t.options,
					o = t._container;
				(o.stroked = !!n.stroke),
					(o.filled = !!n.fill),
					n.stroke
						? (i || (i = t._stroke = yn("stroke")),
							o.appendChild(i),
							(i.weight = n.weight + "px"),
							(i.color = n.color),
							(i.opacity = n.opacity),
							n.dashArray ? (i.dashStyle = oi(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ")) : (i.dashStyle = ""),
							(i.endcap = n.lineCap.replace("butt", "flat")),
							(i.joinstyle = n.lineJoin))
						: i && (o.removeChild(i), (t._stroke = null)),
					n.fill ? (e || (e = t._fill = yn("fill")), o.appendChild(e), (e.color = n.fillColor || n.color), (e.opacity = n.fillOpacity)) : e && (o.removeChild(e), (t._fill = null));
			},
			_updateCircle: function (t) {
				var i = t._point.round(),
					e = Math.round(t._radius),
					n = Math.round(t._radiusY || e);
				this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600");
			},
			_setPath: function (t, i) {
				t._path.v = i;
			},
			_bringToFront: function (t) {
				X(t._container);
			},
			_bringToBack: function (t) {
				J(t._container);
			},
		},
		wn = $i ? yn : E,
		Pn = gn.extend({
			getEvents: function () {
				var t = gn.prototype.getEvents.call(this);
				return (t.zoomstart = this._onZoomStart), t;
			},
			_initContainer: function () {
				(this._container = wn("svg")), this._container.setAttribute("pointer-events", "none"), (this._rootGroup = wn("g")), this._container.appendChild(this._rootGroup);
			},
			_destroyContainer: function () {
				K(this._container), ft(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
			},
			_onZoomStart: function () {
				this._update();
			},
			_update: function () {
				if (!this._map._animatingZoom || !this._bounds) {
					gn.prototype._update.call(this);
					var t = this._bounds,
						i = t.getSize(),
						e = this._container;
					(this._svgSize && this._svgSize.equals(i)) || ((this._svgSize = i), e.setAttribute("width", i.x), e.setAttribute("height", i.y)),
						at(e, t.min),
						e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")),
						this.fire("update");
				}
			},
			_initPath: function (t) {
				var i = (t._path = wn("path"));
				t.options.className && Q(i, t.options.className), t.options.interactive && Q(i, "leaflet-interactive"), this._updateStyle(t), (this._layers[n(t)] = t);
			},
			_addPath: function (t) {
				this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
			},
			_removePath: function (t) {
				K(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)];
			},
			_updatePath: function (t) {
				t._project(), t._update();
			},
			_updateStyle: function (t) {
				var i = t._path,
					e = t.options;
				i &&
					(e.stroke
						? (i.setAttribute("stroke", e.color),
							i.setAttribute("stroke-opacity", e.opacity),
							i.setAttribute("stroke-width", e.weight),
							i.setAttribute("stroke-linecap", e.lineCap),
							i.setAttribute("stroke-linejoin", e.lineJoin),
							e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"),
							e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset"))
						: i.setAttribute("stroke", "none"),
						e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
			},
			_updatePoly: function (t, i) {
				this._setPath(t, k(t._parts, i));
			},
			_updateCircle: function (t) {
				var i = t._point,
					e = Math.max(Math.round(t._radius), 1),
					n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
					o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
				this._setPath(t, o);
			},
			_setPath: function (t, i) {
				t._path.setAttribute("d", i);
			},
			_bringToFront: function (t) {
				X(t._path);
			},
			_bringToBack: function (t) {
				J(t._path);
			},
		});
	$i && Pn.include(xn),
		be.include({
			getRenderer: function (t) {
				var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
				return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i;
			},
			_getPaneRenderer: function (t) {
				if ("overlayPane" === t || void 0 === t) return !1;
				var i = this._paneRenderers[t];
				return void 0 === i && ((i = this._createRenderer({ pane: t })), (this._paneRenderers[t] = i)), i;
			},
			_createRenderer: function (t) {
				return (this.options.preferCanvas && $t(t)) || Qt(t);
			},
		});
	var Ln = on.extend({
		initialize: function (t, i) {
			on.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
		},
		setBounds: function (t) {
			return this.setLatLngs(this._boundsToLatLngs(t));
		},
		_boundsToLatLngs: function (t) {
			return (t = z(t)), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
		},
	});
	(Pn.create = wn),
		(Pn.pointsToPath = k),
		(sn.geometryToLayer = Ft),
		(sn.coordsToLatLng = Ut),
		(sn.coordsToLatLngs = Vt),
		(sn.latLngToCoords = qt),
		(sn.latLngsToCoords = Gt),
		(sn.getFeature = Kt),
		(sn.asFeature = Yt),
		be.mergeOptions({ boxZoom: !0 });
	var bn = Ee.extend({
		initialize: function (t) {
			(this._map = t), (this._container = t._container), (this._pane = t._panes.overlayPane), (this._resetStateTimeout = 0), t.on("unload", this._destroy, this);
		},
		addHooks: function () {
			mt(this._container, "mousedown", this._onMouseDown, this);
		},
		removeHooks: function () {
			ft(this._container, "mousedown", this._onMouseDown, this);
		},
		moved: function () {
			return this._moved;
		},
		_destroy: function () {
			K(this._pane), delete this._pane;
		},
		_resetState: function () {
			(this._resetStateTimeout = 0), (this._moved = !1);
		},
		_clearDeferredResetState: function () {
			0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
		},
		_onMouseDown: function (t) {
			if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
			this._clearDeferredResetState(),
				this._resetState(),
				fi(),
				ut(),
				(this._startPoint = this._map.mouseEventToContainerPoint(t)),
				mt(document, { contextmenu: Lt, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
		},
		_onMouseMove: function (t) {
			this._moved || ((this._moved = !0), (this._box = G("div", "leaflet-zoom-box", this._container)), Q(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), (this._point = this._map.mouseEventToContainerPoint(t));
			var i = new P(this._point, this._startPoint),
				e = i.getSize();
			at(this._box, i.min), (this._box.style.width = e.x + "px"), (this._box.style.height = e.y + "px");
		},
		_finish: function () {
			this._moved && (K(this._box), tt(this._container, "leaflet-crosshair")), gi(), lt(), ft(document, { contextmenu: Lt, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
		},
		_onMouseUp: function (t) {
			if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
				this._clearDeferredResetState(), (this._resetStateTimeout = setTimeout(e(this._resetState, this), 0));
				var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
				this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
			}
		},
		_onKeyDown: function (t) {
			27 === t.keyCode && this._finish();
		},
	});
	be.addInitHook("addHandler", "boxZoom", bn), be.mergeOptions({ doubleClickZoom: !0 });
	var Tn = Ee.extend({
		addHooks: function () {
			this._map.on("dblclick", this._onDoubleClick, this);
		},
		removeHooks: function () {
			this._map.off("dblclick", this._onDoubleClick, this);
		},
		_onDoubleClick: function (t) {
			var i = this._map,
				e = i.getZoom(),
				n = i.options.zoomDelta,
				o = t.originalEvent.shiftKey ? e - n : e + n;
			"center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o);
		},
	});
	be.addInitHook("addHandler", "doubleClickZoom", Tn), be.mergeOptions({ dragging: !0, inertia: !Mi, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: !1, maxBoundsViscosity: 0 });
	var zn = Ee.extend({
		addHooks: function () {
			if (!this._draggable) {
				var t = this._map;
				(this._draggable = new Re(t._mapPane, t._container)),
					this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this),
					this._draggable.on("predrag", this._onPreDragLimit, this),
					t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
			}
			Q(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), (this._positions = []), (this._times = []);
		},
		removeHooks: function () {
			tt(this._map._container, "leaflet-grab"), tt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
		},
		moved: function () {
			return this._draggable && this._draggable._moved;
		},
		moving: function () {
			return this._draggable && this._draggable._moving;
		},
		_onDragStart: function () {
			var t = this._map;
			if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
				var i = z(this._map.options.maxBounds);
				(this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize()))),
					(this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
			} else this._offsetLimit = null;
			t.fire("movestart").fire("dragstart"), t.options.inertia && ((this._positions = []), (this._times = []));
		},
		_onDrag: function (t) {
			if (this._map.options.inertia) {
				var i = (this._lastTime = +new Date()),
					e = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
				this._positions.push(e), this._times.push(i), this._prunePositions(i);
			}
			this._map.fire("move", t).fire("drag", t);
		},
		_prunePositions: function (t) {
			for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift();
		},
		_onZoomEnd: function () {
			var t = this._map.getSize().divideBy(2),
				i = this._map.latLngToLayerPoint([0, 0]);
			(this._initialWorldOffset = i.subtract(t).x), (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
		},
		_viscousLimit: function (t, i) {
			return t - (t - i) * this._viscosity;
		},
		_onPreDragLimit: function () {
			if (this._viscosity && this._offsetLimit) {
				var t = this._draggable._newPos.subtract(this._draggable._startPos),
					i = this._offsetLimit;
				t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
					t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
					t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
					t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
					(this._draggable._newPos = this._draggable._startPos.add(t));
			}
		},
		_onPreDragWrap: function () {
			var t = this._worldWidth,
				i = Math.round(t / 2),
				e = this._initialWorldOffset,
				n = this._draggable._newPos.x,
				o = ((n - i + e) % t) + i - e,
				s = ((n + i + e) % t) - i - e,
				r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
			(this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = r);
		},
		_onDragEnd: function (t) {
			var i = this._map,
				e = i.options,
				n = !e.inertia || this._times.length < 2;
			if ((i.fire("dragend", t), n)) i.fire("moveend");
			else {
				this._prunePositions(+new Date());
				var o = this._lastPos.subtract(this._positions[0]),
					s = (this._lastTime - this._times[0]) / 1e3,
					r = e.easeLinearity,
					a = o.multiplyBy(r / s),
					h = a.distanceTo([0, 0]),
					u = Math.min(e.inertiaMaxSpeed, h),
					l = a.multiplyBy(u / h),
					c = u / (e.inertiaDeceleration * r),
					_ = l.multiplyBy(-c / 2).round();
				_.x || _.y
					? ((_ = i._limitOffset(_, i.options.maxBounds)),
						f(function () {
							i.panBy(_, { duration: c, easeLinearity: r, noMoveStart: !0, animate: !0 });
						}))
					: i.fire("moveend");
			}
		},
	});
	be.addInitHook("addHandler", "dragging", zn), be.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
	var Mn = Ee.extend({
		keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] },
		initialize: function (t) {
			(this._map = t), this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
		},
		addHooks: function () {
			var t = this._map._container;
			t.tabIndex <= 0 && (t.tabIndex = "0"), mt(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
		},
		removeHooks: function () {
			this._removeHooks(), ft(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
		},
		_onMouseDown: function () {
			if (!this._focused) {
				var t = document.body,
					i = document.documentElement,
					e = t.scrollTop || i.scrollTop,
					n = t.scrollLeft || i.scrollLeft;
				this._map._container.focus(), window.scrollTo(n, e);
			}
		},
		_onFocus: function () {
			(this._focused = !0), this._map.fire("focus");
		},
		_onBlur: function () {
			(this._focused = !1), this._map.fire("blur");
		},
		_setPanDelta: function (t) {
			var i,
				e,
				n = (this._panKeys = {}),
				o = this.keyCodes;
			for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
			for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
			for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
			for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t];
		},
		_setZoomDelta: function (t) {
			var i,
				e,
				n = (this._zoomKeys = {}),
				o = this.keyCodes;
			for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
			for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t;
		},
		_addHooks: function () {
			mt(document, "keydown", this._onKeyDown, this);
		},
		_removeHooks: function () {
			ft(document, "keydown", this._onKeyDown, this);
		},
		_onKeyDown: function (t) {
			if (!(t.altKey || t.ctrlKey || t.metaKey)) {
				var i,
					e = t.keyCode,
					n = this._map;
				if (e in this._panKeys) (n._panAnim && n._panAnim._inProgress) || ((i = this._panKeys[e]), t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
				else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
				else {
					if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
					n.closePopup();
				}
				Lt(t);
			}
		},
	});
	be.addInitHook("addHandler", "keyboard", Mn), be.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
	var Cn = Ee.extend({
		addHooks: function () {
			mt(this._map._container, "mousewheel", this._onWheelScroll, this), (this._delta = 0);
		},
		removeHooks: function () {
			ft(this._map._container, "mousewheel", this._onWheelScroll, this);
		},
		_onWheelScroll: function (t) {
			var i = Tt(t),
				n = this._map.options.wheelDebounceTime;
			(this._delta += i), (this._lastMousePos = this._map.mouseEventToContainerPoint(t)), this._startTime || (this._startTime = +new Date());
			var o = Math.max(n - (+new Date() - this._startTime), 0);
			clearTimeout(this._timer), (this._timer = setTimeout(e(this._performZoom, this), o)), Lt(t);
		},
		_performZoom: function () {
			var t = this._map,
				i = t.getZoom(),
				e = this._map.options.zoomSnap || 0;
			t._stop();
			var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
				o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
				s = e ? Math.ceil(o / e) * e : o,
				r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
			(this._delta = 0), (this._startTime = null), r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r));
		},
	});
	be.addInitHook("addHandler", "scrollWheelZoom", Cn), be.mergeOptions({ tap: !0, tapTolerance: 15 });
	var Sn = Ee.extend({
		addHooks: function () {
			mt(this._map._container, "touchstart", this._onDown, this);
		},
		removeHooks: function () {
			ft(this._map._container, "touchstart", this._onDown, this);
		},
		_onDown: function (t) {
			if (t.touches) {
				if ((Pt(t), (this._fireClick = !0), t.touches.length > 1)) return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
				var i = t.touches[0],
					n = i.target;
				(this._startPos = this._newPos = new x(i.clientX, i.clientY)),
					n.tagName && "a" === n.tagName.toLowerCase() && Q(n, "leaflet-active"),
					(this._holdTimeout = setTimeout(
						e(function () {
							this._isTapValid() && ((this._fireClick = !1), this._onUp(), this._simulateEvent("contextmenu", i));
						}, this),
						1e3
					)),
					this._simulateEvent("mousedown", i),
					mt(document, { touchmove: this._onMove, touchend: this._onUp }, this);
			}
		},
		_onUp: function (t) {
			if ((clearTimeout(this._holdTimeout), ft(document, { touchmove: this._onMove, touchend: this._onUp }, this), this._fireClick && t && t.changedTouches)) {
				var i = t.changedTouches[0],
					e = i.target;
				e && e.tagName && "a" === e.tagName.toLowerCase() && tt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i);
			}
		},
		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
		},
		_onMove: function (t) {
			var i = t.touches[0];
			(this._newPos = new x(i.clientX, i.clientY)), this._simulateEvent("mousemove", i);
		},
		_simulateEvent: function (t, i) {
			var e = document.createEvent("MouseEvents");
			(e._simulated = !0), (i.target._simulatedClick = !0), e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e);
		},
	});
	qi && !Vi && be.addInitHook("addHandler", "tap", Sn), be.mergeOptions({ touchZoom: qi && !Mi, bounceAtZoomLimits: !0 });
	var Zn = Ee.extend({
		addHooks: function () {
			Q(this._map._container, "leaflet-touch-zoom"), mt(this._map._container, "touchstart", this._onTouchStart, this);
		},
		removeHooks: function () {
			tt(this._map._container, "leaflet-touch-zoom"), ft(this._map._container, "touchstart", this._onTouchStart, this);
		},
		_onTouchStart: function (t) {
			var i = this._map;
			if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
				var e = i.mouseEventToContainerPoint(t.touches[0]),
					n = i.mouseEventToContainerPoint(t.touches[1]);
				(this._centerPoint = i.getSize()._divideBy(2)),
					(this._startLatLng = i.containerPointToLatLng(this._centerPoint)),
					"center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))),
					(this._startDist = e.distanceTo(n)),
					(this._startZoom = i.getZoom()),
					(this._moved = !1),
					(this._zooming = !0),
					i._stop(),
					mt(document, "touchmove", this._onTouchMove, this),
					mt(document, "touchend", this._onTouchEnd, this),
					Pt(t);
			}
		},
		_onTouchMove: function (t) {
			if (t.touches && 2 === t.touches.length && this._zooming) {
				var i = this._map,
					n = i.mouseEventToContainerPoint(t.touches[0]),
					o = i.mouseEventToContainerPoint(t.touches[1]),
					s = n.distanceTo(o) / this._startDist;
				if (
					((this._zoom = i.getScaleZoom(s, this._startZoom)),
						!i.options.bounceAtZoomLimits && ((this._zoom < i.getMinZoom() && s < 1) || (this._zoom > i.getMaxZoom() && s > 1)) && (this._zoom = i._limitZoom(this._zoom)),
						"center" === i.options.touchZoom)
				) {
					if (((this._center = this._startLatLng), 1 === s)) return;
				} else {
					var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
					if (1 === s && 0 === r.x && 0 === r.y) return;
					this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
				}
				this._moved || (i._moveStart(!0, !1), (this._moved = !0)), g(this._animRequest);
				var a = e(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 });
				(this._animRequest = f(a, this, !0)), Pt(t);
			}
		},
		_onTouchEnd: function () {
			this._moved && this._zooming
				? ((this._zooming = !1),
					g(this._animRequest),
					ft(document, "touchmove", this._onTouchMove),
					ft(document, "touchend", this._onTouchEnd),
					this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
				: (this._zooming = !1);
		},
	});
	be.addInitHook("addHandler", "touchZoom", Zn),
		(be.BoxZoom = bn),
		(be.DoubleClickZoom = Tn),
		(be.Drag = zn),
		(be.Keyboard = Mn),
		(be.ScrollWheelZoom = Cn),
		(be.Tap = Sn),
		(be.TouchZoom = Zn),
		(Object.freeze = ti),
		(t.version = "1.3.4"),
		(t.Control = Te),
		(t.control = ze),
		(t.Browser = Qi),
		(t.Evented = ci),
		(t.Mixin = Ae),
		(t.Util = ui),
		(t.Class = v),
		(t.Handler = Ee),
		(t.extend = i),
		(t.bind = e),
		(t.stamp = n),
		(t.setOptions = l),
		(t.DomEvent = Pe),
		(t.DomUtil = ve),
		(t.PosAnimation = Le),
		(t.Draggable = Re),
		(t.LineUtil = Ne),
		(t.PolyUtil = De),
		(t.Point = x),
		(t.point = w),
		(t.Bounds = P),
		(t.bounds = b),
		(t.Transformation = S),
		(t.transformation = Z),
		(t.Projection = He),
		(t.LatLng = M),
		(t.latLng = C),
		(t.LatLngBounds = T),
		(t.latLngBounds = z),
		(t.CRS = di),
		(t.GeoJSON = sn),
		(t.geoJSON = Xt),
		(t.geoJson = an),
		(t.Layer = qe),
		(t.LayerGroup = Ge),
		(t.layerGroup = function (t, i) {
			return new Ge(t, i);
		}),
		(t.FeatureGroup = Ke),
		(t.featureGroup = function (t) {
			return new Ke(t);
		}),
		(t.ImageOverlay = hn),
		(t.imageOverlay = function (t, i, e) {
			return new hn(t, i, e);
		}),
		(t.VideoOverlay = un),
		(t.videoOverlay = function (t, i, e) {
			return new un(t, i, e);
		}),
		(t.DivOverlay = ln),
		(t.Popup = cn),
		(t.popup = function (t, i) {
			return new cn(t, i);
		}),
		(t.Tooltip = _n),
		(t.tooltip = function (t, i) {
			return new _n(t, i);
		}),
		(t.Icon = Ye),
		(t.icon = function (t) {
			return new Ye(t);
		}),
		(t.DivIcon = dn),
		(t.divIcon = function (t) {
			return new dn(t);
		}),
		(t.Marker = $e),
		(t.marker = function (t, i) {
			return new $e(t, i);
		}),
		(t.TileLayer = mn),
		(t.tileLayer = Jt),
		(t.GridLayer = pn),
		(t.gridLayer = function (t) {
			return new pn(t);
		}),
		(t.SVG = Pn),
		(t.svg = Qt),
		(t.Renderer = gn),
		(t.Canvas = vn),
		(t.canvas = $t),
		(t.Path = Qe),
		(t.CircleMarker = tn),
		(t.circleMarker = function (t, i) {
			return new tn(t, i);
		}),
		(t.Circle = en),
		(t.circle = function (t, i, e) {
			return new en(t, i, e);
		}),
		(t.Polyline = nn),
		(t.polyline = function (t, i) {
			return new nn(t, i);
		}),
		(t.Polygon = on),
		(t.polygon = function (t, i) {
			return new on(t, i);
		}),
		(t.Rectangle = Ln),
		(t.rectangle = function (t, i) {
			return new Ln(t, i);
		}),
		(t.Map = be),
		(t.map = function (t, i) {
			return new be(t, i);
		});
	var En = window.L;
	(t.noConflict = function () {
		return (window.L = En), this;
	}),
		(window.L = t);
});
/*!
Template core
*/

!(function (t) {
	var o = {
		reloadbox: " ",
		loadBox: "",
		ctbTriggerBox: "",
		ctbTrigger: "a.ajax",
		loadErrorMessage: "THE PAGE YOU WERE LOOKING FOR COULD NOT BE FOUND.",
		loadErrorBacklinkText: "Back to the last page",
		bouncingBoxes: "",
		topToBottom: !1,
		leftToRight: !1,
		inEasing: "easeInQuint",
		outEasing: "easeInQuint",
		inDuration: 700,
		outDuration: 500,
		preloadImages: !1,
		direction: "",
		positionType: "absolute",
	},
		e = function (o, e) {
			t(window)
				.off("popstate")
				.on("popstate", function (t) {
					var n;
					switch (o.direction) {
						case "left-to-right":
							n = "ks-ctb-box-in-l-pushstate";
							break;
						case "right-to-left":
							n = "ks-ctb-box-in-r-pushstate";
							break;
						case "top-to-bottom":
							n = "ks-ctb-box-in-t-pushstate";
							break;
						case "bottom-to-top":
							n = "ks-ctb-box-in-b-pushstate";
							break;
						case "":
							n = "ks-ctb-box-in-pushstate";
							break;
						default:
							return alert("Kool ctb Error: \n The defined direction " + o.direction + " does not exist."), !1;
					}
					i.ctbHistoryPage(o, e, n), t.stopPropagation();
				});
		},
		i = {
			defaults: function (e, i) {
				return (psSettings = e.data("kool-ctb-window")), "undefined" == typeof psSettings ? ((psSettings = t.extend({}, o, i)), e.data("kool-ctb-window", psSettings)) : (psSettings = t.extend(psSettings, i)), psSettings;
			},
			init: function (o) {
				var n = window.history && history.pushState;
				return this.each(function () {
					i.defaults(t(this), o);
					t(psSettings.reloadbox);
					var a = psSettings.ctbTriggerBox,
						r = psSettings.ctbTrigger;
					n && t("html").not("[data-ks-initialised]") && (t("html").attr("data-ks-initialised", "true"), e(psSettings, t(a + " " + r))), s.trigger(psSettings, n, a, r, !0);
				});
			},
			ctbHistoryPage: function (o, e, i) {
				if (t("html").is("[data-ks-history-pushed]")) {
					var n = location.pathname;
					s.ksLoadPage(o, e, n, i);
				}
			},
			destroy: function (o) {
				return (
					t(document).off("click", psSettings.ctbTriggerBox + " " + psSettings.ctbTrigger),
					t(this).each(function () {
						t(this).removeData("kool-ctb-window");
					})
				);
			},
		},
		n = {
			defaults: function (e, i) {
				return (settings = e.data("kool-ctb")), "undefined" == typeof settings ? ((settings = t.extend({}, o, i)), e.data("kool-ctb", settings)) : (settings = t.extend(settings, i)), settings;
			},
			init: function (o) {
				return this.each(function () {
					n.defaults(t(this), o), (settings.reloadbox = t(this));
					var e = settings.ctbTriggerBox,
						i = settings.ctbTrigger;
					s.trigger(settings, !0, e, i, !1);
				});
			},
			destroy: function (o) {
				return (
					t(document).off("click", settings.ctbTriggerBox + " " + settings.ctbTrigger),
					t(this).each(function () {
						t(this).removeData("kool-ctb");
					})
				);
			},
		},
		s = {
			trigger: function (o, e, i, n, a) {
				if (e) {
					(r = document.createElement("div")).setAttribute("ongesturestart", "return;"),
						"function" == typeof r.ongesturestart
							? t(document)
								.on("touchstart", ".abl", function () {
									window.history.back();
								})
								.off("touchstart", i + " " + n)
								.on("touchstart", i + " " + n, function (i) {
									i.preventDefault();
									var n = t(this);
									s.ksDefinereloadboxIn(o, n, e, a);
								})
							: t(document)
								.on("click", ".abl", function () {
									window.history.back();
								})
								.off("click", i + " " + n)
								.on("click", i + " " + n, function (i) {
									i.preventDefault();
									var n = t(this);
									s.ksDefinereloadboxIn(o, n, e, a);
								});
				}
				var r;
			},
			ksDefinereloadboxIn: function (o, e, i, n) {
				switch (o.direction) {
					case "left-to-right":
					case "right-to-left":
					case "top-to-bottom":
					case "bottom-to-top":
					case "":
						if ((($reloadboxIn = "ks-ctb-box-in"), t(".ks-ctb-box-in").length)) return !1;
						t(this);
						s.ksCollectLoadPageInfo(o, e, i, $reloadboxIn, n);
						break;
					default:
						return alert("Kool ctb Error: \n The defined direction " + o.direction + " does not exist."), !1;
				}
			},
			ksCollectLoadPageInfo: function (o, e, i, n, a) {
				var r = e.attr("href");
				switch (o.direction) {
					case "left-to-right":
						n = "ks-ctb-box-in-l";
						break;
					case "right-to-left":
						n = "ks-ctb-box-in-r";
						break;
					case "top-to-bottom":
						n = "ks-ctb-box-in-t";
						break;
					case "bottom-to-top":
						n = "ks-ctb-box-in-b";
						break;
					case "":
						n = "ks-ctb-box-in";
						break;
					default:
						return alert("Kool ctb Error: \n The defined direction " + o.direction + " does not exist."), !1;
				}
				s.ksLoadPage(o, e, r, n, a), a && (history.pushState({ url: r }, null, r), t("html").attr("data-ks-history-pushed", "true"));
			},
			ksLoadPage: function (o, e, i, n, a) {
				t(o.reloadbox);
				"" != i
					? (s.ksAddreloadboxIn(o, n),
						t.ajax({
							type: "GET",
							url: i,
							data: {},
							beforeSend: function () {
								s.ksCreateLoadBox();
							},
							error: function (t, o, e) {
								window.location.replace("404.html");
							},
							success: function (t) {
								o.bouncingBoxes ? s.ksFadeSiblings(o, e, t, n, a) : s.ksPositionAndPrepare(o, e, t, n, a);
							},
							dataType: "html",
						}))
					: alert("There is no target defined! Please check the references (i.e. normally href) of the ctbTriggers.");
			},
			ksAddreloadboxIn: function (o, e) {
				var i = t(o.reloadbox),
					n = i.attr("class"),
					s = i.prop("tagName");
				t(document).find(".ks-ctb-box-in").remove(),
					o.movereloadboxClasses
						? i.after("<" + s.toLowerCase() + ' class="ks-ctb-box-in ' + (void 0 !== n ? n : "") + '" id="' + e + '"></' + s.toLowerCase() + ">")
						: i.after("<" + s.toLowerCase() + ' class="ks-ctb-box-in" id="' + e + '"></' + s.toLowerCase() + ">"),
					i.siblings(".ks-ctb-box-in").hide();
			},
			ksFadeSiblings: function (o, e, i, n, a) {
				t(document)
					.find(o.bouncingBoxes)
					.animate({ opacity: 0 }, 50, function () {
						s.ksPositionAndPrepare(o, e, i, n);
					});
			},
			ksPositionAndPrepare: function (o, e, i, n, a) {
				var r = t(o.reloadbox),
					c = r.attr("id"),
					l = r.position(),
					d = r.width(),
					b = r.css("margin-left"),
					u = r.css("margin-left"),
					f = l.left + parseFloat(b);
				if (((reloadboxRightAbsolute = l.left + parseFloat(b) + d - parseFloat(u)), ($reloadboxIn = t("#" + n)), (loadSelector = e.attr("data-ks-load-selector")), a))
					var h = i.match(/<\/*html\s+.*id="([^"].*)".*>/),
						g = i.match(/<\/*body\s+.*id="([^"].*)".*>/),
						p = i.match(/<\/*html\s+.*class="([^"].*)".*>/),
						k = i.match(/<\/*body\s+.*class="([^"].*)".*>/),
						m = i.match(/<\/*title>(.*)<\/title>/);
				if (
					(r.addClass("ks-ctb-box-out").css({ position: "absolute", top: l.top, left: f, marginLeft: 0, width: d }),
						(reloadboxInContents =
							void 0 !=
							t(i)
								.filter("#" + c)
								.html()))
				) {
					if (o.loadBox) var x = t(i).filter(o.loadBox);
					else if (loadSelector) x = t(i).filter(loadSelector);
					else x = t(i).filter("#" + c);
					reloadboxInContents = x.html();
					var y = x.attr("class");
				} else {
					if (o.loadBox) x = t(i).find(o.loadBox);
					else if (loadSelector) x = t(i).find(loadSelector);
					else x = t(i).find("#" + c);
					reloadboxInContents = x.html();
					y = x.attr("class");
				}
				$reloadboxIn.addClass(y).css({ position: o.positionType, marginLeft: 0, top: l.top, left: f }).html(reloadboxInContents);
				var w = $reloadboxIn.find("img"),
					v = 0;
				w.length && 1 == o.preloadImages
					? w.on("load", function () {
						++v == w.length && (t(document).trigger("ksLoadCallback"), s.ksctbContent(o, n, e, l, f, d, h, g, p, k, m, a));
					})
					: (t(document).trigger("ksLoadCallback"), s.ksctbContent(o, n, e, l, f, d, h, g, p, k, m, a));
			},
			ksctbContent: function (o, e, i, n, a, r, c, l, d, b, u, f) {
				var h = t(o.reloadbox),
					g = h.attr("id"),
					p = t("#" + e),
					k = p.outerHeight(),
					m = (p.outerWidth(), h.outerHeight()),
					x = t(window).outerHeight(),
					y = t(window).outerWidth(),
					w = i.prop("hash");
				if ((clearTimeout(loadTimer), s.ksRemoveLoadBox(), o.direction)) {
					p.css({ width: r });
					var v,
						C = {},
						T = {};
					switch (e) {
						case "ks-ctb-box-in-b-pushstate":
						case "ks-ctb-box-in-t":
							p.css("top", 2 * -k), (v = 3 * x);
							break;
						case "ks-ctb-box-in-t-pushstate":
						case "ks-ctb-box-in-b":
							p.css("top", 1.5 * m), (v = 1.5 * -m);
							break;
						case "ks-ctb-box-in-r-pushstate":
						case "ks-ctb-box-in-l":
							p.css("left", -y), (v = y);
							break;
						case "ks-ctb-box-in-l-pushstate":
						case "ks-ctb-box-in-r":
							p.css("left", y), (v = -y);
							break;
						default:
							return alert("Kool ctb Error: \n The reloadboxIn class is in an undefined format: " + e + "."), !1;
					}
					switch (o.direction) {
						case "left-to-right":
						case "right-to-left":
							var S = o.inDuration,
								B = o.outDuration;
							(C = { left: v }), (T = { left: a }), p.css("top", n.top), t("body").css({ overflowX: "hidden", overflowY: "scroll" });
							break;
						case "top-to-bottom":
						case "bottom-to-top":
							var I = (m * o.inDuration) / 1e3 / 100;
							(S = o.inDuration + I), (B = o.outDuration);
							(T = { top: n.top }), (C = { top: v }), t("body").css("overflow-y", "scroll");
					}
					h
						.stop()
						.show()
						.animate(C, B, o.outEasing, function () {
							t(this).remove(), f && s.ksSwitchClasses(c, l, d, b, u);
						}),
						p
							.stop()
							.show()
							.animate(T, S, o.inEasing, function () {
								t(this).css({ display: "", left: "", marginLeft: "", position: "", top: "", width: "" }).attr("id", g).removeClass("ks-ctb-box-in"), s.animationCallback(w), s.ksCheckForSiblings(o);
							});
				} else
					contentAnimShow(),
						h.delay(100).animate({ opacity: 0 }, o.outDuration, function () {
							t(this).remove(),
								f && s.ksSwitchClasses(c, l, d, b, u),
								p
									.css({ display: "", left: "", marginLeft: "", opacity: 0, position: "", top: "", width: "" })
									.animate({ opacity: 1 }, o.inDuration, function () {
										s.animationCallback(w), s.ksCheckForSiblings(o);
										var t = window.location.href.split("#")[1];
										contentAnimHide(),
											t &&
											$("#" + t).length &&
											setTimeout(function () {
												$("html,body").animate({ scrollTop: $("#" + t).offset().top - ah }, { queue: !1, duration: 800, easing: "easeInOutExpo" });
											}, 1450);
									})
									.attr("id", g)
									.removeClass("ks-ctb-box-in");
						});
			},
			animationCallback: function (o) {
				o && t("html:not(:animated),body:not(:animated)").animate({ scrollTop: t(o).position() }, "normal");
			},
			ksCheckForSiblings: function (o) {
				o.bouncingBoxes
					? t(document)
						.find(o.bouncingBoxes)
						.animate({ opacity: 1 }, 1400, function () {
							s.ksctbCallback();
						})
					: s.ksctbCallback();
			},
			ksSwitchClasses: function (o, e, i, n, s) {
				t("html, body").attr({ class: "", id: "" }), o && t("html").attr("id", o[1]), e && t("body").attr("id", e[1]), i && t("html").addClass(i[1]), n && t("body").addClass(n[1]), s && t("title").text(s[1]);
			},
			ksCreateLoadBox: function () {
				t("#ks-loading-box").length ? (s.ksRemoveLoadBox(), s.ksCreateLoadBox()) : (loadTimer = setTimeout(function () { }, 10));
			},
			ksRemoveLoadBox: function () {
				t("#ks-loading-box").fadeOut("1000").remove();
			},
			ksctbCallback: function () {
				t(document).trigger("ksctbCallback");
			},
		};
	(t.coretemp = function (o) {
		return i[o] ? i[o].apply(t(window), Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? void t.error("Method " + o + " does not exist on jQuery.coretemp") : i.init.apply(t(window), arguments, !1);
	}),
		(t.fn.coretemp = function (o) {
			return n[o] ? n[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? void t.error("Method " + o + " does not exist on jQuery.coretemp") : n.init.apply(this, arguments);
		});
})(jQuery);
// niceSelect
!(function (e) {
	e.fn.niceSelect = function (t) {
		if ("string" == typeof t)
			return (
				"update" == t
					? this.each(function () {
						var t = e(this),
							l = e(this).next(".nice-select"),
							c = l.hasClass("open");
						l.length && (l.remove(), s(t), c && t.next().trigger("click"));
					})
					: "destroy" == t
						? (this.each(function () {
							var t = e(this),
								s = e(this).next(".nice-select");
							s.length && (s.remove(), t.css("display", ""));
						}),
							0 == e(".nice-select").length && e(document).off(".nice_select"))
						: console.log('Method "' + t + '" does not exist.'),
				this
			);
		function s(t) {
			t.after(
				e("<div></div>")
					.addClass("nice-select")
					.addClass(t.attr("class") || "")
					.addClass(t.attr("disabled") ? "disabled" : "")
					.addClass(t.attr("multiple") ? "has-multiple" : "")
					.attr("tabindex", t.attr("disabled") ? null : "0")
					.html(
						t.attr("multiple")
							? '<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'
							: '<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'
					)
			);
			var s = t.next(),
				l = t.find("option");
			if (t.attr("multiple")) {
				var c = "";
				(a = t.find("option:selected")).each(function () {
					($selected_option = e(this)), ($selected_text = $selected_option.data("display") || $selected_option.text()), (c += '<span class="current">' + $selected_text + "</span>");
				}),
					($select_placeholder = t.data("placeholder") || t.attr("placeholder")),
					($select_placeholder = "" == $select_placeholder ? "Select" : $select_placeholder),
					(c = "" == c ? $select_placeholder : c),
					s.find(".multiple-options").html(c);
			} else {
				var a = t.find("option:selected");
				s.find(".current").html(a.data("display") || a.text());
			}
			l.each(function (t) {
				var l = e(this),
					c = l.data("display");
				s.find("ul").append(
					e("<li></li>")
						.attr("data-value", l.val())
						.attr("data-display", c || null)
						.addClass("option" + (l.is(":selected") ? " selected" : "") + (l.is(":disabled") ? " disabled" : ""))
						.html(l.text())
				);
			});
		}
		this.hide(),
			this.each(function () {
				var t = e(this);
				t.next().hasClass("nice-select") || s(t);
			}),
			e(document).off(".nice_select"),
			e(document).on("click.nice_select", ".nice-select", function (t) {
				var s = e(this);
				e(".nice-select").not(s).removeClass("open"),
					s.toggleClass("open"),
					s.hasClass("open")
						? (s.find(".option"), s.find(".nice-select-search").val(""), s.find(".nice-select-search").focus(), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus"), s.find("ul li").show())
						: s.focus();
			}),
			e(document).on("click", ".nice-select-search-box", function (e) {
				return e.stopPropagation(), !1;
			}),
			e(document).on("click.nice_select", function (t) {
				0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
			}),
			e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
				var s = e(this),
					l = s.closest(".nice-select");
				if (l.hasClass("has-multiple"))
					s.hasClass("selected") ? s.removeClass("selected") : s.addClass("selected"),
						($selected_html = ""),
						($selected_values = []),
						l.find(".selected").each(function () {
							$selected_option = e(this);
							var t = $selected_option.data("display") || $selected_option.text();
							($selected_html += '<span class="current">' + t + "</span>"), $selected_values.push($selected_option.data("value"));
						}),
						($select_placeholder = l.prev("select").data("placeholder") || l.prev("select").attr("placeholder")),
						($select_placeholder = "" == $select_placeholder ? "Select" : $select_placeholder),
						($selected_html = "" == $selected_html ? $select_placeholder : $selected_html),
						l.find(".multiple-options").html($selected_html),
						l.prev("select").val($selected_values).trigger("change");
				else {
					l.find(".selected").removeClass("selected"), s.addClass("selected");
					var c = s.data("display") || s.text();
					l.find(".current").text(c), l.prev("select").val(s.data("value")).trigger("change");
				}
			}),
			e(document).on("keydown.nice_select", ".nice-select", function (t) {
				var s = e(this),
					l = e(s.find(".focus") || s.find(".list .option.selected"));
				if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? l.trigger("click") : s.trigger("click"), !1;
				if (40 == t.keyCode) {
					if (s.hasClass("open")) {
						var c = l.nextAll(".option:not(.disabled)").first();
						c.length > 0 && (s.find(".focus").removeClass("focus"), c.addClass("focus"));
					} else s.trigger("click");
					return !1;
				}
				if (38 == t.keyCode) {
					if (s.hasClass("open")) {
						var a = l.prevAll(".option:not(.disabled)").first();
						a.length > 0 && (s.find(".focus").removeClass("focus"), a.addClass("focus"));
					} else s.trigger("click");
					return !1;
				}
				if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
				else if (9 == t.keyCode && s.hasClass("open")) return !1;
			}),
			e(document).on("keydown.nice-select-search", ".nice-select", function () {
				var t = e(this),
					s = t.find(".nice-select-search").val(),
					l = t.find("ul li");
				if ("" == s) l.show();
				else if (t.hasClass("open")) {
					s = s.toLowerCase();
					var c = new RegExp(s);
					0 < l.length
						? l.each(function () {
							var t = e(this),
								s = t.text().toLowerCase();
							c.test(s) ? t.show() : t.hide();
						})
						: l.show();
				}
			});
		var l = document.createElement("a").style;
		return (l.cssText = "pointer-events:auto"), "auto" !== l.pointerEvents && e("html").addClass("no-csspointerevents"), this;
	};
})(jQuery);
