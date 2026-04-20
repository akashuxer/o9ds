"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactDom = require("react-dom");
const Button = require("./index11.cjs");
const IconButton = require("./index12.cjs");
const useOverlay = require("./index6.cjs");
const useFocusTrap = require("./index7.cjs");
const usePositioning = require("./index9.cjs");
function mapPlacement(p) {
  switch (p) {
    case "top":
      return "top-start";
    case "bottom":
      return "bottom-start";
    case "left":
      return "left-start";
    case "right":
      return "right-start";
    default:
      return p;
  }
}
const O9Popover = react.forwardRef(
  function O9Popover2({
    variant = "space",
    placement = "auto",
    title,
    hasHeader = true,
    isClosable = true,
    hasBackButton = false,
    headerActions,
    stickyHeader,
    children,
    actions,
    hasFooter = true,
    width = null,
    offset = 2,
    trigger = "click",
    closeOnOutside = true,
    hasArrow = false,
    isLoading = false,
    isInteractive = true,
    isOpen: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpen,
    onClose,
    onBack,
    triggerRef: triggerRefProp,
    renderTrigger,
    isInline = false,
    className,
    ...rest
  }, ref) {
    const uid = react.useId();
    const panelId = `o9ds-popover-${uid}`;
    const titleId = `o9ds-popover-title-${uid}`;
    const panelRef = react.useRef(null);
    const internalTriggerRef = react.useRef(null);
    const triggerRef = triggerRefProp ?? internalTriggerRef;
    react.useImperativeHandle(ref, () => panelRef.current, []);
    const isControlled = openProp !== void 0;
    const [internalOpen, setInternalOpen] = react.useState(defaultOpen);
    const isOpen = isControlled ? openProp : internalOpen;
    const setOpen = react.useCallback(
      (next) => {
        if (!isControlled) setInternalOpen(next);
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [isControlled, onOpenChange]
    );
    const overlay = useOverlay.useOverlay();
    const hoverOpenTimer = react.useRef(null);
    const hoverCloseTimer = react.useRef(null);
    const clearHoverTimers = react.useCallback(() => {
      if (hoverOpenTimer.current) {
        clearTimeout(hoverOpenTimer.current);
        hoverOpenTimer.current = null;
      }
      if (hoverCloseTimer.current) {
        clearTimeout(hoverCloseTimer.current);
        hoverCloseTimer.current = null;
      }
    }, []);
    const handleOpen = react.useCallback(() => {
      var _a;
      if (isOpen) return;
      if ((onOpen == null ? void 0 : onOpen()) === false) return;
      setOpen(true);
      if (panelRef.current) {
        overlay.open({
          id: panelId,
          type: "popover",
          element: panelRef.current,
          triggerElement: triggerRef.current ?? void 0,
          priority: 10,
          config: { autoCloseOnOutsideClick: closeOnOutside }
        });
      }
      (_a = triggerRef.current) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("popover:open", { bubbles: true })
      );
    }, [isOpen, onOpen, setOpen, overlay, panelId, triggerRef, closeOnOutside]);
    const handleClose = react.useCallback(() => {
      var _a, _b;
      if (!isOpen) return;
      if ((onClose == null ? void 0 : onClose()) === false) return;
      setOpen(false);
      clearHoverTimers();
      overlay.close(panelId);
      (_a = triggerRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
      (_b = triggerRef.current) == null ? void 0 : _b.dispatchEvent(
        new CustomEvent("popover:close", { bubbles: true })
      );
    }, [isOpen, onClose, setOpen, clearHoverTimers, overlay, panelId, triggerRef]);
    const toggleOpen = react.useCallback(() => {
      if (isOpen) handleClose();
      else handleOpen();
    }, [isOpen, handleOpen, handleClose]);
    react.useEffect(() => {
      if (!isOpen || !panelRef.current) return;
      overlay.open({
        id: panelId,
        type: "popover",
        element: panelRef.current,
        triggerElement: triggerRef.current ?? void 0,
        priority: 10,
        config: { autoCloseOnOutsideClick: closeOnOutside },
        onClose: handleClose
      });
      return () => {
        overlay.close(panelId);
      };
    }, [isOpen]);
    const mappedPlacement = mapPlacement(placement);
    const { position } = usePositioning.usePositioning({
      anchorRef: triggerRef,
      floatRef: panelRef,
      placement: mappedPlacement,
      gap: offset,
      enabled: isOpen && !isInline,
      width: width === "anchor" ? "anchor" : void 0
    });
    const positioned = !!position || isInline;
    useFocusTrap.useFocusTrap(panelRef, {
      active: isInteractive && isOpen && positioned,
      escapeDeactivates: false,
      returnFocusOnDeactivate: true,
      allowOutsideClick: true
    });
    react.useEffect(() => {
      if (!isOpen) return;
      const onKeyDown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          handleClose();
        }
      };
      document.addEventListener("keydown", onKeyDown, true);
      return () => document.removeEventListener("keydown", onKeyDown, true);
    }, [isOpen, handleClose]);
    react.useEffect(() => {
      if (!isOpen || !closeOnOutside) return;
      const onPointerDown = (e) => {
        var _a, _b;
        const target = e.target;
        if ((_a = panelRef.current) == null ? void 0 : _a.contains(target)) return;
        if ((_b = triggerRef.current) == null ? void 0 : _b.contains(target)) return;
        handleClose();
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      return () => document.removeEventListener("pointerdown", onPointerDown, true);
    }, [isOpen, closeOnOutside, handleClose, triggerRef]);
    react.useEffect(() => {
      const el = triggerRef.current;
      if (!el || renderTrigger) return;
      el.setAttribute("aria-haspopup", "dialog");
      el.setAttribute("aria-controls", panelId);
      el.setAttribute("aria-expanded", String(isOpen));
      return () => {
        el.removeAttribute("aria-haspopup");
        el.removeAttribute("aria-controls");
        el.removeAttribute("aria-expanded");
      };
    }, [isOpen, panelId, triggerRef, renderTrigger]);
    react.useEffect(() => {
      const el = triggerRef.current;
      if (!el) return;
      if (trigger === "click") {
        const onClick = () => toggleOpen();
        el.addEventListener("click", onClick);
        return () => el.removeEventListener("click", onClick);
      }
      if (trigger === "hover") {
        const onEnter = () => {
          clearHoverTimers();
          hoverOpenTimer.current = setTimeout(handleOpen, 150);
        };
        const onLeave = () => {
          clearHoverTimers();
          hoverCloseTimer.current = setTimeout(handleClose, 100);
        };
        el.addEventListener("pointerenter", onEnter);
        el.addEventListener("pointerleave", onLeave);
        return () => {
          el.removeEventListener("pointerenter", onEnter);
          el.removeEventListener("pointerleave", onLeave);
          clearHoverTimers();
        };
      }
      if (trigger === "focus") {
        const onFocus = () => handleOpen();
        const onBlur = () => {
          setTimeout(() => {
            if (panelRef.current && !panelRef.current.contains(document.activeElement)) {
              handleClose();
            }
          }, 0);
        };
        el.addEventListener("focus", onFocus);
        el.addEventListener("blur", onBlur);
        return () => {
          el.removeEventListener("focus", onFocus);
          el.removeEventListener("blur", onBlur);
        };
      }
    }, [trigger, triggerRef, toggleOpen, handleOpen, handleClose, clearHoverTimers]);
    const handlePanelPointerEnter = react.useCallback(() => {
      if (trigger !== "hover") return;
      clearHoverTimers();
    }, [trigger, clearHoverTimers]);
    const handlePanelPointerLeave = react.useCallback(() => {
      if (trigger !== "hover") return;
      hoverCloseTimer.current = setTimeout(handleClose, 100);
    }, [trigger, handleClose]);
    const handleActionClick = react.useCallback(
      (action, e) => {
        const callback = action.action ?? action.onClick;
        const result = callback == null ? void 0 : callback(e);
        if (result !== false) handleClose();
      },
      [handleClose]
    );
    const renderHeaderAction = (ha) => {
      if (ha.type === "btn") {
        return /* @__PURE__ */ jsxRuntime.jsx(
          IconButton.default,
          {
            icon: ha.icon,
            variant: "tertiary",
            size: "sm",
            tooltip: ha.label,
            onClick: ha.onClick,
            isDisabled: isLoading || ha.isDisabled
          },
          ha.id
        );
      }
      if (ha.type === "switch") {
        return /* @__PURE__ */ jsxRuntime.jsx("span", { "data-placeholder": "switch" }, ha.id);
      }
      return /* @__PURE__ */ jsxRuntime.jsx("span", { "data-placeholder": "dropdown" }, ha.id);
    };
    const panelClasses = [
      "o9ds-popover",
      variant === "edge" && "o9ds-popover--edge",
      hasArrow && "o9ds-popover--with-arrow",
      actions && actions.length > 0 && hasFooter && "o9ds-popover--with-footer",
      isClosable && "o9ds-popover--closable",
      isInline && "o9ds-popover--inline",
      isOpen && "open",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    const panelStyle = {
      ...position ? { transform: `translate(${position.x}px, ${position.y}px)` } : {},
      ...(position == null ? void 0 : position.maxHeight) != null ? { maxHeight: `${position.maxHeight}px` } : {},
      ...(position == null ? void 0 : position.width) != null ? { "--o9ds-popover-width": position.width } : {},
      ...typeof width === "number" ? { "--o9ds-popover-width": `${width}px` } : {},
      ...typeof width === "string" && width !== "anchor" ? { "--o9ds-popover-width": width } : {},
      ...!positioned ? { opacity: 0, pointerEvents: "none" } : {}
    };
    const renderHeader = () => {
      if (!hasHeader || !(isClosable || title || hasBackButton)) return null;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-popover__header", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-popover__header-left", children: [
          hasBackButton && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-popover__back-btn", children: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton.default,
            {
              icon: "arrow-left",
              variant: "tertiary",
              size: "sm",
              tooltip: "Back",
              "aria-label": "Back",
              onClick: onBack,
              isDisabled: isLoading
            }
          ) }),
          title && /* @__PURE__ */ jsxRuntime.jsx("span", { id: titleId, className: "o9ds-popover__title", children: title })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-popover__header-actions", children: [
          headerActions == null ? void 0 : headerActions.map((ha) => renderHeaderAction(ha)),
          isClosable && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-popover__close-btn", children: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton.default,
            {
              icon: "close",
              variant: "tertiary",
              size: "sm",
              tooltip: "Close",
              "aria-label": "Close",
              onClick: handleClose,
              isDisabled: isLoading
            }
          ) })
        ] })
      ] });
    };
    const renderFooter = () => {
      if (!hasFooter || !actions || actions.length === 0) return null;
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-popover__footer", children: actions.map((action) => {
        if (action.icon && !action.label) {
          return /* @__PURE__ */ jsxRuntime.jsx(
            IconButton.default,
            {
              icon: action.icon,
              variant: action.variant ?? "tertiary",
              size: "md",
              tooltip: action.label ?? action.id ?? "",
              onClick: (e) => handleActionClick(action, e),
              isDisabled: isLoading || action.isDisabled
            },
            action.id
          );
        }
        return /* @__PURE__ */ jsxRuntime.jsx(
          Button.default,
          {
            label: action.label,
            icon: action.icon,
            variant: action.variant ?? "secondary",
            size: "md",
            onClick: (e) => handleActionClick(action, e),
            isDisabled: isLoading || action.isDisabled
          },
          action.id
        );
      }) });
    };
    const triggerContent = renderTrigger ? renderTrigger({
      ref: internalTriggerRef,
      "aria-expanded": isOpen,
      "aria-controls": panelId,
      "aria-haspopup": "dialog"
    }) : null;
    const panel = isOpen ? reactDom.createPortal(
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref: panelRef,
          id: panelId,
          className: panelClasses,
          role: isInteractive ? "dialog" : "tooltip",
          "aria-busy": isLoading || void 0,
          "aria-labelledby": title ? titleId : void 0,
          tabIndex: isInteractive ? -1 : void 0,
          style: Object.keys(panelStyle).length > 0 ? panelStyle : void 0,
          onPointerEnter: handlePanelPointerEnter,
          onPointerLeave: handlePanelPointerLeave,
          ...rest,
          children: [
            hasArrow && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-popover__arrow", "aria-hidden": "true" }),
            renderHeader(),
            stickyHeader && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-popover__sticky-header", children: stickyHeader }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-popover__body", children }),
            renderFooter()
          ]
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      triggerContent,
      panel
    ] });
  }
);
exports.O9Popover = O9Popover;
exports.default = O9Popover;
//# sourceMappingURL=index21.cjs.map
