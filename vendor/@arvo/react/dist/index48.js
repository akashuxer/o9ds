import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { forwardRef, useMemo, useRef, useImperativeHandle, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { enter, exit, lockPageScroll } from "@arvo/core";
import { PanelShell } from "./index52.js";
import { useControllableState } from "./index49.js";
import { useFocusTrap } from "./index7.js";
const DEFAULT_LIGHT_OPACITY = 0.32;
const DEFAULT_DARK_OPACITY = 0.5;
function toCssLength(value) {
  if (value === null || value === void 0) return void 0;
  return typeof value === "number" ? `${value}px` : value;
}
function resolveMask(hasMask, closeOnMaskClickProp) {
  if (hasMask === void 0 || hasMask === false) {
    return {
      hasMask: false,
      variant: "light",
      opacity: 0,
      blur: 0,
      closeOnClick: false
    };
  }
  if (hasMask === true) {
    return {
      hasMask: true,
      variant: "light",
      opacity: DEFAULT_LIGHT_OPACITY,
      blur: 0,
      closeOnClick: closeOnMaskClickProp
    };
  }
  const variant = hasMask.variant ?? "light";
  const opacity = hasMask.opacity ?? (variant === "dark" ? DEFAULT_DARK_OPACITY : DEFAULT_LIGHT_OPACITY);
  return {
    hasMask: true,
    variant,
    opacity,
    blur: hasMask.blur ?? 0,
    closeOnClick: hasMask.closeOnClick ?? closeOnMaskClickProp
  };
}
function resolveSide(side) {
  if (side === "top" || side === "bottom") {
    if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
      console.warn(
        `[ArvoDrawer] side='${side}' not yet implemented; using 'right'.`
      );
    }
    return "right";
  }
  return side;
}
function resolveContainer(container) {
  if (typeof document === "undefined") return null;
  if (container == null) return document.body;
  if (typeof container === "function") return container();
  return container;
}
function DrawerInner(props, ref) {
  const {
    side: sideProp = "right",
    isOpen: isOpenProp,
    defaultOpen = false,
    onOpenChange,
    onOpen,
    onClose,
    hasMask = false,
    closeOnEscape = true,
    closeOnMaskClick = true,
    lockScroll = "auto",
    container,
    width = 320,
    minWidth = 280,
    maxWidth = "80vw",
    height = null,
    animationDuration,
    ariaLabel,
    ariaLabelledBy,
    isClosable = true,
    isDisabled = false,
    isLoading = false,
    className,
    children,
    instanceRef,
    // PanelShell passthrough
    title = null,
    hasHeader = true,
    hasBackButton = false,
    onBack,
    headerActions,
    stickyHeader = false,
    items,
    getItemId,
    filterKeys,
    getItemSearchText,
    renderItem,
    itemsRole,
    actions = false,
    hasFooter,
    searchQuery,
    defaultSearchQuery,
    onSearchChange,
    onItemActivate,
    onTabSelect,
    ...rest
  } = props;
  const side = resolveSide(sideProp);
  const mask = useMemo(
    () => resolveMask(hasMask, closeOnMaskClick),
    [hasMask, closeOnMaskClick]
  );
  const lockScrollResolved = lockScroll === "auto" ? mask.hasMask : lockScroll === true;
  const hostRef = useRef(null);
  const paneRef = useRef(null);
  const backdropRef = useRef(null);
  const shellRef = useRef(null);
  const prevFocusRef = useRef(null);
  const scrollUnlockRef = useRef(null);
  useImperativeHandle(ref, () => hostRef.current, []);
  const [trapActive, setTrapActive] = useState(false);
  const [isOpenState, setOpenInternal] = useControllableState(
    isOpenProp,
    defaultOpen
  );
  const setOpen = useCallback(
    (next) => {
      if (next === isOpenState) return;
      setOpenInternal(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isOpenState, onOpenChange, setOpenInternal]
  );
  const [resolvedContainer, setResolvedContainer] = useState(
    () => resolveContainer(container)
  );
  useEffect(() => {
    setResolvedContainer(resolveContainer(container));
  }, [container]);
  const handleOpen = useCallback(() => {
    if (isOpenState) return;
    if ((onOpen == null ? void 0 : onOpen()) === false) return;
    if (typeof document !== "undefined") {
      prevFocusRef.current = document.activeElement;
    }
    setOpen(true);
  }, [isOpenState, onOpen, setOpen]);
  const handleClose = useCallback(
    (reason = "programmatic") => {
      if (!isOpenState) return;
      const cancelled = onClose !== void 0 && onClose(reason) === false;
      if (cancelled) return;
      pendingCloseReasonRef.current = reason;
      setOpen(false);
    },
    [isOpenState, onClose, setOpen]
  );
  const pendingCloseReasonRef = useRef("programmatic");
  const handleToggle = useCallback(() => {
    if (isOpenState) handleClose("programmatic");
    else handleOpen();
  }, [isOpenState, handleOpen, handleClose]);
  const wasOpenRef = useRef(isOpenState);
  useEffect(() => {
    const prevOpen = wasOpenRef.current;
    wasOpenRef.current = isOpenState;
    if (isOpenState === prevOpen) return;
    const host = hostRef.current;
    const pane = paneRef.current;
    if (isOpenState) {
      if (animationDuration && pane) {
        pane.style.setProperty(
          "--arvo-drw-slide-duration",
          `${animationDuration}ms`
        );
      }
      if (host) {
        void enter({ element: host, type: "fade" }).then(() => {
          setTrapActive(true);
          pane == null ? void 0 : pane.dispatchEvent(
            new CustomEvent("drw:open", { bubbles: true })
          );
        });
      } else {
        setTrapActive(true);
      }
    } else {
      setTrapActive(false);
      const reason = pendingCloseReasonRef.current;
      pendingCloseReasonRef.current = "programmatic";
      const finishClose = () => {
        pane == null ? void 0 : pane.dispatchEvent(
          new CustomEvent("drw:close", {
            bubbles: true,
            detail: { reason }
          })
        );
        const prev = prevFocusRef.current;
        prevFocusRef.current = null;
        if (prev && typeof prev.focus === "function") {
          try {
            prev.focus({ preventScroll: true });
          } catch {
          }
        }
      };
      if (host) {
        void exit({ element: host, type: "fade" }).then(finishClose);
      } else {
        finishClose();
      }
    }
  }, [isOpenState, animationDuration]);
  useEffect(() => {
    if (isOpenState && lockScrollResolved) {
      scrollUnlockRef.current = lockPageScroll();
    }
    return () => {
      if (scrollUnlockRef.current) {
        scrollUnlockRef.current();
        scrollUnlockRef.current = null;
      }
    };
  }, [isOpenState, lockScrollResolved]);
  useFocusTrap(paneRef, {
    active: isOpenState && trapActive && !isDisabled,
    initialFocus: "first",
    escapeDeactivates: false,
    returnFocusOnDeactivate: false,
    allowOutsideClick: true
  });
  useEffect(() => {
    if (!isOpenState || !closeOnEscape) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        handleClose("escape");
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [isOpenState, closeOnEscape, handleClose]);
  const handleMaskMouseDown = useCallback(
    (e) => {
      if (e.target !== e.currentTarget) return;
      const pane = paneRef.current;
      pane == null ? void 0 : pane.dispatchEvent(
        new CustomEvent("drw:mask-click", { bubbles: true })
      );
      if (mask.closeOnClick) {
        handleClose("mask-click");
      }
    },
    [mask.closeOnClick, handleClose]
  );
  useImperativeHandle(
    instanceRef,
    () => ({
      open: () => handleOpen(),
      close: (reason) => handleClose(reason ?? "programmatic"),
      toggle: () => handleToggle(),
      isOpen: () => isOpenState,
      setItems: (next) => {
        var _a;
        return (_a = shellRef.current) == null ? void 0 : _a.setItems(next);
      },
      setStickyHeader: (config) => {
        var _a;
        return (_a = shellRef.current) == null ? void 0 : _a.setStickyHeader(config);
      },
      setHeaderActions: (next) => {
        var _a;
        return (_a = shellRef.current) == null ? void 0 : _a.setHeaderActions(next);
      },
      setActions: (next) => {
        var _a;
        return (_a = shellRef.current) == null ? void 0 : _a.setActions(next);
      },
      updateAction: (id, patch) => {
        var _a;
        return (_a = shellRef.current) == null ? void 0 : _a.updateAction(id, patch);
      },
      search(query) {
        var _a, _b;
        if (query === void 0) return ((_a = shellRef.current) == null ? void 0 : _a.search()) ?? "";
        (_b = shellRef.current) == null ? void 0 : _b.search(query);
      },
      selectedTab(id) {
        var _a, _b;
        if (id === void 0) return ((_a = shellRef.current) == null ? void 0 : _a.selectedTab()) ?? null;
        (_b = shellRef.current) == null ? void 0 : _b.selectedTab(id);
      },
      setTitle: (next) => {
        var _a;
        return (_a = shellRef.current) == null ? void 0 : _a.setTitle(next);
      },
      loading(state) {
        var _a;
        if (state === void 0) return isLoading;
        (_a = shellRef.current) == null ? void 0 : _a.loading(state);
      },
      disabled(state) {
        var _a;
        if (state === void 0) return isDisabled;
        (_a = shellRef.current) == null ? void 0 : _a.disabled(state);
      },
      focus: (target) => {
        var _a;
        return (_a = shellRef.current) == null ? void 0 : _a.focus(target);
      }
    }),
    [
      handleOpen,
      handleClose,
      handleToggle,
      isOpenState,
      isLoading,
      isDisabled
    ]
  );
  const hostClasses = [
    "arvo-drw",
    `arvo-drw--side-${side}`,
    mask.hasMask && "arvo-drw--with-mask",
    mask.hasMask && `arvo-drw--mask-${mask.variant}`,
    isOpenState && "open",
    isLoading && "loading",
    isDisabled && "is-disabled",
    className
  ].filter(Boolean).join(" ");
  const styleVars = useMemo(() => {
    const out = {};
    const w = toCssLength(width);
    const minW = toCssLength(minWidth);
    const maxW = toCssLength(maxWidth);
    if (w) out["--arvo-drw-width"] = w;
    if (minW) out["--arvo-drw-min-width"] = minW;
    if (maxW) out["--arvo-drw-max-width"] = maxW;
    if (animationDuration) {
      out["--arvo-drw-slide-duration"] = `${animationDuration}ms`;
    }
    return out;
  }, [width, minWidth, maxWidth, animationDuration]);
  const backdropStyle = useMemo(() => {
    if (!mask.hasMask) return {};
    const out = {
      backgroundColor: `rgba(0, 0, 0, ${mask.opacity})`
    };
    if (mask.blur > 0) {
      out.backdropFilter = `blur(${mask.blur}px)`;
      out.WebkitBackdropFilter = `blur(${mask.blur}px)`;
    }
    return out;
  }, [mask]);
  const ariaModalAttr = mask.hasMask ? "true" : "false";
  const ariaHiddenAttr = !isOpenState ? true : void 0;
  const computedAriaLabel = !title && ariaLabel ? ariaLabel : !title ? void 0 : void 0;
  const computedAriaLabelledBy = ariaLabelledBy;
  if (!resolvedContainer) {
    return null;
  }
  const portalContents = /* @__PURE__ */ jsxs(Fragment, { children: [
    mask.hasMask && /* @__PURE__ */ jsx(
      "div",
      {
        ref: backdropRef,
        className: "arvo-drw__backdrop arvo-backdrop arvo-backdrop--animated",
        style: backdropStyle,
        onMouseDown: handleMaskMouseDown,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: hostRef,
        className: hostClasses,
        style: styleVars,
        ...rest,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: paneRef,
            className: "arvo-drw__pane",
            role: "dialog",
            "aria-modal": ariaModalAttr,
            "aria-hidden": ariaHiddenAttr,
            "aria-busy": isLoading || void 0,
            "aria-disabled": isDisabled || void 0,
            "aria-label": computedAriaLabel,
            "aria-labelledby": computedAriaLabelledBy,
            children: /* @__PURE__ */ jsx(
              PanelShell,
              {
                ref: shellRef,
                parentBlock: "arvo-drw",
                title,
                hasHeader,
                hasBackButton,
                onBack,
                headerActions,
                stickyHeader,
                items,
                getItemId,
                filterKeys,
                getItemSearchText,
                renderItem,
                itemsRole,
                actions,
                isClosable,
                onClose: () => handleClose("close-button"),
                isLoading,
                isDisabled,
                isClosableCount: isClosable ? 1 : 0,
                searchQuery,
                defaultSearchQuery,
                onSearchChange,
                onItemActivate,
                onTabSelect,
                children
              }
            )
          }
        )
      }
    )
  ] });
  return createPortal(portalContents, resolvedContainer);
}
const ArvoDrawer = forwardRef(DrawerInner);
ArvoDrawer.displayName = "ArvoDrawer";
export {
  ArvoDrawer
};
//# sourceMappingURL=index48.js.map
