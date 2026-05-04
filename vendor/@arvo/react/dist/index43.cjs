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
    "arvo-form-lbl",
    size === "sm" && "arvo-form-lbl--sm",
    isRequired && "arvo-form-lbl--required",
    isDisabled && "is-disabled",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntime.jsxs("label", { id, htmlFor, className: classes, children: [
    children,
    isRequired && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-form-lbl__req", "aria-hidden": "true", children: "*" })
  ] });
}
exports.FormLabel = FormLabel;
//# sourceMappingURL=index43.cjs.map
