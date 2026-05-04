import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const ArvoBadgeAlert = forwardRef(
  function ArvoBadgeAlert2({
    message,
    type = "positive",
    variant = "primary",
    size = "lg",
    hasIcon = true,
    customIcon,
    className,
    role = "status"
  }, ref) {
    const classes = [
      "arvo-bdg-alert",
      `arvo-bdg-alert--${variant}`,
      `arvo-bdg-alert--${type}`,
      `arvo-bdg-alert--${size}`,
      className ?? ""
    ].filter(Boolean).join(" ");
    const iconClasses = [
      "arvo-bdg-alert__ico",
      "o9con",
      customIcon ? `o9con-${customIcon}` : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs("div", { ref, role, className: classes, children: [
      hasIcon && /* @__PURE__ */ jsx("span", { className: iconClasses, "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("span", { className: "arvo-bdg-alert__msg", children: message })
    ] });
  }
);
export {
  ArvoBadgeAlert as default
};
//# sourceMappingURL=index30.js.map
