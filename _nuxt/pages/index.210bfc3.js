(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    476: function (t, e, n) {
      var content = n(486);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(7).default)("6c0fa2c5", content, !0, { sourceMap: !1 });
    },
    484: function (t, e, n) {
      var content = n(509);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(7).default)("2c862b36", content, !0, { sourceMap: !1 });
    },
    485: function (t, e, n) {
      "use strict";
      var r = n(476);
      n.n(r).a;
    },
    486: function (t, e, n) {
      var r = n(6),
        o = n(52),
        l = n(254);
      e = r(!1);
      var c = o(l);
      e.push([
        t.i,
        '.ui-scroll-down{position:relative;display:inline-block;width:150px;height:150px;display:flex;align-items:center;justify-content:center;border:1px solid hsla(0,0%,100%,.2);border-radius:50%;cursor:pointer}@media (min-width:64em){.ui-scroll-down{width:200px;height:200px}}@media (min-width:90em){.ui-scroll-down{width:250px;height:250px}}.ui-scroll-down:before{display:block;content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-top:1px solid #fff;border-radius:50%}.is-not-touch .ui-scroll-down:hover:before{-webkit-animation:scrollDownBorderAnimation 1s forwards;animation:scrollDownBorderAnimation 1s forwards}.ui-scroll-down__icon-wr{position:relative;display:block;width:40px;height:40px;background-color:hsla(0,0%,100%,.8);-webkit-mask-image:url(' +
          c +
          ");mask-image:url(" +
          c +
          ");-webkit-mask-size:cover;mask-size:cover}@media (min-width:64em){.ui-scroll-down__icon-wr{width:40px;height:40px}}@media (min-width:90em){.ui-scroll-down__icon-wr{width:50px;height:50px}}.ui-scroll-down__icon-inner-wr{position:absolute;display:block;top:0;left:0;width:100%;height:100%;background-color:#c39d42;transform:translateY(-100%)}.is-not-touch .ui-scroll-down:hover .ui-scroll-down__icon-inner-wr{-webkit-animation:scrollDownArrowAnimation 1s .6s forwards;animation:scrollDownArrowAnimation 1s .6s forwards}@-webkit-keyframes scrollDownBorderAnimation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes scrollDownBorderAnimation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes scrollDownArrowAnimation{0%{transform:translateY(-100%)}45%{transform:translateY(0)}55%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes scrollDownArrowAnimation{0%{transform:translateY(-100%)}45%{transform:translateY(0)}55%{transform:translateY(0)}to{transform:translateY(100%)}}",
        "",
      ]),
        (t.exports = e);
    },
    497: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          props: { scrollDownOnClick: { type: Boolean, default: !1 } },
          methods: {
            onClick: function () {
              this.$emit("button-click"),
                this.scrollDownOnClick &&
                  this.$eventBus.$emit("SCROLL_TO", window.innerHeight);
            },
          },
        },
        o = (n(485), n(3)),
        component = Object(o.a)(
          r,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)(
              "div",
              { staticClass: "ui-scroll-down", on: { click: this.onClick } },
              [this._m(0)]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("span", { staticClass: "ui-scroll-down__icon-wr" }, [
                e("span", { staticClass: "ui-scroll-down__icon-inner-wr" }),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    498: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5),
        o = n(507),
        l = {
          props: {
            tag: { type: String, default: "nuxt-link" },
            to: { type: String },
            label: { type: String, required: !0 },
          },
          components: { Underline: n.n(o).a },
          data: function () {
            return { lineLength: 0, tl: null };
          },
          mounted: function () {
            this.init();
          },
          methods: {
            init: function () {
              (this.lineLength = this.$refs.underline.getTotalLength()),
                (this.tlEnter = new r.a.timeline({ paused: !0 })),
                this.tlEnter.addLabel("start"),
                this.tlEnter.fromTo(
                  this.$refs.underline,
                  { strokeDashoffset: this.lineLength },
                  { strokeDashoffset: 0, duration: 2, ease: "power2.out" },
                  "start"
                ),
                this.tlEnter.to(
                  this.$el.querySelectorAll(".word"),
                  { y: "-100%", duration: 1, stagger: 0.1, ease: "power2.out" },
                  "start"
                ),
                (this.tlLeave = new r.a.timeline({ paused: !0 })),
                this.tlLeave.addLabel("start"),
                this.tlLeave.to(
                  this.$el.querySelectorAll(".word"),
                  { y: "-200%", duration: 1, stagger: 0.1, ease: "power2.out" },
                  "start"
                ),
                r.a.set(this.$refs.underline, {
                  strokeDasharray: this.lineLength,
                  strokeDashoffset: 0,
                });
            },
            onMouseEnter: function () {
              this.tlEnter.restart();
            },
            onMouseLeave: function () {
              this.tlLeave.restart();
            },
          },
        },
        c = (n(508), n(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "span",
              { on: { mouseenter: t.onMouseEnter } },
              [
                n(
                  t.tag,
                  {
                    tag: "component",
                    staticClass: "ui-cta-underline",
                    attrs: { to: t.localePath(t.to) },
                    on: {
                      click: function (e) {
                        return t.$emit("button-click");
                      },
                    },
                  },
                  [
                    n(
                      "span",
                      {
                        directives: [
                          {
                            name: "splitting",
                            rawName: "v-splitting",
                            value: "words",
                            expression: "'words'",
                          },
                        ],
                        staticClass: "ui-cta-underline__label",
                      },
                      [t._v("\n      " + t._s(t.label) + "\n    ")]
                    ),
                    t._v(" "),
                    n("span", { staticClass: "ui-cta-underline__svg-wr" }, [
                      n(
                        "svg",
                        {
                          staticClass: "ui-cta-underline__svg",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 10",
                          },
                        },
                        [
                          n("path", {
                            ref: "underline",
                            attrs: {
                              d:
                                "M15.5 1c-1.5.5-2.6 1-3.4 1.3-3.2 1.5-6.3 3.2-9.2 5.2C1.2 8.6.9 8.9 1 9c.2.2 1.7-.4 4.6-1.5s5.9-2.2 8.8-3.3c2.5-.9 5-1.7 7.5-2.4.8-.2 2.1-.6 2.4-.3.1.1.2.3-1 1.3-1.1.9-2.2 1.6-3.4 2.4-1.4.9-3.2 2.2-2.8 2.6.3.4 2.1.3 3.2 0 .3-.1.6-.2 1-.3 7.9-2.5 16.1-4 24.5-4.4C57.5 2.8 60.2 5.6 68 6.3c6.6.7 22.3-3 31-2.8",
                              fill: "none",
                              stroke: "#c39d42",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-miterlimit": "3.998",
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    502: function (t, e, n) {
      "use strict";
      n(33), n(34), n(8);
      var r = 0;
      e.a = {
        beforeCreate: function () {
          (this.uniqueId = r.toString()), (r += 1);
        },
      };
    },
    503: function (t, e, n) {
      t.exports = n.p + "4bb0812cc5af49c74c0675c5ad47ae7b.svg";
    },
    505: function (t, e, n) {
      var content = n(641);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(7).default)("25e1b26b", content, !0, { sourceMap: !1 });
    },
    506: function (t, e, n) {
      var content = n(643);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(7).default)("38d661ad", content, !0, { sourceMap: !1 });
    },
    507: function (t, e, n) {
      n(25), n(13), n(12), n(8), n(17);
      var r = n(53),
        o = n(54);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var n = e._c,
            data = (e._v, e.data),
            c = e.children,
            d = void 0 === c ? [] : c,
            m = data.class,
            h = data.staticClass,
            style = data.style,
            f = data.staticStyle,
            w = data.attrs,
            _ = void 0 === w ? {} : w,
            v = o(data, [
              "class",
              "staticClass",
              "style",
              "staticStyle",
              "attrs",
            ]);
          return n(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? l(Object(source), !0).forEach(function (e) {
                      r(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : l(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [m, h],
                style: [style, f],
                attrs: Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 100 10",
                  },
                  _
                ),
              },
              v
            ),
            d.concat([
              n("path", {
                attrs: {
                  d:
                    "M15.5 1c-1.5.5-2.6 1-3.4 1.3-3.2 1.5-6.3 3.2-9.2 5.2C1.2 8.6.9 8.9 1 9c.2.2 1.7-.4 4.6-1.5s5.9-2.2 8.8-3.3c2.5-.9 5-1.7 7.5-2.4.8-.2 2.1-.6 2.4-.3.1.1.2.3-1 1.3-1.1.9-2.2 1.6-3.4 2.4-1.4.9-3.2 2.2-2.8 2.6.3.4 2.1.3 3.2 0 .3-.1.6-.2 1-.3 7.9-2.5 16.1-4 24.5-4.4C57.5 2.8 60.2 5.6 68 6.3c6.6.7 22.3-3 31-2.8",
                  fill: "none",
                  stroke: "#c39d42",
                  "stroke-linecap": "round",
                  "stroke-miterlimit": "3.998",
                },
              }),
            ])
          );
        },
      };
    },
    508: function (t, e, n) {
      "use strict";
      var r = n(484);
      n.n(r).a;
    },
    509: function (t, e, n) {
      (e = n(6)(!1)).push([
        t.i,
        '.ui-cta-underline{display:inline-block}.ui-cta-underline *{pointer-events:none}.ui-cta-underline__label{position:relative;display:inline-block;text-transform:uppercase;letter-spacing:.05em;font-family:"Grot10";font-weight:300;font-style:normal;font-size:14px;overflow:hidden}.ui-cta-underline__label strong{font-weight:600}.ui-cta-underline__label em{font-style:italic}@media (min-width:80em){.ui-cta-underline__label{font-size:16px}}.ui-cta-underline .word{position:relative;display:inline-block}.ui-cta-underline .word:before{content:attr(data-word);position:absolute;top:100%;left:0}.ui-cta-underline .word:after{content:attr(data-word);position:absolute;top:200%;left:0}.ui-cta-underline__svg-wr{display:block;position:absolute;top:100%;left:0;margin-left:auto;margin-right:auto;width:70px;height:15px;position:relative}@media (min-width:64em){.ui-cta-underline__svg-wr{width:100px;height:20px}}.ui-cta-underline__svg-wr svg{display:block;width:100%;height:100%}@-webkit-keyframes ui-cta-underline-words-in{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes ui-cta-underline-words-in{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@-webkit-keyframes ui-cta-underline-words-out{0%{transform:translateY(-100%)}to{transform:translateY(-200%)}}@keyframes ui-cta-underline-words-out{0%{transform:translateY(-100%)}to{transform:translateY(-200%)}}',
        "",
      ]),
        (t.exports = e);
    },
    510: function (t, e, n) {
      var content = n(645);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(7).default)("5ccea001", content, !0, { sourceMap: !1 });
    },
    511: function (t, e) {
      t.exports = function (t) {
        (t.options.__i18n = t.options.__i18n || []),
          t.options.__i18n.push(
            '{"it":{"visit_website":"Visita il sito web"},"en":{"visit_website":"Visit website"}}'
          ),
          delete t.options._Ctor;
      };
    },
    640: function (t, e, n) {
      "use strict";
      var r = n(505);
      n.n(r).a;
    },
    641: function (t, e, n) {
      (e = n(6)(!1)).push([
        t.i,
        ".home-slider{position:relative}.home-slider .swiper-container{height:100vh;height:calc(100vh - var(--vh-offset, 0px));overflow:hidden}.home-slider .home-slider-pagination{position:absolute;z-index:1;bottom:30px;left:20px}@media (min-width:40em){.home-slider .home-slider-pagination{bottom:55px;left:30px}}@media (min-width:64em){.home-slider .home-slider-pagination{bottom:50px;left:40px}}@media (max-width:39.99em){.home-slider .home-slider-pagination{transform:rotate(90deg) translateX(-40%) translateY(140%)}}",
        "",
      ]),
        (t.exports = e);
    },
    642: function (t, e, n) {
      "use strict";
      var r = n(506);
      n.n(r).a;
    },
    643: function (t, e, n) {
      (e = n(6)(!1)).push([
        t.i,
        '.home-slide{position:relative;height:100vh;height:calc(100vh - var(--vh-offset, 0px));background-color:#000;overflow:hidden}.home-slide__layer{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.home-slide__layer.-front{z-index:2}.home-slide__layer.-back{z-index:1}.home-slide__img-wr{position:absolute;top:0;left:0;width:100%;height:100%}.home-slide__img{display:block;-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.home-slide__vignette{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-image:radial-gradient(transparent,#000 100%)}.home-slide__texts-wr{width:1920px;max-width:100%;margin-left:auto;margin-right:auto;padding-left:30px;padding-right:30px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}@media (min-width:40em){.home-slide__texts-wr{padding-left:30px;padding-right:30px}}@media (min-width:64em){.home-slide__texts-wr{padding-left:80px;padding-right:80px}}@media (min-width:80em){.home-slide__texts-wr{padding-left:80px;padding-right:80px}}@media (min-width:90em){.home-slide__texts-wr{padding-left:80px;padding-right:80px}}@media (max-width:63.99em){.home-slide__texts-wr:not(.-slide-0){margin-top:10vh}}.home-slide__texts-inner-wr{position:relative}.home-slide__heading{text-transform:uppercase;margin-bottom:.2em;font-family:"Domaine Sans Display";font-weight:300;font-style:normal;font-size:35px}@media (min-width:64em){.home-slide__heading{margin-bottom:.1em}}.home-slide__heading strong{font-weight:300;color:#c39d42}@media (min-width:64em){.home-slide__heading{font-size:5.2vw;line-height:1}}@media (min-width:90em){.home-slide__heading{font-size:80px}}.home-slide__heading.-slide-0{font-family:"Domaine Sans Display";font-weight:300;font-style:normal;font-size:30px}.home-slide__heading.-slide-0 strong{font-weight:300;color:#c39d42}@media (min-width:64em){.home-slide__heading.-slide-0{font-size:5.2vw;line-height:1}}@media (min-width:90em){.home-slide__heading.-slide-0{font-size:70px}}.home-slide__subheading{font-family:"Domaine Sans Display";font-weight:300;font-style:normal;font-size:24px;margin-bottom:1em}.home-slide__subheading strong{font-weight:300;color:#c39d42}@media (min-width:64em){.home-slide__subheading{font-size:2.6vw;line-height:1.1}}@media (min-width:90em){.home-slide__subheading{font-size:40px}}.home-slide__subheading em{display:inline-block;font-family:"Hijrnotes";font-weight:400;font-style:normal;color:#c39d42;font-size:170%;vertical-align:middle;position:relative;top:-.2em;margin-left:.1em;margin-right:.1em}@media (max-width:39.99em){.home-slide__subheading br,.home-slide__subheading br:after{content:" "}}.home-slide .ui-cta-underline:after{display:block;content:""}.home-slide .ui-cta-underline:after,.home-slide__link{position:absolute;top:0;left:0;width:100%;height:100%}.home-slide__cta-wr .ui-button-arrow{width:40px;height:40px;margin-left:auto;margin-right:auto}.home-slide__scroll-down-wr{position:absolute;z-index:3;left:0;width:100%;top:100vh;top:calc(100vh - var(--vh-offset, 0px));transform:translateY(-80%);opacity:.5;transition:opacity .3s}.home-slide__scroll-down-wr .ui-scroll-down{margin-left:auto;margin-right:auto}.is-not-touch .home-slide__scroll-down-wr:hover{opacity:1}.fscrollIndicatorTransitionleave-active,.scrollIndicatorTransition-enter-active{transition:opacity 1s,transform 1s cubic-bezier(.16,1,.3,1)}.scrollIndicatorTransition-enter,.scrollIndicatorTransition-leave-to{opacity:0;transform:translateY(20px)}',
        "",
      ]),
        (t.exports = e);
    },
    644: function (t, e, n) {
      "use strict";
      var r = n(510);
      n.n(r).a;
    },
    645: function (t, e, n) {
      var r = n(6),
        o = n(52),
        l = n(503);
      e = r(!1);
      var c = o(l);
      e.push([
        t.i,
        '.carousel-press{padding-top:80px;padding-bottom:80px}@media (min-width:80em){.carousel-press{padding-top:150px;padding-bottom:150px}}.carousel-press__logos-wr .swiper-slide{cursor:pointer}.carousel-press__logo{display:block;margin-left:auto;margin-right:auto;width:100%;max-width:150px;opacity:.2;transition:opacity .3s}.is-not-touch .swiper-slide:hover .carousel-press__logo,.swiper-slide-active .carousel-press__logo{opacity:1}.carousel-press__quotes-wr{padding-left:30px;padding-right:30px;width:650px;max-width:100%;margin-left:auto;margin-right:auto}@media (min-width:40em){.carousel-press__quotes-wr{padding-left:30px;padding-right:30px}}@media (min-width:64em){.carousel-press__quotes-wr{padding-left:80px;padding-right:80px}}@media (min-width:80em){.carousel-press__quotes-wr{padding-left:80px;padding-right:80px}}@media (min-width:90em){.carousel-press__quotes-wr{padding-left:80px;padding-right:80px}}.carousel-press__quotes-wr .swiper-container{overflow:visible}.carousel-press__quote{font-family:"Domaine Sans Display";font-weight:300;font-style:normal;font-size:20px;text-align:center;line-height:1.5;padding-left:10px;padding-right:10px;margin-bottom:1em}.carousel-press__quote strong{font-weight:300;color:#c39d42}@media (min-width:40em){.carousel-press__quote{font-size:25px}}@media (min-width:80em){.carousel-press__quote{font-size:1.9vw}}@media (min-width:90em){.carousel-press__quote{font-size:35px}}.carousel-press__quote:before{display:block;content:"“";font-size:150%}.carousel-press__link{display:block;width:2em;height:2em;margin-left:auto;margin-right:auto;border:1px solid #606060;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:opacity .3s;opacity:.5}.is-not-touch .carousel-press__link:hover{opacity:1}.carousel-press__link-icon{display:block;width:1em;height:1em;background-color:#fff;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:url(' +
          c +
          ");mask-image:url(" +
          c +
          ")}.carousel-press__pagination{text-align:center;margin-top:40px;margin-left:auto;margin-right:auto}",
        "",
      ]),
        (t.exports = e);
    },
    646: function (t, e, n) {
      "use strict";
      var r = n(511),
        o = n.n(r);
      e.default = o.a;
    },
    789: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(74),
        o = n(92),
        l = {
          props: { firstItem: Object, items: Array },
          mixins: [r.a.VueScreenSizeMixin],
          data: function () {
            return {
              swiperOptions: {
                direction: "vertical",
                mousewheel: !0,
                parallax: !0,
                releaseOnEdges: !0,
                touchReleaseOnEdges: !0,
                resistance: !0,
                resistanceRatio: 0,
                threshold: 10,
                pagination: { el: ".home-slider-pagination", clickable: !0 },
                speed: 800,
                breakpoints: { 1024: { speed: 1e3 } },
              },
              parallaxSelector: ".home-slide__layer.-img",
              interleaveOffset: 0.3,
              slideIndexToAnimate: 0,
              isFirstView: !0,
            };
          },
          computed: {
            swiper: function () {
              return this.$refs.mySwiper.$swiper;
            },
          },
          mounted: function () {
            this.$eventBus.$on("SCROLL_INITIALIZED", this.onScrollReady);
          },
          beforeDestroy: function () {
            this.$eventBus.$off("SCROLL_INITIALIZED", this.onScrollReady);
          },
          methods: {
            onScrollReady: function () {
              this.$theScroll.stop();
            },
            onProgress: function () {
              null !== this.swiper &&
                o.a.onProgress(
                  this.swiper,
                  this.parallaxSelector,
                  this.interleaveOffset
                );
            },
            onTouchStart: function () {
              null !== this.swiper && o.a.onTouchStart(this.swiper);
            },
            onSetTransition: function (t) {
              null !== this.swiper &&
                o.a.onSetTransition(this.swiper, this.parallaxSelector, t);
            },
            swiperInit: function () {},
            swiperTransitionEnd: function () {
              (this.isFirstView = !1),
                this.swiper.activeIndex === this.swiper.slides.length - 1
                  ? this.$theScroll.start()
                  : (this.$theScroll.stop(), this.$theScroll.scrollTo("top")),
                (this.slideIndexToAnimate = this.swiper.activeIndex),
                this.animateSlideEnter();
            },
            animateSlideEnter: function () {},
          },
        },
        c = (n(640), n(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "home-slider" },
              [
                n(
                  "swiper",
                  {
                    ref: "mySwiper",
                    attrs: { options: t.swiperOptions, "auto-destroy": !1 },
                    on: {
                      init: t.swiperInit,
                      progress: t.onProgress,
                      touchStart: t.onTouchStart,
                      setTransition: t.onSetTransition,
                      transitionEnd: t.swiperTransitionEnd,
                    },
                  },
                  t._l(t.items, function (e, r) {
                    return n(
                      "swiper-slide",
                      { key: e.id, class: "-index-" + r },
                      [
                        n("PageHomeSlide", {
                          attrs: {
                            item: e,
                            index: r,
                            isActive: r === t.slideIndexToAnimate,
                            isFirstView: t.isFirstView,
                          },
                        }),
                      ],
                      1
                    );
                  }),
                  1
                ),
                t._v(" "),
                n("CarouselPagination", {
                  staticClass: "home-slider-pagination",
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        PageHomeSlide: n(798).default,
        CarouselPagination: n(255).default,
      });
    },
    790: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(21),
        o = n(502),
        l = {
          props: { items: Array },
          mixins: [o.a],
          data: function () {
            var t;
            return {
              swiperLogosOptions: {
                speed: 600,
                preventInteractionOnTransition: !0,
                centeredSlides: !0,
                loop: !0,
                loopedSlides: 2,
                threshold: 10,
                slideToClickedSlide: !0,
                slidesPerView: 1,
                breakpoints: {
                  768: { slidesPerView: 3 },
                  1280: { slidesPerView: 5 },
                },
              },
              swiperQuotesOptions:
                ((t = {
                  speed: 600,
                  preventInteractionOnTransition: !0,
                  threshold: 10,
                  grabCursor: !0,
                  loop: !0,
                  loopedSlides: 2,
                }),
                Object(r.a)(t, "threshold", 10),
                Object(r.a)(t, "parallax", !0),
                Object(r.a)(t, "autoHeight", !0),
                Object(r.a)(t, "pagination", {
                  el: ".carousel-pagination.unique-id-".concat(this.uniqueId),
                  type: "bullets",
                  dynamicBullets: !0,
                }),
                t),
            };
          },
          computed: {
            swiperLogos: function () {
              return this.$refs.swiperLogos.$swiper;
            },
            swiperQuotes: function () {
              return this.$refs.swiperQuotes.$swiper;
            },
          },
          mounted: function () {
            this.syncSwipers();
          },
          methods: {
            syncSwipers: function () {
              (this.swiperLogos.controller.control = this.swiperQuotes),
                (this.swiperQuotes.controller.control = this.swiperLogos);
            },
          },
        },
        c = (n(644), n(3)),
        d = n(646),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "carousel-press" }, [
              n(
                "div",
                { staticClass: "carousel-press__logos-wr" },
                [
                  n(
                    "swiper",
                    {
                      ref: "swiperLogos",
                      attrs: {
                        "auto-destroy": !1,
                        options: t.swiperLogosOptions,
                      },
                    },
                    t._l(t.items, function (e) {
                      return n("swiper-slide", { key: e.id }, [
                        n("img", {
                          staticClass: "carousel-press__logo",
                          attrs: {
                            src: t.$env.CMS_URL + e.sourceLogo[0].url150,
                            srcset:
                              "" +
                              t.$env.CMS_URL +
                              e.sourceLogo[0].url150 +
                              " 150w, " +
                              t.$env.CMS_URL +
                              e.sourceLogo[0].url300 +
                              " 300w",
                            alt: e.sourceLogo[0].title,
                            width: e.sourceLogo[0].width,
                            height: e.sourceLogo[0].height,
                          },
                        }),
                      ]);
                    }),
                    1
                  ),
                ],
                1
              ),
              t._v(" "),
              n(
                "div",
                { staticClass: "carousel-press__quotes-wr" },
                [
                  n(
                    "swiper",
                    {
                      ref: "swiperQuotes",
                      attrs: { options: t.swiperQuotesOptions },
                    },
                    t._l(t.items, function (e) {
                      return n("swiper-slide", { key: e.id }, [
                        n("div", {
                          staticClass: "carousel-press__quote",
                          attrs: {
                            "data-swiper-parallax-opacity": "0",
                            "data-swiper-parallax-scale": ".8",
                          },
                          domProps: { innerHTML: t._s(e.quote) },
                        }),
                        t._v(" "),
                        n(
                          "div",
                          {
                            attrs: {
                              "data-swiper-parallax-opacity": "0",
                              "data-swiper-parallax": "-15%",
                            },
                          },
                          [
                            n(
                              "a",
                              {
                                staticClass: "carousel-press__link",
                                attrs: {
                                  href: e.sourceUrl,
                                  target: "_blank",
                                  rel: "noopener",
                                  "aria-label": t.$t("visit_website"),
                                },
                              },
                              [
                                n("span", {
                                  staticClass: "carousel-press__link-icon",
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]);
                    }),
                    1
                  ),
                  t._v(" "),
                  n("CarouselPagination", {
                    staticClass: "carousel-press__pagination",
                    attrs: { uniqueId: this.uniqueId },
                  }),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      "function" == typeof d.default && Object(d.default)(component);
      e.default = component.exports;
      installComponents(component, { CarouselPagination: n(255).default });
    },
    798: function (t, e, n) {
      "use strict";
      n.r(e);
      n(253);
      var r = n(5),
        o = n(74),
        l = {
          props: {
            item: Object,
            index: Number,
            isActive: Boolean,
            isFirstView: Boolean,
          },
          mixins: [o.a.VueScreenSizeMixin],
          data: function () {
            return {
              imageTl: null,
              showScrollIndicator: !1,
              hasHoverEffect: !0,
              hasProximityEffect: !0,
              nearbyInstance: null,
              showHome: !1,
            };
          },
          computed: {},
          created: function () {
            this.$eventBus.$on("SHOW_HOME_PAGE", this.showHomeFlag);
          },
          mounted: function () {
            this.initHoverEffect();
          },
          beforeDestroy: function () {
            this.nearbyInstance &&
              (this.nearbyInstance.destroy(), (this.nearbyInstance = null)),
              this.$eventBus.$off("SHOW_HOME_PAGE", this.showHomeFlag);
          },
          methods: {
            showHomeFlag: function () {
              this.showHome = !0;
            },
            initHoverEffect: function () {
              this.item.isFirstSlide ||
                (r.a.set(this.$refs.image, { scale: 1.3 }),
                (this.imageTl = new r.a.timeline({ paused: !0 })),
                this.imageTl.addLabel("start"),
                this.imageTl.to(this.$refs.image, { scale: 1, duration: 2 }));
            },
            imageToStep1: function () {
              this.item.isFirstSlide ||
                (this.imageTl && this.imageTl.timeScale(1).reverse());
            },
            imageToStep2: function () {
              this.item.isFirstSlide ||
                (this.imageTl && this.imageTl.timeScale(1).play());
            },
            textsEnter: function (t) {
              var e = this,
                n = new r.a.timeline({});
              n.addLabel("start"),
                r.a.set(this.$refs.scrollindicator, { opacity: 0 }),
                setTimeout(function () {
                  e.$refs.heading.classList.add("is-inview");
                }, 200),
                n.fromTo(
                  [this.$refs.subheading, this.$refs.cta],
                  { opacity: 0, y: 20 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.3,
                    ease: "power3.out",
                    onComplete: function () {
                      e.showScrollIndicator = !0;
                    },
                  },
                  ".6"
                ),
                this.isFirstView &&
                  !this.$refs.imgWr.classList.contains("do-not-animate") &&
                  n.fromTo(
                    this.$refs.imgWr,
                    { opacity: 0, scale: 1.1 },
                    { opacity: 1, scale: 1, duration: 3, ease: "power2.out" },
                    "start"
                  );
            },
            textsLeave: function (t) {
              this.$refs.heading.classList.remove("is-inview"),
                (this.showScrollIndicator = !1);
            },
            onScrollDownClick: function () {
              this.$parent.$parent.$parent.swiper.slideNext();
            },
            onLinkMouseEnter: function () {
              this.$refs &&
                this.$refs.underlineCta &&
                this.$refs.underlineCta.onMouseEnter();
            },
          },
        },
        c = (n(642), n(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "home-slide",
                class: "-slide-" + t.index,
                attrs: { "data-slide": t.item.id },
              },
              [
                n(
                  "div",
                  { staticClass: "home-slide__layer -front -texts" },
                  [
                    n(
                      "transition",
                      {
                        attrs: { appear: "" },
                        on: { enter: t.textsEnter, leave: t.textsLeave },
                      },
                      [
                        n(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.showHome && t.isActive,
                                expression: "showHome && isActive",
                              },
                            ],
                            staticClass: "home-slide__texts-wr",
                            class: "-slide-" + t.index,
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "home-slide__texts-inner-wr",
                                on: {
                                  mouseenter: t.imageToStep2,
                                  mouseleave: t.imageToStep1,
                                },
                              },
                              [
                                t.item.heading
                                  ? n(t.item.isFirstSlide ? "h1" : "h2", {
                                      directives: [
                                        {
                                          name: "splitting",
                                          rawName: "v-splitting",
                                          value: "lines",
                                          expression: "'lines'",
                                        },
                                      ],
                                      ref: "heading",
                                      tag: "component",
                                      staticClass: "home-slide__heading",
                                      class: "-slide-" + t.index,
                                      attrs: { "data-title-animation": "" },
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$helpers.removeParagraph(
                                            t.item.heading
                                          )
                                        ),
                                      },
                                    })
                                  : t._e(),
                                t._v(" "),
                                t.item.subHeading
                                  ? n("div", {
                                      ref: "subheading",
                                      staticClass: "home-slide__subheading",
                                      domProps: {
                                        innerHTML: t._s(t.item.subHeading),
                                      },
                                    })
                                  : t._e(),
                                t._v(" "),
                                t.item.ctaPath && t.item.ctaLabel
                                  ? n(
                                      "div",
                                      {
                                        ref: "cta",
                                        staticClass: "home-slide__cta-wr",
                                      },
                                      [
                                        t.$vssWidth >= 1024
                                          ? n("UiCtaUnderline", {
                                              ref: "underlineCta",
                                              attrs: {
                                                label: t.item.ctaLabel,
                                                to: t.item.ctaPath,
                                              },
                                            })
                                          : n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath(
                                                    t.item.ctaPath
                                                  ),
                                                },
                                              },
                                              [n("UiButtonArrow")],
                                              1
                                            ),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                t._v(" "),
                                t.item.ctaPath && t.item.ctaLabel
                                  ? n("nuxt-link", {
                                      staticClass: "home-slide__link",
                                      attrs: {
                                        to: t.localePath(t.item.ctaPath),
                                      },
                                      nativeOn: {
                                        mouseenter: function (e) {
                                          return t.onLinkMouseEnter(e);
                                        },
                                      },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                n("div", { staticClass: "home-slide__layer -back -img" }, [
                  n(
                    "div",
                    { ref: "imgWr", staticClass: "home-slide__img-wr" },
                    [
                      t.$vssWidth < 768 && t.item.imageMobile
                        ? n("img", {
                            ref: "image",
                            staticClass: "home-slide__img -small",
                            attrs: {
                              src:
                                t.$env.CMS_URL + t.item.imageMobile[0].url480,
                              srcset:
                                "" +
                                t.$env.CMS_URL +
                                t.item.imageMobile[0].url768 +
                                " 768w, \n\t\t\t\t\t\t" +
                                t.$env.CMS_URL +
                                t.item.imageMobile[0].url640 +
                                " 640w, \n\t\t\t\t\t\t" +
                                t.$env.CMS_URL +
                                t.item.imageMobile[0].url480 +
                                " 480w",
                              sizes: "100vw",
                              alt: t.item.imageMobile[0].title,
                              width: t.item.imageMobile[0].width,
                              height: t.item.imageMobile[0].height,
                            },
                          })
                        : n("img", {
                            ref: "image",
                            staticClass: "home-slide__img -large",
                            attrs: {
                              src:
                                t.$env.CMS_URL + t.item.imageDesktop[0].url1024,
                              srcset:
                                "" +
                                t.$env.CMS_URL +
                                t.item.imageDesktop[0].url1024 +
                                " 1024w, \n\t\t\t\t\t\t" +
                                t.$env.CMS_URL +
                                t.item.imageDesktop[0].url1280 +
                                " 1280w, \n\t\t\t\t\t\t" +
                                t.$env.CMS_URL +
                                t.item.imageDesktop[0].url1440 +
                                " 1440w, \n\t\t\t\t\t\t" +
                                t.$env.CMS_URL +
                                t.item.imageDesktop[0].url1920 +
                                " 1920w",
                              sizes: "100vw",
                              alt: t.item.imageDesktop[0].title,
                              width: t.item.imageDesktop[0].width,
                              height: t.item.imageDesktop[0].height,
                            },
                          }),
                    ]
                  ),
                  t._v(" "),
                  n("span", { staticClass: "home-slide__vignette" }),
                ]),
                t._v(" "),
                t.item.isFirstSlide
                  ? n(
                      "div",
                      { staticClass: "home-slide__scroll-down-wr" },
                      [
                        n(
                          "transition",
                          { attrs: { name: "scrollIndicatorTransition" } },
                          [
                            n("UiScrollDown", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.showScrollIndicator,
                                  expression: "showScrollIndicator",
                                },
                              ],
                              on: { "button-click": t.onScrollDownClick },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        UiCtaUnderline: n(498).default,
        UiButtonArrow: n(173).default,
        UiScrollDown: n(497).default,
      });
    },
    813: function (t, e, n) {
      "use strict";
      n.r(e);
      n(25), n(13), n(12), n(8), n(17);
      var r = n(21),
        o = (n(28), n(4)),
        head = n(477),
        l = n(478),
        c = n(479),
        d = n(172),
        m = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.siteId,
            n = void 0 === e ? "it" : e;
          return '\n{\n  page: entry(id: 212 site: "'.concat(
            n,
            '"){\n    title\n\t\t...on home_home_Entry{\n\t\t\tseoTitle\n      seoDescription\n\t\t\thomeHeading,\n\t\t\thomeLead,\n\t\t\thomeCoverDesktop{\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t\ttitle\n\t\t\t\turl\n\t\t\t\turl1920: url @transform (width: 1920)\n\t\t\t\turl1440: url @transform (width: 1440)\n\t\t\t\turl1280: url @transform (width: 1280)\n\t\t\t\turl1024: url @transform (width: 1024)\n\t\t\t}\n\t\t\thomeCoverMobile{\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t\ttitle\n\t\t\t\turl\n\t\t\t\turl768: url @transform (width: 768)\n\t\t\t\turl640: url @transform (width: 640)\n\t\t\t\turl480: url @transform (width: 480)\n\t\t\t}\n\t\t\tslidesItems: homeSlides{\n\t\t\t\t...on homeSlides_slide_BlockType{\n\t\t\t\t\tid\n\t\t\t\t\theading\n\t\t\t\t\tsubHeading\n\t\t\t\t\tctaLabel\n\t\t\t\t\tctaPath\n\t\t\t\t\timageDesktop{\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\turl\n\t\t\t\t\t\turl1920: url @transform (width: 1920)\n\t\t\t\t\t\turl1440: url @transform (width: 1440)\n\t\t\t\t\t\turl1280: url @transform (width: 1280)\n\t\t\t\t\t\turl1024: url @transform (width: 1024)\n\t\t\t\t\t}\n\t\t\t\t\timageMobile{\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\turl\n\t\t\t\t\t\turl768: url @transform (width: 768)\n\t\t\t\t\t\turl640: url @transform (width: 640)\n\t\t\t\t\t\turl480: url @transform (width: 480)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tpressItems: homePress{\n\t\t\t\t... on homePress_homePressItem_BlockType{\n\t\t\t\t\tid\n\t\t\t\t\tquote\n\t\t\t\t\tsourceLogo{\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\turl150: url @transform (width: 150)\n\t\t\t\t\t\turl300: url @transform (width: 300)\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tsourceUrl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n}\n\n'
          );
        },
        h = (function () {
          var t = Object(o.a)(
            regeneratorRuntime.mark(function t() {
              var e,
                n,
                r,
                o,
                l = arguments;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = l.length > 0 && void 0 !== l[0] ? l[0] : {}),
                        (n = e.siteId),
                        (r = m({ siteId: void 0 === n ? "it" : n })),
                        (t.next = 4),
                        d.a.request(r)
                      );
                    case 4:
                      return (o = t.sent), t.abrupt("return", o);
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
      function f(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function w(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? f(Object(source), !0).forEach(function (e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : f(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var _ = {
          name: "Home",
          mixins: [head.a, l.a, c.a],
          components: {},
          asyncData: function (t) {
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var data;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h({ siteId: t.app.i18n.locale });
                      case 2:
                        return (
                          (data = e.sent),
                          e.abrupt(
                            "return",
                            w(w({}, data.page), {}, { pageName: "Home" })
                          )
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          fetch: function () {
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          data: function () {
            return {};
          },
          computed: {
            firstSlideItem: function () {
              return {
                heading: this.homeHeading,
                subHeading: this.homeLead,
                imageDesktop: this.homeCoverDesktop,
                imageMobile: this.homeCoverMobile,
                isFirstSlide: !0,
              };
            },
            allSlidesItems: function () {
              return (
                !!this.firstSlideItem &&
                [this.firstSlideItem].concat(this.slidesItems)
              );
            },
          },
          mounted: function () {
            this.$nextTick(function () {});
          },
          methods: {},
        },
        v = n(3),
        component = Object(v.a)(
          _,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              { staticClass: "home" },
              [
                e(
                  "TheScroll",
                  [
                    e("PageHomeSlider", {
                      attrs: { items: this.allSlidesItems },
                    }),
                    this._v(" "),
                    e("CarouselPress", { attrs: { items: this.pressItems } }),
                    this._v(" "),
                    e("TheFooter"),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        PageHomeSlider: n(789).default,
        CarouselPress: n(790).default,
        TheFooter: n(251).default,
        TheScroll: n(250).default,
      });
    },
  },
]);
