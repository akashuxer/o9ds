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
    "arvo-form-lbl",
    size === "sm" && "arvo-form-lbl--sm",
    isRequired && "arvo-form-lbl--required",
    isDisabled && "is-disabled",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("label", { id, htmlFor, className: classes, children: [
    children,
    isRequired && /* @__PURE__ */ jsx("span", { className: "arvo-form-lbl__req", "aria-hidden": "true", children: "*" })
  ] });
}
export {
  FormLabel
};
//# sourceMappingURL=index43.js.map
