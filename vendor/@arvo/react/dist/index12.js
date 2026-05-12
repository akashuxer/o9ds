import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useCallback } from "react";
import { ArvoButton } from "./index13.js";
const ARVO_MSG_ALERT_DEFAULT_ERROR = "Form field value is invalid";
const TYPE_DEFAULT_LABEL = {
  error: "Error",
  success: "Success",
  warning: "Warning",
  info: "Information",
  neutral: "Notice",
  block: "Blocked"
};
function resolveRole(type) {
  return type === "error" || type === "warning" || type === "block" ? "alert" : "status";
}
const ArvoMessageAlertBase = forwardRef(
  function ArvoMessageAlert2({
    type = "error",
    isInline = false,
    message,
    icon,
    isDismissable = false,
    onDismiss,
    id,
    role,
    className,
    ...rest
  }, forwardedRef) {
    const internalRef = useRef(null);
    const setRef = useCallback(
      (node) => {
        internalRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef]
    );
    const handleDismiss = useCallback(() => {
      const node = internalRef.current;
      if (node) {
        node.dispatchEvent(new CustomEvent("msg-alert:dismiss", { bubbles: true }));
      }
      onDismiss == null ? void 0 : onDismiss();
    }, [onDismiss]);
    const resolvedRole = role ?? resolveRole(type);
    const hasIconOverride = !!icon;
    const showCloseButton = isDismissable && !isInline;
    const classes = [
      "arvo-msg-alert",
      `arvo-msg-alert--${type}`,
      isInline && "arvo-msg-alert--inline",
      showCloseButton && "arvo-msg-alert--dismissable",
      hasIconOverride && "has-icon-override",
      className
    ].filter(Boolean).join(" ");
    if (isInline) {
      const ariaLabel = typeof message === "string" && message.length > 0 ? message : TYPE_DEFAULT_LABEL[type];
      return /* @__PURE__ */ jsx(
        "div",
        {
          ref: setRef,
          className: classes,
          role: resolvedRole,
          id,
          "aria-label": ariaLabel,
          ...rest,
          children: /* @__PURE__ */ jsx("span", { className: "arvo-msg-alert__ico", "aria-hidden": "true", children: icon ? /* @__PURE__ */ jsx("i", { className: `o9con o9con-${icon}` }) : null })
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: setRef,
        className: classes,
        role: resolvedRole,
        id,
        ...rest,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "arvo-msg-alert__body", children: [
            /* @__PURE__ */ jsx("span", { className: "arvo-msg-alert__ico", "aria-hidden": "true", children: icon ? /* @__PURE__ */ jsx("i", { className: `o9con o9con-${icon}` }) : null }),
            /* @__PURE__ */ jsx("span", { className: "arvo-msg-alert__msg", children: message })
          ] }),
          showCloseButton ? /* @__PURE__ */ jsx(
            ArvoButton,
            {
              className: "arvo-msg-alert__close",
              variant: "secondary",
              size: "sm",
              label: "Close",
              onClick: handleDismiss
            }
          ) : null
        ]
      }
    );
  }
);
ArvoMessageAlertBase.displayName = "ArvoMessageAlert";
const ArvoMessageAlert = ArvoMessageAlertBase;
ArvoMessageAlert.defaultErrorMessage = ARVO_MSG_ALERT_DEFAULT_ERROR;
export {
  ARVO_MSG_ALERT_DEFAULT_ERROR,
  ArvoMessageAlert
};
//# sourceMappingURL=index12.js.map
