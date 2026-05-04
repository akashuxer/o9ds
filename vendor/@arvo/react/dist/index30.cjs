"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const ArvoBadgeAlert = react.forwardRef(
  function ArvoBadgeAlert2({
    message,
    type = "positive",
    variant = "primary",
    size = "lg",
    hasIcon = true,
    customIcon,
    className,
    role = "status"
  }, ref) {
    const classes = [
      "arvo-bdg-alert",
      `arvo-bdg-alert--${variant}`,
      `arvo-bdg-alert--${type}`,
      `arvo-bdg-alert--${size}`,
      className ?? ""
    ].filter(Boolean).join(" ");
    const iconClasses = [
      "arvo-bdg-alert__ico",
      "o9con",
      customIcon ? `o9con-${customIcon}` : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, role, className: classes, children: [
      hasIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: iconClasses, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-bdg-alert__msg", children: message })
    ] });
  }
);
exports.default = ArvoBadgeAlert;
//# sourceMappingURL=index30.cjs.map
