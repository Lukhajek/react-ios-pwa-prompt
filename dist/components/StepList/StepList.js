import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { IconAddToHomeScreen as c } from "../IconAddToHomeScreen/IconAddToHomeScreen.js";
import { IconShare as i } from "../IconShare/IconShare.js";
import { StepItem as t } from "../StepItem/StepItem.js";
import '../../assets/StepList.css';const m = "_list_1qj1j_1", n = {
  list: m
}, f = ({ copyAddToHomeScreenStep: s, copyShareStep: r }) => /* @__PURE__ */ e("ol", { className: `${n.list} iOSPWA-stepList`, children: [
  /* @__PURE__ */ o(t, { copy: r, Icon: /* @__PURE__ */ o(i, {}) }),
  /* @__PURE__ */ o(t, { copy: s, Icon: /* @__PURE__ */ o(c, {}) })
] });
export {
  f as StepList
};
