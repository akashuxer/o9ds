import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useImperativeHandle, useState, useCallback, useEffect, useMemo, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { computePosition, createPositionWatcher, filterGroups, filterItems } from "@o9ds/core";
import { useOverlay } from "./index6.js";
import { useTooltip } from "./index10.js";
import { FormLabel } from "./index43.js";
import O9IconButton from "./index12.js";
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
function applyFilter(items, query, filterFn) {
  if (!query) return items;
  if (filterFn) {
    if (isGrouped(items)) {
      const result = [];
      for (const group of items) {
        const filtered = group.items.filter((item) => filterFn(item, query));
        if (filtered.length > 0) {
          result.push({ ...group, items: filtered });
        }
      }
      return result;
    }
    return items.filter((item) => filterFn(item, query));
  }
  if (isGrouped(items)) {
    return filterGroups(items, { query });
  }
  return filterItems(items, { query });
}
const O9Combobox = forwardRef(
  function O9Combobox2({
    items,
    value,
    defaultValue,
    inputValue: inputValueProp,
    placeholder,
    label,
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    errorMsg,
    isInlineError = false,
    size = "lg",
    isClearable = true,
    isLoading = false,
    isReadOnly = false,
    isFullWidth = false,
    width,
    placement = "bottom-start",
    maxHeight,
    hasGroupDividers = true,
    filterFn,
    isOpen: openProp,
    defaultOpen = false,
    onChange,
    onInputChange,
    onOpen,
    onClose,
    onClear,
    onOpenChange,
    className
  }, ref) {
    const uid = useId();
    const comboId = `o9ds-combobox-${uid}`;
    const panelId = `${comboId}-panel`;
    const labelId = `${comboId}-lbl`;
    const inputId = `${comboId}-input`;
    const errorId = `${comboId}-err`;
    const rootRef = useRef(null);
    const fieldRef = useRef(null);
    const inputRef = useRef(null);
    const actionsRef = useRef(null);
    const panelRef = useRef(null);
    const errIcoRef = useRef(null);
    useImperativeHandle(ref, () => rootRef.current, []);
    useTooltip({
      triggerRef: errIcoRef,
      tooltip: isInlineError && isInvalid && errorMsg ? errorMsg : void 0
    });
    const isOpenControlled = openProp !== void 0;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = isOpenControlled ? openProp : internalOpen;
    const setOpen = useCallback(
      (next) => {
        if (!isOpenControlled) setInternalOpen(next);
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [isOpenControlled, onOpenChange]
    );
    const isValueControlled = value !== void 0;
    const [internalValue, setInternalValue] = useState(
      defaultValue ?? null
    );
    const currentValue = isValueControlled ? value : internalValue;
    const isInputControlled = inputValueProp !== void 0;
    const [internalInputValue, setInternalInputValue] = useState(() => {
      if (inputValueProp !== void 0) return inputValueProp;
      const initValue = value ?? defaultValue ?? null;
      if (initValue != null) {
        const allFlat = flattenItems(items);
        const found = allFlat.find((item) => item.value === initValue);
        return (found == null ? void 0 : found.label) ?? "";
      }
      return "";
    });
    const currentInputValue = isInputControlled ? inputValueProp : internalInputValue;
    useEffect(() => {
      if (isInputControlled || !isValueControlled) return;
      const allFlat = flattenItems(items);
      const found = allFlat.find((item) => item.value === value);
      setInternalInputValue((found == null ? void 0 : found.label) ?? "");
    }, [value, items, isValueControlled, isInputControlled]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const keyboardActiveRef = useRef(false);
    const overlay = useOverlay();
    const preventCloseRef = useRef(false);
    const closingRef = useRef(false);
    const isUserTypingRef = useRef(false);
    const filteredItems = useMemo(
      () => isUserTypingRef.current ? applyFilter(items, currentInputValue, filterFn) : items,
      [items, currentInputValue, filterFn]
    );
    const flatItems = useMemo(
      () => flattenItems(filteredItems),
      [filteredItems]
    );
    const selectedItem = useMemo(() => {
      if (currentValue == null) return null;
      const allFlat = flattenItems(items);
      return allFlat.find((item) => item.value === currentValue) ?? null;
    }, [currentValue, items]);
    const handleClose = useCallback(
      (revertInput = true) => {
        var _a;
        if (!isOpen) return;
        if (closingRef.current) return;
        closingRef.current = true;
        if ((onClose == null ? void 0 : onClose()) === false) {
          closingRef.current = false;
          return;
        }
        isUserTypingRef.current = false;
        setOpen(false);
        overlay.close(comboId);
        if (revertInput && !isInputControlled) {
          setInternalInputValue((selectedItem == null ? void 0 : selectedItem.label) ?? "");
        }
        (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent("combobox:close", { bubbles: true, cancelable: true })
        );
        closingRef.current = false;
      },
      [isOpen, onClose, setOpen, overlay, comboId, isInputControlled, selectedItem]
    );
    const handleOpen = useCallback(() => {
      var _a;
      if (isOpen || isDisabled || isLoading || isReadOnly) return;
      if ((onOpen == null ? void 0 : onOpen()) === false) return;
      setOpen(true);
      (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("combobox:open", { bubbles: true, cancelable: true })
      );
    }, [isOpen, isDisabled, isLoading, isReadOnly, onOpen, setOpen]);
    const handleSelect = useCallback(
      (item, index) => {
        var _a;
        if (item.isDisabled) return;
        const result = onChange == null ? void 0 : onChange(item, index);
        isUserTypingRef.current = false;
        if (!isValueControlled) {
          setInternalValue(item.value);
        }
        if (!isInputControlled) {
          setInternalInputValue(item.label);
        }
        (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent("combobox:change", {
            bubbles: true,
            cancelable: true,
            detail: { item, index }
          })
        );
        if (result !== false) {
          handleClose(false);
        }
      },
      [onChange, isValueControlled, isInputControlled, handleClose]
    );
    useEffect(() => {
      if (isOpen && flatItems.length > 0) {
        keyboardActiveRef.current = false;
        const firstEnabled = flatItems.findIndex((item) => !item.isDisabled);
        setActiveIndex(firstEnabled >= 0 ? firstEnabled : 0);
      } else if (isOpen && flatItems.length === 0) {
        setActiveIndex(-1);
      }
    }, [isOpen, flatItems]);
    const handleItemClick = useCallback(
      (item, flatIndex) => {
        if (item.isDisabled || isLoading) return;
        preventCloseRef.current = true;
        setActiveIndex(flatIndex);
        handleSelect(item, flatIndex);
      },
      [isLoading, handleSelect]
    );
    const handleClear = useCallback(
      (e) => {
        var _a, _b;
        e.stopPropagation();
        isUserTypingRef.current = false;
        const previousValue = currentValue;
        if (!isValueControlled) {
          setInternalValue(null);
        }
        if (!isInputControlled) {
          setInternalInputValue("");
        }
        onClear == null ? void 0 : onClear({ previousValue });
        (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent("combobox:clear", {
            bubbles: true,
            detail: { previousValue }
          })
        );
        (_b = inputRef.current) == null ? void 0 : _b.focus({ preventScroll: true });
      },
      [currentValue, isValueControlled, isInputControlled, onClear]
    );
    const handleChevronClick = useCallback(
      (e) => {
        e.stopPropagation();
        if (isDisabled || isLoading || isReadOnly) return;
        if (isOpen) {
          handleClose();
        } else {
          handleOpen();
          requestAnimationFrame(() => {
            var _a;
            (_a = inputRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
          });
        }
      },
      [isDisabled, isLoading, isReadOnly, isOpen, handleOpen, handleClose]
    );
    const handleInputChange = useCallback(
      (e) => {
        var _a;
        const text = e.target.value;
        isUserTypingRef.current = true;
        if (!isInputControlled) {
          setInternalInputValue(text);
        }
        onInputChange == null ? void 0 : onInputChange(text);
        if (currentValue != null) {
          const matchesSelection = (selectedItem == null ? void 0 : selectedItem.label) === text;
          if (!matchesSelection && !isValueControlled) {
            setInternalValue(null);
          }
        }
        (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent("combobox:input", {
            bubbles: true,
            detail: { value: text }
          })
        );
        if (!isOpen && text.length > 0) {
          handleOpen();
        }
      },
      [
        isInputControlled,
        onInputChange,
        currentValue,
        selectedItem,
        isValueControlled,
        isOpen,
        handleOpen
      ]
    );
    useEffect(() => {
      if (!isOpen || !panelRef.current) return;
      overlay.open({
        id: comboId,
        type: "dropdown",
        element: panelRef.current,
        triggerElement: inputRef.current ?? void 0,
        priority: 20,
        config: { autoCloseOnOutsideClick: true },
        onClose: handleClose
      });
      return () => {
        overlay.close(comboId);
      };
    }, [isOpen]);
    const posRef = useRef(null);
    const posWatcherRef = useRef(null);
    useLayoutEffect(() => {
      var _a;
      if (!isOpen) {
        posRef.current = null;
        (_a = posWatcherRef.current) == null ? void 0 : _a.destroy();
        posWatcherRef.current = null;
        return;
      }
      const anchor = fieldRef.current;
      const float = panelRef.current;
      if (!anchor || !float) return;
      const opts = { placement, gap: 2, width: "anchor" };
      const applyPosition = (pos3) => {
        float.style.transform = `translate(${pos3.x}px, ${pos3.y}px)`;
        if (pos3.width) {
          float.style.width = pos3.width;
          float.style.minWidth = pos3.width;
        }
        if (pos3.maxHeight != null) {
          float.style.maxHeight = `${pos3.maxHeight}px`;
        }
      };
      const anchorWidth = `${anchor.getBoundingClientRect().width}px`;
      float.style.width = anchorWidth;
      float.style.minWidth = anchorWidth;
      const pos2 = computePosition(anchor, float, opts);
      posRef.current = pos2;
      applyPosition(pos2);
      float.style.visibility = "";
      const watcher = createPositionWatcher(anchor, float, opts, (result) => {
        posRef.current = result;
        applyPosition(result);
      });
      posWatcherRef.current = watcher;
      return () => {
        watcher.destroy();
        posWatcherRef.current = null;
      };
    }, [isOpen, placement]);
    useEffect(() => {
      if (!isOpen) return;
      const onPointerDown = (e) => {
        var _a, _b;
        const target = e.target;
        if ((_a = panelRef.current) == null ? void 0 : _a.contains(target)) return;
        if ((_b = rootRef.current) == null ? void 0 : _b.contains(target)) return;
        handleClose();
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      return () => document.removeEventListener("pointerdown", onPointerDown, true);
    }, [isOpen, handleClose]);
    useEffect(() => {
      if (!isOpen) return;
      const onFocusIn = (e) => {
        var _a, _b;
        const target = e.target;
        if ((_a = rootRef.current) == null ? void 0 : _a.contains(target)) return;
        if ((_b = panelRef.current) == null ? void 0 : _b.contains(target)) return;
        handleClose();
      };
      document.addEventListener("focusin", onFocusIn);
      return () => document.removeEventListener("focusin", onFocusIn);
    }, [isOpen, handleClose]);
    const blurTimeoutRef = useRef(null);
    const handleInputBlur = useCallback(() => {
      if (preventCloseRef.current) {
        preventCloseRef.current = false;
        return;
      }
      blurTimeoutRef.current = setTimeout(() => {
        if (isOpen) handleClose();
      }, 100);
    }, [isOpen, handleClose]);
    const handleInputFocus = useCallback(() => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = null;
      }
    }, []);
    useEffect(() => {
      return () => {
        if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
      };
    }, []);
    const updatePadding = useCallback(() => {
      if (!actionsRef.current || !fieldRef.current) return;
      const w = actionsRef.current.offsetWidth;
      const pad = w > 0 ? w + 4 : 0;
      fieldRef.current.style.setProperty("--o9ds-combobox-pad-r", `${pad}px`);
    }, []);
    useEffect(() => {
      updatePadding();
    });
    useEffect(() => {
      const el = actionsRef.current;
      if (!el) return;
      const obs = new ResizeObserver(updatePadding);
      obs.observe(el);
      return () => obs.disconnect();
    }, [updatePadding]);
    const findNextEnabled = useCallback(
      (from, direction) => {
        const len = flatItems.length;
        if (len === 0) return -1;
        let idx = from + direction;
        const isVisited = /* @__PURE__ */ new Set();
        while (idx >= 0 && idx < len && !isVisited.has(idx)) {
          isVisited.add(idx);
          if (!flatItems[idx].isDisabled) return idx;
          idx += direction;
        }
        return -1;
      },
      [flatItems]
    );
    const handleKeyDown = useCallback(
      (e) => {
        if (isDisabled || isLoading) return;
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            if (!isOpen) {
              handleOpen();
            } else {
              keyboardActiveRef.current = true;
              const next = findNextEnabled(activeIndex, 1);
              if (next >= 0) setActiveIndex(next);
            }
            break;
          case "ArrowUp":
            e.preventDefault();
            if (!isOpen) {
              handleOpen();
            } else {
              keyboardActiveRef.current = true;
              const prev = findNextEnabled(activeIndex, -1);
              if (prev >= 0) setActiveIndex(prev);
            }
            break;
          case "Enter":
            if (isOpen && activeIndex >= 0 && activeIndex < flatItems.length) {
              e.preventDefault();
              const item = flatItems[activeIndex];
              if (!item.isDisabled) {
                handleSelect(item, activeIndex);
              }
            }
            break;
          case "Escape":
            e.preventDefault();
            if (isOpen) {
              handleClose();
            } else {
              if (!isInputControlled) {
                setInternalInputValue("");
              }
              if (!isValueControlled) {
                setInternalValue(null);
              }
            }
            break;
          case "Tab":
            if (isOpen) {
              e.preventDefault();
              if (activeIndex >= 0 && activeIndex < flatItems.length) {
                const item = flatItems[activeIndex];
                if (!item.isDisabled) {
                  handleSelect(item, activeIndex);
                  return;
                }
              }
              handleClose();
            }
            break;
        }
      },
      [
        isDisabled,
        isLoading,
        isOpen,
        activeIndex,
        flatItems,
        handleOpen,
        handleClose,
        handleSelect,
        findNextEnabled,
        isInputControlled,
        isValueControlled
      ]
    );
    useEffect(() => {
      var _a;
      if (!isOpen || activeIndex < 0) return;
      const optEl = (_a = panelRef.current) == null ? void 0 : _a.querySelector(
        `[data-index="${activeIndex}"]`
      );
      if (optEl && typeof optEl.scrollIntoView === "function") {
        optEl.scrollIntoView({ block: "nearest" });
      }
    }, [isOpen, activeIndex]);
    const hasValue = currentValue != null || currentInputValue.length > 0;
    const classes = [
      "o9ds-combobox",
      `o9ds-combobox--${size}`,
      isFullWidth && "o9ds-combobox--full-width",
      isClearable && "o9ds-combobox--clearable",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      isInvalid && "has-error",
      isInvalid && isInlineError && "error-inline",
      isOpen && "open",
      hasValue && "has-value",
      className
    ].filter(Boolean).join(" ");
    const rootStyle = (() => {
      const effectiveWidth = isFullWidth ? "100%" : width;
      if (!effectiveWidth) return void 0;
      return { "--o9ds-form-input-width": effectiveWidth };
    })();
    const pos = posRef.current;
    const panelStyle = {
      ...pos ? {
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        ...pos.width ? { width: pos.width, minWidth: pos.width } : {},
        ...pos.maxHeight ? { maxHeight: `${pos.maxHeight}px` } : {}
      } : { visibility: "hidden" },
      ...maxHeight ? {
        "--o9ds-combobox-panel-max-height": maxHeight
      } : {},
      ...isLoading ? { pointerEvents: "none" } : {}
    };
    const renderOption = (item, flatIndex) => {
      const isSelected = item.value === currentValue;
      const isHighlighted = flatIndex === activeIndex;
      const optClasses = [
        "o9ds-combobox__opt",
        item.isDisabled && "is-disabled",
        isHighlighted && keyboardActiveRef.current && "focused",
        isSelected && "active"
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ jsxs(
        "div",
        {
          id: `${comboId}-opt-${flatIndex}`,
          className: optClasses,
          role: "option",
          "aria-selected": isSelected,
          "aria-disabled": item.isDisabled || void 0,
          "data-index": flatIndex,
          onClick: () => handleItemClick(item, flatIndex),
          onMouseEnter: () => {
            if (!item.isDisabled) {
              keyboardActiveRef.current = false;
              setActiveIndex(flatIndex);
            }
          },
          onMouseDown: (e) => {
            e.preventDefault();
          },
          children: [
            item.icon && /* @__PURE__ */ jsx(
              "span",
              {
                className: `o9ds-combobox__opt__ico o9con o9con-${item.icon}`,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "o9ds-combobox__opt__txt", children: /* @__PURE__ */ jsx("span", { className: "o9ds-combobox__opt__lbl", children: item.label }) })
          ]
        },
        item.id
      );
    };
    const renderContent = () => {
      if (flatItems.length === 0) {
        return /* @__PURE__ */ jsx("div", { className: "o9ds-combobox__empty", role: "status", children: "No results" });
      }
      if (isGrouped(filteredItems)) {
        let flatIndex = 0;
        return filteredItems.map(
          (group, groupIdx) => /* @__PURE__ */ jsxs("div", { role: "group", "aria-label": group.label, children: [
            groupIdx > 0 && hasGroupDividers && /* @__PURE__ */ jsx("hr", { className: "o9ds-combobox__divider", role: "separator" }),
            group.label && /* @__PURE__ */ jsx("div", { className: "o9ds-combobox__hdr", children: group.label }),
            group.items.map((item) => {
              const node = renderOption(item, flatIndex);
              flatIndex++;
              return node;
            })
          ] }, group.id)
        );
      }
      return filteredItems.map(
        (item, i) => renderOption(item, i)
      );
    };
    const panelClasses = [
      "o9ds-combobox__panel",
      isOpen && "open"
    ].filter(Boolean).join(" ");
    const panel = isOpen ? createPortal(
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `o9ds-combobox o9ds-combobox--${size}`,
          style: { display: "contents" },
          children: /* @__PURE__ */ jsx(
            "div",
            {
              ref: panelRef,
              id: panelId,
              className: panelClasses,
              role: "listbox",
              "aria-busy": isLoading || void 0,
              style: Object.keys(panelStyle).length > 0 ? panelStyle : void 0,
              children: /* @__PURE__ */ jsx("div", { className: "o9ds-combobox__scroll", children: renderContent() })
            }
          )
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ jsxs("div", { ref: rootRef, className: classes, style: rootStyle, children: [
      label && /* @__PURE__ */ jsx(
        FormLabel,
        {
          htmlFor: inputId,
          id: labelId,
          size: size === "sm" ? "sm" : "lg",
          isRequired,
          isDisabled,
          className: "o9ds-combobox__lbl",
          children: label
        }
      ),
      /* @__PURE__ */ jsxs("div", { ref: fieldRef, className: "o9ds-combobox__field", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            id: inputId,
            type: "text",
            className: "o9ds-combobox__input",
            role: "combobox",
            value: currentInputValue,
            placeholder,
            disabled: isDisabled,
            readOnly: isReadOnly,
            autoComplete: "off",
            "aria-haspopup": "listbox",
            "aria-expanded": isOpen,
            "aria-controls": panelId,
            "aria-activedescendant": isOpen && activeIndex >= 0 ? `${comboId}-opt-${activeIndex}` : void 0,
            "aria-autocomplete": "list",
            "aria-required": isRequired || void 0,
            "aria-invalid": isInvalid || void 0,
            "aria-busy": isLoading || void 0,
            "aria-labelledby": label ? labelId : void 0,
            "aria-describedby": isInvalid && errorMsg ? errorId : void 0,
            onChange: handleInputChange,
            onKeyDown: handleKeyDown,
            onBlur: handleInputBlur,
            onFocus: handleInputFocus
          }
        ),
        /* @__PURE__ */ jsxs("div", { ref: actionsRef, className: "o9ds-combobox__actions", children: [
          isClearable && hasValue && !isDisabled && !isReadOnly && !isLoading && /* @__PURE__ */ jsx(
            O9IconButton,
            {
              size: "sm",
              variant: "tertiary",
              icon: "close",
              tooltip: "Clear",
              "aria-label": "Clear",
              tabIndex: -1,
              onClick: handleClear,
              className: "o9ds-combobox__clear"
            }
          ),
          isClearable && hasValue && !isDisabled && !isReadOnly && !isLoading && /* @__PURE__ */ jsx("span", { className: "o9ds-combobox__sep" }),
          isInlineError && isInvalid && /* @__PURE__ */ jsx("span", { ref: errIcoRef, className: "o9ds-combobox__err-ico", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsx(
          O9IconButton,
          {
            size: "sm",
            variant: "tertiary",
            icon: "angle-down",
            tooltip: "Toggle menu",
            "aria-label": "Toggle menu",
            tabIndex: -1,
            onClick: handleChevronClick,
            isDisabled,
            className: "o9ds-combobox__ico"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "o9ds-combobox__border" })
      ] }),
      isInvalid && !isInlineError && errorMsg && /* @__PURE__ */ jsxs(
        "div",
        {
          className: "o9ds-inline-alert o9ds-inline-alert--error",
          id: errorId,
          role: "alert",
          children: [
            /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__ico", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__msg", children: errorMsg })
          ]
        }
      ),
      panel
    ] });
  }
);
export {
  O9Combobox,
  O9Combobox as default
};
//# sourceMappingURL=index35.js.map
