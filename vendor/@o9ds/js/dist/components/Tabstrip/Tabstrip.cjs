"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const IconButton = require("../IconButton/IconButton.cjs");
const ActionMenu = require("../ActionMenu/ActionMenu.cjs");
function sortTabs(tabs) {
  const pinned = tabs.filter((t) => t.pinned);
  const unpinned = tabs.filter((t) => !t.pinned);
  const byOrder = (a, b) => {
    const aO = a.order ?? Infinity;
    const bO = b.order ?? Infinity;
    if (aO !== Infinity || bO !== Infinity) return aO - bO;
    return 0;
  };
  pinned.sort(byOrder);
  unpinned.sort(byOrder);
  return [...pinned, ...unpinned];
}
function getTabOrder(tabs) {
  return sortTabs(tabs).map((t) => t.id);
}
function calcActionsWidth(variant, size, isPinnable, isClosable, tab, globalClosable) {
  if (variant === "tertiary") return 0;
  const btnSize = size === "sm" ? 20 : 24;
  const gap = 1;
  let count = 0;
  if (isPinnable) count++;
  if (!tab.pinned && (tab.isClosable ?? globalClosable)) count++;
  if (count === 0) return 0;
  return count * btnSize + (count > 1 ? gap : 0) + 4;
}
let _idCounter = 0;
const _O9Tabstrip = class _O9Tabstrip {
  constructor(element, options) {
    this._listEl = null;
    this._overflowWrapperEl = null;
    this._overflowMenuInstance = null;
    this._overflowBtnEl = null;
    this._tabs = [];
    this._displayOrder = [];
    this._hiddenTabIds = /* @__PURE__ */ new Set();
    this._promotedTabId = null;
    this._resizeObserver = null;
    this._rafId = 0;
    this._element = element;
    this._uid = ++_idCounter;
    const variant = (options == null ? void 0 : options.variant) && _O9Tabstrip.VARIANTS.includes(options.variant) ? options.variant : _O9Tabstrip.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _O9Tabstrip.SIZES.includes(options.size) ? options.size : _O9Tabstrip.DEFAULTS.size;
    this._options = {
      ..._O9Tabstrip.DEFAULTS,
      ...options,
      variant,
      size,
      tabs: (options == null ? void 0 : options.tabs) ? [...options.tabs] : [],
      selectedId: (options == null ? void 0 : options.selectedId) ?? null,
      onSelect: (options == null ? void 0 : options.onSelect) ?? null,
      onClose: (options == null ? void 0 : options.onClose) ?? null,
      onPin: (options == null ? void 0 : options.onPin) ?? null
    };
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
    this._boundHandleClick = this._handleClick.bind(this);
    this._render();
    this._bindEvents();
    this._setupOverflowDetection();
    if (!this._options.selectedId && this._options.tabs.length > 0) {
      const first = this._options.tabs.find((t) => !t.isDisabled);
      if (first) {
        this._options.selectedId = first.id;
        this._syncSelection();
      }
    }
  }
  static initialize(element, options) {
    return new _O9Tabstrip(element, options);
  }
  // ── Display ordering ─────────────────────────────────────────────────
  _computeDisplayOrder() {
    const sorted = sortTabs(this._options.tabs);
    if (this._promotedTabId) {
      const idx = sorted.findIndex((t) => t.id === this._promotedTabId);
      if (idx >= 0 && !sorted[idx].pinned) {
        const [promoted] = sorted.splice(idx, 1);
        const firstUnpinnedIdx = sorted.findIndex((t) => !t.pinned);
        if (firstUnpinnedIdx >= 0) {
          sorted.splice(firstUnpinnedIdx, 0, promoted);
        } else {
          sorted.push(promoted);
        }
      }
    }
    return sorted;
  }
  // ── Rendering ───────────────────────────────────────────────────────────
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    this._tabs = [];
    this._displayOrder = this._computeDisplayOrder();
    const { variant, size, actionsVisibility, isDisabled, isLoading } = this._options;
    el.classList.add("o9ds-tabs", `o9ds-tabs--${variant}`, `o9ds-tabs--${size}`);
    if (actionsVisibility === "always") el.classList.add("o9ds-tabs--actions-always");
    if (isDisabled) el.classList.add("is-disabled");
    if (isLoading) {
      el.classList.add("loading");
      el.setAttribute("aria-busy", "true");
    }
    this._listEl = document.createElement("div");
    this._listEl.className = "o9ds-tabs__list";
    this._listEl.setAttribute("role", "tablist");
    this._listEl.setAttribute("aria-orientation", "horizontal");
    this._listEl.setAttribute("aria-label", "Tabs");
    for (const tab of this._displayOrder) {
      const entry = this._createTabEntry(tab);
      this._tabs.push(entry);
      this._listEl.appendChild(entry.el);
    }
    el.appendChild(this._listEl);
    this._overflowWrapperEl = document.createElement("div");
    this._overflowWrapperEl.className = "o9ds-tabs__overflow-btn";
    this._overflowBtnEl = document.createElement("button");
    this._overflowWrapperEl.appendChild(this._overflowBtnEl);
    this._overflowMenuInstance = ActionMenu.O9ActionMenu.initialize(this._overflowBtnEl, {
      items: [],
      placement: "bottom-end",
      trailingActionsVisibility: actionsVisibility === "always" ? "always" : "hover",
      closeOnSelect: true,
      isDisabled,
      onSelect: (item) => {
        var _a, _b;
        if (item.isDisabled) return;
        const idx = this._options.tabs.findIndex((t) => t.id === item.id);
        this._options.selectedId = item.id;
        this._promotedTabId = item.id;
        this._rebuildDisplay();
        this._syncSelection();
        this._dispatchEvent("tabs:select", { id: item.id, index: idx });
        (_b = (_a = this._options).onSelect) == null ? void 0 : _b.call(_a, { id: item.id, index: idx });
      }
    });
    IconButton.O9IconButton.initialize(this._overflowBtnEl, {
      icon: "ellipsis-v",
      variant: "tertiary",
      size: this._iconBtnSize(),
      tooltip: "More tabs",
      isDisabled,
      isLoading
    });
    el.appendChild(this._overflowWrapperEl);
    this._syncSelection();
    this._lockTabWidths();
  }
  _createTabEntry(tab) {
    const btn = document.createElement("div");
    btn.setAttribute("role", "tab");
    btn.setAttribute("data-tab-id", tab.id);
    btn.setAttribute("aria-selected", "false");
    btn.tabIndex = -1;
    if (tab.panelId) btn.setAttribute("aria-controls", tab.panelId);
    const isDisabled = tab.isDisabled || this._options.isDisabled;
    if (isDisabled) btn.setAttribute("aria-disabled", "true");
    btn.className = [
      "o9ds-tabs__tab",
      isDisabled ? "is-disabled" : "",
      tab.pinned ? "is-pinned" : ""
    ].filter(Boolean).join(" ");
    if (this._options.actionsVisibility === "hover") {
      const actionsW = calcActionsWidth(
        this._options.variant,
        this._options.size,
        this._options.isPinnable,
        this._options.isClosable,
        tab,
        this._options.isClosable
      );
      if (actionsW > 0) {
        btn.style.setProperty("--o9ds-tabs-actions-w", `${actionsW}px`);
      }
    }
    const leftEl = document.createElement("span");
    leftEl.className = "o9ds-tabs__tab-lft";
    let icoEl = null;
    if (tab.icon) {
      icoEl = document.createElement("span");
      icoEl.className = `o9ds-tabs__tab-ico o9con o9con-${tab.icon}`;
      icoEl.setAttribute("aria-hidden", "true");
      leftEl.appendChild(icoEl);
    }
    const lblEl = document.createElement("span");
    lblEl.className = "o9ds-tabs__tab-lbl";
    lblEl.textContent = tab.label;
    leftEl.appendChild(lblEl);
    btn.appendChild(leftEl);
    let actionsEl = null;
    let pinBtn = null;
    let closeBtn = null;
    const showActions = this._options.variant !== "tertiary";
    const tabClosable = showActions && !tab.pinned && (tab.isClosable ?? this._options.isClosable);
    const tabPinnable = showActions && this._options.isPinnable;
    if (showActions && (tabPinnable || tabClosable)) {
      actionsEl = document.createElement("span");
      actionsEl.className = "o9ds-tabs__tab-actions";
      if (tabPinnable) {
        const pinBtnEl = document.createElement("button");
        pinBtnEl.tabIndex = -1;
        actionsEl.appendChild(pinBtnEl);
        pinBtn = IconButton.O9IconButton.initialize(pinBtnEl, {
          icon: tab.pinned ? "push-pin-filled" : "push-pin",
          variant: "tertiary",
          size: this._iconBtnSize(),
          tooltip: tab.pinned ? "Unpin tab" : "Pin tab",
          isDisabled: tab.isDisabled || this._options.isDisabled,
          isLoading: this._options.isLoading,
          isSelected: tab.pinned,
          onClick: (e) => {
            var _a, _b;
            e.stopPropagation();
            if (tab.isDisabled || this._options.isDisabled || this._options.isLoading) return;
            const newPinned = !tab.pinned;
            tab.pinned = newPinned;
            const updated = this._options.tabs.map(
              (t) => t.id === tab.id ? { ...t, pinned: newPinned } : t
            );
            const tabOrder = getTabOrder(updated);
            this._rebuildDisplay();
            this._dispatchEvent("tabs:pin", { id: tab.id, pinned: newPinned, tabOrder });
            (_b = (_a = this._options).onPin) == null ? void 0 : _b.call(_a, { id: tab.id, pinned: newPinned, tabOrder });
          }
        });
      }
      if (tabClosable) {
        const closeBtnEl = document.createElement("button");
        closeBtnEl.tabIndex = -1;
        actionsEl.appendChild(closeBtnEl);
        closeBtn = IconButton.O9IconButton.initialize(closeBtnEl, {
          icon: "close",
          variant: "tertiary",
          size: this._iconBtnSize(),
          tooltip: "Close tab",
          isDisabled: tab.isDisabled || this._options.isDisabled,
          isLoading: this._options.isLoading,
          onClick: (e) => {
            var _a, _b;
            e.stopPropagation();
            if (tab.isDisabled || this._options.isDisabled || this._options.isLoading) return;
            const idx = this._options.tabs.findIndex((t) => t.id === tab.id);
            this._dispatchEvent("tabs:close", { id: tab.id, index: idx });
            (_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a, { id: tab.id, index: idx });
          }
        });
      }
      btn.appendChild(actionsEl);
    }
    return { item: tab, el: btn, leftEl, lblEl, icoEl, actionsEl, pinBtn, closeBtn };
  }
  _iconBtnSize() {
    return this._options.size === "sm" ? "sm" : "md";
  }
  _lockTabWidths() {
    if (this._options.actionsVisibility !== "hover") return;
    for (const entry of this._tabs) {
      entry.el.style.minWidth = "";
    }
    requestAnimationFrame(() => {
      for (const entry of this._tabs) {
        entry.el.style.minWidth = `${entry.el.offsetWidth}px`;
      }
    });
  }
  _rebuildDisplay() {
    var _a, _b;
    if (!this._listEl) return;
    for (const entry of this._tabs) {
      (_a = entry.pinBtn) == null ? void 0 : _a.destroy();
      (_b = entry.closeBtn) == null ? void 0 : _b.destroy();
      entry.el.remove();
    }
    this._tabs = [];
    this._displayOrder = this._computeDisplayOrder();
    for (const tab of this._displayOrder) {
      const entry = this._createTabEntry(tab);
      this._tabs.push(entry);
      this._listEl.appendChild(entry.el);
    }
    this._syncSelection();
    this._lockTabWidths();
    this._checkOverflow();
  }
  // ── Overflow detection ─────────────────────────────────────────────────
  _setupOverflowDetection() {
    if (!this._listEl) return;
    this._resizeObserver = new ResizeObserver(() => this._checkOverflow());
    this._resizeObserver.observe(this._listEl);
    this._checkOverflow();
  }
  _checkOverflow() {
    cancelAnimationFrame(this._rafId);
    this._rafId = requestAnimationFrame(() => {
      const listEl = this._listEl;
      if (!listEl || !this._element) return;
      const tabEls = listEl.querySelectorAll('[role="tab"]');
      for (const tabEl of tabEls) {
        tabEl.style.visibility = "";
        tabEl.style.position = "";
        tabEl.style.pointerEvents = "";
      }
      const listRect = listEl.getBoundingClientRect();
      const newHidden = /* @__PURE__ */ new Set();
      let firstOverflowReached = false;
      for (const tabEl of tabEls) {
        const tabRect = tabEl.getBoundingClientRect();
        if (firstOverflowReached || tabRect.right > listRect.right) {
          const id = tabEl.getAttribute("data-tab-id");
          if (id) newHidden.add(id);
          firstOverflowReached = true;
        }
      }
      if (newHidden.size > 0) {
        const triggerW = 32;
        const adjustedRight = listRect.right - triggerW;
        newHidden.clear();
        firstOverflowReached = false;
        for (const tabEl of tabEls) {
          const tabRect = tabEl.getBoundingClientRect();
          if (firstOverflowReached || tabRect.right > adjustedRight) {
            const id = tabEl.getAttribute("data-tab-id");
            if (id) newHidden.add(id);
            firstOverflowReached = true;
          }
        }
      }
      if (this._promotedTabId && newHidden.has(this._promotedTabId)) {
        const lastVisibleUnpinned = this._displayOrder.filter((t) => !t.pinned && !newHidden.has(t.id)).pop();
        if (lastVisibleUnpinned) {
          newHidden.delete(this._promotedTabId);
          newHidden.add(lastVisibleUnpinned.id);
        }
      }
      for (const tabEl of tabEls) {
        const id = tabEl.getAttribute("data-tab-id");
        if (id && newHidden.has(id)) {
          tabEl.style.visibility = "hidden";
          tabEl.style.position = "absolute";
          tabEl.style.pointerEvents = "none";
        }
      }
      this._hiddenTabIds = newHidden;
      this._element.classList.toggle("has-overflow", newHidden.size > 0);
      this._updateOverflowMenu();
    });
  }
  _updateOverflowMenu() {
    if (!this._overflowMenuInstance) return;
    const showActions = this._options.variant !== "tertiary";
    const items = this._displayOrder.filter((t) => this._hiddenTabIds.has(t.id)).map((tab) => {
      const trailingActions = [];
      if (showActions && this._options.isPinnable) {
        trailingActions.push({
          id: `pin-${tab.id}`,
          icon: tab.pinned ? "push-pin-filled" : "push-pin",
          ariaLabel: tab.pinned ? "Unpin tab" : "Pin tab",
          isDisabled: tab.isDisabled || this._options.isDisabled,
          onClick: () => {
            var _a, _b;
            const newPinned = !tab.pinned;
            tab.pinned = newPinned;
            const updated = this._options.tabs.map(
              (t) => t.id === tab.id ? { ...t, pinned: newPinned } : t
            );
            const tabOrder = getTabOrder(updated);
            this._rebuildDisplay();
            this._dispatchEvent("tabs:pin", { id: tab.id, pinned: newPinned, tabOrder });
            (_b = (_a = this._options).onPin) == null ? void 0 : _b.call(_a, { id: tab.id, pinned: newPinned, tabOrder });
            return false;
          }
        });
      }
      if (showActions && !tab.pinned && (tab.isClosable ?? this._options.isClosable)) {
        trailingActions.push({
          id: `close-${tab.id}`,
          icon: "close",
          ariaLabel: "Close tab",
          isDisabled: tab.isDisabled || this._options.isDisabled,
          onClick: () => {
            var _a, _b;
            const idx = this._options.tabs.findIndex((t) => t.id === tab.id);
            this._dispatchEvent("tabs:close", { id: tab.id, index: idx });
            (_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a, { id: tab.id, index: idx });
            return false;
          }
        });
      }
      return {
        id: tab.id,
        label: tab.label,
        icon: tab.icon,
        isDisabled: tab.isDisabled,
        active: tab.id === this._options.selectedId,
        trailingActions: trailingActions.length > 0 ? trailingActions : void 0
      };
    });
    this._overflowMenuInstance.updateItems(items);
  }
  // ── Events ──────────────────────────────────────────────────────────────
  _bindEvents() {
    var _a, _b;
    (_a = this._listEl) == null ? void 0 : _a.addEventListener("keydown", this._boundHandleKeyDown);
    (_b = this._listEl) == null ? void 0 : _b.addEventListener("click", this._boundHandleClick);
  }
  _handleClick(e) {
    var _a, _b;
    if (this._options.isDisabled || this._options.isLoading) return;
    const target = e.target.closest(
      ".o9ds-tabs__tab"
    );
    if (!target) return;
    const tabId = target.getAttribute("data-tab-id");
    if (!tabId) return;
    const entry = this._tabs.find((t) => t.item.id === tabId);
    if (!entry || entry.item.isDisabled) return;
    if (tabId === this._options.selectedId) return;
    const idx = this._options.tabs.findIndex((t) => t.id === tabId);
    this._options.selectedId = tabId;
    this._promotedTabId = null;
    this._syncSelection();
    this._dispatchEvent("tabs:select", { id: tabId, index: idx });
    (_b = (_a = this._options).onSelect) == null ? void 0 : _b.call(_a, { id: tabId, index: idx });
  }
  _handleKeyDown(e) {
    var _a, _b, _c, _d, _e;
    if (this._options.isDisabled || this._options.isLoading) return;
    const enabled = this._tabs.filter(
      (t) => !t.item.isDisabled && !this._hiddenTabIds.has(t.item.id)
    );
    if (enabled.length === 0) return;
    const currentId = (_a = document.activeElement) == null ? void 0 : _a.getAttribute(
      "data-tab-id"
    );
    const currentIdx = enabled.findIndex((t) => t.item.id === currentId);
    if (currentIdx < 0) return;
    let nextIdx = null;
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        nextIdx = (currentIdx + 1) % enabled.length;
        break;
      case "ArrowLeft":
        e.preventDefault();
        nextIdx = (currentIdx - 1 + enabled.length) % enabled.length;
        break;
      case "Home":
        e.preventDefault();
        nextIdx = 0;
        break;
      case "End":
        e.preventDefault();
        nextIdx = enabled.length - 1;
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (enabled[currentIdx].item.id !== this._options.selectedId) {
          const id = enabled[currentIdx].item.id;
          const tabsIdx = this._options.tabs.findIndex((t) => t.id === id);
          this._options.selectedId = id;
          this._promotedTabId = null;
          this._syncSelection();
          this._dispatchEvent("tabs:select", { id, index: tabsIdx });
          (_c = (_b = this._options).onSelect) == null ? void 0 : _c.call(_b, { id, index: tabsIdx });
        }
        return;
      case "Delete": {
        const tab = enabled[currentIdx].item;
        if (tab.pinned) return;
        const isClosable = tab.isClosable ?? this._options.isClosable;
        if (isClosable) {
          e.preventDefault();
          const tabsIdx = this._options.tabs.findIndex((t) => t.id === tab.id);
          this._dispatchEvent("tabs:close", { id: tab.id, index: tabsIdx });
          (_e = (_d = this._options).onClose) == null ? void 0 : _e.call(_d, { id: tab.id, index: tabsIdx });
        }
        return;
      }
      default:
        return;
    }
    if (nextIdx !== null) {
      enabled[nextIdx].el.focus();
    }
  }
  _syncSelection() {
    for (const entry of this._tabs) {
      const isSelected = entry.item.id === this._options.selectedId;
      entry.el.classList.toggle("active", isSelected);
      entry.el.setAttribute("aria-selected", String(isSelected));
      entry.el.tabIndex = isSelected ? 0 : -1;
    }
  }
  _dispatchEvent(name, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(name, { bubbles: true, cancelable: true, detail })
    );
  }
  // ── Public API ─────────────────────────────────────────────────────────
  select(id) {
    var _a, _b;
    const entry = this._tabs.find((t) => t.item.id === id);
    if (!entry || entry.item.isDisabled) return;
    if (id === this._options.selectedId) return;
    const idx = this._options.tabs.findIndex((t) => t.id === id);
    this._options.selectedId = id;
    this._promotedTabId = null;
    this._syncSelection();
    this._dispatchEvent("tabs:select", { id, index: idx });
    (_b = (_a = this._options).onSelect) == null ? void 0 : _b.call(_a, { id, index: idx });
  }
  selectedId() {
    return this._options.selectedId;
  }
  addTab(tab, index) {
    const insertIdx = index !== void 0 ? Math.min(index, this._options.tabs.length) : this._options.tabs.length;
    this._options.tabs.splice(insertIdx, 0, tab);
    this._rebuildDisplay();
  }
  removeTab(id) {
    var _a, _b;
    const tabIdx = this._options.tabs.findIndex((t) => t.id === id);
    if (tabIdx < 0) return;
    const wasSelected = id === this._options.selectedId;
    const entry = this._tabs.find((t) => t.item.id === id);
    if (entry) {
      (_a = entry.pinBtn) == null ? void 0 : _a.destroy();
      (_b = entry.closeBtn) == null ? void 0 : _b.destroy();
      entry.el.remove();
      this._tabs = this._tabs.filter((t) => t.item.id !== id);
    }
    this._options.tabs.splice(tabIdx, 1);
    if (wasSelected && this._options.tabs.length > 0) {
      const nextEnabled = this._options.tabs.find((t) => !t.isDisabled);
      if (nextEnabled) {
        this._options.selectedId = nextEnabled.id;
        this._rebuildDisplay();
        const focusEntry = this._tabs.find((t) => t.item.id === nextEnabled.id);
        focusEntry == null ? void 0 : focusEntry.el.focus();
      }
    } else {
      this._rebuildDisplay();
    }
  }
  disabled(state) {
    var _a, _b;
    if (state === void 0) return this._options.isDisabled;
    if (!this._element) return;
    this._options.isDisabled = state;
    this._element.classList.toggle("is-disabled", state);
    for (const entry of this._tabs) {
      if (state) {
        entry.el.classList.add("is-disabled");
        entry.el.setAttribute("aria-disabled", "true");
      } else if (!entry.item.isDisabled) {
        entry.el.classList.remove("is-disabled");
        entry.el.removeAttribute("aria-disabled");
      }
      (_a = entry.pinBtn) == null ? void 0 : _a.disabled(state || !!entry.item.isDisabled);
      (_b = entry.closeBtn) == null ? void 0 : _b.disabled(state || !!entry.item.isDisabled);
    }
  }
  setLoading(isLoading) {
    var _a, _b;
    if (!this._element) return;
    this._options.isLoading = isLoading;
    this._element.classList.toggle("loading", isLoading);
    if (isLoading) {
      this._element.setAttribute("aria-busy", "true");
    } else {
      this._element.removeAttribute("aria-busy");
    }
    for (const entry of this._tabs) {
      (_a = entry.pinBtn) == null ? void 0 : _a.setLoading(isLoading);
      (_b = entry.closeBtn) == null ? void 0 : _b.setLoading(isLoading);
    }
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f;
    (_a = this._listEl) == null ? void 0 : _a.removeEventListener("keydown", this._boundHandleKeyDown);
    (_b = this._listEl) == null ? void 0 : _b.removeEventListener("click", this._boundHandleClick);
    (_c = this._resizeObserver) == null ? void 0 : _c.disconnect();
    this._resizeObserver = null;
    cancelAnimationFrame(this._rafId);
    for (const entry of this._tabs) {
      (_d = entry.pinBtn) == null ? void 0 : _d.destroy();
      (_e = entry.closeBtn) == null ? void 0 : _e.destroy();
    }
    (_f = this._overflowMenuInstance) == null ? void 0 : _f.destroy();
    this._overflowMenuInstance = null;
    if (this._element) {
      this._element.textContent = "";
      this._element.removeAttribute("aria-busy");
      this._element.className = "";
    }
    this._tabs = [];
    this._element = null;
    this._listEl = null;
    this._overflowWrapperEl = null;
    this._overflowBtnEl = null;
  }
};
_O9Tabstrip.VARIANTS = ["primary", "secondary", "tertiary"];
_O9Tabstrip.SIZES = ["sm", "lg"];
_O9Tabstrip.DEFAULTS = {
  variant: "primary",
  size: "lg",
  tabs: [],
  selectedId: null,
  isClosable: false,
  isPinnable: false,
  actionsVisibility: "hover",
  isDisabled: false,
  isLoading: false,
  onSelect: null,
  onClose: null,
  onPin: null
};
let O9Tabstrip = _O9Tabstrip;
exports.O9Tabstrip = O9Tabstrip;
//# sourceMappingURL=Tabstrip.cjs.map
