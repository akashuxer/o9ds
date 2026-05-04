import { ArvoActionMenu } from "../ActionMenu/ActionMenu.js";
import { connectTooltip, tooltipManager } from "@arvo/core";
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
const _ArvoDropdownButton = class _ArvoDropdownButton {
  constructor(element, options) {
    var _a;
    this._actionMenu = null;
    this._iconEl = null;
    this._labelEl = null;
    this._caretEl = null;
    this._selectedItemId = null;
    this._tooltipConnector = null;
    this._isOpen = false;
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _ArvoDropdownButton.VARIANTS.includes(options.variant) ? options.variant : _ArvoDropdownButton.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _ArvoDropdownButton.SIZES.includes(options.size) ? options.size : _ArvoDropdownButton.DEFAULTS.size;
    this._options = {
      ..._ArvoDropdownButton.DEFAULTS,
      ...options,
      variant,
      size,
      label: (options == null ? void 0 : options.label) ?? ((_a = element.textContent) == null ? void 0 : _a.trim()) ?? "",
      icon: (options == null ? void 0 : options.icon) ?? null,
      tooltip: (options == null ? void 0 : options.tooltip) ?? null,
      maxHeight: (options == null ? void 0 : options.maxHeight) ?? null,
      items: (options == null ? void 0 : options.items) ?? [],
      onSelect: (options == null ? void 0 : options.onSelect) ?? null,
      onOpen: (options == null ? void 0 : options.onOpen) ?? null,
      onClose: (options == null ? void 0 : options.onClose) ?? null,
      onOpenChange: (options == null ? void 0 : options.onOpenChange) ?? null,
      onClick: (options == null ? void 0 : options.onClick) ?? null,
      onFocus: (options == null ? void 0 : options.onFocus) ?? null,
      onBlur: (options == null ? void 0 : options.onBlur) ?? null
    };
    this._originalLabel = this._options.label;
    this._selectedItemId = this._options.value;
    this._boundHandleClick = this._handleClick.bind(this);
    this._boundHandleFocus = this._handleFocus.bind(this);
    this._boundHandleBlur = this._handleBlur.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._render();
    this._bindEvents();
    this._initActionMenu();
    this._connectTooltip();
    if (this._selectedItemId != null && this._options.mode === "selection") {
      this._applySelection(this._selectedItemId);
    }
  }
  static initialize(element, options) {
    return new _ArvoDropdownButton(element, options);
  }
  _connectTooltip() {
    if (!this._element || !this._options.tooltip) return;
    this._tooltipConnector = connectTooltip(tooltipManager, {
      anchor: this._element,
      content: this._options.tooltip
    });
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    el.classList.add("arvo-dd-btn", "arvo-btn");
    el.classList.add(`arvo-btn--${this._options.variant}`);
    el.classList.add(`arvo-btn--${this._options.size}`);
    if (el instanceof HTMLButtonElement) {
      el.setAttribute("type", "button");
    }
    if (this._options.icon) {
      this._iconEl = document.createElement("span");
      this._iconEl.className = `arvo-dd-btn__icon o9con o9con-${this._options.icon}`;
      this._iconEl.setAttribute("aria-hidden", "true");
      el.appendChild(this._iconEl);
    }
    this._labelEl = document.createElement("span");
    this._labelEl.className = "arvo-dd-btn__lbl";
    this._labelEl.textContent = this._options.label;
    el.appendChild(this._labelEl);
    this._caretEl = document.createElement("span");
    this._caretEl.className = "arvo-dd-btn__caret o9con o9con-angle-down";
    this._caretEl.setAttribute("aria-hidden", "true");
    el.appendChild(this._caretEl);
    if (this._options.isDisabled) {
      if (el instanceof HTMLButtonElement) {
        el.disabled = true;
      } else {
        el.setAttribute("aria-disabled", "true");
      }
    }
    if (this._options.isLoading) {
      el.classList.add("loading");
      el.setAttribute("aria-busy", "true");
    }
  }
  // ---------------------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------------------
  _bindEvents() {
    var _a, _b, _c, _d;
    (_a = this._element) == null ? void 0 : _a.addEventListener("click", this._boundHandleClick);
    (_b = this._element) == null ? void 0 : _b.addEventListener("focus", this._boundHandleFocus);
    (_c = this._element) == null ? void 0 : _c.addEventListener("blur", this._boundHandleBlur);
    (_d = this._element) == null ? void 0 : _d.addEventListener("keydown", this._boundHandleKeydown);
  }
  _handleClick(event) {
    var _a, _b;
    if (this._options.isDisabled || this._options.isLoading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    (_b = (_a = this._options).onClick) == null ? void 0 : _b.call(_a, event);
  }
  _handleFocus(event) {
    var _a, _b;
    (_b = (_a = this._options).onFocus) == null ? void 0 : _b.call(_a, event);
  }
  _handleBlur(event) {
    var _a, _b;
    (_b = (_a = this._options).onBlur) == null ? void 0 : _b.call(_a, event);
  }
  _handleKeydown(event) {
    if ((event.key === "Enter" || event.key === " ") && (this._options.isDisabled || this._options.isLoading)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  // ---------------------------------------------------------------------------
  // ActionMenu Init
  // ---------------------------------------------------------------------------
  _initActionMenu() {
    if (!this._element) return;
    const menuOptions = {
      items: this._getProcessedItems(),
      size: this._options.menuSize,
      search: this._options.search,
      placement: this._options.placement,
      maxHeight: this._options.maxHeight ?? void 0,
      hasGroupDividers: this._options.hasGroupDividers,
      closeOnSelect: this._options.closeOnSelect,
      isDisabled: this._options.isDisabled || this._options.isLoading,
      onOpen: this._options.onOpen ?? void 0,
      onClose: this._options.onClose ?? void 0,
      onSelect: (item, index) => this._handleSelect(item, index),
      onOpenChange: (isOpen) => this._handleOpenChange(isOpen)
    };
    this._actionMenu = ArvoActionMenu.initialize(this._element, menuOptions);
  }
  // ---------------------------------------------------------------------------
  // Selection Logic
  // ---------------------------------------------------------------------------
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
      const previousId = this._selectedItemId;
      const previousItem = previousId != null ? flattenItems(this._options.items).find(
        (i) => i.id === String(previousId)
      ) ?? null : null;
      this._selectedItemId = item.id;
      this._updateDisplayLabel();
      (_a = this._actionMenu) == null ? void 0 : _a.updateItems(this._getProcessedItems());
      this._dispatchEvent("dd-btn:change", {
        item,
        index,
        previousItem
      });
    } else {
      this._dispatchEvent("dd-btn:select", { item, index });
    }
    return (_c = (_b = this._options).onSelect) == null ? void 0 : _c.call(_b, item, index);
  }
  _handleOpenChange(isOpen) {
    var _a, _b, _c;
    this._isOpen = isOpen;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("open", isOpen);
    if (isOpen) {
      this._dispatchEvent("dd-btn:open", {});
    } else {
      this._dispatchEvent("dd-btn:close", {});
    }
    (_c = (_b = this._options).onOpenChange) == null ? void 0 : _c.call(_b, isOpen);
  }
  _updateDisplayLabel() {
    if (!this._labelEl) return;
    if (this._options.mode === "action" || this._selectedItemId == null) {
      this._labelEl.textContent = this._originalLabel;
      return;
    }
    const flat = flattenItems(this._options.items);
    const selId = String(this._selectedItemId);
    const selectedItem = flat.find((item) => item.id === selId);
    if (!selectedItem) {
      this._labelEl.textContent = this._originalLabel;
      return;
    }
    if (this._options.displaySelected === "value") {
      const val = selectedItem.value;
      this._labelEl.textContent = val != null ? String(val) : selectedItem.id;
    } else {
      this._labelEl.textContent = selectedItem.label;
    }
  }
  _applySelection(itemId) {
    var _a;
    this._selectedItemId = itemId;
    this._updateDisplayLabel();
    (_a = this._actionMenu) == null ? void 0 : _a.updateItems(this._getProcessedItems());
  }
  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  _dispatchEvent(name, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(name, { bubbles: true, cancelable: true, detail })
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
      const flat = flattenItems(this._options.items);
      return flat.find((item) => item.id === String(this._selectedItemId)) ?? null;
    }
    if (this._options.mode !== "selection") return;
    if (itemId == null) {
      this._selectedItemId = null;
      this._updateDisplayLabel();
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
        this._updateDisplayLabel();
      }
    }
    (_a = this._actionMenu) == null ? void 0 : _a.updateItems(this._getProcessedItems());
  }
  setLabel(text) {
    this._originalLabel = text;
    if (this._options.mode === "action" || this._selectedItemId == null) {
      if (this._labelEl) this._labelEl.textContent = text;
    }
  }
  setIcon(iconName) {
    var _a;
    if (!iconName) {
      (_a = this._iconEl) == null ? void 0 : _a.remove();
      this._iconEl = null;
      this._options.icon = null;
      return;
    }
    if (this._iconEl) {
      const oldClass = this._options.icon ? `o9con-${this._options.icon}` : null;
      if (oldClass) this._iconEl.classList.remove(oldClass);
      this._iconEl.classList.add(`o9con-${iconName}`);
    } else if (this._element) {
      this._iconEl = document.createElement("span");
      this._iconEl.className = `arvo-dd-btn__icon o9con o9con-${iconName}`;
      this._iconEl.setAttribute("aria-hidden", "true");
      this._element.insertBefore(this._iconEl, this._element.firstChild);
    }
    this._options.icon = iconName;
  }
  setVariant(variant) {
    if (!_ArvoDropdownButton.VARIANTS.includes(variant))
      return;
    const el = this._element;
    if (!el) return;
    _ArvoDropdownButton.VARIANTS.forEach(
      (v) => el.classList.remove(`arvo-btn--${v}`)
    );
    el.classList.add(`arvo-btn--${variant}`);
    this._options.variant = variant;
  }
  setSize(size) {
    if (!_ArvoDropdownButton.SIZES.includes(size)) return;
    const el = this._element;
    if (!el) return;
    _ArvoDropdownButton.SIZES.forEach(
      (s) => el.classList.remove(`arvo-btn--${s}`)
    );
    el.classList.add(`arvo-btn--${size}`);
    this._options.size = size;
  }
  setLoading(isLoading) {
    var _a, _b, _c, _d, _e;
    this._options.isLoading = isLoading;
    if (isLoading) {
      (_a = this._element) == null ? void 0 : _a.classList.add("loading");
      (_b = this._element) == null ? void 0 : _b.setAttribute("aria-busy", "true");
    } else {
      (_c = this._element) == null ? void 0 : _c.classList.remove("loading");
      (_d = this._element) == null ? void 0 : _d.removeAttribute("aria-busy");
    }
    (_e = this._actionMenu) == null ? void 0 : _e.disabled(isLoading || this._options.isDisabled);
  }
  disabled(state) {
    var _a;
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    if (this._element instanceof HTMLButtonElement) {
      this._element.disabled = state;
    } else if (this._element) {
      if (state) {
        this._element.setAttribute("aria-disabled", "true");
      } else {
        this._element.removeAttribute("aria-disabled");
      }
    }
    (_a = this._actionMenu) == null ? void 0 : _a.disabled(state || this._options.isLoading);
  }
  focus() {
    var _a;
    (_a = this._element) == null ? void 0 : _a.focus();
  }
  destroy() {
    var _a, _b, _c, _d, _e;
    (_a = this._actionMenu) == null ? void 0 : _a.destroy();
    this._actionMenu = null;
    const el = this._element;
    if (el) {
      el.removeEventListener("click", this._boundHandleClick);
      el.removeEventListener("focus", this._boundHandleFocus);
      el.removeEventListener("blur", this._boundHandleBlur);
      el.removeEventListener("keydown", this._boundHandleKeydown);
      el.classList.remove(
        "arvo-dd-btn",
        "arvo-btn",
        "open",
        "loading"
      );
      _ArvoDropdownButton.VARIANTS.forEach(
        (v) => el.classList.remove(`arvo-btn--${v}`)
      );
      _ArvoDropdownButton.SIZES.forEach(
        (s) => el.classList.remove(`arvo-btn--${s}`)
      );
      el.removeAttribute("aria-haspopup");
      el.removeAttribute("aria-controls");
      el.removeAttribute("aria-expanded");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("aria-busy");
      if (el instanceof HTMLButtonElement) {
        el.disabled = false;
      }
      (_b = this._iconEl) == null ? void 0 : _b.remove();
      (_c = this._labelEl) == null ? void 0 : _c.remove();
      (_d = this._caretEl) == null ? void 0 : _d.remove();
    }
    (_e = this._tooltipConnector) == null ? void 0 : _e.destroy();
    this._tooltipConnector = null;
    this._element = null;
    this._iconEl = null;
    this._labelEl = null;
    this._caretEl = null;
  }
};
_ArvoDropdownButton.VARIANTS = ["primary", "secondary", "tertiary", "outline"];
_ArvoDropdownButton.SIZES = ["sm", "md", "lg"];
_ArvoDropdownButton.DEFAULTS = {
  label: "",
  variant: "primary",
  size: "md",
  icon: null,
  mode: "action",
  displaySelected: "label",
  value: null,
  isDisabled: false,
  isLoading: false,
  items: [],
  search: void 0,
  placement: "bottom-end",
  maxHeight: null,
  hasGroupDividers: true,
  closeOnSelect: true,
  menuSize: "md",
  tooltip: null,
  onSelect: null,
  onOpen: null,
  onClose: null,
  onOpenChange: null,
  onClick: null,
  onFocus: null,
  onBlur: null
};
let ArvoDropdownButton = _ArvoDropdownButton;
export {
  ArvoDropdownButton
};
//# sourceMappingURL=DropdownButton.js.map
