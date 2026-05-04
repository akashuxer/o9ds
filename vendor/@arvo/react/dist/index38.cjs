"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const core = require("@arvo/core");
const useListNavigation = require("./index42.cjs");
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
const ArvoListbox = react.forwardRef(
  function ArvoListbox2({
    items,
    value,
    defaultValue,
    label,
    isMultiple = false,
    search,
    isLoading = false,
    isDisabled = false,
    isRequired = false,
    emptyMessage = "No options",
    hasGroupDividers = true,
    size = "md",
    onChange,
    onHighlight,
    onFilter,
    className
  }, ref) {
    const uid = react.useId();
    const listId = `arvo-listbox-${uid}`;
    const labelId = `${listId}-lbl`;
    const getOptionId = (index) => `${listId}-opt-${index}`;
    const searchCfg = react.useMemo(
      () => menuSearch.normalizeSearch(search, { shortcut: "/" }),
      [search]
    );
    const listRef = react.useRef(null);
    const searchWrapperRef = react.useRef(null);
    const isValueControlled = value !== void 0;
    const [internalValue, setInternalValue] = react.useState(
      () => defaultValue ?? (isMultiple ? [] : void 0)
    );
    const currentValue = isValueControlled ? value : internalValue;
    const isSelected = react.useCallback(
      (optionValue) => {
        if (isMultiple) {
          const arr = Array.isArray(currentValue) ? currentValue : [];
          return arr.includes(optionValue);
        }
        return currentValue === optionValue;
      },
      [currentValue, isMultiple]
    );
    const [query, setQuery] = react.useState("");
    const filteredItems = react.useMemo(() => {
      if (!searchCfg || !query) return items;
      if (isGrouped(items)) {
        return core.filterGroups(items, { query });
      }
      return core.filterItems(items, { query });
    }, [items, searchCfg, query]);
    const flatOptions = react.useMemo(
      () => flattenItems(filteredItems),
      [filteredItems]
    );
    const totalOptionCount = react.useMemo(() => flattenItems(items).length, [items]);
    react.useEffect(() => {
      var _a;
      if (searchCfg && query) {
        (_a = searchCfg.onFilter) == null ? void 0 : _a.call(searchCfg, query, flatOptions.length);
        onFilter == null ? void 0 : onFilter(query, flatOptions.length);
      }
    }, [searchCfg, query, flatOptions.length, onFilter]);
    const handleSelect = react.useCallback(
      (option) => {
        if (option.isDisabled) return;
        if (isMultiple) {
          const arr = Array.isArray(currentValue) ? [...currentValue] : [];
          const idx = arr.indexOf(option.value);
          if (idx >= 0) {
            arr.splice(idx, 1);
          } else {
            arr.push(option.value);
          }
          if (!isValueControlled) setInternalValue(arr);
          onChange == null ? void 0 : onChange(arr, option);
        } else {
          if (!isValueControlled) setInternalValue(option.value);
          onChange == null ? void 0 : onChange(option.value, option);
        }
      },
      [currentValue, isMultiple, isValueControlled, onChange]
    );
    const scrollToIndex = react.useCallback(
      (index) => {
        var _a;
        const optionEl = (_a = listRef.current) == null ? void 0 : _a.querySelector(
          `[id="${getOptionId(index)}"]`
        );
        optionEl == null ? void 0 : optionEl.scrollIntoView({ block: "nearest" });
      },
      [getOptionId]
    );
    const handleItemSelect = react.useCallback(
      (item, _index) => {
        handleSelect(item);
      },
      [handleSelect]
    );
    const { activeIndex, setActiveIndex, handleKeyDown: navKeyDown } = useListNavigation.useListNavigation({
      items: flatOptions,
      onSelect: handleItemSelect,
      wrap: true,
      enabled: !isDisabled && !isLoading,
      scrollToIndex
    });
    react.useEffect(() => {
      if (activeIndex >= 0 && activeIndex < flatOptions.length) {
        const option = flatOptions[activeIndex];
        onHighlight == null ? void 0 : onHighlight(option.value, option);
      }
    }, [activeIndex, flatOptions, onHighlight]);
    react.useEffect(() => {
      const firstEnabled = flatOptions.findIndex((item) => !item.isDisabled);
      setActiveIndex(firstEnabled >= 0 ? firstEnabled : 0);
    }, [flatOptions, setActiveIndex]);
    const handleKeyDown = react.useCallback(
      (e) => {
        if (isDisabled || isLoading) return;
        navKeyDown(e);
      },
      [isDisabled, isLoading, navKeyDown]
    );
    const handleFilterSearch = react.useCallback(
      (value2) => {
        setQuery(value2);
        setActiveIndex(0);
      },
      [setActiveIndex]
    );
    const handleFilterClear = react.useCallback(() => {
      var _a;
      setQuery("");
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
            if (activeIndex >= 0 && activeIndex < flatOptions.length) {
              const item = flatOptions[activeIndex];
              if (!item.isDisabled) handleSelect(item);
            }
            break;
        }
      },
      [navKeyDown, activeIndex, flatOptions, handleSelect]
    );
    const handleItemClick = react.useCallback(
      (option, flatIndex) => {
        if (option.isDisabled || isLoading) return;
        setActiveIndex(flatIndex);
        handleSelect(option);
      },
      [isLoading, setActiveIndex, handleSelect]
    );
    const classes = [
      "arvo-listbox",
      `arvo-listbox--${size}`,
      isMultiple && "arvo-listbox--multiple",
      searchCfg && "arvo-listbox--searchable",
      isLoading && "loading",
      isDisabled && "is-disabled",
      className
    ].filter(Boolean).join(" ");
    const renderOption = (item, flatIndex) => {
      const isItemSelected = isSelected(item.value);
      const isHighlighted = flatIndex === activeIndex;
      const optClasses = [
        "arvo-listbox__opt",
        item.isDisabled && "is-disabled",
        isHighlighted && "highlighted",
        isItemSelected && "active"
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          id: getOptionId(flatIndex),
          className: optClasses,
          role: "option",
          "aria-selected": isItemSelected,
          "aria-disabled": item.isDisabled || void 0,
          onClick: () => handleItemClick(item, flatIndex),
          onMouseEnter: () => {
            if (!item.isDisabled) setActiveIndex(flatIndex);
          },
          children: [
            item.icon && /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: `arvo-listbox__opt__ico o9con o9con-${item.icon}`,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-listbox__opt__lbl", children: item.label })
          ]
        },
        item.id
      );
    };
    const renderContent = () => {
      if (isLoading) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-listbox__skeleton", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-listbox__skeleton-row", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-listbox__skeleton-icon" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "arvo-listbox__skeleton-text",
              style: { width: `${60 + i * 7 % 30}%` }
            }
          )
        ] }, i)) });
      }
      if (flatOptions.length === 0) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-listbox__empty", role: "status", children: emptyMessage });
      }
      if (isGrouped(filteredItems)) {
        let flatIndex = 0;
        return filteredItems.map(
          (group, groupIdx) => {
            const groupHdrId = `${listId}-grp-${groupIdx}`;
            return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
              groupIdx > 0 && hasGroupDividers && /* @__PURE__ */ jsxRuntime.jsx("hr", { className: "arvo-listbox__divider", role: "separator" }),
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  role: "group",
                  "aria-labelledby": group.label ? groupHdrId : void 0,
                  className: "arvo-listbox__grp",
                  children: [
                    group.label && /* @__PURE__ */ jsxRuntime.jsx("div", { id: groupHdrId, className: "arvo-listbox__grp-hdr", children: group.label }),
                    group.items.map((item) => {
                      const node = renderOption(item, flatIndex);
                      flatIndex++;
                      return node;
                    })
                  ]
                }
              )
            ] }, group.id);
          }
        );
      }
      return filteredItems.map(
        (item, i) => renderOption(item, i)
      );
    };
    const highlightedOptionId = activeIndex >= 0 && activeIndex < flatOptions.length ? getOptionId(activeIndex) : void 0;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: classes, children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(
        FormLabel.FormLabel,
        {
          htmlFor: listId,
          id: labelId,
          size: size === "sm" ? "sm" : "lg",
          isRequired,
          isDisabled,
          className: "arvo-listbox__lbl",
          children: label
        }
      ),
      searchCfg && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref: searchWrapperRef,
          className: [
            "arvo-listbox__search",
            searchCfg.className
          ].filter(Boolean).join(" "),
          onKeyDown: handleSearchWrapperKeyDown,
          children: /* @__PURE__ */ jsxRuntime.jsx(
            Search.default,
            {
              variant: "filter",
              value: query,
              placeholder: searchCfg.placeholder,
              searchMode: searchCfg.searchMode,
              minChars: searchCfg.minChars,
              isClearable: searchCfg.isClearable,
              shortcut: searchCfg.shortcut,
              errorMsg: searchCfg.errorMsg,
              errorDisplay: "tooltip",
              counter: searchCfg.counter && query ? { current: flatOptions.length, total: totalOptionCount } : null,
              onSearch: handleFilterSearch,
              onClear: handleFilterClear,
              isDisabled,
              "aria-label": "Filter options"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref: listRef,
          id: listId,
          className: "arvo-listbox__list",
          role: "listbox",
          tabIndex: isDisabled ? -1 : 0,
          "aria-multiselectable": isMultiple || void 0,
          "aria-activedescendant": highlightedOptionId,
          "aria-busy": isLoading || void 0,
          "aria-labelledby": label ? labelId : void 0,
          "aria-disabled": isDisabled || void 0,
          "aria-required": isRequired || void 0,
          onKeyDown: handleKeyDown,
          children: renderContent()
        }
      )
    ] });
  }
);
exports.ArvoListbox = ArvoListbox;
//# sourceMappingURL=index38.cjs.map
