"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const ActionMenu = require("./index31.cjs");
const useTooltip = require("./index10.cjs");
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
const O9DropdownButton = react.forwardRef(
  function O9DropdownButton2({
    label,
    variant = "primary",
    size = "md",
    icon,
    mode = "action",
    displaySelected = "label",
    value,
    defaultValue = null,
    isDisabled = false,
    isLoading = false,
    items,
    search,
    placement = "bottom-end",
    maxHeight,
    hasGroupDividers = true,
    closeOnSelect = true,
    menuSize = "md",
    tooltip,
    className,
    onSelect,
    onOpen,
    onClose,
    onOpenChange,
    onClick,
    onFocus,
    onBlur,
    ...rest
  }, ref) {
    const triggerRef = react.useRef(null);
    useTooltip.useTooltip({ triggerRef, tooltip });
    const [isOpen, setIsOpen] = react.useState(false);
    const isControlled = value !== void 0;
    const [internalSelected, setInternalSelected] = react.useState(defaultValue);
    const effectiveSelectedId = isControlled ? value : internalSelected;
    const flat = react.useMemo(() => flattenItems(items), [items]);
    const selectedItemData = react.useMemo(() => {
      if (effectiveSelectedId == null) return null;
      const id = String(effectiveSelectedId);
      return flat.find((item) => item.id === id) ?? null;
    }, [flat, effectiveSelectedId]);
    const displayLabel = react.useMemo(() => {
      if (mode === "action" || !selectedItemData) return label;
      if (displaySelected === "value") {
        const val = selectedItemData.value;
        return val != null ? String(val) : selectedItemData.id;
      }
      return selectedItemData.label;
    }, [mode, selectedItemData, label, displaySelected]);
    const handleOpenChange = react.useCallback(
      (isOpen2) => {
        setIsOpen(isOpen2);
        onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      },
      [onOpenChange]
    );
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
    const handleSelect = react.useCallback(
      (item, index) => {
        var _a, _b;
        if (mode === "selection") {
          const prevId = isControlled ? value : internalSelected;
          const previousItem = prevId != null ? flat.find((i) => i.id === String(prevId)) ?? null : null;
          if (!isControlled) setInternalSelected(item.id);
          (_a = triggerRef.current) == null ? void 0 : _a.dispatchEvent(
            new CustomEvent("dd-btn:change", {
              bubbles: true,
              cancelable: true,
              detail: { item, index, previousItem }
            })
          );
        } else {
          (_b = triggerRef.current) == null ? void 0 : _b.dispatchEvent(
            new CustomEvent("dd-btn:select", {
              bubbles: true,
              cancelable: true,
              detail: { item, index }
            })
          );
        }
        return onSelect == null ? void 0 : onSelect(item, index);
      },
      [mode, isControlled, value, internalSelected, flat, onSelect]
    );
    const mergeRef = react.useCallback(
      (node) => {
        triggerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );
    const triggerClasses = [
      "o9ds-dd-btn",
      "o9ds-btn",
      `o9ds-btn--${variant}`,
      `o9ds-btn--${size}`,
      isOpen && "open",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    const triggerElement = /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        ref: mergeRef,
        type: "button",
        ...rest,
        className: triggerClasses,
        disabled: isDisabled,
        "aria-busy": isLoading || void 0,
        onClick,
        onFocus,
        onBlur,
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: `o9ds-dd-btn__icon o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-dd-btn__lbl", children: displayLabel }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: "o9ds-dd-btn__caret o9con o9con-angle-down",
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
    return /* @__PURE__ */ jsxRuntime.jsx(
      ActionMenu.O9ActionMenu,
      {
        trigger: triggerElement,
        items: processedItems,
        size: menuSize,
        placement,
        search,
        maxHeight,
        hasGroupDividers,
        closeOnSelect,
        isDisabled: isDisabled || isLoading,
        isLoading: false,
        onOpen,
        onClose,
        onSelect: handleSelect,
        onOpenChange: handleOpenChange
      }
    );
  }
);
exports.default = O9DropdownButton;
//# sourceMappingURL=index36.cjs.map
