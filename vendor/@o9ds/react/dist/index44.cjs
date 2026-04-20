"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const O9Indicator = react.forwardRef(
  function O9Indicator2({ variant, size = "lg", className }, ref) {
    const classes = [
      "o9ds-indicator",
      `o9ds-indicator--${variant}`,
      `o9ds-indicator--${size}`,
      className ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsx("span", { ref, className: classes, "aria-hidden": "true" });
  }
);
exports.default = O9Indicator;
//# sourceMappingURL=index44.cjs.map
