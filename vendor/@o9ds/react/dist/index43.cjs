"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
function FormLabel({
  htmlFor,
  id,
  size = "lg",
  isRequired,
  isDisabled,
  className,
  children
}) {
  const classes = [
    "o9ds-form-lbl",
    size === "sm" && "o9ds-form-lbl--sm",
    isRequired && "o9ds-form-lbl--required",
    isDisabled && "is-disabled",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntime.jsxs("label", { id, htmlFor, className: classes, children: [
    children,
    isRequired && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-form-lbl__req", "aria-hidden": "true", children: "*" })
  ] });
}
exports.FormLabel = FormLabel;
//# sourceMappingURL=index43.cjs.map
