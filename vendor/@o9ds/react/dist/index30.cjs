"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const O9BadgeAlert = react.forwardRef(
  function O9BadgeAlert2({
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
      "o9ds-bdg-alert",
      `o9ds-bdg-alert--${variant}`,
      `o9ds-bdg-alert--${type}`,
      `o9ds-bdg-alert--${size}`,
      className ?? ""
    ].filter(Boolean).join(" ");
    const iconClasses = [
      "o9ds-bdg-alert__ico",
      "o9con",
      customIcon ? `o9con-${customIcon}` : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, role, className: classes, children: [
      hasIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: iconClasses, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-bdg-alert__msg", children: message })
    ] });
  }
);
exports.default = O9BadgeAlert;
//# sourceMappingURL=index30.cjs.map
