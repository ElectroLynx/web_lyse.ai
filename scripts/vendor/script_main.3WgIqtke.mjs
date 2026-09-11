import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  L as a,
  M as o,
  N as s,
  P as c,
  R as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  k as _,
  l as v,
  m as y,
  n as ee,
  o as b,
  p as te,
  r as ne,
  s as re,
  t as x,
  u as S,
  v as C,
  x as w,
} from "./react.D20wc1Tc.mjs";
import { C as T, a as E, n as D, r as O, t as k } from "./motion.uzrgujnr.mjs";
import {
  $ as ie,
  B as ae,
  C as A,
  D as oe,
  E as j,
  F as M,
  H as N,
  I as se,
  J as ce,
  K as le,
  O as ue,
  P,
  Q as de,
  S as fe,
  V as F,
  W as pe,
  X as me,
  Y as he,
  _ as ge,
  _t as _e,
  a as ve,
  at as I,
  c as ye,
  d as L,
  dt as be,
  et as xe,
  f as Se,
  ft as R,
  g as Ce,
  gt as we,
  ht as Te,
  i as Ee,
  it as De,
  l as Oe,
  lt as ke,
  m as Ae,
  mt as je,
  n as Me,
  nt as Ne,
  o as Pe,
  p as Fe,
  q as Ie,
  r as z,
  rt as Le,
  s as Re,
  st as ze,
  t as B,
  tt as Be,
  u as Ve,
  ut as V,
  x as He,
  y as H,
  z as Ue,
} from "./framer.CxxJYT0Q.mjs";
import { a as We, i as Ge, n as Ke, o as qe, r as Je, t as Ye } from "./AnqNoZ_U2.BztUEgF9.mjs";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./IsDMY7Ceo.DVl7KeDs.mjs";
import { c as et, l as tt, n as nt, s as rt, t as it, u as at } from "./RrS411mD0.CsfXdnTS.mjs";
function ot(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt = e(() => {
    (i(),
      (st = class {
        constructor() {
          ((this.isRunning = !1),
            (this.value = 0),
            (this.from = 0),
            (this.to = 0),
            (this.duration = 0),
            (this.currentTime = 0));
        }
        advance(e) {
          var t;
          if (!this.isRunning) return;
          let n = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let t = ot(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            let r = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = (function (e, t, n, r) {
                  return (function (e, t, n) {
                    return (1 - n) * e + n * t;
                  })(e, t, 1 - Math.exp(-n * r));
                })(this.value, this.to, 60 * this.lerp, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (n = !0)))
              : ((this.value = this.to), (n = !0));
          (n && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, n));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (ct = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.width = 0),
            (this.height = 0),
            (this.scrollWidth = 0),
            (this.scrollHeight = 0),
            (this.resize = () => {
              (this.onWrapperResize(), this.onContentResize());
            }),
            (this.onWrapperResize = () => {
              this.wrapper === l
                ? ((this.width = l.innerWidth), (this.height = l.innerHeight))
                : this.wrapper instanceof HTMLElement &&
                  ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              this.wrapper === l
                ? ((this.scrollHeight = this.content.scrollHeight),
                  (this.scrollWidth = this.content.scrollWidth))
                : this.wrapper instanceof HTMLElement &&
                  ((this.scrollHeight = this.wrapper.scrollHeight),
                  (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            (this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === l
                ? l.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          var e, t;
          ((e = this.wrapperResizeObserver) == null || e.disconnect(),
            (t = this.contentResizeObserver) == null || t.disconnect(),
            l.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (lt = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          var n;
          return (
            ((n = this.events[e]) != null && n.push(t)) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (ut = 100 / 6),
      (dt = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.lastDelta = { x: 0, y: 0 }),
            (this.windowWidth = 0),
            (this.windowHeight = 0),
            (this.onTouchStart = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
            }),
            (this.onTouchMove = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
                r = -(t - (this.touchStart?.x ?? 0)) * this.touchMultiplier,
                i = -(n - (this.touchStart?.y ?? 0)) * this.touchMultiplier;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: r, y: i }),
                this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
            }),
            (this.onTouchEnd = (e) => {
              this.emitter.emit(`scroll`, {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e,
              });
            }),
            (this.onWheel = (e) => {
              let { deltaX: t, deltaY: n, deltaMode: r } = e;
              ((t *= r === 1 ? ut : r === 2 ? this.windowWidth : 1),
                (n *= r === 1 ? ut : r === 2 ? this.windowHeight : 1),
                (t *= this.wheelMultiplier),
                (n *= this.wheelMultiplier),
                this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
            }),
            (this.onWindowResize = () => {
              ((this.windowWidth = l.innerWidth), (this.windowHeight = l.innerHeight));
            }),
            (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new lt()),
            l.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            l.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel),
            this.element.removeEventListener(`touchstart`, this.onTouchStart),
            this.element.removeEventListener(`touchmove`, this.onTouchMove),
            this.element.removeEventListener(`touchend`, this.onTouchEnd));
        }
      }),
      (ft = class {
        constructor({
          wrapper: e = l,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: u = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: d = 0.1,
          infinite: f = !1,
          orientation: p = `vertical`,
          gestureOrientation: m = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v,
          virtualScroll: y,
          __experimental__naiveDimensions: ee = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.userData = {}),
            (this.lastVelocity = 0),
            (this.velocity = 0),
            (this.direction = 0),
            (this.onPointerDown = (e) => {
              e.button === 1 && this.reset();
            }),
            (this.onVirtualScroll = (e) => {
              if (
                typeof this.options.virtualScroll == `function` &&
                !1 === this.options.virtualScroll(e)
              )
                return;
              let { deltaX: t, deltaY: n, event: r } = e;
              if (
                (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }), r.ctrlKey)
              )
                return;
              let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
              if (
                ((this.isTouching = r.type === `touchstart` || r.type === `touchmove`),
                this.options.syncTouch &&
                  i &&
                  r.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let o = t === 0 && n === 0,
                s =
                  (this.options.gestureOrientation === `vertical` && n === 0) ||
                  (this.options.gestureOrientation === `horizontal` && t === 0);
              if (o || s) return;
              let c = r.composedPath();
              c = c.slice(0, c.indexOf(this.rootElement));
              let l = this.options.prevent;
              if (
                c.find(
                  (e) =>
                    e instanceof Element &&
                    ((typeof l == `function` && l?.(e)) ||
                      e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                      (i && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                      (a && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                      (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`)))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void r.preventDefault();
              if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              r.preventDefault();
              let u = n;
              this.options.gestureOrientation === `both`
                ? (u = Math.abs(n) > Math.abs(t) ? n : t)
                : this.options.gestureOrientation === `horizontal` && (u = t);
              let d = i && this.options.syncTouch,
                f = i && r.type === `touchend` && Math.abs(u) > 5;
              (f && (u = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + u,
                  Object.assign(
                    { programmatic: !1 },
                    d
                      ? { lerp: f ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (l.lenisVersion = `1.1.9`),
            (e && e !== document.documentElement && e !== document.body) || (e = l),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: u,
              lerp: d,
              infinite: f,
              gestureOrientation: m,
              orientation: p,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              virtualScroll: y,
              __experimental__naiveDimensions: ee,
            }),
            (this.animate = new st()),
            (this.emitter = new lt()),
            (this.dimensions = new ct({ wrapper: e, content: t, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new dt(r, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = this.options.lerp,
            onStart: s,
            onComplete: c,
            force: u = !1,
            programmatic: d = !0,
            userData: f = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e instanceof HTMLElement && e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== l) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (
              typeof e == `number` &&
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = ot(0, e, this.limit)),
              e !== this.targetScroll)
            ) {
              if (((this.userData = f), n))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  c?.(this),
                  void (this.userData = {})
                );
              (d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        c?.(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            }));
        }
        get rootElement() {
          return this.options.wrapper === l ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function mt(e) {
  let { intensity: t } = e,
    n = r(null);
  return (
    o(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    o(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    o(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = l.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    o(() => {
      try {
        if (typeof ft != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new ft({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    o(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(l.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = l.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    f(`div`, { style: e.style })
  );
}
var ht,
  gt = e(() => {
    (i(),
      b(),
      F(),
      pt(),
      n(),
      (ht = R(
        mt,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (ht.displayName = `Smooth Scroll`),
      A(ht, {
        intensity: {
          title: `Intensity`,
          type: z.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt = e(() => {
    (b(),
      F(),
      n(),
      (_t = `var(--framer-icon-mask)`),
      (vt = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (yt = T.create(vt)),
      (bt = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(yt, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (xt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12 0 L 0 12" fill="transparent" height="12px" id="qMvRy61Gj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 6)" width="12px"/><path d="M 0 0 L 12 12" fill="transparent" height="12px" id="YX0AMSC6b" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 6)" width="12px"/></svg>`),
      (St = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Ct = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = St(e),
            l = V(`2710857035`, xt);
          return f(bt, {
            ...c,
            className: j(`framer-RiU4T`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-RiU4T { -webkit-mask: ${_t}; aspect-ratio: 1; display: block; mask: ${_t}; width: 24px; }`,
        ],
        `framer-RiU4T`
      )),
      (Ct.displayName = `X`),
      A(Ct, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  Tt,
  Et,
  Dt,
  Ot = e(() => {
    (F(),
      oe.loadFonts([]),
      (Tt = [{ explicitInter: !0, fonts: [] }]),
      (Et = [
        `.framer-kp3ZC .framer-styles-preset-161xcm:not(.rich-text-wrapper), .framer-kp3ZC .framer-styles-preset-161xcm.rich-text-wrapper a { --framer-link-current-text-color: var(--token-5d3602f5-d470-4b4b-916d-5b57bbf588f8, rgba(255, 255, 255, 0.8)); --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, #ffffff); --framer-link-hover-text-decoration: none; --framer-link-text-color: #dedede; --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (Dt = `framer-kp3ZC`));
  }),
  kt,
  At,
  jt,
  Mt = e(() => {
    (F(),
      oe.loadFonts([
        `GF;Host Grotesk-regular`,
        `GF;Host Grotesk-700`,
        `GF;Host Grotesk-700italic`,
        `GF;Host Grotesk-italic`,
      ]),
      (kt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Host Grotesk`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/hostgrotesk/v4/co3UmWBnlCJ3U42vbbfdwMjzqHAXOdFzqU5PuefOzhOp-j94InI.woff2`,
              weight: `400`,
            },
            {
              family: `Host Grotesk`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/hostgrotesk/v4/co3UmWBnlCJ3U42vbbfdwMjzqHAXOdFzqU5PuQDJzhOp-j94InI.woff2`,
              weight: `700`,
            },
            {
              family: `Host Grotesk`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/hostgrotesk/v4/co3SmWBnlCJ3U42vbbfdwMjZoULo4bgYM-BIrC-NwVKj-x19MnL2jg.woff2`,
              weight: `700`,
            },
            {
              family: `Host Grotesk`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/hostgrotesk/v4/co3SmWBnlCJ3U42vbbfdwMjZoULo4bgYM-BIrC-NJlWj-x19MnL2jg.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (At = [
        `.framer-FO26h .framer-styles-preset-18dw6p4:not(.rich-text-wrapper), .framer-FO26h .framer-styles-preset-18dw6p4.rich-text-wrapper h1 { --framer-font-family: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-bold-italic: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-italic: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-FO26h .framer-styles-preset-18dw6p4:not(.rich-text-wrapper), .framer-FO26h .framer-styles-preset-18dw6p4.rich-text-wrapper h1 { --framer-font-family: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-bold-italic: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-italic: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-FO26h .framer-styles-preset-18dw6p4:not(.rich-text-wrapper), .framer-FO26h .framer-styles-preset-18dw6p4.rich-text-wrapper h1 { --framer-font-family: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-bold-italic: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-family-italic: "Host Grotesk", "Host Grotesk Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 48px; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (jt = `framer-FO26h`));
  }),
  U,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  W,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  G,
  Xt = e(() => {
    (b(),
      F(),
      k(),
      n(),
      wt(),
      Ot(),
      Mt(),
      (U = Te(je(H))),
      (Nt = P(Ct)),
      (Pt = Te(je(T.div))),
      (Ft = `framer-0SYJs`),
      (It = { VsZ7AEeNV: `framer-v-4ivw1i` }),
      (Lt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 30, delay: 0, mass: 1, stiffness: 220, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Rt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 716,
      }),
      (zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 0.2, mass: 1, stiffness: 200, type: `spring` },
        x: 0,
        y: 0,
      }),
      (W = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 160,
      }),
      (Vt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 0.3, mass: 1, stiffness: 200, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ht = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 0.4, mass: 1, stiffness: 200, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ut = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 0.5, mass: 1, stiffness: 200, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Wt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 0.6, mass: 1, stiffness: 200, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Gt = (e, t) => `translateX(-50%) ${t}`),
      (Kt = ({ value: e, children: n }) => {
        let r = _(E),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (qt = T.create(s)),
      (Jt = ({ closeOverlay: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        HYyn6lgsx: e ?? i.HYyn6lgsx,
      })),
      (Yt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: o, setLocale: c } = I();
          xe();
          let { style: l, className: u, layoutId: d, variant: p, HYyn6lgsx: m, ...h } = Jt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: ee,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: x,
            } = be({ defaultVariant: `VsZ7AEeNV`, ref: i, variant: p, variantClassNames: It }),
            S = Yt(e, x),
            { activeVariantCallback: w, delay: E } = ie(g),
            D = w(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
            }),
            k = j(Ft, jt, Dt);
          return f(O, {
            id: d ?? a,
            children: f(qt, {
              animate: x,
              initial: !1,
              children: f(Kt, {
                value: zt,
                children: v(Pt, {
                  ...h,
                  ...ee,
                  __framer__presenceAnimate: Lt,
                  __framer__presenceInitial: Rt,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: j(k, `framer-4ivw1i`, u, _),
                  "data-framer-appear-id": `4ivw1i`,
                  "data-framer-name": `Default`,
                  layoutDependency: S,
                  layoutId: `VsZ7AEeNV`,
                  optimized: !0,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-37b21b3d-3e44-4bf1-bf68-f20e67e05dae, rgb(255, 255, 255))`,
                    ...l,
                  },
                  children: [
                    v(T.div, {
                      className: `framer-1ehu8qj`,
                      "data-framer-name": `Links`,
                      layoutDependency: S,
                      layoutId: `nXLNcf9mU`,
                      children: [
                        f(T.div, {
                          className: `framer-13gzsto`,
                          "data-framer-name": `Row`,
                          layoutDependency: S,
                          layoutId: `Wa27XAftA`,
                          children: f(U, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Bt,
                            children: f(s, {
                              children: f(T.h1, {
                                className: `framer-styles-preset-18dw6p4`,
                                "data-styles-preset": `sqYXlTjHU`,
                                dir: `auto`,
                                children: f(L, {
                                  href: { hash: `:kIdsWxA43`, webPageId: `augiA20Il` },
                                  motionChild: !0,
                                  nodeId: `tX1shoR8L`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `Gs4Xjzse0`,
                                  smoothScroll: !0,
                                  children: f(T.a, {
                                    className: `framer-styles-preset-161xcm`,
                                    "data-styles-preset": `jbsOSsZpz`,
                                    children: `About`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-kr6gig`,
                            "data-framer-appear-id": `kr6gig`,
                            "data-highlight": !0,
                            fonts: [`Inter`],
                            initial: W,
                            layoutDependency: S,
                            layoutId: `tX1shoR8L`,
                            onTap: D,
                            optimized: !0,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        f(T.div, {
                          className: `framer-aidr69`,
                          "data-framer-name": `Row`,
                          layoutDependency: S,
                          layoutId: `InfedVlnu`,
                          children: f(U, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Vt,
                            children: f(s, {
                              children: f(T.h1, {
                                className: `framer-styles-preset-18dw6p4`,
                                "data-styles-preset": `sqYXlTjHU`,
                                dir: `auto`,
                                children: f(L, {
                                  href: { hash: `:neevpaqA3`, webPageId: `augiA20Il` },
                                  motionChild: !0,
                                  nodeId: `IUUMdBp6L`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `Gs4Xjzse0`,
                                  smoothScroll: !0,
                                  children: f(T.a, {
                                    className: `framer-styles-preset-161xcm`,
                                    "data-styles-preset": `jbsOSsZpz`,
                                    children: `Features`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-iqhrvt`,
                            "data-framer-appear-id": `iqhrvt`,
                            "data-highlight": !0,
                            fonts: [`Inter`],
                            initial: W,
                            layoutDependency: S,
                            layoutId: `IUUMdBp6L`,
                            onTap: D,
                            optimized: !0,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        f(T.div, {
                          className: `framer-2gqcas`,
                          "data-framer-name": `Row`,
                          layoutDependency: S,
                          layoutId: `U8KNCBDjy`,
                          children: f(U, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Ht,
                            children: f(s, {
                              children: f(T.h1, {
                                className: `framer-styles-preset-18dw6p4`,
                                "data-styles-preset": `sqYXlTjHU`,
                                dir: `auto`,
                                children: f(L, {
                                  href: { hash: `:lsqKdDuWt`, webPageId: `augiA20Il` },
                                  motionChild: !0,
                                  nodeId: `OwnROb7JI`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `Gs4Xjzse0`,
                                  smoothScroll: !0,
                                  children: f(T.a, {
                                    className: `framer-styles-preset-161xcm`,
                                    "data-styles-preset": `jbsOSsZpz`,
                                    children: `Testimonials`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-lbjcwx`,
                            "data-framer-appear-id": `lbjcwx`,
                            "data-highlight": !0,
                            fonts: [`Inter`],
                            initial: W,
                            layoutDependency: S,
                            layoutId: `OwnROb7JI`,
                            onTap: D,
                            optimized: !0,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        f(T.div, {
                          className: `framer-dn6nk3`,
                          "data-framer-name": `Row`,
                          layoutDependency: S,
                          layoutId: `WJ9d9c6ix`,
                          children: f(U, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Ut,
                            children: f(s, {
                              children: f(T.h1, {
                                className: `framer-styles-preset-18dw6p4`,
                                "data-styles-preset": `sqYXlTjHU`,
                                dir: `auto`,
                                children: f(L, {
                                  href: { hash: `:cy05qZSsn`, webPageId: `augiA20Il` },
                                  motionChild: !0,
                                  nodeId: `QSgUigAVi`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `Gs4Xjzse0`,
                                  smoothScroll: !0,
                                  children: f(T.a, {
                                    className: `framer-styles-preset-161xcm`,
                                    "data-styles-preset": `jbsOSsZpz`,
                                    children: `Pricing`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-138v1k9`,
                            "data-framer-appear-id": `138v1k9`,
                            "data-highlight": !0,
                            fonts: [`Inter`],
                            initial: W,
                            layoutDependency: S,
                            layoutId: `QSgUigAVi`,
                            onTap: D,
                            optimized: !0,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        f(T.div, {
                          className: `framer-1uf8l5v`,
                          "data-framer-name": `Row`,
                          layoutDependency: S,
                          layoutId: `SI5rb8vx8`,
                          children: f(U, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Wt,
                            children: f(s, {
                              children: f(T.h1, {
                                className: `framer-styles-preset-18dw6p4`,
                                "data-styles-preset": `sqYXlTjHU`,
                                dir: `auto`,
                                children: f(L, {
                                  href: { hash: `:EArIols72`, webPageId: `augiA20Il` },
                                  motionChild: !0,
                                  nodeId: `J4hbp0d4I`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `Gs4Xjzse0`,
                                  smoothScroll: !0,
                                  children: f(T.a, {
                                    className: `framer-styles-preset-161xcm`,
                                    "data-styles-preset": `jbsOSsZpz`,
                                    children: `FAQ`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-1vh7zsp`,
                            "data-framer-appear-id": `1vh7zsp`,
                            "data-highlight": !0,
                            fonts: [`Inter`],
                            initial: W,
                            layoutDependency: S,
                            layoutId: `J4hbp0d4I`,
                            onTap: D,
                            optimized: !0,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    f(T.div, {
                      className: `framer-at9bcx`,
                      "data-framer-name": `Hamburger`,
                      "data-highlight": !0,
                      layoutDependency: S,
                      layoutId: `Y0DDIKLh2`,
                      onTap: D,
                      transformTemplate: Gt,
                      children: f(Ct, {
                        animated: !0,
                        className: `framer-1a1ge95`,
                        layoutDependency: S,
                        layoutId: `oz1zcHhoe`,
                        style: {
                          "--1m973uw": `var(--token-94aa1dea-dfea-4fa5-8a42-bbeebe5052f2, rgb(0, 0, 0))`,
                          "--js9iwy": 2,
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0SYJs.framer-1ega133, .framer-0SYJs .framer-1ega133 { display: block; }`,
          `.framer-0SYJs.framer-4ivw1i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 626px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 48px 0px 48px 0px; position: relative; width: 881px; }`,
          `.framer-0SYJs .framer-1ehu8qj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-0SYJs .framer-13gzsto, .framer-0SYJs .framer-aidr69, .framer-0SYJs .framer-2gqcas, .framer-0SYJs .framer-dn6nk3, .framer-0SYJs .framer-1uf8l5v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 0px 4px 0px; position: relative; width: 100%; }`,
          `.framer-0SYJs .framer-kr6gig, .framer-0SYJs .framer-iqhrvt, .framer-0SYJs .framer-lbjcwx, .framer-0SYJs .framer-138v1k9, .framer-0SYJs .framer-1vh7zsp { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-0SYJs .framer-at9bcx { align-content: center; align-items: center; bottom: 64px; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 8px; position: absolute; width: min-content; z-index: 1; }`,
          `.framer-0SYJs .framer-1a1ge95 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          ...At,
          ...Et,
        ],
        `framer-0SYJs`
      )),
      (G.displayName = `MobileMenu`),
      (G.defaultProps = { height: 626, width: 881 }),
      A(G, { HYyn6lgsx: { title: `Close Overlay`, type: z.EventHandler } }),
      fe(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Nt,
          ...M(kt),
          ...M(Tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an = e(() => {
    (b(),
      F(),
      n(),
      (Zt = `var(--framer-icon-mask)`),
      (Qt = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      ($t = T.create(Qt)),
      (en = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f($t, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (tn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 11.1 0.771 L 19.299 15.008 C 19.874 16.012 19.131 17.25 17.948 17.25 L 1.549 17.25 C 0.366 17.25 -0.376 16.012 0.198 15.008 L 8.398 0.771 C 8.988 -0.257 10.509 -0.257 11.1 0.771 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.25px" id="knxqacBrs" transform="translate(2.251 3)" width="19.497257932538446px"/><path d="M 11.1 0.771 L 19.299 15.008 C 19.874 16.012 19.131 17.25 17.948 17.25 L 1.549 17.25 C 0.366 17.25 -0.376 16.012 0.198 15.008 L 8.398 0.771 C 8.988 -0.257 10.509 -0.257 11.1 0.771 Z" fill="transparent" height="17.25px" id="LoKnte06c" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 3)" width="19.497257932538446px"/></svg>`),
      (nn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (rn = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = nn(e),
            u = V(`707334778`, tn);
          return f(en, {
            ...l,
            className: j(`framer-739Jd`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-739Jd { -webkit-mask: ${Zt}; aspect-ratio: 1; display: block; mask: ${Zt}; width: 24px; }`,
        ],
        `framer-739Jd`
      )),
      (rn.displayName = `Triangle`),
      A(rn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: z.Number,
        },
      }));
  }),
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn = e(() => {
    (b(),
      F(),
      n(),
      (on = `var(--framer-icon-mask)`),
      (sn = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (cn = T.create(sn)),
      (ln = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(cn, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (un = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6.75 L 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 6.75 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="6.75px" id="y6ODVUHOT" transform="translate(9.75 15)" width="6px"/><path d="M 5.234 2.25 C 4.338 0.848 2.789 0 1.125 0 C 0.387 1.275 0.267 2.816 0.798 4.191 C 0.285 4.946 0.007 5.837 0 6.75 L 0 7.5 C 0 9.985 2.015 12 4.5 12 L 9 12 C 11.485 12 13.5 9.985 13.5 7.5 L 13.5 6.75 C 13.493 5.837 13.215 4.946 12.702 4.191 C 13.233 2.816 13.113 1.275 12.375 0 C 10.711 0 9.162 0.848 8.266 2.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12.000000134557656px" id="jEvqf77oh" transform="translate(6 3)" width="13.5px"/><path d="M 5.234 2.25 C 4.338 0.848 2.789 0 1.125 0 C 0.387 1.275 0.267 2.816 0.798 4.191 C 0.285 4.946 0.007 5.837 0 6.75 L 0 7.5 C 0 9.985 2.015 12 4.5 12 L 9 12 C 11.485 12 13.5 9.985 13.5 7.5 L 13.5 6.75 C 13.493 5.837 13.215 4.946 12.702 4.191 C 13.233 2.816 13.113 1.275 12.375 0 C 10.711 0 9.162 0.848 8.266 2.25 Z" fill="transparent" height="12.000000134557656px" id="tRijDoqp2" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 3)" width="13.5px"/><path d="M 0 6.75 L 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 6.75" fill="transparent" height="6.75px" id="ThwMvxByn" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9.75 15)" width="6px"/><path d="M 9 6 L 6 6 C 4.343 6 3 4.657 3 3 C 3 1.343 1.657 0 0 0" fill="transparent" height="6px" id="YWB51DZZd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(0.75 13.5)" width="9px"/></svg>`),
      (dn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (fn = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = dn(e),
            u = V(`2873462264`, un);
          return f(ln, {
            ...l,
            className: j(`framer-d5drT`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-d5drT { -webkit-mask: ${on}; aspect-ratio: 1; display: block; mask: ${on}; width: 24px; }`,
        ],
        `framer-d5drT`
      )),
      (fn.displayName = `Github Logo`),
      A(fn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: z.Number,
        },
      }));
  }),
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn = e(() => {
    (b(),
      F(),
      n(),
      (mn = `var(--framer-icon-mask)`),
      (hn = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (gn = T.create(hn)),
      (_n = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(gn, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (vn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.284 12.665 C 11.692 12.724 11.098 12.754 10.503 12.753 C 9.908 12.754 9.314 12.724 8.722 12.665 L 7.761 15.259 C 7.687 15.457 7.534 15.616 7.338 15.697 C 7.143 15.778 6.922 15.774 6.73 15.687 L 0.448 12.902 C 0.115 12.756 -0.065 12.39 0.022 12.036 L 2.794 1.128 C 2.868 0.835 3.109 0.614 3.407 0.566 L 6.788 0.011 C 7.178 -0.056 7.554 0.189 7.651 0.573 L 8.12 2.414 C 9.703 2.202 11.307 2.202 12.89 2.414 L 13.359 0.573 C 13.456 0.189 13.832 -0.056 14.222 0.011 L 17.599 0.566 C 17.897 0.614 18.138 0.835 18.212 1.128 L 20.981 12.038 C 21.068 12.392 20.888 12.758 20.554 12.904 L 14.273 15.689 C 14.08 15.776 13.86 15.78 13.664 15.699 C 13.469 15.618 13.316 15.459 13.242 15.261 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15.756967734959915px" id="IaF2D21_7" transform="translate(1.497 4.497)" width="21.002570465868896px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="sTKlRcrNf" transform="translate(7.5 12)" width="2.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="xvu5bf1j0" transform="translate(14.25 12)" width="2.25px"/><path d="M 0.604 2.414 L 1.072 0.573 C 1.17 0.189 1.545 -0.056 1.936 0.011 L 5.315 0.568 C 5.613 0.616 5.854 0.837 5.928 1.13 L 8.696 12.04 C 8.784 12.394 8.604 12.759 8.27 12.906 L 1.988 15.691 C 1.796 15.778 1.575 15.782 1.38 15.701 C 1.185 15.62 1.031 15.461 0.957 15.263 L 0 12.667" fill="transparent" height="15.758842734959913px" id="rIRRXQ2uq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.781 4.495)" width="8.718160232934466px"/><path d="M 8.114 2.414 L 7.646 0.573 C 7.549 0.189 7.173 -0.056 6.782 0.011 L 3.403 0.568 C 3.105 0.616 2.864 0.837 2.79 1.13 L 0.022 12.038 C -0.065 12.392 0.115 12.758 0.448 12.904 L 6.73 15.689 C 6.922 15.776 7.143 15.78 7.338 15.699 C 7.534 15.618 7.687 15.459 7.761 15.261 L 8.718 12.667" fill="transparent" height="15.756967734959908px" id="NmwtAR4bF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(1.501 4.495)" width="8.718160232934446px"/><path d="M 0 0.592 C 1.466 0.192 2.98 -0.007 4.5 0 C 6.02 -0.007 7.534 0.192 9 0.592" fill="transparent" height="1px" id="m4_G5UBMz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 6.75)" width="9px"/><path d="M 9 0 C 7.534 0.4 6.02 0.599 4.5 0.592 C 2.98 0.599 1.466 0.4 0 0" fill="transparent" height="1px" id="Hk0dtriFY" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 16.658)" width="9px"/></svg>`),
      (yn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (bn = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = yn(e),
            u = V(`2033026654`, vn);
          return f(_n, {
            ...l,
            className: j(`framer-QJURb`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-QJURb { -webkit-mask: ${mn}; aspect-ratio: 1; display: block; mask: ${mn}; width: 24px; }`,
        ],
        `framer-QJURb`
      )),
      (bn.displayName = `Discord Logo`),
      A(bn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: z.Number,
        },
      }));
  }),
  Sn,
  Cn,
  wn,
  Tn = e(() => {
    (F(),
      oe.loadFonts([
        `GF;DM Sans-500`,
        `GF;DM Sans-700`,
        `GF;DM Sans-700italic`,
        `GF;DM Sans-500italic`,
      ]),
      (Sn = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
              weight: `500`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/dmsans/v16/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm32RmYJpso5.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/dmsans/v16/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-7DW32RmYJpso5.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Cn = [
        `.framer-csTFY .framer-styles-preset-z5yjcz:not(.rich-text-wrapper), .framer-csTFY .framer-styles-preset-z5yjcz.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (wn = `framer-csTFY`));
  }),
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn = e(() => {
    (b(),
      F(),
      n(),
      (En = `var(--framer-icon-mask)`),
      (Dn = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (On = T.create(Dn)),
      (kn = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(On, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (An = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 13.5 0 L 4.5 0 C 2.015 0 0 2.015 0 4.5 L 0 13.5 C 0 15.985 2.015 18 4.5 18 L 13.5 18 C 15.985 18 18 15.985 18 13.5 L 18 4.5 C 18 2.015 15.985 0 13.5 0 Z M 9 12.75 C 6.929 12.75 5.25 11.071 5.25 9 C 5.25 6.929 6.929 5.25 9 5.25 C 11.071 5.25 12.75 6.929 12.75 9 C 12.75 11.071 11.071 12.75 9 12.75 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18px" id="SuXKGhab5" transform="translate(3 3)" width="18px"/><path d="M 4.5 18 C 2.015 18 0 15.985 0 13.5 L 0 4.5 C 0 2.015 2.015 0 4.5 0 L 13.5 0 C 15.985 0 18 2.015 18 4.5 L 18 13.5 C 18 15.985 15.985 18 13.5 18 Z" fill="transparent" height="18px" id="vvJ8FLDVj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px"/><path d="M 0 3.75 C 0 1.679 1.679 0 3.75 0 C 5.821 0 7.5 1.679 7.5 3.75 C 7.5 5.821 5.821 7.5 3.75 7.5 C 1.679 7.5 0 5.821 0 3.75 Z" fill="transparent" height="7.5px" id="Q3v7fjWhv" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 8.25)" width="7.5px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="VxeO4Hprj" transform="translate(15.75 6)" width="2.25px"/></svg>`),
      (jn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Mn = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = jn(e),
            u = V(`942143898`, An);
          return f(kn, {
            ...l,
            className: j(`framer-SHCqu`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-SHCqu { -webkit-mask: ${En}; aspect-ratio: 1; display: block; mask: ${En}; width: 24px; }`,
        ],
        `framer-SHCqu`
      )),
      (Mn.displayName = `Instagram Logo`),
      A(Mn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: z.Number,
        },
      }));
  });
function Pn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  K,
  Gn = e(() => {
    (b(),
      F(),
      k(),
      n(),
      Nn(),
      (Fn = { KGzsVPMIA: { hover: !0 } }),
      (In = [`KGzsVPMIA`, `kjNL2jEgY`]),
      (Ln = `framer-niaa0`),
      (Rn = { KGzsVPMIA: `framer-v-8s265x`, kjNL2jEgY: `framer-v-18cjkok` }),
      (zn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bn = ({ value: e, children: n }) => {
        let r = _(E),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Vn = T.create(s)),
      (Hn = { Desktop: `KGzsVPMIA`, Mobile: `kjNL2jEgY` }),
      (Un = ({ height: e, icon: t, id: n, link: r, newTab: i, width: a, ...o }) => ({
        ...o,
        hnz38akBF: r ?? o.hnz38akBF,
        variant: Hn[o.variant] ?? o.variant ?? `KGzsVPMIA`,
        xX_cVZtBW: t ?? o.xX_cVZtBW ?? Mn,
        YuZ3R5gSq: i ?? o.YuZ3R5gSq ?? !0,
      })),
      (Wn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: o, setLocale: s } = I();
          xe();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              xX_cVZtBW: p,
              hnz38akBF: m,
              YuZ3R5gSq: h,
              ...g
            } = Un(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: ee,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: x,
            } = be({
              cycleOrder: In,
              defaultVariant: `KGzsVPMIA`,
              enabledGestures: Fn,
              ref: i,
              variant: d,
              variantClassNames: Rn,
            }),
            S = Wn(e, x),
            w = j(Ln);
          return f(O, {
            id: u ?? a,
            children: f(Vn, {
              animate: x,
              initial: !1,
              children: f(Bn, {
                value: zn,
                children: f(L, {
                  href: m,
                  motionChild: !0,
                  nodeId: `KGzsVPMIA`,
                  openInNewTab: h,
                  scopeId: `lbZXRkV6i`,
                  smoothScroll: !0,
                  children: f(T.a, {
                    ...g,
                    ...ee,
                    className: `${j(w, `framer-8s265x`, l, v)} framer-4v3lsj`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: S,
                    layoutId: `KGzsVPMIA`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-932ec4ef-c27c-4840-af3d-3d501c48a21e, rgba(227, 182, 182, 0))`,
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                      ...c,
                    },
                    variants: {
                      "KGzsVPMIA-hover": {
                        backgroundColor: `var(--token-7c18d885-3911-4b92-8b65-0360963f8eb5, rgba(255, 255, 255, 0.2))`,
                      },
                      kjNL2jEgY: {
                        backgroundColor: `var(--token-7c18d885-3911-4b92-8b65-0360963f8eb5, rgba(255, 255, 255, 0.2))`,
                      },
                    },
                    ...Pn(
                      {
                        "KGzsVPMIA-hover": { "data-framer-name": void 0 },
                        kjNL2jEgY: { "data-framer-name": `Mobile` },
                      },
                      _,
                      b
                    ),
                    children: f(Oe, {
                      animated: !0,
                      className: `framer-4iz9d0`,
                      Component: p,
                      layoutDependency: S,
                      layoutId: `FoMKF5hgD`,
                      style: {
                        "--1m6trwb": 0,
                        "--21h8s6": `var(--token-94aa1dea-dfea-4fa5-8a42-bbeebe5052f2, rgb(255, 255, 255))`,
                        "--pgex8v": 1.5,
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-niaa0.framer-4v3lsj, .framer-niaa0 .framer-4v3lsj { display: block; }`,
          `.framer-niaa0.framer-8s265x { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-niaa0 .framer-4iz9d0 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-niaa0.framer-v-18cjkok.framer-8s265x { cursor: unset; }`,
        ],
        `framer-niaa0`
      )),
      (K.displayName = `SocialsButton`),
      (K.defaultProps = { height: 40, width: 40 }),
      A(K, {
        variant: {
          options: [`KGzsVPMIA`, `kjNL2jEgY`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: z.Enum,
        },
        xX_cVZtBW: {
          defaultValue: {
            identifier: `module:PtxaBiSAA5V6LvrpAt6G/EsR1AqByikNQR8Cp2V8c/UD0eTfbk_.js:default`,
            moduleId: `PtxaBiSAA5V6LvrpAt6G`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: z.VectorSetItem,
        },
        hnz38akBF: { title: `Link`, type: z.Link },
        YuZ3R5gSq: { defaultValue: !0, title: `New Tab`, type: z.Boolean },
      }),
      fe(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  J,
  Qn,
  $n,
  er,
  tr,
  nr,
  Y,
  rr = e(() => {
    (b(),
      F(),
      k(),
      n(),
      qe(),
      an(),
      pn(),
      xn(),
      Ge(),
      Tn(),
      Xe(),
      Ot(),
      Gn(),
      (Kn = P(We)),
      (qn = P(K)),
      (Jn = [`U7d2JLtMr`, `AstvX0xjI`, `sYtUHpt63`]),
      (Yn = `framer-iKp04`),
      (Xn = {
        AstvX0xjI: `framer-v-19yqtw7`,
        sYtUHpt63: `framer-v-1h0y46p`,
        U7d2JLtMr: `framer-v-ro6ncg`,
      }),
      (Zn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Qn = ({ value: e, children: n }) => {
        let r = _(E),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      ($n = { Desktop: `U7d2JLtMr`, Mobile: `sYtUHpt63`, Tablet: `AstvX0xjI` }),
      (er = T.create(s)),
      (tr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: $n[r.variant] ?? r.variant ?? `U7d2JLtMr`,
      })),
      (nr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: o, setLocale: c } = I(),
            l = xe(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = tr(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: ee,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: x,
            } = be({
              cycleOrder: Jn,
              defaultVariant: `U7d2JLtMr`,
              ref: i,
              variant: m,
              variantClassNames: Xn,
            }),
            S = nr(e, x),
            w = j(Yn, $e, Ye, wn, Dt);
          return f(O, {
            id: p ?? a,
            children: f(er, {
              animate: x,
              initial: !1,
              children: f(Qn, {
                value: Zn,
                children: f(T.footer, {
                  ...h,
                  ...ee,
                  className: j(w, `framer-ro6ncg`, d, _),
                  "data-framer-name": `Desktop`,
                  layoutDependency: S,
                  layoutId: `U7d2JLtMr`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-37b21b3d-3e44-4bf1-bf68-f20e67e05dae, rgb(255, 255, 255))`,
                    ...u,
                  },
                  ...q(
                    {
                      AstvX0xjI: { "data-framer-name": `Tablet` },
                      sYtUHpt63: { "data-framer-name": `Mobile` },
                    },
                    g,
                    b
                  ),
                  children: v(T.div, {
                    className: `framer-qszimg`,
                    layoutDependency: S,
                    layoutId: `jOyG1U3GO`,
                    children: [
                      v(T.div, {
                        className: `framer-cjjx5k`,
                        "data-framer-name": `LeftContent`,
                        layoutDependency: S,
                        layoutId: `Inx6dWMvC`,
                        children: [
                          v(T.div, {
                            className: `framer-8g96ib`,
                            "data-framer-name": `Top`,
                            layoutDependency: S,
                            layoutId: `N0F1m1NfD`,
                            children: [
                              f(L, {
                                href: { webPageId: `augiA20Il` },
                                motionChild: !0,
                                nodeId: `iESIZOZJF`,
                                scopeId: `U2H1YDylB`,
                                children: v(T.a, {
                                  className: `framer-zant0z framer-1uki5w6`,
                                  "data-framer-name": `Logo`,
                                  layoutDependency: S,
                                  layoutId: `iESIZOZJF`,
                                  children: [
                                    f(We, {
                                      animated: !0,
                                      className: `framer-15qr6t8`,
                                      layoutDependency: S,
                                      layoutId: `SbbAwqrqR`,
                                      style: {
                                        "--1m6trwb": 0,
                                        "--21h8s6": `var(--token-94aa1dea-dfea-4fa5-8a42-bbeebe5052f2, rgb(255, 255, 255))`,
                                        "--pgex8v": 1.5,
                                      },
                                    }),
                                    f(H, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(T.p, {
                                          className: `framer-styles-preset-o5z0st`,
                                          "data-styles-preset": `IsDMY7Ceo`,
                                          dir: `auto`,
                                          children: `Lyse.AI`,
                                        }),
                                      }),
                                      className: `framer-1ki233a`,
                                      "data-framer-name": `Spaces`,
                                      fonts: [`Inter`],
                                      layoutDependency: S,
                                      layoutId: `FIrzfj1ld`,
                                      style: { "--framer-paragraph-spacing": `0px` },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              f(H, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-2io64c`,
                                    "data-styles-preset": `AnqNoZ_U2`,
                                    dir: `auto`,
                                    children: `L'IA intelligente open-source`,
                                  }),
                                }),
                                className: `framer-1avtui5`,
                                "data-framer-name": `Text`,
                                fonts: [`Inter`],
                                layoutDependency: S,
                                layoutId: `n1XEC922r`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              v(T.div, {
                                className: `framer-19k1zxk`,
                                layoutDependency: S,
                                layoutId: `QnE0snG1t`,
                                children: [
                                  f(B, {
                                    height: 40,
                                    y:
                                      (l?.y || 0) +
                                      (48 + ((l?.height || 259.8) - 96 - 455) / 2) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      147 +
                                      0,
                                    ...q(
                                      {
                                        AstvX0xjI: {
                                          y:
                                            (l?.y || 0) +
                                            (40 + ((l?.height || 243.8) - 80 - 455) / 2) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            147 +
                                            0,
                                        },
                                        sYtUHpt63: {
                                          y: (l?.y || 0) + 24 + 0 + 0 + 503 + 0 + 0 + 0 + 147 + 0,
                                        },
                                      },
                                      g,
                                      b
                                    ),
                                    children: f(He, {
                                      className: `framer-1ntbkar-container`,
                                      layoutDependency: S,
                                      layoutId: `ftI_cS2Sv-container`,
                                      nodeId: `ftI_cS2Sv`,
                                      rendersWithMotion: !0,
                                      scopeId: `U2H1YDylB`,
                                      children: f(K, {
                                        height: `100%`,
                                        hnz38akBF: `https://github.com/Juste1dev/Lyse.ai--LLM`,
                                        id: `ftI_cS2Sv`,
                                        layoutId: `ftI_cS2Sv`,
                                        variant: J(`KGzsVPMIA`),
                                        width: `100%`,
                                        xX_cVZtBW: fn,
                                        YuZ3R5gSq: !0,
                                        ...q(
                                          {
                                            AstvX0xjI: { variant: J(`kjNL2jEgY`) },
                                            sYtUHpt63: { variant: J(`kjNL2jEgY`) },
                                          },
                                          g,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                  f(B, {
                                    height: 40,
                                    y:
                                      (l?.y || 0) +
                                      (48 + ((l?.height || 259.8) - 96 - 455) / 2) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      147 +
                                      0,
                                    ...q(
                                      {
                                        AstvX0xjI: {
                                          y:
                                            (l?.y || 0) +
                                            (40 + ((l?.height || 243.8) - 80 - 455) / 2) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            147 +
                                            0,
                                        },
                                        sYtUHpt63: {
                                          y: (l?.y || 0) + 24 + 0 + 0 + 503 + 0 + 0 + 0 + 147 + 0,
                                        },
                                      },
                                      g,
                                      b
                                    ),
                                    children: f(He, {
                                      className: `framer-15dx9vt-container`,
                                      layoutDependency: S,
                                      layoutId: `fwbqbZP7B-container`,
                                      nodeId: `fwbqbZP7B`,
                                      rendersWithMotion: !0,
                                      scopeId: `U2H1YDylB`,
                                      children: f(K, {
                                        height: `100%`,
                                        hnz38akBF: `https://www.discord.gg/QcNP62byDt`,
                                        id: `fwbqbZP7B`,
                                        layoutId: `fwbqbZP7B`,
                                        variant: J(`KGzsVPMIA`),
                                        width: `100%`,
                                        xX_cVZtBW: bn,
                                        YuZ3R5gSq: !0,
                                        ...q(
                                          {
                                            AstvX0xjI: { variant: J(`kjNL2jEgY`) },
                                            sYtUHpt63: { variant: J(`kjNL2jEgY`) },
                                          },
                                          g,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                  f(B, {
                                    height: 40,
                                    y:
                                      (l?.y || 0) +
                                      (48 + ((l?.height || 259.8) - 96 - 455) / 2) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      147 +
                                      0,
                                    ...q(
                                      {
                                        AstvX0xjI: {
                                          y:
                                            (l?.y || 0) +
                                            (40 + ((l?.height || 243.8) - 80 - 455) / 2) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            147 +
                                            0,
                                        },
                                        sYtUHpt63: {
                                          y: (l?.y || 0) + 24 + 0 + 0 + 503 + 0 + 0 + 0 + 147 + 0,
                                        },
                                      },
                                      g,
                                      b
                                    ),
                                    children: f(He, {
                                      className: `framer-qofjo4-container`,
                                      layoutDependency: S,
                                      layoutId: `B8_3Oehh8-container`,
                                      nodeId: `B8_3Oehh8`,
                                      rendersWithMotion: !0,
                                      scopeId: `U2H1YDylB`,
                                      children: f(K, {
                                        height: `100%`,
                                        hnz38akBF: `https://huggingface.co/LyseAI`,
                                        id: `B8_3Oehh8`,
                                        layoutId: `B8_3Oehh8`,
                                        variant: J(`KGzsVPMIA`),
                                        width: `100%`,
                                        xX_cVZtBW: rn,
                                        YuZ3R5gSq: !0,
                                        ...q(
                                          {
                                            AstvX0xjI: { variant: J(`kjNL2jEgY`) },
                                            sYtUHpt63: { variant: J(`kjNL2jEgY`) },
                                          },
                                          g,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v(T.div, {
                            className: `framer-14klf9d`,
                            layoutDependency: S,
                            layoutId: `U2PmrIeS0`,
                            children: [
                              f(H, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-2io64c`,
                                    "data-styles-preset": `AnqNoZ_U2`,
                                    dir: `auto`,
                                    children: `Remerciment à`,
                                  }),
                                }),
                                className: `framer-itu9sf`,
                                "data-framer-name": `Created By`,
                                fonts: [`Inter`],
                                layoutDependency: S,
                                layoutId: `upgy6LCHf`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              v(T.div, {
                                className: `framer-198uyml`,
                                "data-framer-name": `Arthur`,
                                layoutDependency: S,
                                layoutId: `x9TBlV3TV`,
                                children: [
                                  f(Re, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: se(
                                        (l?.y || 0) +
                                          (48 + ((l?.height || 259.8) - 96 - 455) / 2) +
                                          0 +
                                          0 +
                                          431 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 1024,
                                      pixelWidth: 1024,
                                      sizes: `24px`,
                                      src: `../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg?width=1024&height=1024`,
                                      srcSet: `../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg 512w,../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg?width=1024&height=1024 1024w`,
                                    },
                                    className: `framer-18unbye`,
                                    "data-framer-name": `Pic`,
                                    layoutDependency: S,
                                    layoutId: `XPEr8jCKh`,
                                    style: {
                                      borderBottomLeftRadius: 50,
                                      borderBottomRightRadius: 50,
                                      borderTopLeftRadius: 50,
                                      borderTopRightRadius: 50,
                                    },
                                    ...q(
                                      {
                                        AstvX0xjI: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: se(
                                              (l?.y || 0) +
                                                (40 + ((l?.height || 243.8) - 80 - 455) / 2) +
                                                0 +
                                                0 +
                                                431 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 1024,
                                            pixelWidth: 1024,
                                            sizes: `24px`,
                                            src: `../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg?width=1024&height=1024`,
                                            srcSet: `../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg 512w,../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg?width=1024&height=1024 1024w`,
                                          },
                                        },
                                        sYtUHpt63: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: se(
                                              (l?.y || 0) + 24 + 0 + 0 + 503 + 0 + 211 + 0 + 0
                                            ),
                                            pixelHeight: 1024,
                                            pixelWidth: 1024,
                                            sizes: `24px`,
                                            src: `../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg?width=1024&height=1024`,
                                            srcSet: `../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg 512w,../../assets/images/ONjFjJOjmJKUkxsVtaYneUJVcnM.jpg?width=1024&height=1024 1024w`,
                                          },
                                        },
                                      },
                                      g,
                                      b
                                    ),
                                  }),
                                  f(H, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(T.p, {
                                        className: `framer-styles-preset-z5yjcz`,
                                        "data-styles-preset": `I1dFaNZDG`,
                                        dir: `auto`,
                                        children: f(L, {
                                          href: `https://x.com/uxui_arthur`,
                                          motionChild: !0,
                                          nodeId: `ny5Ikeljv`,
                                          openInNewTab: !0,
                                          relValues: [],
                                          scopeId: `U2H1YDylB`,
                                          smoothScroll: !1,
                                          children: f(T.a, {
                                            className: `framer-styles-preset-161xcm`,
                                            "data-styles-preset": `jbsOSsZpz`,
                                            children: `Arthur`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-10w3mkh`,
                                    "data-framer-name": `Created By`,
                                    fonts: [`Inter`],
                                    layoutDependency: S,
                                    layoutId: `ny5Ikeljv`,
                                    style: { "--framer-paragraph-spacing": `0px` },
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              f(H, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-z5yjcz`,
                                    "data-styles-preset": `I1dFaNZDG`,
                                    dir: `auto`,
                                    children: f(L, {
                                      href: `https://framer.link/arthurdch`,
                                      motionChild: !0,
                                      nodeId: `b7SyWhaTY`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `U2H1YDylB`,
                                      smoothScroll: !1,
                                      children: f(T.a, {
                                        className: `framer-styles-preset-161xcm`,
                                        "data-styles-preset": `jbsOSsZpz`,
                                        children: `dans Framer`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1o378ac`,
                                "data-framer-name": `Created By`,
                                fonts: [`Inter`],
                                layoutDependency: S,
                                layoutId: `b7SyWhaTY`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      f(H, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(T.p, {
                            className: `framer-styles-preset-2io64c`,
                            "data-styles-preset": `AnqNoZ_U2`,
                            dir: `auto`,
                            children: `pour son template`,
                          }),
                        }),
                        className: `framer-hvdtth`,
                        "data-framer-name": `Created By`,
                        fonts: [`Inter`],
                        layoutDependency: S,
                        layoutId: `gtG6c6TTD`,
                        style: { "--framer-paragraph-spacing": `0px` },
                        verticalAlignment: `center`,
                        withExternalLayout: !0,
                      }),
                      f(T.div, {
                        className: `framer-152cegu`,
                        "data-framer-name": `RightNavigation`,
                        layoutDependency: S,
                        layoutId: `PL7SbMTbH`,
                        children: v(T.div, {
                          className: `framer-gli914`,
                          "data-framer-name": `Column1`,
                          layoutDependency: S,
                          layoutId: `mvzZey_DX`,
                          children: [
                            f(H, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-z5yjcz`,
                                  "data-styles-preset": `I1dFaNZDG`,
                                  dir: `auto`,
                                  children: `Navigation`,
                                }),
                              }),
                              className: `framer-lgxn3h`,
                              "data-framer-name": `Naviagtion`,
                              fonts: [`Inter`],
                              layoutDependency: S,
                              layoutId: `C3HRnfEbR`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                            f(H, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-2io64c`,
                                  "data-styles-preset": `AnqNoZ_U2`,
                                  dir: `auto`,
                                  children: f(L, {
                                    href: { hash: `:kIdsWxA43`, webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `RO_wrv83Q`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `U2H1YDylB`,
                                    smoothScroll: !0,
                                    children: f(T.a, {
                                      className: `framer-styles-preset-161xcm`,
                                      "data-styles-preset": `jbsOSsZpz`,
                                      children: `A propos`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-jtbtzm`,
                              "data-framer-name": `FAQ`,
                              fonts: [`Inter`],
                              layoutDependency: S,
                              layoutId: `RO_wrv83Q`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                            f(H, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-2io64c`,
                                  "data-styles-preset": `AnqNoZ_U2`,
                                  dir: `auto`,
                                  children: f(L, {
                                    href: { hash: `:neevpaqA3`, webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `cSbxYyJbu`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `U2H1YDylB`,
                                    smoothScroll: !0,
                                    children: f(T.a, {
                                      className: `framer-styles-preset-161xcm`,
                                      "data-styles-preset": `jbsOSsZpz`,
                                      children: `Fonctionnalités`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1537xvy`,
                              "data-framer-name": `404`,
                              fonts: [`Inter`],
                              layoutDependency: S,
                              layoutId: `cSbxYyJbu`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                            f(H, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-2io64c`,
                                  "data-styles-preset": `AnqNoZ_U2`,
                                  dir: `auto`,
                                  children: f(L, {
                                    href: { hash: `:cy05qZSsn`, webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `Ql8SIUhq9`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `U2H1YDylB`,
                                    smoothScroll: !0,
                                    children: f(T.a, {
                                      className: `framer-styles-preset-161xcm`,
                                      "data-styles-preset": `jbsOSsZpz`,
                                      children: `Github`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-tis47e`,
                              "data-framer-name": `FAQ`,
                              fonts: [`Inter`],
                              layoutDependency: S,
                              layoutId: `Ql8SIUhq9`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                            f(H, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-2io64c`,
                                  "data-styles-preset": `AnqNoZ_U2`,
                                  dir: `auto`,
                                  children: f(L, {
                                    href: { hash: `:EArIols72`, webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `BO0cWvGjv`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `U2H1YDylB`,
                                    smoothScroll: !0,
                                    children: f(T.a, {
                                      className: `framer-styles-preset-161xcm`,
                                      "data-styles-preset": `jbsOSsZpz`,
                                      children: `FAQ`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-ummxzh`,
                              "data-framer-name": `FAQ`,
                              fonts: [`Inter`],
                              layoutDependency: S,
                              layoutId: `BO0cWvGjv`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-iKp04.framer-1uki5w6, .framer-iKp04 .framer-1uki5w6 { display: block; }`,
          `.framer-iKp04.framer-ro6ncg { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 560px; height: min-content; justify-content: center; overflow: visible; padding: 48px; position: relative; width: 1184px; }`,
          `.framer-iKp04 .framer-qszimg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1128px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 1px; }`,
          `.framer-iKp04 .framer-cjjx5k { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; max-width: 280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-iKp04 .framer-8g96ib { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-iKp04 .framer-zant0z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-iKp04 .framer-15qr6t8 { flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-iKp04 .framer-1ki233a { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-iKp04 .framer-1avtui5, .framer-iKp04 .framer-jtbtzm, .framer-iKp04 .framer-1537xvy, .framer-iKp04 .framer-tis47e, .framer-iKp04 .framer-ummxzh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-iKp04 .framer-19k1zxk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-iKp04 .framer-1ntbkar-container, .framer-iKp04 .framer-15dx9vt-container, .framer-iKp04 .framer-qofjo4-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-iKp04 .framer-14klf9d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-iKp04 .framer-itu9sf, .framer-iKp04 .framer-10w3mkh, .framer-iKp04 .framer-1o378ac { flex: none; height: 24px; position: relative; white-space: pre; width: auto; }`,
          `.framer-iKp04 .framer-198uyml { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-iKp04 .framer-18unbye { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-iKp04 .framer-hvdtth { bottom: 0px; flex: none; height: 24px; left: 298px; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-iKp04 .framer-152cegu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 240px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-iKp04 .framer-gli914 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-iKp04 .framer-lgxn3h { flex: none; height: 27px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-iKp04.framer-v-19yqtw7.framer-ro6ncg { padding: 40px; }`,
          `.framer-iKp04.framer-v-19yqtw7 .framer-qszimg { padding: 0px; }`,
          `.framer-iKp04.framer-v-19yqtw7 .framer-152cegu { gap: 32px; }`,
          `.framer-iKp04.framer-v-1h0y46p.framer-ro6ncg { flex-direction: column; gap: 48px; justify-content: flex-start; padding: 24px; width: 390px; }`,
          `.framer-iKp04.framer-v-1h0y46p .framer-qszimg { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 48px; justify-content: flex-start; padding: 0px; width: 100%; }`,
          `.framer-iKp04.framer-v-1h0y46p .framer-cjjx5k { align-self: unset; flex: none; gap: 24px; height: min-content; justify-content: flex-start; max-width: 250px; order: 2; width: 100%; }`,
          `.framer-iKp04.framer-v-1h0y46p .framer-hvdtth { order: 1; }`,
          `.framer-iKp04.framer-v-1h0y46p .framer-152cegu { flex: none; order: 0; width: 100%; }`,
          ...Ze,
          ...Ke,
          ...Cn,
          ...Et,
        ],
        `framer-iKp04`
      )),
      (Y.displayName = `Footer`),
      (Y.defaultProps = { height: 259.8, width: 1184 }),
      A(Y, {
        variant: {
          options: [`U7d2JLtMr`, `AstvX0xjI`, `sYtUHpt63`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      fe(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Kn,
          ...qn,
          ...M(Qe),
          ...M(Je),
          ...M(Sn),
          ...M(Tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => ce([() => ue(K, {}, t)], t) }));
  }),
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr = e(() => {
    (b(),
      F(),
      n(),
      (ir = `var(--framer-icon-mask)`),
      (ar = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (or = T.create(ar)),
      (sr = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(or, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (cr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="YnobPTYMb" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 5)" width="16px"/><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="Cb0Gao21R" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 12)" width="16px"/><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="oPtuyu4df" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 19)" width="16px"/></svg>`),
      (lr = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (ur = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = lr(e),
            l = V(`3467097230`, cr);
          return f(sr, {
            ...c,
            className: j(`framer-grV1P`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-grV1P { -webkit-mask: ${ir}; aspect-ratio: 1; display: block; mask: ${ir}; width: 24px; }`,
        ],
        `framer-grV1P`
      )),
      (ur.displayName = `Menu`),
      A(ur, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  });
function fr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  X,
  Or = e(() => {
    (b(),
      F(),
      k(),
      n(),
      qe(),
      dr(),
      at(),
      Xe(),
      Ot(),
      nt(),
      (pr = P(We)),
      (mr = P(it)),
      (hr = P(ur)),
      (gr = [`fnEiJvhOV`, `k0VT3jbLt`]),
      (_r = `framer-4wp46`),
      (vr = { fnEiJvhOV: `framer-v-1lw9r8`, k0VT3jbLt: `framer-v-9th2j5` }),
      (yr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (br = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.4, 0.97], type: `tween` }),
      (xr = { delay: 0, duration: 0.4, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (Sr = ({ value: e, children: n }) => {
        let r = _(E),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Cr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (wr = { Desktop_Light: `fnEiJvhOV`, Mobile_Light: `k0VT3jbLt` }),
      (Tr = T.create(s)),
      (Er = ({ height: e, id: t, openMobileNavigation: n, width: r, ...i }) => ({
        ...i,
        KotcgtnJA: n ?? i.KotcgtnJA,
        variant: wr[i.variant] ?? i.variant ?? `fnEiJvhOV`,
      })),
      (Dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: o, setLocale: c } = I(),
            l = xe(),
            { style: u, className: d, layoutId: p, variant: m, KotcgtnJA: h, ...g } = Er(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: re,
              setVariant: x,
              variants: S,
            } = be({
              cycleOrder: gr,
              defaultVariant: `fnEiJvhOV`,
              ref: i,
              variant: m,
              variantClassNames: vr,
            }),
            w = Dr(e, S),
            { activeVariantCallback: E, delay: D } = ie(_),
            k = E(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            ae = j(_r, $e, rt, Dt),
            A = () => _ !== `k0VT3jbLt`,
            oe = () => _ === `k0VT3jbLt`;
          return f(O, {
            id: p ?? a,
            children: f(Tr, {
              animate: S,
              initial: !1,
              children: f(Sr, {
                value: yr,
                ...fr({ k0VT3jbLt: { value: br } }, _, te),
                children: f(T.nav, {
                  ...g,
                  ...b,
                  className: j(ae, `framer-1lw9r8`, d, y),
                  "data-framer-name": `Desktop_Light`,
                  layoutDependency: w,
                  layoutId: `fnEiJvhOV`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-e47778e7-c593-4ac9-8a2f-0a4dfd9d7d68, rgba(250, 250, 250, 0))`,
                    ...u,
                  },
                  ...fr({ k0VT3jbLt: { "data-framer-name": `Mobile_Light` } }, _, te),
                  children: v(T.div, {
                    className: `framer-14auoc5`,
                    layoutDependency: w,
                    layoutId: `h7a46a8UZ`,
                    children: [
                      v(T.div, {
                        className: `framer-1wxxgbh`,
                        "data-framer-name": `Links`,
                        layoutDependency: w,
                        layoutId: `XJtjwX7on`,
                        children: [
                          f(L, {
                            href: { hash: `:wJCoP1HKt`, webPageId: `augiA20Il` },
                            motionChild: !0,
                            nodeId: `pFE9WsetC`,
                            openInNewTab: !1,
                            scopeId: `xIrDE0_gr`,
                            smoothScroll: !0,
                            children: v(T.a, {
                              className: `framer-17dtfti framer-1s72i4r`,
                              "data-framer-name": `Logo`,
                              layoutDependency: w,
                              layoutId: `pFE9WsetC`,
                              children: [
                                f(We, {
                                  animated: !0,
                                  className: `framer-1swyjdu`,
                                  layoutDependency: w,
                                  layoutId: `I7D3LRPT_`,
                                  style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-94aa1dea-dfea-4fa5-8a42-bbeebe5052f2, rgb(0, 0, 0))`,
                                    "--pgex8v": 1.5,
                                  },
                                }),
                                f(H, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-o5z0st`,
                                      "data-styles-preset": `IsDMY7Ceo`,
                                      dir: `auto`,
                                      children: `Lyse.AI`,
                                    }),
                                  }),
                                  className: `framer-1bhxwz6`,
                                  "data-framer-name": `Spaces`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `acbofVJ_t`,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          A() &&
                            v(T.div, {
                              className: `framer-5goy0n`,
                              "data-framer-name": `Navigation Menu`,
                              layoutDependency: w,
                              layoutId: `jAZPWZikr`,
                              children: [
                                f(Sr, {
                                  value: xr,
                                  children: f(H, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(T.p, {
                                        className: `framer-styles-preset-xsql1q`,
                                        "data-styles-preset": `Awxi1CAQQ`,
                                        dir: `auto`,
                                        children: f(L, {
                                          href: { webPageId: `DDN4tRh_7` },
                                          motionChild: !0,
                                          nodeId: `xnnXFfPKB`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `xIrDE0_gr`,
                                          smoothScroll: !0,
                                          children: f(T.a, {
                                            className: `framer-styles-preset-161xcm`,
                                            "data-styles-preset": `jbsOSsZpz`,
                                            children: `A propos`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-i9dkyg`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `xnnXFfPKB`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                f(Sr, {
                                  value: xr,
                                  children: f(H, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(T.p, {
                                        className: `framer-styles-preset-xsql1q`,
                                        "data-styles-preset": `Awxi1CAQQ`,
                                        dir: `auto`,
                                        children: f(L, {
                                          href: { webPageId: `TlURnpTMU` },
                                          motionChild: !0,
                                          nodeId: `JF852z79L`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `xIrDE0_gr`,
                                          smoothScroll: !0,
                                          children: f(T.a, {
                                            className: `framer-styles-preset-161xcm`,
                                            "data-styles-preset": `jbsOSsZpz`,
                                            children: `Entraînement`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-6gftu7`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `JF852z79L`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                f(H, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-xsql1q`,
                                      "data-styles-preset": `Awxi1CAQQ`,
                                      dir: `auto`,
                                      children: f(L, {
                                        href: `https://github.com/Juste1dev/Lyse.ai--LLM`,
                                        motionChild: !0,
                                        nodeId: `DSvxMdDtJ`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `xIrDE0_gr`,
                                        smoothScroll: !1,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-161xcm`,
                                          "data-styles-preset": `jbsOSsZpz`,
                                          children: `Github`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-10gb2dk`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `DSvxMdDtJ`,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(H, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-xsql1q`,
                                      "data-styles-preset": `Awxi1CAQQ`,
                                      dir: `auto`,
                                      children: f(L, {
                                        href: { hash: `:EArIols72`, webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `yX6v9mMci`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `xIrDE0_gr`,
                                        smoothScroll: !0,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-161xcm`,
                                          "data-styles-preset": `jbsOSsZpz`,
                                          children: `FAQ`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-tw3szm`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `yX6v9mMci`,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          A() &&
                            f(B, {
                              height: 36,
                              y: (l?.y || 0) + 16 + 0 + 0 + 0,
                              children: f(He, {
                                className: `framer-1tsl86f-container`,
                                layoutDependency: w,
                                layoutId: `Ny4gRZk4c-container`,
                                nodeId: `Ny4gRZk4c`,
                                rendersWithMotion: !0,
                                scopeId: `xIrDE0_gr`,
                                children: f(it, {
                                  H9fdquxmO: `Commencer`,
                                  height: `100%`,
                                  id: `Ny4gRZk4c`,
                                  layoutId: `Ny4gRZk4c`,
                                  qa2d0SHwc: `https://framer.link/7L9chrF`,
                                  qZfHbmzQf: !0,
                                  uFNDrhDvW: !1,
                                  variant: Cr(`Fbxwx_O9x`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                        ],
                      }),
                      oe() &&
                        f(T.div, {
                          className: `framer-1lga1td`,
                          "data-framer-name": `Hamburger`,
                          "data-highlight": !0,
                          layoutDependency: w,
                          layoutId: `C4ZgM8p6E`,
                          onTap: k,
                          children: f(ur, {
                            animated: !0,
                            className: `framer-caeg87`,
                            layoutDependency: w,
                            layoutId: `J2kzmUg7L`,
                            style: {
                              "--1m973uw": `var(--token-94aa1dea-dfea-4fa5-8a42-bbeebe5052f2, rgb(255, 255, 255))`,
                              "--js9iwy": 2,
                            },
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-4wp46.framer-1s72i4r, .framer-4wp46 .framer-1s72i4r { display: block; }`,
          `.framer-4wp46.framer-1lw9r8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 24px 16px 24px; position: relative; width: 1184px; }`,
          `.framer-4wp46 .framer-14auoc5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-4wp46 .framer-1wxxgbh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-4wp46 .framer-17dtfti { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-4wp46 .framer-1swyjdu { flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-4wp46 .framer-1bhxwz6, .framer-4wp46 .framer-i9dkyg, .framer-4wp46 .framer-6gftu7, .framer-4wp46 .framer-10gb2dk, .framer-4wp46 .framer-tw3szm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-4wp46 .framer-5goy0n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-4wp46 .framer-1tsl86f-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-4wp46 .framer-1lga1td { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; }`,
          `.framer-4wp46 .framer-caeg87 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-4wp46.framer-v-9th2j5.framer-1lw9r8 { padding: 16px; width: 390px; }`,
          `.framer-4wp46.framer-v-9th2j5 .framer-14auoc5 { gap: unset; justify-content: space-between; }`,
          `.framer-4wp46.framer-v-9th2j5 .framer-1wxxgbh { flex-direction: column; }`,
          ...Ze,
          ...et,
          ...Et,
        ],
        `framer-4wp46`
      )),
      (X.displayName = `NavBar`),
      (X.defaultProps = { height: 64, width: 1184 }),
      A(X, {
        variant: {
          options: [`fnEiJvhOV`, `k0VT3jbLt`],
          optionTitles: [`Desktop_Light`, `Mobile_Light`],
          title: `Variant`,
          type: z.Enum,
        },
        KotcgtnJA: { title: `Open Mobile Navigation`, type: z.EventHandler },
      }),
      fe(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...pr,
          ...mr,
          ...hr,
          ...M(Qe),
          ...M(tt),
          ...M(Tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => ce([() => ue(it, {}, t)], t) }));
  }),
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Z,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Q,
  Zr = e(() => {
    (b(),
      F(),
      k(),
      n(),
      d(),
      gt(),
      Xt(),
      rr(),
      Or(),
      (kr = P(ht)),
      (Ar = P(X)),
      (jr = P(G)),
      (Mr = P(Y)),
      (Nr = {
        j8u8AHMod: `(min-width: 1200px)`,
        Q3CKJcPUg: `(min-width: 810px) and (max-width: 1199.98px)`,
        wERSiOMhy: `(max-width: 809.98px)`,
      }),
      (Pr = `framer-SyST0`),
      (Fr = {
        j8u8AHMod: `framer-v-13m6tj0`,
        Q3CKJcPUg: `framer-v-v8ufk`,
        wERSiOMhy: `framer-v-1u10lj`,
      }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ir = { damping: 30, delay: 0, mass: 1, stiffness: 220, type: `spring` }),
      (Lr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ir,
        x: 0,
        y: 720,
      }),
      (Rr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ir,
        x: 0,
        y: 0,
      }),
      (zr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 720,
      }),
      (Br = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (Vr = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = ze({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (Hr = {}),
      (Ur = Object.keys(Hr)),
      (Wr = [
        `.framer-SyST0.framer-1io3tk7, .framer-SyST0 .framer-1io3tk7 { display: block; }`,
        `.framer-SyST0.framer-13m6tj0 { align-content: center; align-items: center; background-color: var(--token-5f5e41aa-15b3-439f-89f1-3f142f1cf995, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-SyST0 .framer-799ig0-container { -webkit-user-select: none; flex: none; height: auto; left: 50%; order: -1000; pointer-events: none; position: absolute; top: 0px; transform: translateX(-50%); user-select: none; width: auto; z-index: -1; }`,
        `.framer-SyST0 .framer-1g8rqds-container { flex: none; height: auto; left: 50%; order: -999; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 5; }`,
        `.framer-SyST0.framer-e8pzhy { inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-SyST0.framer-1vup3it-container { flex: none; height: 100%; left: 0px; position: fixed; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-SyST0 .framer-m7bx2v { -webkit-user-select: none; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.13; order: -998; overflow: hidden; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 5; }`,
        `.framer-SyST0 .framer-1ihv89v { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-SyST0 .framer-1tt0jgu-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Gr = {
        j8u8AHMod: `(min-width: 1200px)`,
        Q3CKJcPUg: `(min-width: 810px) and (max-width: 1199.98px)`,
        wERSiOMhy: `(max-width: 809.98px)`,
      }),
      (Kr = { Desktop: `j8u8AHMod`, Phone: `wERSiOMhy`, Tablet: `Q3CKJcPUg` }),
      (qr = ({ value: e }) =>
        De()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Jr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Kr[r.variant] ?? r.variant ?? `j8u8AHMod`,
      })),
      (Yr = p(function (e, t) {
        let n = r(null),
          i = t ?? n,
          a = C(),
          { activeLocale: o, setLocale: s } = I(),
          { style: c, className: l, layoutId: u, variant: d, children: p, ...m } = Jr(e),
          [g, _] = Le(d, Nr, !1),
          { activeVariantCallback: y, delay: ee } = ie(void 0),
          b = ({ overlay: e }) =>
            y(async (...t) => {
              e.toggle();
            }),
          te = ({ overlay: e }) =>
            y(async (...t) => {
              e.hide();
            }),
          ne = j(Pr);
        return (
          Ne({}),
          f(ve.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: Kr,
              isLayoutTemplate: !0,
              primaryVariantId: `j8u8AHMod`,
              variantClassNames: Fr,
            },
            children: v(O, {
              id: u ?? a,
              children: [
                f(qr, {
                  value: `:root body { background: var(--token-5f5e41aa-15b3-439f-89f1-3f142f1cf995, rgb(0, 0, 0)); }`,
                }),
                v(T.div, {
                  ...m,
                  className: j(ne, `framer-13m6tj0`, l),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    f(B, {
                      children: f(Me, {
                        className: `framer-799ig0-container`,
                        "data-framer-layout-hint-center-x": !0,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `F25TIMky_`,
                        scopeId: `nur7cO433`,
                        children: f(ht, {
                          height: `100%`,
                          id: `F25TIMky_`,
                          intensity: 10,
                          layoutId: `F25TIMky_`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(Vr, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        f(re, {
                          children: f(B, {
                            height: 64,
                            width: `100vw`,
                            y: 0,
                            children: v(Me, {
                              className: `framer-1g8rqds-container`,
                              "data-framer-layout-hint-center-x": !0,
                              layoutScroll: !0,
                              nodeId: `l8EKIq0DB`,
                              scopeId: `nur7cO433`,
                              children: [
                                f(Ae, {
                                  breakpoint: g,
                                  overrides: {
                                    Q3CKJcPUg: { variant: Z(`k0VT3jbLt`) },
                                    wERSiOMhy: { variant: Z(`k0VT3jbLt`) },
                                  },
                                  children: f(X, {
                                    height: `100%`,
                                    id: `l8EKIq0DB`,
                                    KotcgtnJA: b({ overlay: e }),
                                    layoutId: `l8EKIq0DB`,
                                    style: { width: `100%` },
                                    variant: Z(`fnEiJvhOV`),
                                    width: `100%`,
                                  }),
                                }),
                                f(D, {
                                  children:
                                    e.visible &&
                                    f(re, {
                                      children: h(
                                        f(ye, {
                                          children: v(ge, {
                                            children: [
                                              f(
                                                T.div,
                                                {
                                                  animate: {
                                                    opacity: 1,
                                                    transition: {
                                                      delay: 0,
                                                      duration: 0,
                                                      ease: [0.5, 0, 0.88, 0.77],
                                                      type: `tween`,
                                                    },
                                                  },
                                                  className: j(ne, `framer-e8pzhy`),
                                                  exit: {
                                                    opacity: 0,
                                                    transition: {
                                                      delay: 0,
                                                      duration: 0,
                                                      ease: [0.12, 0.23, 0.5, 1],
                                                      type: `tween`,
                                                    },
                                                  },
                                                  initial: { opacity: 0 },
                                                  onTap: () => e.hide(),
                                                },
                                                `Tm8wipwHl`
                                              ),
                                              f(B, {
                                                width: `100vw`,
                                                children: f(Me, {
                                                  animate: Rr,
                                                  className: j(ne, `framer-1vup3it-container`),
                                                  exit: Lr,
                                                  inComponentSlot: !0,
                                                  initial: zr,
                                                  nodeId: `eyRIQteHS`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `nur7cO433`,
                                                  children: f(G, {
                                                    height: `100%`,
                                                    HYyn6lgsx: te({ overlay: e }),
                                                    id: `eyRIQteHS`,
                                                    layoutId: `eyRIQteHS`,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        Br()
                                      ),
                                    }),
                                }),
                              ],
                            }),
                          }),
                        }),
                    }),
                    f(Re, {
                      background: {
                        alt: ``,
                        backgroundSize: 1.2,
                        fit: `tile`,
                        loading: se(0),
                        pixelHeight: 256,
                        pixelWidth: 256,
                        positionX: `center`,
                        positionY: `top`,
                        sizes: `100vw`,
                        src: `../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png`,
                      },
                      className: `framer-m7bx2v`,
                      "data-framer-name": `Noise`,
                    }),
                    p,
                    f(`div`, { className: `framer-1ihv89v` }),
                    f(B, {
                      height: 259,
                      width: `100vw`,
                      y: 1e3,
                      children: f(Me, {
                        className: `framer-1tt0jgu-container`,
                        nodeId: `soz3MXq_q`,
                        scopeId: `nur7cO433`,
                        children: f(Ae, {
                          breakpoint: g,
                          overrides: {
                            Q3CKJcPUg: { variant: Z(`AstvX0xjI`) },
                            wERSiOMhy: { variant: Z(`sYtUHpt63`) },
                          },
                          children: f(Y, {
                            height: `100%`,
                            id: `soz3MXq_q`,
                            layoutId: `soz3MXq_q`,
                            style: { width: `100%` },
                            variant: Z(`U7d2JLtMr`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Xr = (e) =>
        e === Ce.canvas || e === Ce.export
          ? [
              ...Wr,
              ...Ur.flatMap((e) => {
                let t = Hr[e];
                return Hr[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Wr, ...Ur.map((e) => `@media ${Gr[e]} { ${Hr[e].join(` `)} }`)]),
      (Q = R(Yr, Xr, `framer-SyST0`)),
      (Q.displayName = `Main`),
      (Q.defaultProps = { height: 1e3, width: 1200 }),
      fe(Q, [{ explicitInter: !0, fonts: [] }, ...kr, ...Ar, ...jr, ...Mr], {
        supportsExplicitInterCodegen: !0,
      }),
      (Q.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([ue(X, {}, t), ue(G, {}, t), ue(Y, {}, t)])),
      }));
  });
function Qr({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `DDN4tRh_7`:
    case `yM0o_xp6w`:
    case `TlURnpTMU`:
      return S(Q, { ...i, key: `Main`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function $r(e) {
  switch (e) {
    case `augiA20Il`:
    case `DDN4tRh_7`:
    case `yM0o_xp6w`:
    case `TlURnpTMU`:
      return [
        { hash: `13m6tj0`, mediaQuery: `(min-width: 1200px)` },
        { hash: `v8ufk`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1u10lj`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function ei({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: n,
  localeId: i,
  collectionItemId: a,
  contentLocaleId: u,
  shouldResolveInitialRouteContentState: d = !1,
}) {
  let f = $[e].page.preload();
  (me({
    checkServerSideRouter: !1,
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    he(ai));
  let p = S(Se, {
    children: S(Pe, {
      children: S(Fe, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: n,
        routes: $,
        collectionUtils: ii,
        framerSiteId: ai,
        notFoundPage: N(() => import(`./hZdcC8hXRMdb_4qAX9rgKCi0FYJicH5Ndl-vKjrTcLY.DN1U00Ux.mjs`)),
        isReducedMotion: void 0,
        localeId: i,
        locales: ri,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://lyse-ai-v1.framer.website`,
        EditorBar:
          l === void 0
            ? void 0
            : (() => {
                if (si) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return N(async () => {
                  l.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: Be, useLocaleInfo: I, useRouter: ke },
                    react: {
                      createElement: S,
                      Fragment: s,
                      memo: m,
                      useCallback: g,
                      useEffect: o,
                      useRef: r,
                      useState: c,
                      useLayoutEffect: w,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: Qr,
        loadSnippetsModule: new Ve(
          () => import(`./4HJGNJ6Y95WCScK-Flfu3_upfH8qbHMSbD3RP5stx8I.B6v6Qr1P.mjs`)
        ),
        initialCollectionItemId: a,
        initialContentLocaleIdOverride: u,
      }),
    }),
    value: { routes: {} },
  });
  return (await f, p);
}
function ti() {
  oi && l.__framer_events.push(arguments);
}
async function ni(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || l.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    ti(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s, c, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (a = d.contentLocaleId),
        (o = d.pathVariables),
        (s = d.canonicalPathVariables),
        (c = d.breakpoints),
        (r = le($, r)));
    else {
      le($, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = Ue($, decodeURIComponent(location.pathname), !0, ri);
        ((r = e.routeId), (i = e.localeId), (o = e.pathVariables));
      }
    }
    let f = ei({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: o,
      canonicalPathVariables: s,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    l !== void 0 &&
      (async () => {
        let e = $[r],
          t = ri.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && ii) {
          let r = await ii[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          l.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: ai,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: l.location.href,
              hostname: l.location.hostname || null,
              pathname: l.location.pathname || null,
              hash: l.location.hash || null,
              search: l.location.search || null,
              timezone: s,
              locale: c,
            },
            `eager`,
          ]),
          await _e({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (we(`framer-rewrite-breakpoints`, () => {
          (Ie(c), l.__framer_onRewriteBreakpoints?.(c));
        }),
        (si ? (e) => e() : u)(() => {
          (pe(), de(), x(t, p, { onRecoverableError: n }));
        }))
      : ne(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var $, ri, ii, ai, oi, si;
e(() => {
  if (
    (i(),
    F(),
    n(),
    d(),
    ee(),
    Zr(),
    ($ = {
      augiA20Il: {
        elements: {
          BIMNJp2TC: `benefits`,
          EArIols72: `faq`,
          kIdsWxA43: `about`,
          lsqKdDuWt: `testimonials`,
          neevpaqA3: `features`,
          ojuXz7qgg: `final-cta`,
          pk1Mjdf8s: `how-it-works`,
          wJCoP1HKt: `hero`,
        },
        page: N(() => import(`./Y14TfDiTFlO2ALi-uPgMhAykp3EtzUSW_tSG39sDJL8.nfDPALZl.mjs`)),
        path: `/`,
      },
      DDN4tRh_7: {
        elements: { fvp2g9fo9: `navbar-bg` },
        page: N(() => import(`./hZdcC8hXRMdb_4qAX9rgKCi0FYJicH5Ndl-vKjrTcLY.DN1U00Ux.mjs`)),
        path: `/404`,
      },
      yM0o_xp6w: {
        elements: {},
        page: N(() => import(`./W7qETVOC-DTyWNkSl6YV6k3BvaE_me-BurK4b0jErEk.CjVz_N2b.mjs`)),
        path: `/github`,
      },
      TlURnpTMU: {
        elements: {},
        page: N(() => import(`./Pns0VbCyM3R_57lCPSoGfgvq-NXcJaJThjOB_K2t1SU.DmP9iN9L.mjs`)),
        path: `/train`,
      },
    }),
    (ri = [{ code: `fr-FR`, id: `default`, name: `French`, slug: ``, textDirection: `ltr` }]),
    (ii = {}),
    (ai = `cf784888474e02de80370e0fa16e279adabc2e9ba0a2e8f6b622cd505c8b9e25`),
    (oi = typeof document < `u`),
    (si = oi && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
    oi)
  ) {
    ((l.__framer_importFromPackage = (e, t) => () =>
      S(Ee, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (l.__framer_events = l.__framer_events || []),
      ae());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? ni(!0, e) : ni(!1, e);
  }
})();
export { $r as getLayoutTemplateBreakpoints, ei as getPageRoot };
//# sourceMappingURL=script_main.3WgIqtke.mjs.map
