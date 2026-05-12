import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useImperativeHandle, useCallback, useEffect, useMemo } from "react";
import { enter, exit } from "@arvo/core";
import { PanelShell } from "./index52.js";
import { ArvoIconButton } from "./index14.js";
import { useControllableState } from "./index49.js";
import { useFocusTrap } from "./index7.js";
const PinButton = forwardRef(function PinButton2({ isPinned, isDisabled, onClick }, ref) {
  const label = isPinned ? "Unpin panel" : "Pin panel";
  return /* @__PURE__ */ jsx(
    ArvoIconButton,
    {
      ref,
      className: "arvo-sp__pin",
      size: "sm",
      variant: "tertiary",
      icon: "push-pin",
      tooltip: label,
      isDisabled,
      isSelected: isPinned,
      onClick,
      "aria-label": label
    }
  );
});
function toCssLength(value) {
  if (value === null || value === void 0) return void 0;
  return typeof value === "number" ? `${value}px` : value;
}
function SidePanelInner(props, ref) {
  const {
    variant: variantProp = "layout",
    side = "right",
    isPinnable = false,
    isPinned: isPinnedProp,
    defaultPinned = true,
    onPinChange,
    hasSplitter = false,
    width = 290,
    minWidth = 280,
    maxWidth = null,
    isOpen: isOpenProp,
    defaultOpen = true,
    onOpenChange,
    onOpen,
    onClose,
    closeOnEscape = true,
    closeOnOutside = false,
    isDisabled = false,
    isLoading = false,
    ariaLabel,
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
    isClosable = false,
    searchQuery,
    defaultSearchQuery,
    onSearchChange,
    onItemActivate,
    onTabSelect,
    ...rest
  } = props;
  const hostRef = useRef(null);
  const paneRef = useRef(null);
  const pinBtnRef = useRef(null);
  const shellRef = useRef(null);
  const prevFocusRef = useRef(null);
  const pinClickedRef = useRef(false);
  const splitterWarnedRef = useRef(false);
  const [trapActive, setTrapActive] = useState(false);
  useImperativeHandle(ref, () => hostRef.current, []);
  const [isPinnedState, setPinnedInternal] = useControllableState(
    isPinnedProp,
    defaultPinned
  );
  const [isOpenState, setOpenInternal] = useControllableState(
    isOpenProp,
    defaultOpen
  );
  const [variantOverride, setVariantOverride] = useState(null);
  const effectiveVariant = isPinnable ? isPinnedState ? "layout" : "overlay" : variantOverride ?? variantProp;
  const open = effectiveVariant === "layout" ? true : isOpenState;
  const setPinned = useCallback(
    (next) => {
      if (next === isPinnedState) return;
      setPinnedInternal(next);
      onPinChange == null ? void 0 : onPinChange(next);
    },
    [isPinnedState, onPinChange, setPinnedInternal]
  );
  const setOpen = useCallback(
    (next) => {
      if (next === isOpenState) return;
      setOpenInternal(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isOpenState, onOpenChange, setOpenInternal]
  );
  const handleOpen = useCallback(() => {
    if (effectiveVariant !== "overlay") return;
    if (isOpenState) return;
    if ((onOpen == null ? void 0 : onOpen()) === false) return;
    setOpen(true);
  }, [effectiveVariant, isOpenState, onOpen, setOpen]);
  const handleClose = useCallback(() => {
    if (effectiveVariant === "overlay" && !isOpenState) return;
    if ((onClose == null ? void 0 : onClose()) === false) return;
    if (effectiveVariant === "overlay") setOpen(false);
  }, [effectiveVariant, isOpenState, onClose, setOpen]);
  const handleToggle = useCallback(() => {
    if (effectiveVariant !== "overlay") return;
    if (isOpenState) handleClose();
    else handleOpen();
  }, [effectiveVariant, isOpenState, handleOpen, handleClose]);
  const handlePinClick = useCallback(() => {
    if (isDisabled) return;
    pinClickedRef.current = true;
    setPinned(!isPinnedState);
  }, [isDisabled, isPinnedState, setPinned]);
  useEffect(() => {
    var _a;
    if (!pinClickedRef.current) return;
    pinClickedRef.current = false;
    (_a = pinBtnRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }, [isPinnedState]);
  const wasOpenRef = useRef(open);
  useEffect(() => {
    if (effectiveVariant !== "overlay") {
      wasOpenRef.current = open;
      setTrapActive(false);
      return;
    }
    const prevOpen = wasOpenRef.current;
    wasOpenRef.current = open;
    if (open === prevOpen) return;
    const host = hostRef.current;
    if (!host) return;
    if (open) {
      if (typeof document !== "undefined") {
        prevFocusRef.current = document.activeElement;
      }
      void enter({ element: host, type: "fade" }).then(() => {
        setTrapActive(true);
      });
    } else {
      setTrapActive(false);
      void exit({ element: host, type: "fade" });
      const prev = prevFocusRef.current;
      prevFocusRef.current = null;
      if (prev && typeof prev.focus === "function") {
        prev.focus({ preventScroll: true });
      }
    }
  }, [open, effectiveVariant]);
  useFocusTrap(paneRef, {
    active: effectiveVariant === "overlay" && open && trapActive && !isDisabled,
    initialFocus: "first",
    escapeDeactivates: false,
    returnFocusOnDeactivate: false,
    allowOutsideClick: true
  });
  useEffect(() => {
    if (effectiveVariant !== "overlay" || !open || !closeOnEscape) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        handleClose();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [effectiveVariant, open, closeOnEscape, handleClose]);
  useEffect(() => {
    if (effectiveVariant !== "overlay" || !open || !closeOnOutside) return;
    const onMouseDown = (e) => {
      const target = e.target;
      if (!target) return;
      const pane = paneRef.current;
      if (pane && pane.contains(target)) return;
      handleClose();
    };
    document.addEventListener("mousedown", onMouseDown, true);
    return () => document.removeEventListener("mousedown", onMouseDown, true);
  }, [effectiveVariant, open, closeOnOutside, handleClose]);
  const splitterResolved = useMemo(() => {
    if (hasSplitter === "auto") return effectiveVariant === "layout";
    return hasSplitter === true;
  }, [hasSplitter, effectiveVariant]);
  useEffect(() => {
    if (splitterResolved && !splitterWarnedRef.current && typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
      splitterWarnedRef.current = true;
      console.warn(
        "[ArvoSidePanel] hasSplitter resolved truthy but ArvoSplitter is not yet available; rendering inert 4px placeholder. Resize behavior will activate when ArvoSplitter ships."
      );
    }
  }, [splitterResolved]);
  useImperativeHandle(
    instanceRef,
    () => ({
      pinned(value) {
        if (value === void 0) return isPinnedState;
        if (!isPinnable) return;
        setPinned(value);
      },
      setVariant(next) {
        if (isPinnable) {
          setPinned(next === "layout");
          return;
        }
        setVariantOverride(next);
      },
      open: () => handleOpen(),
      close: () => handleClose(),
      toggle: () => handleToggle(),
      isOpen: () => open,
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
      isPinnedState,
      isPinnable,
      setPinned,
      handleOpen,
      handleClose,
      handleToggle,
      open,
      isLoading,
      isDisabled
    ]
  );
  const splitterClass = splitterResolved ? side === "right" ? "arvo-sp--with-splitter-l" : "arvo-sp--with-splitter-r" : null;
  const hostClasses = [
    "arvo-sp",
    `arvo-sp--${effectiveVariant}`,
    `arvo-sp--side-${side}`,
    isPinnable && "arvo-sp--pinnable",
    isClosable && "arvo-sp--closable",
    hasBackButton && "arvo-sp--with-back",
    isPinnable && (isPinnedState ? "is-pinned" : "is-unpinned"),
    effectiveVariant === "overlay" && open && "open",
    isLoading && "loading",
    isDisabled && "is-disabled",
    splitterClass,
    className
  ].filter(Boolean).join(" ");
  const styleVars = useMemo(() => {
    const widthCss = toCssLength(width);
    const minWidthCss = toCssLength(minWidth);
    const maxWidthCss = toCssLength(maxWidth);
    const out = {};
    if (widthCss) out["--arvo-sp-width"] = widthCss;
    if (minWidthCss) out["--arvo-sp-min-width"] = minWidthCss;
    if (maxWidthCss) out["--arvo-sp-max-width"] = maxWidthCss;
    return out;
  }, [width, minWidth, maxWidth]);
  const role = effectiveVariant === "overlay" ? "dialog" : "region";
  const ariaModalAttr = effectiveVariant === "overlay" ? "false" : void 0;
  const ariaHiddenAttr = effectiveVariant === "overlay" && !open ? true : void 0;
  const computedAriaLabel = ariaLabel ?? title ?? void 0;
  const splitterEl = splitterResolved ? /* @__PURE__ */ jsx("div", { className: "arvo-sp__splitter", "aria-hidden": "true" }) : null;
  const splitterFirst = side === "right" ? splitterEl : null;
  const splitterLast = side === "left" ? splitterEl : null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: hostRef,
      className: hostClasses,
      style: styleVars,
      ...rest,
      children: [
        splitterFirst,
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: paneRef,
            className: "arvo-sp__pane",
            role,
            "aria-modal": ariaModalAttr,
            "aria-hidden": ariaHiddenAttr,
            "aria-busy": isLoading || void 0,
            "aria-disabled": isDisabled || void 0,
            "aria-label": computedAriaLabel,
            children: /* @__PURE__ */ jsx(
              PanelShell,
              {
                ref: shellRef,
                parentBlock: "arvo-sp",
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
                onClose: handleClose,
                isLoading,
                isDisabled,
                isPinnableCount: isPinnable ? 1 : 0,
                isClosableCount: isClosable ? 1 : 0,
                searchQuery,
                defaultSearchQuery,
                onSearchChange,
                onItemActivate,
                onTabSelect,
                pinSlot: isPinnable ? /* @__PURE__ */ jsx(
                  PinButton,
                  {
                    ref: pinBtnRef,
                    isPinned: isPinnedState,
                    isDisabled,
                    onClick: handlePinClick
                  }
                ) : null,
                children
              }
            )
          }
        ),
        splitterLast
      ]
    }
  );
}
const ArvoSidePanel = forwardRef(SidePanelInner);
ArvoSidePanel.displayName = "ArvoSidePanel";
export {
  ArvoSidePanel
};
//# sourceMappingURL=index47.js.map
