"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const core = require("@arvo/core");
const Popover = require("./index21.cjs");
const Search = require("./index32.cjs");
const ButtonGroup = require("./index23.cjs");
const FilterList = require("./index46.cjs");
const EmptyState = require("./index47.cjs");
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
function applyReorder(items, fromIndex, toIndex, fromGroup, toGroup) {
  if (!isGrouped(items)) {
    const arr = [...items];
    if (fromIndex < 0 || fromIndex >= arr.length) return items;
    const [moved2] = arr.splice(fromIndex, 1);
    const insertIdx2 = clamp(toIndex, 0, arr.length);
    arr.splice(insertIdx2, 0, moved2);
    return arr;
  }
  const groups = items;
  const flat = [];
  groups.forEach(
    (g) => g.items.forEach((it) => flat.push({ item: it, groupId: g.id }))
  );
  if (fromIndex < 0 || fromIndex >= flat.length) return items;
  const [moved] = flat.splice(fromIndex, 1);
  const targetGroupId = toGroup ?? fromGroup ?? moved.groupId;
  moved.groupId = targetGroupId;
  const insertIdx = clamp(toIndex, 0, flat.length);
  flat.splice(insertIdx, 0, moved);
  return groups.map((g) => ({
    ...g,
    items: flat.filter((entry) => entry.groupId === g.id).map((e) => e.item)
  }));
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
const ArvoHybridPopover = react.forwardRef(
  function ArvoHybridPopover2(props, ref) {
    const {
      variant = "multi",
      selectionMode,
      items: itemsProp,
      defaultItems,
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
    const uid = react.useId();
    const panelId = `arvo-hpop-${uid}`;
    const isUnimplemented = variant === "boolean" || variant === "conditional" || variant === "custom";
    const lastWarnedVariantRef = react.useRef(null);
    react.useEffect(() => {
      if (isUnimplemented && lastWarnedVariantRef.current !== variant) {
        lastWarnedVariantRef.current = variant;
        console.warn(
          `HybridPopover: variant "${variant}" is not yet implemented.`
        );
      }
    }, [variant, isUnimplemented]);
    const selection = react.useMemo(
      () => resolveSelection(variant, selectionMode),
      [variant, selectionMode]
    );
    const isControlledItems = itemsProp !== void 0 && defaultItems === void 0;
    const [internalItems, setInternalItems] = react.useState(() => itemsProp ?? defaultItems ?? []);
    react.useEffect(() => {
      if (isControlledItems && itemsProp !== void 0) {
        setInternalItems(itemsProp);
      }
    }, [isControlledItems, itemsProp]);
    const items = internalItems;
    const grouped = isGrouped(items);
    const [internalLoading, setInternalLoading] = react.useState(isLoadingProp);
    react.useEffect(() => {
      setInternalLoading(isLoadingProp);
    }, [isLoadingProp]);
    const isLoading = internalLoading;
    const isControlledOpen = openProp !== void 0 && openProp !== null;
    const [internalOpen, setInternalOpen] = react.useState(defaultOpen);
    const isOpen = isControlledOpen ? !!openProp : internalOpen;
    const setOpen = react.useCallback(
      (next) => {
        if (!isControlledOpen) setInternalOpen(next);
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [isControlledOpen, onOpenChange]
    );
    const handleOpen = react.useCallback(() => {
      if (isOpen) return;
      if ((onOpen == null ? void 0 : onOpen()) === false) return;
      setOpen(true);
    }, [isOpen, onOpen, setOpen]);
    const handleClose = react.useCallback(() => {
      if (!isOpen) return;
      if ((onClose == null ? void 0 : onClose()) === false) return;
      setOpen(false);
    }, [isOpen, onClose, setOpen]);
    const handleToggle = react.useCallback(() => {
      if (isOpen) handleClose();
      else handleOpen();
    }, [isOpen, handleOpen, handleClose]);
    const isControlledValue = controlledValue !== void 0;
    const [internalCommitted, setInternalCommitted] = react.useState(() => defaultDraft(selection, void 0, defaultValue));
    const committed = isControlledValue ? controlledValue : internalCommitted;
    const setCommitted = react.useCallback(
      (next) => {
        if (!isControlledValue) setInternalCommitted(next);
      },
      [isControlledValue]
    );
    const [draft, setDraft] = react.useState(
      () => defaultDraft(selection, controlledValue, defaultValue)
    );
    react.useEffect(() => {
      setDraft(
        defaultDraft(selection, committed, null)
      );
    }, [isOpen, selection]);
    react.useEffect(() => {
      if (isControlledValue) {
        setDraft(
          defaultDraft(selection, controlledValue, null)
        );
      }
    }, [controlledValue, selection]);
    const searchEnabled = search !== false;
    const searchCfg = react.useMemo(
      () => searchEnabled ? {
        variant: "filter-search",
        placeholder: "Search",
        ...search
      } : { placeholder: "" },
      [search, searchEnabled]
    );
    const [query, setQuery] = react.useState("");
    const filteredItems = react.useMemo(() => {
      if (!searchEnabled || !query) return items;
      if (grouped) {
        return core.filterGroups(items, {
          query,
          keys: ["label", "secondaryLabel"]
        });
      }
      return core.filterItems(items, {
        query,
        keys: ["label", "secondaryLabel"]
      });
    }, [items, grouped, query, searchEnabled]);
    const flatFiltered = react.useMemo(() => flattenItems(filteredItems), [filteredItems]);
    const flatAll = react.useMemo(() => flattenItems(items), [items]);
    const totalCount = flatAll.length;
    const filteredCount = flatFiltered.length;
    const hasAnyDragHandle = react.useMemo(() => {
      if (!enableReorder) return false;
      return flatAll.some((i) => i.isDraggable !== false);
    }, [enableReorder, flatAll]);
    const draftAsArray = react.useCallback(
      () => Array.isArray(draft) ? draft : [],
      [draft]
    );
    const fireOnChange = react.useCallback(
      (next, meta) => {
        onChange == null ? void 0 : onChange(next, meta);
      },
      [onChange]
    );
    const updateDraft = react.useCallback(
      (next, meta) => {
        setDraft(next);
        if (commitOn === "change") {
          setCommitted(next);
          fireOnChange(next, meta);
        }
      },
      [commitOn, setCommitted, fireOnChange]
    );
    const handleToggleItem = react.useCallback(
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
    const handleToggleGlobalSelectAll = react.useCallback(() => {
      if (selection !== "multi") return;
      const enabled = flatAll.filter((i) => !i.isDisabled).map((i) => i.id);
      if (enabled.length === 0) return;
      const arr = draftAsArray();
      const allSelected = enabled.every((id) => arr.includes(id));
      const next = allSelected ? arr.filter((id) => !enabled.includes(id)) : Array.from(/* @__PURE__ */ new Set([...arr, ...enabled]));
      updateDraft(next, { item: null, action: "select-all" });
    }, [selection, flatAll, draftAsArray, updateDraft]);
    const handleToggleGroupSelectAll = react.useCallback(
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
    const handleApply = react.useCallback(() => {
      const next = draft;
      const result = onApply == null ? void 0 : onApply(next);
      setCommitted(next);
      fireOnChange(next, { item: null, action: "apply" });
      if (result === false) return false;
      handleClose();
      return void 0;
    }, [draft, onApply, setCommitted, fireOnChange, handleClose]);
    const handleCancel = react.useCallback(() => {
      setDraft(defaultDraft(selection, committed, null));
      setQuery("");
      onCancel == null ? void 0 : onCancel();
      handleClose();
    }, [committed, selection, onCancel, handleClose]);
    const handleReset = react.useCallback(() => {
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
    const builtActions = react.useMemo(() => {
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
    const handleSearchInput = react.useCallback((value) => {
      setQuery(value);
    }, []);
    const handleSearchClear = react.useCallback(() => {
      setQuery("");
    }, []);
    const conditionalItems = react.useMemo(
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
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-hpop__sticky", children: [
        searchEnabled && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-hpop__search", children: /* @__PURE__ */ jsxRuntime.jsx(
          Search.default,
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
        selection === "multi" && conditional && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-hpop__cond", children: /* @__PURE__ */ jsxRuntime.jsx(
          ButtonGroup.default,
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
    const listRef = react.useRef(null);
    const renderBody = () => {
      if (isLoading) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-hpop__list", "aria-hidden": "true", children: Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-hpop__skeleton" }, i)) });
      }
      if (totalCount === 0) {
        return /* @__PURE__ */ jsxRuntime.jsx(EmptyState.EmptyState, { kind: "no-data", config: emptyConfig });
      }
      if (filteredCount === 0) {
        return /* @__PURE__ */ jsxRuntime.jsx(
          EmptyState.EmptyState,
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
      return /* @__PURE__ */ jsxRuntime.jsx(
        FilterList.default,
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
    const panelRef = react.useRef(null);
    const sortableRef = react.useRef(null);
    const resizeRef = react.useRef(null);
    const rovingRef = react.useRef(null);
    const [resizedWidth, setResizedWidth] = react.useState(
      () => clamp(width, HPOP_MIN_WIDTH, HPOP_MAX_WIDTH)
    );
    const [resizedHeight, setResizedHeight] = react.useState(height);
    const firstOpenRef = react.useRef(true);
    const lastWidthPropRef = react.useRef(width);
    const lastHeightPropRef = react.useRef(height);
    react.useEffect(() => {
      if (width !== lastWidthPropRef.current) {
        lastWidthPropRef.current = width;
        setResizedWidth(clamp(width, HPOP_MIN_WIDTH, HPOP_MAX_WIDTH));
      }
    }, [width]);
    react.useEffect(() => {
      if (height !== lastHeightPropRef.current) {
        lastHeightPropRef.current = height;
        setResizedHeight(height);
      }
    }, [height]);
    react.useLayoutEffect(() => {
      const panel = panelRef.current;
      if (!panel || !isOpen) return;
      if (resizedHeight != null) {
        const maxH = Math.floor(window.innerHeight * 0.9);
        panel.style.height = `${clamp(resizedHeight, HPOP_MIN_HEIGHT, maxH)}px`;
      } else {
        panel.style.removeProperty("height");
      }
    }, [isOpen, resizedHeight]);
    react.useEffect(() => {
      if (isOpen && firstOpenRef.current) {
        firstOpenRef.current = false;
      }
    }, [isOpen]);
    react.useEffect(() => {
      if (!isOpen || !enableReorder || isLoading) return;
      const list = listRef.current;
      if (!list) return;
      const handle = core.createSortableList(list, {
        itemSelector: ".arvo-hpop__opt",
        handleSelector: ".arvo-hpop__opt__drag",
        getGroupOf: (el) => el.dataset.group ?? null,
        allowCrossGroup: crossGroupDrag,
        onCommit: (fromIndex, toIndex, fromGroup, toGroup) => {
          const next = applyReorder(items, fromIndex, toIndex, fromGroup, toGroup);
          if (!isControlledItems) {
            setInternalItems(next);
          }
          onReorder == null ? void 0 : onReorder({
            fromIndex,
            toIndex,
            fromGroup,
            toGroup,
            items: next
          });
        }
      });
      sortableRef.current = handle;
      return () => {
        handle.destroy();
        sortableRef.current = null;
      };
    }, [
      isOpen,
      enableReorder,
      crossGroupDrag,
      isLoading,
      items,
      isControlledItems,
      onReorder,
      filteredItems
    ]);
    react.useEffect(() => {
      if (!isOpen || !isResizable) return;
      const panel = panelRef.current;
      if (!panel) return;
      const handle = core.createResizeHandle(panel, {
        corners: ["bottom-left", "bottom-right"],
        min: { width: HPOP_MIN_WIDTH, height: HPOP_MIN_HEIGHT },
        max: (rect) => ({
          // Cap to viewport remaining space minus padding so handles stay
          // visible until the panel is flush with the edge.
          width: Math.max(
            HPOP_MIN_WIDTH,
            Math.min(
              HPOP_MAX_WIDTH,
              window.innerWidth - rect.left - 16
            )
          ),
          height: Math.max(
            HPOP_MIN_HEIGHT,
            Math.min(
              Math.floor(window.innerHeight * 0.9),
              window.innerHeight - rect.top - 16
            )
          )
        }),
        viewportPadding: 16,
        onResize: (rect) => {
          setResizedWidth(rect.width);
          setResizedHeight(rect.height);
          onResize == null ? void 0 : onResize(rect);
        },
        onCommit: (rect) => {
          setResizedWidth(rect.width);
          setResizedHeight(rect.height);
          onResizeCommit == null ? void 0 : onResizeCommit(rect);
        }
      });
      handle.mount();
      resizeRef.current = handle;
      return () => {
        handle.destroy();
        resizeRef.current = null;
      };
    }, [isOpen, isResizable, onResize, onResizeCommit]);
    react.useEffect(() => {
      if (!isOpen || isLoading) return;
      const list = listRef.current;
      if (!list) return;
      const collectItems = () => {
        const sa = Array.from(
          list.querySelectorAll(".arvo-hpop__sa")
        ).filter((el) => el.getAttribute("aria-disabled") !== "true");
        const opts = Array.from(
          list.querySelectorAll(".arvo-hpop__opt")
        ).filter((el) => el.getAttribute("aria-disabled") !== "true");
        return [...sa, ...opts];
      };
      const roving = core.createTabRoving();
      const initial = collectItems();
      if (initial.length === 0) return;
      roving.activate({
        container: list,
        items: initial,
        orientation: "vertical",
        wrap: false
      });
      rovingRef.current = roving;
      return () => {
        roving.deactivate();
        rovingRef.current = null;
      };
    }, [isOpen, isLoading, filteredItems, draft]);
    react.useImperativeHandle(
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
    const variantClass = `arvo-hpop--${variant}`;
    const featureClasses = [
      searchEnabled && "arvo-hpop--with-search",
      selection === "multi" && conditional && "arvo-hpop--with-conditional",
      isResizable && "arvo-hpop--with-resize"
    ].filter(Boolean);
    const stateClasses = [];
    if (totalCount === 0) stateClasses.push("arvo-hpop--no-data");
    else if (filteredCount === 0) stateClasses.push("arvo-hpop--no-results");
    const composedClassName = [
      "arvo-hpop",
      variantClass,
      ...featureClasses,
      ...stateClasses,
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsx(
      Popover.ArvoPopover,
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
        width: resizedWidth,
        children: renderBody()
      }
    );
  }
);
ArvoHybridPopover.displayName = "ArvoHybridPopover";
exports.ArvoHybridPopover = ArvoHybridPopover;
exports.HPOP_DEFAULT_WIDTH = HPOP_DEFAULT_WIDTH;
exports.HPOP_MAX_WIDTH = HPOP_MAX_WIDTH;
exports.HPOP_MIN_HEIGHT = HPOP_MIN_HEIGHT;
exports.HPOP_MIN_WIDTH = HPOP_MIN_WIDTH;
exports.default = ArvoHybridPopover;
//# sourceMappingURL=index22.cjs.map
