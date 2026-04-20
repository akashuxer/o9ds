import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useImperativeHandle, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import O9Button from "./index11.js";
import O9IconButton from "./index12.js";
import { useOverlay } from "./index6.js";
import { useFocusTrap } from "./index7.js";
import { usePositioning } from "./index9.js";
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
const O9Popover = forwardRef(
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
    const uid = useId();
    const panelId = `o9ds-popover-${uid}`;
    const titleId = `o9ds-popover-title-${uid}`;
    const panelRef = useRef(null);
    const internalTriggerRef = useRef(null);
    const triggerRef = triggerRefProp ?? internalTriggerRef;
    useImperativeHandle(ref, () => panelRef.current, []);
    const isControlled = openProp !== void 0;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = isControlled ? openProp : internalOpen;
    const setOpen = useCallback(
      (next) => {
        if (!isControlled) setInternalOpen(next);
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [isControlled, onOpenChange]
    );
    const overlay = useOverlay();
    const hoverOpenTimer = useRef(null);
    const hoverCloseTimer = useRef(null);
    const clearHoverTimers = useCallback(() => {
      if (hoverOpenTimer.current) {
        clearTimeout(hoverOpenTimer.current);
        hoverOpenTimer.current = null;
      }
      if (hoverCloseTimer.current) {
        clearTimeout(hoverCloseTimer.current);
        hoverCloseTimer.current = null;
      }
    }, []);
    const handleOpen = useCallback(() => {
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
    const handleClose = useCallback(() => {
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
    const toggleOpen = useCallback(() => {
      if (isOpen) handleClose();
      else handleOpen();
    }, [isOpen, handleOpen, handleClose]);
    useEffect(() => {
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
    const { position } = usePositioning({
      anchorRef: triggerRef,
      floatRef: panelRef,
      placement: mappedPlacement,
      gap: offset,
      enabled: isOpen && !isInline,
      width: width === "anchor" ? "anchor" : void 0
    });
    const positioned = !!position || isInline;
    useFocusTrap(panelRef, {
      active: isInteractive && isOpen && positioned,
      escapeDeactivates: false,
      returnFocusOnDeactivate: true,
      allowOutsideClick: true
    });
    useEffect(() => {
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
    useEffect(() => {
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
    useEffect(() => {
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
    useEffect(() => {
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
    const handlePanelPointerEnter = useCallback(() => {
      if (trigger !== "hover") return;
      clearHoverTimers();
    }, [trigger, clearHoverTimers]);
    const handlePanelPointerLeave = useCallback(() => {
      if (trigger !== "hover") return;
      hoverCloseTimer.current = setTimeout(handleClose, 100);
    }, [trigger, handleClose]);
    const handleActionClick = useCallback(
      (action, e) => {
        const callback = action.action ?? action.onClick;
        const result = callback == null ? void 0 : callback(e);
        if (result !== false) handleClose();
      },
      [handleClose]
    );
    const renderHeaderAction = (ha) => {
      if (ha.type === "btn") {
        return /* @__PURE__ */ jsx(
          O9IconButton,
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
        return /* @__PURE__ */ jsx("span", { "data-placeholder": "switch" }, ha.id);
      }
      return /* @__PURE__ */ jsx("span", { "data-placeholder": "dropdown" }, ha.id);
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
      return /* @__PURE__ */ jsxs("div", { className: "o9ds-popover__header", children: [
        /* @__PURE__ */ jsxs("div", { className: "o9ds-popover__header-left", children: [
          hasBackButton && /* @__PURE__ */ jsx("span", { className: "o9ds-popover__back-btn", children: /* @__PURE__ */ jsx(
            O9IconButton,
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
          title && /* @__PURE__ */ jsx("span", { id: titleId, className: "o9ds-popover__title", children: title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "o9ds-popover__header-actions", children: [
          headerActions == null ? void 0 : headerActions.map((ha) => renderHeaderAction(ha)),
          isClosable && /* @__PURE__ */ jsx("span", { className: "o9ds-popover__close-btn", children: /* @__PURE__ */ jsx(
            O9IconButton,
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
      return /* @__PURE__ */ jsx("div", { className: "o9ds-popover__footer", children: actions.map((action) => {
        if (action.icon && !action.label) {
          return /* @__PURE__ */ jsx(
            O9IconButton,
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
        return /* @__PURE__ */ jsx(
          O9Button,
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
    const panel = isOpen ? createPortal(
      /* @__PURE__ */ jsxs(
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
            hasArrow && /* @__PURE__ */ jsx("div", { className: "o9ds-popover__arrow", "aria-hidden": "true" }),
            renderHeader(),
            stickyHeader && /* @__PURE__ */ jsx("div", { className: "o9ds-popover__sticky-header", children: stickyHeader }),
            /* @__PURE__ */ jsx("div", { className: "o9ds-popover__body", children }),
            renderFooter()
          ]
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      triggerContent,
      panel
    ] });
  }
);
export {
  O9Popover,
  O9Popover as default
};
//# sourceMappingURL=index21.js.map
