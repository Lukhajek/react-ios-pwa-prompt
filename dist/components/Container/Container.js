import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { useState as b, useEffect as m } from "react";
import { Description as x } from "../Description/Description.js";
import { Divider as l } from "../Divider/Divider.js";
import { Header as y } from "../Header/Header.js";
import { Overlay as L } from "../Overlay/Overlay.js";
import { Panel as O } from "../Panel/Panel.js";
import { StepList as g } from "../StepList/StepList.js";
import '../../assets/Container.css';const h = "_container_19eg9_1", j = "_noScroll_19eg9_17", n = {
  container: h,
  noScroll: j
}, T = ({
  appIconPath: f,
  copyAddToHomeScreenStep: a,
  copyDescription: p,
  copyShareStep: d,
  copySubtitle: u,
  copyTitle: S,
  delay: r,
  onClose: i,
  timeToClose: _
}) => {
  const [t, s] = b(!r);
  m(() => {
    r && setTimeout(() => {
      var e;
      (e = document == null ? void 0 : document.activeElement) == null || e.blur(), s(!0);
    }, r);
  }, []), m(() => {
    t && document.body.classList.add(n.noScroll);
  }, [t]);
  const v = (e) => {
    document.body.classList.remove(n.noScroll), s(!1), typeof i == "function" && i(e);
  };
  return /* @__PURE__ */ c("div", { className: n.container, children: [
    /* @__PURE__ */ o(L, { isOpen: t }),
    /* @__PURE__ */ c(O, { isOpen: t, children: [
      /* @__PURE__ */ o(
        y,
        {
          appIconPath: f,
          copySubtitle: u,
          copyTitle: S,
          onClose: v,
          timeToClose: _,
          isOpen: t
        }
      ),
      /* @__PURE__ */ o(l, {}),
      /* @__PURE__ */ o(x, { copyDescription: p }),
      /* @__PURE__ */ o(l, {}),
      /* @__PURE__ */ o(
        g,
        {
          copyShareStep: d,
          copyAddToHomeScreenStep: a
        }
      )
    ] })
  ] });
};
export {
  T as Container
};
