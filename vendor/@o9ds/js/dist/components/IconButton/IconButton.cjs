"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const core = require("@o9ds/core");
const _O9IconButton = class _O9IconButton {
  constructor(element, options) {
    this._iconEl = null;
    this._tooltipConnector = null;
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _O9IconButton.VARIANTS.includes(options.variant) ? options.variant : _O9IconButton.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _O9IconButton.SIZES.includes(options.size) ? options.size : _O9IconButton.DEFAULTS.size;
    this._options = {
      ..._O9IconButton.DEFAULTS,
      ...options,
      variant,
      size,
      icon: (options == null ? void 0 : options.icon) ?? _O9IconButton.DEFAULTS.icon,
      tooltip: (options == null ? void 0 : options.tooltip) ?? _O9IconButton.DEFAULTS.tooltip,
      onClick: (options == null ? void 0 : options.onClick) ?? null,
      onKeyDown: (options == null ? void 0 : options.onKeyDown) ?? null
    };
    this._boundHandleClick = this._handleClick.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._render();
    this._bindEvents();
    this._connectTooltip();
  }
  static initialize(element, options) {
    return new _O9IconButton(element, options);
  }
  _connectTooltip() {
    if (!this._element || !this._options.tooltip) return;
    const tip = this._options.tooltip;
    const config = typeof tip === "string" ? { content: tip } : tip;
    this._tooltipConnector = core.connectTooltip(core.tooltipManager, {
      anchor: this._element,
      content: config.content,
      placement: config.placement,
      shortcut: config.shortcut
    });
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    el.classList.add("o9ds-icon-btn");
    el.classList.add(`o9ds-btn--${this._options.variant}`);
    el.classList.add(`o9ds-btn--${this._options.size}`);
    el.setAttribute("type", this._options.type);
    if (this._options.icon) {
      this._iconEl = this._createIconEl(this._options.icon);
      el.appendChild(this._iconEl);
    }
    if (this._options.tooltip) {
      const tip = this._options.tooltip;
      el.setAttribute("aria-label", typeof tip === "string" ? tip : tip.content);
    }
    if (this._options.isDisabled) {
      el.disabled = true;
    }
    if (this._options.isSelected !== void 0) {
      el.setAttribute("aria-pressed", String(this._options.isSelected));
      if (this._options.isSelected) {
        el.classList.add("active");
      }
    }
    if (this._options.isLoading) {
      el.classList.add("loading");
      el.setAttribute("aria-busy", "true");
    }
  }
  _createIconEl(iconName) {
    const span = document.createElement("span");
    span.className = `o9ds-btn__ico o9con o9con-${iconName}`;
    span.setAttribute("aria-hidden", "true");
    return span;
  }
  _bindEvents() {
    var _a, _b;
    (_a = this._element) == null ? void 0 : _a.addEventListener("click", this._boundHandleClick);
    (_b = this._element) == null ? void 0 : _b.addEventListener("keydown", this._boundHandleKeydown);
  }
  _handleClick(event) {
    if (this._options.isDisabled || this._options.isLoading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this._options.onClick) {
      this._options.onClick(event);
    }
  }
  _handleKeydown(event) {
    if ((event.key === "Enter" || event.key === " ") && (this._options.isDisabled || this._options.isLoading)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this._options.onKeyDown) {
      this._options.onKeyDown(event);
    }
  }
  _dispatchEvent(name, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      cancelable: true,
      detail
    }));
  }
  setIcon(iconName) {
    if (!iconName) return;
    if (this._iconEl) {
      const oldClass = this._options.icon ? `o9con-${this._options.icon}` : null;
      if (oldClass) {
        this._iconEl.classList.remove(oldClass);
      }
      this._iconEl.classList.add(`o9con-${iconName}`);
    } else if (this._element) {
      this._iconEl = this._createIconEl(iconName);
      this._element.insertBefore(this._iconEl, this._element.firstChild);
    }
    this._options.icon = iconName;
  }
  setTooltip(tooltip) {
    var _a, _b;
    this._options.tooltip = tooltip;
    (_a = this._element) == null ? void 0 : _a.setAttribute("aria-label", tooltip);
    (_b = this._tooltipConnector) == null ? void 0 : _b.update({ content: tooltip });
  }
  setVariant(variant) {
    if (!_O9IconButton.VARIANTS.includes(variant)) return;
    const el = this._element;
    if (!el) return;
    _O9IconButton.VARIANTS.forEach((v) => el.classList.remove(`o9ds-btn--${v}`));
    el.classList.add(`o9ds-btn--${variant}`);
    this._options.variant = variant;
  }
  setSize(size) {
    if (!_O9IconButton.SIZES.includes(size)) return;
    const el = this._element;
    if (!el) return;
    _O9IconButton.SIZES.forEach((s) => el.classList.remove(`o9ds-btn--${s}`));
    el.classList.add(`o9ds-btn--${size}`);
    this._options.size = size;
  }
  setLoading(isLoading) {
    var _a, _b, _c, _d;
    this._options.isLoading = isLoading;
    if (isLoading) {
      (_a = this._element) == null ? void 0 : _a.classList.add("loading");
      (_b = this._element) == null ? void 0 : _b.setAttribute("aria-busy", "true");
    } else {
      (_c = this._element) == null ? void 0 : _c.classList.remove("loading");
      (_d = this._element) == null ? void 0 : _d.removeAttribute("aria-busy");
    }
    this._dispatchEvent("btn:loading", { isLoading });
  }
  selected(state) {
    var _a, _b, _c;
    if (state === void 0) {
      return this._options.isSelected === true;
    }
    this._options.isSelected = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("active");
    } else {
      (_b = this._element) == null ? void 0 : _b.classList.remove("active");
    }
    (_c = this._element) == null ? void 0 : _c.setAttribute("aria-pressed", String(state));
  }
  disabled(state) {
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    if (this._element) {
      this._element.disabled = state;
    }
  }
  focus() {
    if (this._element && !this._options.isLoading) {
      this._element.focus();
    }
  }
  destroy() {
    var _a, _b;
    const el = this._element;
    if (!el) return;
    el.removeEventListener("click", this._boundHandleClick);
    el.removeEventListener("keydown", this._boundHandleKeydown);
    el.classList.remove("o9ds-icon-btn", "active", "loading", "open", "focus-border");
    _O9IconButton.VARIANTS.forEach((v) => el.classList.remove(`o9ds-btn--${v}`));
    _O9IconButton.SIZES.forEach((s) => el.classList.remove(`o9ds-btn--${s}`));
    el.removeAttribute("aria-label");
    el.removeAttribute("aria-pressed");
    el.removeAttribute("aria-expanded");
    el.removeAttribute("aria-haspopup");
    el.removeAttribute("aria-busy");
    el.disabled = false;
    (_a = this._iconEl) == null ? void 0 : _a.remove();
    (_b = this._tooltipConnector) == null ? void 0 : _b.destroy();
    this._tooltipConnector = null;
    this._element = null;
    this._iconEl = null;
  }
};
_O9IconButton.VARIANTS = ["primary", "secondary", "tertiary", "outline", "danger"];
_O9IconButton.SIZES = ["xs", "sm", "md", "lg"];
_O9IconButton.DEFAULTS = {
  variant: "primary",
  size: "md",
  type: "button",
  icon: "",
  tooltip: "",
  isDisabled: false,
  isSelected: void 0,
  isLoading: false,
  onClick: null,
  onKeyDown: null
};
let O9IconButton = _O9IconButton;
exports.O9IconButton = O9IconButton;
//# sourceMappingURL=IconButton.cjs.map
