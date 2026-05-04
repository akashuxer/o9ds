import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const ArvoIndicator = forwardRef(
  function ArvoIndicator2({ variant, size = "lg", className }, ref) {
    const classes = [
      "arvo-indicator",
      `arvo-indicator--${variant}`,
      `arvo-indicator--${size}`,
      className ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx("span", { ref, className: classes, "aria-hidden": "true" });
  }
);
export {
  ArvoIndicator as default
};
//# sourceMappingURL=index44.js.map
