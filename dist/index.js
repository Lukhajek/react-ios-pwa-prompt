import { jsx as b } from "react/jsx-runtime";
import { useEffect as P } from "react";
import { useDeviceAndVersion as A } from "./hooks/useDeviceAndVersion.js";
import { useNumberOfVisits as V } from "./hooks/useNumberOfVisits.js";
import { useShouldShowPrompt as g } from "./hooks/useShouldShowPrompt.js";
import { Container as v } from "./components/Container/Container.js";
const C = ({
  appIconPath: e = `https://s2.googleusercontent.com/s2/favicons?domain=${((a) => (a = window == null ? void 0 : window.location) == null ? void 0 : a.origin)()}`,
  copyAddToHomeScreenStep: t = "Press 'Add to Home Screen'",
  copyDescription: i = "This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.",
  copyShareStep: r = "Press the 'Share' button on the menu bar below",
  copySubtitle: n = String(((h) => (h = window == null ? void 0 : window.location) == null ? void 0 : h.href)()),
  copyTitle: s = "Add to Home Screen",
  delay: m = 1e3,
  isShown: f = void 0,
  onClose: u = () => {
  },
  promptOnVisit: c = 2,
  timesToShow: d = 2,
  timeToClose: l = 5e3
}) => {
  const { isValidOS: o } = A(), { numberOfVisits: p, incrementNumberOfVisits: w } = V(), { shouldShowPrompt: S } = g({
    promptOnVisit: c,
    timesToShow: d,
    isShown: f
  });
  return P(() => {
    o && p !== void 0 && w();
  }, [o]), S ? /* @__PURE__ */ b(
    v,
    {
      delay: m,
      copyTitle: s,
      copySubtitle: n,
      copyDescription: i,
      copyShareStep: r,
      copyAddToHomeScreenStep: t,
      onClose: u,
      appIconPath: e,
      timeToClose: l
    }
  ) : null;
};
export {
  C as default
};
