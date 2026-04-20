import { O9ActionMenu } from "../ActionMenu/ActionMenu.js";
import { connectTooltip, tooltipManager } from "@o9ds/core";
const _O9DropdownIconButton = class _O9DropdownIconButton {
  constructor(element, options) {
    this._actionMenu = null;
    this._iconEl = null;
    this._caretEl = null;
    this._tooltipConnector = null;
    this._isOpen = false;
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _O9DropdownIconButton.VARIANTS.includes(options.variant) ? options.variant : _O9DropdownIconButton.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _O9DropdownIconButton.SIZES.includes(options.size) ? options.size : _O9DropdownIconButton.DEFAULTS.size;
    this._options = {
      ..._O9DropdownIconButton.DEFAULTS,
      ...options,
      variant,
      size,
      icon: (options == null ? void 0 : options.icon) ?? _O9DropdownIconButton.DEFAULTS.icon,
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
    this._boundHandleClick = this._handleClick.bind(this);
    this._boundHandleFocus = this._handleFocus.bind(this);
    this._boundHandleBlur = this._handleBlur.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._render();
    this._bindEvents();
    this._initActionMenu();
    this._connectTooltip();
  }
  static initialize(element, options) {
    return new _O9DropdownIconButton(element, options);
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
    el.classList.add("o9ds-dd-icon-btn", "o9ds-btn");
    el.classList.add(`o9ds-btn--${this._options.variant}`);
    el.classList.add(`o9ds-btn--${this._options.size}`);
    if (this._options.isCompact) {
      el.classList.add("o9ds-dd-icon-btn--compact");
    }
    if (el instanceof HTMLButtonElement) {
      el.setAttribute("type", "button");
    }
    this._iconEl = document.createElement("span");
    this._iconEl.className = `o9ds-dd-icon-btn__icon o9con o9con-${this._options.icon}`;
    this._iconEl.setAttribute("aria-hidden", "true");
    el.appendChild(this._iconEl);
    if (!this._options.isCompact) {
      this._caretEl = document.createElement("span");
      this._caretEl.className = "o9ds-dd-icon-btn__caret o9con o9con-angle-down";
      this._caretEl.setAttribute("aria-hidden", "true");
      el.appendChild(this._caretEl);
    }
    if (this._options.tooltip) {
      el.setAttribute("aria-label", this._options.tooltip);
    }
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
      items: this._options.items,
      size: this._options.menuSize,
      search: this._options.search,
      placement: this._options.placement,
      maxHeight: this._options.maxHeight ?? void 0,
      hasGroupDividers: this._options.hasGroupDividers,
      closeOnSelect: this._options.closeOnSelect,
      isDisabled: this._options.isDisabled || this._options.isLoading,
      onOpen: this._options.onOpen ?? void 0,
      onClose: this._options.onClose ?? void 0,
      onSelect: (item, index) => this._handleMenuSelect(item, index),
      onOpenChange: (isOpen) => this._handleOpenChange(isOpen)
    };
    this._actionMenu = O9ActionMenu.initialize(this._element, menuOptions);
  }
  // ---------------------------------------------------------------------------
  // Menu Handlers
  // ---------------------------------------------------------------------------
  _handleMenuSelect(item, index) {
    var _a, _b;
    this._dispatchEvent("dd-icon-btn:select", { item, index });
    return (_b = (_a = this._options).onSelect) == null ? void 0 : _b.call(_a, item, index);
  }
  _handleOpenChange(isOpen) {
    var _a, _b, _c;
    this._isOpen = isOpen;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("open", isOpen);
    if (isOpen) {
      this._dispatchEvent("dd-icon-btn:open", {});
    } else {
      this._dispatchEvent("dd-icon-btn:close", {});
    }
    (_c = (_b = this._options).onOpenChange) == null ? void 0 : _c.call(_b, isOpen);
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
  updateItems(items) {
    var _a;
    this._options.items = items;
    (_a = this._actionMenu) == null ? void 0 : _a.updateItems(items);
  }
  setIcon(iconName) {
    if (!this._iconEl) return;
    const oldClass = `o9con-${this._options.icon}`;
    this._iconEl.classList.remove(oldClass);
    this._iconEl.classList.add(`o9con-${iconName}`);
    this._options.icon = iconName;
  }
  setTooltip(text) {
    var _a, _b, _c;
    this._options.tooltip = text;
    if (text) {
      (_a = this._element) == null ? void 0 : _a.setAttribute("aria-label", text);
    } else {
      (_b = this._element) == null ? void 0 : _b.removeAttribute("aria-label");
    }
    (_c = this._tooltipConnector) == null ? void 0 : _c.update({ content: text ?? "" });
  }
  compact(state) {
    var _a, _b, _c;
    if (state === void 0) {
      return this._options.isCompact;
    }
    if (state === this._options.isCompact) return;
    this._options.isCompact = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("o9ds-dd-icon-btn--compact");
      (_b = this._caretEl) == null ? void 0 : _b.remove();
      this._caretEl = null;
    } else {
      (_c = this._element) == null ? void 0 : _c.classList.remove("o9ds-dd-icon-btn--compact");
      if (!this._caretEl && this._element) {
        this._caretEl = document.createElement("span");
        this._caretEl.className = "o9ds-dd-icon-btn__caret o9con o9con-angle-down";
        this._caretEl.setAttribute("aria-hidden", "true");
        this._element.appendChild(this._caretEl);
      }
    }
  }
  setVariant(variant) {
    if (!_O9DropdownIconButton.VARIANTS.includes(variant))
      return;
    const el = this._element;
    if (!el) return;
    _O9DropdownIconButton.VARIANTS.forEach(
      (v) => el.classList.remove(`o9ds-btn--${v}`)
    );
    el.classList.add(`o9ds-btn--${variant}`);
    this._options.variant = variant;
  }
  setSize(size) {
    if (!_O9DropdownIconButton.SIZES.includes(size))
      return;
    const el = this._element;
    if (!el) return;
    _O9DropdownIconButton.SIZES.forEach(
      (s) => el.classList.remove(`o9ds-btn--${s}`)
    );
    el.classList.add(`o9ds-btn--${size}`);
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
    var _a, _b, _c, _d;
    (_a = this._actionMenu) == null ? void 0 : _a.destroy();
    this._actionMenu = null;
    const el = this._element;
    if (el) {
      el.removeEventListener("click", this._boundHandleClick);
      el.removeEventListener("focus", this._boundHandleFocus);
      el.removeEventListener("blur", this._boundHandleBlur);
      el.removeEventListener("keydown", this._boundHandleKeydown);
      el.classList.remove(
        "o9ds-dd-icon-btn",
        "o9ds-dd-icon-btn--compact",
        "o9ds-btn",
        "open",
        "loading"
      );
      _O9DropdownIconButton.VARIANTS.forEach(
        (v) => el.classList.remove(`o9ds-btn--${v}`)
      );
      _O9DropdownIconButton.SIZES.forEach(
        (s) => el.classList.remove(`o9ds-btn--${s}`)
      );
      el.removeAttribute("aria-haspopup");
      el.removeAttribute("aria-controls");
      el.removeAttribute("aria-expanded");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("aria-busy");
      el.removeAttribute("aria-label");
      if (el instanceof HTMLButtonElement) {
        el.disabled = false;
      }
      (_b = this._iconEl) == null ? void 0 : _b.remove();
      (_c = this._caretEl) == null ? void 0 : _c.remove();
    }
    (_d = this._tooltipConnector) == null ? void 0 : _d.destroy();
    this._tooltipConnector = null;
    this._element = null;
    this._iconEl = null;
    this._caretEl = null;
  }
};
_O9DropdownIconButton.VARIANTS = ["primary", "secondary", "tertiary", "outline"];
_O9DropdownIconButton.SIZES = ["sm", "md", "lg"];
_O9DropdownIconButton.DEFAULTS = {
  icon: "more-vertical",
  tooltip: null,
  variant: "primary",
  size: "md",
  isCompact: false,
  isDisabled: false,
  isLoading: false,
  items: [],
  search: void 0,
  placement: "bottom-end",
  maxHeight: null,
  hasGroupDividers: true,
  closeOnSelect: true,
  menuSize: "md",
  onSelect: null,
  onOpen: null,
  onClose: null,
  onOpenChange: null,
  onClick: null,
  onFocus: null,
  onBlur: null
};
let O9DropdownIconButton = _O9DropdownIconButton;
export {
  O9DropdownIconButton
};
//# sourceMappingURL=DropdownIconButton.js.map
