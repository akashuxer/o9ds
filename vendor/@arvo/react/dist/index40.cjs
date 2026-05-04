"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactDom = require("react-dom");
const Button = require("./index11.cjs");
const IconButton = require("./index12.cjs");
const Checkbox = require("./index17.cjs");
const Textbox = require("./index13.cjs");
const useControllableState = require("./index41.cjs");
const useOverlay = require("./index6.cjs");
const useFocusTrap = require("./index7.cjs");
const DEFAULT_PRIMARY = { label: "OK" };
const DEFAULT_SECONDARY = { label: "Cancel" };
function normalizeDontShow(value) {
  if (value === null || value === void 0 || value === false) return null;
  if (value === true) return {};
  return value;
}
const ArvoAlertDialog = react.forwardRef(
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
    const uid = react.useId();
    const panelId = `arvo-alert-dlg-${uid}`;
    const titleId = `arvo-alert-dlg-title-${uid}`;
    const bodyId = `arvo-alert-dlg-body-${uid}`;
    const rootRef = react.useRef(null);
    const panelRef = react.useRef(null);
    const inputElRef = react.useRef(null);
    react.useImperativeHandle(ref, () => rootRef.current, []);
    const [isOpen, setOpen] = useControllableState.useControllableState(openProp, defaultOpen);
    const [confirmValue, setConfirmValue] = react.useState("");
    const isPrimaryDisabledByConfirm = (confirmInput == null ? void 0 : confirmInput.expectedValue) ? confirmValue !== confirmInput.expectedValue : false;
    react.useEffect(() => {
      if (!isOpen) setConfirmValue("");
    }, [isOpen]);
    const dontShowConfig = normalizeDontShow(dontShowAgain);
    const [dontShowChecked, setDontShowChecked] = react.useState(
      (dontShowConfig == null ? void 0 : dontShowConfig.defaultChecked) ?? false
    );
    const overlay = useOverlay.useOverlay();
    const handleClose = react.useCallback(
      (reason) => {
        if (!isOpen) return;
        if ((onClose == null ? void 0 : onClose({ reason })) === false) return;
        setOpen(false);
      },
      [isOpen, onClose, setOpen]
    );
    const wasOpenRef = react.useRef(isOpen);
    react.useEffect(() => {
      if (!wasOpenRef.current && isOpen) {
        if ((onOpen == null ? void 0 : onOpen()) === false) {
          setOpen(false);
          return;
        }
      }
      wasOpenRef.current = isOpen;
    }, [isOpen]);
    const isFirstRenderRef = react.useRef(true);
    react.useEffect(() => {
      if (isFirstRenderRef.current) {
        isFirstRenderRef.current = false;
        return;
      }
      onOpenChange == null ? void 0 : onOpenChange(isOpen);
    }, [isOpen]);
    react.useEffect(() => {
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
    useFocusTrap.useFocusTrap(panelRef, {
      active: isOpen,
      // When a confirm input exists, suppress trap's auto-focus and focus
      // the input ourselves below for guaranteed targeting.
      initialFocus: confirmInput ? "none" : "first",
      escapeDeactivates: false,
      returnFocusOnDeactivate: true,
      allowOutsideClick: false
    });
    react.useEffect(() => {
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
    react.useEffect(() => {
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
    const runAction = react.useCallback(
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
    const handlePrimaryClick = react.useCallback(
      (e) => {
        if (isLoading || isDisabled || primaryConfig.isDisabled || isPrimaryDisabledByConfirm) return;
        runAction(primaryConfig, "primary", e);
      },
      [isLoading, isDisabled, isPrimaryDisabledByConfirm, primaryConfig, runAction]
    );
    const handleSecondaryClick = react.useCallback(
      (e) => {
        if (!secondaryConfig) return;
        runAction(secondaryConfig, "secondary", e);
      },
      [secondaryConfig, runAction]
    );
    const handleConfirmInputChange = react.useCallback(
      (e) => {
        var _a;
        const next = e.target.value;
        setConfirmValue(next);
        (_a = confirmInput == null ? void 0 : confirmInput.onChange) == null ? void 0 : _a.call(confirmInput, next);
        onConfirmInputChange == null ? void 0 : onConfirmInputChange(next);
      },
      [confirmInput, onConfirmInputChange]
    );
    const handleConfirmInputKeyDown = react.useCallback(
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
    const handleDontShowChange = react.useCallback(
      (detail) => {
        var _a;
        const next = detail.isChecked;
        setDontShowChecked(next);
        (_a = dontShowConfig == null ? void 0 : dontShowConfig.onChange) == null ? void 0 : _a.call(dontShowConfig, next);
        onDontShowAgainChange == null ? void 0 : onDontShowAgainChange(next);
      },
      [dontShowConfig, onDontShowAgainChange]
    );
    const portalTarget = react.useMemo(() => {
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
    return reactDom.createPortal(
      /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: rootRef, className: rootClasses, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "arvo-alert-dlg__backdrop",
            "aria-hidden": "true",
            onClick: closeOnBackdrop ? () => handleClose("backdrop") : void 0
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
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
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-alert-dlg__header", children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-alert-dlg__ico o9con", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxRuntime.jsx("p", { id: titleId, className: "arvo-alert-dlg__title", children: title }),
                isClosable && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-alert-dlg__close-btn", children: /* @__PURE__ */ jsxRuntime.jsx(
                  IconButton.default,
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
              /* @__PURE__ */ jsxRuntime.jsxs("div", { id: bodyId, className: "arvo-alert-dlg__body", children: [
                content !== void 0 && content !== null ? content : message && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "arvo-alert-dlg__msg", children: message }),
                confirmInput && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-alert-dlg__confirm-input", children: /* @__PURE__ */ jsxRuntime.jsx(
                  Textbox.default,
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
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-alert-dlg__footer", children: [
                dontShowConfig && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-alert-dlg__dont-show", children: /* @__PURE__ */ jsxRuntime.jsx(
                  Checkbox.default,
                  {
                    size: "sm",
                    label: dontShowLabel,
                    isChecked: dontShowChecked,
                    isDisabled: isLoading || isDisabled,
                    onChange: handleDontShowChange
                  }
                ) }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-alert-dlg__actions", children: [
                  showSecondary && secondaryConfig && /* @__PURE__ */ jsxRuntime.jsx(
                    Button.default,
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
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Button.default,
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
exports.ArvoAlertDialog = ArvoAlertDialog;
//# sourceMappingURL=index40.cjs.map
