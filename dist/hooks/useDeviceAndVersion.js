import { useState as o, useEffect as f } from "react";
const S = () => {
  const [i, r] = o(
    void 0
  ), [d, c] = o(void 0), [l, g] = o(
    void 0
  ), [v, w] = o(void 0);
  return f(() => {
    var s, a;
    const t = window.navigator.userAgent.toLowerCase(), p = new RegExp("(iphone|ipad|ipod|macintosh)", "g"), u = new RegExp("os (\\d+)", "g"), n = (s = p.exec(t)) == null ? void 0 : s[1], e = n === "macintosh" && window.navigator.maxTouchPoints > 1, m = (a = u.exec(t)) == null ? void 0 : a[1], x = "standalone" in window.navigator && !!window.navigator.standalone;
    g(x), w(e || !!(n && n !== "macintosh")), r(e ? "ipad" : n ?? null), c(n || e ? m ?? null : null);
  }, [window.navigator.userAgent]), { platform: i, version: d, isStandalone: l, isValidOS: v };
};
export {
  S as useDeviceAndVersion
};
