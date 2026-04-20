import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useEffect, useMemo, useState, useCallback, useLayoutEffect, useImperativeHandle } from "react";
import { filterGroups, filterItems, createSortableList, createResizeHandle } from "@o9ds/core";
import { O9Popover } from "./index21.js";
import O9Search from "./index32.js";
import O9ButtonGroup from "./index23.js";
import FilterList from "./index45.js";
import { EmptyState } from "./index46.js";
const HPOP_MIN_WIDTH = 280;
const HPOP_DEFAULT_WIDTH = 320;
const HPOP_MAX_WIDTH = 500;
const HPOP_MIN_HEIGHT = 272;
const SKELETON_ROW_COUNT = 12;
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) return items.flatMap((g) => g.items);
  return items;
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function resolveSelection(variant, selectionMode) {
  if (selectionMode) return selectionMode;
  if (variant === "multi") return "multi";
  if (variant === "single") return "single";
  return "multi";
}
function defaultDraft(selection, controlled, defaultValue) {
  const seed = controlled ?? defaultValue ?? null;
  if (selection === "multi") {
    return Array.isArray(seed) ? [...seed] : [];
  }
  if (selection === "single") {
    return typeof seed === "string" ? seed : null;
  }
  return null;
}
function valuesEqual(a, b) {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => v === b[i]);
  }
  return false;
}
const O9HybridPopover = forwardRef(
  function O9HybridPopover2(props, ref) {
    const {
      variant = "multi",
      selectionMode,
      items: itemsProp,
      value: controlledValue,
      defaultValue,
      onChange,
      commitOn = "apply",
      search = { variant: "filter-search", placeholder: "Search" },
      conditional = false,
      hasGlobalSelectAll = false,
      enableReorder = false,
      crossGroupDrag = false,
      onReorder,
      emptyConfig,
      actions,
      isResizable = true,
      width = HPOP_DEFAULT_WIDTH,
      height = null,
      onResize,
      onResizeCommit,
      title,
      hasHeader = true,
      isClosable = true,
      hasBackButton = false,
      onBack,
      headerActions,
      placement = "auto",
      offset = 2,
      closeOnOutside = true,
      isLoading: isLoadingProp = false,
      isOpen: openProp,
      defaultOpen = false,
      onOpenChange,
      onOpen,
      onClose,
      triggerRef,
      renderTrigger,
      isInline = false,
      onApply,
      onCancel,
      onReset,
      className
    } = props;
    const uid = useId();
    const panelId = `o9ds-hpop-${uid}`;
    const isUnimplemented = variant === "boolean" || variant === "conditional" || variant === "custom";
    const lastWarnedVariantRef = useRef(null);
    useEffect(() => {
      if (isUnimplemented && lastWarnedVariantRef.current !== variant) {
        lastWarnedVariantRef.current = variant;
        console.warn(
          `HybridPopover: variant "${variant}" is not yet implemented.`
        );
      }
    }, [variant, isUnimplemented]);
    const selection = useMemo(
      () => resolveSelection(variant, selectionMode),
      [variant, selectionMode]
    );
    const [internalItems, setInternalItems] = useState(itemsProp);
    useEffect(() => {
      setInternalItems(itemsProp);
    }, [itemsProp]);
    const items = internalItems;
    const grouped = isGrouped(items);
    const [internalLoading, setInternalLoading] = useState(isLoadingProp);
    useEffect(() => {
      setInternalLoading(isLoadingProp);
    }, [isLoadingProp]);
    const isLoading = internalLoading;
    const isControlledOpen = openProp !== void 0 && openProp !== null;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = isControlledOpen ? !!openProp : internalOpen;
    const setOpen = useCallback(
      (next) => {
        if (!isControlledOpen) setInternalOpen(next);
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [isControlledOpen, onOpenChange]
    );
    const handleOpen = useCallback(() => {
      if (isOpen) return;
      if ((onOpen == null ? void 0 : onOpen()) === false) return;
      setOpen(true);
    }, [isOpen, onOpen, setOpen]);
    const handleClose = useCallback(() => {
      if (!isOpen) return;
      if ((onClose == null ? void 0 : onClose()) === false) return;
      setOpen(false);
    }, [isOpen, onClose, setOpen]);
    const handleToggle = useCallback(() => {
      if (isOpen) handleClose();
      else handleOpen();
    }, [isOpen, handleOpen, handleClose]);
    const isControlledValue = controlledValue !== void 0;
    const [internalCommitted, setInternalCommitted] = useState(() => defaultDraft(selection, void 0, defaultValue));
    const committed = isControlledValue ? controlledValue : internalCommitted;
    const setCommitted = useCallback(
      (next) => {
        if (!isControlledValue) setInternalCommitted(next);
      },
      [isControlledValue]
    );
    const [draft, setDraft] = useState(
      () => defaultDraft(selection, controlledValue, defaultValue)
    );
    useEffect(() => {
      setDraft(
        defaultDraft(selection, committed, null)
      );
    }, [isOpen, selection]);
    useEffect(() => {
      if (isControlledValue) {
        setDraft(
          defaultDraft(selection, controlledValue, null)
        );
      }
    }, [controlledValue, selection]);
    const searchEnabled = search !== false;
    const searchCfg = useMemo(
      () => searchEnabled ? {
        variant: "filter-search",
        placeholder: "Search",
        ...search
      } : { placeholder: "" },
      [search, searchEnabled]
    );
    const [query, setQuery] = useState("");
    const filteredItems = useMemo(() => {
      if (!searchEnabled || !query) return items;
      if (grouped) {
        return filterGroups(items, {
          query,
          keys: ["label", "secondaryLabel"]
        });
      }
      return filterItems(items, {
        query,
        keys: ["label", "secondaryLabel"]
      });
    }, [items, grouped, query, searchEnabled]);
    const flatFiltered = useMemo(() => flattenItems(filteredItems), [filteredItems]);
    const flatAll = useMemo(() => flattenItems(items), [items]);
    const totalCount = flatAll.length;
    const filteredCount = flatFiltered.length;
    const hasAnyDragHandle = useMemo(() => {
      if (!enableReorder) return false;
      return flatAll.some((i) => i.isDraggable !== false);
    }, [enableReorder, flatAll]);
    const draftAsArray = useCallback(
      () => Array.isArray(draft) ? draft : [],
      [draft]
    );
    const fireOnChange = useCallback(
      (next, meta) => {
        onChange == null ? void 0 : onChange(next, meta);
      },
      [onChange]
    );
    const updateDraft = useCallback(
      (next, meta) => {
        setDraft(next);
        if (commitOn === "change") {
          setCommitted(next);
          fireOnChange(next, meta);
        }
      },
      [commitOn, setCommitted, fireOnChange]
    );
    const handleToggleItem = useCallback(
      (item) => {
        if (item.isDisabled) return;
        if (selection === "none") return;
        if (selection === "multi") {
          const arr = draftAsArray();
          const idx = arr.indexOf(item.id);
          const next = idx === -1 ? [...arr, item.id] : arr.filter((v) => v !== item.id);
          updateDraft(next, { item, action: "toggle" });
        } else {
          const next = draft === item.id ? null : item.id;
          updateDraft(next, { item, action: "toggle" });
        }
      },
      [selection, draft, draftAsArray, updateDraft]
    );
    const handleToggleGlobalSelectAll = useCallback(() => {
      if (selection !== "multi") return;
      const enabled = flatAll.filter((i) => !i.isDisabled).map((i) => i.id);
      if (enabled.length === 0) return;
      const arr = draftAsArray();
      const allSelected = enabled.every((id) => arr.includes(id));
      const next = allSelected ? arr.filter((id) => !enabled.includes(id)) : Array.from(/* @__PURE__ */ new Set([...arr, ...enabled]));
      updateDraft(next, { item: null, action: "select-all" });
    }, [selection, flatAll, draftAsArray, updateDraft]);
    const handleToggleGroupSelectAll = useCallback(
      (group) => {
        if (selection !== "multi") return;
        const enabled = group.items.filter((i) => !i.isDisabled).map((i) => i.id);
        if (enabled.length === 0) return;
        const arr = draftAsArray();
        const allSelected = enabled.every((id) => arr.includes(id));
        const next = allSelected ? arr.filter((id) => !enabled.includes(id)) : Array.from(/* @__PURE__ */ new Set([...arr, ...enabled]));
        updateDraft(next, { item: null, action: "group-select-all" });
      },
      [selection, draftAsArray, updateDraft]
    );
    const handleApply = useCallback(() => {
      const next = draft;
      const result = onApply == null ? void 0 : onApply(next);
      setCommitted(next);
      fireOnChange(next, { item: null, action: "apply" });
      if (result === false) return false;
      handleClose();
      return void 0;
    }, [draft, onApply, setCommitted, fireOnChange, handleClose]);
    const handleCancel = useCallback(() => {
      setDraft(defaultDraft(selection, committed, null));
      setQuery("");
      onCancel == null ? void 0 : onCancel();
      handleClose();
    }, [committed, selection, onCancel, handleClose]);
    const handleReset = useCallback(() => {
      const cleared = selection === "multi" ? [] : null;
      setDraft(cleared);
      setQuery("");
      if (commitOn === "change") {
        setCommitted(cleared);
        fireOnChange(cleared, {
          item: null,
          action: "reset"
        });
      }
      onReset == null ? void 0 : onReset();
    }, [selection, commitOn, setCommitted, fireOnChange, onReset]);
    const builtActions = useMemo(() => {
      if (actions === false) return void 0;
      if (actions) return actions;
      if (isLoading) return void 0;
      const list = [];
      list.push({
        id: "reset",
        label: "Reset",
        variant: "tertiary",
        action: () => {
          handleReset();
          return false;
        }
      });
      list.push({
        id: "cancel",
        label: "Cancel",
        variant: "secondary",
        action: () => {
          handleCancel();
          return false;
        }
      });
      list.push({
        id: "apply",
        label: "Apply",
        variant: "primary",
        action: () => {
          const r = handleApply();
          return r;
        }
      });
      return list;
    }, [actions, isLoading, handleReset, handleCancel, handleApply]);
    const handleSearchInput = useCallback((value) => {
      setQuery(value);
    }, []);
    const handleSearchClear = useCallback(() => {
      setQuery("");
    }, []);
    const conditionalItems = useMemo(
      () => [
        { value: "and", label: "And" },
        { value: "or", label: "Or" }
      ],
      []
    );
    const renderStickyHeader = () => {
      if (isLoading) return null;
      if (!searchEnabled && !(selection === "multi" && conditional)) return null;
      if (totalCount === 0) return null;
      const counter = searchEnabled && searchCfg.counter && query ? { current: filteredCount, total: totalCount } : null;
      return /* @__PURE__ */ jsxs("div", { className: "o9ds-hpop__sticky", children: [
        searchEnabled && /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__search", children: /* @__PURE__ */ jsx(
          O9Search,
          {
            variant: "filter",
            value: query,
            placeholder: searchCfg.placeholder ?? "Search",
            shortcut: searchCfg.shortcut,
            counter,
            onSearch: handleSearchInput,
            onChange: handleSearchInput,
            onClear: handleSearchClear,
            isFullWidth: true,
            "aria-label": "Filter options"
          }
        ) }),
        selection === "multi" && conditional && /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__cond", children: /* @__PURE__ */ jsx(
          O9ButtonGroup,
          {
            ariaLabel: "Combine filters",
            items: conditionalItems,
            value: conditional.value,
            size: "sm",
            onChange: (detail) => {
              const v = detail.value;
              if (v === "and" || v === "or") conditional.onChange(v);
            }
          }
        ) })
      ] });
    };
    const listRef = useRef(null);
    const renderBody = () => {
      if (isLoading) {
        return /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__list", "aria-hidden": "true", children: Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__skeleton" }, i)) });
      }
      if (totalCount === 0) {
        return /* @__PURE__ */ jsx(EmptyState, { kind: "no-data", config: emptyConfig });
      }
      if (filteredCount === 0) {
        return /* @__PURE__ */ jsx(
          EmptyState,
          {
            kind: "no-results",
            config: emptyConfig,
            onClear: handleSearchClear
          }
        );
      }
      if (isUnimplemented) {
        return null;
      }
      return /* @__PURE__ */ jsx(
        FilterList,
        {
          ref: listRef,
          items: filteredItems,
          isGrouped: isGrouped(filteredItems),
          selection,
          draftValue: draft,
          enableReorder,
          hasGlobalSelectAll,
          hasAnyDragHandle,
          radioName: panelId,
          ariaLabel: title ?? "Filter options",
          onToggleItem: handleToggleItem,
          onToggleGroupSelectAll: handleToggleGroupSelectAll,
          onToggleGlobalSelectAll: handleToggleGlobalSelectAll
        }
      );
    };
    const panelRef = useRef(null);
    const sortableRef = useRef(null);
    const resizeRef = useRef(null);
    useLayoutEffect(() => {
      const panel = panelRef.current;
      if (!panel || !isOpen) return;
      const w = clamp(width, HPOP_MIN_WIDTH, HPOP_MAX_WIDTH);
      panel.style.width = `${w}px`;
      if (height != null) {
        const maxH = Math.floor(window.innerHeight * 0.9);
        const h = clamp(height, HPOP_MIN_HEIGHT, maxH);
        panel.style.height = `${h}px`;
      } else {
        panel.style.removeProperty("height");
      }
    }, [isOpen, width, height]);
    useEffect(() => {
      if (!isOpen || !enableReorder || isLoading) return;
      const list = listRef.current;
      if (!list) return;
      const handle = createSortableList(list, {
        itemSelector: ".o9ds-hpop__opt",
        handleSelector: ".o9ds-hpop__opt__drag",
        getGroupOf: (el) => el.dataset.group ?? null,
        allowCrossGroup: crossGroupDrag,
        onCommit: (fromIndex, toIndex, fromGroup, toGroup) => {
          onReorder == null ? void 0 : onReorder({
            fromIndex,
            toIndex,
            fromGroup,
            toGroup,
            items
          });
        }
      });
      sortableRef.current = handle;
      return () => {
        handle.destroy();
        sortableRef.current = null;
      };
    }, [isOpen, enableReorder, crossGroupDrag, isLoading, items, onReorder, filteredItems]);
    useEffect(() => {
      if (!isOpen || !isResizable) return;
      const panel = panelRef.current;
      if (!panel) return;
      const handle = createResizeHandle(panel, {
        corners: ["bottom-left", "bottom-right"],
        min: { width: HPOP_MIN_WIDTH, height: HPOP_MIN_HEIGHT },
        max: () => ({
          width: HPOP_MAX_WIDTH,
          height: Math.floor(window.innerHeight * 0.9)
        }),
        viewportPadding: 16,
        onResize: (rect) => {
          onResize == null ? void 0 : onResize(rect);
        },
        onCommit: (rect) => {
          onResizeCommit == null ? void 0 : onResizeCommit(rect);
          window.dispatchEvent(new Event("resize"));
        }
      });
      handle.mount();
      resizeRef.current = handle;
      return () => {
        handle.destroy();
        resizeRef.current = null;
      };
    }, [isOpen, isResizable, onResize, onResizeCommit]);
    useImperativeHandle(
      ref,
      () => ({
        open: () => handleOpen(),
        close: () => handleClose(),
        toggle: () => handleToggle(),
        isOpen: () => isOpen,
        value: (next) => {
          if (next === void 0) {
            return committed;
          }
          setCommitted(next);
          setDraft(defaultDraft(selection, next, null));
          if (!valuesEqual(next, committed)) {
            fireOnChange(next, { item: null, action: "apply" });
          }
          return void 0;
        },
        setLoading: (loading) => setInternalLoading(loading),
        updateItems: (next) => setInternalItems(next),
        reposition: () => window.dispatchEvent(new Event("resize"))
      }),
      [
        handleOpen,
        handleClose,
        handleToggle,
        isOpen,
        committed,
        setCommitted,
        selection,
        fireOnChange
      ]
    );
    const variantClass = `o9ds-hpop--${variant}`;
    const featureClasses = [
      searchEnabled && "o9ds-hpop--with-search",
      selection === "multi" && conditional && "o9ds-hpop--with-conditional",
      isResizable && "o9ds-hpop--with-resize"
    ].filter(Boolean);
    const stateClasses = [];
    if (totalCount === 0) stateClasses.push("o9ds-hpop--no-data");
    else if (filteredCount === 0) stateClasses.push("o9ds-hpop--no-results");
    const composedClassName = [
      "o9ds-hpop",
      variantClass,
      ...featureClasses,
      ...stateClasses,
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx(
      O9Popover,
      {
        ref: panelRef,
        variant: "edge",
        title: title ?? void 0,
        hasHeader,
        isClosable,
        hasBackButton,
        onBack,
        headerActions,
        placement,
        offset,
        closeOnOutside,
        isLoading,
        isOpen,
        onOpenChange: (next) => {
          if (next) handleOpen();
          else handleClose();
        },
        onOpen,
        onClose,
        triggerRef,
        renderTrigger,
        isInline,
        stickyHeader: renderStickyHeader(),
        actions: builtActions,
        hasFooter: builtActions !== void 0 && builtActions.length > 0,
        className: composedClassName,
        id: panelId,
        children: renderBody()
      }
    );
  }
);
O9HybridPopover.displayName = "O9HybridPopover";
export {
  HPOP_DEFAULT_WIDTH,
  HPOP_MAX_WIDTH,
  HPOP_MIN_HEIGHT,
  HPOP_MIN_WIDTH,
  O9HybridPopover,
  O9HybridPopover as default
};
//# sourceMappingURL=index22.js.map
