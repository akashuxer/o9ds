import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { ArvoIconButton } from "./index14.js";
const ASSERTIVE_TYPES = /* @__PURE__ */ new Set([
  "negative",
  "block"
]);
function resolveRole(type, roleProp) {
  if (roleProp) return roleProp;
  return ASSERTIVE_TYPES.has(type) ? "alert" : "status";
}
const ArvoBannerAlert = forwardRef(
  function ArvoBannerAlert2({
    message,
    type = "info",
    title = null,
    isCompact = false,
    isDismissible = true,
    link = null,
    isLoading = false,
    role: roleProp,
    onDismiss,
    className,
    ...rest
  }, ref) {
    const resolvedRole = resolveRole(type, roleProp);
    const hostRef = useRef(null);
    useImperativeHandle(ref, () => hostRef.current, []);
    const rootClasses = [
      "arvo-bnr-alert",
      `arvo-bnr-alert--${type}`,
      isCompact ? "arvo-bnr-alert--compact" : "",
      isLoading ? "loading" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    const handleDismiss = () => {
      var _a;
      const event = new CustomEvent("bnr-alert:dismiss", {
        bubbles: false,
        cancelable: false
      });
      (_a = hostRef.current) == null ? void 0 : _a.dispatchEvent(event);
      onDismiss == null ? void 0 : onDismiss();
    };
    const closeButton = isDismissible ? /* @__PURE__ */ jsx(
      ArvoIconButton,
      {
        className: "arvo-bnr-alert__close",
        variant: "tertiary",
        size: "xs",
        icon: "close",
        tooltip: "Dismiss alert",
        onClick: handleDismiss
      }
    ) : null;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: hostRef,
        className: rootClasses,
        role: resolvedRole,
        "aria-busy": isLoading || void 0,
        ...rest,
        children: [
          /* @__PURE__ */ jsx("span", { className: "arvo-bnr-alert__ico o9con", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("div", { className: "arvo-bnr-alert__content", children: isCompact ? /* @__PURE__ */ jsx("p", { className: "arvo-bnr-alert__msg", children: message }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "arvo-bnr-alert__copy", children: [
              title != null && /* @__PURE__ */ jsx("p", { className: "arvo-bnr-alert__title", children: title }),
              /* @__PURE__ */ jsx("p", { className: "arvo-bnr-alert__msg", children: message })
            ] }),
            link != null && /* @__PURE__ */ jsx("div", { className: "arvo-bnr-alert__link", children: link })
          ] }) }),
          closeButton
        ]
      }
    );
  }
);
ArvoBannerAlert.displayName = "ArvoBannerAlert";
export {
  ArvoBannerAlert,
  ArvoBannerAlert as default
};
//# sourceMappingURL=index34.js.map
