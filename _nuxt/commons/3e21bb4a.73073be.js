/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    477: function (t, e, o) {
      "use strict";
      e.a = {
        data: function () {
          return {
            seoTitle: this.seoTitle ? this.seoTitle : null,
            seoDescription: this.seoDescription ? this.seoDescription : null,
          };
        },
        head: function () {
          return {
            title: this.seoTitle ? this.seoTitle : "Nash Dodti",
            meta: [
              {
                hid: "description",
                name: "description",
                content: this.seoDescription
                  ? this.seoDescription
                  : "Nash Dodti by Elite & Adriano Design",
              },
              {
                hid: "og:title",
                property: "og:title",
                content: this.seoTitle ? this.seoTitle : "Nash Dodti",
              },
              {
                hid: "og:description",
                property: "og:description",
                content: this.seoDescription
                  ? this.seoDescription
                  : "Nash Dodti by Elite & Adriano Design",
              },
            ],
          };
        },
      };
    },
    478: function (t, e, o) {
      "use strict";
      o(30), o(32), o(37), o(18);
      var n = o(224),
        r = o.n(n),
        c = o(638),
        l = o.n(c),
        d = o(632),
        h = o(633);
      e.a = {
        data: function () {
          return { lazyLoadInstance: null };
        },
        created: function () {
          var t = this,
            e = this.pageName ? this.pageName : null;
          this.$store.commit("layout/setPageName", e),
            this.$eventBus.$emit("UPDATE_SCROLL"),
            this.$eventBus.$emit("UPDATE_CURSOR"),
            this.$eventBus.$on("FIRST_LOADER_LEAVING", this.onFirstLoadLeaving),
            setTimeout(function () {
              l()(document, function (e) {
                t.$eventBus.$emit("UPDATE_SCROLL"),
                  t.$eventBus.$emit("UPDATE_CURSOR"),
                  window.dispatchEvent(new Event("resize"));
              });
            }, 1e3);
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t.initLazyload();
          });
        },
        beforeDestroy: function () {
          this.$eventBus.$emit("STOP_ALL_AUDIOS"),
            this.$eventBus.$emit("STOP_ALL_VIDEOS"),
            this.destroyLazyLoad();
        },
        methods: {
          initLazyload: function () {
            var t = this;
            this.lazyLoadInstance = new r.a({
              elements_selector: ".lazy",
              container: this.$el.querySelector("[data-scroll-container]"),
              callback_loaded: function (e) {
                console.log(e),
                  t.$eventBus.$emit("IMAGE_LOAD", e),
                  t.$eventBus.$emit("UPDATE_SCROLL");
              },
            });
          },
          destroyLazyLoad: function () {
            this.lazyLoadInstance.destroy();
          },
          onFirstLoadLeaving: function () {
            var t;
            if (
              ((t = this.$route.name
                ? this.$route.name.replace(/___.*$/, "")
                : "index"),
              ["index"].includes(t))
            )
              this.$eventBus.$emit("SHOW_HOME_PAGE");
            else if (["bike", "tuo", "mia"].includes(t));
            else if (
              [
                "news",
                "news-slug",
                "press",
                "faq",
                "faq-slug",
                "downloads",
              ].includes(t)
            ) {
              Object(h.a)(this.$el, !0).play();
            } else {
              if (!["project", "stories", "philosophy"].includes(t)) return;
              Object(d.a)(this.$el, !0).play();
            }
          },
        },
      };
    },
    479: function (t, e, o) {
      "use strict";
      o(30), o(32), o(37), o(18);
      var n = o(19),
        r = o(5),
        c =
          (o(39),
          o(38),
          function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document;
            return e.querySelector(t);
          });
      var l = function (t, e, o, l) {
          var d = c(".product-cover-layer.-".concat(o)),
            h = c(".product-cover-layer__inner-layer", d),
            m = c(".product-cover-layer__img-wr", d),
            f = c(".product-cover-layer__img", d),
            y = c(".info-panel-btn-wr"),
            v = document.querySelectorAll(".product-tech-specs-btn-wr");
          Object(n.a)(v).forEach(function (t) {
            t.classList.remove("-is-entered");
          }),
            l.$store.commit("layout/setForceNavBtnToneToLight", !0);
          var w = window.matchMedia("(min-width: 1024px)").matches
              ? "horizontal"
              : "vertical",
            L = new r.b.timeline({
              paused: !0,
              defaults: { ease: "power1.out" },
              onStart: function () {},
              onComplete: function () {
                l.$store.commit("layout/setForceNavBtnToneToLight", !1), e();
              },
            });
          L.addLabel("start"),
            L.set(d, { autoAlpha: 1 }),
            "horizontal" === w && L.set(f, { scale: 1.2 }),
            L.fromTo(
              h,
              { x: "100%" },
              {
                x: "0%",
                duration: 1,
                onComplete: function () {
                  l.$store.commit("layout/setNavigationLeaveImmediately", !0),
                    l.$store.commit("layout/setShowNavigation", !1);
                },
              },
              "start"
            ),
            L.fromTo(
              m,
              { x: "horizontal" === w ? "140vw" : "100vw" },
              { x: "horizontal" === w ? "50vw" : "0vw", duration: 1 },
              "-=1"
            ),
            L.to(y, { autoAlpha: 0 }, "start"),
            L.set(t, { autoAlpha: 0 }),
            L.addLabel("end"),
            L.play();
        },
        d = function (t, e, o) {
          var n = c(".product-cover-layer.-".concat(o)),
            l = c(".product-cover-layer__inner-layer", n),
            d = c(".product-cover-layer__img-wr", n),
            h = c(".product-cover-layer__img", n),
            m = c(".product-cover__img-wr", t),
            f = (function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document;
              return Array.from(e.querySelectorAll(t));
            })(".product-header__heading-inner-line", t),
            y = c(".product-header__heading-calligraphy", t),
            v = c(".product-header__img2-wr", t),
            w = c(".product-nav-tr-class", t),
            L = c(".info-panel-btn-wr"),
            _ = window.matchMedia("(min-width: 1024px)").matches
              ? "horizontal"
              : "vertical",
            E = new r.b.timeline({
              paused: !0,
              defaults: { ease: "power2.out" },
              onStart: function () {},
              onComplete: function () {
                r.b.set([n, t, l, d, m, v, L], { clearProps: "all" }),
                  r.b.set(n, { autoAlpha: 0 }),
                  document
                    .querySelector(".product-tech-specs-btn-wr.-".concat(o))
                    .classList.add("-is-entered"),
                  e();
              },
            });
          r.b.set(m, { autoAlpha: 0 }),
            E.addLabel("start"),
            "horizontal" === _ &&
              (E.to(d, { x: "0vw", scale: 1, duration: 1 }, "start"),
              E.to(h, { scale: 1, duration: 1 }, "start")),
            "vertical" === _ && E.to(d, { x: "-100vw", duration: 1 }, "start"),
            E.to(l, { autoAlpha: 0, duration: 0.3 }),
            E.addLabel("afterLayerLeave"),
            E.fromTo(
              f,
              { y: "100%" },
              { y: "0%", duration: 1.5, stagger: 0.2 },
              "afterLayerLeave"
            ),
            E.fromTo(
              y,
              { y: "100%", opacity: 0 },
              { y: "0%", opacity: 1, duration: 1 },
              "afterLayerLeave"
            ),
            "horizontal" === _ &&
              E.fromTo(
                v,
                { x: "50vw" },
                { x: "0vw", duration: 1.5 },
                "afterLayerLeave"
              ),
            "vertical" === _ &&
              E.fromTo(
                v,
                { y: "50vw" },
                { y: "0vw", duration: 1.5 },
                "afterLayerLeave"
              ),
            E.fromTo([w, L], { opacity: 0, y: 10 }, { opacity: 1, y: 0 }),
            E.set(m, { autoAlpha: 1 }),
            E.addLabel("end"),
            r.b.delayedCall(1, function () {
              E.play();
            });
        },
        h = function (t, e, o) {
          var n = document.querySelector(".transition-layer"),
            c = document.querySelector(".transition-layer__inner"),
            l = new r.b.timeline({
              paused: !0,
              defaults: { ease: "power3.out" },
              onStart: function () {},
              onComplete: function () {
                l.set(n, { autoAlpha: 0 }), e();
              },
            });
          l.addLabel("start"),
            l.set(n, { autoAlpha: 1 }),
            l.fromTo(
              n,
              { y: "100%" },
              {
                y: "0%",
                duration: 1,
                onComplete: function () {
                  o.$store.commit("layout/setNavigationLeaveImmediately", !0),
                    o.$store.commit("layout/setShowNavigation", !1);
                },
              }
            ),
            l.fromTo(c, { y: "-100%" }, { y: "0%", duration: 1 }, "start"),
            l.set(t, { autoAlpha: 0 }),
            l.addLabel("end"),
            l.play();
        },
        m = o(633),
        f = function (t, e, o) {
          var n,
            c,
            l,
            d = new r.b.timeline({
              paused: !0,
              onStart: function () {},
              onComplete: function () {
                r.b.set(".transition-layer", { autoAlpha: 0 }), e();
              },
            });
          d.add("start"),
            d.add(
              ((n = document.querySelector(".transition-layer")),
              (c = document.querySelector(".transition-layer__inner")),
              (l = new r.b.timeline({
                defaults: { ease: "power3.out" },
                onStart: function () {},
                onComplete: function () {},
              })).addLabel("start"),
              l.set(n, { autoAlpha: 1 }),
              l.fromTo(n, { y: "0%" }, { y: "-100%", duration: 2 }),
              l.fromTo(c, { y: "0%" }, { y: "100%", duration: 2 }, "start"),
              l.addLabel("end"),
              l),
              "start"
            ),
            d.add(Object(m.a)(t), "start"),
            d.play();
        },
        y = o(632),
        v = function (t, e, o) {
          var n,
            c,
            l,
            d = new r.b.timeline({
              paused: !0,
              onStart: function () {},
              onComplete: function () {
                r.b.set(".transition-layer", { autoAlpha: 0 }), e();
              },
            });
          d.add("start"),
            d.add(
              ((n = document.querySelector(".transition-layer")),
              (c = document.querySelector(".transition-layer__inner")),
              (l = new r.b.timeline({
                defaults: { ease: "power3.out" },
                onStart: function () {},
                onComplete: function () {},
              })).addLabel("start"),
              l.set(n, { autoAlpha: 1 }),
              l.fromTo(n, { y: "0%" }, { y: "-100%", duration: 2 }),
              l.fromTo(c, { y: "0%" }, { y: "100%", duration: 2 }, "start"),
              l.addLabel("end"),
              l),
              "start"
            ),
            d.add(Object(y.a)(t), "start"),
            d.play();
        },
        w = function (t, e, o) {
          var n = t.querySelector(".home-slide.-slide-0 .home-slide__img-wr");
          n.classList.add("do-not-animate"), r.b.set(n, { opacity: 0 });
          var c,
            l,
            d,
            h = new r.b.timeline({
              paused: !0,
              onStart: function () {},
              onComplete: function () {
                r.b.set(".transition-layer", { autoAlpha: 0 }),
                  o.$eventBus.$emit("SHOW_HOME_PAGE"),
                  e();
              },
            });
          h.add("start"),
            h.add(
              ((c = document.querySelector(".transition-layer")),
              (l = document.querySelector(".transition-layer__inner")),
              (d = new r.b.timeline({
                defaults: { ease: "power3.out" },
                onStart: function () {},
                onComplete: function () {},
              })).addLabel("start"),
              d.set(c, { autoAlpha: 1 }),
              d.fromTo(c, { y: "0%" }, { y: "-100%", duration: 2 }),
              d.fromTo(l, { y: "0%" }, { y: "100%", duration: 2 }, "start"),
              d.addLabel("end"),
              d),
              "start"
            ),
            h.add(
              (function () {
                var e = t.querySelector(
                  ".home-slide.-slide-0 .home-slide__img-wr"
                );
                r.b.set(e, { opacity: 0 });
                var o = new r.b.timeline({
                  defaults: { ease: "power3.out" },
                  onStart: function () {},
                  onComplete: function () {},
                });
                return (
                  o.addLabel("start"),
                  o.fromTo(
                    e,
                    { opacity: 0, scale: 1.1 },
                    { opacity: 1, scale: 1, duration: 3, ease: "power2.out" },
                    "start"
                  ),
                  o.addLabel("end"),
                  o
                );
              })(),
              "start"
            ),
            h.play();
        };
      e.a = {
        transition: function (t, e) {
          if (!e || !e.name || e === t) return {};
          e && e.name.replace(/___.*$/, "");
          var o = t ? t.name.replace(/___.*$/, "") : null;
          return ["index"].includes(o)
            ? {
                css: !1,
                mode: "out-in",
                leave: function (t, e) {
                  h(t, e, this);
                },
                enter: function (t, e) {
                  w(t, e, this);
                },
              }
            : ["bike", "tuo", "mia"].includes(o)
            ? {
                css: !1,
                mode: "out-in",
                leave: function (t, e) {
                  l(t, e, o, this);
                },
                enter: function (t, e) {
                  d(t, e, o);
                },
              }
            : [
                "news",
                "news-slug",
                "press",
                "faq",
                "faq-slug",
                "downloads",
              ].includes(o)
            ? {
                css: !1,
                mode: "out-in",
                leave: function (t, e) {
                  h(t, e, this);
                },
                enter: function (t, e) {
                  f(t, e, this);
                },
              }
            : ["project", "stories", "philosophy"].includes(o)
            ? {
                css: !1,
                mode: "out-in",
                leave: function (t, e) {
                  h(t, e, this);
                },
                enter: function (t, e) {
                  v(t, e, this);
                },
              }
            : {};
        },
      };
    },
    632: function (t, e, o) {
      "use strict";
      o(37), o(474), o(58);
      var n = o(5);
      function r(element, t) {
        var e = element.getAttribute("style").split(";"),
          o = e.findIndex(function (e) {
            return e.replace(" ", "").split(":")[0] === t;
          });
        return e[o].replace(" ", "").split(":")[1];
      }
      e.a = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          o = t.querySelectorAll(".trans-hero .word"),
          c = t.querySelector(".pages-hero-image__img-wr"),
          l = t.querySelector(".project-adriano-signature"),
          d = t.querySelector(".ui-scroll-down"),
          h = new n.b.timeline({
            paused: e,
            defaults: { ease: "power3.out" },
            onStart: function () {},
            onComplete: function () {},
          });
        return (
          h.addLabel("start"),
          h.fromTo(
            o,
            { y: "100%" },
            {
              y: "0%",
              duration: 2,
              stagger: function (t, e, o) {
                return 0.3 * parseInt(r(e, "--line-index"));
              },
            },
            "start+=.5"
          ),
          c &&
            (h.set(c, { transformOrigin: "top" }),
            h.fromTo(c, { scale: 1.3 }, { scale: 1, duration: 2 }, "start")),
          l &&
            h.fromTo(
              l,
              { opacity: 0, y: "30%" },
              { opacity: 1, y: "0%", duration: 2 },
              "start+=1"
            ),
          h.fromTo(
            d,
            { opacity: 0, y: "10%" },
            { opacity: 1, y: "0%", duration: 2 },
            "start+=1.3"
          ),
          h.addLabel("end"),
          h
        );
      };
    },
    633: function (t, e, o) {
      "use strict";
      var n = o(5);
      e.a = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          o = t.querySelector(".pages-header-clean__heading"),
          text = t.querySelector(".pages-header-clean__text"),
          r = t.querySelector(".faq-slug__back-link-wr"),
          c = t.querySelectorAll(".trans-element"),
          l = [text, r, c].filter(function (t) {
            return t;
          }),
          d = new n.b.timeline({
            paused: e,
            defaults: { ease: "power3.out" },
            onStart: function () {},
            onComplete: function () {},
          });
        return (
          d.addLabel("start"),
          d.fromTo(o, { y: "100%" }, { y: "0%", duration: 2 }, "start"),
          d.fromTo(
            l,
            { y: "50px", opacity: 0 },
            { y: "0", opacity: 1, duration: 2, stagger: 0.2 },
            "start"
          ),
          d.addLabel("end"),
          d
        );
      };
    },
    638: function (t, e, o) {
      var n, r;
      !(function (c, l) {
        "use strict";
        (n = [o(639)]),
          void 0 ===
            (r = function (t) {
              return (function (t, e) {
                var o = t.jQuery,
                  n = t.console;
                function r(a, b) {
                  for (var t in b) a[t] = b[t];
                  return a;
                }
                var c = Array.prototype.slice;
                function l(t, e, d) {
                  if (!(this instanceof l)) return new l(t, e, d);
                  var h,
                    m = t;
                  ("string" == typeof t && (m = document.querySelectorAll(t)),
                  m)
                    ? ((this.elements =
                        ((h = m),
                        Array.isArray(h)
                          ? h
                          : "object" == typeof h && "number" == typeof h.length
                          ? c.call(h)
                          : [h])),
                      (this.options = r({}, this.options)),
                      "function" == typeof e ? (d = e) : r(this.options, e),
                      d && this.on("always", d),
                      this.getImages(),
                      o && (this.jqDeferred = new o.Deferred()),
                      setTimeout(this.check.bind(this)))
                    : n.error("Bad element for imagesLoaded " + (m || t));
                }
                (l.prototype = Object.create(e.prototype)),
                  (l.prototype.options = {}),
                  (l.prototype.getImages = function () {
                    (this.images = []),
                      this.elements.forEach(this.addElementImages, this);
                  }),
                  (l.prototype.addElementImages = function (t) {
                    "IMG" == t.nodeName && this.addImage(t),
                      !0 === this.options.background &&
                        this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && d[e]) {
                      for (
                        var o = t.querySelectorAll("img"), i = 0;
                        i < o.length;
                        i++
                      ) {
                        var img = o[i];
                        this.addImage(img);
                      }
                      if ("string" == typeof this.options.background) {
                        var n = t.querySelectorAll(this.options.background);
                        for (i = 0; i < n.length; i++) {
                          var r = n[i];
                          this.addElementBackgroundImages(r);
                        }
                      }
                    }
                  });
                var d = { 1: !0, 9: !0, 11: !0 };
                function h(img) {
                  this.img = img;
                }
                function m(t, element) {
                  (this.url = t),
                    (this.element = element),
                    (this.img = new Image());
                }
                return (
                  (l.prototype.addElementBackgroundImages = function (t) {
                    var style = getComputedStyle(t);
                    if (style)
                      for (
                        var e = /url\((['"])?(.*?)\1\)/gi,
                          o = e.exec(style.backgroundImage);
                        null !== o;

                      ) {
                        var n = o && o[2];
                        n && this.addBackground(n, t),
                          (o = e.exec(style.backgroundImage));
                      }
                  }),
                  (l.prototype.addImage = function (img) {
                    var t = new h(img);
                    this.images.push(t);
                  }),
                  (l.prototype.addBackground = function (t, e) {
                    var o = new m(t, e);
                    this.images.push(o);
                  }),
                  (l.prototype.check = function () {
                    var t = this;
                    function e(image, e, o) {
                      setTimeout(function () {
                        t.progress(image, e, o);
                      });
                    }
                    (this.progressedCount = 0),
                      (this.hasAnyBroken = !1),
                      this.images.length
                        ? this.images.forEach(function (t) {
                            t.once("progress", e), t.check();
                          })
                        : this.complete();
                  }),
                  (l.prototype.progress = function (image, t, e) {
                    this.progressedCount++,
                      (this.hasAnyBroken =
                        this.hasAnyBroken || !image.isLoaded),
                      this.emitEvent("progress", [this, image, t]),
                      this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, image),
                      this.progressedCount == this.images.length &&
                        this.complete(),
                      this.options.debug &&
                        n &&
                        n.log("progress: " + e, image, t);
                  }),
                  (l.prototype.complete = function () {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (
                      ((this.isComplete = !0),
                      this.emitEvent(t, [this]),
                      this.emitEvent("always", [this]),
                      this.jqDeferred)
                    ) {
                      var e = this.hasAnyBroken ? "reject" : "resolve";
                      this.jqDeferred[e](this);
                    }
                  }),
                  (h.prototype = Object.create(e.prototype)),
                  (h.prototype.check = function () {
                    this.getIsImageComplete()
                      ? this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        )
                      : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        (this.proxyImage.src = this.img.src));
                  }),
                  (h.prototype.getIsImageComplete = function () {
                    return this.img.complete && this.img.naturalWidth;
                  }),
                  (h.prototype.confirm = function (t, e) {
                    (this.isLoaded = t),
                      this.emitEvent("progress", [this, this.img, e]);
                  }),
                  (h.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                  }),
                  (h.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                  }),
                  (h.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                  }),
                  (h.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this),
                      this.proxyImage.removeEventListener("error", this),
                      this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (m.prototype = Object.create(h.prototype)),
                  (m.prototype.check = function () {
                    this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.img.src = this.url),
                      this.getIsImageComplete() &&
                        (this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        ),
                        this.unbindEvents());
                  }),
                  (m.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (m.prototype.confirm = function (t, e) {
                    (this.isLoaded = t),
                      this.emitEvent("progress", [this, this.element, e]);
                  }),
                  (l.makeJQueryPlugin = function (e) {
                    (e = e || t.jQuery) &&
                      ((o = e).fn.imagesLoaded = function (t, e) {
                        return new l(this, t, e).jqDeferred.promise(o(this));
                      });
                  }),
                  l.makeJQueryPlugin(),
                  l
                );
              })(c, t);
            }.apply(e, n)) || (t.exports = r);
      })("undefined" != typeof window ? window : this);
    },
    639: function (t, e, o) {
      var n, r;
      "undefined" != typeof window && window,
        void 0 ===
          (r =
            "function" ==
            typeof (n = function () {
              "use strict";
              function t() {}
              var e = t.prototype;
              return (
                (e.on = function (t, e) {
                  if (t && e) {
                    var o = (this._events = this._events || {}),
                      n = (o[t] = o[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                  }
                }),
                (e.once = function (t, e) {
                  if (t && e) {
                    this.on(t, e);
                    var o = (this._onceEvents = this._onceEvents || {});
                    return ((o[t] = o[t] || {})[e] = !0), this;
                  }
                }),
                (e.off = function (t, e) {
                  var o = this._events && this._events[t];
                  if (o && o.length) {
                    var n = o.indexOf(e);
                    return -1 != n && o.splice(n, 1), this;
                  }
                }),
                (e.emitEvent = function (t, e) {
                  var o = this._events && this._events[t];
                  if (o && o.length) {
                    (o = o.slice(0)), (e = e || []);
                    for (
                      var n = this._onceEvents && this._onceEvents[t], i = 0;
                      i < o.length;
                      i++
                    ) {
                      var r = o[i];
                      n && n[r] && (this.off(t, r), delete n[r]),
                        r.apply(this, e);
                    }
                    return this;
                  }
                }),
                (e.allOff = function () {
                  delete this._events, delete this._onceEvents;
                }),
                t
              );
            })
              ? n.call(e, o, e, t)
              : n) || (t.exports = r);
    },
  },
]);
