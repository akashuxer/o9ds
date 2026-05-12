import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
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
  return /* @__PURE__ */ jsx("span", { className: "arvo-form-lbl__req", "aria-hidden": "true", children: "*" });
}
const ArvoFormLabel = forwardRef(
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
    return /* @__PURE__ */ jsxs(
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
const ArvoFormLabelText = forwardRef(
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
    return /* @__PURE__ */ jsxs(
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
export {
  ArvoFormLabel,
  ArvoFormLabelText,
  FormLabel
};
//# sourceMappingURL=index11.js.map
