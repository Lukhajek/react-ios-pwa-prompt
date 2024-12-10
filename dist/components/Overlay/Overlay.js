import { jsx as l } from "react/jsx-runtime";
import '../../assets/Overlay.css';const o = "_overlay_1x3hp_1", i = "_visible_1x3hp_31", e = {
  overlay: o,
  visible: i
}, v = ({ isOpen: s }) => /* @__PURE__ */ l(
  "div",
  {
    className: `${e.overlay} ${s && e.visible} iOSPWA-overlay`
  }
);
export {
  v as Overlay
};
