import { jsx as a } from "react/jsx-runtime";
import '../../assets/Panel.css';const s = "_panel_1lc1g_1", p = "_visible_1lc1g_31", e = {
  panel: s,
  visible: p
}, n = ({ children: l, isOpen: i }) => /* @__PURE__ */ a(
  "div",
  {
    className: `${e.panel} ${i && e.visible} iOSPWA-panel`,
    "aria-describedby": "pwa-prompt-description",
    "aria-labelledby": "pwa-prompt-title",
    role: "dialog",
    children: l
  }
);
export {
  n as Panel
};
