import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useId, useMemo, useRef, useState, useCallback, useEffect } from "react";
import { filterGroups, filterItems } from "@arvo/core";
import { useListNavigation } from "./index42.js";
import { FormLabel } from "./index43.js";
import ArvoSearch from "./index32.js";
import { normalizeSearch } from "./index45.js";
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
const ArvoListbox = forwardRef(
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
    const uid = useId();
    const listId = `arvo-listbox-${uid}`;
    const labelId = `${listId}-lbl`;
    const getOptionId = (index) => `${listId}-opt-${index}`;
    const searchCfg = useMemo(
      () => normalizeSearch(search, { shortcut: "/" }),
      [search]
    );
    const listRef = useRef(null);
    const searchWrapperRef = useRef(null);
    const isValueControlled = value !== void 0;
    const [internalValue, setInternalValue] = useState(
      () => defaultValue ?? (isMultiple ? [] : void 0)
    );
    const currentValue = isValueControlled ? value : internalValue;
    const isSelected = useCallback(
      (optionValue) => {
        if (isMultiple) {
          const arr = Array.isArray(currentValue) ? currentValue : [];
          return arr.includes(optionValue);
        }
        return currentValue === optionValue;
      },
      [currentValue, isMultiple]
    );
    const [query, setQuery] = useState("");
    const filteredItems = useMemo(() => {
      if (!searchCfg || !query) return items;
      if (isGrouped(items)) {
        return filterGroups(items, { query });
      }
      return filterItems(items, { query });
    }, [items, searchCfg, query]);
    const flatOptions = useMemo(
      () => flattenItems(filteredItems),
      [filteredItems]
    );
    const totalOptionCount = useMemo(() => flattenItems(items).length, [items]);
    useEffect(() => {
      var _a;
      if (searchCfg && query) {
        (_a = searchCfg.onFilter) == null ? void 0 : _a.call(searchCfg, query, flatOptions.length);
        onFilter == null ? void 0 : onFilter(query, flatOptions.length);
      }
    }, [searchCfg, query, flatOptions.length, onFilter]);
    const handleSelect = useCallback(
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
    const scrollToIndex = useCallback(
      (index) => {
        var _a;
        const optionEl = (_a = listRef.current) == null ? void 0 : _a.querySelector(
          `[id="${getOptionId(index)}"]`
        );
        optionEl == null ? void 0 : optionEl.scrollIntoView({ block: "nearest" });
      },
      [getOptionId]
    );
    const handleItemSelect = useCallback(
      (item, _index) => {
        handleSelect(item);
      },
      [handleSelect]
    );
    const { activeIndex, setActiveIndex, handleKeyDown: navKeyDown } = useListNavigation({
      items: flatOptions,
      onSelect: handleItemSelect,
      wrap: true,
      enabled: !isDisabled && !isLoading,
      scrollToIndex
    });
    useEffect(() => {
      if (activeIndex >= 0 && activeIndex < flatOptions.length) {
        const option = flatOptions[activeIndex];
        onHighlight == null ? void 0 : onHighlight(option.value, option);
      }
    }, [activeIndex, flatOptions, onHighlight]);
    useEffect(() => {
      const firstEnabled = flatOptions.findIndex((item) => !item.isDisabled);
      setActiveIndex(firstEnabled >= 0 ? firstEnabled : 0);
    }, [flatOptions, setActiveIndex]);
    const handleKeyDown = useCallback(
      (e) => {
        if (isDisabled || isLoading) return;
        navKeyDown(e);
      },
      [isDisabled, isLoading, navKeyDown]
    );
    const handleFilterSearch = useCallback(
      (value2) => {
        setQuery(value2);
        setActiveIndex(0);
      },
      [setActiveIndex]
    );
    const handleFilterClear = useCallback(() => {
      var _a;
      setQuery("");
      setActiveIndex(0);
      (_a = searchCfg == null ? void 0 : searchCfg.onClear) == null ? void 0 : _a.call(searchCfg);
    }, [setActiveIndex, searchCfg]);
    const handleSearchWrapperKeyDown = useCallback(
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
    const handleItemClick = useCallback(
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
      return /* @__PURE__ */ jsxs(
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
            item.icon && /* @__PURE__ */ jsx(
              "span",
              {
                className: `arvo-listbox__opt__ico o9con o9con-${item.icon}`,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "arvo-listbox__opt__lbl", children: item.label })
          ]
        },
        item.id
      );
    };
    const renderContent = () => {
      if (isLoading) {
        return /* @__PURE__ */ jsx("div", { className: "arvo-listbox__skeleton", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxs("div", { className: "arvo-listbox__skeleton-row", children: [
          /* @__PURE__ */ jsx("div", { className: "arvo-listbox__skeleton-icon" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "arvo-listbox__skeleton-text",
              style: { width: `${60 + i * 7 % 30}%` }
            }
          )
        ] }, i)) });
      }
      if (flatOptions.length === 0) {
        return /* @__PURE__ */ jsx("div", { className: "arvo-listbox__empty", role: "status", children: emptyMessage });
      }
      if (isGrouped(filteredItems)) {
        let flatIndex = 0;
        return filteredItems.map(
          (group, groupIdx) => {
            const groupHdrId = `${listId}-grp-${groupIdx}`;
            return /* @__PURE__ */ jsxs("div", { children: [
              groupIdx > 0 && hasGroupDividers && /* @__PURE__ */ jsx("hr", { className: "arvo-listbox__divider", role: "separator" }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  role: "group",
                  "aria-labelledby": group.label ? groupHdrId : void 0,
                  className: "arvo-listbox__grp",
                  children: [
                    group.label && /* @__PURE__ */ jsx("div", { id: groupHdrId, className: "arvo-listbox__grp-hdr", children: group.label }),
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
    return /* @__PURE__ */ jsxs("div", { ref, className: classes, children: [
      label && /* @__PURE__ */ jsx(
        FormLabel,
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
      searchCfg && /* @__PURE__ */ jsx(
        "div",
        {
          ref: searchWrapperRef,
          className: [
            "arvo-listbox__search",
            searchCfg.className
          ].filter(Boolean).join(" "),
          onKeyDown: handleSearchWrapperKeyDown,
          children: /* @__PURE__ */ jsx(
            ArvoSearch,
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
      /* @__PURE__ */ jsx(
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
export {
  ArvoListbox
};
//# sourceMappingURL=index38.js.map
