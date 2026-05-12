"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Button = require("../Button/Button.cjs");
const ARVO_MSG_ALERT_DEFAULT_ERROR = "Form field value is invalid";
const BLOCK = "arvo-msg-alert";
const E_ICO = `${BLOCK}__ico`;
const E_MSG = `${BLOCK}__msg`;
const E_BODY = `${BLOCK}__body`;
const E_CLOSE = `${BLOCK}__close`;
const M_INLINE = `${BLOCK}--inline`;
const M_DISMISSABLE = `${BLOCK}--dismissable`;
const STATE_ICON_OVERRIDE = "has-icon-override";
const ASSERTIVE_TYPES = ["error", "warning", "block"];
const TYPE_DEFAULT_LABEL = {
  error: "Error",
  success: "Success",
  warning: "Warning",
  info: "Information",
  neutral: "Notice",
  block: "Blocked"
};
const ALL_TYPES = [
  "error",
  "success",
  "warning",
  "info",
  "neutral",
  "block"
];
function resolveRole(type) {
  return ASSERTIVE_TYPES.includes(type) ? "alert" : "status";
}
const _ArvoMessageAlert = class _ArvoMessageAlert {
  constructor(element, options = {}) {
    this._bodyEl = null;
    this._icoEl = null;
    this._msgEl = null;
    this._iconOverrideEl = null;
    this._closeBtn = null;
    this._closeEl = null;
    this._destroyed = false;
    this.el = element ?? document.createElement("div");
    this._type = options.type ?? "error";
    this._isInline = options.isInline ?? false;
    this._message = options.message ?? null;
    this._icon = options.icon ?? null;
    this._isDismissable = options.isDismissable ?? false;
    this._onDismiss = options.onDismiss ?? null;
    this._id = options.id;
    this._roleExplicit = options.role !== void 0;
    this._role = options.role ?? resolveRole(this._type);
    this._boundHandleCloseClick = this._handleCloseClick.bind(this);
    this._render();
  }
  static initialize(element, options = {}) {
    return new _ArvoMessageAlert(element, options);
  }
  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  _render() {
    const el = this.el;
    while (el.firstChild) el.removeChild(el.firstChild);
    el.classList.add(BLOCK);
    ALL_TYPES.forEach((t) => el.classList.remove(`${BLOCK}--${t}`));
    el.classList.add(`${BLOCK}--${this._type}`);
    el.classList.toggle(M_INLINE, this._isInline);
    const wantDismiss = this._isDismissable && !this._isInline;
    el.classList.toggle(M_DISMISSABLE, wantDismiss);
    el.classList.toggle(STATE_ICON_OVERRIDE, !!this._icon);
    el.setAttribute("role", this._role);
    if (this._id) {
      el.id = this._id;
    } else {
      el.removeAttribute("id");
    }
    if (this._isInline) {
      this._applyInlineAriaLabel();
    } else {
      el.removeAttribute("aria-label");
    }
    if (this._isInline) {
      this._icoEl = this._buildIconEl();
      el.appendChild(this._icoEl);
    } else {
      this._bodyEl = document.createElement("span");
      this._bodyEl.className = E_BODY;
      this._icoEl = this._buildIconEl();
      this._bodyEl.appendChild(this._icoEl);
      this._msgEl = document.createElement("span");
      this._msgEl.className = E_MSG;
      this._msgEl.textContent = this._message ?? "";
      this._bodyEl.appendChild(this._msgEl);
      el.appendChild(this._bodyEl);
      if (wantDismiss) {
        this._mountCloseBtn();
      }
    }
  }
  _buildIconEl() {
    const ico = document.createElement("span");
    ico.className = E_ICO;
    ico.setAttribute("aria-hidden", "true");
    if (this._icon) {
      this._iconOverrideEl = document.createElement("i");
      this._iconOverrideEl.className = `o9con o9con-${this._icon}`;
      ico.appendChild(this._iconOverrideEl);
    } else {
      this._iconOverrideEl = null;
    }
    return ico;
  }
  _mountCloseBtn() {
    this._closeEl = document.createElement("button");
    this._closeBtn = Button.ArvoButton.initialize(this._closeEl, {
      variant: "secondary",
      size: "sm",
      label: "Close"
    });
    this._closeEl.classList.add(E_CLOSE);
    this._closeEl.addEventListener("click", this._boundHandleCloseClick);
    this.el.appendChild(this._closeEl);
  }
  _unmountCloseBtn() {
    if (this._closeEl) {
      this._closeEl.removeEventListener("click", this._boundHandleCloseClick);
    }
    if (this._closeBtn) {
      this._closeBtn.destroy();
      this._closeBtn = null;
    }
    if (this._closeEl) {
      this._closeEl.remove();
      this._closeEl = null;
    }
  }
  _applyInlineAriaLabel() {
    const label = typeof this._message === "string" && this._message.length > 0 ? this._message : TYPE_DEFAULT_LABEL[this._type];
    this.el.setAttribute("aria-label", label);
  }
  // -------------------------------------------------------------------------
  // Event handlers
  // -------------------------------------------------------------------------
  _handleCloseClick(_event) {
    this.dismiss();
  }
  type(next) {
    if (next === void 0) return this._type;
    if (this._type === next) return;
    this._type = next;
    ALL_TYPES.forEach((t) => this.el.classList.remove(`${BLOCK}--${t}`));
    this.el.classList.add(`${BLOCK}--${next}`);
    if (!this._roleExplicit) {
      this._role = resolveRole(next);
      this.el.setAttribute("role", this._role);
    }
    if (this._isInline) {
      this._applyInlineAriaLabel();
    }
  }
  message(next) {
    if (next === void 0) return this._message ?? "";
    this._message = next;
    if (this._msgEl) {
      this._msgEl.textContent = next ?? "";
    }
    if (this._isInline) {
      this._applyInlineAriaLabel();
    }
  }
  inline(next) {
    if (next === void 0) return this._isInline;
    if (this._isInline === next) return;
    this._isInline = next;
    this._unmountCloseBtn();
    this._render();
  }
  dismissable(next) {
    if (next === void 0) return this._isDismissable;
    if (this._isDismissable === next) return;
    this._isDismissable = next;
    if (this._isInline) {
      this.el.classList.toggle(M_DISMISSABLE, false);
      return;
    }
    this.el.classList.toggle(M_DISMISSABLE, next);
    if (next) {
      if (!this._closeBtn) this._mountCloseBtn();
    } else {
      this._unmountCloseBtn();
    }
  }
  icon(next) {
    if (next === void 0) return this._icon;
    this._icon = next ?? null;
    this.el.classList.toggle(STATE_ICON_OVERRIDE, this._icon !== null);
    if (this._iconOverrideEl) {
      this._iconOverrideEl.remove();
      this._iconOverrideEl = null;
    }
    if (this._icoEl && this._icon) {
      this._iconOverrideEl = document.createElement("i");
      this._iconOverrideEl.className = `o9con o9con-${this._icon}`;
      this._icoEl.appendChild(this._iconOverrideEl);
    }
  }
  dismiss() {
    var _a;
    this.el.dispatchEvent(new CustomEvent("msg-alert:dismiss", { bubbles: true }));
    (_a = this._onDismiss) == null ? void 0 : _a.call(this);
  }
  destroy() {
    if (this._destroyed) return;
    this._destroyed = true;
    this._unmountCloseBtn();
    while (this.el.firstChild) this.el.removeChild(this.el.firstChild);
    this._bodyEl = null;
    this._icoEl = null;
    this._msgEl = null;
    this._iconOverrideEl = null;
  }
};
_ArvoMessageAlert.defaultErrorMessage = ARVO_MSG_ALERT_DEFAULT_ERROR;
let ArvoMessageAlert = _ArvoMessageAlert;
ArvoMessageAlert.defaultErrorMessage = ARVO_MSG_ALERT_DEFAULT_ERROR;
exports.ARVO_MSG_ALERT_DEFAULT_ERROR = ARVO_MSG_ALERT_DEFAULT_ERROR;
exports.ArvoMessageAlert = ArvoMessageAlert;
//# sourceMappingURL=MessageAlert.cjs.map
