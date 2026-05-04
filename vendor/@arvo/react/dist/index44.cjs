"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const ArvoIndicator = react.forwardRef(
  function ArvoIndicator2({ variant, size = "lg", className }, ref) {
    const classes = [
      "arvo-indicator",
      `arvo-indicator--${variant}`,
      `arvo-indicator--${size}`,
      className ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsx("span", { ref, className: classes, "aria-hidden": "true" });
  }
);
exports.default = ArvoIndicator;
//# sourceMappingURL=index44.cjs.map
