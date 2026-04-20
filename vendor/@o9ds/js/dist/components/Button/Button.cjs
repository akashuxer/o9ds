"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const core = require("@o9ds/core");
const _O9Button = class _O9Button {
  constructor(element, options) {
    var _a;
    this._iconEl = null;
    this._labelEl = null;
    this._tooltipConnector = null;
    this._element = element;
    this._originalContent = ((_a = element.textContent) == null ? void 0 : _a.trim()) ?? "";
    const variant = (options == null ? void 0 : options.variant) && _O9Button.VARIANTS.includes(options.variant) ? options.variant : _O9Button.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _O9Button.SIZES.includes(options.size) ? options.size : _O9Button.DEFAULTS.size;
    this._options = {
      ..._O9Button.DEFAULTS,
      ...options,
      variant,
      size,
      label: (options == null ? void 0 : options.label) ?? this._originalContent,
      icon: (options == null ? void 0 : options.icon) ?? null,
      tooltip: (options == null ? void 0 : options.tooltip) ?? null,
      onClick: (options == null ? void 0 : options.onClick) ?? null
    };
    this._boundHandleClick = this._handleClick.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._render();
    this._bindEvents();
    this._connectTooltip();
  }
  static initialize(element, options) {
    return new _O9Button(element, options);
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
    el.classList.add("o9ds-btn");
    el.classList.add(`o9ds-btn--${this._options.variant}`);
    el.classList.add(`o9ds-btn--${this._options.size}`);
    el.setAttribute("type", this._options.type);
    if (this._options.isFullWidth) {
      el.classList.add("o9ds-btn--full-width");
    }
    if (this._options.icon) {
      this._iconEl = this._createIconEl(this._options.icon);
      el.appendChild(this._iconEl);
    }
    this._labelEl = document.createElement("span");
    this._labelEl.className = "o9ds-btn__lbl";
    this._labelEl.textContent = this._options.label;
    el.appendChild(this._labelEl);
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
  setLabel(text) {
    this._options.label = text;
    if (this._labelEl) {
      this._labelEl.textContent = text;
    } else if (this._element) {
      this._labelEl = document.createElement("span");
      this._labelEl.className = "o9ds-btn__lbl";
      this._labelEl.textContent = text;
      this._element.appendChild(this._labelEl);
    }
  }
  setIcon(iconName) {
    if (!iconName) {
      if (this._iconEl) {
        this._iconEl.remove();
        this._iconEl = null;
      }
      this._options.icon = null;
      return;
    }
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
  setVariant(variant) {
    if (!_O9Button.VARIANTS.includes(variant)) return;
    const el = this._element;
    if (!el) return;
    _O9Button.VARIANTS.forEach((v) => el.classList.remove(`o9ds-btn--${v}`));
    el.classList.add(`o9ds-btn--${variant}`);
    this._options.variant = variant;
  }
  setSize(size) {
    if (!_O9Button.SIZES.includes(size)) return;
    const el = this._element;
    if (!el) return;
    _O9Button.SIZES.forEach((s) => el.classList.remove(`o9ds-btn--${s}`));
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
    this._dispatchEvent("btn:disabled", { isDisabled: state });
  }
  focus() {
    if (this._element && !this._options.isLoading) {
      this._element.focus();
    }
  }
  destroy() {
    var _a, _b, _c;
    const el = this._element;
    if (!el) return;
    el.removeEventListener("click", this._boundHandleClick);
    el.removeEventListener("keydown", this._boundHandleKeydown);
    el.classList.remove("o9ds-btn", "o9ds-btn--full-width", "active", "open", "loading", "focus-border");
    _O9Button.VARIANTS.forEach((v) => el.classList.remove(`o9ds-btn--${v}`));
    _O9Button.SIZES.forEach((s) => el.classList.remove(`o9ds-btn--${s}`));
    el.removeAttribute("aria-pressed");
    el.removeAttribute("aria-expanded");
    el.removeAttribute("aria-haspopup");
    el.removeAttribute("aria-busy");
    el.disabled = false;
    (_a = this._iconEl) == null ? void 0 : _a.remove();
    (_b = this._labelEl) == null ? void 0 : _b.remove();
    el.textContent = this._originalContent;
    (_c = this._tooltipConnector) == null ? void 0 : _c.destroy();
    this._tooltipConnector = null;
    this._element = null;
    this._iconEl = null;
    this._labelEl = null;
  }
};
_O9Button.VARIANTS = ["primary", "secondary", "tertiary", "outline", "danger"];
_O9Button.SIZES = ["sm", "md", "lg"];
_O9Button.DEFAULTS = {
  variant: "primary",
  size: "md",
  type: "button",
  label: "",
  icon: null,
  isDisabled: false,
  isSelected: void 0,
  isFullWidth: false,
  isLoading: false,
  tooltip: null,
  onClick: null
};
let O9Button = _O9Button;
exports.O9Button = O9Button;
//# sourceMappingURL=Button.cjs.map
