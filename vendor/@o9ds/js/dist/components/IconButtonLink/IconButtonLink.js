import { connectTooltip, tooltipManager } from "@o9ds/core";
const _O9IconButtonLink = class _O9IconButtonLink {
  constructor(element, options) {
    this._iconEl = null;
    this._tooltipConnector = null;
    this._element = element;
    this._originalHref = element.getAttribute("href") ?? "";
    const variant = (options == null ? void 0 : options.variant) && _O9IconButtonLink.VARIANTS.includes(options.variant) ? options.variant : _O9IconButtonLink.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _O9IconButtonLink.SIZES.includes(options.size) ? options.size : _O9IconButtonLink.DEFAULTS.size;
    this._options = {
      ..._O9IconButtonLink.DEFAULTS,
      ...options,
      variant,
      size,
      icon: (options == null ? void 0 : options.icon) ?? _O9IconButtonLink.DEFAULTS.icon,
      href: (options == null ? void 0 : options.href) ?? this._originalHref,
      target: (options == null ? void 0 : options.target) ?? null,
      tooltip: (options == null ? void 0 : options.tooltip) ?? _O9IconButtonLink.DEFAULTS.tooltip,
      onClick: (options == null ? void 0 : options.onClick) ?? null
    };
    this._boundHandleClick = this._handleClick.bind(this);
    this._render();
    this._bindEvents();
    this._connectTooltip();
  }
  static initialize(element, options) {
    return new _O9IconButtonLink(element, options);
  }
  _connectTooltip() {
    if (!this._element || !this._options.tooltip) return;
    this._tooltipConnector = connectTooltip(tooltipManager, {
      anchor: this._element,
      content: this._options.tooltip
    });
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    el.classList.add("o9ds-icon-btn");
    el.classList.add(`o9ds-btn--${this._options.variant}`);
    el.classList.add(`o9ds-btn--${this._options.size}`);
    if (this._options.icon) {
      this._iconEl = this._createIconEl(this._options.icon);
      el.appendChild(this._iconEl);
    }
    if (this._options.tooltip) {
      el.setAttribute("aria-label", this._options.tooltip);
    }
    this._applyHref();
    this._applyTarget();
    if (this._options.isDisabled) {
      this._applyDisabled(true);
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
  _applyHref() {
    const el = this._element;
    if (!el) return;
    if (this._options.isDisabled) {
      el.removeAttribute("href");
    } else {
      el.setAttribute("href", this._options.href);
    }
  }
  _applyTarget() {
    const el = this._element;
    if (!el || this._options.isDisabled) return;
    if (this._options.target) {
      el.setAttribute("target", this._options.target);
      if (this._options.target === "_blank") {
        el.setAttribute("rel", "noopener noreferrer");
      }
    } else {
      el.removeAttribute("target");
      el.removeAttribute("rel");
    }
  }
  _applyDisabled(state) {
    const el = this._element;
    if (!el) return;
    if (state) {
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.removeAttribute("href");
      el.removeAttribute("target");
      el.removeAttribute("rel");
      el.setAttribute("tabindex", "0");
    } else {
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("tabindex");
      this._applyHref();
      this._applyTarget();
    }
  }
  _bindEvents() {
    var _a;
    (_a = this._element) == null ? void 0 : _a.addEventListener("click", this._boundHandleClick);
  }
  _handleClick(event) {
    if (this._options.isDisabled || this._options.isLoading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this._dispatchEvent("ico-btn-lnk:click", {
      href: this._options.href
    });
    if (this._options.onClick) {
      this._options.onClick(event);
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
  setHref(href) {
    this._options.href = href;
    this._applyHref();
  }
  setTooltip(tooltip) {
    var _a, _b;
    this._options.tooltip = tooltip;
    (_a = this._element) == null ? void 0 : _a.setAttribute("aria-label", tooltip);
    (_b = this._tooltipConnector) == null ? void 0 : _b.update({ content: tooltip });
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
  }
  disabled(state) {
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    this._applyDisabled(state);
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
    el.classList.remove("o9ds-icon-btn", "is-disabled", "loading");
    _O9IconButtonLink.VARIANTS.forEach((v) => el.classList.remove(`o9ds-btn--${v}`));
    _O9IconButtonLink.SIZES.forEach((s) => el.classList.remove(`o9ds-btn--${s}`));
    el.removeAttribute("aria-label");
    el.removeAttribute("aria-disabled");
    el.removeAttribute("aria-busy");
    el.removeAttribute("tabindex");
    el.removeAttribute("target");
    el.removeAttribute("rel");
    if (this._originalHref) {
      el.setAttribute("href", this._originalHref);
    }
    (_a = this._iconEl) == null ? void 0 : _a.remove();
    (_b = this._tooltipConnector) == null ? void 0 : _b.destroy();
    this._tooltipConnector = null;
    this._element = null;
    this._iconEl = null;
  }
};
_O9IconButtonLink.VARIANTS = ["primary", "secondary", "tertiary", "outline", "danger"];
_O9IconButtonLink.SIZES = ["xs", "sm", "md", "lg"];
_O9IconButtonLink.DEFAULTS = {
  variant: "primary",
  size: "md",
  icon: "",
  href: "",
  target: null,
  tooltip: "",
  isDisabled: false,
  isLoading: false,
  onClick: null
};
let O9IconButtonLink = _O9IconButtonLink;
export {
  O9IconButtonLink
};
//# sourceMappingURL=IconButtonLink.js.map
