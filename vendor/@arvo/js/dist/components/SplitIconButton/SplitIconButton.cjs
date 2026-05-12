"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ActionMenu = require("../ActionMenu/ActionMenu.cjs");
const core = require("@arvo/core");
const _ArvoSplitIconButton = class _ArvoSplitIconButton {
  constructor(element, options) {
    var _a;
    this._actionEl = null;
    this._triggerEl = null;
    this._iconEl = null;
    this._caretEl = null;
    this._actionMenu = null;
    this._actionTooltipConnector = null;
    this._isOpen = false;
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _ArvoSplitIconButton.VARIANTS.includes(options.variant) ? options.variant : _ArvoSplitIconButton.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _ArvoSplitIconButton.SIZES.includes(options.size) ? options.size : _ArvoSplitIconButton.DEFAULTS.size;
    this._options = {
      ..._ArvoSplitIconButton.DEFAULTS,
      ...options,
      variant,
      size,
      icon: (options == null ? void 0 : options.icon) ?? _ArvoSplitIconButton.DEFAULTS.icon,
      tooltip: (options == null ? void 0 : options.tooltip) ?? null,
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
    if (typeof process !== "undefined" && ((_a = process.env) == null ? void 0 : _a.NODE_ENV) !== "production" && !this._options.tooltip) {
      console.warn(
        "ArvoSplitIconButton: `tooltip` is required so the action segment has an accessible name (it is also rendered as the visual tooltip)."
      );
    }
    this._boundHandleActionClick = this._handleActionClick.bind(this);
    this._boundHandleActionKeydown = this._handleActionKeydown.bind(this);
    this._boundHandleActionFocus = this._handleActionFocus.bind(this);
    this._boundHandleActionBlur = this._handleActionBlur.bind(this);
    this._render();
    this._bindEvents();
    this._initActionMenu();
    this._connectActionTooltip();
  }
  static initialize(element, options) {
    return new _ArvoSplitIconButton(element, options);
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    el.classList.add("arvo-split-icon-btn");
    el.classList.add(`arvo-split-icon-btn--${this._options.variant}`);
    el.classList.add(`arvo-split-icon-btn--${this._options.size}`);
    el.setAttribute("role", "group");
    const actionEl = document.createElement("button");
    actionEl.type = "button";
    actionEl.className = `arvo-icon-btn arvo-btn--${this._options.variant} arvo-btn--${this._options.size} arvo-split-icon-btn__action`;
    if (this._options.tooltip) {
      actionEl.setAttribute("aria-label", this._options.tooltip);
    }
    this._actionEl = actionEl;
    const iconEl = document.createElement("span");
    iconEl.className = `arvo-split-icon-btn__icon o9con o9con-${this._options.icon}`;
    iconEl.setAttribute("aria-hidden", "true");
    actionEl.appendChild(iconEl);
    this._iconEl = iconEl;
    const triggerEl = document.createElement("button");
    triggerEl.type = "button";
    triggerEl.className = `arvo-btn arvo-btn--${this._options.variant} arvo-btn--${this._options.size} arvo-split-icon-btn__trigger`;
    triggerEl.setAttribute("aria-haspopup", "menu");
    triggerEl.setAttribute("aria-expanded", "false");
    triggerEl.setAttribute("aria-label", this._options.triggerLabel);
    this._triggerEl = triggerEl;
    const caretEl = document.createElement("span");
    caretEl.className = "arvo-split-icon-btn__caret o9con o9con-angle-down";
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
    var _a, _b;
    if (!this._actionEl || this._actionEl.disabled || this._options.isLoading) {
      return;
    }
    this._dispatchEvent("split-icon-btn:action", {});
    (_b = (_a = this._options).onAction) == null ? void 0 : _b.call(_a, event);
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
      items: this._options.items,
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
    this._actionMenu = ActionMenu.ArvoActionMenu.initialize(this._triggerEl, menuOptions);
  }
  _handleSelect(item, index) {
    var _a, _b;
    this._dispatchEvent("split-icon-btn:select", { item, index });
    return (_b = (_a = this._options).onSelect) == null ? void 0 : _b.call(_a, item, index);
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
      this._dispatchEvent("split-icon-btn:open", {});
    } else {
      this._dispatchEvent("split-icon-btn:close", {});
    }
    (_d = (_c = this._options).onOpenChange) == null ? void 0 : _d.call(_c, isOpen);
  }
  // ---------------------------------------------------------------------------
  // Tooltip wiring
  // ---------------------------------------------------------------------------
  _connectActionTooltip() {
    if (!this._actionEl || !this._options.tooltip) return;
    this._actionTooltipConnector = core.connectTooltip(core.tooltipManager, {
      anchor: this._actionEl,
      content: this._options.tooltip
    });
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
  updateItems(items) {
    var _a;
    this._options.items = items;
    (_a = this._actionMenu) == null ? void 0 : _a.updateItems(items);
  }
  setIcon(iconName) {
    this._options.icon = iconName;
    if (!this._iconEl) return;
    const toRemove = [];
    this._iconEl.classList.forEach((c) => {
      if (c.startsWith("o9con-")) toRemove.push(c);
    });
    toRemove.forEach((c) => {
      var _a;
      return (_a = this._iconEl) == null ? void 0 : _a.classList.remove(c);
    });
    this._iconEl.classList.add(`o9con-${iconName}`);
  }
  setVariant(variant) {
    var _a, _b;
    if (!_ArvoSplitIconButton.VARIANTS.includes(variant))
      return;
    const oldVariant = this._options.variant;
    (_a = this._element) == null ? void 0 : _a.classList.remove(`arvo-split-icon-btn--${oldVariant}`);
    (_b = this._element) == null ? void 0 : _b.classList.add(`arvo-split-icon-btn--${variant}`);
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
    if (!_ArvoSplitIconButton.SIZES.includes(size)) return;
    const oldSize = this._options.size;
    (_a = this._element) == null ? void 0 : _a.classList.remove(`arvo-split-icon-btn--${oldSize}`);
    (_b = this._element) == null ? void 0 : _b.classList.add(`arvo-split-icon-btn--${size}`);
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
  setTooltip(tooltip) {
    var _a;
    this._options.tooltip = tooltip;
    (_a = this._actionTooltipConnector) == null ? void 0 : _a.destroy();
    this._actionTooltipConnector = null;
    if (this._actionEl) {
      if (tooltip) {
        this._actionEl.setAttribute("aria-label", tooltip);
      } else {
        this._actionEl.removeAttribute("aria-label");
      }
    }
    if (tooltip) this._connectActionTooltip();
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
    (_b = this._actionTooltipConnector) == null ? void 0 : _b.destroy();
    this._actionTooltipConnector = null;
    const el = this._element;
    if (el) {
      el.classList.remove("arvo-split-icon-btn", "open", "loading");
      _ArvoSplitIconButton.VARIANTS.forEach(
        (v) => el.classList.remove(`arvo-split-icon-btn--${v}`)
      );
      _ArvoSplitIconButton.SIZES.forEach(
        (s) => el.classList.remove(`arvo-split-icon-btn--${s}`)
      );
      el.removeAttribute("role");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("aria-busy");
      (_c = this._iconEl) == null ? void 0 : _c.remove();
      (_d = this._caretEl) == null ? void 0 : _d.remove();
      (_e = this._actionEl) == null ? void 0 : _e.remove();
      (_f = this._triggerEl) == null ? void 0 : _f.remove();
    }
    this._element = null;
    this._actionEl = null;
    this._triggerEl = null;
    this._iconEl = null;
    this._caretEl = null;
  }
};
_ArvoSplitIconButton.VARIANTS = ["primary", "secondary", "tertiary"];
_ArvoSplitIconButton.SIZES = ["sm", "md", "lg"];
_ArvoSplitIconButton.DEFAULTS = {
  icon: "",
  variant: "primary",
  size: "md",
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
  tooltip: null,
  triggerLabel: "Show options",
  onAction: null,
  onSelect: null,
  onOpen: null,
  onClose: null,
  onOpenChange: null,
  onFocus: null,
  onBlur: null
};
let ArvoSplitIconButton = _ArvoSplitIconButton;
exports.ArvoSplitIconButton = ArvoSplitIconButton;
//# sourceMappingURL=SplitIconButton.cjs.map
