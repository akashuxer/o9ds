import { createInlineAlert, updateInlineAlert } from "@o9ds/utils";
let _idCounter = 0;
const _O9Checkbox = class _O9Checkbox {
  constructor(element, options) {
    this._inputEl = null;
    this._fieldEl = null;
    this._labelEl = null;
    this._inlineAlertEl = null;
    this._inputId = "";
    this._errorId = "";
    this._element = element;
    const size = (options == null ? void 0 : options.size) && _O9Checkbox.SIZES.includes(options.size) ? options.size : _O9Checkbox.DEFAULTS.size;
    this._options = {
      ..._O9Checkbox.DEFAULTS,
      ...options,
      size,
      label: (options == null ? void 0 : options.label) ?? null,
      errorMsg: (options == null ? void 0 : options.errorMsg) ?? null,
      name: options == null ? void 0 : options.name,
      onChange: (options == null ? void 0 : options.onChange) ?? null,
      onFocus: (options == null ? void 0 : options.onFocus) ?? null,
      onBlur: (options == null ? void 0 : options.onBlur) ?? null
    };
    this._boundHandleChange = this._handleChange.bind(this);
    this._boundHandleFocus = this._handleFocus.bind(this);
    this._boundHandleBlur = this._handleBlur.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _O9Checkbox(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    const uid = ++_idCounter;
    this._inputId = `o9ds-checkbox-${uid}`;
    this._errorId = `o9ds-checkbox-err-${uid}`;
    const {
      label,
      isChecked,
      isIndeterminate,
      isDisabled,
      isReadOnly: isReadonly,
      isRequired,
      isInvalid,
      isExcluded,
      size,
      value,
      name,
      errorMsg,
      isInlineError,
      isLoading
    } = this._options;
    el.classList.add("o9ds-checkbox", `o9ds-checkbox--${size}`);
    if (isLoading) el.classList.add("loading");
    if (isDisabled) el.classList.add("is-disabled");
    if (isReadonly) el.classList.add("is-readonly");
    if (isInvalid) el.classList.add("has-error");
    if (isExcluded) el.setAttribute("data-excluded", "true");
    if (isIndeterminate) el.setAttribute("data-indeterminate", "true");
    if (isLoading) el.setAttribute("aria-busy", "true");
    this._fieldEl = document.createElement("label");
    this._fieldEl.className = "o9ds-checkbox__field";
    this._inputEl = document.createElement("input");
    this._inputEl.className = "o9ds-checkbox__input";
    this._inputEl.type = "checkbox";
    this._inputEl.id = this._inputId;
    if (name) this._inputEl.name = name;
    this._inputEl.value = value;
    this._inputEl.checked = isChecked;
    this._inputEl.indeterminate = isIndeterminate;
    this._inputEl.disabled = isDisabled;
    this._inputEl.required = isRequired;
    if (isIndeterminate) this._inputEl.setAttribute("data-indeterminate", "true");
    if (isInvalid) this._inputEl.setAttribute("aria-invalid", "true");
    if (isRequired) this._inputEl.setAttribute("aria-required", "true");
    const showAlert = isInvalid && isInlineError;
    if (showAlert) {
      this._inputEl.setAttribute("aria-describedby", this._errorId);
    }
    this._fieldEl.appendChild(this._inputEl);
    if (label) {
      this._labelEl = document.createElement("span");
      this._labelEl.className = "o9ds-checkbox__lbl";
      this._labelEl.textContent = label;
      this._fieldEl.appendChild(this._labelEl);
    }
    el.appendChild(this._fieldEl);
    if (isInlineError) {
      const message = errorMsg || "Error";
      this._inlineAlertEl = createInlineAlert({
        type: "error",
        message,
        id: this._errorId
      });
      if (!isInvalid) {
        this._inlineAlertEl.style.display = "none";
      }
      el.appendChild(this._inlineAlertEl);
    }
  }
  _bindEvents() {
    if (!this._inputEl) return;
    this._inputEl.addEventListener("change", this._boundHandleChange);
    this._inputEl.addEventListener("focus", this._boundHandleFocus);
    this._inputEl.addEventListener("blur", this._boundHandleBlur);
  }
  _handleChange(_event) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    let newChecked;
    if (this._options.isIndeterminate) {
      newChecked = true;
      this._options.isIndeterminate = false;
      if (this._inputEl) {
        this._inputEl.indeterminate = false;
        this._inputEl.removeAttribute("data-indeterminate");
      }
      (_a = this._element) == null ? void 0 : _a.removeAttribute("data-indeterminate");
    } else {
      newChecked = !this._options.isChecked;
    }
    this._syncCheckedState(newChecked);
    const { value } = this._options;
    this._dispatchEvent("checkbox:change", { isChecked: newChecked, value });
    (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, { isChecked: newChecked, value });
  }
  _handleFocus(event) {
    var _a, _b;
    (_b = (_a = this._options).onFocus) == null ? void 0 : _b.call(_a, event);
  }
  _handleBlur(event) {
    var _a, _b;
    (_b = (_a = this._options).onBlur) == null ? void 0 : _b.call(_a, event);
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
  // --- Public Methods ---
  toggle(force) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    const newChecked = force ?? (this._options.isIndeterminate ? true : !this._options.isChecked);
    if (newChecked === this._options.isChecked && !this._options.isIndeterminate) return;
    if (this._options.isIndeterminate) {
      this._options.isIndeterminate = false;
      if (this._inputEl) {
        this._inputEl.indeterminate = false;
        this._inputEl.removeAttribute("data-indeterminate");
      }
      (_a = this._element) == null ? void 0 : _a.removeAttribute("data-indeterminate");
    }
    this._syncCheckedState(newChecked);
    const { value } = this._options;
    this._dispatchEvent("checkbox:change", { isChecked: newChecked, value });
    (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, { isChecked: newChecked, value });
  }
  checked() {
    var _a;
    return ((_a = this._inputEl) == null ? void 0 : _a.checked) ?? this._options.isChecked;
  }
  indeterminate(state) {
    var _a, _b, _c;
    if (state === void 0) {
      return ((_a = this._inputEl) == null ? void 0 : _a.indeterminate) ?? false;
    }
    this._options.isIndeterminate = state;
    if (this._inputEl) {
      this._inputEl.indeterminate = state;
      if (state) {
        this._inputEl.setAttribute("data-indeterminate", "true");
      } else {
        this._inputEl.removeAttribute("data-indeterminate");
      }
    }
    if (state) {
      (_b = this._element) == null ? void 0 : _b.setAttribute("data-indeterminate", "true");
    } else {
      (_c = this._element) == null ? void 0 : _c.removeAttribute("data-indeterminate");
    }
  }
  excluded(state) {
    var _a, _b;
    if (state === void 0) {
      return this._options.isExcluded;
    }
    this._options.isExcluded = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.setAttribute("data-excluded", "true");
    } else {
      (_b = this._element) == null ? void 0 : _b.removeAttribute("data-excluded");
    }
  }
  setLabel(label) {
    var _a, _b;
    this._options.label = label;
    if (label) {
      if (this._labelEl) {
        this._labelEl.textContent = label;
      } else {
        this._labelEl = document.createElement("span");
        this._labelEl.className = "o9ds-checkbox__lbl";
        this._labelEl.textContent = label;
        (_a = this._fieldEl) == null ? void 0 : _a.appendChild(this._labelEl);
      }
    } else {
      (_b = this._labelEl) == null ? void 0 : _b.remove();
      this._labelEl = null;
    }
  }
  disabled(state) {
    var _a;
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("is-disabled", state);
    if (this._inputEl) this._inputEl.disabled = state;
  }
  readonly(state) {
    var _a;
    if (state === void 0) {
      return this._options.isReadOnly;
    }
    this._options.isReadOnly = state;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("is-readonly", state);
  }
  setError(messageOrFalse) {
    var _a, _b;
    const hasError = messageOrFalse !== false;
    this._options.isInvalid = hasError;
    if (hasError) {
      const msg = messageOrFalse || this._options.errorMsg || "Error";
      this._options.errorMsg = msg;
      (_a = this._element) == null ? void 0 : _a.classList.add("has-error");
      if (this._inputEl) {
        this._inputEl.setAttribute("aria-invalid", "true");
      }
      if (this._options.isInlineError) {
        if (this._inlineAlertEl) {
          updateInlineAlert(this._inlineAlertEl, { message: msg });
          this._inlineAlertEl.style.display = "";
        }
        if (this._inputEl) {
          this._inputEl.setAttribute("aria-describedby", this._errorId);
        }
      }
    } else {
      this._options.errorMsg = null;
      (_b = this._element) == null ? void 0 : _b.classList.remove("has-error");
      if (this._inputEl) {
        this._inputEl.removeAttribute("aria-invalid");
        this._inputEl.removeAttribute("aria-describedby");
      }
      if (this._inlineAlertEl) {
        this._inlineAlertEl.style.display = "none";
      }
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
  value() {
    return this._options.value;
  }
  destroy() {
    var _a, _b, _c, _d;
    const el = this._element;
    if (!el) return;
    if (this._inputEl) {
      this._inputEl.removeEventListener("change", this._boundHandleChange);
      this._inputEl.removeEventListener("focus", this._boundHandleFocus);
      this._inputEl.removeEventListener("blur", this._boundHandleBlur);
    }
    el.classList.remove(
      "o9ds-checkbox",
      "is-disabled",
      "is-readonly",
      "has-error",
      "loading"
    );
    _O9Checkbox.SIZES.forEach((s) => el.classList.remove(`o9ds-checkbox--${s}`));
    el.removeAttribute("aria-busy");
    el.removeAttribute("data-excluded");
    el.removeAttribute("data-indeterminate");
    (_a = this._inputEl) == null ? void 0 : _a.remove();
    (_b = this._fieldEl) == null ? void 0 : _b.remove();
    (_c = this._labelEl) == null ? void 0 : _c.remove();
    (_d = this._inlineAlertEl) == null ? void 0 : _d.remove();
    this._element = null;
    this._inputEl = null;
    this._fieldEl = null;
    this._labelEl = null;
    this._inlineAlertEl = null;
  }
};
_O9Checkbox.SIZES = ["sm", "lg"];
_O9Checkbox.DEFAULTS = {
  label: null,
  isChecked: false,
  isIndeterminate: false,
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  isInvalid: false,
  isExcluded: false,
  size: "lg",
  value: "on",
  name: void 0,
  errorMsg: null,
  isInlineError: true,
  isLoading: false,
  onChange: null,
  onFocus: null,
  onBlur: null
};
let O9Checkbox = _O9Checkbox;
export {
  O9Checkbox
};
//# sourceMappingURL=Checkbox.js.map
