import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const O9Indicator = forwardRef(
  function O9Indicator2({ variant, size = "lg", className }, ref) {
    const classes = [
      "o9ds-indicator",
      `o9ds-indicator--${variant}`,
      `o9ds-indicator--${size}`,
      className ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx("span", { ref, className: classes, "aria-hidden": "true" });
  }
);
export {
  O9Indicator as default
};
//# sourceMappingURL=index44.js.map
