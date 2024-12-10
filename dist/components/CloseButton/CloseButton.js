import { jsx as o } from "react/jsx-runtime";
import { IconClose as n } from "../IconClose/IconClose.js";
import '../../assets/CloseButton.css';const c = "_closeButton_b4opj_1", e = {
  closeButton: c
}, u = ({ onClose: t, disabled: s }) => /* @__PURE__ */ o(
  "button",
  {
    className: `${e.closeButton} iOSPWA-closeButton`,
    onClick: t,
    disabled: s,
    children: /* @__PURE__ */ o(n, {})
  }
);
export {
  u as CloseButton
};
