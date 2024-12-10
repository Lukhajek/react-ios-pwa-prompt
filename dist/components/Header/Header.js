import { jsxs as g, jsx as p } from "react/jsx-runtime";
import R, { useState as O, useEffect as w } from "react";
import { CloseButton as E } from "../CloseButton/CloseButton.js";
import '../../assets/Header.css';var v = {};
Object.defineProperty(v, "__esModule", { value: !0 });
var l = R;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var k = function(t, a) {
  return k = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var n in e)
      e.hasOwnProperty(n) && (r[n] = e[n]);
  }, k(t, a);
};
function I(t, a) {
  k(t, a);
  function r() {
    this.constructor = t;
  }
  t.prototype = a === null ? Object.create(a) : (r.prototype = a.prototype, new r());
}
var y = function() {
  return y = Object.assign || function(a) {
    for (var r, e = 1, n = arguments.length; e < n; e++) {
      r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i]);
    }
    return a;
  }, y.apply(this, arguments);
};
function T(t, a) {
  var r = {};
  for (var e in t)
    Object.prototype.hasOwnProperty.call(t, e) && a.indexOf(e) < 0 && (r[e] = t[e]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, e = Object.getOwnPropertySymbols(t); n < e.length; n++)
      a.indexOf(e[n]) < 0 && (r[e[n]] = t[e[n]]);
  return r;
}
var W = 100, N = 100, P = 50, b = 50, C = 50;
function x(t) {
  var a = t.className, r = t.counterClockwise, e = t.dashRatio, n = t.pathRadius, i = t.strokeWidth, o = t.style;
  return l.createElement("path", { className: a, style: Object.assign({}, o, V({ pathRadius: n, dashRatio: e, counterClockwise: r })), d: S({
    pathRadius: n,
    counterClockwise: r
  }), strokeWidth: i, fillOpacity: 0 });
}
function S(t) {
  var a = t.pathRadius, r = t.counterClockwise, e = a, n = r ? 1 : 0;
  return `
      M ` + b + "," + C + `
      m 0,-` + e + `
      a ` + e + "," + e + " " + n + " 1 1 0," + 2 * e + `
      a ` + e + "," + e + " " + n + " 1 1 0,-" + 2 * e + `
    `;
}
function V(t) {
  var a = t.counterClockwise, r = t.dashRatio, e = t.pathRadius, n = Math.PI * 2 * e, i = (1 - r) * n;
  return {
    strokeDasharray: n + "px " + n + "px",
    strokeDashoffset: (a ? -i : i) + "px"
  };
}
var _ = function(t) {
  I(a, t);
  function a() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return a.prototype.getBackgroundPadding = function() {
    return this.props.background ? this.props.backgroundPadding : 0;
  }, a.prototype.getPathRadius = function() {
    return P - this.props.strokeWidth / 2 - this.getBackgroundPadding();
  }, a.prototype.getPathRatio = function() {
    var r = this.props, e = r.value, n = r.minValue, i = r.maxValue, o = Math.min(Math.max(e, n), i);
    return (o - n) / (i - n);
  }, a.prototype.render = function() {
    var r = this.props, e = r.circleRatio, n = r.className, i = r.classes, o = r.counterClockwise, s = r.styles, c = r.strokeWidth, u = r.text, h = this.getPathRadius(), f = this.getPathRatio();
    return l.createElement(
      "svg",
      { className: i.root + " " + n, style: s.root, viewBox: "0 0 " + W + " " + N, "data-test-id": "CircularProgressbar" },
      this.props.background ? l.createElement("circle", { className: i.background, style: s.background, cx: b, cy: C, r: P }) : null,
      l.createElement(x, { className: i.trail, counterClockwise: o, dashRatio: e, pathRadius: h, strokeWidth: c, style: s.trail }),
      l.createElement(x, { className: i.path, counterClockwise: o, dashRatio: f * e, pathRadius: h, strokeWidth: c, style: s.path }),
      u ? l.createElement("text", { className: i.text, style: s.text, x: b, y: C }, u) : null
    );
  }, a.defaultProps = {
    background: !1,
    backgroundPadding: 0,
    circleRatio: 1,
    classes: {
      root: "CircularProgressbar",
      trail: "CircularProgressbar-trail",
      path: "CircularProgressbar-path",
      text: "CircularProgressbar-text",
      background: "CircularProgressbar-background"
    },
    counterClockwise: !1,
    className: "",
    maxValue: 100,
    minValue: 0,
    strokeWidth: 8,
    styles: {
      root: {},
      trail: {},
      path: {},
      text: {},
      background: {}
    },
    text: ""
  }, a;
}(l.Component);
function j(t) {
  t.children;
  var a = T(t, ["children"]);
  return l.createElement(
    "div",
    { "data-test-id": "CircularProgressbarWithChildren" },
    l.createElement(
      "div",
      { style: { position: "relative", width: "100%", height: "100%" } },
      l.createElement(_, y({}, a)),
      t.children ? l.createElement("div", { "data-test-id": "CircularProgressbarWithChildren__children", style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        marginTop: "-100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      } }, t.children) : null
    )
  );
}
function D(t) {
  var a = t.rotation, r = t.strokeLinecap, e = t.textColor, n = t.textSize, i = t.pathColor, o = t.pathTransition, s = t.pathTransitionDuration, c = t.trailColor, u = t.backgroundColor, h = a == null ? void 0 : "rotate(" + a + "turn)", f = a == null ? void 0 : "center center";
  return {
    root: {},
    path: m({
      stroke: i,
      strokeLinecap: r,
      transform: h,
      transformOrigin: f,
      transition: o,
      transitionDuration: s == null ? void 0 : s + "s"
    }),
    trail: m({
      stroke: c,
      strokeLinecap: r,
      transform: h,
      transformOrigin: f
    }),
    text: m({
      fill: e,
      fontSize: n
    }),
    background: m({
      fill: u
    })
  };
}
function m(t) {
  return Object.keys(t).forEach(function(a) {
    t[a] == null && delete t[a];
  }), t;
}
var B = v.CircularProgressbar = _;
v.CircularProgressbarWithChildren = j;
var H = v.buildStyles = D;
const L = "_header_1cbck_1", X = "_appInfo_1cbck_23", M = "_appIcon_1cbck_33", $ = "_appTitleContainer_1cbck_51", z = "_appTitle_1cbck_51", A = "_appSubtitle_1cbck_85", d = {
  header: L,
  appInfo: X,
  appIcon: M,
  appTitleContainer: $,
  appTitle: z,
  appSubtitle: A
}, U = ({
  appIconPath: t,
  copySubtitle: a,
  copyTitle: r,
  onClose: e,
  timeToClose: n,
  isOpen: i
}) => {
  const [o, s] = O(0);
  return w(() => {
    if (!i) {
      s(0);
      return;
    }
    const c = setInterval(() => {
      s((u) => u >= 100 ? (clearInterval(c), 100) : u + 100 / (n / 1e3) / 5);
    }, 200);
    return () => clearInterval(c);
  }, [i, n]), /* @__PURE__ */ g("div", { className: `${d.header} iOSPWA-header`, children: [
    /* @__PURE__ */ g("div", { className: d.appInfo, children: [
      /* @__PURE__ */ p("img", { className: d.appIcon, src: t }),
      /* @__PURE__ */ g("div", { className: d.appTitleContainer, children: [
        /* @__PURE__ */ p("span", { className: d.appTitle, children: r }),
        /* @__PURE__ */ p("span", { className: d.appSubtitle, children: a })
      ] })
    ] }),
    /* @__PURE__ */ g(
      "div",
      {
        style: {
          width: "38px",
          height: "38px",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          /* @__PURE__ */ p("div", { style: { position: "absolute", width: "100%", height: "100%" }, children: /* @__PURE__ */ p(
            B,
            {
              value: o,
              styles: H({
                pathColor: `rgba(10, 132, 255, ${o / 100})`,
                pathTransitionDuration: 0.2,
                pathTransition: "linear"
              })
            }
          ) }),
          /* @__PURE__ */ p(E, { disabled: o < 100, onClose: e })
        ]
      }
    )
  ] });
};
export {
  U as Header
};
