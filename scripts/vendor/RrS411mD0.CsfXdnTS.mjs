import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  o as c,
  v as l,
} from "./react.D20wc1Tc.mjs";
import { C as u, a as d, r as f, t as p } from "./motion.uzrgujnr.mjs";
import {
  C as m,
  D as h,
  E as g,
  F as _,
  S as v,
  V as y,
  at as b,
  d as x,
  dt as S,
  et as C,
  ft as w,
  r as T,
  y as E,
} from "./framer.CxxJYT0Q.mjs";
var D,
  O,
  k,
  A = e(() => {
    (y(),
      h.loadFonts([
        `GF;DM Sans-regular`,
        `GF;DM Sans-700`,
        `GF;DM Sans-700italic`,
        `GF;DM Sans-italic`,
      ]),
      (D = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
              weight: `400`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm32RmYJpso5.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-JDW32RmYJpso5.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (O = [
        `.framer-7eIMc .framer-styles-preset-xsql1q:not(.rich-text-wrapper), .framer-7eIMc .framer-styles-preset-xsql1q.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 2px; --framer-text-alignment: left; --framer-text-color: var(--token-5d3602f5-d470-4b4b-916d-5b57bbf588f8, rgba(56, 56, 56, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (k = `framer-7eIMc`));
  }),
  j,
  M,
  N,
  P = e(() => {
    (y(),
      h.loadFonts([
        `GF;DM Sans-500`,
        `GF;DM Sans-700`,
        `GF;DM Sans-700italic`,
        `GF;DM Sans-500italic`,
      ]),
      (j = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
              weight: `500`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm32RmYJpso5.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-7DW32RmYJpso5.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (M = [
        `.framer-69cii .framer-styles-preset-9fs3sz:not(.rich-text-wrapper), .framer-69cii .framer-styles-preset-9fs3sz.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (N = `framer-69cii`));
  });
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (c(),
      y(),
      p(),
      n(),
      P(),
      (I = {
        CHQOr1bKi: { hover: !0 },
        Fbxwx_O9x: { hover: !0 },
        jKlq4hEYT: { hover: !0 },
        Y1ageSf63: { hover: !0 },
      }),
      (L = [`Y1ageSf63`, `CHQOr1bKi`, `jKlq4hEYT`, `Fbxwx_O9x`]),
      (R = `framer-BlR2K`),
      (z = {
        CHQOr1bKi: `framer-v-v3ogwj`,
        Fbxwx_O9x: `framer-v-125hd7d`,
        jKlq4hEYT: `framer-v-m8qe81`,
        Y1ageSf63: `framer-v-17k9y98`,
      }),
      (B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (V = ({ value: e, children: n }) => {
        let r = s(d),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (H = {
        "Primary-sm": `CHQOr1bKi`,
        Primary_md: `Y1ageSf63`,
        Secondary_md: `jKlq4hEYT`,
        Secondary_sm: `Fbxwx_O9x`,
      }),
      (U = u.create(i)),
      (W = ({
        height: e,
        id: t,
        link: n,
        newTab: r,
        smoothScroll: i,
        text: a,
        trackingID: o,
        width: s,
        ...c
      }) => ({
        ...c,
        H9fdquxmO: a ?? c.H9fdquxmO ?? `Commencer`,
        qa2d0SHwc: n ?? c.qa2d0SHwc,
        qZfHbmzQf: i ?? c.qZfHbmzQf ?? !0,
        uFNDrhDvW: r ?? c.uFNDrhDvW ?? !0,
        variant: H[c.variant] ?? c.variant ?? `Y1ageSf63`,
        WqF2Pzc7v: o ?? c.WqF2Pzc7v,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = w(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = l(),
            { activeLocale: c, setLocale: d } = b();
          C();
          let {
              style: p,
              className: m,
              layoutId: h,
              variant: _,
              H9fdquxmO: v,
              qa2d0SHwc: y,
              uFNDrhDvW: w,
              qZfHbmzQf: T,
              WqF2Pzc7v: D,
              ...O
            } = W(e),
            {
              baseVariant: k,
              classNames: A,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: P,
              isLoading: H,
              setGestureState: K,
              setVariant: q,
              variants: J,
            } = S({
              cycleOrder: L,
              defaultVariant: `Y1ageSf63`,
              enabledGestures: I,
              ref: o,
              variant: _,
              variantClassNames: z,
            }),
            Y = G(e, J),
            X = g(R, N);
          return a(f, {
            id: h ?? s,
            children: a(U, {
              animate: J,
              initial: !1,
              children: a(V, {
                value: B,
                children: a(x, {
                  clickTrackingId: D,
                  href: y,
                  motionChild: !0,
                  nodeId: `Y1ageSf63`,
                  openInNewTab: w,
                  scopeId: `RrS411mD0`,
                  smoothScroll: T,
                  children: a(u.a, {
                    ...O,
                    ...M,
                    className: `${g(X, `framer-17k9y98`, m, A)} framer-12u7a91`,
                    "data-border": !0,
                    "data-framer-name": `Primary_md`,
                    layoutDependency: Y,
                    layoutId: `Y1ageSf63`,
                    ref: o,
                    style: {
                      "--border-bottom-width": `2px`,
                      "--border-color": `var(--token-5210968f-df6f-4515-bb95-2991de324907, rgba(255, 255, 255, 0.2))`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                      backgroundColor: `var(--token-33937e6f-dc3e-4c47-bf83-7d83f61531ea, rgb(213, 255, 69))`,
                      borderBottomLeftRadius: 48,
                      borderBottomRightRadius: 48,
                      borderTopLeftRadius: 48,
                      borderTopRightRadius: 48,
                      boxShadow: `0px 0px 0px 0px var(--token-7c18d885-3911-4b92-8b65-0360963f8eb5, rgba(213, 255, 69, 0.2))`,
                      ...p,
                    },
                    variants: {
                      "CHQOr1bKi-hover": {
                        backgroundColor: `var(--token-6da9d50d-e927-4dcf-93ed-bf3b8039528b, rgb(232, 255, 156))`,
                        boxShadow: `0px 0px 0px 4px var(--token-1ca24cae-20d3-4f67-9ed7-c8f82be8026c, rgba(232, 255, 156, 0.2))`,
                      },
                      "Fbxwx_O9x-hover": { backgroundColor: `rgba(255, 255, 255, 0.2)` },
                      "jKlq4hEYT-hover": {
                        backgroundColor: `var(--token-7c18d885-3911-4b92-8b65-0360963f8eb5, rgba(255, 255, 255, 0.2))`,
                      },
                      "Y1ageSf63-hover": {
                        backgroundColor: `var(--token-6da9d50d-e927-4dcf-93ed-bf3b8039528b, rgb(232, 255, 156))`,
                        boxShadow: `0px 0px 0px 6px var(--token-1ca24cae-20d3-4f67-9ed7-c8f82be8026c, rgba(232, 255, 156, 0.2))`,
                      },
                      Fbxwx_O9x: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-932ec4ef-c27c-4840-af3d-3d501c48a21e, rgba(227, 182, 182, 0))`,
                        boxShadow: `none`,
                      },
                      jKlq4hEYT: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-932ec4ef-c27c-4840-af3d-3d501c48a21e, rgba(227, 182, 182, 0))`,
                        boxShadow: `none`,
                      },
                    },
                    ...F(
                      {
                        "CHQOr1bKi-hover": { "data-framer-name": void 0 },
                        "Fbxwx_O9x-hover": { "data-framer-name": void 0 },
                        "jKlq4hEYT-hover": { "data-framer-name": void 0 },
                        "Y1ageSf63-hover": { "data-framer-name": void 0 },
                        CHQOr1bKi: { "data-framer-name": `Primary-sm` },
                        Fbxwx_O9x: { "data-framer-name": `Secondary_sm` },
                        jKlq4hEYT: { "data-framer-name": `Secondary_md` },
                      },
                      k,
                      P
                    ),
                    children: a(E, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(u.p, {
                          className: `framer-styles-preset-9fs3sz`,
                          "data-styles-preset": `GxHDpGVa7`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-34d58044-5fb0-4480-9bc8-4e91d499d8e6, rgb(15, 15, 15)))`,
                          },
                          children: `Get started`,
                        }),
                      }),
                      className: `framer-1a4l70o`,
                      fonts: [`Inter`],
                      layoutDependency: Y,
                      layoutId: `iiVRZfBRQ`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-34d58044-5fb0-4480-9bc8-4e91d499d8e6, rgb(15, 15, 15))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: v,
                      variants: {
                        Fbxwx_O9x: {
                          "--extracted-r6o4lv": `var(--token-33937e6f-dc3e-4c47-bf83-7d83f61531ea, rgb(219, 160, 160))`,
                        },
                        jKlq4hEYT: {
                          "--extracted-r6o4lv": `var(--token-33937e6f-dc3e-4c47-bf83-7d83f61531ea, rgb(219, 160, 160))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...F(
                        {
                          Fbxwx_O9x: {
                            children: a(i, {
                              children: a(u.p, {
                                className: `framer-styles-preset-9fs3sz`,
                                "data-styles-preset": `GxHDpGVa7`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33937e6f-dc3e-4c47-bf83-7d83f61531ea, rgb(219, 160, 160)))`,
                                },
                                children: `Get started`,
                              }),
                            }),
                          },
                          jKlq4hEYT: {
                            children: a(i, {
                              children: a(u.p, {
                                className: `framer-styles-preset-9fs3sz`,
                                "data-styles-preset": `GxHDpGVa7`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33937e6f-dc3e-4c47-bf83-7d83f61531ea, rgb(219, 160, 160)))`,
                                },
                                children: `Get started`,
                              }),
                            }),
                          },
                        },
                        k,
                        P
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-BlR2K.framer-12u7a91, .framer-BlR2K .framer-12u7a91 { display: block; }`,
          `.framer-BlR2K.framer-17k9y98 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 36px; justify-content: center; overflow: hidden; padding: 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-BlR2K .framer-1a4l70o { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-BlR2K.framer-v-v3ogwj.framer-17k9y98, .framer-BlR2K.framer-v-125hd7d.framer-17k9y98 { height: 32px; padding: 8px; }`,
          ...M,
          `.framer-BlR2K[data-border="true"]::after, .framer-BlR2K [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-BlR2K`
      )),
      (K.displayName = `Button`),
      (K.defaultProps = { height: 36, width: 117.583 }),
      m(K, {
        variant: {
          options: [`Y1ageSf63`, `CHQOr1bKi`, `jKlq4hEYT`, `Fbxwx_O9x`],
          optionTitles: [`Primary_md`, `Primary-sm`, `Secondary_md`, `Secondary_sm`],
          title: `Variant`,
          type: T.Enum,
        },
        H9fdquxmO: {
          defaultValue: `Commencer`,
          displayTextArea: !1,
          title: `Text`,
          type: T.String,
        },
        onH9fdquxmOChange: { changes: `H9fdquxmO`, type: T.ChangeHandler },
        qa2d0SHwc: { title: `Link`, type: T.Link },
        uFNDrhDvW: { defaultValue: !0, title: `New Tab`, type: T.Boolean },
        onuFNDrhDvWChange: { changes: `uFNDrhDvW`, type: T.ChangeHandler },
        qZfHbmzQf: { defaultValue: !0, title: `Smooth Scroll`, type: T.Boolean },
        onqZfHbmzQfChange: { changes: `qZfHbmzQf`, type: T.ChangeHandler },
        WqF2Pzc7v: { title: `Tracking ID`, type: T.TrackingId },
      }),
      v(
        K,
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
          ..._(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { j as a, O as c, M as i, D as l, q as n, P as o, N as r, k as s, K as t, A as u };
//# sourceMappingURL=RrS411mD0.CsfXdnTS.mjs.map
