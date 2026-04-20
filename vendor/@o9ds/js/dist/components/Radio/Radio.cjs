"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let _idCounter = 0;
const _O9Radio = class _O9Radio {
  constructor(element, options) {
    this._inputEl = null;
    this._fieldEl = null;
    this._controlEl = null;
    this._textEl = null;
    this._inlineAlertEl = null;
    this._inputId = "";
    this._errorId = "";
    this._element = element;
    this._options = {
      ..._O9Radio.DEFAULTS,
      ...options,
      onChange: (options == null ? void 0 : options.onChange) ?? null,
      onFocus: (options == null ? void 0 : options.onFocus) ?? null,
      onBlur: (options == null ? void 0 : options.onBlur) ?? null
    };
    this._boundHandleChange = this._handleChange.bind(this);
    this._boundHandleFocus = this._handleFocus.bind(this);
    this._boundHandleBlur = this._handleBlur.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _O9Radio(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    const uid = ++_idCounter;
    this._inputId = `o9ds-radio-${uid}`;
    this._errorId = `o9ds-radio-err-${uid}`;
    const { value, name, label, isChecked, isDisabled, isRequired, isReadOnly, isInvalid, isLoading, size, errorMsg } = this._options;
    const classes = [
      "o9ds-radio",
      `o9ds-radio--${size}`,
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      isInvalid && "has-error"
    ].filter(Boolean);
    el.className = classes.join(" ");
    if (isLoading) {
      el.setAttribute("aria-busy", "true");
    }
    this._fieldEl = document.createElement("label");
    this._fieldEl.className = "o9ds-radio__field";
    this._fieldEl.htmlFor = this._inputId;
    this._inputEl = document.createElement("input");
    this._inputEl.className = "o9ds-radio__input";
    this._inputEl.type = "radio";
    this._inputEl.id = this._inputId;
    this._inputEl.name = name;
    this._inputEl.value = value;
    this._inputEl.checked = isChecked;
    this._inputEl.disabled = isDisabled;
    this._inputEl.readOnly = isReadOnly;
    this._inputEl.required = isRequired;
    this._inputEl.tabIndex = isReadOnly ? -1 : 0;
    if (isInvalid) this._inputEl.setAttribute("aria-invalid", "true");
    if (isRequired) this._inputEl.setAttribute("aria-required", "true");
    if (isInvalid && errorMsg) this._inputEl.setAttribute("aria-describedby", this._errorId);
    this._fieldEl.appendChild(this._inputEl);
    this._controlEl = document.createElement("span");
    this._controlEl.className = "o9ds-radio__control";
    this._controlEl.setAttribute("aria-hidden", "true");
    this._fieldEl.appendChild(this._controlEl);
    if (label) {
      this._textEl = document.createElement("span");
      this._textEl.className = "o9ds-radio__text";
      this._textEl.textContent = label;
      this._fieldEl.appendChild(this._textEl);
    }
    el.appendChild(this._fieldEl);
    if (isInvalid && errorMsg) {
      this._renderInlineAlert(errorMsg);
    }
  }
  _bindEvents() {
    if (!this._inputEl) return;
    this._inputEl.addEventListener("change", this._boundHandleChange);
    this._inputEl.addEventListener("focus", this._boundHandleFocus);
    this._inputEl.addEventListener("blur", this._boundHandleBlur);
    this._inputEl.addEventListener("keydown", this._boundHandleKeydown);
  }
  _handleChange(_event) {
    var _a, _b;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    this._syncCheckedState(true);
    const { value, name } = this._options;
    this._dispatchEvent("radio:change", { value, name });
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, { value, name });
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
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    const ke = event;
    const { key } = ke;
    if (key === " ") {
      if (!this.checked()) {
        ke.preventDefault();
        this.select();
      }
      return;
    }
    const isNext = key === "ArrowDown" || key === "ArrowRight";
    const isPrev = key === "ArrowUp" || key === "ArrowLeft";
    if (!isNext && !isPrev) return;
    ke.preventDefault();
    const groupInputs = this._getGroupInputs();
    const currentIndex = groupInputs.indexOf(this._inputEl);
    if (currentIndex === -1) return;
    const total = groupInputs.length;
    let nextIndex = currentIndex;
    for (let i = 1; i < total; i++) {
      const candidate = isNext ? (currentIndex + i) % total : (currentIndex - i + total) % total;
      const candidateInput = groupInputs[candidate];
      if (!candidateInput.disabled) {
        nextIndex = candidate;
        break;
      }
    }
    if (nextIndex === currentIndex) return;
    const targetInput = groupInputs[nextIndex];
    targetInput.focus();
    targetInput.click();
  }
  _getGroupInputs() {
    const name = this._options.name;
    const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(name) : name.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
    return Array.from(
      document.querySelectorAll(`input[type="radio"][name="${escaped}"]`)
    );
  }
  _syncCheckedState(isChecked) {
    this._options.isChecked = isChecked;
    if (this._inputEl) this._inputEl.checked = isChecked;
  }
  _dispatchEvent(eventName, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, cancelable: true, detail })
    );
  }
  _renderInlineAlert(errorMsg) {
    if (!this._element) return;
    if (this._inlineAlertEl) {
      const msgEl = this._inlineAlertEl.querySelector(".o9ds-inline-alert__msg");
      if (msgEl) msgEl.textContent = errorMsg;
      return;
    }
    const alertEl = document.createElement("div");
    alertEl.className = "o9ds-inline-alert o9ds-inline-alert--error";
    alertEl.id = this._errorId;
    alertEl.setAttribute("role", "alert");
    const ico = document.createElement("span");
    ico.className = "o9ds-inline-alert__ico";
    ico.setAttribute("aria-hidden", "true");
    alertEl.appendChild(ico);
    const msg = document.createElement("span");
    msg.className = "o9ds-inline-alert__msg";
    msg.textContent = errorMsg;
    alertEl.appendChild(msg);
    this._inlineAlertEl = alertEl;
    this._element.appendChild(alertEl);
  }
  _removeInlineAlert() {
    var _a;
    (_a = this._inlineAlertEl) == null ? void 0 : _a.remove();
    this._inlineAlertEl = null;
  }
  value() {
    return this._options.value;
  }
  select() {
    var _a, _b;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    if (this.checked()) return;
    this._syncCheckedState(true);
    const { value, name } = this._options;
    this._dispatchEvent("radio:change", { value, name });
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, { value, name });
  }
  deselect() {
    this._syncCheckedState(false);
  }
  checked() {
    var _a;
    return ((_a = this._inputEl) == null ? void 0 : _a.checked) ?? this._options.isChecked;
  }
  setTabIndex(index) {
    if (this._inputEl) this._inputEl.tabIndex = index;
  }
  disabled(state) {
    var _a, _b;
    if (state === void 0) return this._options.isDisabled;
    this._options.isDisabled = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("is-disabled");
    } else {
      (_b = this._element) == null ? void 0 : _b.classList.remove("is-disabled");
    }
    if (this._inputEl) this._inputEl.disabled = state;
  }
  readonly(state) {
    var _a, _b;
    if (state === void 0) return this._options.isReadOnly;
    this._options.isReadOnly = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("is-readonly");
      if (this._inputEl) this._inputEl.tabIndex = -1;
    } else {
      (_b = this._element) == null ? void 0 : _b.classList.remove("is-readonly");
      if (this._inputEl) this._inputEl.tabIndex = 0;
    }
  }
  setLabel(label) {
    var _a, _b;
    this._options.label = label;
    if (label) {
      if (this._textEl) {
        this._textEl.textContent = label;
      } else {
        this._textEl = document.createElement("span");
        this._textEl.className = "o9ds-radio__text";
        this._textEl.textContent = label;
        (_a = this._fieldEl) == null ? void 0 : _a.appendChild(this._textEl);
      }
    } else {
      (_b = this._textEl) == null ? void 0 : _b.remove();
      this._textEl = null;
    }
  }
  setError(messageOrFalse) {
    var _a, _b;
    const hasError = messageOrFalse !== false;
    this._options.isInvalid = hasError;
    if (hasError) {
      (_a = this._element) == null ? void 0 : _a.classList.add("has-error");
      if (this._inputEl) this._inputEl.setAttribute("aria-invalid", "true");
      const errorMsg = (typeof messageOrFalse === "string" ? messageOrFalse : "") || this._options.errorMsg || "";
      if (errorMsg) {
        this._options.errorMsg = errorMsg;
        if (this._inputEl) this._inputEl.setAttribute("aria-describedby", this._errorId);
        this._renderInlineAlert(errorMsg);
      }
    } else {
      (_b = this._element) == null ? void 0 : _b.classList.remove("has-error");
      if (this._inputEl) {
        this._inputEl.removeAttribute("aria-invalid");
        this._inputEl.removeAttribute("aria-describedby");
      }
      this._removeInlineAlert();
    }
  }
  setLoading(isLoading) {
    var _a, _b, _c, _d;
    this._options.isLoading = isLoading;
    if (isLoading) {
      (_a = this._element) == null ? void 0 : _a.classList.add("loading");
      (_b = this._element) == null ? void 0 : _b.setAttribute("aria-busy", "true");
      if (this._inputEl && document.activeElement === this._inputEl) {
        this._inputEl.blur();
      }
    } else {
      (_c = this._element) == null ? void 0 : _c.classList.remove("loading");
      (_d = this._element) == null ? void 0 : _d.removeAttribute("aria-busy");
    }
  }
  destroy() {
    var _a, _b;
    const el = this._element;
    if (!el) return;
    if (this._inputEl) {
      this._inputEl.removeEventListener("change", this._boundHandleChange);
      this._inputEl.removeEventListener("focus", this._boundHandleFocus);
      this._inputEl.removeEventListener("blur", this._boundHandleBlur);
      this._inputEl.removeEventListener("keydown", this._boundHandleKeydown);
    }
    el.classList.remove(
      "o9ds-radio",
      "o9ds-radio--sm",
      "o9ds-radio--lg",
      "is-disabled",
      "is-readonly",
      "has-error",
      "loading"
    );
    el.removeAttribute("aria-busy");
    (_a = this._fieldEl) == null ? void 0 : _a.remove();
    (_b = this._inlineAlertEl) == null ? void 0 : _b.remove();
    this._element = null;
    this._inputEl = null;
    this._fieldEl = null;
    this._controlEl = null;
    this._textEl = null;
    this._inlineAlertEl = null;
  }
};
_O9Radio.DEFAULTS = {
  value: "",
  name: "",
  label: null,
  isChecked: false,
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isInvalid: false,
  isLoading: false,
  size: "lg",
  errorMsg: null,
  onChange: null,
  onFocus: null,
  onBlur: null
};
let O9Radio = _O9Radio;
exports.O9Radio = O9Radio;
//# sourceMappingURL=Radio.cjs.map
