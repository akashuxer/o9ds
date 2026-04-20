import { connectTooltip, tooltipManager, filterGroups, filterItems, createArrowNav, overlayHub, computePosition, createPositionWatcher, enter, exit } from "@o9ds/core";
import { createFormLabel, updateInlineAlert, createInlineAlert } from "@o9ds/utils";
import { O9Search } from "../Search/Search.js";
import { normalizeSearch } from "../../types/menu-search.js";
let _idCounter = 0;
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) {
    const result = [];
    for (const group of items) {
      for (const item of group.items) result.push(item);
    }
    return result;
  }
  return items;
}
const _O9Select = class _O9Select {
  constructor(element, options) {
    this._fieldEl = null;
    this._triggerEl = null;
    this._panelWrapperEl = null;
    this._panelEl = null;
    this._scrollEl = null;
    this._searchEl = null;
    this._searchInstance = null;
    this._errIcoEl = null;
    this._errIcoConnector = null;
    this._chevronEl = null;
    this._borderEl = null;
    this._hiddenInputEl = null;
    this._labelEl = null;
    this._alertEl = null;
    this._searchCfg = null;
    this._isOpen = false;
    this._isDisabled = false;
    this._isLoading = false;
    this._isReadonly = false;
    this._activeIndex = -1;
    this._query = "";
    this._value = null;
    this._arrowNav = null;
    this._positionWatcher = null;
    this._flatItems = [];
    this._itemEls = [];
    this._element = element;
    this._panelId = `o9ds-sel-${++_idCounter}`;
    this._options = {
      ..._O9Select.DEFAULTS,
      ...options,
      items: options.items ?? [],
      width: options.width ?? null,
      maxHeight: options.maxHeight ?? null,
      errorMsg: options.errorMsg ?? null,
      onChange: options.onChange ?? null,
      onOpen: options.onOpen ?? null,
      onClose: options.onClose ?? null,
      onOpenChange: options.onOpenChange ?? null
    };
    this._searchCfg = normalizeSearch(
      this._options.search
    );
    this._isDisabled = this._options.isDisabled;
    this._isLoading = this._options.isLoading;
    this._isReadonly = this._options.isReadOnly;
    this._value = options.value ?? null;
    this._boundHandleFieldClick = this._handleFieldClick.bind(this);
    this._boundHandleTriggerKeyDown = this._handleTriggerKeyDown.bind(this);
    this._boundHandlePanelKeyDown = this._handlePanelKeyDown.bind(this);
    this._boundHandleFocusIn = this._handleFocusIn.bind(this);
    this._buildRoot();
    this._buildPanel();
    this._applyRootClasses();
    this._applyWidthStyle();
    this._updateValueDisplay();
  }
  static initialize(element, options) {
    return new _O9Select(element, options);
  }
  // ---------------------------------------------------------------------------
  // Root DOM Build
  // ---------------------------------------------------------------------------
  _buildRoot() {
    const el = this._element;
    if (this._options.label) {
      const lbl = createFormLabel({
        text: this._options.label,
        for: `${this._panelId}-input`,
        isRequired: this._options.isRequired
      });
      if (lbl) {
        lbl.id = `${this._panelId}-lbl`;
        lbl.classList.add("o9ds-sel__lbl");
        el.appendChild(lbl);
        this._labelEl = lbl;
      }
    }
    this._fieldEl = document.createElement("div");
    this._fieldEl.className = "o9ds-sel__field";
    this._fieldEl.addEventListener("click", this._boundHandleFieldClick);
    this._triggerEl = document.createElement("div");
    this._triggerEl.id = `${this._panelId}-input`;
    this._triggerEl.className = "o9ds-sel__input";
    this._triggerEl.setAttribute("role", "combobox");
    this._triggerEl.setAttribute("tabindex", this._isDisabled ? "-1" : "0");
    this._triggerEl.setAttribute("aria-haspopup", "listbox");
    this._triggerEl.setAttribute("aria-expanded", "false");
    this._triggerEl.setAttribute("aria-controls", this._panelId);
    if (this._options.isRequired) {
      this._triggerEl.setAttribute("aria-required", "true");
    }
    if (this._options.isInvalid) {
      this._triggerEl.setAttribute("aria-invalid", "true");
    }
    if (this._isDisabled) {
      this._triggerEl.setAttribute("aria-disabled", "true");
    }
    if (this._isLoading) {
      this._triggerEl.setAttribute("aria-busy", "true");
    }
    if (this._labelEl) {
      this._triggerEl.setAttribute("aria-labelledby", `${this._panelId}-lbl`);
    }
    this._triggerEl.addEventListener("keydown", this._boundHandleTriggerKeyDown);
    this._fieldEl.appendChild(this._triggerEl);
    if (this._options.isInlineError) {
      this._errIcoEl = document.createElement("span");
      this._errIcoEl.className = "o9ds-sel__err-ico";
      this._errIcoEl.setAttribute("aria-hidden", "true");
      if (this._options.errorMsg) {
        this._errIcoEl.setAttribute("aria-label", this._options.errorMsg);
        this._errIcoConnector = connectTooltip(tooltipManager, {
          anchor: this._errIcoEl,
          content: this._options.errorMsg
        });
      }
      this._fieldEl.appendChild(this._errIcoEl);
    }
    this._chevronEl = document.createElement("span");
    this._chevronEl.className = "o9ds-sel__ico o9con o9con-angle-down";
    this._chevronEl.setAttribute("aria-hidden", "true");
    this._fieldEl.appendChild(this._chevronEl);
    this._borderEl = document.createElement("div");
    this._borderEl.className = "o9ds-sel__border";
    this._fieldEl.appendChild(this._borderEl);
    el.appendChild(this._fieldEl);
    this._hiddenInputEl = document.createElement("input");
    this._hiddenInputEl.type = "hidden";
    this._hiddenInputEl.name = el.getAttribute("data-name") ?? "";
    el.appendChild(this._hiddenInputEl);
    if (this._options.isInvalid && this._options.errorMsg && !this._options.isInlineError) {
      this._alertEl = this._buildInlineAlert(this._options.errorMsg);
      if (this._alertEl) {
        this._triggerEl.setAttribute("aria-describedby", `${this._panelId}-err`);
        el.appendChild(this._alertEl);
      }
    }
  }
  // ---------------------------------------------------------------------------
  // Panel Build
  // ---------------------------------------------------------------------------
  _buildPanel() {
    this._panelWrapperEl = document.createElement("div");
    this._panelWrapperEl.className = `o9ds-sel o9ds-sel--${this._options.size}`;
    this._panelWrapperEl.style.display = "contents";
    this._panelEl = document.createElement("div");
    this._panelEl.id = this._panelId;
    this._panelEl.className = "o9ds-sel__panel";
    this._panelEl.setAttribute("role", "listbox");
    this._panelEl.style.position = "fixed";
    this._panelEl.style.top = "0";
    this._panelEl.style.left = "0";
    this._panelEl.style.margin = "0";
    if (this._isLoading) {
      this._panelEl.setAttribute("aria-busy", "true");
    }
    if (this._options.maxHeight) {
      this._panelEl.style.setProperty("--o9ds-sel-panel-max-height", this._options.maxHeight);
    }
    if (this._searchCfg) {
      this._searchEl = this._buildSearch();
      this._panelEl.appendChild(this._searchEl);
    }
    this._scrollEl = document.createElement("div");
    this._scrollEl.className = "o9ds-sel__scroll";
    this._panelEl.appendChild(this._scrollEl);
    this._panelWrapperEl.appendChild(this._panelEl);
    document.body.appendChild(this._panelWrapperEl);
  }
  _buildSearch() {
    const cfg = this._searchCfg;
    const wrapper = document.createElement("div");
    const classes = ["o9ds-sel__search"];
    if (cfg.className) classes.push(cfg.className);
    wrapper.className = classes.join(" ");
    const searchRoot = document.createElement("div");
    wrapper.appendChild(searchRoot);
    this._searchInstance = O9Search.initialize(searchRoot, {
      variant: "filter",
      placeholder: cfg.placeholder,
      searchMode: cfg.searchMode,
      minChars: cfg.minChars,
      isClearable: cfg.isClearable,
      shortcut: cfg.shortcut ?? null,
      errorMsg: cfg.errorMsg,
      isInlineError: true,
      isDisabled: this._isDisabled,
      "aria-label": "Filter options",
      onSearch: (value) => {
        this._handleFilterSearch(value);
      },
      onClear: () => {
        this._handleFilterClear();
      }
    });
    wrapper.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const next = this._findNextEnabled(this._activeIndex, 1);
          if (next >= 0) this._setActiveIndex(next, false);
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prev = this._findNextEnabled(this._activeIndex, -1);
          if (prev >= 0) this._setActiveIndex(prev, false);
          break;
        }
        case "Home":
          e.preventDefault();
          if (this._itemEls.length > 0) {
            const first = this._findNextEnabled(-1, 1);
            if (first >= 0) this._setActiveIndex(first, false);
          }
          break;
        case "End":
          e.preventDefault();
          if (this._itemEls.length > 0) {
            const last = this._findNextEnabled(this._itemEls.length, -1);
            if (last >= 0) this._setActiveIndex(last, false);
          }
          break;
        case "Enter":
          e.preventDefault();
          if (this._activeIndex >= 0 && this._activeIndex < this._itemEls.length) {
            this._handleItemActivation(this._activeIndex);
          }
          break;
        case "Escape":
          if (!this._query) {
            e.preventDefault();
            this.close();
          }
          break;
        case "Tab":
          e.preventDefault();
          if (this._activeIndex >= 0 && this._activeIndex < this._itemEls.length) {
            this._handleItemActivation(this._activeIndex);
            return;
          }
          this.close();
          break;
      }
    });
    return wrapper;
  }
  // ---------------------------------------------------------------------------
  // CSS Classes
  // ---------------------------------------------------------------------------
  _applyRootClasses() {
    const el = this._element;
    if (!el) return;
    el.classList.add("o9ds-sel", `o9ds-sel--${this._options.size}`);
    el.classList.toggle("o9ds-sel--full-width", this._options.isFullWidth);
    el.classList.toggle("o9ds-sel--filterable", !!this._searchCfg);
    el.classList.toggle("loading", this._isLoading);
    el.classList.toggle("is-disabled", this._isDisabled);
    el.classList.toggle("is-readonly", this._isReadonly);
    el.classList.toggle("has-error", this._options.isInvalid);
    el.classList.toggle("error-inline", this._options.isInvalid && this._options.isInlineError);
    el.classList.toggle("open", this._isOpen);
    el.classList.toggle("has-value", this._value != null);
  }
  // ---------------------------------------------------------------------------
  // Width Style
  // ---------------------------------------------------------------------------
  _applyWidthStyle() {
    if (!this._element) return;
    const effectiveWidth = this._options.isFullWidth ? "100%" : this._options.width;
    if (effectiveWidth) {
      this._element.style.setProperty("--o9ds-form-input-width", effectiveWidth);
    } else {
      this._element.style.removeProperty("--o9ds-form-input-width");
    }
  }
  // ---------------------------------------------------------------------------
  // Item Rendering
  // ---------------------------------------------------------------------------
  _renderItems() {
    if (!this._scrollEl) return;
    this._scrollEl.textContent = "";
    this._itemEls = [];
    this._flatItems = [];
    const items = this._getFilteredItems();
    const hasPlaceholder = !!this._options.placeholder;
    if (hasPlaceholder) {
      this._renderPlaceholderItemInto(this._scrollEl);
    }
    if (isGrouped(items)) {
      items.forEach((group, groupIndex) => {
        if (groupIndex > 0 && this._options.hasGroupDividers) {
          const divider = document.createElement("hr");
          divider.className = "o9ds-sel__divider";
          divider.setAttribute("role", "separator");
          this._scrollEl.appendChild(divider);
        }
        const groupEl = document.createElement("div");
        groupEl.setAttribute("role", "group");
        if (group.label) {
          groupEl.setAttribute("aria-label", group.label);
          const header = document.createElement("div");
          header.className = "o9ds-sel__hdr";
          header.textContent = group.label;
          groupEl.appendChild(header);
        }
        group.items.forEach((item) => this._renderItemInto(item, groupEl));
        this._scrollEl.appendChild(groupEl);
      });
    } else {
      items.forEach((item) => this._renderItemInto(item, this._scrollEl));
    }
    if (this._flatItems.length === 0 && this._query && !hasPlaceholder) {
      const empty = document.createElement("div");
      empty.className = "o9ds-sel__empty";
      empty.setAttribute("role", "status");
      empty.textContent = "No results";
      this._scrollEl.appendChild(empty);
    }
  }
  _renderPlaceholderItemInto(container) {
    const idx = this._itemEls.length;
    const el = document.createElement("div");
    el.className = [
      "o9ds-sel__opt",
      "o9ds-sel__opt--placeholder"
    ].join(" ");
    el.setAttribute("role", "option");
    el.setAttribute("id", `${this._panelId}-opt-${idx}`);
    el.setAttribute("tabindex", "-1");
    el.setAttribute("data-index", String(idx));
    el.setAttribute("data-placeholder", "true");
    el.setAttribute("aria-selected", String(this._value == null));
    const txt = document.createElement("div");
    txt.className = "o9ds-sel__opt__txt";
    const lbl = document.createElement("span");
    lbl.className = "o9ds-sel__opt__lbl";
    lbl.textContent = this._options.placeholder;
    txt.appendChild(lbl);
    el.appendChild(txt);
    el.addEventListener("click", () => this._handlePlaceholderActivation());
    el.addEventListener("pointerenter", () => {
      this._setActiveIndex(idx, !this._searchCfg);
    });
    this._itemEls.push(el);
    container.appendChild(el);
  }
  _renderItemInto(item, container) {
    const idx = this._itemEls.length;
    this._flatItems.push(item);
    const el = document.createElement("div");
    el.className = [
      "o9ds-sel__opt",
      item.isDisabled && "is-disabled",
      item.value === this._value && "active"
    ].filter(Boolean).join(" ");
    el.setAttribute("role", "option");
    el.setAttribute("id", `${this._panelId}-opt-${idx}`);
    el.setAttribute("tabindex", "-1");
    el.setAttribute("data-index", String(idx));
    el.setAttribute("aria-selected", String(item.value === this._value));
    if (item.isDisabled) {
      el.setAttribute("aria-disabled", "true");
    }
    if (item.icon) {
      const ico = document.createElement("span");
      ico.className = `o9ds-sel__opt__ico o9con o9con-${item.icon}`;
      ico.setAttribute("aria-hidden", "true");
      el.appendChild(ico);
    }
    const txt = document.createElement("div");
    txt.className = "o9ds-sel__opt__txt";
    const lbl = document.createElement("span");
    lbl.className = "o9ds-sel__opt__lbl";
    lbl.textContent = item.label;
    txt.appendChild(lbl);
    el.appendChild(txt);
    el.addEventListener("click", () => this._handleItemActivation(idx));
    el.addEventListener("pointerenter", () => {
      if (!item.isDisabled) {
        this._setActiveIndex(idx, !this._searchCfg);
      }
    });
    this._itemEls.push(el);
    container.appendChild(el);
  }
  // ---------------------------------------------------------------------------
  // Filtering
  // ---------------------------------------------------------------------------
  _getFilteredItems() {
    if (!this._query) return this._options.items;
    const items = this._options.items;
    if (isGrouped(items)) {
      return filterGroups(items, { query: this._query });
    }
    return filterItems(items, { query: this._query });
  }
  _handleFilterSearch(value) {
    var _a, _b, _c;
    this._query = value;
    this._renderItems();
    this._activeIndex = -1;
    if (this._itemEls.length > 0) {
      this._setupArrowNav();
      this._setActiveIndex(0, false);
    } else {
      (_a = this._arrowNav) == null ? void 0 : _a.destroy();
      this._arrowNav = null;
    }
    if (this._searchCfg && this._query) {
      (_c = (_b = this._searchCfg).onFilter) == null ? void 0 : _c.call(_b, this._query, this._flatItems.length);
    }
    this._updateSearchCounter();
  }
  _handleFilterClear() {
    var _a, _b;
    this._query = "";
    this._renderItems();
    this._activeIndex = -1;
    if (this._itemEls.length > 0) {
      this._setupArrowNav();
      this._setActiveIndex(0, false);
    }
    (_b = (_a = this._searchCfg) == null ? void 0 : _a.onClear) == null ? void 0 : _b.call(_a);
    this._updateSearchCounter();
  }
  _updateSearchCounter() {
    var _a;
    if (!((_a = this._searchCfg) == null ? void 0 : _a.counter) || !this._searchInstance) return;
    if (this._query) {
      const total = flattenItems(this._options.items).length;
      this._searchInstance.counter(this._flatItems.length, total);
    } else {
      this._searchInstance.counter();
    }
  }
  // ---------------------------------------------------------------------------
  // Event Handlers
  // ---------------------------------------------------------------------------
  _handleFieldClick() {
    if (this._isDisabled || this._isLoading || this._isReadonly) return;
    this.toggle();
  }
  _handleTriggerKeyDown(e) {
    var _a, _b, _c;
    if (this._isDisabled || this._isLoading) return;
    if (!this._isOpen) {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          this.open();
          return;
        case "ArrowDown":
        case "ArrowUp":
          e.preventDefault();
          this.open();
          return;
      }
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const allFlat = this._getAllFlatItems();
        const char = e.key.toLowerCase();
        const currentIdx = this._value != null ? allFlat.findIndex((item) => item.value === this._value) : -1;
        for (let i = 1; i <= allFlat.length; i++) {
          const idx = (currentIdx + i) % allFlat.length;
          const item = allFlat[idx];
          if (!item.isDisabled && item.label.toLowerCase().startsWith(char)) {
            this._value = item.value;
            this._updateValueDisplay();
            this._applyRootClasses();
            (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, item, idx);
            (_c = this._element) == null ? void 0 : _c.dispatchEvent(
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
      if (this._activeIndex >= 0 && this._activeIndex < this._itemEls.length) {
        this._handleItemActivation(this._activeIndex);
        return;
      }
      this.close();
    }
  }
  _handlePanelKeyDown(e) {
    var _a;
    if (e.key === "Tab") {
      e.preventDefault();
      if (this._activeIndex >= 0 && this._activeIndex < this._itemEls.length) {
        this._handleItemActivation(this._activeIndex);
        return;
      }
      this.close();
      return;
    }
    (_a = this._arrowNav) == null ? void 0 : _a.handleKeyDown(e);
  }
  _findNextEnabled(from, direction) {
    const len = this._itemEls.length;
    if (len === 0) return -1;
    let idx = from + direction;
    while (idx >= 0 && idx < len) {
      if (this._itemEls[idx].hasAttribute("data-placeholder")) return idx;
      const placeholderOffset = this._options.placeholder ? 1 : 0;
      const flatIdx = idx - placeholderOffset;
      if (flatIdx >= 0 && flatIdx < this._flatItems.length && !this._flatItems[flatIdx].isDisabled) return idx;
      idx += direction;
    }
    return -1;
  }
  // ---------------------------------------------------------------------------
  // Item Activation
  // ---------------------------------------------------------------------------
  _handlePlaceholderActivation() {
    var _a, _b, _c;
    const result = (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, null, -1);
    this._value = null;
    this._updateValueDisplay();
    this._applyRootClasses();
    (_c = this._element) == null ? void 0 : _c.dispatchEvent(
      new CustomEvent("sel:change", {
        bubbles: true,
        cancelable: true,
        detail: { item: null, index: -1 }
      })
    );
    if (result !== false && this._options.closeOnSelect) {
      this.close();
    }
  }
  _handleItemActivation(index) {
    var _a, _b, _c, _d;
    if ((_a = this._itemEls[index]) == null ? void 0 : _a.hasAttribute("data-placeholder")) {
      this._handlePlaceholderActivation();
      return;
    }
    const placeholderOffset = this._options.placeholder ? 1 : 0;
    const flatIndex = index - placeholderOffset;
    const item = this._flatItems[flatIndex];
    if (!item || item.isDisabled) return;
    const result = (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, item, flatIndex);
    this._value = item.value;
    this._updateValueDisplay();
    this._applyRootClasses();
    (_d = this._element) == null ? void 0 : _d.dispatchEvent(
      new CustomEvent("sel:change", {
        bubbles: true,
        cancelable: true,
        detail: { item, index: flatIndex }
      })
    );
    if (result !== false && this._options.closeOnSelect) {
      this.close();
    }
  }
  // ---------------------------------------------------------------------------
  // Active Index
  // ---------------------------------------------------------------------------
  _setActiveIndex(index, focusItem = true) {
    this._activeIndex = index;
    if (index >= 0 && index < this._itemEls.length) {
      const el = this._itemEls[index];
      if (focusItem) el.focus({ preventScroll: true });
      this._scrollIntoView(el);
      if (this._searchCfg && this._searchEl) {
        const input = this._searchEl.querySelector("input");
        input == null ? void 0 : input.setAttribute("aria-activedescendant", el.id);
      }
    } else if (this._searchCfg && this._searchEl) {
      const input = this._searchEl.querySelector("input");
      input == null ? void 0 : input.removeAttribute("aria-activedescendant");
    }
  }
  _scrollIntoView(el) {
    if (!this._scrollEl) return;
    const containerRect = this._scrollEl.getBoundingClientRect();
    const itemRect = el.getBoundingClientRect();
    if (itemRect.bottom > containerRect.bottom) {
      this._scrollEl.scrollTop += itemRect.bottom - containerRect.bottom;
    } else if (itemRect.top < containerRect.top) {
      this._scrollEl.scrollTop -= containerRect.top - itemRect.top;
    }
  }
  // ---------------------------------------------------------------------------
  // Arrow Nav
  // ---------------------------------------------------------------------------
  _setupArrowNav() {
    var _a;
    (_a = this._arrowNav) == null ? void 0 : _a.destroy();
    const placeholderOffset = this._options.placeholder ? 1 : 0;
    this._arrowNav = createArrowNav({
      items: this._itemEls,
      orientation: "vertical",
      wrap: true,
      skipDisabled: (i) => {
        var _a2, _b;
        if ((_a2 = this._itemEls[i]) == null ? void 0 : _a2.hasAttribute("data-placeholder")) return false;
        const flatIdx = i - placeholderOffset;
        return flatIdx >= 0 && flatIdx < this._flatItems.length && ((_b = this._flatItems[flatIdx]) == null ? void 0 : _b.isDisabled) === true;
      },
      onNavigate: (_el, index) => this._setActiveIndex(index),
      onSelect: (_el, index) => this._handleItemActivation(index),
      onEscape: () => this.close()
    });
  }
  // ---------------------------------------------------------------------------
  // Focus guard — close if focus escapes component scope
  // ---------------------------------------------------------------------------
  _handleFocusIn(e) {
    var _a, _b;
    if (!this._isOpen) return;
    const target = e.target;
    if ((_a = this._element) == null ? void 0 : _a.contains(target)) return;
    if ((_b = this._panelEl) == null ? void 0 : _b.contains(target)) return;
    this.close();
  }
  // ---------------------------------------------------------------------------
  // Focus Management
  // ---------------------------------------------------------------------------
  _focusInitial() {
    if (this._searchCfg && this._searchEl) {
      const input = this._searchEl.querySelector("input");
      input == null ? void 0 : input.focus({ preventScroll: true });
      if (this._itemEls.length > 0) {
        const firstEnabled = this._findNextEnabled(-1, 1);
        if (firstEnabled >= 0) {
          this._setActiveIndex(firstEnabled, false);
        }
      }
    } else if (this._itemEls.length > 0) {
      const firstEnabled = this._findNextEnabled(-1, 1);
      if (firstEnabled >= 0) {
        this._setActiveIndex(firstEnabled);
      }
    }
  }
  // ---------------------------------------------------------------------------
  // Positioning
  // ---------------------------------------------------------------------------
  _applyPosition(result) {
    if (!this._panelEl) return;
    this._panelEl.style.transform = `translate(${result.x}px, ${result.y}px)`;
    if (result.maxHeight != null) {
      this._panelEl.style.maxHeight = `${result.maxHeight}px`;
    }
    if (this._fieldEl) {
      this._panelEl.style.minWidth = `${this._fieldEl.getBoundingClientRect().width}px`;
    }
  }
  // ---------------------------------------------------------------------------
  // Value Display
  // ---------------------------------------------------------------------------
  _updateValueDisplay() {
    var _a, _b;
    if (!this._triggerEl) return;
    this._triggerEl.textContent = "";
    const allFlat = this._getAllFlatItems();
    const selectedItem = allFlat.find((item) => item.value === this._value);
    if (selectedItem) {
      this._triggerEl.textContent = selectedItem.label;
      (_a = this._element) == null ? void 0 : _a.classList.add("has-value");
    } else {
      if (this._options.placeholder) {
        const span = document.createElement("span");
        span.className = "o9ds-sel__placeholder";
        span.textContent = this._options.placeholder;
        this._triggerEl.appendChild(span);
      }
      (_b = this._element) == null ? void 0 : _b.classList.remove("has-value");
    }
    if (this._hiddenInputEl) {
      this._hiddenInputEl.value = this._value != null ? String(this._value) : "";
    }
  }
  _getAllFlatItems() {
    return flattenItems(this._options.items);
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  open() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (this._isOpen || this._isDisabled || this._isLoading || this._isReadonly) return;
    if (((_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a)) === false) return;
    const event = new CustomEvent("sel:open", {
      bubbles: true,
      cancelable: true
    });
    if (!((_c = this._element) == null ? void 0 : _c.dispatchEvent(event))) return;
    this._isOpen = true;
    (_d = this._element) == null ? void 0 : _d.classList.add("open");
    (_e = this._panelWrapperEl) == null ? void 0 : _e.classList.add("open");
    overlayHub.open({
      id: this._panelId,
      type: "dropdown",
      element: this._panelEl,
      triggerElement: this._triggerEl ?? void 0,
      priority: 20,
      config: { autoCloseOnOutsideClick: true },
      onClose: () => this.close()
    });
    if (this._fieldEl && this._panelEl) {
      this._panelEl.style.minWidth = `${this._fieldEl.getBoundingClientRect().width}px`;
      const placement = this._options.placement;
      const posResult = computePosition(this._fieldEl, this._panelEl, {
        placement,
        gap: 2
      });
      this._applyPosition(posResult);
      this._positionWatcher = createPositionWatcher(
        this._fieldEl,
        this._panelEl,
        { placement, gap: 2 },
        (result) => this._applyPosition(result)
      );
    }
    this._renderItems();
    this._setupArrowNav();
    if (this._panelEl) {
      enter({ element: this._panelEl, type: "fade", duration: 150 });
    }
    this._focusInitial();
    (_f = this._triggerEl) == null ? void 0 : _f.setAttribute("aria-expanded", "true");
    (_h = (_g = this._options).onOpenChange) == null ? void 0 : _h.call(_g, true);
    if (!this._searchCfg) {
      (_i = this._panelEl) == null ? void 0 : _i.addEventListener("keydown", this._boundHandlePanelKeyDown);
    }
    document.addEventListener("focusin", this._boundHandleFocusIn);
  }
  close() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (!this._isOpen) return;
    if (((_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a)) === false) return;
    const event = new CustomEvent("sel:close", {
      bubbles: true,
      cancelable: true
    });
    if (!((_c = this._element) == null ? void 0 : _c.dispatchEvent(event))) return;
    this._isOpen = false;
    this._query = "";
    (_d = this._searchInstance) == null ? void 0 : _d.clear();
    this._activeIndex = -1;
    if (this._panelEl) {
      exit({
        element: this._panelEl,
        type: "fade",
        duration: 150,
        onComplete: () => {
          var _a2;
          (_a2 = this._panelWrapperEl) == null ? void 0 : _a2.classList.remove("open");
        }
      });
    }
    (_e = this._element) == null ? void 0 : _e.classList.remove("open");
    if (!this._searchCfg) {
      (_f = this._panelEl) == null ? void 0 : _f.removeEventListener("keydown", this._boundHandlePanelKeyDown);
    }
    (_g = this._arrowNav) == null ? void 0 : _g.destroy();
    this._arrowNav = null;
    (_h = this._positionWatcher) == null ? void 0 : _h.destroy();
    this._positionWatcher = null;
    overlayHub.close(this._panelId);
    document.removeEventListener("focusin", this._boundHandleFocusIn);
    (_i = this._triggerEl) == null ? void 0 : _i.setAttribute("aria-expanded", "false");
    (_j = this._triggerEl) == null ? void 0 : _j.focus({ preventScroll: true });
    (_l = (_k = this._options).onOpenChange) == null ? void 0 : _l.call(_k, false);
  }
  toggle(force) {
    const shouldOpen = force !== void 0 ? force : !this._isOpen;
    if (shouldOpen) this.open();
    else this.close();
  }
  value(newValue) {
    var _a, _b;
    if (newValue === void 0) return this._value;
    this._value = newValue;
    this._updateValueDisplay();
    this._applyRootClasses();
    if (newValue == null) {
      (_a = this._element) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("sel:change", {
          bubbles: true,
          cancelable: true,
          detail: { item: null, index: -1 }
        })
      );
      return;
    }
    const allFlat = this._getAllFlatItems();
    const idx = allFlat.findIndex((item2) => item2.value === newValue);
    const item = idx >= 0 ? allFlat[idx] : null;
    if (item) {
      (_b = this._element) == null ? void 0 : _b.dispatchEvent(
        new CustomEvent("sel:change", {
          bubbles: true,
          cancelable: true,
          detail: { item, index: idx }
        })
      );
    }
  }
  updateItems(items) {
    var _a;
    this._options.items = items;
    this._query = "";
    (_a = this._searchInstance) == null ? void 0 : _a.clear();
    if (this._isOpen) {
      this._renderItems();
      this._setupArrowNav();
      if (this._itemEls.length > 0) {
        this._setActiveIndex(0, !this._searchCfg);
      } else {
        this._activeIndex = -1;
      }
    }
    this._updateValueDisplay();
  }
  disabled(state) {
    var _a, _b, _c, _d;
    if (state === void 0) return this._isDisabled;
    this._isDisabled = state;
    this._options.isDisabled = state;
    if (state) {
      (_a = this._triggerEl) == null ? void 0 : _a.setAttribute("tabindex", "-1");
      (_b = this._triggerEl) == null ? void 0 : _b.setAttribute("aria-disabled", "true");
      if (this._isOpen) this.close();
    } else {
      (_c = this._triggerEl) == null ? void 0 : _c.setAttribute("tabindex", "0");
      (_d = this._triggerEl) == null ? void 0 : _d.removeAttribute("aria-disabled");
    }
    this._applyRootClasses();
  }
  setError(message) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (message === false) {
      this._options.isInvalid = false;
      this._options.errorMsg = null;
      (_a = this._element) == null ? void 0 : _a.classList.remove("has-error", "error-inline");
      (_b = this._triggerEl) == null ? void 0 : _b.removeAttribute("aria-invalid");
      (_c = this._triggerEl) == null ? void 0 : _c.removeAttribute("aria-describedby");
      if (this._alertEl) {
        this._alertEl.remove();
        this._alertEl = null;
      }
      if (this._errIcoEl) {
        this._errIcoEl.removeAttribute("aria-label");
        (_d = this._errIcoConnector) == null ? void 0 : _d.destroy();
        this._errIcoConnector = null;
      }
    } else {
      this._options.isInvalid = true;
      this._options.errorMsg = message;
      (_e = this._element) == null ? void 0 : _e.classList.add("has-error");
      (_f = this._element) == null ? void 0 : _f.classList.toggle("error-inline", this._options.isInlineError);
      (_g = this._triggerEl) == null ? void 0 : _g.setAttribute("aria-invalid", "true");
      if (this._options.isInlineError) {
        if (this._errIcoEl) {
          this._errIcoEl.setAttribute("aria-label", message);
          if (this._errIcoConnector) {
            this._errIcoConnector.update({ content: message });
          } else {
            this._errIcoConnector = connectTooltip(tooltipManager, {
              anchor: this._errIcoEl,
              content: message
            });
          }
        }
      } else {
        if (this._alertEl) {
          updateInlineAlert(this._alertEl, { message });
        } else {
          this._alertEl = this._buildInlineAlert(message);
          if (this._alertEl) {
            (_h = this._element) == null ? void 0 : _h.appendChild(this._alertEl);
          }
        }
        (_i = this._triggerEl) == null ? void 0 : _i.setAttribute("aria-describedby", `${this._panelId}-err`);
      }
    }
  }
  _buildInlineAlert(message) {
    const alert = createInlineAlert({
      type: "error",
      message,
      id: `${this._panelId}-err`
    });
    return alert ?? null;
  }
  setLoading(isLoading) {
    var _a, _b, _c;
    this._isLoading = isLoading;
    this._options.isLoading = isLoading;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("loading", isLoading);
    if (isLoading) {
      (_b = this._triggerEl) == null ? void 0 : _b.setAttribute("aria-busy", "true");
      if (this._isOpen) this.close();
    } else {
      (_c = this._triggerEl) == null ? void 0 : _c.removeAttribute("aria-busy");
    }
  }
  width(cssValue) {
    if (cssValue === void 0) {
      return this._options.width ?? "";
    }
    this._options.width = cssValue || null;
    this._applyWidthStyle();
  }
  focus() {
    var _a;
    (_a = this._triggerEl) == null ? void 0 : _a.focus();
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (this._isOpen) {
      this._isOpen = false;
      (_a = this._arrowNav) == null ? void 0 : _a.destroy();
      this._arrowNav = null;
      (_b = this._positionWatcher) == null ? void 0 : _b.destroy();
      this._positionWatcher = null;
      overlayHub.close(this._panelId);
      document.removeEventListener("focusin", this._boundHandleFocusIn);
      if (!this._searchCfg) {
        (_c = this._panelEl) == null ? void 0 : _c.removeEventListener("keydown", this._boundHandlePanelKeyDown);
      }
    }
    (_d = this._triggerEl) == null ? void 0 : _d.removeEventListener("keydown", this._boundHandleTriggerKeyDown);
    (_e = this._fieldEl) == null ? void 0 : _e.removeEventListener("click", this._boundHandleFieldClick);
    (_f = this._searchInstance) == null ? void 0 : _f.destroy();
    this._searchInstance = null;
    if (this._panelWrapperEl) {
      this._panelWrapperEl.remove();
    }
    if (this._element) {
      this._element.textContent = "";
      this._element.className = "";
    }
    this._element = null;
    this._fieldEl = null;
    this._triggerEl = null;
    this._panelWrapperEl = null;
    this._panelEl = null;
    this._scrollEl = null;
    this._searchEl = null;
    (_g = this._errIcoConnector) == null ? void 0 : _g.destroy();
    this._errIcoConnector = null;
    this._errIcoEl = null;
    this._chevronEl = null;
    this._borderEl = null;
    this._hiddenInputEl = null;
    this._labelEl = null;
    this._alertEl = null;
    this._flatItems = [];
    this._itemEls = [];
  }
};
_O9Select.DEFAULTS = {
  items: [],
  value: void 0,
  placeholder: "",
  label: "",
  isDisabled: false,
  isRequired: false,
  isInvalid: false,
  errorMsg: null,
  isInlineError: false,
  size: "lg",
  search: void 0,
  isLoading: false,
  isReadOnly: false,
  width: null,
  isFullWidth: false,
  placement: "bottom-start",
  maxHeight: null,
  hasGroupDividers: true,
  closeOnSelect: true,
  onChange: null,
  onOpen: null,
  onClose: null,
  onOpenChange: null
};
let O9Select = _O9Select;
export {
  O9Select
};
//# sourceMappingURL=Select.js.map
