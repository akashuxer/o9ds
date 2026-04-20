"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils = require("@o9ds/utils");
const core = require("@o9ds/core");
let _idCounter = 0;
const _O9Textarea = class _O9Textarea {
  constructor(element, options) {
    this._textareaEl = null;
    this._fieldEl = null;
    this._borderEl = null;
    this._labelEl = null;
    this._counterEl = null;
    this._icoEl = null;
    this._errIcoEl = null;
    this._errIcoConnector = null;
    this._inlineAlertEl = null;
    this._previousValue = "";
    this._inputId = "";
    this._errorId = "";
    this._element = element;
    const size = (options == null ? void 0 : options.size) && _O9Textarea.SIZES.includes(options.size) ? options.size : _O9Textarea.DEFAULTS.size;
    const resizable = (options == null ? void 0 : options.resizable) && _O9Textarea.RESIZABLE.includes(options.resizable) ? options.resizable : _O9Textarea.DEFAULTS.resizable;
    this._options = {
      ..._O9Textarea.DEFAULTS,
      ...options,
      size,
      resizable,
      label: (options == null ? void 0 : options.label) ?? null,
      errorMsg: (options == null ? void 0 : options.errorMsg) ?? null,
      maxLength: (options == null ? void 0 : options.maxLength) ?? null,
      icon: (options == null ? void 0 : options.icon) ?? null,
      onInput: (options == null ? void 0 : options.onInput) ?? null,
      onChange: (options == null ? void 0 : options.onChange) ?? null,
      onFocus: (options == null ? void 0 : options.onFocus) ?? null,
      onBlur: (options == null ? void 0 : options.onBlur) ?? null
    };
    this._previousValue = this._options.value;
    this._boundHandleInput = this._handleInput.bind(this);
    this._boundHandleChange = this._handleChange.bind(this);
    this._boundHandleFocus = this._handleFocus.bind(this);
    this._boundHandleBlur = this._handleBlur.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _O9Textarea(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    const uid = ++_idCounter;
    this._inputId = `o9ds-textarea-${uid}`;
    this._errorId = `o9ds-textarea-err-${uid}`;
    const {
      size,
      isFullWidth,
      label,
      isRequired,
      value,
      placeholder,
      isDisabled,
      isReadOnly,
      rows,
      maxLength,
      hasCounter,
      autoResize,
      resizable,
      isInlineError,
      isInvalid,
      errorMsg,
      isLoading,
      icon
    } = this._options;
    el.classList.add("o9ds-textarea", `o9ds-textarea--${size}`);
    el.setAttribute("role", "group");
    if (isFullWidth) el.classList.add("o9ds-textarea--full-width");
    if (autoResize) el.classList.add("o9ds-textarea--auto-resize");
    if (label) {
      this._labelEl = utils.createFormLabel({ text: label, isRequired, for: this._inputId });
      this._labelEl.classList.add("o9ds-textarea__lbl");
      el.appendChild(this._labelEl);
    }
    this._fieldEl = document.createElement("div");
    this._fieldEl.className = "o9ds-textarea__field";
    if (icon) {
      this._icoEl = document.createElement("span");
      this._icoEl.className = `o9ds-textarea__ico o9con o9con-${icon}`;
      this._icoEl.setAttribute("aria-hidden", "true");
      this._fieldEl.appendChild(this._icoEl);
    }
    this._textareaEl = document.createElement("textarea");
    this._textareaEl.className = "o9ds-textarea__input";
    this._textareaEl.id = this._inputId;
    this._textareaEl.value = value;
    this._textareaEl.rows = rows;
    if (placeholder) this._textareaEl.placeholder = placeholder;
    this._textareaEl.disabled = isDisabled;
    this._textareaEl.readOnly = isReadOnly;
    this._textareaEl.required = isRequired;
    if (maxLength !== null) this._textareaEl.maxLength = maxLength;
    this._textareaEl.style.resize = autoResize ? "none" : resizable;
    this._fieldEl.appendChild(this._textareaEl);
    if (isInlineError) {
      const tooltip = errorMsg ?? utils.getDefaultErrorMsg();
      this._errIcoEl = utils.createInlineErrorIcon({ tooltip });
      this._errIcoEl.classList.add("o9ds-textarea__err-ico");
      this._errIcoConnector = core.connectTooltip(core.tooltipManager, {
        anchor: this._errIcoEl,
        content: tooltip
      });
      this._fieldEl.appendChild(this._errIcoEl);
    }
    this._borderEl = document.createElement("div");
    this._borderEl.className = "o9ds-textarea__border";
    this._fieldEl.appendChild(this._borderEl);
    el.appendChild(this._fieldEl);
    if (hasCounter) {
      this._counterEl = utils.createCharCounter({ maxLength });
      this._counterEl.classList.add("o9ds-textarea__counter");
      utils.updateCharCounter(this._counterEl, value.length, maxLength);
      el.appendChild(this._counterEl);
    }
    if (!isInlineError) {
      const message = errorMsg ?? utils.getDefaultErrorMsg();
      this._inlineAlertEl = utils.createInlineAlert({
        type: "error",
        message,
        id: this._errorId
      });
      this._inlineAlertEl.style.display = "none";
      el.appendChild(this._inlineAlertEl);
    }
    if (isDisabled) el.classList.add("is-disabled");
    if (isReadOnly) el.classList.add("is-readonly");
    if (isInvalid) el.classList.add("has-error");
    if (isInvalid && isInlineError) el.classList.add("error-inline");
    if (isLoading) el.classList.add("loading");
    if (isInvalid) {
      this._textareaEl.setAttribute("aria-invalid", "true");
      if (!isInlineError) this._textareaEl.setAttribute("aria-describedby", this._errorId);
    }
    if (isRequired) this._textareaEl.setAttribute("aria-required", "true");
    if (isLoading) el.setAttribute("aria-busy", "true");
    if (isInvalid && !isInlineError && this._inlineAlertEl) {
      this._inlineAlertEl.style.display = "";
      if (this._counterEl) this._counterEl.style.display = "none";
    }
    if (autoResize) {
      requestAnimationFrame(() => this._recalcAutoResize());
    }
  }
  _bindEvents() {
    const textarea = this._textareaEl;
    if (!textarea) return;
    textarea.addEventListener("input", this._boundHandleInput);
    textarea.addEventListener("change", this._boundHandleChange);
    textarea.addEventListener("focus", this._boundHandleFocus);
    textarea.addEventListener("blur", this._boundHandleBlur);
  }
  _handleInput(event) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading) return;
    const value = ((_a = this._textareaEl) == null ? void 0 : _a.value) ?? "";
    if (this._counterEl) {
      utils.updateCharCounter(this._counterEl, value.length, this._options.maxLength);
    }
    if (this._options.autoResize) {
      this._recalcAutoResize();
    }
    (_c = (_b = this._options).onInput) == null ? void 0 : _c.call(_b, event);
  }
  _handleChange(event) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading) return;
    const value = ((_a = this._textareaEl) == null ? void 0 : _a.value) ?? "";
    const previousValue = this._previousValue;
    this._previousValue = value;
    this._dispatchEvent("textarea:change", { value, previousValue });
    (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, event);
  }
  _handleFocus(event) {
    var _a, _b;
    (_b = (_a = this._options).onFocus) == null ? void 0 : _b.call(_a, event);
  }
  _handleBlur(event) {
    var _a, _b;
    (_b = (_a = this._options).onBlur) == null ? void 0 : _b.call(_a, event);
  }
  _recalcAutoResize() {
    const el = this._textareaEl;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = el.scrollHeight > el.clientHeight ? "auto" : "hidden";
  }
  _dispatchEvent(name, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(name, { bubbles: true, cancelable: true, detail })
    );
  }
  value(newValue) {
    var _a;
    if (newValue === void 0) {
      return ((_a = this._textareaEl) == null ? void 0 : _a.value) ?? this._options.value;
    }
    const previousValue = this._previousValue;
    this._previousValue = newValue;
    this._options.value = newValue;
    if (this._textareaEl) {
      this._textareaEl.value = newValue;
    }
    if (this._counterEl) {
      utils.updateCharCounter(this._counterEl, newValue.length, this._options.maxLength);
    }
    if (this._options.autoResize) {
      requestAnimationFrame(() => this._recalcAutoResize());
    }
    this._dispatchEvent("textarea:change", { value: newValue, previousValue });
  }
  clear() {
    this.value("");
    if (this._options.autoResize) {
      requestAnimationFrame(() => this._recalcAutoResize());
    }
  }
  validate() {
    const value = this.value();
    const errors = [];
    if (this._options.isRequired && value.trim().length === 0) {
      errors.push("This field is required");
    }
    if (this._options.maxLength !== null && value.length > this._options.maxLength) {
      errors.push(`Value must not exceed ${this._options.maxLength} characters`);
    }
    return { valid: errors.length === 0, errors };
  }
  setError(message) {
    var _a, _b, _c;
    if (message === false) {
      this._options.isInvalid = false;
      this._options.errorMsg = null;
      (_a = this._element) == null ? void 0 : _a.classList.remove("has-error", "error-inline");
      if (this._textareaEl) {
        this._textareaEl.removeAttribute("aria-invalid");
        this._textareaEl.removeAttribute("aria-describedby");
      }
      if (this._inlineAlertEl) {
        this._inlineAlertEl.style.display = "none";
      }
      if (this._counterEl && this._options.hasCounter) {
        this._counterEl.style.display = "";
      }
      return;
    }
    const msg = message || utils.getDefaultErrorMsg();
    this._options.isInvalid = true;
    this._options.errorMsg = msg;
    (_b = this._element) == null ? void 0 : _b.classList.add("has-error");
    if (this._textareaEl) {
      this._textareaEl.setAttribute("aria-invalid", "true");
      if (!this._options.isInlineError) {
        this._textareaEl.setAttribute("aria-describedby", this._errorId);
      }
    }
    if (this._options.isInlineError && this._errIcoEl) {
      utils.updateInlineErrorIcon(this._errIcoEl, msg);
      if (this._errIcoConnector) {
        this._errIcoConnector.update({ content: msg });
      }
      (_c = this._element) == null ? void 0 : _c.classList.add("error-inline");
    }
    if (!this._options.isInlineError && this._inlineAlertEl) {
      utils.updateInlineAlert(this._inlineAlertEl, { message: msg });
      this._inlineAlertEl.style.display = "";
      if (this._counterEl) this._counterEl.style.display = "none";
    }
  }
  focus() {
    var _a;
    if (!this._options.isDisabled && !this._options.isLoading) {
      (_a = this._textareaEl) == null ? void 0 : _a.focus();
    }
  }
  disabled(state) {
    var _a, _b;
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("is-disabled");
    } else {
      (_b = this._element) == null ? void 0 : _b.classList.remove("is-disabled");
    }
    if (this._textareaEl) {
      this._textareaEl.disabled = state;
    }
  }
  icon(name) {
    if (name === void 0) {
      return this._options.icon;
    }
    this._options.icon = name;
    if (name) {
      if (this._icoEl) {
        this._icoEl.className = `o9ds-textarea__ico o9con o9con-${name}`;
      } else {
        this._icoEl = document.createElement("span");
        this._icoEl.className = `o9ds-textarea__ico o9con o9con-${name}`;
        this._icoEl.setAttribute("aria-hidden", "true");
        if (this._fieldEl) {
          this._fieldEl.insertBefore(this._icoEl, this._fieldEl.firstChild);
        }
      }
    } else if (this._icoEl) {
      this._icoEl.remove();
      this._icoEl = null;
    }
  }
  setLoading(isLoading) {
    var _a, _b, _c, _d, _e;
    const wasFocused = document.activeElement === this._textareaEl;
    this._options.isLoading = isLoading;
    if (isLoading) {
      (_a = this._element) == null ? void 0 : _a.classList.add("loading");
      (_b = this._element) == null ? void 0 : _b.setAttribute("aria-busy", "true");
      if (wasFocused) {
        (_c = this._textareaEl) == null ? void 0 : _c.blur();
      }
    } else {
      (_d = this._element) == null ? void 0 : _d.classList.remove("loading");
      (_e = this._element) == null ? void 0 : _e.removeAttribute("aria-busy");
    }
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const el = this._element;
    if (!el) return;
    if (this._textareaEl) {
      this._textareaEl.removeEventListener("input", this._boundHandleInput);
      this._textareaEl.removeEventListener("change", this._boundHandleChange);
      this._textareaEl.removeEventListener("focus", this._boundHandleFocus);
      this._textareaEl.removeEventListener("blur", this._boundHandleBlur);
    }
    el.classList.remove(
      "o9ds-textarea",
      "o9ds-textarea--full-width",
      "o9ds-textarea--auto-resize",
      "is-disabled",
      "is-readonly",
      "has-error",
      "error-inline",
      "loading"
    );
    _O9Textarea.SIZES.forEach((s) => el.classList.remove(`o9ds-textarea--${s}`));
    el.removeAttribute("aria-busy");
    el.removeAttribute("role");
    (_a = this._labelEl) == null ? void 0 : _a.remove();
    (_b = this._counterEl) == null ? void 0 : _b.remove();
    (_c = this._inlineAlertEl) == null ? void 0 : _c.remove();
    (_d = this._errIcoEl) == null ? void 0 : _d.remove();
    (_e = this._icoEl) == null ? void 0 : _e.remove();
    (_f = this._fieldEl) == null ? void 0 : _f.remove();
    (_g = this._borderEl) == null ? void 0 : _g.remove();
    this._element = null;
    this._textareaEl = null;
    this._fieldEl = null;
    this._borderEl = null;
    this._labelEl = null;
    this._counterEl = null;
    this._icoEl = null;
    (_h = this._errIcoConnector) == null ? void 0 : _h.destroy();
    this._errIcoConnector = null;
    this._errIcoEl = null;
    this._inlineAlertEl = null;
  }
};
_O9Textarea.SIZES = ["sm", "lg"];
_O9Textarea.RESIZABLE = ["none", "vertical", "both"];
_O9Textarea.DEFAULTS = {
  value: "",
  placeholder: "",
  isDisabled: false,
  isReadOnly: false,
  label: null,
  isRequired: false,
  isInvalid: false,
  size: "sm",
  rows: 3,
  icon: null,
  maxLength: null,
  hasCounter: false,
  autoResize: false,
  resizable: "none",
  errorMsg: null,
  isInlineError: false,
  isLoading: false,
  isFullWidth: false,
  onInput: null,
  onChange: null,
  onFocus: null,
  onBlur: null
};
let O9Textarea = _O9Textarea;
exports.O9Textarea = O9Textarea;
//# sourceMappingURL=Textarea.cjs.map
