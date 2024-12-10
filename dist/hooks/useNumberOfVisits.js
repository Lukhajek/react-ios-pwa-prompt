import { useState as n, useEffect as c } from "react";
import { useLocalStorageObject as u } from "./useLocalStorageObject.js";
import { useDeviceAndVersion as f } from "./useDeviceAndVersion.js";
const p = () => {
  const { get: i, set: e } = u(), { isValidOS: o } = f(), [s, r] = n(
    void 0
  );
  return c(() => {
    var t;
    const m = ((t = i("iosPwaPrompt")) == null ? void 0 : t.visits) ?? 0;
    r(m);
  }, []), { numberOfVisits: s, incrementNumberOfVisits: () => {
    e("iosPwaPrompt", { isValidOS: o, visits: (s ?? 0) + 1 });
  } };
};
export {
  p as useNumberOfVisits
};
