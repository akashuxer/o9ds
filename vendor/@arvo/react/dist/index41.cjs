"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const ActionMenu = require("./index35.cjs");
const useControllableState = require("./index49.cjs");
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
const ArvoSplitButton = react.forwardRef(
  function ArvoSplitButton2({
    label,
    variant = "primary",
    size = "md",
    icon,
    mode = "action",
    displaySelected = "label",
    value,
    defaultValue = null,
    isDisabled = false,
    isActionDisabled = false,
    isTriggerDisabled = false,
    isLoading = false,
    items,
    search,
    placement = "bottom-end",
    maxHeight,
    hasGroupDividers = true,
    closeOnSelect = true,
    triggerLabel = "Show options",
    className,
    onAction,
    onSelect,
    onOpen,
    onClose,
    onOpenChange,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    ...rest
  }, ref) {
    const wrapperRef = react.useRef(null);
    const actionRef = react.useRef(null);
    const triggerRef = react.useRef(null);
    const menuSize = size === "sm" ? "sm" : "md";
    const [isOpen, setIsOpen] = react.useState(false);
    const [effectiveSelectedId, setSelectedId] = useControllableState.useControllableState(value, defaultValue ?? null);
    const flat = react.useMemo(() => flattenItems(items), [items]);
    const selectedItem = react.useMemo(() => {
      if (effectiveSelectedId == null) return null;
      const id = String(effectiveSelectedId);
      return flat.find((item) => item.id === id) ?? null;
    }, [flat, effectiveSelectedId]);
    const displayLabel = react.useMemo(() => {
      if (mode === "action" || !selectedItem) return label;
      if (displaySelected === "value") {
        const val = selectedItem.value;
        return val != null ? String(val) : selectedItem.id;
      }
      return selectedItem.label;
    }, [mode, selectedItem, label, displaySelected]);
    const displayIcon = react.useMemo(() => {
      if (mode === "action") return icon;
      return (selectedItem == null ? void 0 : selectedItem.icon) ?? icon;
    }, [mode, selectedItem, icon]);
    const processedItems = react.useMemo(() => {
      if (mode !== "selection" || effectiveSelectedId == null) return items;
      const selId = String(effectiveSelectedId);
      const mark = (item) => ({
        ...item,
        active: item.id === selId
      });
      if (isGrouped(items)) {
        return items.map((group) => ({
          ...group,
          items: group.items.map(mark)
        }));
      }
      return items.map(mark);
    }, [items, mode, effectiveSelectedId]);
    const dispatchWrapperEvent = react.useCallback(
      (name, detail, cancelable = true) => {
        var _a;
        (_a = wrapperRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent(name, { bubbles: true, cancelable, detail })
        );
      },
      []
    );
    const handleOpenChange = react.useCallback(
      (next) => {
        setIsOpen(next);
        if (next) {
          dispatchWrapperEvent("split-btn:open", {});
        } else {
          dispatchWrapperEvent("split-btn:close", {});
        }
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [dispatchWrapperEvent, onOpenChange]
    );
    const handleMenuSelect = react.useCallback(
      (item, index) => {
        if (mode === "selection") {
          const previousItem = selectedItem;
          setSelectedId(item.id);
          dispatchWrapperEvent(
            "split-btn:change",
            { item, previousItem },
            false
          );
        } else {
          dispatchWrapperEvent("split-btn:select", { item, index });
        }
        return onSelect == null ? void 0 : onSelect(item, index);
      },
      [mode, selectedItem, setSelectedId, dispatchWrapperEvent, onSelect]
    );
    const actionDisabled = isDisabled || isActionDisabled || isLoading;
    const triggerDisabled = isDisabled || isTriggerDisabled || isLoading;
    const handleActionClick = react.useCallback(
      (event) => {
        if (actionDisabled) return;
        if (mode === "selection" && selectedItem) {
          const currentIndex = flat.findIndex((i) => i.id === selectedItem.id);
          dispatchWrapperEvent("split-btn:action", { selectedItem });
          onSelect == null ? void 0 : onSelect(selectedItem, currentIndex);
        } else {
          dispatchWrapperEvent("split-btn:action", { selectedItem: null });
          onAction == null ? void 0 : onAction(event, null);
        }
        onClick == null ? void 0 : onClick(event);
      },
      [
        actionDisabled,
        mode,
        selectedItem,
        flat,
        dispatchWrapperEvent,
        onAction,
        onSelect,
        onClick
      ]
    );
    const handleActionKeyDown = react.useCallback(
      (event) => {
        var _a;
        onKeyDown == null ? void 0 : onKeyDown(event);
        if (event.defaultPrevented) return;
        if ((event.key === "ArrowDown" || event.altKey && event.key === "ArrowDown") && !actionDisabled) {
          event.preventDefault();
          (_a = triggerRef.current) == null ? void 0 : _a.click();
        }
      },
      [actionDisabled, onKeyDown]
    );
    const mergeActionRef = react.useCallback(
      (node) => {
        actionRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );
    const wrapperClasses = [
      "arvo-split-btn",
      `arvo-split-btn--${variant}`,
      `arvo-split-btn--${size}`,
      isOpen && "open",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    const segmentBaseClasses = [
      "arvo-btn",
      `arvo-btn--${variant}`,
      `arvo-btn--${size}`
    ].join(" ");
    const triggerElement = /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        ref: triggerRef,
        type: "button",
        className: `${segmentBaseClasses} arvo-split-btn__trigger`,
        disabled: triggerDisabled,
        "aria-label": triggerLabel,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "arvo-split-btn__caret o9con o9con-angle-down",
            "aria-hidden": "true"
          }
        )
      }
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref: wrapperRef,
        className: wrapperClasses,
        role: "group",
        "aria-disabled": isDisabled || void 0,
        "aria-busy": isLoading || void 0,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              ...rest,
              ref: mergeActionRef,
              type: "button",
              className: `${segmentBaseClasses} arvo-split-btn__action`,
              disabled: actionDisabled,
              onClick: handleActionClick,
              onKeyDown: handleActionKeyDown,
              onFocus,
              onBlur,
              children: [
                displayIcon && /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    className: `arvo-split-btn__icon o9con o9con-${displayIcon}`,
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-split-btn__lbl", children: displayLabel })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            ActionMenu.ArvoActionMenu,
            {
              trigger: triggerElement,
              items: processedItems,
              size: menuSize,
              placement,
              search,
              maxHeight,
              hasGroupDividers,
              closeOnSelect,
              isDisabled: isDisabled || isTriggerDisabled || isLoading,
              isLoading: false,
              onOpen,
              onClose,
              onSelect: handleMenuSelect,
              onOpenChange: handleOpenChange
            }
          )
        ]
      }
    );
  }
);
exports.ArvoSplitButton = ArvoSplitButton;
exports.default = ArvoSplitButton;
//# sourceMappingURL=index41.cjs.map
