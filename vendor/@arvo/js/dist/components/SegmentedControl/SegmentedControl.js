const _ArvoSegmentedControl = class _ArvoSegmentedControl {
  constructor(element, options) {
    this._optionEls = [];
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _ArvoSegmentedControl.VARIANTS.includes(options.variant) ? options.variant : _ArvoSegmentedControl.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _ArvoSegmentedControl.SIZES.includes(options.size) ? options.size : _ArvoSegmentedControl.DEFAULTS.size;
    this._options = {
      ..._ArvoSegmentedControl.DEFAULTS,
      ...options,
      variant,
      size,
      items: (options == null ? void 0 : options.items) ?? [],
      value: (options == null ? void 0 : options.value) ?? null,
      onChange: (options == null ? void 0 : options.onChange) ?? null
    };
    this._boundHandleClick = this._handleClick.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _ArvoSegmentedControl(element, options);
  }
  // -------------------------------------------------------------------------
  // Rendering
  // -------------------------------------------------------------------------
  _render() {
    var _a;
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    this._optionEls = [];
    const { items, value, variant, size, isIconOnly, isDisabled, isLoading, ariaLabel } = this._options;
    el.className = [
      "arvo-seg-ctrl",
      `arvo-seg-ctrl--${variant}`,
      `arvo-seg-ctrl--${size}`,
      isIconOnly ? "arvo-seg-ctrl--icon-only" : "",
      isDisabled ? "is-disabled" : "",
      isLoading ? "loading" : ""
    ].filter(Boolean).join(" ");
    el.setAttribute("role", "radiogroup");
    if (ariaLabel) el.setAttribute("aria-label", ariaLabel);
    if (isLoading) el.setAttribute("aria-busy", "true");
    if (isDisabled) el.setAttribute("aria-disabled", "true");
    const enabledItems = items.filter((it) => !it.isDisabled);
    const focusedValue = value && enabledItems.some((it) => it.value === value) ? value : ((_a = enabledItems[0]) == null ? void 0 : _a.value) ?? null;
    for (const item of items) {
      const isItemDisabled = isDisabled || !!item.isDisabled;
      const isChecked = value === item.value;
      const labelText = item.label ?? item.value;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "arvo-seg-ctrl__opt";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", String(isChecked));
      btn.dataset.value = item.value;
      btn.tabIndex = item.value === focusedValue && !isItemDisabled ? 0 : -1;
      if (isItemDisabled) {
        btn.disabled = true;
        btn.setAttribute("aria-disabled", "true");
      }
      if (isIconOnly) {
        btn.setAttribute("aria-label", labelText);
      }
      if (item.icon) {
        const ico = document.createElement("span");
        ico.className = `arvo-seg-ctrl__ico o9con o9con-${item.icon}`;
        ico.setAttribute("aria-hidden", "true");
        btn.appendChild(ico);
      }
      if (!isIconOnly && item.label) {
        const lbl = document.createElement("span");
        lbl.className = "arvo-seg-ctrl__lbl";
        lbl.textContent = item.label;
        btn.appendChild(lbl);
      }
      el.appendChild(btn);
      this._optionEls.push(btn);
    }
  }
  _bindEvents() {
    const el = this._element;
    if (!el) return;
    el.addEventListener("click", this._boundHandleClick);
    el.addEventListener("keydown", this._boundHandleKeydown);
  }
  // -------------------------------------------------------------------------
  // Event handlers
  // -------------------------------------------------------------------------
  _handleClick(event) {
    if (this._options.isDisabled || this._options.isLoading) return;
    const target = event.target.closest(".arvo-seg-ctrl__opt");
    if (!target || !this._optionEls.includes(target)) return;
    if (target.disabled) return;
    const v = target.dataset.value;
    if (typeof v !== "string") return;
    this._select(v);
  }
  _handleKeydown(event) {
    if (this._options.isDisabled || this._options.isLoading) return;
    const { key } = event;
    const isPrev = key === "ArrowLeft" || key === "ArrowUp";
    const isNext = key === "ArrowRight" || key === "ArrowDown";
    const isHome = key === "Home";
    const isEnd = key === "End";
    const isActivate = key === "Enter" || key === " ";
    if (!isPrev && !isNext && !isHome && !isEnd && !isActivate) return;
    const enabled = this._optionEls.map((el, idx) => ({ el, idx })).filter(({ el }) => !el.disabled);
    if (enabled.length === 0) return;
    const activeEl = document.activeElement;
    const currentIdx = enabled.findIndex(({ el }) => el === activeEl);
    if (isActivate) {
      if (currentIdx === -1) return;
      event.preventDefault();
      const value2 = enabled[currentIdx].el.dataset.value;
      if (typeof value2 === "string") this._select(value2);
      return;
    }
    event.preventDefault();
    let target;
    if (isHome) target = 0;
    else if (isEnd) target = enabled.length - 1;
    else if (isNext) target = currentIdx === -1 ? 0 : (currentIdx + 1) % enabled.length;
    else target = currentIdx === -1 ? enabled.length - 1 : (currentIdx - 1 + enabled.length) % enabled.length;
    const targetEl = enabled[target].el;
    targetEl.focus();
    const value = targetEl.dataset.value;
    if (typeof value === "string") this._select(value);
  }
  _select(next) {
    var _a, _b;
    if (next === this._options.value) return;
    const item = this._options.items.find((it) => it.value === next);
    if (!item || item.isDisabled) return;
    const previous = this._options.value;
    this._options.value = next;
    this._syncCheckedState();
    this._dispatchChange(next, previous);
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, { value: next, previousValue: previous });
  }
  _syncCheckedState() {
    const value = this._options.value;
    let firstFocusableSet = false;
    for (const btn of this._optionEls) {
      const v = btn.dataset.value;
      const isChecked = v === value;
      btn.setAttribute("aria-checked", String(isChecked));
      if (btn.disabled) {
        btn.tabIndex = -1;
        continue;
      }
      if (isChecked) {
        btn.tabIndex = 0;
        firstFocusableSet = true;
      } else {
        btn.tabIndex = -1;
      }
    }
    if (!firstFocusableSet) {
      const first = this._optionEls.find((el) => !el.disabled);
      if (first) first.tabIndex = 0;
    }
  }
  _dispatchChange(value, previousValue) {
    if (!this._element) return;
    const detail = { value, previousValue };
    this._element.dispatchEvent(
      new CustomEvent("seg-ctrl:change", { detail, bubbles: true })
    );
  }
  value(newValue) {
    if (newValue === void 0) return this._options.value;
    this._select(newValue);
  }
  disabled(state) {
    if (state === void 0) return this._options.isDisabled;
    this._options.isDisabled = state;
    if (!this._element) return;
    this._element.classList.toggle("is-disabled", state);
    if (state) this._element.setAttribute("aria-disabled", "true");
    else this._element.removeAttribute("aria-disabled");
    for (const btn of this._optionEls) {
      const item = this._options.items.find((it) => it.value === btn.dataset.value);
      const itemOwnDisabled = !!(item == null ? void 0 : item.isDisabled);
      btn.disabled = state || itemOwnDisabled;
      if (btn.disabled) btn.setAttribute("aria-disabled", "true");
      else btn.removeAttribute("aria-disabled");
    }
    this._syncCheckedState();
  }
  setLoading(loading) {
    this._options.isLoading = loading;
    if (!this._element) return;
    this._element.classList.toggle("loading", loading);
    if (loading) this._element.setAttribute("aria-busy", "true");
    else this._element.removeAttribute("aria-busy");
  }
  destroy() {
    if (this._element) {
      this._element.removeEventListener("click", this._boundHandleClick);
      this._element.removeEventListener("keydown", this._boundHandleKeydown);
      this._element.textContent = "";
    }
    this._optionEls = [];
    this._element = null;
  }
};
_ArvoSegmentedControl.VARIANTS = ["primary", "secondary"];
_ArvoSegmentedControl.SIZES = ["sm", "lg"];
_ArvoSegmentedControl.DEFAULTS = {
  items: [],
  value: null,
  variant: "primary",
  size: "lg",
  isIconOnly: false,
  isDisabled: false,
  isLoading: false,
  ariaLabel: "",
  onChange: null
};
let ArvoSegmentedControl = _ArvoSegmentedControl;
export {
  ArvoSegmentedControl
};
//# sourceMappingURL=SegmentedControl.js.map
