import { createInlineAlert, updateInlineAlert } from "@o9ds/utils";
import { O9Radio } from "../Radio/Radio.js";
let _idCounter = 0;
const _O9RadioGroup = class _O9RadioGroup {
  constructor(element, options) {
    this._labelEl = null;
    this._bdyEl = null;
    this._itemsEl = null;
    this._inlineAlertEl = null;
    this._childInstances = [];
    this._childItemEls = [];
    this._labelId = "";
    this._errorId = "";
    this._element = element;
    const size = (options == null ? void 0 : options.size) && _O9RadioGroup.SIZES.includes(options.size) ? options.size : _O9RadioGroup.DEFAULTS.size;
    this._options = {
      ..._O9RadioGroup.DEFAULTS,
      ...options,
      size,
      label: (options == null ? void 0 : options.label) ?? null,
      errorMsg: (options == null ? void 0 : options.errorMsg) ?? null,
      value: (options == null ? void 0 : options.value) ?? null,
      items: (options == null ? void 0 : options.items) ?? [],
      onChange: (options == null ? void 0 : options.onChange) ?? null
    };
    this._boundHandleItemChange = this._handleItemChange.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _O9RadioGroup(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    this._childInstances = [];
    this._childItemEls = [];
    const uid = ++_idCounter;
    this._labelId = `o9ds-rb-grp-lbl-${uid}`;
    this._errorId = `o9ds-rb-grp-err-${uid}`;
    const {
      name,
      label,
      orientation,
      labelPosition,
      size,
      isDisabled,
      isReadOnly: isReadonly,
      isRequired,
      isInvalid,
      errorMsg,
      isLoading,
      value,
      items
    } = this._options;
    el.classList.add("o9ds-rb-grp", `o9ds-rb-grp--${size}`);
    if (orientation === "horizontal") el.classList.add("o9ds-rb-grp--horizontal");
    if (labelPosition === "start") el.classList.add("o9ds-rb-grp--label-start");
    if (isLoading) el.classList.add("loading");
    if (isDisabled) el.classList.add("is-disabled");
    if (isReadonly) el.classList.add("is-readonly");
    if (isInvalid) el.classList.add("has-error");
    el.setAttribute("role", "radiogroup");
    if (isRequired) el.setAttribute("aria-required", "true");
    if (isInvalid) el.setAttribute("aria-invalid", "true");
    if (isLoading) el.setAttribute("aria-busy", "true");
    if (label) {
      this._labelEl = document.createElement("span");
      this._labelEl.id = this._labelId;
      this._labelEl.className = [
        "o9ds-form-lbl",
        "o9ds-rb-grp__lbl",
        size === "sm" ? "o9ds-form-lbl--sm" : "",
        isRequired ? "o9ds-form-lbl--required" : "",
        isDisabled ? "is-disabled" : ""
      ].filter(Boolean).join(" ");
      this._labelEl.textContent = label;
      if (isRequired) {
        const req = document.createElement("span");
        req.className = "o9ds-form-lbl__req";
        req.setAttribute("aria-hidden", "true");
        req.textContent = "*";
        this._labelEl.appendChild(req);
      }
      el.setAttribute("aria-labelledby", this._labelId);
      el.appendChild(this._labelEl);
    }
    this._bdyEl = document.createElement("div");
    this._bdyEl.className = "o9ds-rb-grp__bdy";
    this._itemsEl = document.createElement("div");
    this._itemsEl.className = "o9ds-rb-grp__items";
    for (const item of items) {
      const itemEl = document.createElement("div");
      this._itemsEl.appendChild(itemEl);
      const isChecked = value === item.value;
      const instance = O9Radio.initialize(itemEl, {
        label: item.label,
        value: item.value,
        name,
        isChecked,
        isDisabled: item.isDisabled ?? isDisabled,
        isReadOnly: isReadonly,
        size,
        isLoading
      });
      this._childInstances.push(instance);
      this._childItemEls.push(itemEl);
    }
    this._bdyEl.appendChild(this._itemsEl);
    if (isInvalid && errorMsg) {
      const alertEl = createInlineAlert({
        id: this._errorId,
        message: errorMsg,
        type: "error"
      });
      this._inlineAlertEl = alertEl;
      el.setAttribute("aria-describedby", this._errorId);
      this._bdyEl.appendChild(alertEl);
    }
    el.appendChild(this._bdyEl);
    this._syncRovingTabindex();
  }
  _bindEvents() {
    if (!this._itemsEl) return;
    this._itemsEl.addEventListener("radio:change", this._boundHandleItemChange);
    this._itemsEl.addEventListener("keydown", this._boundHandleKeydown);
  }
  _handleItemChange(event) {
    var _a, _b, _c;
    const customEvent = event;
    const { value: newValue } = customEvent.detail;
    const previousValue = this._options.value;
    if (previousValue === newValue) return;
    this._options.value = newValue;
    for (let i = 0; i < this._childInstances.length; i++) {
      const inst = this._childInstances[i];
      if (inst.value() === newValue) {
        const inputEl = (_a = this._childItemEls[i]) == null ? void 0 : _a.querySelector('input[type="radio"]');
        if (inputEl) inputEl.checked = true;
      } else {
        inst.deselect();
      }
    }
    this._syncRovingTabindex();
    const detail = { value: newValue, previousValue };
    this._dispatchEvent("rb-grp:change", detail);
    (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, detail);
  }
  _handleKeydown(event) {
    var _a, _b, _c;
    if (this._options.isDisabled || this._options.isLoading || this._options.isReadOnly) return;
    const ke = event;
    const { key } = ke;
    const isNext = key === "ArrowDown" || key === "ArrowRight";
    const isPrev = key === "ArrowUp" || key === "ArrowLeft";
    if (!isNext && !isPrev) return;
    ke.preventDefault();
    ke.stopPropagation();
    const enabledInstances = this._childInstances.filter((inst) => !inst.disabled());
    if (enabledInstances.length === 0) return;
    const focusedEl = document.activeElement;
    const currentIdx = enabledInstances.findIndex((inst) => {
      var _a2;
      const idx = this._childInstances.indexOf(inst);
      return (_a2 = this._childItemEls[idx]) == null ? void 0 : _a2.contains(focusedEl);
    });
    if (currentIdx === -1) return;
    const total = enabledInstances.length;
    const nextIdx = isNext ? (currentIdx + 1) % total : (currentIdx - 1 + total) % total;
    const targetInst = enabledInstances[nextIdx];
    const targetValue = targetInst.value();
    const previousValue = this._options.value;
    this._options.value = targetValue;
    for (let i = 0; i < this._childInstances.length; i++) {
      const inst = this._childInstances[i];
      const inputEl = (_a = this._childItemEls[i]) == null ? void 0 : _a.querySelector('input[type="radio"]');
      if (!inputEl) continue;
      if (inst.value() === targetValue) {
        inputEl.checked = true;
        inputEl.tabIndex = 0;
        inputEl.focus();
      } else {
        inputEl.checked = false;
        inputEl.tabIndex = -1;
      }
    }
    if (previousValue !== targetValue) {
      const detail = { value: targetValue, previousValue };
      this._dispatchEvent("rb-grp:change", detail);
      (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, detail);
    }
  }
  _syncRovingTabindex() {
    const selectedValue = this._options.value;
    let foundSelected = false;
    let firstEnabledIdx = -1;
    for (let i = 0; i < this._childInstances.length; i++) {
      const inst = this._childInstances[i];
      if (!inst.disabled() && firstEnabledIdx === -1) {
        firstEnabledIdx = i;
      }
      if (inst.value() === selectedValue && selectedValue !== null) {
        inst.setTabIndex(0);
        foundSelected = true;
      } else {
        inst.setTabIndex(-1);
      }
    }
    if (!foundSelected && firstEnabledIdx !== -1) {
      this._childInstances[firstEnabledIdx].setTabIndex(0);
    }
  }
  _dispatchEvent(eventName, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, cancelable: true, detail })
    );
  }
  value(newValue) {
    var _a, _b, _c;
    if (newValue === void 0) return this._options.value;
    if (!this._element) return;
    if (this._options.isDisabled || this._options.isReadOnly) return;
    const previousValue = this._options.value;
    if (previousValue === newValue) return;
    this._options.value = newValue;
    for (let i = 0; i < this._childInstances.length; i++) {
      const inst = this._childInstances[i];
      const inputEl = (_a = this._childItemEls[i]) == null ? void 0 : _a.querySelector('input[type="radio"]');
      if (!inputEl) continue;
      inputEl.checked = inst.value() === newValue;
    }
    this._syncRovingTabindex();
    const detail = { value: newValue, previousValue };
    this._dispatchEvent("rb-grp:change", detail);
    (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, detail);
  }
  disabled(state) {
    if (state === void 0) return this._options.isDisabled;
    if (!this._element) return;
    this._options.isDisabled = state;
    this._element.classList.toggle("is-disabled", state);
    if (this._labelEl) this._labelEl.classList.toggle("is-disabled", state);
    for (const inst of this._childInstances) {
      inst.disabled(state);
    }
  }
  readonly(state) {
    if (state === void 0) return this._options.isReadOnly;
    if (!this._element) return;
    this._options.isReadOnly = state;
    this._element.classList.toggle("is-readonly", state);
    for (const inst of this._childInstances) {
      inst.readonly(state);
    }
  }
  setError(msgOrFalse) {
    if (!this._element) return;
    if (msgOrFalse !== false) {
      const msg = msgOrFalse || this._options.errorMsg || "Error";
      this._options.isInvalid = true;
      this._options.errorMsg = msg;
      this._element.classList.add("has-error");
      this._element.setAttribute("aria-invalid", "true");
      if (this._inlineAlertEl) {
        updateInlineAlert(this._inlineAlertEl, { message: msg, type: "error" });
      } else if (this._bdyEl) {
        const alertEl = createInlineAlert({
          id: this._errorId,
          message: msg,
          type: "error"
        });
        this._inlineAlertEl = alertEl;
        this._element.setAttribute("aria-describedby", this._errorId);
        this._bdyEl.appendChild(alertEl);
      }
    } else {
      this._options.isInvalid = false;
      this._options.errorMsg = null;
      this._element.classList.remove("has-error");
      this._element.removeAttribute("aria-invalid");
      this._element.removeAttribute("aria-describedby");
      if (this._inlineAlertEl) {
        this._inlineAlertEl.remove();
        this._inlineAlertEl = null;
      }
    }
  }
  setLoading(isLoading) {
    if (!this._element) return;
    this._options.isLoading = isLoading;
    this._element.classList.toggle("loading", isLoading);
    if (isLoading) {
      this._element.setAttribute("aria-busy", "true");
    } else {
      this._element.removeAttribute("aria-busy");
    }
    for (const inst of this._childInstances) {
      inst.setLoading(isLoading);
    }
  }
  setLabel(label) {
    var _a;
    if (!this._element) return;
    this._options.label = label;
    if (label) {
      if (this._labelEl) {
        for (const node of Array.from(this._labelEl.childNodes)) {
          if (node.nodeType === Node.TEXT_NODE) node.remove();
        }
        this._labelEl.insertAdjacentText("afterbegin", label);
      } else {
        const { size, isRequired, isDisabled } = this._options;
        this._labelEl = document.createElement("span");
        this._labelEl.id = this._labelId;
        this._labelEl.className = [
          "o9ds-form-lbl",
          "o9ds-rb-grp__lbl",
          size === "sm" ? "o9ds-form-lbl--sm" : "",
          isRequired ? "o9ds-form-lbl--required" : "",
          isDisabled ? "is-disabled" : ""
        ].filter(Boolean).join(" ");
        this._labelEl.textContent = label;
        if (isRequired) {
          const req = document.createElement("span");
          req.className = "o9ds-form-lbl__req";
          req.setAttribute("aria-hidden", "true");
          req.textContent = "*";
          this._labelEl.appendChild(req);
        }
        this._element.setAttribute("aria-labelledby", this._labelId);
        this._element.insertBefore(this._labelEl, this._element.firstChild);
      }
    } else {
      (_a = this._labelEl) == null ? void 0 : _a.remove();
      this._labelEl = null;
      this._element.removeAttribute("aria-labelledby");
    }
  }
  destroy() {
    if (this._itemsEl) {
      this._itemsEl.removeEventListener("radio:change", this._boundHandleItemChange);
      this._itemsEl.removeEventListener("keydown", this._boundHandleKeydown);
    }
    for (const inst of this._childInstances) {
      inst.destroy();
    }
    this._childInstances = [];
    this._childItemEls = [];
    if (this._element) {
      this._element.textContent = "";
      this._element.removeAttribute("role");
      this._element.removeAttribute("aria-labelledby");
      this._element.removeAttribute("aria-required");
      this._element.removeAttribute("aria-invalid");
      this._element.removeAttribute("aria-describedby");
      this._element.removeAttribute("aria-busy");
      this._element.className = "";
    }
    this._element = null;
    this._labelEl = null;
    this._bdyEl = null;
    this._itemsEl = null;
    this._inlineAlertEl = null;
  }
};
_O9RadioGroup.SIZES = ["sm", "lg"];
_O9RadioGroup.DEFAULTS = {
  name: "",
  label: null,
  orientation: "vertical",
  labelPosition: "top",
  size: "lg",
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  isInvalid: false,
  errorMsg: null,
  isLoading: false,
  value: null,
  items: [],
  onChange: null
};
let O9RadioGroup = _O9RadioGroup;
export {
  O9RadioGroup
};
//# sourceMappingURL=RadioGroup.js.map
