import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useMemo, useCallback } from "react";
import { O9ActionMenu } from "./index31.js";
import { useTooltip } from "./index10.js";
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
const O9DropdownButton = forwardRef(
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
    const triggerRef = useRef(null);
    useTooltip({ triggerRef, tooltip });
    const [isOpen, setIsOpen] = useState(false);
    const isControlled = value !== void 0;
    const [internalSelected, setInternalSelected] = useState(defaultValue);
    const effectiveSelectedId = isControlled ? value : internalSelected;
    const flat = useMemo(() => flattenItems(items), [items]);
    const selectedItemData = useMemo(() => {
      if (effectiveSelectedId == null) return null;
      const id = String(effectiveSelectedId);
      return flat.find((item) => item.id === id) ?? null;
    }, [flat, effectiveSelectedId]);
    const displayLabel = useMemo(() => {
      if (mode === "action" || !selectedItemData) return label;
      if (displaySelected === "value") {
        const val = selectedItemData.value;
        return val != null ? String(val) : selectedItemData.id;
      }
      return selectedItemData.label;
    }, [mode, selectedItemData, label, displaySelected]);
    const handleOpenChange = useCallback(
      (isOpen2) => {
        setIsOpen(isOpen2);
        onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      },
      [onOpenChange]
    );
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
    const handleSelect = useCallback(
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
    const mergeRef = useCallback(
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
    const triggerElement = /* @__PURE__ */ jsxs(
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
          icon && /* @__PURE__ */ jsx(
            "span",
            {
              className: `o9ds-dd-btn__icon o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "o9ds-dd-btn__lbl", children: displayLabel }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "o9ds-dd-btn__caret o9con o9con-angle-down",
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
    return /* @__PURE__ */ jsx(
      O9ActionMenu,
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
export {
  O9DropdownButton as default
};
//# sourceMappingURL=index36.js.map
