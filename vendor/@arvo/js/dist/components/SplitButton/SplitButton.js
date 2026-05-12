import { ArvoActionMenu } from "../ActionMenu/ActionMenu.js";
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
const _ArvoSplitButton = class _ArvoSplitButton {
  constructor(element, options) {
    this._actionEl = null;
    this._triggerEl = null;
    this._iconEl = null;
    this._labelEl = null;
    this._caretEl = null;
    this._actionMenu = null;
    this._selectedItemId = null;
    this._isOpen = false;
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _ArvoSplitButton.VARIANTS.includes(options.variant) ? options.variant : _ArvoSplitButton.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _ArvoSplitButton.SIZES.includes(options.size) ? options.size : _ArvoSplitButton.DEFAULTS.size;
    this._options = {
      ..._ArvoSplitButton.DEFAULTS,
      ...options,
      variant,
      size,
      label: (options == null ? void 0 : options.label) ?? _ArvoSplitButton.DEFAULTS.label,
      icon: (options == null ? void 0 : options.icon) ?? null,
      maxHeight: (options == null ? void 0 : options.maxHeight) ?? null,
      items: (options == null ? void 0 : options.items) ?? [],
      onAction: (options == null ? void 0 : options.onAction) ?? null,
      onSelect: (options == null ? void 0 : options.onSelect) ?? null,
      onOpen: (options == null ? void 0 : options.onOpen) ?? null,
      onClose: (options == null ? void 0 : options.onClose) ?? null,
      onOpenChange: (options == null ? void 0 : options.onOpenChange) ?? null,
      onFocus: (options == null ? void 0 : options.onFocus) ?? null,
      onBlur: (options == null ? void 0 : options.onBlur) ?? null
    };
    this._selectedItemId = this._options.value;
    this._boundHandleActionClick = this._handleActionClick.bind(this);
    this._boundHandleActionKeydown = this._handleActionKeydown.bind(this);
    this._boundHandleActionFocus = this._handleActionFocus.bind(this);
    this._boundHandleActionBlur = this._handleActionBlur.bind(this);
    this._render();
    this._bindEvents();
    this._initActionMenu();
  }
  static initialize(element, options) {
    return new _ArvoSplitButton(element, options);
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    el.classList.add("arvo-split-btn");
    el.classList.add(`arvo-split-btn--${this._options.variant}`);
    el.classList.add(`arvo-split-btn--${this._options.size}`);
    el.setAttribute("role", "group");
    const actionEl = document.createElement("button");
    actionEl.type = "button";
    actionEl.className = `arvo-btn arvo-btn--${this._options.variant} arvo-btn--${this._options.size} arvo-split-btn__action`;
    this._actionEl = actionEl;
    const initialIcon = this._resolveDisplayIcon();
    if (initialIcon) {
      const iconEl = document.createElement("span");
      iconEl.className = `arvo-split-btn__icon o9con o9con-${initialIcon}`;
      iconEl.setAttribute("aria-hidden", "true");
      actionEl.appendChild(iconEl);
      this._iconEl = iconEl;
    }
    const labelEl = document.createElement("span");
    labelEl.className = "arvo-split-btn__lbl";
    labelEl.textContent = this._resolveDisplayLabel();
    actionEl.appendChild(labelEl);
    this._labelEl = labelEl;
    const triggerEl = document.createElement("button");
    triggerEl.type = "button";
    triggerEl.className = `arvo-btn arvo-btn--${this._options.variant} arvo-btn--${this._options.size} arvo-split-btn__trigger`;
    triggerEl.setAttribute("aria-haspopup", "menu");
    triggerEl.setAttribute("aria-expanded", "false");
    triggerEl.setAttribute("aria-label", this._options.triggerLabel);
    this._triggerEl = triggerEl;
    const caretEl = document.createElement("span");
    caretEl.className = "arvo-split-btn__caret o9con o9con-angle-down";
    caretEl.setAttribute("aria-hidden", "true");
    triggerEl.appendChild(caretEl);
    this._caretEl = caretEl;
    el.appendChild(actionEl);
    el.appendChild(triggerEl);
    this._applySegmentDisabled();
    if (this._options.isLoading) {
      el.classList.add("loading");
      el.setAttribute("aria-busy", "true");
    }
    if (this._options.isDisabled) {
      el.setAttribute("aria-disabled", "true");
    }
  }
  _applySegmentDisabled() {
    if (this._actionEl) {
      this._actionEl.disabled = this._options.isDisabled || this._options.isActionDisabled || this._options.isLoading;
    }
    if (this._triggerEl) {
      this._triggerEl.disabled = this._options.isDisabled || this._options.isTriggerDisabled || this._options.isLoading;
    }
  }
  // ---------------------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------------------
  _bindEvents() {
    var _a, _b, _c, _d;
    (_a = this._actionEl) == null ? void 0 : _a.addEventListener("click", this._boundHandleActionClick);
    (_b = this._actionEl) == null ? void 0 : _b.addEventListener("keydown", this._boundHandleActionKeydown);
    (_c = this._actionEl) == null ? void 0 : _c.addEventListener("focus", this._boundHandleActionFocus);
    (_d = this._actionEl) == null ? void 0 : _d.addEventListener("blur", this._boundHandleActionBlur);
  }
  _handleActionClick(event) {
    var _a, _b, _c, _d;
    if (!this._actionEl || this._actionEl.disabled || this._options.isLoading) {
      return;
    }
    if (this._options.mode === "selection") {
      const selectedItem = this._getSelectedItem();
      if (selectedItem) {
        const flat = flattenItems(this._options.items);
        const currentIndex = flat.findIndex((i) => i.id === selectedItem.id);
        this._dispatchEvent("split-btn:action", { selectedItem });
        (_b = (_a = this._options).onSelect) == null ? void 0 : _b.call(_a, selectedItem, currentIndex);
        return;
      }
    }
    this._dispatchEvent("split-btn:action", { selectedItem: null });
    (_d = (_c = this._options).onAction) == null ? void 0 : _d.call(_c, event, null);
  }
  _handleActionKeydown(event) {
    var _a;
    if (event.key === "ArrowDown" && this._actionEl && !this._actionEl.disabled) {
      event.preventDefault();
      (_a = this._actionMenu) == null ? void 0 : _a.open();
      return;
    }
    if ((event.key === "Enter" || event.key === " ") && (this._options.isDisabled || this._options.isActionDisabled || this._options.isLoading)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  _handleActionFocus(event) {
    var _a, _b;
    (_b = (_a = this._options).onFocus) == null ? void 0 : _b.call(_a, event);
  }
  _handleActionBlur(event) {
    var _a, _b;
    (_b = (_a = this._options).onBlur) == null ? void 0 : _b.call(_a, event);
  }
  // ---------------------------------------------------------------------------
  // ActionMenu Init
  // ---------------------------------------------------------------------------
  _initActionMenu() {
    if (!this._triggerEl) return;
    const menuSize = this._options.size === "sm" ? "sm" : "md";
    const menuOptions = {
      items: this._getProcessedItems(),
      size: menuSize,
      search: this._options.search,
      placement: this._options.placement,
      maxHeight: this._options.maxHeight ?? void 0,
      hasGroupDividers: this._options.hasGroupDividers,
      closeOnSelect: this._options.closeOnSelect,
      isDisabled: this._options.isDisabled || this._options.isTriggerDisabled || this._options.isLoading,
      onOpen: this._options.onOpen ?? void 0,
      onClose: this._options.onClose ?? void 0,
      onSelect: (item, index) => this._handleSelect(item, index),
      onOpenChange: (isOpen) => this._handleOpenChange(isOpen)
    };
    this._actionMenu = ArvoActionMenu.initialize(this._triggerEl, menuOptions);
  }
  // ---------------------------------------------------------------------------
  // Selection Logic
  // ---------------------------------------------------------------------------
  _getSelectedItem() {
    if (this._selectedItemId == null) return null;
    const flat = flattenItems(this._options.items);
    const id = String(this._selectedItemId);
    return flat.find((item) => item.id === id) ?? null;
  }
  _getProcessedItems() {
    const { items, mode } = this._options;
    if (mode !== "selection" || this._selectedItemId == null) return items;
    const selId = String(this._selectedItemId);
    const mark = (item) => ({
      ...item,
      active: item.id === selId
    });
    if (isGrouped(items)) {
      return items.map((group) => ({
        ...group,
        items: group.items.map(mark)
      }));
    }
    return items.map(mark);
  }
  _handleSelect(item, index) {
    var _a, _b, _c;
    if (this._options.mode === "selection") {
      const previousItem = this._getSelectedItem();
      this._selectedItemId = item.id;
      this._updateDisplayLabelAndIcon();
      (_a = this._actionMenu) == null ? void 0 : _a.updateItems(this._getProcessedItems());
      this._dispatchEvent(
        "split-btn:change",
        { item, previousItem },
        false
      );
    } else {
      this._dispatchEvent("split-btn:select", { item, index });
    }
    return (_c = (_b = this._options).onSelect) == null ? void 0 : _c.call(_b, item, index);
  }
  _handleOpenChange(isOpen) {
    var _a, _b, _c, _d;
    this._isOpen = isOpen;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("open", isOpen);
    (_b = this._triggerEl) == null ? void 0 : _b.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
    if (isOpen) {
      this._dispatchEvent("split-btn:open", {});
    } else {
      this._dispatchEvent("split-btn:close", {});
    }
    (_d = (_c = this._options).onOpenChange) == null ? void 0 : _d.call(_c, isOpen);
  }
  // ---------------------------------------------------------------------------
  // Display Label / Icon Resolution
  // ---------------------------------------------------------------------------
  _resolveDisplayLabel() {
    if (this._options.mode === "action" || this._selectedItemId == null) {
      return this._options.label;
    }
    const selectedItem = this._getSelectedItem();
    if (!selectedItem) return this._options.label;
    if (this._options.displaySelected === "value") {
      const val = selectedItem.value;
      return val != null ? String(val) : selectedItem.id;
    }
    return selectedItem.label;
  }
  _resolveDisplayIcon() {
    if (this._options.mode === "action") return this._options.icon;
    const selectedItem = this._getSelectedItem();
    return (selectedItem == null ? void 0 : selectedItem.icon) ?? this._options.icon;
  }
  _updateDisplayLabelAndIcon() {
    if (this._labelEl) {
      this._labelEl.textContent = this._resolveDisplayLabel();
    }
    this._setRenderedIcon(this._resolveDisplayIcon());
  }
  _setRenderedIcon(iconName) {
    var _a;
    if (!this._actionEl) return;
    if (!iconName) {
      (_a = this._iconEl) == null ? void 0 : _a.remove();
      this._iconEl = null;
      return;
    }
    const existing = this._iconEl;
    if (existing) {
      const toRemove = [];
      existing.classList.forEach((c) => {
        if (c.startsWith("o9con-")) toRemove.push(c);
      });
      toRemove.forEach((c) => existing.classList.remove(c));
      existing.classList.add(`o9con-${iconName}`);
      return;
    }
    const iconEl = document.createElement("span");
    iconEl.className = `arvo-split-btn__icon o9con o9con-${iconName}`;
    iconEl.setAttribute("aria-hidden", "true");
    this._actionEl.insertBefore(iconEl, this._actionEl.firstChild);
    this._iconEl = iconEl;
  }
  _applySelection(itemId) {
    var _a;
    this._selectedItemId = itemId;
    this._updateDisplayLabelAndIcon();
    (_a = this._actionMenu) == null ? void 0 : _a.updateItems(this._getProcessedItems());
  }
  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  _dispatchEvent(name, detail, cancelable = true) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(name, { bubbles: true, cancelable, detail })
    );
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  open() {
    var _a;
    (_a = this._actionMenu) == null ? void 0 : _a.open();
  }
  close() {
    var _a;
    (_a = this._actionMenu) == null ? void 0 : _a.close();
  }
  toggle(force) {
    var _a;
    (_a = this._actionMenu) == null ? void 0 : _a.toggle(force);
  }
  isOpen() {
    return this._isOpen;
  }
  value(itemId) {
    var _a;
    if (itemId === void 0) {
      if (this._options.mode !== "selection" || this._selectedItemId == null) {
        return null;
      }
      return this._getSelectedItem();
    }
    if (this._options.mode !== "selection") return;
    if (itemId == null) {
      this._selectedItemId = null;
      this._updateDisplayLabelAndIcon();
      (_a = this._actionMenu) == null ? void 0 : _a.updateItems(this._getProcessedItems());
      return;
    }
    this._applySelection(itemId);
  }
  updateItems(items) {
    var _a;
    this._options.items = items;
    if (this._selectedItemId != null && this._options.mode === "selection") {
      const flat = flattenItems(items);
      const selId = String(this._selectedItemId);
      if (!flat.some((item) => item.id === selId)) {
        this._selectedItemId = null;
      }
    }
    (_a = this._actionMenu) == null ? void 0 : _a.updateItems(this._getProcessedItems());
    this._updateDisplayLabelAndIcon();
  }
  setLabel(text) {
    this._options.label = text;
    this._updateDisplayLabelAndIcon();
  }
  setIcon(iconName) {
    this._options.icon = iconName;
    this._updateDisplayLabelAndIcon();
  }
  setVariant(variant) {
    var _a, _b;
    if (!_ArvoSplitButton.VARIANTS.includes(variant))
      return;
    const oldVariant = this._options.variant;
    (_a = this._element) == null ? void 0 : _a.classList.remove(`arvo-split-btn--${oldVariant}`);
    (_b = this._element) == null ? void 0 : _b.classList.add(`arvo-split-btn--${variant}`);
    if (this._actionEl) {
      this._actionEl.classList.remove(`arvo-btn--${oldVariant}`);
      this._actionEl.classList.add(`arvo-btn--${variant}`);
    }
    if (this._triggerEl) {
      this._triggerEl.classList.remove(`arvo-btn--${oldVariant}`);
      this._triggerEl.classList.add(`arvo-btn--${variant}`);
    }
    this._options.variant = variant;
  }
  setSize(size) {
    var _a, _b;
    if (!_ArvoSplitButton.SIZES.includes(size)) return;
    const oldSize = this._options.size;
    (_a = this._element) == null ? void 0 : _a.classList.remove(`arvo-split-btn--${oldSize}`);
    (_b = this._element) == null ? void 0 : _b.classList.add(`arvo-split-btn--${size}`);
    if (this._actionEl) {
      this._actionEl.classList.remove(`arvo-btn--${oldSize}`);
      this._actionEl.classList.add(`arvo-btn--${size}`);
    }
    if (this._triggerEl) {
      this._triggerEl.classList.remove(`arvo-btn--${oldSize}`);
      this._triggerEl.classList.add(`arvo-btn--${size}`);
    }
    this._options.size = size;
  }
  setLoading(loading) {
    var _a;
    this._options.isLoading = loading;
    const el = this._element;
    if (el) {
      if (loading) {
        el.classList.add("loading");
        el.setAttribute("aria-busy", "true");
      } else {
        el.classList.remove("loading");
        el.removeAttribute("aria-busy");
      }
    }
    this._applySegmentDisabled();
    (_a = this._actionMenu) == null ? void 0 : _a.disabled(
      this._options.isDisabled || this._options.isTriggerDisabled || loading
    );
  }
  disabled(state) {
    var _a;
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    this._applySegmentDisabled();
    if (this._element) {
      if (state) {
        this._element.setAttribute("aria-disabled", "true");
      } else {
        this._element.removeAttribute("aria-disabled");
      }
    }
    (_a = this._actionMenu) == null ? void 0 : _a.disabled(
      state || this._options.isTriggerDisabled || this._options.isLoading
    );
  }
  actionDisabled(state) {
    if (state === void 0) {
      return this._options.isActionDisabled;
    }
    this._options.isActionDisabled = state;
    this._applySegmentDisabled();
  }
  triggerDisabled(state) {
    var _a;
    if (state === void 0) {
      return this._options.isTriggerDisabled;
    }
    this._options.isTriggerDisabled = state;
    this._applySegmentDisabled();
    (_a = this._actionMenu) == null ? void 0 : _a.disabled(
      this._options.isDisabled || state || this._options.isLoading
    );
  }
  focus() {
    var _a;
    (_a = this._actionEl) == null ? void 0 : _a.focus();
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f;
    (_a = this._actionMenu) == null ? void 0 : _a.destroy();
    this._actionMenu = null;
    if (this._actionEl) {
      this._actionEl.removeEventListener("click", this._boundHandleActionClick);
      this._actionEl.removeEventListener("keydown", this._boundHandleActionKeydown);
      this._actionEl.removeEventListener("focus", this._boundHandleActionFocus);
      this._actionEl.removeEventListener("blur", this._boundHandleActionBlur);
    }
    const el = this._element;
    if (el) {
      el.classList.remove("arvo-split-btn", "open", "loading");
      _ArvoSplitButton.VARIANTS.forEach(
        (v) => el.classList.remove(`arvo-split-btn--${v}`)
      );
      _ArvoSplitButton.SIZES.forEach(
        (s) => el.classList.remove(`arvo-split-btn--${s}`)
      );
      el.removeAttribute("role");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("aria-busy");
      (_b = this._iconEl) == null ? void 0 : _b.remove();
      (_c = this._labelEl) == null ? void 0 : _c.remove();
      (_d = this._caretEl) == null ? void 0 : _d.remove();
      (_e = this._actionEl) == null ? void 0 : _e.remove();
      (_f = this._triggerEl) == null ? void 0 : _f.remove();
    }
    this._element = null;
    this._actionEl = null;
    this._triggerEl = null;
    this._iconEl = null;
    this._labelEl = null;
    this._caretEl = null;
  }
};
_ArvoSplitButton.VARIANTS = ["primary", "secondary", "tertiary"];
_ArvoSplitButton.SIZES = ["sm", "md", "lg"];
_ArvoSplitButton.DEFAULTS = {
  label: "",
  variant: "primary",
  size: "md",
  icon: null,
  mode: "action",
  displaySelected: "label",
  value: null,
  isDisabled: false,
  isActionDisabled: false,
  isTriggerDisabled: false,
  isLoading: false,
  items: [],
  search: void 0,
  placement: "bottom-end",
  maxHeight: null,
  hasGroupDividers: true,
  closeOnSelect: true,
  triggerLabel: "Show options",
  onAction: null,
  onSelect: null,
  onOpen: null,
  onClose: null,
  onOpenChange: null,
  onFocus: null,
  onBlur: null
};
let ArvoSplitButton = _ArvoSplitButton;
export {
  ArvoSplitButton
};
//# sourceMappingURL=SplitButton.js.map
