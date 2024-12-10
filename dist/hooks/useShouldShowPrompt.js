import { useState as c, useEffect as f } from "react";
import { useNumberOfVisits as l } from "./useNumberOfVisits.js";
import { useDeviceAndVersion as a } from "./useDeviceAndVersion.js";
const V = ({
  promptOnVisit: e,
  timesToShow: r,
  isShown: o
}) => {
  const [d, u] = c(
    void 0
  ), { isValidOS: t, isStandalone: i } = a(), { numberOfVisits: s } = l();
  return f(() => {
    if (t !== void 0 && s !== void 0 && i === !1) {
      const m = s + 1 >= e, n = s + 1 < e + r;
      u(
        o === void 0 && (t && m && n) || o !== void 0 && o
      );
    }
  }, [t, s, o, i]), { shouldShowPrompt: d };
};
export {
  V as useShouldShowPrompt
};
