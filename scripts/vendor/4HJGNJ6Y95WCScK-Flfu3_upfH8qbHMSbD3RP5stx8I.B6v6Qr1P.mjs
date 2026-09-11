import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
async function t(e, t, i) {
  let a = r[e],
    o = a ? await a(t, i) : void 0,
    s = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of n) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(o);
    n && s[t.placement].push({ ...t, code: n });
  }
  return s;
}
var n, r, i, a;
e(() => {
  ((n = [
    {
      code: (e) => `<script>
  console.log("Script refresh")
  // 60000 millisecondes = 1 minute
  setInterval(function() {
    window.location.reload();
  }, 60000);
<\/script>
`,
      id: `aw7IG76Gr`,
      loadMode: `always`,
      name: `refresh`,
      pageIds: new Set([`TlURnpTMU`]),
      placement: `bodyEnd`,
    },
  ]),
    (r = {}),
    (i = { bodyEnd: [`aw7IG76Gr`], bodyStart: [], headEnd: [], headStart: [] }),
    (a = {
      exports: {
        getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
        snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { a as __FramerMetadata__, t as getSnippets, i as snippetsSorting };
//# sourceMappingURL=4HJGNJ6Y95WCScK-Flfu3_upfH8qbHMSbD3RP5stx8I.B6v6Qr1P.mjs.map
