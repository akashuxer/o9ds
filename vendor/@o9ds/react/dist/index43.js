import { jsxs, jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("label", { id, htmlFor, className: classes, children: [
    children,
    isRequired && /* @__PURE__ */ jsx("span", { className: "o9ds-form-lbl__req", "aria-hidden": "true", children: "*" })
  ] });
}
export {
  FormLabel
};
//# sourceMappingURL=index43.js.map
