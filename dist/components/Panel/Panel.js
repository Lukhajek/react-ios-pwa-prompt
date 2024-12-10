import { jsx as a } from "react/jsx-runtime";
import '../../assets/Panel.css';const s = "_panel_1qfqu_1", p = "_visible_1qfqu_31", e = {
  panel: s,
  visible: p
}, n = ({ children: i, isOpen: l }) => /* @__PURE__ */ a(
  "div",
  {
    className: `${e.panel} ${l && e.visible} iOSPWA-panel`,
    "aria-describedby": "pwa-prompt-description",
    "aria-labelledby": "pwa-prompt-title",
    role: "dialog",
    children: i
  }
);
export {
  n as Panel
};
