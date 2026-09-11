import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  l as c,
  o as l,
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { C as u, a as d, r as f, t as p } from "./motion.uzrgujnr.mjs";
import {
  E as m,
  F as h,
  O as te,
  P as g,
  S as _,
  V as v,
  a as y,
  at as ne,
  ct as re,
  et as ie,
  ft as b,
  ht as x,
  it as S,
  lt as ae,
  m as oe,
  n as C,
  nt as se,
  ot as w,
  rt as T,
  t as E,
  v as D,
  y as O,
} from "./framer.CxxJYT0Q.mjs";
import { c as ce, l as k, n as A, s as le, t as j, u as M } from "./RrS411mD0.CsfXdnTS.mjs";
import { i as N, n as P, r as F, t as ue } from "./ByD69Lzay.COMSiL52.mjs";
import de, { t as I } from "./u24WfmhO4qCBEXkO6T8skJBS1XtUMzaFeIZTXPe70Og.CH_R8F3c.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (l(),
    v(),
    p(),
    n(),
    A(),
    M(),
    N(),
    I(),
    (L = g(j)),
    (R = x(C)),
    (z = {
      FpVlTsHs8: `(max-width: 809.98px)`,
      y96xgQgGF: `(min-width: 1200px)`,
      Zqkmu7I2u: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (B = []),
    (V = `framer-PvXUQ`),
    (H = {
      FpVlTsHs8: `framer-v-1ulizrx`,
      y96xgQgGF: `framer-v-gxps97`,
      Zqkmu7I2u: `framer-v-9qtnut`,
    }),
    (U = (e, t, n) => (e && t ? `position` : n)),
    (W = {
      effect: {
        filter: `blur(4px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 12,
      },
      repeat: !1,
      startDelay: 0,
      tokenization: `word`,
      transition: { delay: 0.05, duration: 0.8, ease: [0.12, 0.23, 0.17, 0.98], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (G = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      },
      repeat: !1,
      startDelay: 0.2,
      tokenization: `line`,
      transition: { delay: 0.05, duration: 0.7, ease: [0.12, 0.23, 0.17, 0.98], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (K = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.4, duration: 1.5, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` },
      x: 0,
      y: 0,
    }),
    (q = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 24,
    }),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `y96xgQgGF`, Phone: `FpVlTsHs8`, Tablet: `Zqkmu7I2u` }),
    (X = ({ value: e }) =>
      S()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `y96xgQgGF`,
    })),
    (Q = b(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          p = ee(),
          { activeLocale: h, setLocale: te } = ne(),
          g = ie(),
          { style: _, className: v, layoutId: b, variant: x, ...S } = Z(e);
        w(t(() => de({}, h), [h]));
        let [C, ce] = T(x, z, !1),
          k = m(V, ue, le),
          A = s(y)?.isLayoutTemplate,
          M = !!s(d)?.transition?.layout,
          N = U(A, M),
          P = re(`fvp2g9fo9`),
          F = r(null);
        return (
          ae(),
          se({}),
          a(y.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Y,
              primaryVariantId: `y96xgQgGF`,
              variantClassNames: H,
            },
            children: c(f, {
              id: b ?? p,
              children: [
                a(X, {
                  value: `html body { background: var(--token-bad6d7ef-d880-4bf8-8504-e0f905d14890, rgb(0, 0, 0)); }`,
                }),
                a(u.div, {
                  ...S,
                  className: m(k, `framer-gxps97`, v),
                  ref: l,
                  style: { ..._ },
                  children: a(u.div, {
                    className: `framer-po9h4g`,
                    "data-framer-name": `Container`,
                    layout: N,
                    children: c(`div`, {
                      className: `framer-qnnec5`,
                      "data-framer-name": `Content`,
                      id: P,
                      ref: F,
                      children: [
                        c(`div`, {
                          className: `framer-qvoa8n`,
                          "data-framer-name": `Text`,
                          children: [
                            a(O, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(`h1`, {
                                  className: `framer-styles-preset-1eyg8rr`,
                                  "data-styles-preset": `ByD69Lzay`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `404 - Ce chemin n'a pas été trouvé`,
                                }),
                              }),
                              className: `framer-ab9ltr`,
                              "data-framer-name": `Heading`,
                              effect: W,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            a(O, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(`p`, {
                                  className: `framer-styles-preset-xsql1q`,
                                  "data-styles-preset": `Awxi1CAQQ`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `La page est dans le trou noir, mais vous pouvez revenir au lobby`,
                                }),
                              }),
                              className: `framer-1ebh8d4`,
                              "data-framer-name": `Supporting text`,
                              effect: G,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        a(D, {
                          links: [
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            a(E, {
                              height: 36,
                              y: (g?.y || 0) + 0 + 0 + 394.2 + 0 + 175.6,
                              children: a(R, {
                                animate: K,
                                className: `framer-1erovv4-container`,
                                "data-framer-appear-id": `1erovv4`,
                                initial: q,
                                nodeId: `q91X_qq4N`,
                                optimized: !0,
                                rendersWithMotion: !0,
                                scopeId: `DDN4tRh_7`,
                                children: a(oe, {
                                  breakpoint: C,
                                  overrides: {
                                    FpVlTsHs8: { qa2d0SHwc: e[2] },
                                    Zqkmu7I2u: { qa2d0SHwc: e[1] },
                                  },
                                  children: a(j, {
                                    H9fdquxmO: `Retourner à l'accueil`,
                                    height: `100%`,
                                    id: `q91X_qq4N`,
                                    layoutId: `q91X_qq4N`,
                                    qa2d0SHwc: e[0],
                                    qZfHbmzQf: !1,
                                    uFNDrhDvW: !1,
                                    variant: J(`Y1ageSf63`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-PvXUQ.framer-xmy7j3, .framer-PvXUQ .framer-xmy7j3 { display: block; }`,
        `.framer-PvXUQ.framer-gxps97 { align-content: center; align-items: center; background-color: var(--token-bad6d7ef-d880-4bf8-8504-e0f905d14890, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-PvXUQ .framer-po9h4g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 96px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-PvXUQ .framer-qnnec5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 860px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-PvXUQ .framer-qvoa8n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-PvXUQ .framer-ab9ltr { --framer-paragraph-spacing: 66px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PvXUQ .framer-1ebh8d4 { --framer-paragraph-spacing: 20px; flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PvXUQ .framer-1erovv4-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        ...P,
        ...ce,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-PvXUQ.framer-gxps97 { width: 810px; } .framer-PvXUQ .framer-po9h4g { padding: 0px 24px 0px 24px; }}`,
        `@media (max-width: 809.98px) { .framer-PvXUQ.framer-gxps97 { width: 390px; } .framer-PvXUQ .framer-po9h4g { padding: 0px 16px 0px 16px; }}`,
      ],
      `framer-PvXUQ`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1059.8, width: 1200 }),
    _(
      Q,
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
        ...L,
        ...h(F),
        ...h(k),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([te(j, {}, t)])) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerDDN4tRh_7`,
          slots: [],
          annotations: {
            framerScrollSections: `{"fvp2g9fo9":{"pattern":":fvp2g9fo9","name":"navbar-bg"}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `1059.8`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Zqkmu7I2u":{"layout":["fixed","fixed"]},"FpVlTsHs8":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, B as queryParamNames };
//# sourceMappingURL=hZdcC8hXRMdb_4qAX9rgKCi0FYJicH5Ndl-vKjrTcLY.DN1U00Ux.mjs.map
