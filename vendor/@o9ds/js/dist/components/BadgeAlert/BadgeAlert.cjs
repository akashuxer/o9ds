"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const TYPES = ["positive", "info", "neutral", "warning", "negative", "block"];
const VARIANTS = ["primary", "outline"];
const SIZES = ["sm", "lg"];
const DEFAULTS = {
  message: "",
  type: "positive",
  variant: "primary",
  size: "lg",
  icon: true,
  customIcon: null,
  role: "status"
};
class O9BadgeAlert {
  constructor(element, options) {
    this._icoEl = null;
    this._msgEl = null;
    this._element = element;
    this._options = {
      ...DEFAULTS,
      ...options,
      type: (options == null ? void 0 : options.type) && TYPES.includes(options.type) ? options.type : DEFAULTS.type,
      variant: (options == null ? void 0 : options.variant) && VARIANTS.includes(options.variant) ? options.variant : DEFAULTS.variant,
      size: (options == null ? void 0 : options.size) && SIZES.includes(options.size) ? options.size : DEFAULTS.size,
      customIcon: (options == null ? void 0 : options.customIcon) ?? null
    };
    this._render();
  }
  static initialize(element, options) {
    return new O9BadgeAlert(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.innerHTML = "";
    el.className = [
      "o9ds-bdg-alert",
      `o9ds-bdg-alert--${this._options.variant}`,
      `o9ds-bdg-alert--${this._options.type}`,
      `o9ds-bdg-alert--${this._options.size}`
    ].join(" ");
    el.setAttribute("role", this._options.role);
    if (this._options.icon) {
      this._icoEl = this._createIconEl();
      el.appendChild(this._icoEl);
    } else {
      this._icoEl = null;
    }
    this._msgEl = document.createElement("span");
    this._msgEl.className = "o9ds-bdg-alert__msg";
    this._msgEl.textContent = this._options.message;
    el.appendChild(this._msgEl);
  }
  _createIconEl() {
    const span = document.createElement("span");
    const classes = ["o9ds-bdg-alert__ico", "o9con"];
    if (this._options.customIcon) {
      classes.push(`o9con-${this._options.customIcon}`);
    }
    span.className = classes.join(" ");
    span.setAttribute("aria-hidden", "true");
    return span;
  }
  setMessage(text) {
    this._options.message = text;
    if (this._msgEl) {
      this._msgEl.textContent = text;
    }
  }
  setType(type) {
    if (!TYPES.includes(type)) return;
    const el = this._element;
    if (!el) return;
    TYPES.forEach((t) => el.classList.remove(`o9ds-bdg-alert--${t}`));
    el.classList.add(`o9ds-bdg-alert--${type}`);
    this._options.type = type;
  }
  setVariant(variant) {
    if (!VARIANTS.includes(variant)) return;
    const el = this._element;
    if (!el) return;
    VARIANTS.forEach((v) => el.classList.remove(`o9ds-bdg-alert--${v}`));
    el.classList.add(`o9ds-bdg-alert--${variant}`);
    this._options.variant = variant;
  }
  setSize(size) {
    if (!SIZES.includes(size)) return;
    const el = this._element;
    if (!el) return;
    SIZES.forEach((s) => el.classList.remove(`o9ds-bdg-alert--${s}`));
    el.classList.add(`o9ds-bdg-alert--${size}`);
    this._options.size = size;
  }
  setIcon(show) {
    this._options.icon = show;
    const el = this._element;
    if (!el) return;
    if (show && !this._icoEl) {
      this._icoEl = this._createIconEl();
      el.insertBefore(this._icoEl, el.firstChild);
    } else if (!show && this._icoEl) {
      this._icoEl.remove();
      this._icoEl = null;
    }
  }
  destroy() {
    const el = this._element;
    if (!el) return;
    el.innerHTML = "";
    el.className = "";
    el.removeAttribute("role");
    this._element = null;
    this._icoEl = null;
    this._msgEl = null;
  }
}
exports.O9BadgeAlert = O9BadgeAlert;
//# sourceMappingURL=BadgeAlert.cjs.map
