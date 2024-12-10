import { jsx as l } from "react/jsx-runtime";
import '../../assets/Overlay.css';const o = "_overlay_sfp04_1", i = "_visible_sfp04_27", s = {
  overlay: o,
  visible: i
}, v = ({ isOpen: e }) => /* @__PURE__ */ l(
  "div",
  {
    className: `${s.overlay} ${e && s.visible} iOSPWA-overlay`
  }
);
export {
  v as Overlay
};
