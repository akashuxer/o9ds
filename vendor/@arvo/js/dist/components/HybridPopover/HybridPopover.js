import { filterGroups, filterItems, createSortableList, createResizeHandle, createTabRoving } from "@arvo/core";
import { ArvoPopover } from "../Popover/Popover.js";
import { ArvoSearch } from "../Search/Search.js";
import { ArvoCheckbox } from "../Checkbox/Checkbox.js";
import { ArvoRadio } from "../Radio/Radio.js";
import { ArvoButton } from "../Button/Button.js";
import { ArvoIconButton } from "../IconButton/IconButton.js";
import { ArvoButtonGroup } from "../ButtonGroup/ButtonGroup.js";
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
const EMPTY_DEFAULTS = {
  noDataTitle: "No data available",
  noDataMessage: "Adjust your filter search query.",
  noResultsTitle: "No results found",
  noResultsMessage: "Adjust your filter search query.",
  noResultsClearLabel: "Clear Search"
};
let _idCounter = 0;
class ArvoHybridPopover {
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
    this._roving = null;
    this._trigger = element;
    this._options = { ...options ?? {} };
    this._id = `arvo-hpop-${++_idCounter}`;
    const variant = this._options.variant ?? "multi";
    this._selection = resolveSelection(variant, this._options.selectionMode);
    if (variant === "boolean" || variant === "conditional" || variant === "custom") {
      console.warn(
        `HybridPopover: variant "${variant}" is not yet implemented.`
      );
    }
    this._isControlledItems = this._options.items !== void 0 && this._options.defaultItems === void 0;
    this._items = this._options.items ?? this._options.defaultItems ?? [];
    this._isLoading = !!this._options.isLoading;
    this._resizedWidth = clamp(
      this._options.width ?? HPOP_DEFAULT_WIDTH,
      HPOP_MIN_WIDTH,
      HPOP_MAX_WIDTH
    );
    this._resizedHeight = this._options.height ?? null;
    const seedRaw = this._options.value !== void 0 ? this._options.value : this._options.defaultValue ?? null;
    this._committed = defaultDraft(this._selection, seedRaw);
    this._draft = defaultDraft(this._selection, this._committed);
    this._stickyEl = document.createElement("div");
    this._stickyEl.className = "arvo-hpop__sticky";
    this._bodyEl = document.createElement("div");
    this._bodyEl.className = "arvo-hpop__body-root";
    this._popover = new ArvoPopover(element, {
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
    return new ArvoHybridPopover(element, options);
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
      this._teardownRoving();
    } else if (this.isOpen()) {
      this._mountSortable();
      this._mountRoving();
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
      this._teardownRoving();
      this._mountRoving();
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
    this._teardownRoving();
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
    this._mountRoving();
    this._dispatchEvent("hpop:open", {});
  }
  _handlePopoverClose() {
    this._teardownSortable();
    this._teardownResize();
    this._teardownRoving();
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
      if (c.startsWith("arvo-hpop")) toRemove.push(c);
    });
    toRemove.forEach((c) => panel.classList.remove(c));
    panel.classList.add("arvo-hpop");
    panel.classList.add(`arvo-hpop--${variant}`);
    if (searchEnabled) panel.classList.add("arvo-hpop--with-search");
    if (this._selection === "multi" && conditional) {
      panel.classList.add("arvo-hpop--with-conditional");
    }
    if (isResizable) panel.classList.add("arvo-hpop--with-resize");
    if (totalCount === 0) panel.classList.add("arvo-hpop--no-data");
    else if (filteredCount === 0) panel.classList.add("arvo-hpop--no-results");
    if (this._isLoading) panel.classList.add("loading");
  }
  _applyDimensions() {
    const panel = this._panelEl;
    if (!panel) return;
    panel.style.width = `${clamp(
      this._resizedWidth,
      HPOP_MIN_WIDTH,
      HPOP_MAX_WIDTH
    )}px`;
    if (this._resizedHeight != null) {
      const maxH = Math.floor(window.innerHeight * 0.9);
      panel.style.height = `${clamp(
        this._resizedHeight,
        HPOP_MIN_HEIGHT,
        maxH
      )}px`;
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
      filtered = filterGroups(items, {
        query,
        keys: ["label", "secondaryLabel"]
      });
    } else {
      filtered = filterItems(items, {
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
      searchWrap.className = "arvo-hpop__search";
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
      this._searchInstance = ArvoSearch.initialize(searchEl, {
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
      condWrap.className = "arvo-hpop__cond";
      const condEl = document.createElement("div");
      condWrap.appendChild(condEl);
      this._conditionalInstance = ArvoButtonGroup.initialize(condEl, {
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
      list.className = "arvo-hpop__list";
      list.setAttribute("aria-hidden", "true");
      for (let i = 0; i < SKELETON_ROW_COUNT; i++) {
        const row = document.createElement("div");
        row.className = "arvo-hpop__skeleton";
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
    wrap.className = `arvo-hpop__empty arvo-hpop__empty--${kind}`;
    wrap.setAttribute("role", "status");
    const illus = document.createElement("span");
    illus.className = kind === "no-results" ? "arvo-hpop__empty-illus o9illus o9illus-no-results-found" : "arvo-hpop__empty-illus o9illus o9illus-no-filters-found";
    illus.setAttribute("aria-hidden", "true");
    wrap.appendChild(illus);
    const titleEl = document.createElement("span");
    titleEl.className = "arvo-hpop__empty-title";
    titleEl.textContent = kind === "no-results" ? cfg.noResultsTitle : cfg.noDataTitle;
    wrap.appendChild(titleEl);
    const msgEl = document.createElement("span");
    msgEl.className = "arvo-hpop__empty-msg";
    msgEl.textContent = kind === "no-results" ? cfg.noResultsMessage : cfg.noDataMessage;
    wrap.appendChild(msgEl);
    if (kind === "no-results") {
      const actionWrap = document.createElement("span");
      actionWrap.className = "arvo-hpop__empty-action";
      const btnEl = document.createElement("button");
      this._clearSearchInstance = ArvoButton.initialize(btnEl, {
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
    list.className = "arvo-hpop__list";
    const listRole = this._selection === "none" ? "group" : "listbox";
    list.setAttribute("role", listRole);
    list.setAttribute(
      "aria-label",
      this._options.title ?? "Filter options"
    );
    if (this._selection === "multi") {
      list.setAttribute("aria-multiselectable", "true");
    }
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
        grpEl.className = "arvo-hpop__grp";
        grpEl.setAttribute("data-group", group.id);
        if (gi > 0) {
          const div = document.createElement("div");
          div.className = "arvo-hpop__divider";
          div.setAttribute("role", "separator");
          grpEl.appendChild(div);
        }
        if (group.label) {
          const hdr = document.createElement("div");
          hdr.className = "arvo-hpop__grp-hdr";
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
    row.className = isGroupRow ? "arvo-hpop__sa arvo-hpop__sa--group" : "arvo-hpop__sa";
    row.setAttribute("role", "option");
    row.tabIndex = -1;
    row.setAttribute("aria-selected", String(isChecked));
    row.setAttribute("data-sa", isGroupRow ? "group" : "global");
    const cbEl = document.createElement("span");
    const cb = ArvoCheckbox.initialize(cbEl, {
      size: "sm",
      isChecked,
      isIndeterminate,
      isDisabled: false,
      onChange: () => onToggle()
    });
    cbEl.setAttribute("aria-label", label || "Select all");
    row.appendChild(cbEl);
    const lblEl = document.createElement("span");
    lblEl.className = "arvo-hpop__sa__lbl";
    lblEl.textContent = label || "Select all";
    lblEl.addEventListener("click", () => onToggle());
    row.appendChild(lblEl);
    row.addEventListener("keydown", (event) => {
      if (event.key !== " " && event.key !== "Enter") return;
      event.preventDefault();
      onToggle();
    });
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
    const rowRole = this._selection === "none" ? "listitem" : "option";
    const row = document.createElement("div");
    row.className = "arvo-hpop__opt";
    row.setAttribute("role", rowRole);
    row.tabIndex = -1;
    if (rowRole === "option" && showCheckSlot) {
      row.setAttribute("aria-selected", String(isChecked));
    }
    if (itemDisabled) row.setAttribute("aria-disabled", "true");
    row.setAttribute("data-id", item.id);
    if (groupId) row.setAttribute("data-group", groupId);
    if (isDraggable) {
      const drag = document.createElement("span");
      drag.className = "arvo-hpop__opt__drag";
      drag.setAttribute("role", "button");
      drag.tabIndex = -1;
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
      spacer.className = "arvo-hpop__opt__spacer";
      spacer.setAttribute("aria-hidden", "true");
      row.appendChild(spacer);
    }
    if (showCheckSlot) {
      const checkSlot = document.createElement("span");
      checkSlot.className = "arvo-hpop__opt__check";
      const ctrlEl = document.createElement("span");
      checkSlot.appendChild(ctrlEl);
      if (isMulti) {
        const cb = ArvoCheckbox.initialize(ctrlEl, {
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
        const rb = ArvoRadio.initialize(ctrlEl, {
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
    lbl.className = "arvo-hpop__opt__lbl";
    lbl.appendChild(document.createTextNode(item.label));
    if (item.secondaryLabel) {
      const sec = document.createElement("span");
      sec.className = "arvo-hpop__opt__secondary";
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
      ex.className = "arvo-hpop__opt__exclude o9con o9con-exclude";
      ex.setAttribute("aria-label", "Excluded");
      ex.setAttribute("role", "img");
      row.appendChild(ex);
    }
    row.addEventListener("keydown", (event) => {
      if (event.key !== " " && event.key !== "Enter") return;
      if (itemDisabled) return;
      if (this._selection === "none") return;
      const target = event.target;
      if (target !== row) {
        const interactive = target.closest('button, a, [role="button"]');
        if (interactive && interactive !== row) return;
      }
      event.preventDefault();
      this._handleToggleItem(item);
    });
    if (showInline) {
      const chevWrap = document.createElement("span");
      chevWrap.className = "arvo-hpop__opt__chev";
      const chevEl = document.createElement("button");
      const chev = ArvoIconButton.initialize(chevEl, {
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
      this._teardownRoving();
      this._mountRoving();
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
    const list = (_a = this._bodyEl) == null ? void 0 : _a.querySelector(".arvo-hpop__list");
    if (!list) return;
    this._sortable = createSortableList(list, {
      itemSelector: ".arvo-hpop__opt",
      handleSelector: ".arvo-hpop__opt__drag",
      getGroupOf: (el) => el.dataset.group ?? null,
      allowCrossGroup: !!this._options.crossGroupDrag,
      onCommit: (fromIndex, toIndex, fromGroup, toGroup) => {
        var _a2, _b;
        const next = applyReorder(
          this._items,
          fromIndex,
          toIndex,
          fromGroup,
          toGroup
        );
        if (!this._isControlledItems) {
          this._items = next;
          this._renderBody();
          this._teardownSortable();
          this._mountSortable();
          this._teardownRoving();
          this._mountRoving();
        }
        (_b = (_a2 = this._options).onReorder) == null ? void 0 : _b.call(_a2, {
          fromIndex,
          toIndex,
          fromGroup,
          toGroup,
          items: next
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
    this._resize = createResizeHandle(panel, {
      corners: ["bottom-left", "bottom-right"],
      min: { width: HPOP_MIN_WIDTH, height: HPOP_MIN_HEIGHT },
      max: (rect) => ({
        width: Math.max(
          HPOP_MIN_WIDTH,
          Math.min(HPOP_MAX_WIDTH, window.innerWidth - rect.left - 16)
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
        var _a, _b;
        this._resizedWidth = rect.width;
        this._resizedHeight = rect.height;
        (_b = (_a = this._options).onResize) == null ? void 0 : _b.call(_a, rect);
      },
      onCommit: (rect) => {
        var _a, _b, _c;
        this._resizedWidth = rect.width;
        this._resizedHeight = rect.height;
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
  // Roving tabindex adapter
  // ---------------------------------------------------------------------------
  _mountRoving() {
    var _a;
    if (this._roving) return;
    if (this._isLoading) return;
    const list = (_a = this._bodyEl) == null ? void 0 : _a.querySelector(".arvo-hpop__list");
    if (!list) return;
    const items = this._collectRovingItems(list);
    if (items.length === 0) return;
    this._roving = createTabRoving();
    this._roving.activate({
      container: list,
      items,
      orientation: "vertical",
      wrap: false
    });
    list.querySelectorAll(
      ".arvo-checkbox__input, .arvo-radio__input"
    ).forEach((input) => {
      input.tabIndex = -1;
    });
  }
  _teardownRoving() {
    var _a;
    (_a = this._roving) == null ? void 0 : _a.deactivate();
    this._roving = null;
  }
  _collectRovingItems(list) {
    const sa = Array.from(
      list.querySelectorAll(".arvo-hpop__sa")
    ).filter((el) => el.getAttribute("aria-disabled") !== "true");
    const opts = Array.from(
      list.querySelectorAll(".arvo-hpop__opt")
    ).filter((el) => el.getAttribute("aria-disabled") !== "true");
    return [...sa, ...opts];
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
export {
  ArvoHybridPopover,
  HPOP_DEFAULT_WIDTH,
  HPOP_MAX_WIDTH,
  HPOP_MIN_HEIGHT,
  HPOP_MIN_WIDTH
};
//# sourceMappingURL=HybridPopover.js.map
