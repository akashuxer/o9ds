"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const core = require("@o9ds/core");
const Popover = require("../Popover/Popover.cjs");
const Search = require("../Search/Search.cjs");
const Checkbox = require("../Checkbox/Checkbox.cjs");
const Radio = require("../Radio/Radio.cjs");
const Button = require("../Button/Button.cjs");
const IconButton = require("../IconButton/IconButton.cjs");
const ButtonGroup = require("../ButtonGroup/ButtonGroup.cjs");
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
function defaultDraft(selection, seedValue) {
  const seed = seedValue ?? null;
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
function cloneValue(v) {
  if (Array.isArray(v)) return [...v];
  return v;
}
const EMPTY_DEFAULTS = {
  noDataTitle: "No data available",
  noDataMessage: "Adjust your filter search query.",
  noResultsTitle: "No results found",
  noResultsMessage: "Adjust your filter search query.",
  noResultsClearLabel: "Clear Search"
};
let _idCounter = 0;
class O9HybridPopover {
  constructor(element, options) {
    this._query = "";
    this._popover = null;
    this._panelEl = null;
    this._stickyEl = null;
    this._bodyEl = null;
    this._searchInstance = null;
    this._conditionalInstance = null;
    this._globalSAInstance = null;
    this._groupSAInstances = [];
    this._itemInstances = [];
    this._chevInstances = [];
    this._clearSearchInstance = null;
    this._sortable = null;
    this._resize = null;
    this._trigger = element;
    this._options = { ...options ?? {} };
    this._id = `o9ds-hpop-${++_idCounter}`;
    const variant = this._options.variant ?? "multi";
    this._selection = resolveSelection(variant, this._options.selectionMode);
    if (variant === "boolean" || variant === "conditional" || variant === "custom") {
      console.warn(
        `HybridPopover: variant "${variant}" is not yet implemented.`
      );
    }
    this._items = this._options.items ?? [];
    this._isLoading = !!this._options.isLoading;
    const seedRaw = this._options.value !== void 0 ? this._options.value : this._options.defaultValue ?? null;
    this._committed = defaultDraft(this._selection, seedRaw);
    this._draft = defaultDraft(this._selection, this._committed);
    this._stickyEl = document.createElement("div");
    this._stickyEl.className = "o9ds-hpop__sticky";
    this._bodyEl = document.createElement("div");
    this._bodyEl.className = "o9ds-hpop__body-root";
    this._popover = new Popover.O9Popover(element, {
      variant: "edge",
      title: this._options.title ?? "",
      hasHeader: this._options.hasHeader ?? true,
      isClosable: this._options.isClosable ?? true,
      hasBackButton: this._options.hasBackButton ?? false,
      onBack: this._options.onBack,
      headerActions: this._options.headerActions ?? [],
      placement: this._options.placement ?? "auto",
      offset: this._options.offset ?? 2,
      closeOnOutside: this._options.closeOnOutside ?? true,
      isLoading: this._isLoading,
      isInline: this._options.isInline ?? false,
      stickyHeader: this._stickyEl,
      content: this._bodyEl,
      actions: this._buildPopoverActions(),
      hasFooter: true,
      onOpen: () => {
        var _a, _b;
        return (_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a);
      },
      onClose: () => {
        var _a, _b;
        return (_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a);
      }
    });
    const panelId = element.getAttribute("aria-controls");
    if (panelId) {
      this._panelEl = document.getElementById(panelId);
    }
    this._applyPanelClasses();
    this._boundOnPopoverOpen = this._handlePopoverOpen.bind(this);
    this._boundOnPopoverClose = this._handlePopoverClose.bind(this);
    element.addEventListener("popover:open", this._boundOnPopoverOpen);
    element.addEventListener("popover:close", this._boundOnPopoverClose);
    this._renderSticky();
    this._renderBody();
    if (this._isLoading) {
      this._popover.setFooterVisible(false);
    }
    if (this._options.defaultOpen) {
      queueMicrotask(() => this.open());
    }
  }
  static initialize(element, options) {
    return new O9HybridPopover(element, options);
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  open() {
    var _a;
    (_a = this._popover) == null ? void 0 : _a.open();
  }
  close() {
    var _a;
    (_a = this._popover) == null ? void 0 : _a.close();
  }
  isOpen() {
    var _a;
    return ((_a = this._popover) == null ? void 0 : _a.isOpen()) ?? false;
  }
  toggle() {
    var _a;
    (_a = this._popover) == null ? void 0 : _a.toggle();
  }
  value(newValue) {
    if (newValue === void 0) {
      return cloneValue(this._committed);
    }
    const prev = this._committed;
    this._committed = cloneValue(newValue);
    this._draft = defaultDraft(this._selection, this._committed);
    this._renderBody();
    if (!valuesEqual(this._committed, prev)) {
      this._fireChange(this._committed, { item: null, action: "apply" });
    }
  }
  setLoading(loading) {
    var _a, _b;
    if (this._isLoading === loading) return;
    this._isLoading = loading;
    (_a = this._popover) == null ? void 0 : _a.setLoading(loading);
    (_b = this._popover) == null ? void 0 : _b.setFooterVisible(!loading);
    this._renderSticky();
    this._renderBody();
    this._applyPanelClasses();
    if (loading) {
      this._teardownSortable();
    } else if (this.isOpen()) {
      this._mountSortable();
    }
  }
  updateItems(items) {
    this._items = items;
    this._renderSticky();
    this._renderBody();
    this._applyPanelClasses();
    if (this.isOpen()) {
      this._teardownSortable();
      this._mountSortable();
    }
  }
  reposition() {
    var _a;
    (_a = this._popover) == null ? void 0 : _a.reposition();
  }
  destroy() {
    var _a, _b, _c;
    const trigger = this._trigger;
    if (trigger) {
      trigger.removeEventListener("popover:open", this._boundOnPopoverOpen);
      trigger.removeEventListener("popover:close", this._boundOnPopoverClose);
    }
    this._teardownSortable();
    this._teardownResize();
    this._destroyInnerInstances();
    (_a = this._popover) == null ? void 0 : _a.destroy();
    this._popover = null;
    (_b = this._stickyEl) == null ? void 0 : _b.remove();
    (_c = this._bodyEl) == null ? void 0 : _c.remove();
    this._stickyEl = null;
    this._bodyEl = null;
    this._panelEl = null;
    this._trigger = null;
  }
  // ---------------------------------------------------------------------------
  // Popover lifecycle wiring
  // ---------------------------------------------------------------------------
  _handlePopoverOpen() {
    this._draft = defaultDraft(this._selection, this._committed);
    this._query = "";
    this._renderSticky();
    this._renderBody();
    this._applyPanelClasses();
    this._applyDimensions();
    this._mountSortable();
    this._mountResize();
    this._dispatchEvent("hpop:open", {});
  }
  _handlePopoverClose() {
    this._teardownSortable();
    this._teardownResize();
    this._dispatchEvent("hpop:close", {});
  }
  // ---------------------------------------------------------------------------
  // Panel chrome
  // ---------------------------------------------------------------------------
  _applyPanelClasses() {
    const panel = this._panelEl;
    if (!panel) return;
    const variant = this._options.variant ?? "multi";
    const searchEnabled = this._options.search !== false;
    const conditional = this._options.conditional;
    const isResizable = this._options.isResizable ?? true;
    const flatAll = flattenItems(this._items);
    const totalCount = flatAll.length;
    const filteredCount = this._getFilteredItems().__filteredCount;
    const toRemove = [];
    panel.classList.forEach((c) => {
      if (c.startsWith("o9ds-hpop")) toRemove.push(c);
    });
    toRemove.forEach((c) => panel.classList.remove(c));
    panel.classList.add("o9ds-hpop");
    panel.classList.add(`o9ds-hpop--${variant}`);
    if (searchEnabled) panel.classList.add("o9ds-hpop--with-search");
    if (this._selection === "multi" && conditional) {
      panel.classList.add("o9ds-hpop--with-conditional");
    }
    if (isResizable) panel.classList.add("o9ds-hpop--with-resize");
    if (totalCount === 0) panel.classList.add("o9ds-hpop--no-data");
    else if (filteredCount === 0) panel.classList.add("o9ds-hpop--no-results");
    if (this._isLoading) panel.classList.add("loading");
  }
  _applyDimensions() {
    const panel = this._panelEl;
    if (!panel) return;
    const w = clamp(
      this._options.width ?? HPOP_DEFAULT_WIDTH,
      HPOP_MIN_WIDTH,
      HPOP_MAX_WIDTH
    );
    panel.style.width = `${w}px`;
    const h = this._options.height;
    if (h != null) {
      const maxH = Math.floor(window.innerHeight * 0.9);
      panel.style.height = `${clamp(h, HPOP_MIN_HEIGHT, maxH)}px`;
    } else {
      panel.style.removeProperty("height");
    }
  }
  // ---------------------------------------------------------------------------
  // Filtering
  // ---------------------------------------------------------------------------
  _getFilteredItems() {
    const items = this._items;
    const grouped = isGrouped(items);
    const searchEnabled = this._options.search !== false;
    const query = this._query;
    let filtered;
    if (!searchEnabled || !query) {
      filtered = items;
    } else if (grouped) {
      filtered = core.filterGroups(items, {
        query,
        keys: ["label", "secondaryLabel"]
      });
    } else {
      filtered = core.filterItems(items, {
        query,
        keys: ["label", "secondaryLabel"]
      });
    }
    const flatFiltered = flattenItems(filtered);
    const flatAll = flattenItems(items);
    return {
      filtered,
      flatFiltered,
      flatAll,
      grouped,
      __filteredCount: flatFiltered.length
    };
  }
  // ---------------------------------------------------------------------------
  // Sticky header (search + conditional)
  // ---------------------------------------------------------------------------
  _renderSticky() {
    var _a, _b;
    const sticky = this._stickyEl;
    if (!sticky) return;
    (_a = this._searchInstance) == null ? void 0 : _a.destroy();
    this._searchInstance = null;
    (_b = this._conditionalInstance) == null ? void 0 : _b.destroy();
    this._conditionalInstance = null;
    sticky.textContent = "";
    if (this._isLoading) {
      sticky.style.display = "none";
      return;
    }
    const searchEnabled = this._options.search !== false;
    const conditional = this._options.conditional;
    const showSearch = searchEnabled;
    const showConditional = this._selection === "multi" && !!conditional;
    const flatAll = flattenItems(this._items);
    const totalCount = flatAll.length;
    if (totalCount === 0 || !showSearch && !showConditional) {
      sticky.style.display = "none";
      return;
    }
    sticky.style.display = "";
    if (showSearch) {
      const searchWrap = document.createElement("div");
      searchWrap.className = "o9ds-hpop__search";
      const searchEl = document.createElement("div");
      searchWrap.appendChild(searchEl);
      const searchCfg = searchEnabled && this._options.search ? this._options.search : {};
      const placeholder = searchCfg.placeholder ?? "Search";
      const shortcut = searchCfg.shortcut ?? null;
      const showCounter = !!searchCfg.counter && !!this._query;
      const counter = showCounter ? {
        current: this._getFilteredItems().__filteredCount,
        total: totalCount
      } : null;
      this._searchInstance = Search.O9Search.initialize(searchEl, {
        variant: "filter",
        value: this._query,
        placeholder,
        shortcut: shortcut ?? void 0,
        counter,
        isFullWidth: true,
        "aria-label": "Filter options",
        onChange: (value) => this._handleSearchInput(value),
        onSearch: (value) => this._handleSearchInput(value),
        onClear: () => this._handleSearchClear()
      });
      sticky.appendChild(searchWrap);
    }
    if (showConditional && conditional) {
      const condWrap = document.createElement("div");
      condWrap.className = "o9ds-hpop__cond";
      const condEl = document.createElement("div");
      condWrap.appendChild(condEl);
      this._conditionalInstance = ButtonGroup.O9ButtonGroup.initialize(condEl, {
        ariaLabel: "Combine filters",
        items: [
          { value: "and", label: "And" },
          { value: "or", label: "Or" }
        ],
        value: conditional.value,
        size: "sm",
        onChange: (detail) => {
          const v = detail.value;
          if (v === "and" || v === "or") conditional.onChange(v);
        }
      });
      sticky.appendChild(condWrap);
    }
  }
  // ---------------------------------------------------------------------------
  // Body (skeleton | empty | filter list)
  // ---------------------------------------------------------------------------
  _renderBody() {
    const body = this._bodyEl;
    if (!body) return;
    this._destroyBodyInstances();
    body.textContent = "";
    if (this._isLoading) {
      const list = document.createElement("div");
      list.className = "o9ds-hpop__list";
      list.setAttribute("aria-hidden", "true");
      for (let i = 0; i < SKELETON_ROW_COUNT; i++) {
        const row = document.createElement("div");
        row.className = "o9ds-hpop__skeleton";
        list.appendChild(row);
      }
      body.appendChild(list);
      return;
    }
    const variant = this._options.variant ?? "multi";
    const isUnimplemented = variant === "boolean" || variant === "conditional" || variant === "custom";
    const { filtered, flatAll, grouped, __filteredCount } = this._getFilteredItems();
    const totalCount = flatAll.length;
    if (totalCount === 0) {
      body.appendChild(this._buildEmptyState("no-data"));
      return;
    }
    if (__filteredCount === 0) {
      body.appendChild(this._buildEmptyState("no-results"));
      return;
    }
    if (isUnimplemented) {
      return;
    }
    body.appendChild(this._buildFilterList(filtered, grouped));
  }
  _buildEmptyState(kind) {
    const cfg = {
      ...EMPTY_DEFAULTS,
      ...this._options.emptyConfig ?? {}
    };
    const wrap = document.createElement("div");
    wrap.className = `o9ds-hpop__empty o9ds-hpop__empty--${kind}`;
    wrap.setAttribute("role", "status");
    const illus = document.createElement("span");
    illus.className = kind === "no-results" ? "o9ds-hpop__empty-illus o9illus o9illus-no-results-found" : "o9ds-hpop__empty-illus o9illus o9illus-no-filters-found";
    illus.setAttribute("aria-hidden", "true");
    wrap.appendChild(illus);
    const titleEl = document.createElement("span");
    titleEl.className = "o9ds-hpop__empty-title";
    titleEl.textContent = kind === "no-results" ? cfg.noResultsTitle : cfg.noDataTitle;
    wrap.appendChild(titleEl);
    const msgEl = document.createElement("span");
    msgEl.className = "o9ds-hpop__empty-msg";
    msgEl.textContent = kind === "no-results" ? cfg.noResultsMessage : cfg.noDataMessage;
    wrap.appendChild(msgEl);
    if (kind === "no-results") {
      const actionWrap = document.createElement("span");
      actionWrap.className = "o9ds-hpop__empty-action";
      const btnEl = document.createElement("button");
      this._clearSearchInstance = Button.O9Button.initialize(btnEl, {
        label: cfg.noResultsClearLabel,
        variant: "outline",
        size: "sm",
        onClick: () => this._handleSearchClear()
      });
      actionWrap.appendChild(btnEl);
      wrap.appendChild(actionWrap);
    }
    return wrap;
  }
  // ---------------------------------------------------------------------------
  // Filter list
  // ---------------------------------------------------------------------------
  _buildFilterList(items, grouped) {
    const list = document.createElement("div");
    list.className = "o9ds-hpop__list";
    list.setAttribute("role", "group");
    list.setAttribute(
      "aria-label",
      this._options.title ?? "Filter options"
    );
    const enableReorder = !!this._options.enableReorder;
    const flatAll = flattenItems(this._items);
    const hasAnyDragHandle = enableReorder && flatAll.some((i) => i.isDraggable !== false);
    const isMulti = this._selection === "multi";
    const draftArr = isMulti && Array.isArray(this._draft) ? this._draft : [];
    if (isMulti && this._options.hasGlobalSelectAll) {
      const flat = flattenItems(items);
      const sa = this._buildSelectAllRow(
        flat,
        draftArr,
        "Select all",
        false,
        () => this._handleToggleGlobalSelectAll()
      );
      if (sa) list.appendChild(sa);
    }
    if (grouped) {
      const groups = items;
      groups.forEach((group, gi) => {
        const groupDraggable = enableReorder && group.isDraggable !== false;
        const grpEl = document.createElement("div");
        grpEl.className = "o9ds-hpop__grp";
        grpEl.setAttribute("data-group", group.id);
        if (gi > 0) {
          const div = document.createElement("div");
          div.className = "o9ds-hpop__divider";
          div.setAttribute("role", "separator");
          grpEl.appendChild(div);
        }
        if (group.label) {
          const hdr = document.createElement("div");
          hdr.className = "o9ds-hpop__grp-hdr";
          hdr.textContent = group.label;
          grpEl.appendChild(hdr);
        }
        if (isMulti && group.hasSelectAll) {
          const sa = this._buildSelectAllRow(
            group.items,
            draftArr,
            `Select all ${group.label ?? ""}`.trim(),
            true,
            () => this._handleToggleGroupSelectAll(group)
          );
          if (sa) grpEl.appendChild(sa);
        }
        for (const item of group.items) {
          const itemDraggable = groupDraggable && item.isDraggable !== false;
          grpEl.appendChild(
            this._buildOptionRow(item, group.id, itemDraggable, hasAnyDragHandle)
          );
        }
        list.appendChild(grpEl);
      });
    } else {
      for (const item of items) {
        const itemDraggable = enableReorder && item.isDraggable !== false;
        list.appendChild(
          this._buildOptionRow(item, null, itemDraggable, hasAnyDragHandle)
        );
      }
    }
    return list;
  }
  _buildSelectAllRow(items, draftArr, label, isGroupRow, onToggle) {
    const enabled = items.filter((i) => !i.isDisabled);
    if (enabled.length === 0) return null;
    const draftSet = new Set(draftArr);
    const selectedCount = enabled.filter((i) => draftSet.has(i.id)).length;
    const isChecked = selectedCount === enabled.length;
    const isIndeterminate = selectedCount > 0 && selectedCount < enabled.length;
    const row = document.createElement("div");
    row.className = isGroupRow ? "o9ds-hpop__sa o9ds-hpop__sa--group" : "o9ds-hpop__sa";
    const cbEl = document.createElement("span");
    const cb = Checkbox.O9Checkbox.initialize(cbEl, {
      size: "sm",
      label,
      isChecked,
      isIndeterminate,
      isDisabled: false,
      onChange: () => onToggle()
    });
    cbEl.setAttribute("aria-label", label || "Select all");
    row.appendChild(cbEl);
    if (isGroupRow) {
      this._groupSAInstances.push(cb);
    } else {
      this._globalSAInstance = cb;
    }
    return row;
  }
  _buildOptionRow(item, groupId, isDraggable, hasAnyDragHandle) {
    const showCheckSlot = this._selection !== "none";
    const isMulti = this._selection === "multi";
    const isChecked = this._isItemChecked(item);
    const itemDisabled = !!item.isDisabled;
    const showExclude = isMulti && !!item.isExcluded;
    const showInline = !!item.hasInline;
    const row = document.createElement("div");
    row.className = "o9ds-hpop__opt";
    row.setAttribute("role", "option");
    row.tabIndex = -1;
    if (showCheckSlot) row.setAttribute("aria-selected", String(isChecked));
    if (itemDisabled) row.setAttribute("aria-disabled", "true");
    row.setAttribute("data-id", item.id);
    if (groupId) row.setAttribute("data-group", groupId);
    if (showCheckSlot && isChecked) row.setAttribute("data-checked", "true");
    if (isDraggable) {
      const drag = document.createElement("span");
      drag.className = "o9ds-hpop__opt__drag";
      drag.setAttribute("role", "button");
      drag.tabIndex = itemDisabled ? -1 : 0;
      drag.setAttribute("aria-roledescription", "sortable");
      drag.setAttribute(
        "aria-keyshortcuts",
        "Control+ArrowUp Control+ArrowDown"
      );
      drag.setAttribute("aria-label", `Drag ${item.label}`);
      if (itemDisabled) drag.setAttribute("aria-disabled", "true");
      const ico = document.createElement("i");
      ico.className = "o9con o9con-drag-handle";
      ico.setAttribute("aria-hidden", "true");
      drag.appendChild(ico);
      row.appendChild(drag);
    } else if (hasAnyDragHandle) {
      const spacer = document.createElement("span");
      spacer.className = "o9ds-hpop__opt__spacer";
      spacer.setAttribute("aria-hidden", "true");
      row.appendChild(spacer);
    }
    if (showCheckSlot) {
      const checkSlot = document.createElement("span");
      checkSlot.className = "o9ds-hpop__opt__check";
      const ctrlEl = document.createElement("span");
      checkSlot.appendChild(ctrlEl);
      if (isMulti) {
        const cb = Checkbox.O9Checkbox.initialize(ctrlEl, {
          size: "sm",
          isChecked,
          isIndeterminate: !!item.isIndeterminate,
          isExcluded: !!item.isExcluded,
          isDisabled: itemDisabled,
          value: item.id,
          onChange: () => this._handleToggleItem(item)
        });
        ctrlEl.setAttribute("aria-label", item.label);
        this._itemInstances.push(cb);
      } else {
        const rb = Radio.O9Radio.initialize(ctrlEl, {
          size: "sm",
          name: this._id,
          value: item.id,
          isChecked,
          isDisabled: itemDisabled,
          onChange: () => this._handleToggleItem(item)
        });
        ctrlEl.setAttribute("aria-label", item.label);
        this._itemInstances.push(rb);
      }
      row.appendChild(checkSlot);
    }
    const lbl = document.createElement("span");
    lbl.className = "o9ds-hpop__opt__lbl";
    lbl.appendChild(document.createTextNode(item.label));
    if (item.secondaryLabel) {
      const sec = document.createElement("span");
      sec.className = "o9ds-hpop__opt__secondary";
      sec.textContent = item.secondaryLabel;
      lbl.appendChild(sec);
    }
    lbl.addEventListener("click", () => {
      if (itemDisabled) return;
      if (this._selection === "none") return;
      this._handleToggleItem(item);
    });
    row.appendChild(lbl);
    if (showExclude) {
      const ex = document.createElement("span");
      ex.className = "o9ds-hpop__opt__exclude o9con o9con-exclude";
      ex.setAttribute("aria-label", "Excluded");
      ex.setAttribute("role", "img");
      row.appendChild(ex);
    }
    if (showInline) {
      const chevWrap = document.createElement("span");
      chevWrap.className = "o9ds-hpop__opt__chev";
      const chevEl = document.createElement("button");
      const chev = IconButton.O9IconButton.initialize(chevEl, {
        icon: "angle-right",
        variant: "tertiary",
        size: "sm",
        tooltip: `Open ${item.label}`,
        isDisabled: itemDisabled,
        onClick: (e) => {
          e.stopPropagation();
        }
      });
      chevWrap.appendChild(chevEl);
      row.appendChild(chevWrap);
      this._chevInstances.push(chev);
    }
    return row;
  }
  _isItemChecked(item) {
    if (this._selection === "none") return false;
    if (this._selection === "multi") {
      return Array.isArray(this._draft) && this._draft.includes(item.id);
    }
    return typeof this._draft === "string" && this._draft === item.id;
  }
  // ---------------------------------------------------------------------------
  // Selection handlers
  // ---------------------------------------------------------------------------
  _handleToggleItem(item) {
    if (item.isDisabled) return;
    if (this._selection === "none") return;
    let next;
    if (this._selection === "multi") {
      const arr = Array.isArray(this._draft) ? [...this._draft] : [];
      const idx = arr.indexOf(item.id);
      next = idx === -1 ? [...arr, item.id] : arr.filter((v) => v !== item.id);
    } else {
      next = this._draft === item.id ? null : item.id;
    }
    this._updateDraft(next, { item, action: "toggle" });
  }
  _handleToggleGlobalSelectAll() {
    if (this._selection !== "multi") return;
    const flatAll = flattenItems(this._items);
    const enabled = flatAll.filter((i) => !i.isDisabled).map((i) => i.id);
    if (enabled.length === 0) return;
    const arr = Array.isArray(this._draft) ? this._draft : [];
    const allSelected = enabled.every((id) => arr.includes(id));
    const next = allSelected ? arr.filter((id) => !enabled.includes(id)) : Array.from(/* @__PURE__ */ new Set([...arr, ...enabled]));
    this._updateDraft(next, { item: null, action: "select-all" });
  }
  _handleToggleGroupSelectAll(group) {
    if (this._selection !== "multi") return;
    const enabled = group.items.filter((i) => !i.isDisabled).map((i) => i.id);
    if (enabled.length === 0) return;
    const arr = Array.isArray(this._draft) ? this._draft : [];
    const allSelected = enabled.every((id) => arr.includes(id));
    const next = allSelected ? arr.filter((id) => !enabled.includes(id)) : Array.from(/* @__PURE__ */ new Set([...arr, ...enabled]));
    this._updateDraft(next, { item: null, action: "group-select-all" });
  }
  _updateDraft(next, meta) {
    this._draft = next;
    if ((this._options.commitOn ?? "apply") === "change") {
      this._committed = cloneValue(next);
      this._fireChange(next, meta);
      this._dispatchEvent("hpop:change", { value: cloneValue(next) });
    }
    this._renderBodyAndRewireDnD();
  }
  _renderBodyAndRewireDnD() {
    this._renderBody();
    if (this.isOpen()) {
      this._teardownSortable();
      this._mountSortable();
    }
  }
  // ---------------------------------------------------------------------------
  // Footer actions
  // ---------------------------------------------------------------------------
  _buildPopoverActions() {
    if (this._options.actions === false) return [];
    if (this._options.actions) return this._options.actions;
    return [
      {
        id: "reset",
        label: "Reset",
        variant: "tertiary",
        action: () => {
          this._handleReset();
          return false;
        }
      },
      {
        id: "cancel",
        label: "Cancel",
        variant: "secondary",
        action: () => this._handleCancel()
      },
      {
        id: "apply",
        label: "Apply",
        variant: "primary",
        action: () => this._handleApply()
      }
    ];
  }
  _handleApply() {
    var _a, _b;
    const next = cloneValue(this._draft);
    const result = (_b = (_a = this._options).onApply) == null ? void 0 : _b.call(_a, next);
    this._committed = next;
    this._fireChange(next, { item: null, action: "apply" });
    this._dispatchEvent("hpop:apply", { value: cloneValue(next) });
    if (result === false) return false;
    return void 0;
  }
  _handleCancel() {
    var _a, _b;
    this._draft = defaultDraft(this._selection, this._committed);
    this._query = "";
    this._renderSticky();
    this._renderBodyAndRewireDnD();
    (_b = (_a = this._options).onCancel) == null ? void 0 : _b.call(_a);
    this._dispatchEvent("hpop:cancel", {});
  }
  _handleReset() {
    var _a, _b;
    const cleared = this._selection === "multi" ? [] : null;
    this._draft = cleared;
    this._query = "";
    if ((this._options.commitOn ?? "apply") === "change") {
      this._committed = cloneValue(this._draft);
      this._fireChange(this._draft, { item: null, action: "reset" });
    }
    this._renderSticky();
    this._renderBodyAndRewireDnD();
    (_b = (_a = this._options).onReset) == null ? void 0 : _b.call(_a);
    this._dispatchEvent("hpop:reset", {});
  }
  // ---------------------------------------------------------------------------
  // Search
  // ---------------------------------------------------------------------------
  _handleSearchInput(value) {
    this._query = value;
    this._renderBodyAndRewireDnD();
    this._applyPanelClasses();
    this._updateSearchCounter();
  }
  _handleSearchClear() {
    this._query = "";
    if (this._searchInstance) {
      this._searchInstance.value("");
    }
    this._renderBodyAndRewireDnD();
    this._applyPanelClasses();
    this._updateSearchCounter();
  }
  _updateSearchCounter() {
    if (!this._searchInstance) return;
    const searchCfg = this._options.search && typeof this._options.search === "object" ? this._options.search : null;
    if (!(searchCfg == null ? void 0 : searchCfg.counter)) return;
    if (!this._query) return;
    const flatAll = flattenItems(this._items);
    const filteredCount = this._getFilteredItems().__filteredCount;
    this._searchInstance.counter(filteredCount, flatAll.length);
  }
  // ---------------------------------------------------------------------------
  // DnD adapter
  // ---------------------------------------------------------------------------
  _mountSortable() {
    var _a;
    if (this._sortable) return;
    if (!this._options.enableReorder) return;
    if (this._isLoading) return;
    const list = (_a = this._bodyEl) == null ? void 0 : _a.querySelector(".o9ds-hpop__list");
    if (!list) return;
    this._sortable = core.createSortableList(list, {
      itemSelector: ".o9ds-hpop__opt",
      handleSelector: ".o9ds-hpop__opt__drag",
      getGroupOf: (el) => el.dataset.group ?? null,
      allowCrossGroup: !!this._options.crossGroupDrag,
      onCommit: (fromIndex, toIndex, fromGroup, toGroup) => {
        var _a2, _b;
        (_b = (_a2 = this._options).onReorder) == null ? void 0 : _b.call(_a2, {
          fromIndex,
          toIndex,
          fromGroup,
          toGroup,
          items: this._items
        });
        this._dispatchEvent("hpop:reorder", {
          fromIndex,
          toIndex,
          fromGroup,
          toGroup
        });
      }
    });
  }
  _teardownSortable() {
    var _a;
    (_a = this._sortable) == null ? void 0 : _a.destroy();
    this._sortable = null;
  }
  // ---------------------------------------------------------------------------
  // Resize adapter
  // ---------------------------------------------------------------------------
  _mountResize() {
    if (this._resize) return;
    if (this._options.isResizable === false) return;
    const panel = this._panelEl;
    if (!panel) return;
    this._resize = core.createResizeHandle(panel, {
      corners: ["bottom-left", "bottom-right"],
      min: { width: HPOP_MIN_WIDTH, height: HPOP_MIN_HEIGHT },
      max: () => ({
        width: HPOP_MAX_WIDTH,
        height: Math.floor(window.innerHeight * 0.9)
      }),
      viewportPadding: 16,
      onResize: (rect) => {
        var _a, _b;
        (_b = (_a = this._options).onResize) == null ? void 0 : _b.call(_a, rect);
      },
      onCommit: (rect) => {
        var _a, _b, _c;
        (_b = (_a = this._options).onResizeCommit) == null ? void 0 : _b.call(_a, rect);
        (_c = this._popover) == null ? void 0 : _c.reposition();
      }
    });
    this._resize.mount();
  }
  _teardownResize() {
    var _a;
    (_a = this._resize) == null ? void 0 : _a.destroy();
    this._resize = null;
  }
  // ---------------------------------------------------------------------------
  // Inner instance teardown
  // ---------------------------------------------------------------------------
  _destroyBodyInstances() {
    var _a, _b;
    (_a = this._globalSAInstance) == null ? void 0 : _a.destroy();
    this._globalSAInstance = null;
    this._groupSAInstances.forEach((i) => i.destroy());
    this._groupSAInstances = [];
    this._itemInstances.forEach((i) => i.destroy());
    this._itemInstances = [];
    this._chevInstances.forEach((i) => i.destroy());
    this._chevInstances = [];
    (_b = this._clearSearchInstance) == null ? void 0 : _b.destroy();
    this._clearSearchInstance = null;
  }
  _destroyInnerInstances() {
    var _a, _b;
    (_a = this._searchInstance) == null ? void 0 : _a.destroy();
    this._searchInstance = null;
    (_b = this._conditionalInstance) == null ? void 0 : _b.destroy();
    this._conditionalInstance = null;
    this._destroyBodyInstances();
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  _fireChange(value, meta) {
    var _a, _b;
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, cloneValue(value), meta);
  }
  _dispatchEvent(name, detail) {
    var _a;
    (_a = this._trigger) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(name, { bubbles: true, cancelable: true, detail })
    );
  }
}
exports.HPOP_DEFAULT_WIDTH = HPOP_DEFAULT_WIDTH;
exports.HPOP_MAX_WIDTH = HPOP_MAX_WIDTH;
exports.HPOP_MIN_HEIGHT = HPOP_MIN_HEIGHT;
exports.HPOP_MIN_WIDTH = HPOP_MIN_WIDTH;
exports.O9HybridPopover = O9HybridPopover;
//# sourceMappingURL=HybridPopover.cjs.map
