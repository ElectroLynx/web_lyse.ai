import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  P as s,
  R as c,
  c as l,
  g as u,
  k as d,
  l as f,
  o as p,
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { C as te, a as ne, r as re, t as m } from "./motion.uzrgujnr.mjs";
import {
  C as h,
  E as g,
  F as _,
  P as v,
  S as y,
  V as b,
  a as x,
  at as ie,
  et as ae,
  ft as S,
  g as C,
  it as w,
  n as oe,
  nt as se,
  ot as ce,
  r as T,
  rt as le,
  t as ue,
  y as de,
} from "./framer.CxxJYT0Q.mjs";
import { i as fe, n as pe, r as me, t as he } from "./IsDMY7Ceo.DVl7KeDs.mjs";
import ge, { t as _e } from "./X4GieQh7wOqpyBhChh-L1IGAXld0eeoOATy3zVLkq14.BQXp5NVR.mjs";
var E,
  D,
  O = e(() => {
    (b(),
      (E = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (D = {
        ...E,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      T.EventHandler,
      T.EventHandler,
      T.EventHandler,
      T.Number,
      T.Boolean,
      T.String,
      T.Enum);
  }),
  ve = e(() => {
    (b(), n());
  }),
  k = e(() => {
    n();
  }),
  ye = e(() => {
    b();
  }),
  A = e(() => {
    b();
  }),
  j = e(() => {
    n();
  }),
  M = e(() => {
    b();
  }),
  N = e(() => {
    (i(), n());
  }),
  P = e(() => {
    (n(), A());
  }),
  be = e(() => {
    (n(), b(), A(), k());
  }),
  xe = e(() => {
    (b(), n(), O());
  });
function Se() {
  return t(() => C.current() === C.canvas, []);
}
var Ce = e(() => {
    (n(), b());
  }),
  we = e(() => {
    n();
  }),
  Te = e(() => {
    (n(), b(), T.FusedNumber, T.FusedNumber);
  }),
  F = e(() => {
    (O(), ve(), k(), ye(), A(), j(), M(), N(), P(), be(), xe(), Ce(), we(), Te());
  }),
  Ee = e(() => {
    F();
  });
function I({ type: e, url: t, html: n, zoom: r, radius: i, border: a, style: o = {} }) {
  return e === `url` && t
    ? l(Oe, { url: t, zoom: r, radius: i, border: a, style: o })
    : e === `html` && n
      ? l(Ae, { html: n, style: o })
      : l(De, { style: o });
}
function De({ style: e }) {
  return l(`div`, {
    style: { minHeight: z(e), ...D, overflow: `hidden`, ...e },
    children: l(`div`, {
      style: H,
      children: `To embed a website or widget, add it to the properties\xA0panel.`,
    }),
  });
}
function Oe({ url: e, zoom: t, radius: n, border: r, style: i }) {
  let o = !i.height;
  /[a-z]+:\/\//.test(e) || (e = `https://` + e);
  let c = Se(),
    [u, d] = s(c ? void 0 : !1);
  return (
    a(() => {
      if (!c) return;
      let t = !0;
      d(void 0);
      async function n() {
        let n = await fetch(
          `https://api.framer.com/functions/check-iframe-url?url=` + encodeURIComponent(e)
        );
        if (n.status == 200) {
          let { isBlocked: e } = await n.json();
          t && d(e);
        } else {
          let e = await n.text();
          (console.error(e), d(Error(`This site can’t be reached.`)));
        }
      }
      return (
        n().catch((e) => {
          (console.error(e), d(e));
        }),
        () => {
          t = !1;
        }
      );
    }, [e]),
    c && o
      ? l(R, { message: `URL embeds do not support auto height.`, style: i })
      : e.startsWith(`https://`)
        ? u === void 0
          ? l(Pe, {})
          : u instanceof Error
            ? l(R, { message: u.message, style: i })
            : u === !0
              ? l(R, { message: `Can’t embed ${e} due to its content security policy.`, style: i })
              : l(`iframe`, {
                  src: e,
                  style: {
                    ...B,
                    ...i,
                    ...r,
                    zoom: t,
                    borderRadius: n,
                    transformOrigin: `top center`,
                  },
                  loading: `lazy`,
                  fetchPriority: c ? `low` : `auto`,
                  referrerPolicy: `no-referrer`,
                  sandbox: ke(c),
                  allowFullScreen: !0,
                  allow: `presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`,
                })
        : l(R, { message: `Unsupported protocol.`, style: i })
  );
}
function ke(e) {
  let t = [`allow-same-origin`, `allow-scripts`];
  return (
    e ||
      t.push(
        `allow-downloads`,
        `allow-forms`,
        `allow-modals`,
        `allow-orientation-lock`,
        `allow-pointer-lock`,
        `allow-popups`,
        `allow-popups-to-escape-sandbox`,
        `allow-presentation`,
        `allow-storage-access-by-user-activation`,
        `allow-top-navigation-by-user-activation`
      ),
    t.join(` `)
  );
}
function Ae({ html: e, ...t }) {
  if (e.includes(`<\/script>`)) {
    let n = e.includes(`</spline-viewer>`),
      r = e.includes(`<!-- framer-direct-embed -->`);
    return l(n || r ? Me : je, { html: e, ...t });
  }
  return l(Ne, { html: e, ...t });
}
function je({ html: e, style: t }) {
  let n = r(),
    [i, o] = s(0);
  a(() => {
    let e = n.current?.contentWindow;
    function t(t) {
      if (t.source !== e) return;
      let n = t.data;
      if (typeof n != `object` || !n) return;
      let r = n.embedHeight;
      typeof r == `number` && o(r);
    }
    return (
      c.addEventListener(`message`, t),
      e?.postMessage(`getEmbedHeight`, `*`),
      () => {
        c.removeEventListener(`message`, t);
      }
    );
  }, []);
  let u = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,
    d = { ...B, ...t };
  return (t.height || (d.height = i + `px`), l(`iframe`, { ref: n, style: d, srcDoc: u }));
}
function Me({ html: e, style: t }) {
  let n = r();
  return (
    a(() => {
      let t = n.current;
      if (t)
        return (
          (t.innerHTML = e),
          L(t),
          () => {
            t.innerHTML = ``;
          }
        );
    }, [e]),
    l(`div`, { ref: n, style: { ...V, ...t } })
  );
}
function Ne({ html: e, style: t }) {
  return l(`div`, { style: { ...V, ...t }, dangerouslySetInnerHTML: { __html: e } });
}
function L(e) {
  if (e instanceof Element && e.tagName === `SCRIPT`) {
    let t = document.createElement(`script`);
    t.text = e.innerHTML;
    for (let { name: n, value: r } of e.attributes) t.setAttribute(n, r);
    e.parentElement.replaceChild(t, e);
  } else for (let t of e.childNodes) L(t);
}
function Pe() {
  return l(`div`, {
    className: `framerInternalUI-componentPlaceholder`,
    style: { ...E, overflow: `hidden` },
    children: l(`div`, { style: H, children: `Loading…` }),
  });
}
function R({ message: e, style: t }) {
  return l(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { minHeight: z(t), ...E, overflow: `hidden`, ...t },
    children: l(`div`, { style: H, children: e }),
  });
}
function z(e) {
  if (!e.height) return 200;
}
var B,
  V,
  H,
  Fe = e(() => {
    (i(),
      p(),
      n(),
      b(),
      Ee(),
      h(I, {
        type: {
          type: T.Enum,
          defaultValue: `url`,
          displaySegmentedControl: !0,
          options: [`url`, `html`],
          optionTitles: [`URL`, `HTML`],
        },
        url: {
          title: `URL`,
          type: T.String,
          description: `Some websites don’t support embedding.`,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        html: {
          title: `HTML`,
          type: T.String,
          displayTextArea: !0,
          hidden(e) {
            return e.type !== `html`;
          },
        },
        border: {
          title: `Border`,
          type: T.Border,
          optional: !0,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        radius: {
          type: T.BorderRadius,
          title: `Radius`,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        zoom: {
          title: `Zoom`,
          defaultValue: 1,
          type: T.Number,
          hidden(e) {
            return e.type !== `url`;
          },
          min: 0.1,
          max: 1,
          step: 0.1,
          displayStepper: !0,
        },
      }),
      (B = { width: `100%`, height: `100%`, border: `none` }),
      (V = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (H = { textAlign: `center`, minWidth: 140 }));
  }),
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $;
e(() => {
  (p(),
    b(),
    m(),
    n(),
    Fe(),
    fe(),
    _e(),
    (U = v(I)),
    (W = {}),
    (G = []),
    (K = `framer-wLaMl`),
    (q = { MKYIyBdVV: `framer-v-1c2g3b1` }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = (e, t) => `translateX(-50%) ${t}`),
    (X = ({ value: e }) =>
      w()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
    (Q = S(
      u(function (e, n) {
        let i = r(null),
          a = n ?? i,
          s = ee(),
          { activeLocale: c, setLocale: u } = ie();
        ae();
        let { style: p, className: m, layoutId: h, variant: _, ...v } = Z(e);
        ce(t(() => ge({}, c), [c]));
        let [y, b] = le(_, W, !1),
          S = g(K, he),
          C = d(x)?.isLayoutTemplate,
          w = !!d(ne)?.transition?.layout,
          T = J(C, w);
        return (
          se({}),
          l(x.Provider, {
            value: { activeVariantId: y, primaryVariantId: `MKYIyBdVV`, variantClassNames: q },
            children: f(re, {
              id: h ?? s,
              children: [
                l(X, {
                  value: `html body { background: var(--token-bad6d7ef-d880-4bf8-8504-e0f905d14890, rgb(0, 0, 0)); }`,
                }),
                f(te.div, {
                  ...v,
                  className: g(S, `framer-1c2g3b1`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    l(de, {
                      __fromCanvasComponent: !0,
                      children: l(o, {
                        children: l(`p`, {
                          className: `framer-styles-preset-o5z0st`,
                          "data-styles-preset": `IsDMY7Ceo`,
                          dir: `auto`,
                          children: `l'entraînement en temps réel`,
                        }),
                      }),
                      className: `framer-1ha41yc`,
                      fonts: [`Inter`],
                      layout: T,
                      transformTemplate: Y,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    l(ue, {
                      children: l(oe, {
                        className: `framer-1i0hzz4-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: T,
                        nodeId: `mJognDZJz`,
                        scopeId: `TlURnpTMU`,
                        children: l(I, {
                          height: `100%`,
                          html: `<img src="../../assets/misc/status.php" style="width: 100%; height: 100%; object-fit: contain; max-width: 100%;" />
`,
                          id: `mJognDZJz`,
                          layoutId: `mJognDZJz`,
                          radius: `0px`,
                          style: { height: `100%`, width: `100%` },
                          type: `html`,
                          url: `../../assets/misc/status.php`,
                          width: `100%`,
                          zoom: 1,
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-wLaMl.framer-1s8o59c, .framer-wLaMl .framer-1s8o59c { display: block; }`,
        `.framer-wLaMl.framer-1c2g3b1 { align-content: center; align-items: center; background-color: var(--token-bad6d7ef-d880-4bf8-8504-e0f905d14890, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1022px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-wLaMl .framer-1ha41yc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 923px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre; width: auto; z-index: 1; }`,
        `.framer-wLaMl .framer-1i0hzz4-container { flex: none; height: 762px; position: relative; width: 996px; z-index: 1; }`,
        ...pe,
      ],
      `framer-wLaMl`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1021.8, width: 1200 }),
    y(
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
        ...U,
        ..._(me),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerTlURnpTMU`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicHeight: `1021.8`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, G as queryParamNames };
//# sourceMappingURL=Pns0VbCyM3R_57lCPSoGfgvq-NXcJaJThjOB_K2t1SU.DmP9iN9L.mjs.map
