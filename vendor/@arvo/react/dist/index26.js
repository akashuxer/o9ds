import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useMemo, useCallback } from "react";
import { useControllableState } from "./index49.js";
const ArvoSegmentedControl = forwardRef(
  function ArvoSegmentedControl2({
    items,
    value: valueProp,
    defaultValue = null,
    variant = "primary",
    size = "lg",
    isIconOnly = false,
    isDisabled = false,
    isLoading = false,
    ariaLabel,
    onChange,
    className,
    ...rest
  }, ref) {
    const [value, setValue] = useControllableState(valueProp, defaultValue);
    const optionRefs = useRef([]);
    const classes = useMemo(
      () => [
        "arvo-seg-ctrl",
        `arvo-seg-ctrl--${variant}`,
        `arvo-seg-ctrl--${size}`,
        isIconOnly && "arvo-seg-ctrl--icon-only",
        isDisabled && "is-disabled",
        isLoading && "loading",
        className
      ].filter(Boolean).join(" "),
      [variant, size, isIconOnly, isDisabled, isLoading, className]
    );
    const select = useCallback(
      (next) => {
        if (isDisabled || isLoading) return;
        if (next === value) return;
        const target = items.find((it) => it.value === next);
        if (!target || target.isDisabled) return;
        const previous = value ?? null;
        setValue(next);
        onChange == null ? void 0 : onChange({ value: next, previousValue: previous });
      },
      [isDisabled, isLoading, items, value, setValue, onChange]
    );
    const handleKeyDown = useCallback(
      (event) => {
        if (isDisabled || isLoading) return;
        const { key } = event;
        const isPrev = key === "ArrowLeft" || key === "ArrowUp";
        const isNext = key === "ArrowRight" || key === "ArrowDown";
        const isHome = key === "Home";
        const isEnd = key === "End";
        const isActivate = key === "Enter" || key === " ";
        if (!isPrev && !isNext && !isHome && !isEnd && !isActivate) return;
        const enabled = items.map((item, idx) => ({ item, idx, el: optionRefs.current[idx] })).filter(({ item, el }) => el && !item.isDisabled);
        if (enabled.length === 0) return;
        const activeEl = document.activeElement;
        const currentIdx = enabled.findIndex(({ el }) => el === activeEl);
        if (isActivate) {
          if (currentIdx === -1) return;
          event.preventDefault();
          select(enabled[currentIdx].item.value);
          return;
        }
        event.preventDefault();
        let targetIdx;
        if (isHome) targetIdx = 0;
        else if (isEnd) targetIdx = enabled.length - 1;
        else if (isNext) targetIdx = currentIdx === -1 ? 0 : (currentIdx + 1) % enabled.length;
        else targetIdx = currentIdx === -1 ? enabled.length - 1 : (currentIdx - 1 + enabled.length) % enabled.length;
        const target = enabled[targetIdx];
        if (!(target == null ? void 0 : target.el)) return;
        target.el.focus();
        select(target.item.value);
      },
      [isDisabled, isLoading, items, select]
    );
    const enabledItems = useMemo(
      () => items.filter((it) => !it.isDisabled),
      [items]
    );
    const focusedItemValue = useMemo(() => {
      var _a;
      if (typeof value === "string") {
        const matched = enabledItems.find((it) => it.value === value);
        if (matched) return matched.value;
      }
      return ((_a = enabledItems[0]) == null ? void 0 : _a.value) ?? null;
    }, [enabledItems, value]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes,
        role: "radiogroup",
        "aria-label": ariaLabel,
        "aria-busy": isLoading || void 0,
        "aria-disabled": isDisabled || void 0,
        onKeyDown: handleKeyDown,
        ...rest,
        children: items.map((item, index) => {
          const isItemDisabled = isDisabled || (item.isDisabled ?? false);
          const isChecked = value === item.value;
          const tabIdx = item.value === focusedItemValue && !isItemDisabled ? 0 : -1;
          const refCallback = (el) => {
            optionRefs.current[index] = el;
          };
          const labelText = item.label ?? item.value;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              ref: refCallback,
              type: "button",
              role: "radio",
              className: "arvo-seg-ctrl__opt",
              "aria-checked": isChecked,
              "aria-disabled": isItemDisabled || void 0,
              "aria-label": isIconOnly ? labelText : void 0,
              tabIndex: tabIdx,
              disabled: isItemDisabled,
              "data-value": item.value,
              onClick: () => select(item.value),
              children: [
                item.icon && /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `arvo-seg-ctrl__ico o9con o9con-${item.icon}`,
                    "aria-hidden": "true"
                  }
                ),
                !isIconOnly && item.label && /* @__PURE__ */ jsx("span", { className: "arvo-seg-ctrl__lbl", children: item.label })
              ]
            },
            item.value
          );
        })
      }
    );
  }
);
export {
  ArvoSegmentedControl,
  ArvoSegmentedControl as default
};
//# sourceMappingURL=index26.js.map
