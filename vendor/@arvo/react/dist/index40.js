import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useImperativeHandle, useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import ArvoButton from "./index11.js";
import ArvoIconButton from "./index12.js";
import ArvoCheckbox from "./index17.js";
import ArvoTextbox from "./index13.js";
import { useControllableState } from "./index41.js";
import { useOverlay } from "./index6.js";
import { useFocusTrap } from "./index7.js";
const DEFAULT_PRIMARY = { label: "OK" };
const DEFAULT_SECONDARY = { label: "Cancel" };
function normalizeDontShow(value) {
  if (value === null || value === void 0 || value === false) return null;
  if (value === true) return {};
  return value;
}
const ArvoAlertDialog = forwardRef(
  function ArvoAlertDialog2({
    variant = "warning",
    size = "md",
    title,
    message,
    content,
    isOpen: openProp,
    defaultOpen = false,
    hasDangerAction = false,
    primaryAction = DEFAULT_PRIMARY,
    secondaryAction,
    hasSecondaryBtn = true,
    isClosable = false,
    hasBackdrop = true,
    closeOnBackdrop = false,
    closeOnEscape = true,
    confirmInput = null,
    dontShowAgain = null,
    isLoading = false,
    isDisabled = false,
    container = null,
    className,
    onOpenChange,
    onOpen,
    onClose,
    onConfirmInputChange,
    onDontShowAgainChange
  }, ref) {
    const uid = useId();
    const panelId = `arvo-alert-dlg-${uid}`;
    const titleId = `arvo-alert-dlg-title-${uid}`;
    const bodyId = `arvo-alert-dlg-body-${uid}`;
    const rootRef = useRef(null);
    const panelRef = useRef(null);
    const inputElRef = useRef(null);
    useImperativeHandle(ref, () => rootRef.current, []);
    const [isOpen, setOpen] = useControllableState(openProp, defaultOpen);
    const [confirmValue, setConfirmValue] = useState("");
    const isPrimaryDisabledByConfirm = (confirmInput == null ? void 0 : confirmInput.expectedValue) ? confirmValue !== confirmInput.expectedValue : false;
    useEffect(() => {
      if (!isOpen) setConfirmValue("");
    }, [isOpen]);
    const dontShowConfig = normalizeDontShow(dontShowAgain);
    const [dontShowChecked, setDontShowChecked] = useState(
      (dontShowConfig == null ? void 0 : dontShowConfig.defaultChecked) ?? false
    );
    const overlay = useOverlay();
    const handleClose = useCallback(
      (reason) => {
        if (!isOpen) return;
        if ((onClose == null ? void 0 : onClose({ reason })) === false) return;
        setOpen(false);
      },
      [isOpen, onClose, setOpen]
    );
    const wasOpenRef = useRef(isOpen);
    useEffect(() => {
      if (!wasOpenRef.current && isOpen) {
        if ((onOpen == null ? void 0 : onOpen()) === false) {
          setOpen(false);
          return;
        }
      }
      wasOpenRef.current = isOpen;
    }, [isOpen]);
    const isFirstRenderRef = useRef(true);
    useEffect(() => {
      if (isFirstRenderRef.current) {
        isFirstRenderRef.current = false;
        return;
      }
      onOpenChange == null ? void 0 : onOpenChange(isOpen);
    }, [isOpen]);
    useEffect(() => {
      if (!isOpen || !panelRef.current) return;
      overlay.open({
        id: panelId,
        type: "modal",
        element: panelRef.current,
        priority: 10,
        config: { autoCloseOnOutsideClick: false },
        onClose: () => handleClose("programmatic")
      });
      return () => {
        overlay.close(panelId);
      };
    }, [isOpen]);
    useFocusTrap(panelRef, {
      active: isOpen,
      // When a confirm input exists, suppress trap's auto-focus and focus
      // the input ourselves below for guaranteed targeting.
      initialFocus: confirmInput ? "none" : "first",
      escapeDeactivates: false,
      returnFocusOnDeactivate: true,
      allowOutsideClick: false
    });
    useEffect(() => {
      if (!isOpen || !confirmInput) return;
      const id = window.setTimeout(() => {
        var _a;
        const input = (_a = panelRef.current) == null ? void 0 : _a.querySelector(
          ".arvo-alert-dlg__confirm-input input"
        );
        if (input) {
          inputElRef.current = input;
          input.focus({ preventScroll: true });
        }
      }, 0);
      return () => window.clearTimeout(id);
    }, [isOpen, confirmInput]);
    useEffect(() => {
      if (!isOpen) return;
      const onKeyDown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          if (closeOnEscape) handleClose("escape");
        }
      };
      document.addEventListener("keydown", onKeyDown, true);
      return () => document.removeEventListener("keydown", onKeyDown, true);
    }, [isOpen, closeOnEscape, handleClose]);
    const runAction = useCallback(
      (action, reason, e) => {
        var _a;
        const result = (_a = action.onClick) == null ? void 0 : _a.call(action, e);
        if (result === false) return;
        if (action.closeOnClick !== false) {
          handleClose(reason);
        }
      },
      [handleClose]
    );
    const primaryConfig = primaryAction ?? DEFAULT_PRIMARY;
    const secondaryConfig = secondaryAction === null ? null : secondaryAction ?? DEFAULT_SECONDARY;
    const showSecondary = hasSecondaryBtn && secondaryConfig !== null;
    const handlePrimaryClick = useCallback(
      (e) => {
        if (isLoading || isDisabled || primaryConfig.isDisabled || isPrimaryDisabledByConfirm) return;
        runAction(primaryConfig, "primary", e);
      },
      [isLoading, isDisabled, isPrimaryDisabledByConfirm, primaryConfig, runAction]
    );
    const handleSecondaryClick = useCallback(
      (e) => {
        if (!secondaryConfig) return;
        runAction(secondaryConfig, "secondary", e);
      },
      [secondaryConfig, runAction]
    );
    const handleConfirmInputChange = useCallback(
      (e) => {
        var _a;
        const next = e.target.value;
        setConfirmValue(next);
        (_a = confirmInput == null ? void 0 : confirmInput.onChange) == null ? void 0 : _a.call(confirmInput, next);
        onConfirmInputChange == null ? void 0 : onConfirmInputChange(next);
      },
      [confirmInput, onConfirmInputChange]
    );
    const handleConfirmInputKeyDown = useCallback(
      (e) => {
        if (e.key === "Enter" && !isPrimaryDisabledByConfirm) {
          e.preventDefault();
          runAction(
            primaryConfig,
            "primary",
            e
          );
        }
      },
      [isPrimaryDisabledByConfirm, primaryConfig, runAction]
    );
    const handleDontShowChange = useCallback(
      (detail) => {
        var _a;
        const next = detail.isChecked;
        setDontShowChecked(next);
        (_a = dontShowConfig == null ? void 0 : dontShowConfig.onChange) == null ? void 0 : _a.call(dontShowConfig, next);
        onDontShowAgainChange == null ? void 0 : onDontShowAgainChange(next);
      },
      [dontShowConfig, onDontShowAgainChange]
    );
    const portalTarget = useMemo(() => {
      if (typeof document === "undefined") return null;
      if (!container) return document.body;
      if (typeof container === "string") {
        return document.querySelector(container) ?? document.body;
      }
      return container;
    }, [container]);
    if (!isOpen || !portalTarget) return null;
    const rootClasses = [
      "arvo-alert-dlg",
      `arvo-alert-dlg--${variant}`,
      size !== "md" && `arvo-alert-dlg--${size}`,
      hasBackdrop && "arvo-alert-dlg--with-backdrop",
      hasDangerAction && "arvo-alert-dlg--danger",
      isClosable && "arvo-alert-dlg--closable",
      "open",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    const dontShowLabel = (dontShowConfig == null ? void 0 : dontShowConfig.label) ?? "Don't show this again";
    return createPortal(
      /* @__PURE__ */ jsxs("div", { ref: rootRef, className: rootClasses, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "arvo-alert-dlg__backdrop",
            "aria-hidden": "true",
            onClick: closeOnBackdrop ? () => handleClose("backdrop") : void 0
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            ref: panelRef,
            id: panelId,
            className: "arvo-alert-dlg__panel",
            role: "alertdialog",
            "aria-modal": "true",
            "aria-labelledby": titleId,
            "aria-describedby": bodyId,
            "aria-busy": isLoading || void 0,
            tabIndex: -1,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "arvo-alert-dlg__header", children: [
                /* @__PURE__ */ jsx("span", { className: "arvo-alert-dlg__ico o9con", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("p", { id: titleId, className: "arvo-alert-dlg__title", children: title }),
                isClosable && /* @__PURE__ */ jsx("span", { className: "arvo-alert-dlg__close-btn", children: /* @__PURE__ */ jsx(
                  ArvoIconButton,
                  {
                    icon: "close",
                    variant: "tertiary",
                    size: "sm",
                    tooltip: "Close",
                    "aria-label": "Close dialog",
                    isDisabled: isLoading || isDisabled,
                    onClick: () => handleClose("close-button")
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { id: bodyId, className: "arvo-alert-dlg__body", children: [
                content !== void 0 && content !== null ? content : message && /* @__PURE__ */ jsx("p", { className: "arvo-alert-dlg__msg", children: message }),
                confirmInput && /* @__PURE__ */ jsx("div", { className: "arvo-alert-dlg__confirm-input", children: /* @__PURE__ */ jsx(
                  ArvoTextbox,
                  {
                    size: "sm",
                    isFullWidth: true,
                    label: confirmInput.label,
                    placeholder: confirmInput.placeholder,
                    maxLength: confirmInput.maxLength,
                    value: confirmValue,
                    isDisabled: isLoading || isDisabled,
                    onChange: handleConfirmInputChange,
                    onKeyDown: handleConfirmInputKeyDown
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "arvo-alert-dlg__footer", children: [
                dontShowConfig && /* @__PURE__ */ jsx("div", { className: "arvo-alert-dlg__dont-show", children: /* @__PURE__ */ jsx(
                  ArvoCheckbox,
                  {
                    size: "sm",
                    label: dontShowLabel,
                    isChecked: dontShowChecked,
                    isDisabled: isLoading || isDisabled,
                    onChange: handleDontShowChange
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "arvo-alert-dlg__actions", children: [
                  showSecondary && secondaryConfig && /* @__PURE__ */ jsx(
                    ArvoButton,
                    {
                      label: secondaryConfig.label,
                      icon: secondaryConfig.icon,
                      variant: "secondary",
                      size: "md",
                      isDisabled: isLoading || isDisabled || secondaryConfig.isDisabled,
                      isLoading: secondaryConfig.isLoading,
                      onClick: handleSecondaryClick
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ArvoButton,
                    {
                      label: primaryConfig.label,
                      icon: primaryConfig.icon,
                      variant: hasDangerAction ? "danger" : "primary",
                      size: "md",
                      isDisabled: isLoading || isDisabled || primaryConfig.isDisabled || isPrimaryDisabledByConfirm,
                      isLoading: primaryConfig.isLoading,
                      onClick: handlePrimaryClick
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      ] }),
      portalTarget
    );
  }
);
export {
  ArvoAlertDialog
};
//# sourceMappingURL=index40.js.map
