import { createFormLabel, getDefaultErrorMsg, createErrorTooltipIcon, createCharCounter, updateCharCounter, createInlineAlert, updateErrorTooltipIcon, updateInlineAlert } from "@arvo/utils";
import { connectTooltip, tooltipManager } from "@arvo/core";
import { ArvoIconButton } from "../IconButton/IconButton.js";
let _idCounter = 0;
const _ArvoTextbox = class _ArvoTextbox {
  constructor(element, options) {
    this._inputEl = null;
    this._fieldEl = null;
    this._actionsEl = null;
    this._borderEl = null;
    this._labelEl = null;
    this._counterEl = null;
    this._clearEl = null;
    this._clearBtn = null;
    this._errIcoEl = null;
    this._errIcoConnector = null;
    this._inlineAlertEl = null;
    this._leadingIconEl = null;
    this._resizeObserver = null;
    this._previousValue = "";
    this._inputId = "";
    this._errorId = "";
    this._element = element;
    const size = (options == null ? void 0 : options.size) && _ArvoTextbox.SIZES.includes(options.size) ? options.size : _ArvoTextbox.DEFAULTS.size;
    const type = (options == null ? void 0 : options.type) && _ArvoTextbox.TYPES.includes(options.type) ? options.type : _ArvoTextbox.DEFAULTS.type;
    this._options = {
      ..._ArvoTextbox.DEFAULTS,
      ...options,
      size,
      type,
      label: (options == null ? void 0 : options.label) ?? null,
      errorMsg: (options == null ? void 0 : options.errorMsg) ?? null,
      leadingIcon: (options == null ? void 0 : options.leadingIcon) ?? null,
      maxLength: (options == null ? void 0 : options.maxLength) ?? null,
      width: (options == null ? void 0 : options.width) ?? null,
      onInput: (options == null ? void 0 : options.onInput) ?? null,
      onChange: (options == null ? void 0 : options.onChange) ?? null,
      onFocus: (options == null ? void 0 : options.onFocus) ?? null,
      onBlur: (options == null ? void 0 : options.onBlur) ?? null,
      onKeyDown: (options == null ? void 0 : options.onKeyDown) ?? null
    };
    this._previousValue = this._options.value;
    this._boundHandleInput = this._handleInput.bind(this);
    this._boundHandleChange = this._handleChange.bind(this);
    this._boundHandleFocus = this._handleFocus.bind(this);
    this._boundHandleBlur = this._handleBlur.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._boundHandleClearClick = this._handleClear.bind(this);
    this._boundHandleLeadingIconClick = this._handleLeadingIconClick.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _ArvoTextbox(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    const uid = ++_idCounter;
    this._inputId = `arvo-textbox-${uid}`;
    this._errorId = `arvo-textbox-err-${uid}`;
    const {
      size,
      isFullWidth,
      width,
      label,
      isRequired,
      leadingIcon,
      type,
      value,
      placeholder,
      isDisabled,
      isReadOnly,
      maxLength,
      isClearable,
      errorDisplay,
      hasCounter,
      isInvalid,
      errorMsg,
      isLoading
    } = this._options;
    const useTooltipError = errorDisplay === "tooltip";
    const useInlineAlert = errorDisplay === "inline";
    el.classList.add("arvo-textbox", `arvo-textbox--${size}`);
    el.setAttribute("role", "group");
    if (isFullWidth) el.classList.add("arvo-textbox--full-width");
    const effectiveWidth = isFullWidth ? "100%" : width;
    if (effectiveWidth) {
      el.style.setProperty("--arvo-form-input-width", effectiveWidth);
    }
    if (label) {
      this._labelEl = createFormLabel({ text: label, isRequired, for: this._inputId });
      this._labelEl.classList.add("arvo-textbox__lbl");
      el.appendChild(this._labelEl);
    }
    this._fieldEl = document.createElement("div");
    this._fieldEl.className = "arvo-textbox__field";
    if (leadingIcon) {
      this._leadingIconEl = document.createElement("i");
      this._leadingIconEl.className = `arvo-textbox__leading-icon o9con o9con-${leadingIcon}`;
      this._leadingIconEl.setAttribute("aria-hidden", "true");
      this._fieldEl.appendChild(this._leadingIconEl);
    }
    this._inputEl = document.createElement("input");
    this._inputEl.className = "arvo-textbox__input";
    this._inputEl.id = this._inputId;
    this._inputEl.type = type;
    this._inputEl.value = value;
    if (placeholder) this._inputEl.placeholder = placeholder;
    this._inputEl.disabled = isDisabled;
    this._inputEl.readOnly = isReadOnly;
    this._inputEl.required = isRequired;
    if (maxLength !== null) this._inputEl.maxLength = maxLength;
    this._fieldEl.appendChild(this._inputEl);
    this._actionsEl = document.createElement("div");
    this._actionsEl.className = "arvo-textbox__actions";
    if (isClearable) {
      this._clearEl = document.createElement("button");
      this._clearBtn = ArvoIconButton.initialize(this._clearEl, {
        size: "sm",
        variant: "tertiary",
        icon: "close",
        tooltip: "Clear",
        isDisabled: isDisabled || isLoading
      });
      this._clearEl.setAttribute("aria-label", "Clear");
      this._clearEl.tabIndex = -1;
      this._clearEl.classList.add("arvo-textbox__clear");
      this._actionsEl.appendChild(this._clearEl);
    }
    if (useTooltipError) {
      const tooltip = errorMsg ?? getDefaultErrorMsg();
      this._errIcoEl = createErrorTooltipIcon({ tooltip });
      this._errIcoEl.classList.add("arvo-textbox__err-ico");
      this._errIcoConnector = connectTooltip(tooltipManager, {
        anchor: this._errIcoEl,
        content: tooltip
      });
      this._actionsEl.appendChild(this._errIcoEl);
    }
    this._fieldEl.appendChild(this._actionsEl);
    this._borderEl = document.createElement("div");
    this._borderEl.className = "arvo-textbox__border";
    this._fieldEl.appendChild(this._borderEl);
    el.appendChild(this._fieldEl);
    this._resizeObserver = new ResizeObserver(() => {
      this._updatePadding();
    });
    this._resizeObserver.observe(this._actionsEl);
    this._updatePadding();
    if (hasCounter) {
      this._counterEl = createCharCounter({ maxLength });
      this._counterEl.classList.add("arvo-textbox__counter");
      updateCharCounter(this._counterEl, value.length, maxLength);
      el.appendChild(this._counterEl);
    }
    if (useInlineAlert) {
      const message = errorMsg ?? getDefaultErrorMsg();
      this._inlineAlertEl = createInlineAlert({
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
    if (isInvalid && useTooltipError) el.classList.add("error-tooltip");
    if (isLoading) el.classList.add("loading");
    if (value.length > 0) el.classList.add("has-value");
    if (isInvalid) {
      this._inputEl.setAttribute("aria-invalid", "true");
      if (useInlineAlert) this._inputEl.setAttribute("aria-describedby", this._errorId);
    }
    if (isRequired) this._inputEl.setAttribute("aria-required", "true");
    if (isLoading) el.setAttribute("aria-busy", "true");
    if (isInvalid && useInlineAlert && this._inlineAlertEl) {
      this._inlineAlertEl.style.display = "";
      if (this._counterEl) this._counterEl.style.display = "none";
    }
  }
  _updatePadding() {
    if (!this._actionsEl || !this._fieldEl) return;
    const w = this._actionsEl.offsetWidth;
    const pad = w > 0 ? w + 4 : 0;
    this._fieldEl.style.setProperty("--arvo-textbox-pad-r", `${pad}px`);
  }
  _bindEvents() {
    const input = this._inputEl;
    if (!input) return;
    input.addEventListener("input", this._boundHandleInput);
    input.addEventListener("change", this._boundHandleChange);
    input.addEventListener("focus", this._boundHandleFocus);
    input.addEventListener("blur", this._boundHandleBlur);
    input.addEventListener("keydown", this._boundHandleKeydown);
    if (this._clearEl) {
      this._clearEl.addEventListener("click", this._boundHandleClearClick);
    }
    if (this._leadingIconEl) {
      this._leadingIconEl.addEventListener("click", this._boundHandleLeadingIconClick);
    }
  }
  _handleInput(event) {
    var _a, _b, _c, _d;
    if (this._options.isDisabled || this._options.isLoading) return;
    const value = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
    (_b = this._element) == null ? void 0 : _b.classList.toggle("has-value", value.length > 0);
    if (this._counterEl) {
      updateCharCounter(this._counterEl, value.length, this._options.maxLength);
    }
    (_d = (_c = this._options).onInput) == null ? void 0 : _d.call(_c, event);
  }
  _handleChange(event) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading) return;
    const value = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
    const previousValue = this._previousValue;
    this._previousValue = value;
    this._dispatchEvent("textbox:change", { value, previousValue });
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
  _handleKeydown(event) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (event.key === "Escape" && this._options.isClearable) {
      const value = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
      if (value.length > 0) {
        this.clear();
        return;
      }
    }
    (_c = (_b = this._options).onKeyDown) == null ? void 0 : _c.call(_b, event);
  }
  _handleClear() {
    var _a;
    this.clear();
    (_a = this._inputEl) == null ? void 0 : _a.focus();
  }
  _handleLeadingIconClick() {
    var _a;
    (_a = this._inputEl) == null ? void 0 : _a.focus();
  }
  _dispatchEvent(name, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(name, { bubbles: true, cancelable: true, detail })
    );
  }
  value(newValue) {
    var _a, _b;
    if (newValue === void 0) {
      return ((_a = this._inputEl) == null ? void 0 : _a.value) ?? this._options.value;
    }
    const previousValue = this._previousValue;
    this._previousValue = newValue;
    this._options.value = newValue;
    if (this._inputEl) {
      this._inputEl.value = newValue;
    }
    (_b = this._element) == null ? void 0 : _b.classList.toggle("has-value", newValue.length > 0);
    if (this._counterEl) {
      updateCharCounter(this._counterEl, newValue.length, this._options.maxLength);
    }
    this._dispatchEvent("textbox:change", { value: newValue, previousValue });
  }
  clear() {
    this._dispatchEvent("textbox:clear", {});
    this.value("");
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
    const type = this._options.type;
    if (value.length > 0) {
      if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.push("Enter a valid email address");
      } else if (type === "url" && !/^https?:\/\/.+/.test(value)) {
        errors.push("Enter a valid URL");
      } else if (type === "tel" && !/^[+\d\s\-().]+$/.test(value)) {
        errors.push("Enter a valid phone number");
      }
    }
    return { valid: errors.length === 0, errors };
  }
  setError(message) {
    var _a, _b, _c;
    const useTooltipError = this._options.errorDisplay === "tooltip";
    const useInlineAlert = this._options.errorDisplay === "inline";
    if (message === false) {
      this._options.isInvalid = false;
      this._options.errorMsg = null;
      (_a = this._element) == null ? void 0 : _a.classList.remove("has-error", "error-tooltip");
      if (this._inputEl) {
        this._inputEl.removeAttribute("aria-invalid");
        this._inputEl.removeAttribute("aria-describedby");
      }
      if (this._inlineAlertEl) {
        this._inlineAlertEl.style.display = "none";
      }
      if (this._counterEl && this._options.hasCounter) {
        this._counterEl.style.display = "";
      }
      return;
    }
    const msg = message || getDefaultErrorMsg();
    this._options.isInvalid = true;
    this._options.errorMsg = msg;
    (_b = this._element) == null ? void 0 : _b.classList.add("has-error");
    if (this._inputEl) {
      this._inputEl.setAttribute("aria-invalid", "true");
      if (useInlineAlert) {
        this._inputEl.setAttribute("aria-describedby", this._errorId);
      }
    }
    if (useTooltipError && this._errIcoEl) {
      updateErrorTooltipIcon(this._errIcoEl, msg);
      if (this._errIcoConnector) {
        this._errIcoConnector.update({ content: msg });
      }
      (_c = this._element) == null ? void 0 : _c.classList.add("error-tooltip");
    }
    if (useInlineAlert && this._inlineAlertEl) {
      updateInlineAlert(this._inlineAlertEl, { message: msg });
      this._inlineAlertEl.style.display = "";
      if (this._counterEl) this._counterEl.style.display = "none";
    }
  }
  focus() {
    var _a;
    if (!this._options.isDisabled && !this._options.isLoading) {
      (_a = this._inputEl) == null ? void 0 : _a.focus();
    }
  }
  width(value) {
    var _a;
    if (value === void 0) {
      return this._options.width;
    }
    this._options.width = value;
    (_a = this._element) == null ? void 0 : _a.style.setProperty("--arvo-form-input-width", value);
  }
  disabled(state) {
    var _a, _b, _c, _d;
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("is-disabled");
      if (this._inputEl) this._inputEl.disabled = true;
      (_b = this._clearBtn) == null ? void 0 : _b.disabled(true);
    } else {
      (_c = this._element) == null ? void 0 : _c.classList.remove("is-disabled");
      if (this._inputEl) this._inputEl.disabled = false;
      (_d = this._clearBtn) == null ? void 0 : _d.disabled(false);
    }
  }
  setLoading(isLoading) {
    var _a, _b, _c, _d, _e, _f, _g;
    const wasFocused = document.activeElement === this._inputEl;
    this._options.isLoading = isLoading;
    if (isLoading) {
      (_a = this._element) == null ? void 0 : _a.classList.add("loading");
      (_b = this._element) == null ? void 0 : _b.setAttribute("aria-busy", "true");
      (_c = this._clearBtn) == null ? void 0 : _c.disabled(true);
      if (wasFocused) {
        (_d = this._inputEl) == null ? void 0 : _d.blur();
      }
    } else {
      (_e = this._element) == null ? void 0 : _e.classList.remove("loading");
      (_f = this._element) == null ? void 0 : _f.removeAttribute("aria-busy");
      if (!this._options.isDisabled) {
        (_g = this._clearBtn) == null ? void 0 : _g.disabled(false);
      }
    }
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const el = this._element;
    if (!el) return;
    (_a = this._resizeObserver) == null ? void 0 : _a.disconnect();
    this._resizeObserver = null;
    if (this._inputEl) {
      this._inputEl.removeEventListener("input", this._boundHandleInput);
      this._inputEl.removeEventListener("change", this._boundHandleChange);
      this._inputEl.removeEventListener("focus", this._boundHandleFocus);
      this._inputEl.removeEventListener("blur", this._boundHandleBlur);
      this._inputEl.removeEventListener("keydown", this._boundHandleKeydown);
    }
    (_b = this._clearBtn) == null ? void 0 : _b.destroy();
    if (this._clearEl) {
      this._clearEl.removeEventListener("click", this._boundHandleClearClick);
    }
    if (this._leadingIconEl) {
      this._leadingIconEl.removeEventListener("click", this._boundHandleLeadingIconClick);
    }
    el.classList.remove(
      "arvo-textbox",
      "arvo-textbox--full-width",
      "is-disabled",
      "is-readonly",
      "has-error",
      "error-tooltip",
      "loading",
      "has-value"
    );
    _ArvoTextbox.SIZES.forEach((s) => el.classList.remove(`arvo-textbox--${s}`));
    el.removeAttribute("aria-busy");
    el.removeAttribute("role");
    el.style.removeProperty("--arvo-form-input-width");
    (_c = this._labelEl) == null ? void 0 : _c.remove();
    (_d = this._counterEl) == null ? void 0 : _d.remove();
    (_e = this._inlineAlertEl) == null ? void 0 : _e.remove();
    (_f = this._actionsEl) == null ? void 0 : _f.remove();
    (_g = this._fieldEl) == null ? void 0 : _g.remove();
    this._element = null;
    this._inputEl = null;
    this._fieldEl = null;
    this._actionsEl = null;
    this._borderEl = null;
    this._labelEl = null;
    this._counterEl = null;
    this._clearEl = null;
    this._clearBtn = null;
    (_h = this._errIcoConnector) == null ? void 0 : _h.destroy();
    this._errIcoConnector = null;
    this._errIcoEl = null;
    this._inlineAlertEl = null;
    this._leadingIconEl = null;
  }
};
_ArvoTextbox.SIZES = ["sm", "lg"];
_ArvoTextbox.TYPES = ["text", "email", "tel", "url"];
_ArvoTextbox.DEFAULTS = {
  value: "",
  placeholder: "",
  isDisabled: false,
  isReadOnly: false,
  label: null,
  isRequired: false,
  isInvalid: false,
  size: "lg",
  type: "text",
  maxLength: null,
  hasCounter: false,
  errorMsg: null,
  errorDisplay: "inline",
  isClearable: false,
  isLoading: false,
  isFullWidth: false,
  width: null,
  leadingIcon: null,
  onInput: null,
  onChange: null,
  onFocus: null,
  onBlur: null,
  onKeyDown: null
};
let ArvoTextbox = _ArvoTextbox;
export {
  ArvoTextbox
};
//# sourceMappingURL=Textbox.js.map
