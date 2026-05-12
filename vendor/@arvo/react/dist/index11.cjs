"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
function buildLabelClassName(base, size, isRequired, isDisabled, isInvalid) {
  return [
    "arvo-form-lbl",
    size === "sm" && "arvo-form-lbl--sm",
    isRequired && "arvo-form-lbl--required",
    isDisabled && "is-disabled",
    isInvalid && "is-invalid",
    base
  ].filter(Boolean).join(" ");
}
function renderRequiredIndicator(isRequired, custom) {
  if (!isRequired) return null;
  if (custom !== void 0) return custom;
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-form-lbl__req", "aria-hidden": "true", children: "*" });
}
const ArvoFormLabel = react.forwardRef(
  function ArvoFormLabel2({
    children,
    size = "lg",
    isRequired = false,
    isDisabled = false,
    isInvalid = false,
    requiredIndicator,
    className,
    ...rest
  }, ref) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "label",
      {
        ref,
        className: buildLabelClassName(className, size, isRequired, isDisabled, isInvalid),
        ...rest,
        children: [
          children,
          renderRequiredIndicator(isRequired, requiredIndicator)
        ]
      }
    );
  }
);
const ArvoFormLabelText = react.forwardRef(
  function ArvoFormLabelText2({
    children,
    size = "lg",
    isRequired = false,
    isDisabled = false,
    isInvalid = false,
    requiredIndicator,
    className,
    ...rest
  }, ref) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "span",
      {
        ref,
        className: buildLabelClassName(className, size, isRequired, isDisabled, isInvalid),
        ...rest,
        children: [
          children,
          renderRequiredIndicator(isRequired, requiredIndicator)
        ]
      }
    );
  }
);
const FormLabel = ArvoFormLabel;
exports.ArvoFormLabel = ArvoFormLabel;
exports.ArvoFormLabelText = ArvoFormLabelText;
exports.FormLabel = FormLabel;
//# sourceMappingURL=index11.cjs.map
