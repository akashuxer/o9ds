"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactDom = require("react-dom");
const core = require("@arvo/core");
const useOverlay = require("./index6.cjs");
const useListNavigation = require("./index42.cjs");
const useTooltip = require("./index10.cjs");
const FormLabel = require("./index43.cjs");
const Search = require("./index32.cjs");
const menuSearch = require("./index45.cjs");
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
const ArvoSelect = react.forwardRef(
  function ArvoSelect2({
    items,
    value,
    defaultValue,
    placeholder,
    label,
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    errorMsg,
    errorDisplay = "inline",
    size = "lg",
    search,
    isLoading = false,
    isReadOnly = false,
    width,
    isFullWidth = false,
    placement = "bottom-start",
    maxHeight,
    hasGroupDividers = true,
    closeOnSelect = true,
    isOpen: openProp,
    defaultOpen = false,
    onChange,
    onOpen,
    onClose,
    onOpenChange,
    className
  }, ref) {
    const uid = react.useId();
    const selId = `arvo-sel-${uid}`;
    const panelId = `${selId}-panel`;
    const labelId = `${selId}-lbl`;
    const inputId = `${selId}-input`;
    const errorId = `${selId}-err`;
    const searchCfg = react.useMemo(
      () => menuSearch.normalizeSearch(search),
      [search]
    );
    const rootRef = react.useRef(null);
    const fieldRef = react.useRef(null);
    const triggerRef = react.useRef(null);
    const panelRef = react.useRef(null);
    const searchWrapperRef = react.useRef(null);
    const errIcoRef = react.useRef(null);
    react.useImperativeHandle(ref, () => rootRef.current, []);
    const showTooltipIcon = isInvalid && errorDisplay === "tooltip";
    const showInlineAlert = isInvalid && errorDisplay === "inline";
    useTooltip.useTooltip({
      triggerRef: errIcoRef,
      tooltip: showTooltipIcon && errorMsg ? errorMsg : void 0
    });
    const isControlled = openProp !== void 0;
    const [internalOpen, setInternalOpen] = react.useState(defaultOpen);
    const isOpen = isControlled ? openProp : internalOpen;
    const setOpen = react.useCallback(
      (next) => {
        if (!isControlled) setInternalOpen(next);
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [isControlled, onOpenChange]
    );
    const isValueControlled = value !== void 0;
    const [internalValue, setInternalValue] = react.useState(
      defaultValue ?? null
    );
    const currentValue = isValueControlled ? value : internalValue;
    const [filterQuery, setFilterQuery] = react.useState("");
    const filteredItems = react.useMemo(() => {
      if (!searchCfg || !filterQuery) return items;
      if (isGrouped(items)) {
        return core.filterGroups(items, { query: filterQuery });
      }
      return core.filterItems(items, { query: filterQuery });
    }, [items, searchCfg, filterQuery]);
    const flatItems = react.useMemo(
      () => flattenItems(filteredItems),
      [filteredItems]
    );
    const totalItemCount = react.useMemo(() => flattenItems(items).length, [items]);
    react.useEffect(() => {
      var _a;
      if (searchCfg && filterQuery) {
        (_a = searchCfg.onFilter) == null ? void 0 : _a.call(searchCfg, filterQuery, flatItems.length);
      }
    }, [searchCfg, filterQuery, flatItems.length]);
    const selectedItem = react.useMemo(() => {
      if (currentValue == null) return null;
      const allFlat = flattenItems(items);
      return allFlat.find((item) => item.value === currentValue) ?? null;
    }, [currentValue, items]);
    const overlay = useOverlay.useOverlay();
    const handleClose = react.useCallback(() => {
      var _a, _b;
      if (!isOpen) return;
      if ((onClose == null ? void 0 : onClose()) === false) return;
      setOpen(false);
      setFilterQuery("");
      overlay.close(selId);
      (_a = triggerRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
      (_b = rootRef.current) == null ? void 0 : _b.dispatchEvent(
        new CustomEvent("sel:close", { bubbles: true, cancelable: true })
      );
    }, [isOpen, onClose, setOpen, overlay, selId]);
    const handleOpen = react.useCallback(() => {
      var _a;
      if (isOpen || isDisabled || isLoading || isReadOnly) return;
      if ((onOpen == null ? void 0 : onOpen()) === false) return;
      setOpen(true);
      (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("sel:open", { bubbles: true, cancelable: true })
      );
    }, [isOpen, isDisabled, isLoading, isReadOnly, onOpen, setOpen]);
    const toggleOpen = react.useCallback(() => {
      if (isOpen) handleClose();
      else handleOpen();
    }, [isOpen, handleOpen, handleClose]);
    const handlePlaceholderSelect = react.useCallback(() => {
      var _a;
      const result = onChange == null ? void 0 : onChange(null, -1);
      if (!isValueControlled) {
        setInternalValue(null);
      }
      (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("sel:change", {
          bubbles: true,
          cancelable: true,
          detail: { item: null, index: -1 }
        })
      );
      if (result !== false && closeOnSelect) {
        handleClose();
      }
    }, [onChange, isValueControlled, closeOnSelect, handleClose]);
    const handleSelect = react.useCallback(
      (item, index) => {
        var _a;
        if (item.isDisabled) return;
        const result = onChange == null ? void 0 : onChange(item, index);
        if (!isValueControlled) {
          setInternalValue(item.value);
        }
        (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent("sel:change", {
            bubbles: true,
            cancelable: true,
            detail: { item, index }
          })
        );
        if (result !== false && closeOnSelect) {
          handleClose();
        }
      },
      [onChange, isValueControlled, closeOnSelect, handleClose]
    );
    const hasPlaceholder = !!placeholder;
    const effectiveOffset = hasPlaceholder ? 1 : 0;
    const keyboardActiveRef = react.useRef(false);
    const handleItemSelect = react.useCallback(
      (item, index) => {
        if (hasPlaceholder && index === 0) {
          handlePlaceholderSelect();
          return;
        }
        const realIndex = index - effectiveOffset;
        handleSelect(flatItems[realIndex], realIndex);
      },
      [handleSelect, handlePlaceholderSelect, hasPlaceholder, effectiveOffset, flatItems]
    );
    const navItems = react.useMemo(() => {
      if (!hasPlaceholder) return flatItems;
      const placeholderItem = { id: "__placeholder__", label: placeholder };
      return [placeholderItem, ...flatItems];
    }, [hasPlaceholder, placeholder, flatItems]);
    const scrollToIndex = react.useCallback(
      (index) => {
        var _a;
        keyboardActiveRef.current = true;
        const el = (_a = panelRef.current) == null ? void 0 : _a.querySelector(
          `[data-index="${index}"]`
        );
        if (el) {
          el.scrollIntoView({ block: "nearest" });
          el.focus({ preventScroll: true });
        }
      },
      []
    );
    const { activeIndex, setActiveIndex, handleKeyDown: navKeyDown } = useListNavigation.useListNavigation({
      items: navItems,
      onSelect: handleItemSelect,
      onEscape: handleClose,
      wrap: true,
      enabled: isOpen,
      scrollToIndex
    });
    react.useEffect(() => {
      if (isOpen) {
        keyboardActiveRef.current = false;
        const firstEnabled = navItems.findIndex((item) => !item.isDisabled);
        setActiveIndex(firstEnabled >= 0 ? firstEnabled : 0);
      }
    }, [isOpen, navItems, setActiveIndex]);
    const handleItemClick = react.useCallback(
      (item, dataIndex) => {
        if (item.isDisabled || isLoading) return;
        setActiveIndex(dataIndex);
        const realIndex = dataIndex - effectiveOffset;
        handleSelect(item, realIndex);
      },
      [isLoading, setActiveIndex, handleSelect, effectiveOffset]
    );
    const handleFieldClick = react.useCallback(() => {
      if (isDisabled || isLoading || isReadOnly) return;
      toggleOpen();
    }, [isDisabled, isLoading, isReadOnly, toggleOpen]);
    react.useEffect(() => {
      if (!isOpen || !panelRef.current) return;
      overlay.open({
        id: selId,
        type: "dropdown",
        element: panelRef.current,
        triggerElement: triggerRef.current ?? void 0,
        priority: 20,
        config: { autoCloseOnOutsideClick: true },
        onClose: handleClose
      });
      return () => {
        overlay.close(selId);
      };
    }, [isOpen]);
    const posRef = react.useRef(null);
    const posWatcherRef = react.useRef(null);
    react.useLayoutEffect(() => {
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
      const pos2 = core.computePosition(anchor, float, opts);
      posRef.current = pos2;
      applyPosition(pos2);
      float.style.visibility = "";
      const watcher = core.createPositionWatcher(anchor, float, opts, (result) => {
        posRef.current = result;
        applyPosition(result);
      });
      posWatcherRef.current = watcher;
      return () => {
        watcher.destroy();
        posWatcherRef.current = null;
      };
    }, [isOpen, placement]);
    react.useEffect(() => {
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
    react.useEffect(() => {
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
    react.useEffect(() => {
      if (!isOpen || !searchCfg) return;
      requestAnimationFrame(() => {
        var _a;
        const input = (_a = searchWrapperRef.current) == null ? void 0 : _a.querySelector("input");
        input == null ? void 0 : input.focus();
      });
    }, [isOpen, searchCfg]);
    const handleTriggerKeyDown = react.useCallback(
      (e) => {
        var _a;
        if (isDisabled || isLoading) return;
        if (!isOpen) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
            return;
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            handleOpen();
            return;
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            handleOpen();
            return;
          }
          if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            const allFlat = flattenItems(items);
            const char = e.key.toLowerCase();
            const currentIdx = currentValue != null ? allFlat.findIndex((item) => item.value === currentValue) : -1;
            for (let i = 1; i <= allFlat.length; i++) {
              const idx = (currentIdx + i) % allFlat.length;
              const item = allFlat[idx];
              if (!item.isDisabled && item.label.toLowerCase().startsWith(char)) {
                if (!isValueControlled) setInternalValue(item.value);
                onChange == null ? void 0 : onChange(item, idx);
                (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
                  new CustomEvent("sel:change", {
                    bubbles: true,
                    cancelable: true,
                    detail: { item, index: idx }
                  })
                );
                break;
              }
            }
          }
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault();
          if (activeIndex >= 0 && activeIndex < navItems.length) {
            const navItem = navItems[activeIndex];
            if (hasPlaceholder && activeIndex === 0) {
              handlePlaceholderSelect();
              return;
            }
            if (!navItem.isDisabled) {
              const realIndex = activeIndex - effectiveOffset;
              handleSelect(flatItems[realIndex], realIndex);
              return;
            }
          }
          handleClose();
          return;
        }
        navKeyDown(e);
      },
      [
        isDisabled,
        isLoading,
        isOpen,
        items,
        currentValue,
        isValueControlled,
        onChange,
        handleOpen,
        handleClose,
        navKeyDown,
        navItems,
        flatItems,
        activeIndex,
        handleSelect,
        handlePlaceholderSelect,
        hasPlaceholder,
        effectiveOffset
      ]
    );
    const handleFilterSearch = react.useCallback(
      (value2) => {
        setFilterQuery(value2);
        setActiveIndex(0);
      },
      [setActiveIndex]
    );
    const handleFilterClear = react.useCallback(() => {
      var _a;
      setFilterQuery("");
      setActiveIndex(0);
      (_a = searchCfg == null ? void 0 : searchCfg.onClear) == null ? void 0 : _a.call(searchCfg);
    }, [setActiveIndex, searchCfg]);
    const handleSearchWrapperKeyDown = react.useCallback(
      (e) => {
        switch (e.key) {
          case "ArrowDown":
          case "ArrowUp":
          case "Home":
          case "End":
            e.preventDefault();
            navKeyDown(e);
            break;
          case "Enter":
            e.preventDefault();
            if (activeIndex >= 0 && activeIndex < navItems.length) {
              if (hasPlaceholder && activeIndex === 0) {
                handlePlaceholderSelect();
              } else {
                const navItem = navItems[activeIndex];
                if (!navItem.isDisabled) {
                  const realIndex = activeIndex - effectiveOffset;
                  handleSelect(flatItems[realIndex], realIndex);
                }
              }
            }
            break;
          case "Escape":
            if (!filterQuery) {
              e.preventDefault();
              handleClose();
            }
            break;
          case "Tab":
            e.preventDefault();
            if (activeIndex >= 0 && activeIndex < navItems.length) {
              if (hasPlaceholder && activeIndex === 0) {
                handlePlaceholderSelect();
                return;
              }
              const navItem = navItems[activeIndex];
              if (!navItem.isDisabled) {
                const realIndex = activeIndex - effectiveOffset;
                handleSelect(flatItems[realIndex], realIndex);
                return;
              }
            }
            handleClose();
            break;
        }
      },
      [navKeyDown, activeIndex, navItems, flatItems, handleSelect, handleClose, filterQuery, handlePlaceholderSelect, hasPlaceholder, effectiveOffset]
    );
    const classes = [
      "arvo-sel",
      `arvo-sel--${size}`,
      isFullWidth && "arvo-sel--full-width",
      searchCfg && "arvo-sel--filterable",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      isInvalid && "has-error",
      showTooltipIcon && "error-tooltip",
      isOpen && "open",
      currentValue != null && "has-value",
      className
    ].filter(Boolean).join(" ");
    const rootStyle = (() => {
      const effectiveWidth = isFullWidth ? "100%" : width;
      if (!effectiveWidth) return void 0;
      return { "--arvo-form-input-width": effectiveWidth };
    })();
    const pos = posRef.current;
    const panelStyle = {
      ...pos ? {
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        ...pos.width ? { width: pos.width, minWidth: pos.width } : {},
        ...pos.maxHeight ? { maxHeight: `${pos.maxHeight}px` } : {}
      } : { visibility: "hidden" },
      ...maxHeight ? {
        "--arvo-sel-panel-max-height": maxHeight
      } : {},
      ...isLoading ? { pointerEvents: "none" } : {}
    };
    const renderOption = (item, dataIndex) => {
      const isSelected = item.value === currentValue;
      const isHighlighted = dataIndex === activeIndex;
      const optClasses = [
        "arvo-sel__opt",
        item.isDisabled && "is-disabled",
        isHighlighted && keyboardActiveRef.current && "focused",
        isSelected && "active"
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          id: `${selId}-opt-${dataIndex}`,
          className: optClasses,
          role: "option",
          "aria-selected": isSelected,
          "aria-disabled": item.isDisabled || void 0,
          "data-index": dataIndex,
          onClick: () => handleItemClick(item, dataIndex),
          onMouseEnter: () => {
            if (!item.isDisabled) {
              keyboardActiveRef.current = false;
              setActiveIndex(dataIndex);
            }
          },
          children: [
            item.icon && /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: `arvo-sel__opt__ico o9con o9con-${item.icon}`,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-sel__opt__txt", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-sel__opt__lbl", children: item.label }) })
          ]
        },
        item.id
      );
    };
    const renderPlaceholderOption = () => {
      if (!hasPlaceholder) return null;
      const dataIndex = 0;
      const isNoValue = currentValue == null;
      const isHighlighted = dataIndex === activeIndex;
      const optClasses = [
        "arvo-sel__opt",
        "arvo-sel__opt--placeholder",
        isHighlighted && keyboardActiveRef.current && "focused"
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          id: `${selId}-opt-${dataIndex}`,
          className: optClasses,
          role: "option",
          "aria-selected": isNoValue,
          "data-index": dataIndex,
          onClick: () => {
            if (isLoading) return;
            setActiveIndex(dataIndex);
            handlePlaceholderSelect();
          },
          onMouseEnter: () => {
            keyboardActiveRef.current = false;
            setActiveIndex(dataIndex);
          },
          children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-sel__opt__txt", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-sel__opt__lbl", children: placeholder }) })
        },
        "__placeholder__"
      );
    };
    const renderContent = () => {
      if (flatItems.length === 0 && !hasPlaceholder) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-sel__empty", role: "status", children: "No results" });
      }
      const placeholderNode = renderPlaceholderOption();
      if (isGrouped(filteredItems)) {
        let dataIndex = effectiveOffset;
        return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          placeholderNode,
          filteredItems.map(
            (group, groupIdx) => /* @__PURE__ */ jsxRuntime.jsxs("div", { role: "group", "aria-label": group.label, children: [
              groupIdx > 0 && hasGroupDividers && /* @__PURE__ */ jsxRuntime.jsx("hr", { className: "arvo-sel__divider", role: "separator" }),
              group.label && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-sel__hdr", children: group.label }),
              group.items.map((item) => {
                const node = renderOption(item, dataIndex);
                dataIndex++;
                return node;
              })
            ] }, group.id)
          )
        ] });
      }
      return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        placeholderNode,
        filteredItems.map(
          (item, i) => renderOption(item, i + effectiveOffset)
        )
      ] });
    };
    const panelClasses = [
      "arvo-sel__panel",
      isOpen && "open"
    ].filter(Boolean).join(" ");
    const panel = isOpen ? reactDom.createPortal(
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: `arvo-sel arvo-sel--${size}`,
          style: { display: "contents" },
          children: /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              ref: panelRef,
              id: panelId,
              className: panelClasses,
              role: "listbox",
              "aria-busy": isLoading || void 0,
              style: Object.keys(panelStyle).length > 0 ? panelStyle : void 0,
              children: [
                searchCfg && /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    ref: searchWrapperRef,
                    className: [
                      "arvo-sel__search",
                      searchCfg.className
                    ].filter(Boolean).join(" "),
                    onKeyDown: handleSearchWrapperKeyDown,
                    children: /* @__PURE__ */ jsxRuntime.jsx(
                      Search.default,
                      {
                        variant: "filter",
                        value: filterQuery,
                        placeholder: searchCfg.placeholder,
                        searchMode: searchCfg.searchMode,
                        minChars: searchCfg.minChars,
                        isClearable: searchCfg.isClearable,
                        shortcut: searchCfg.shortcut,
                        errorMsg: searchCfg.errorMsg,
                        errorDisplay: "tooltip",
                        counter: searchCfg.counter && filterQuery ? { current: flatItems.length, total: totalItemCount } : null,
                        onSearch: handleFilterSearch,
                        onClear: handleFilterClear,
                        isDisabled,
                        "aria-label": "Filter options"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-sel__scroll", children: renderContent() })
              ]
            }
          )
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: rootRef, className: classes, style: rootStyle, children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(
        FormLabel.FormLabel,
        {
          htmlFor: inputId,
          id: labelId,
          size: size === "sm" ? "sm" : "lg",
          isRequired,
          isDisabled,
          className: "arvo-sel__lbl",
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref: fieldRef,
          className: "arvo-sel__field",
          onClick: handleFieldClick,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                ref: triggerRef,
                id: inputId,
                className: "arvo-sel__input",
                role: "combobox",
                tabIndex: isDisabled ? -1 : 0,
                "aria-haspopup": "listbox",
                "aria-expanded": isOpen,
                "aria-controls": panelId,
                "aria-activedescendant": isOpen && activeIndex >= 0 && !searchCfg ? `${selId}-opt-${activeIndex}` : void 0,
                "aria-required": isRequired || void 0,
                "aria-invalid": isInvalid || void 0,
                "aria-disabled": isDisabled || void 0,
                "aria-busy": isLoading || void 0,
                "aria-labelledby": label ? labelId : void 0,
                "aria-describedby": showInlineAlert && errorMsg ? errorId : void 0,
                onKeyDown: handleTriggerKeyDown,
                children: selectedItem ? selectedItem.label : placeholder ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-sel__placeholder", children: placeholder }) : null
              }
            ),
            showTooltipIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { ref: errIcoRef, className: "arvo-sel__err-ico", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: "arvo-sel__ico o9con o9con-angle-down",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-sel__border" })
          ]
        }
      ),
      showInlineAlert && errorMsg && /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "arvo-inline-alert arvo-inline-alert--error",
          id: errorId,
          role: "alert",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__ico", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__msg", children: errorMsg })
          ]
        }
      ),
      panel
    ] });
  }
);
exports.ArvoSelect = ArvoSelect;
exports.default = ArvoSelect;
//# sourceMappingURL=index33.cjs.map
