import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useMemo, useCallback } from "react";
import { ArvoActionMenu } from "./index35.js";
import { useControllableState } from "./index49.js";
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
const ArvoSplitButton = forwardRef(
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
    const wrapperRef = useRef(null);
    const actionRef = useRef(null);
    const triggerRef = useRef(null);
    const menuSize = size === "sm" ? "sm" : "md";
    const [isOpen, setIsOpen] = useState(false);
    const [effectiveSelectedId, setSelectedId] = useControllableState(value, defaultValue ?? null);
    const flat = useMemo(() => flattenItems(items), [items]);
    const selectedItem = useMemo(() => {
      if (effectiveSelectedId == null) return null;
      const id = String(effectiveSelectedId);
      return flat.find((item) => item.id === id) ?? null;
    }, [flat, effectiveSelectedId]);
    const displayLabel = useMemo(() => {
      if (mode === "action" || !selectedItem) return label;
      if (displaySelected === "value") {
        const val = selectedItem.value;
        return val != null ? String(val) : selectedItem.id;
      }
      return selectedItem.label;
    }, [mode, selectedItem, label, displaySelected]);
    const displayIcon = useMemo(() => {
      if (mode === "action") return icon;
      return (selectedItem == null ? void 0 : selectedItem.icon) ?? icon;
    }, [mode, selectedItem, icon]);
    const processedItems = useMemo(() => {
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
    const dispatchWrapperEvent = useCallback(
      (name, detail, cancelable = true) => {
        var _a;
        (_a = wrapperRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent(name, { bubbles: true, cancelable, detail })
        );
      },
      []
    );
    const handleOpenChange = useCallback(
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
    const handleMenuSelect = useCallback(
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
    const handleActionClick = useCallback(
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
    const handleActionKeyDown = useCallback(
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
    const mergeActionRef = useCallback(
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
    const triggerElement = /* @__PURE__ */ jsx(
      "button",
      {
        ref: triggerRef,
        type: "button",
        className: `${segmentBaseClasses} arvo-split-btn__trigger`,
        disabled: triggerDisabled,
        "aria-label": triggerLabel,
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: "arvo-split-btn__caret o9con o9con-angle-down",
            "aria-hidden": "true"
          }
        )
      }
    );
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: wrapperRef,
        className: wrapperClasses,
        role: "group",
        "aria-disabled": isDisabled || void 0,
        "aria-busy": isLoading || void 0,
        children: [
          /* @__PURE__ */ jsxs(
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
                displayIcon && /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `arvo-split-btn__icon o9con o9con-${displayIcon}`,
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "arvo-split-btn__lbl", children: displayLabel })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            ArvoActionMenu,
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
export {
  ArvoSplitButton,
  ArvoSplitButton as default
};
//# sourceMappingURL=index41.js.map
