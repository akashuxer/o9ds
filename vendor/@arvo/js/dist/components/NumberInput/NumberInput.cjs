"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils = require("@arvo/utils");
const core = require("@arvo/core");
const IconButton = require("../IconButton/IconButton.cjs");
let _idCounter = 0;
function getStepPrecision(step) {
  const str = String(step);
  const dotIndex = str.indexOf(".");
  return dotIndex === -1 ? 0 : str.length - dotIndex - 1;
}
const _ArvoNumberInput = class _ArvoNumberInput {
  constructor(element, options) {
    this._inputEl = null;
    this._fieldEl = null;
    this._borderEl = null;
    this._labelEl = null;
    this._steppersEl = null;
    this._incrementBtn = null;
    this._decrementBtn = null;
    this._incrementBtnInstance = null;
    this._decrementBtnInstance = null;
    this._actionsEl = null;
    this._errIcoEl = null;
    this._errIcoConnector = null;
    this._inlineAlertEl = null;
    this._resizeObserver = null;
    this._previousValue = null;
    this._inputId = "";
    this._errorId = "";
    this._repeatInterval = null;
    this._repeatTimeout = null;
    this._repeatAccelTimeout = null;
    this._element = element;
    const size = (options == null ? void 0 : options.size) && _ArvoNumberInput.SIZES.includes(options.size) ? options.size : _ArvoNumberInput.DEFAULTS.size;
    this._options = {
      ..._ArvoNumberInput.DEFAULTS,
      ...options,
      size,
      value: (options == null ? void 0 : options.value) ?? null,
      min: (options == null ? void 0 : options.min) ?? null,
      max: (options == null ? void 0 : options.max) ?? null,
      label: (options == null ? void 0 : options.label) ?? null,
      errorMsg: (options == null ? void 0 : options.errorMsg) ?? null,
      width: (options == null ? void 0 : options.width) ?? null,
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
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
    this._boundHandlePaste = this._handlePaste.bind(this);
    this._boundHandleIncrementMouseDown = this._handleIncrementMouseDown.bind(this);
    this._boundHandleDecrementMouseDown = this._handleDecrementMouseDown.bind(this);
    this._boundHandleMouseUp = this._clearRepeat.bind(this);
    this._boundHandleMouseLeave = this._clearRepeat.bind(this);
    this._boundHandleIncrementTouchStart = this._handleIncrementTouchStart.bind(this);
    this._boundHandleDecrementTouchStart = this._handleDecrementTouchStart.bind(this);
    this._boundHandleTouchEnd = this._clearRepeat.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _ArvoNumberInput(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    const uid = ++_idCounter;
    this._inputId = `arvo-number-input-${uid}`;
    this._errorId = `arvo-number-input-err-${uid}`;
    const {
      size,
      isFullWidth,
      width,
      label,
      isRequired,
      value,
      placeholder,
      isDisabled,
      isReadOnly,
      errorDisplay,
      isInvalid,
      errorMsg,
      isLoading,
      min,
      max,
      step
    } = this._options;
    const useTooltipError = errorDisplay === "tooltip";
    const useInlineAlert = errorDisplay === "inline";
    el.classList.add("arvo-number-input", `arvo-number-input--${size}`);
    el.setAttribute("role", "group");
    if (isFullWidth) el.classList.add("arvo-number-input--full-width");
    const effectiveWidth = isFullWidth ? "100%" : width;
    if (effectiveWidth) {
      el.style.setProperty("--arvo-form-input-width", effectiveWidth);
    }
    if (label) {
      this._labelEl = utils.createFormLabel({ text: label, isRequired, for: this._inputId });
      this._labelEl.classList.add("arvo-number-input__lbl");
      el.appendChild(this._labelEl);
    }
    this._fieldEl = document.createElement("div");
    this._fieldEl.className = "arvo-number-input__field";
    this._inputEl = document.createElement("input");
    this._inputEl.type = "number";
    this._inputEl.className = "arvo-number-input__input";
    this._inputEl.id = this._inputId;
    this._inputEl.setAttribute("role", "spinbutton");
    if (placeholder) this._inputEl.placeholder = placeholder;
    this._inputEl.disabled = isDisabled;
    this._inputEl.readOnly = isReadOnly;
    this._inputEl.required = isRequired;
    if (min !== null) {
      this._inputEl.min = String(min);
      this._inputEl.setAttribute("aria-valuemin", String(min));
    }
    if (max !== null) {
      this._inputEl.max = String(max);
      this._inputEl.setAttribute("aria-valuemax", String(max));
    }
    this._inputEl.step = String(step);
    if (value !== null) {
      const precision = getStepPrecision(step);
      this._inputEl.value = value.toFixed(precision);
      this._inputEl.setAttribute("aria-valuenow", String(value));
    } else {
      this._inputEl.value = "";
      this._inputEl.removeAttribute("aria-valuenow");
    }
    if (isRequired) this._inputEl.setAttribute("aria-required", "true");
    if (isInvalid) this._inputEl.setAttribute("aria-invalid", "true");
    this._fieldEl.appendChild(this._inputEl);
    this._actionsEl = document.createElement("div");
    this._actionsEl.className = "arvo-number-input__actions";
    if (useTooltipError && isInvalid) {
      const tooltip = errorMsg ?? utils.getDefaultErrorMsg();
      this._errIcoEl = utils.createErrorTooltipIcon({ tooltip });
      this._errIcoEl.classList.add("arvo-number-input__err-ico");
      this._errIcoConnector = core.connectTooltip(core.tooltipManager, {
        anchor: this._errIcoEl,
        content: tooltip
      });
      this._actionsEl.appendChild(this._errIcoEl);
    }
    this._fieldEl.appendChild(this._actionsEl);
    if (!isReadOnly) {
      this._steppersEl = document.createElement("div");
      this._steppersEl.className = "arvo-number-input__steppers";
      this._incrementBtn = document.createElement("button");
      this._incrementBtnInstance = IconButton.ArvoIconButton.initialize(this._incrementBtn, {
        size: "sm",
        variant: "tertiary",
        icon: "angle-up",
        isDisabled: isDisabled || isLoading
      });
      this._incrementBtn.setAttribute("aria-label", "Increment");
      this._incrementBtn.tabIndex = -1;
      this._incrementBtn.classList.add("arvo-number-input__increment-btn");
      this._decrementBtn = document.createElement("button");
      this._decrementBtnInstance = IconButton.ArvoIconButton.initialize(this._decrementBtn, {
        size: "sm",
        variant: "tertiary",
        icon: "angle-down",
        isDisabled: isDisabled || isLoading
      });
      this._decrementBtn.setAttribute("aria-label", "Decrement");
      this._decrementBtn.tabIndex = -1;
      this._decrementBtn.classList.add("arvo-number-input__decrement-btn");
      this._steppersEl.appendChild(this._incrementBtn);
      this._steppersEl.appendChild(this._decrementBtn);
      this._fieldEl.appendChild(this._steppersEl);
    }
    this._borderEl = document.createElement("div");
    this._borderEl.className = "arvo-number-input__border";
    this._fieldEl.appendChild(this._borderEl);
    el.appendChild(this._fieldEl);
    this._resizeObserver = new ResizeObserver(() => {
      this._updatePadding();
    });
    this._resizeObserver.observe(this._actionsEl);
    this._updatePadding();
    if (useInlineAlert) {
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
    if (isInvalid && useTooltipError) el.classList.add("error-tooltip");
    if (isLoading) el.classList.add("loading");
    if (isLoading) el.setAttribute("aria-busy", "true");
    if (isInvalid && useInlineAlert) {
      this._inputEl.setAttribute("aria-describedby", this._errorId);
    }
    if (isInvalid && useInlineAlert && this._inlineAlertEl) {
      this._inlineAlertEl.style.display = "";
    }
    this._updateMinMaxClasses(value);
  }
  _bindEvents() {
    const input = this._inputEl;
    if (!input) return;
    input.addEventListener("input", this._boundHandleInput);
    input.addEventListener("change", this._boundHandleChange);
    input.addEventListener("focus", this._boundHandleFocus);
    input.addEventListener("blur", this._boundHandleBlur);
    input.addEventListener("keydown", this._boundHandleKeyDown);
    input.addEventListener("paste", this._boundHandlePaste);
    if (this._incrementBtn) {
      this._incrementBtn.addEventListener("mousedown", this._boundHandleIncrementMouseDown);
      this._incrementBtn.addEventListener("mouseup", this._boundHandleMouseUp);
      this._incrementBtn.addEventListener("mouseleave", this._boundHandleMouseLeave);
      this._incrementBtn.addEventListener("touchstart", this._boundHandleIncrementTouchStart);
      this._incrementBtn.addEventListener("touchend", this._boundHandleTouchEnd);
    }
    if (this._decrementBtn) {
      this._decrementBtn.addEventListener("mousedown", this._boundHandleDecrementMouseDown);
      this._decrementBtn.addEventListener("mouseup", this._boundHandleMouseUp);
      this._decrementBtn.addEventListener("mouseleave", this._boundHandleMouseLeave);
      this._decrementBtn.addEventListener("touchstart", this._boundHandleDecrementTouchStart);
      this._decrementBtn.addEventListener("touchend", this._boundHandleTouchEnd);
    }
  }
  _handleInput(event) {
    var _a, _b, _c, _d, _e;
    if (this._options.isDisabled || this._options.isLoading) return;
    const raw = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
    const parsed = raw === "" ? null : parseFloat(raw);
    this._updateMinMaxClasses(parsed);
    if (parsed !== null) {
      (_b = this._inputEl) == null ? void 0 : _b.setAttribute("aria-valuenow", String(parsed));
    } else {
      (_c = this._inputEl) == null ? void 0 : _c.removeAttribute("aria-valuenow");
    }
    (_e = (_d = this._options).onInput) == null ? void 0 : _e.call(_d, event);
  }
  _handleChange(event) {
    var _a, _b;
    if (this._options.isDisabled || this._options.isLoading) return;
    const previousValue = this._previousValue;
    const newValue = this.value();
    this._previousValue = newValue;
    this._options.value = newValue;
    this._dispatchEvent("number-input:change", { value: newValue, previousValue });
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, event);
  }
  _handleFocus(event) {
    var _a, _b;
    (_b = (_a = this._options).onFocus) == null ? void 0 : _b.call(_a, event);
  }
  _handleBlur(event) {
    var _a, _b, _c, _d, _e;
    if (!this._options.isDisabled && !this._options.isLoading && !this._options.isReadOnly) {
      const raw = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
      if (raw !== "") {
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) {
          const clamped = this._clamp(parsed);
          const precision = getStepPrecision(this._options.step);
          const formatted = parseFloat(clamped.toFixed(precision));
          if (formatted !== parsed || raw !== clamped.toFixed(precision)) {
            const previousValue = this._previousValue;
            this._previousValue = formatted;
            this._options.value = formatted;
            if (this._inputEl) {
              this._inputEl.value = clamped.toFixed(precision);
              this._inputEl.setAttribute("aria-valuenow", String(formatted));
            }
            this._updateMinMaxClasses(formatted);
            this._dispatchEvent("number-input:change", { value: formatted, previousValue });
            (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, new Event("change", { bubbles: true }));
          }
        }
      }
    }
    (_e = (_d = this._options).onBlur) == null ? void 0 : _e.call(_d, event);
  }
  _handlePaste(event) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    const text = ((_a = event.clipboardData) == null ? void 0 : _a.getData("text/plain")) ?? "";
    const parsed = parseFloat(text);
    if (isNaN(parsed)) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const clamped = this._clamp(parsed);
    const precision = getStepPrecision(this._options.step);
    const formatted = parseFloat(clamped.toFixed(precision));
    const previousValue = this._previousValue;
    this._previousValue = formatted;
    this._options.value = formatted;
    if (this._inputEl) {
      this._inputEl.value = clamped.toFixed(precision);
      this._inputEl.setAttribute("aria-valuenow", String(formatted));
    }
    this._updateMinMaxClasses(formatted);
    this._dispatchEvent("number-input:change", { value: formatted, previousValue });
    (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, new Event("change", { bubbles: true }));
  }
  _handleKeyDown(event) {
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    const { min, max, step } = this._options;
    let handled = false;
    switch (event.key) {
      case "ArrowUp": {
        const multiplier = event.shiftKey ? 10 : 1;
        this._stepBy(step * multiplier);
        handled = true;
        break;
      }
      case "ArrowDown": {
        const multiplier = event.shiftKey ? 10 : 1;
        this._stepBy(-step * multiplier);
        handled = true;
        break;
      }
      case "Home":
        if (min !== null) {
          this._setValueAndNotify(min);
          handled = true;
        }
        break;
      case "End":
        if (max !== null) {
          this._setValueAndNotify(max);
          handled = true;
        }
        break;
    }
    if (handled) {
      event.preventDefault();
    }
  }
  _handleIncrementMouseDown(event) {
    if (event.button !== 0) return;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    event.preventDefault();
    this._startLongPress(true);
  }
  _handleDecrementMouseDown(event) {
    if (event.button !== 0) return;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    event.preventDefault();
    this._startLongPress(false);
  }
  _handleIncrementTouchStart(event) {
    event.preventDefault();
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    this._startLongPress(true);
  }
  _handleDecrementTouchStart(event) {
    event.preventDefault();
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    this._startLongPress(false);
  }
  _startLongPress(increment) {
    var _a;
    const step = increment ? this._options.step : -this._options.step;
    this._stepBy(step);
    (_a = this._inputEl) == null ? void 0 : _a.focus();
    let intervalMs = 200;
    const startRepeat = () => {
      this._repeatInterval = setInterval(() => {
        this._stepBy(step);
      }, intervalMs);
      this._repeatAccelTimeout = setTimeout(() => {
        if (this._repeatInterval !== null) {
          clearInterval(this._repeatInterval);
        }
        intervalMs = 50;
        this._repeatInterval = setInterval(() => {
          this._stepBy(step);
        }, intervalMs);
      }, 1e3);
    };
    this._repeatTimeout = setTimeout(startRepeat, 400);
  }
  _clearRepeat() {
    if (this._repeatTimeout !== null) {
      clearTimeout(this._repeatTimeout);
      this._repeatTimeout = null;
    }
    if (this._repeatAccelTimeout !== null) {
      clearTimeout(this._repeatAccelTimeout);
      this._repeatAccelTimeout = null;
    }
    if (this._repeatInterval !== null) {
      clearInterval(this._repeatInterval);
      this._repeatInterval = null;
    }
  }
  _stepBy(delta) {
    const { min, max } = this._options;
    const current = this.value();
    let next;
    if (current === null) {
      next = delta > 0 ? min ?? 0 : max ?? 0;
    } else {
      next = current + delta;
    }
    if (min !== null) next = Math.max(next, min);
    if (max !== null) next = Math.min(next, max);
    this._setValueAndNotify(next);
  }
  _setValueAndNotify(newValue) {
    var _a, _b;
    const previousValue = this._previousValue;
    const precision = getStepPrecision(this._options.step);
    const clamped = this._clamp(newValue);
    const formatted = parseFloat(clamped.toFixed(precision));
    this._previousValue = formatted;
    this._options.value = formatted;
    if (this._inputEl) {
      this._inputEl.value = clamped.toFixed(precision);
      this._inputEl.setAttribute("aria-valuenow", String(formatted));
    }
    this._updateMinMaxClasses(formatted);
    this._dispatchEvent("number-input:change", { value: formatted, previousValue });
    if (this._inputEl) {
      const changeEvent = new Event("change", { bubbles: true });
      (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, changeEvent);
    }
  }
  _clamp(value) {
    const { min, max } = this._options;
    let v = value;
    if (min !== null) v = Math.max(v, min);
    if (max !== null) v = Math.min(v, max);
    return v;
  }
  _updatePadding() {
    var _a;
    if (!this._actionsEl || !this._fieldEl) return;
    const w = this._actionsEl.offsetWidth;
    const pad = w > 0 ? w + 4 : 0;
    this._fieldEl.style.setProperty("--arvo-number-input-pad-r", `${pad}px`);
    const steppersWidth = ((_a = this._steppersEl) == null ? void 0 : _a.offsetWidth) ?? 0;
    this._actionsEl.style.right = `${steppersWidth}px`;
  }
  _updateMinMaxClasses(value) {
    var _a, _b, _c, _d;
    const el = this._element;
    if (!el) return;
    const { min, max } = this._options;
    if (min !== null && value !== null && value <= min) {
      el.classList.add("at-min");
      (_a = this._decrementBtn) == null ? void 0 : _a.setAttribute("aria-disabled", "true");
    } else {
      el.classList.remove("at-min");
      (_b = this._decrementBtn) == null ? void 0 : _b.removeAttribute("aria-disabled");
    }
    if (max !== null && value !== null && value >= max) {
      el.classList.add("at-max");
      (_c = this._incrementBtn) == null ? void 0 : _c.setAttribute("aria-disabled", "true");
    } else {
      el.classList.remove("at-max");
      (_d = this._incrementBtn) == null ? void 0 : _d.removeAttribute("aria-disabled");
    }
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
      const raw = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
      if (raw === "") return null;
      const parsed = parseFloat(raw);
      return isNaN(parsed) ? null : parsed;
    }
    if (newValue === null || isNaN(newValue)) {
      this.clear();
      return;
    }
    const precision = getStepPrecision(this._options.step);
    const clamped = this._clamp(newValue);
    const formatted = parseFloat(clamped.toFixed(precision));
    const previousValue = this._previousValue;
    this._previousValue = formatted;
    this._options.value = formatted;
    if (this._inputEl) {
      this._inputEl.value = clamped.toFixed(precision);
      this._inputEl.setAttribute("aria-valuenow", String(formatted));
    }
    this._updateMinMaxClasses(formatted);
    this._dispatchEvent("number-input:change", { value: formatted, previousValue });
  }
  clear() {
    var _a, _b, _c;
    const previousValue = this._previousValue;
    this._previousValue = null;
    this._options.value = null;
    if (this._inputEl) {
      this._inputEl.value = "";
      this._inputEl.removeAttribute("aria-valuenow");
    }
    (_a = this._element) == null ? void 0 : _a.classList.remove("at-min", "at-max");
    (_b = this._decrementBtn) == null ? void 0 : _b.removeAttribute("aria-disabled");
    (_c = this._incrementBtn) == null ? void 0 : _c.removeAttribute("aria-disabled");
    this._dispatchEvent("number-input:change", { value: null, previousValue });
  }
  validate() {
    const value = this.value();
    const errors = [];
    if (this._options.isRequired && value === null) {
      errors.push("This field is required");
    }
    if (value !== null) {
      if (this._options.min !== null && value < this._options.min) {
        errors.push(`Value must be at least ${this._options.min}`);
      }
      if (this._options.max !== null && value > this._options.max) {
        errors.push(`Value must be at most ${this._options.max}`);
      }
      if (this._options.step !== 1) {
        const remainder = (value - (this._options.min ?? 0)) % this._options.step;
        if (Math.abs(remainder) > 1e-10) {
          errors.push(`Value must be a multiple of ${this._options.step}`);
        }
      }
    }
    return { valid: errors.length === 0, errors };
  }
  setError(message) {
    var _a, _b, _c, _d;
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
      if (this._errIcoEl) {
        this._errIcoEl.remove();
        (_b = this._errIcoConnector) == null ? void 0 : _b.destroy();
        this._errIcoConnector = null;
        this._errIcoEl = null;
        this._updatePadding();
      }
      if (this._inlineAlertEl) {
        this._inlineAlertEl.style.display = "none";
      }
      return;
    }
    const msg = message || utils.getDefaultErrorMsg();
    this._options.isInvalid = true;
    this._options.errorMsg = msg;
    (_c = this._element) == null ? void 0 : _c.classList.add("has-error");
    if (this._inputEl) {
      this._inputEl.setAttribute("aria-invalid", "true");
      if (useInlineAlert) {
        this._inputEl.setAttribute("aria-describedby", this._errorId);
      }
    }
    if (useTooltipError) {
      if (!this._errIcoEl && this._actionsEl) {
        this._errIcoEl = utils.createErrorTooltipIcon({ tooltip: msg });
        this._errIcoEl.classList.add("arvo-number-input__err-ico");
        this._errIcoConnector = core.connectTooltip(core.tooltipManager, {
          anchor: this._errIcoEl,
          content: msg
        });
        this._actionsEl.appendChild(this._errIcoEl);
        this._updatePadding();
      } else if (this._errIcoEl) {
        utils.updateErrorTooltipIcon(this._errIcoEl, msg);
        if (this._errIcoConnector) {
          this._errIcoConnector.update({ content: msg });
        }
      }
      (_d = this._element) == null ? void 0 : _d.classList.add("error-tooltip");
    }
    if (useInlineAlert && this._inlineAlertEl) {
      utils.updateInlineAlert(this._inlineAlertEl, { message: msg });
      this._inlineAlertEl.style.display = "";
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
    var _a, _b, _c, _d, _e, _f;
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("is-disabled");
      if (this._inputEl) this._inputEl.disabled = true;
      (_b = this._incrementBtnInstance) == null ? void 0 : _b.disabled(true);
      (_c = this._decrementBtnInstance) == null ? void 0 : _c.disabled(true);
    } else {
      (_d = this._element) == null ? void 0 : _d.classList.remove("is-disabled");
      if (this._inputEl) this._inputEl.disabled = false;
      (_e = this._incrementBtnInstance) == null ? void 0 : _e.disabled(false);
      (_f = this._decrementBtnInstance) == null ? void 0 : _f.disabled(false);
    }
  }
  setLoading(isLoading) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const wasFocused = document.activeElement === this._inputEl;
    this._options.isLoading = isLoading;
    if (isLoading) {
      (_a = this._element) == null ? void 0 : _a.classList.add("loading");
      (_b = this._element) == null ? void 0 : _b.setAttribute("aria-busy", "true");
      (_c = this._incrementBtnInstance) == null ? void 0 : _c.disabled(true);
      (_d = this._decrementBtnInstance) == null ? void 0 : _d.disabled(true);
      if (wasFocused) {
        (_e = this._inputEl) == null ? void 0 : _e.blur();
      }
    } else {
      (_f = this._element) == null ? void 0 : _f.classList.remove("loading");
      (_g = this._element) == null ? void 0 : _g.removeAttribute("aria-busy");
      if (!this._options.isDisabled) {
        (_h = this._incrementBtnInstance) == null ? void 0 : _h.disabled(false);
        (_i = this._decrementBtnInstance) == null ? void 0 : _i.disabled(false);
      }
    }
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const el = this._element;
    if (!el) return;
    this._clearRepeat();
    (_a = this._resizeObserver) == null ? void 0 : _a.disconnect();
    this._resizeObserver = null;
    (_b = this._incrementBtnInstance) == null ? void 0 : _b.destroy();
    (_c = this._decrementBtnInstance) == null ? void 0 : _c.destroy();
    if (this._inputEl) {
      this._inputEl.removeEventListener("input", this._boundHandleInput);
      this._inputEl.removeEventListener("change", this._boundHandleChange);
      this._inputEl.removeEventListener("focus", this._boundHandleFocus);
      this._inputEl.removeEventListener("blur", this._boundHandleBlur);
      this._inputEl.removeEventListener("keydown", this._boundHandleKeyDown);
      this._inputEl.removeEventListener("paste", this._boundHandlePaste);
    }
    if (this._incrementBtn) {
      this._incrementBtn.removeEventListener("mousedown", this._boundHandleIncrementMouseDown);
      this._incrementBtn.removeEventListener("mouseup", this._boundHandleMouseUp);
      this._incrementBtn.removeEventListener("mouseleave", this._boundHandleMouseLeave);
      this._incrementBtn.removeEventListener("touchstart", this._boundHandleIncrementTouchStart);
      this._incrementBtn.removeEventListener("touchend", this._boundHandleTouchEnd);
    }
    if (this._decrementBtn) {
      this._decrementBtn.removeEventListener("mousedown", this._boundHandleDecrementMouseDown);
      this._decrementBtn.removeEventListener("mouseup", this._boundHandleMouseUp);
      this._decrementBtn.removeEventListener("mouseleave", this._boundHandleMouseLeave);
      this._decrementBtn.removeEventListener("touchstart", this._boundHandleDecrementTouchStart);
      this._decrementBtn.removeEventListener("touchend", this._boundHandleTouchEnd);
    }
    el.classList.remove(
      "arvo-number-input",
      "arvo-number-input--full-width",
      "is-disabled",
      "is-readonly",
      "has-error",
      "error-tooltip",
      "loading",
      "at-min",
      "at-max"
    );
    _ArvoNumberInput.SIZES.forEach((s) => el.classList.remove(`arvo-number-input--${s}`));
    el.removeAttribute("aria-busy");
    el.removeAttribute("role");
    el.style.removeProperty("--arvo-form-input-width");
    (_d = this._labelEl) == null ? void 0 : _d.remove();
    (_e = this._inlineAlertEl) == null ? void 0 : _e.remove();
    (_f = this._actionsEl) == null ? void 0 : _f.remove();
    (_g = this._errIcoEl) == null ? void 0 : _g.remove();
    (_h = this._fieldEl) == null ? void 0 : _h.remove();
    (_i = this._borderEl) == null ? void 0 : _i.remove();
    this._element = null;
    this._inputEl = null;
    this._fieldEl = null;
    this._actionsEl = null;
    this._borderEl = null;
    this._labelEl = null;
    this._steppersEl = null;
    this._incrementBtn = null;
    this._decrementBtn = null;
    this._incrementBtnInstance = null;
    this._decrementBtnInstance = null;
    (_j = this._errIcoConnector) == null ? void 0 : _j.destroy();
    this._errIcoConnector = null;
    this._errIcoEl = null;
    this._inlineAlertEl = null;
  }
};
_ArvoNumberInput.SIZES = ["sm", "lg"];
_ArvoNumberInput.DEFAULTS = {
  value: null,
  min: null,
  max: null,
  step: 1,
  placeholder: "",
  isDisabled: false,
  isReadOnly: false,
  label: null,
  isRequired: false,
  isInvalid: false,
  size: "lg",
  errorMsg: null,
  errorDisplay: "inline",
  isLoading: false,
  isFullWidth: false,
  width: null,
  onInput: null,
  onChange: null,
  onFocus: null,
  onBlur: null
};
let ArvoNumberInput = _ArvoNumberInput;
exports.ArvoNumberInput = ArvoNumberInput;
//# sourceMappingURL=NumberInput.cjs.map
