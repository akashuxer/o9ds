import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useMemo, useCallback, useEffect } from "react";
import O9Button from "./index11.js";
import O9IconButton from "./index12.js";
import { useControllableState } from "./index40.js";
const O9ButtonGroup = forwardRef(
  function O9ButtonGroup2({
    items,
    value: valueProp,
    defaultValue = null,
    variant = "primary",
    size = "lg",
    isMultiSelect = false,
    isIconOnly = false,
    hasOverflow = false,
    expandOnSelect = false,
    isDisabled = false,
    isLoading = false,
    ariaLabel,
    onChange,
    className,
    ...rest
  }, ref) {
    const [value, setValue] = useControllableState(valueProp, defaultValue);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const overflowTriggerRef = useRef(null);
    const overflowMenuRef = useRef(null);
    const [hiddenIndices, setHiddenIndices] = useState(/* @__PURE__ */ new Set());
    const [overflowOpen, setOverflowOpen] = useState(false);
    const effectiveExpandOnSelect = expandOnSelect && !isMultiSelect;
    const buttonSize = size === "sm" ? "sm" : "md";
    const classes = useMemo(
      () => [
        "o9ds-btn-grp",
        `o9ds-btn-grp--${variant}`,
        `o9ds-btn-grp--${size}`,
        isMultiSelect && "o9ds-btn-grp--multi",
        isIconOnly && "o9ds-btn-grp--icon-only",
        hasOverflow && "o9ds-btn-grp--overflow",
        effectiveExpandOnSelect && "o9ds-btn-grp--expand-lbl",
        isDisabled && "is-disabled",
        isLoading && "loading",
        className
      ].filter(Boolean).join(" "),
      [variant, size, isMultiSelect, isIconOnly, hasOverflow, effectiveExpandOnSelect, isDisabled, isLoading, className]
    );
    const isItemActive = useCallback(
      (itemValue) => {
        if (isMultiSelect) {
          return Array.isArray(value) && value.includes(itemValue);
        }
        return value === itemValue;
      },
      [value, isMultiSelect]
    );
    const handleItemClick = useCallback(
      (itemValue) => {
        if (isDisabled || isLoading) return;
        const item = items.find((i) => i.value === itemValue);
        if (!item || item.isDisabled) return;
        if (isMultiSelect) {
          const currentValues = Array.isArray(value) ? value : [];
          const idx = currentValues.indexOf(itemValue);
          const isSelected = idx === -1;
          const newValues = isSelected ? [...currentValues, itemValue] : currentValues.filter((v) => v !== itemValue);
          setValue(newValues);
          onChange == null ? void 0 : onChange({
            value: newValues,
            previousValue: [...currentValues],
            changedValue: itemValue,
            isSelected
          });
        } else {
          if (value === itemValue) return;
          setValue(itemValue);
          onChange == null ? void 0 : onChange({
            value: itemValue,
            previousValue: value ?? null
          });
        }
      },
      [isDisabled, isLoading, items, isMultiSelect, value, onChange, setValue]
    );
    const getRovingTabIndex = useCallback(
      (index, itemValue) => {
        var _a;
        if (hiddenIndices.has(index)) return -1;
        const enabledVisibleItems = items.map((item, i) => ({ item, i })).filter(({ item, i }) => !item.isDisabled && !isDisabled && !hiddenIndices.has(i));
        if (enabledVisibleItems.length === 0) return -1;
        const selectedItem = enabledVisibleItems.find(({ item }) => isItemActive(item.value));
        if (selectedItem) {
          return selectedItem.item.value === itemValue ? 0 : -1;
        }
        return ((_a = enabledVisibleItems[0]) == null ? void 0 : _a.i) === index ? 0 : -1;
      },
      [items, isDisabled, hiddenIndices, isItemActive]
    );
    const handleKeyDown = useCallback(
      (event) => {
        if (isDisabled || isLoading) return;
        const { key } = event;
        const isArrow = key === "ArrowLeft" || key === "ArrowRight";
        const isEdge = key === "Home" || key === "End";
        const isActivate = key === "Enter" || key === " ";
        if (!isArrow && !isEdge && !isActivate) return;
        const enabledItems = items.map((item, i) => ({ item, i, el: itemRefs.current[i] })).filter(({ item, i, el }) => el && !item.isDisabled && !isDisabled && !hiddenIndices.has(i));
        if (enabledItems.length === 0) return;
        const focusedEl = document.activeElement;
        const currentEnabledIdx = enabledItems.findIndex(({ el }) => el === focusedEl);
        if (isArrow || isEdge) {
          event.preventDefault();
          let targetIdx;
          if (key === "ArrowRight") {
            targetIdx = currentEnabledIdx === -1 ? 0 : (currentEnabledIdx + 1) % enabledItems.length;
          } else if (key === "ArrowLeft") {
            targetIdx = currentEnabledIdx === -1 ? enabledItems.length - 1 : (currentEnabledIdx - 1 + enabledItems.length) % enabledItems.length;
          } else if (key === "Home") {
            targetIdx = 0;
          } else {
            targetIdx = enabledItems.length - 1;
          }
          const targetItem = enabledItems[targetIdx];
          if (targetItem == null ? void 0 : targetItem.el) {
            for (const el of itemRefs.current) {
              if (el) el.tabIndex = -1;
            }
            targetItem.el.tabIndex = 0;
            targetItem.el.focus();
            if (!isMultiSelect) {
              handleItemClick(targetItem.item.value);
            }
          }
        } else if (isActivate) {
          event.preventDefault();
          if (currentEnabledIdx !== -1) {
            handleItemClick(enabledItems[currentEnabledIdx].item.value);
          }
        }
      },
      [isDisabled, isLoading, items, hiddenIndices, isMultiSelect, handleItemClick]
    );
    useEffect(() => {
      if (!hasOverflow) return;
      const container = containerRef.current;
      if (!container) return;
      const checkOverflow = () => {
        var _a;
        const containerRect = container.getBoundingClientRect();
        const triggerWidth = ((_a = overflowTriggerRef.current) == null ? void 0 : _a.offsetWidth) ?? 0;
        const availableWidth = containerRect.width - triggerWidth;
        const newHidden = /* @__PURE__ */ new Set();
        for (let i = 0; i < itemRefs.current.length; i++) {
          const el = itemRefs.current[i];
          if (!el) continue;
          el.style.visibility = "";
          el.style.position = "";
          el.style.pointerEvents = "";
        }
        for (let i = 0; i < itemRefs.current.length; i++) {
          const el = itemRefs.current[i];
          if (!el) continue;
          const btnRect = el.getBoundingClientRect();
          if (btnRect.right > containerRect.left + availableWidth) {
            newHidden.add(i);
            el.style.visibility = "hidden";
            el.style.position = "absolute";
            el.style.pointerEvents = "none";
          }
        }
        setHiddenIndices((prev) => {
          if (prev.size === newHidden.size && [...prev].every((v) => newHidden.has(v))) return prev;
          return newHidden;
        });
      };
      const observer = new ResizeObserver(checkOverflow);
      observer.observe(container);
      checkOverflow();
      return () => observer.disconnect();
    }, [hasOverflow, items]);
    useEffect(() => {
      if (!overflowOpen) return;
      const handleDocClick = (e) => {
        var _a, _b;
        if ((_a = overflowMenuRef.current) == null ? void 0 : _a.contains(e.target)) return;
        if ((_b = overflowTriggerRef.current) == null ? void 0 : _b.contains(e.target)) return;
        setOverflowOpen(false);
      };
      document.addEventListener("click", handleDocClick);
      return () => document.removeEventListener("click", handleDocClick);
    }, [overflowOpen]);
    const mergedRef = useCallback(
      (node) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: mergedRef,
        className: classes,
        role: "toolbar",
        "aria-orientation": "horizontal",
        "aria-label": ariaLabel,
        "aria-busy": isLoading || void 0,
        onKeyDown: handleKeyDown,
        ...rest,
        children: [
          items.map((item, index) => {
            const isActive = isItemActive(item.value);
            const isItemDisabled = isDisabled || (item.isDisabled ?? false);
            const isItemLoading = isLoading && !(item.isExcluded ?? false);
            const useAsIconOnly = isIconOnly || effectiveExpandOnSelect && !isActive && !!item.icon;
            const tabIdx = getRovingTabIndex(index, item.value);
            const refCallback = (el) => {
              itemRefs.current[index] = el;
            };
            const handleClick = () => handleItemClick(item.value);
            if (useAsIconOnly || !item.label && item.icon) {
              return /* @__PURE__ */ jsx(
                O9IconButton,
                {
                  ref: refCallback,
                  icon: item.icon ?? "",
                  tooltip: item.label ?? item.value,
                  variant: "tertiary",
                  size: buttonSize,
                  isDisabled: isItemDisabled,
                  isLoading: isItemLoading,
                  isSelected: isActive,
                  tabIndex: tabIdx,
                  "data-value": item.value,
                  onClick: handleClick
                },
                item.value
              );
            }
            return /* @__PURE__ */ jsx(
              O9Button,
              {
                ref: refCallback,
                label: item.label ?? item.value,
                icon: item.icon,
                variant: "tertiary",
                size: buttonSize,
                isDisabled: isItemDisabled,
                isLoading: isItemLoading,
                isSelected: isActive,
                tabIndex: tabIdx,
                "data-value": item.value,
                onClick: handleClick
              },
              item.value
            );
          }),
          hasOverflow && hiddenIndices.size > 0 && /* @__PURE__ */ jsx(
            O9IconButton,
            {
              ref: overflowTriggerRef,
              className: "o9ds-btn-grp__overflow",
              icon: "ellipsis-v",
              tooltip: "More actions",
              variant: "tertiary",
              size: buttonSize,
              isDisabled,
              "aria-haspopup": "menu",
              "aria-expanded": overflowOpen,
              onClick: () => setOverflowOpen((o) => !o)
            }
          ),
          overflowOpen && hiddenIndices.size > 0 && /* @__PURE__ */ jsx(
            "div",
            {
              ref: overflowMenuRef,
              className: "o9ds-btn-grp__overflow-menu",
              role: "menu",
              children: [...hiddenIndices].map((idx) => {
                const item = items[idx];
                if (!item) return null;
                const active = isItemActive(item.value);
                return /* @__PURE__ */ jsx(
                  O9Button,
                  {
                    role: "menuitem",
                    label: item.label ?? item.value,
                    icon: item.icon,
                    variant: "tertiary",
                    size: buttonSize,
                    isDisabled: item.isDisabled,
                    isSelected: active,
                    "data-value": item.value,
                    onClick: () => {
                      handleItemClick(item.value);
                      setOverflowOpen(false);
                    }
                  },
                  item.value
                );
              })
            }
          )
        ]
      }
    );
  }
);
export {
  O9ButtonGroup as default
};
//# sourceMappingURL=index23.js.map
