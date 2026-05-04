import { createArrowNav } from "@arvo/core";
import { ArvoButton } from "../Button/Button.js";
import { ArvoIconButton } from "../IconButton/IconButton.js";
const _ArvoButtonGroup = class _ArvoButtonGroup {
  constructor(element, options) {
    this._childButtons = [];
    this._childElements = [];
    this._overflowTrigger = null;
    this._overflowTriggerEl = null;
    this._overflowMenuEl = null;
    this._arrowNav = null;
    this._resizeObserver = null;
    this._hiddenIndices = /* @__PURE__ */ new Set();
    this._overflowMenuButtons = [];
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _ArvoButtonGroup.VARIANTS.includes(options.variant) ? options.variant : _ArvoButtonGroup.DEFAULTS.variant;
    const size = (options == null ? void 0 : options.size) && _ArvoButtonGroup.SIZES.includes(options.size) ? options.size : _ArvoButtonGroup.DEFAULTS.size;
    this._options = {
      ..._ArvoButtonGroup.DEFAULTS,
      ...options,
      variant,
      size,
      items: (options == null ? void 0 : options.items) ?? [],
      value: (options == null ? void 0 : options.value) ?? null,
      onChange: (options == null ? void 0 : options.onChange) ?? null
    };
    if (this._options.isMultiSelect) {
      this._options.expandOnSelect = false;
    }
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._boundHandleClick = this._handleClick.bind(this);
    this._boundHandleOverflowClick = this._handleOverflowClick.bind(this);
    this._boundCloseOverflowMenu = this._closeOverflowMenu.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _ArvoButtonGroup(element, options);
  }
  // ── Render ─────────────────────────────────────────────────────────────
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    this._childButtons = [];
    this._childElements = [];
    this._hiddenIndices = /* @__PURE__ */ new Set();
    const {
      items,
      value: _value,
      variant: _variant,
      size,
      isMultiSelect: _multiSelect,
      isIconOnly,
      hasOverflow,
      expandOnSelect,
      isDisabled,
      isLoading,
      ariaLabel
    } = this._options;
    el.className = this._buildRootClasses();
    el.setAttribute("role", "toolbar");
    el.setAttribute("aria-orientation", "horizontal");
    el.setAttribute("aria-label", ariaLabel);
    if (isLoading) el.setAttribute("aria-busy", "true");
    const buttonSize = size === "sm" ? "sm" : "md";
    for (const item of items) {
      const btnEl = document.createElement("button");
      el.appendChild(btnEl);
      this._childElements.push(btnEl);
      const isActive = this._isItemActive(item.value);
      const isItemDisabled = isDisabled || (item.isDisabled ?? false);
      const useIconOnly = isIconOnly || expandOnSelect && !isActive && !!item.icon;
      let instance;
      if (useIconOnly || !item.label && item.icon) {
        instance = ArvoIconButton.initialize(btnEl, {
          icon: item.icon ?? "",
          tooltip: item.label ?? item.value,
          variant: "tertiary",
          size: buttonSize,
          isDisabled: isItemDisabled,
          isLoading: isLoading && !(item.isExcluded ?? false),
          isSelected: isActive
        });
      } else {
        instance = ArvoButton.initialize(btnEl, {
          label: item.label ?? item.value,
          icon: item.icon ?? null,
          variant: "tertiary",
          size: buttonSize,
          isDisabled: isItemDisabled,
          isLoading: isLoading && !(item.isExcluded ?? false),
          isSelected: isActive
        });
      }
      btnEl.setAttribute("data-value", item.value);
      this._childButtons.push(instance);
    }
    if (hasOverflow) {
      this._overflowTriggerEl = document.createElement("button");
      el.appendChild(this._overflowTriggerEl);
      this._overflowTriggerEl.className = "arvo-btn-grp__overflow";
      this._overflowTriggerEl.style.display = "none";
      this._overflowTrigger = ArvoIconButton.initialize(this._overflowTriggerEl, {
        icon: "ellipsis-v",
        tooltip: "More actions",
        variant: "tertiary",
        size: buttonSize,
        isDisabled
      });
      this._overflowTriggerEl.setAttribute("aria-haspopup", "menu");
      this._overflowTriggerEl.setAttribute("aria-expanded", "false");
    }
    this._syncRovingTabindex();
    this._setupArrowNav();
    if (hasOverflow) {
      this._setupResizeObserver();
    }
  }
  _buildRootClasses() {
    const { variant, size, isMultiSelect, isIconOnly, hasOverflow, expandOnSelect, isDisabled, isLoading } = this._options;
    return [
      "arvo-btn-grp",
      `arvo-btn-grp--${variant}`,
      `arvo-btn-grp--${size}`,
      isMultiSelect && "arvo-btn-grp--multi",
      isIconOnly && "arvo-btn-grp--icon-only",
      hasOverflow && "arvo-btn-grp--overflow",
      expandOnSelect && !isMultiSelect && "arvo-btn-grp--expand-lbl",
      isDisabled && "is-disabled",
      isLoading && "loading"
    ].filter(Boolean).join(" ");
  }
  // ── Events ─────────────────────────────────────────────────────────────
  _bindEvents() {
    var _a, _b;
    (_a = this._element) == null ? void 0 : _a.addEventListener("keydown", this._boundHandleKeydown);
    (_b = this._element) == null ? void 0 : _b.addEventListener("click", this._boundHandleClick);
  }
  _handleKeydown(event) {
    var _a;
    if (this._options.isDisabled || this._options.isLoading) return;
    (_a = this._arrowNav) == null ? void 0 : _a.handleKeyDown(event);
  }
  _handleClick(event) {
    if (this._options.isDisabled || this._options.isLoading) return;
    const target = event.target;
    const btnEl = target.closest("button[data-value]");
    if (!btnEl) return;
    const itemValue = btnEl.getAttribute("data-value");
    if (!itemValue) return;
    const item = this._options.items.find((i) => i.value === itemValue);
    if (!item || item.isDisabled || this._options.isDisabled) return;
    if (this._options.isMultiSelect) {
      this._toggleMulti(itemValue);
    } else {
      this._selectSingle(itemValue);
    }
  }
  _selectSingle(newValue) {
    var _a, _b;
    const previousValue = this._options.value;
    if (previousValue === newValue) return;
    this._options.value = newValue;
    this._syncActiveStates();
    this._syncRovingTabindex();
    if (this._options.expandOnSelect) {
      this._syncExpandLabels();
    }
    const detail = { value: newValue, previousValue };
    this._dispatchEvent("btn-grp:change", detail);
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, detail);
  }
  _toggleMulti(itemValue) {
    var _a, _b;
    const currentValues = this._options.value ?? [];
    const previousValue = [...currentValues];
    const idx = currentValues.indexOf(itemValue);
    const isSelected = idx === -1;
    if (isSelected) {
      currentValues.push(itemValue);
    } else {
      currentValues.splice(idx, 1);
    }
    this._options.value = [...currentValues];
    this._syncActiveStates();
    this._syncRovingTabindex();
    const detail = {
      value: [...currentValues],
      previousValue,
      changedValue: itemValue,
      isSelected
    };
    this._dispatchEvent("btn-grp:change", detail);
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, detail);
  }
  // ── State sync ─────────────────────────────────────────────────────────
  _isItemActive(itemValue) {
    const { value, isMultiSelect } = this._options;
    if (isMultiSelect) {
      return Array.isArray(value) && value.includes(itemValue);
    }
    return value === itemValue;
  }
  _syncActiveStates() {
    const { items } = this._options;
    for (let i = 0; i < items.length; i++) {
      const isActive = this._isItemActive(items[i].value);
      const btn = this._childButtons[i];
      if (btn) {
        btn.selected(isActive);
      }
    }
  }
  _syncExpandLabels() {
    if (!this._options.expandOnSelect || this._options.isMultiSelect) return;
    const { items } = this._options;
    const el = this._element;
    if (!el) return;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const btnEl = this._childElements[i];
      if (!btnEl || !item.icon) continue;
      const isActive = this._isItemActive(item.value);
      const oldBtn = this._childButtons[i];
      if (oldBtn) oldBtn.destroy();
      const buttonSize = this._options.size === "sm" ? "sm" : "md";
      const isDisabled = this._options.isDisabled || (item.isDisabled ?? false);
      const isLoading = this._options.isLoading && !(item.isExcluded ?? false);
      if (!isActive || !item.label) {
        const newInst = ArvoIconButton.initialize(btnEl, {
          icon: item.icon,
          tooltip: item.label ?? item.value,
          variant: "tertiary",
          size: buttonSize,
          isDisabled,
          isLoading,
          isSelected: isActive
        });
        this._childButtons[i] = newInst;
      } else {
        const newInst = ArvoButton.initialize(btnEl, {
          label: item.label,
          icon: item.icon,
          variant: "tertiary",
          size: buttonSize,
          isDisabled,
          isLoading,
          isSelected: isActive
        });
        this._childButtons[i] = newInst;
      }
      btnEl.setAttribute("data-value", item.value);
    }
    this._syncRovingTabindex();
    this._setupArrowNav();
  }
  _syncRovingTabindex() {
    const { items, value, isMultiSelect } = this._options;
    let selectedIdx = -1;
    let firstEnabledIdx = -1;
    for (let i = 0; i < items.length; i++) {
      if (this._hiddenIndices.has(i)) continue;
      const isEnabled = !items[i].isDisabled && !this._options.isDisabled;
      if (isEnabled && firstEnabledIdx === -1) firstEnabledIdx = i;
      if (!isMultiSelect && value === items[i].value && isEnabled) {
        selectedIdx = i;
      } else if (isMultiSelect && Array.isArray(value) && value.includes(items[i].value) && isEnabled) {
        if (selectedIdx === -1) selectedIdx = i;
      }
    }
    const activeIdx = selectedIdx !== -1 ? selectedIdx : firstEnabledIdx;
    for (let i = 0; i < this._childElements.length; i++) {
      this._childElements[i].tabIndex = i === activeIdx ? 0 : -1;
    }
  }
  // ── Arrow Nav ──────────────────────────────────────────────────────────
  _setupArrowNav() {
    var _a;
    (_a = this._arrowNav) == null ? void 0 : _a.destroy();
    const enabledElements = this._childElements.filter((el, i) => {
      const item = this._options.items[i];
      return !(item == null ? void 0 : item.isDisabled) && !this._options.isDisabled && !this._hiddenIndices.has(i);
    });
    if (enabledElements.length === 0) {
      this._arrowNav = null;
      return;
    }
    const { isMultiSelect } = this._options;
    this._arrowNav = createArrowNav({
      items: enabledElements,
      orientation: "horizontal",
      wrap: true,
      onNavigate: (item, _index) => {
        for (const el of this._childElements) {
          el.tabIndex = -1;
        }
        item.tabIndex = 0;
        item.focus();
        if (!isMultiSelect) {
          const val = item.getAttribute("data-value");
          if (val) this._selectSingle(val);
        }
      },
      onSelect: (item) => {
        const val = item.getAttribute("data-value");
        if (!val) return;
        if (isMultiSelect) {
          this._toggleMulti(val);
        } else {
          this._selectSingle(val);
        }
      }
    });
  }
  // ── Overflow ───────────────────────────────────────────────────────────
  _setupResizeObserver() {
    if (!this._element || !this._options.hasOverflow) return;
    this._resizeObserver = new ResizeObserver(() => {
      this._checkOverflow();
    });
    this._resizeObserver.observe(this._element);
    this._checkOverflow();
  }
  _checkOverflow() {
    var _a;
    const el = this._element;
    if (!el) return;
    const containerRect = el.getBoundingClientRect();
    const triggerWidth = ((_a = this._overflowTriggerEl) == null ? void 0 : _a.offsetWidth) ?? 0;
    const availableWidth = containerRect.width - triggerWidth;
    this._hiddenIndices.clear();
    for (let i = 0; i < this._childElements.length; i++) {
      const btnEl = this._childElements[i];
      const btnRect = btnEl.getBoundingClientRect();
      const isClipped = btnRect.right > containerRect.left + availableWidth;
      if (isClipped) {
        this._hiddenIndices.add(i);
        btnEl.style.visibility = "hidden";
        btnEl.style.position = "absolute";
        btnEl.style.pointerEvents = "none";
        btnEl.tabIndex = -1;
      } else {
        btnEl.style.visibility = "";
        btnEl.style.position = "";
        btnEl.style.pointerEvents = "";
      }
    }
    if (this._overflowTriggerEl) {
      const hasHidden = this._hiddenIndices.size > 0;
      this._overflowTriggerEl.style.display = hasHidden ? "" : "none";
      if (hasHidden) {
        this._overflowTriggerEl.removeAttribute("aria-hidden");
      } else {
        this._overflowTriggerEl.setAttribute("aria-hidden", "true");
      }
    }
    this._syncRovingTabindex();
    this._setupArrowNav();
  }
  _handleOverflowClick(_event) {
    if (this._overflowMenuEl) {
      this._closeOverflowMenu();
      return;
    }
    this._openOverflowMenu();
  }
  _openOverflowMenu() {
    var _a;
    if (!this._overflowTriggerEl || this._hiddenIndices.size === 0) return;
    this._overflowMenuEl = document.createElement("div");
    this._overflowMenuEl.className = "arvo-btn-grp__overflow-menu";
    this._overflowMenuEl.setAttribute("role", "menu");
    const buttonSize = this._options.size === "sm" ? "sm" : "md";
    for (const idx of this._hiddenIndices) {
      const item = this._options.items[idx];
      if (!item) continue;
      const menuBtnEl = document.createElement("button");
      menuBtnEl.setAttribute("role", "menuitem");
      menuBtnEl.setAttribute("data-value", item.value);
      const isActive = this._isItemActive(item.value);
      const menuBtn = ArvoButton.initialize(menuBtnEl, {
        label: item.label ?? item.value,
        icon: item.icon ?? null,
        variant: "tertiary",
        size: buttonSize,
        isDisabled: item.isDisabled ?? false,
        isSelected: isActive
      });
      this._overflowMenuButtons.push(menuBtn);
      menuBtnEl.addEventListener("click", () => {
        if (item.isDisabled) return;
        if (this._options.isMultiSelect) {
          this._toggleMulti(item.value);
        } else {
          this._selectSingle(item.value);
        }
        this._closeOverflowMenu();
      });
      this._overflowMenuEl.appendChild(menuBtnEl);
    }
    (_a = this._element) == null ? void 0 : _a.appendChild(this._overflowMenuEl);
    this._overflowTriggerEl.setAttribute("aria-expanded", "true");
    setTimeout(() => {
      document.addEventListener("click", this._boundCloseOverflowMenu);
    }, 0);
  }
  _closeOverflowMenu(event) {
    var _a, _b, _c, _d;
    if (event && ((_a = this._overflowMenuEl) == null ? void 0 : _a.contains(event.target))) return;
    if (event && ((_b = this._overflowTriggerEl) == null ? void 0 : _b.contains(event.target))) return;
    for (const btn of this._overflowMenuButtons) {
      btn.destroy();
    }
    this._overflowMenuButtons = [];
    (_c = this._overflowMenuEl) == null ? void 0 : _c.remove();
    this._overflowMenuEl = null;
    (_d = this._overflowTriggerEl) == null ? void 0 : _d.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", this._boundCloseOverflowMenu);
  }
  _dispatchEvent(eventName, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, cancelable: true, detail })
    );
  }
  value(newValue) {
    var _a, _b;
    if (newValue === void 0) return this._options.value;
    if (!this._element) return;
    const previousValue = this._options.value;
    this._options.value = newValue;
    this._syncActiveStates();
    this._syncRovingTabindex();
    if (this._options.expandOnSelect && !this._options.isMultiSelect) {
      this._syncExpandLabels();
    }
    const detail = {
      value: newValue,
      previousValue
    };
    this._dispatchEvent("btn-grp:change", detail);
    (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, detail);
  }
  disabled(state) {
    var _a;
    if (state === void 0) return this._options.isDisabled;
    if (!this._element) return;
    this._options.isDisabled = state;
    this._element.classList.toggle("is-disabled", state);
    for (const btn of this._childButtons) {
      btn.disabled(state);
    }
    (_a = this._overflowTrigger) == null ? void 0 : _a.disabled(state);
  }
  setVariant(variant) {
    if (!_ArvoButtonGroup.VARIANTS.includes(variant)) return;
    const el = this._element;
    if (!el) return;
    _ArvoButtonGroup.VARIANTS.forEach((v) => el.classList.remove(`arvo-btn-grp--${v}`));
    el.classList.add(`arvo-btn-grp--${variant}`);
    this._options.variant = variant;
  }
  setLoading(isLoading) {
    var _a;
    if (!this._element) return;
    this._options.isLoading = isLoading;
    this._element.classList.toggle("loading", isLoading);
    if (isLoading) {
      this._element.setAttribute("aria-busy", "true");
    } else {
      this._element.removeAttribute("aria-busy");
    }
    for (let i = 0; i < this._childButtons.length; i++) {
      const item = this._options.items[i];
      if (item == null ? void 0 : item.isExcluded) continue;
      this._childButtons[i].setLoading(isLoading);
    }
    (_a = this._overflowTrigger) == null ? void 0 : _a.setLoading(isLoading);
  }
  setItems(items) {
    if (!this._element) return;
    this._element.removeEventListener("keydown", this._boundHandleKeydown);
    this._element.removeEventListener("click", this._boundHandleClick);
    this._options.items = items;
    this._options.value = this._options.isMultiSelect ? [] : null;
    this._destroyChildren();
    this._render();
    this._bindEvents();
  }
  focus() {
    const selectedIdx = this._childElements.findIndex((el) => el.tabIndex === 0);
    if (selectedIdx !== -1) {
      this._childElements[selectedIdx].focus();
    }
  }
  destroy() {
    var _a, _b;
    (_a = this._arrowNav) == null ? void 0 : _a.destroy();
    this._arrowNav = null;
    (_b = this._resizeObserver) == null ? void 0 : _b.disconnect();
    this._resizeObserver = null;
    this._closeOverflowMenu();
    document.removeEventListener("click", this._boundCloseOverflowMenu);
    this._destroyChildren();
    if (this._overflowTrigger) {
      this._overflowTrigger.destroy();
      this._overflowTrigger = null;
      this._overflowTriggerEl = null;
    }
    if (this._element) {
      this._element.removeEventListener("keydown", this._boundHandleKeydown);
      this._element.removeEventListener("click", this._boundHandleClick);
      this._element.textContent = "";
      this._element.removeAttribute("role");
      this._element.removeAttribute("aria-orientation");
      this._element.removeAttribute("aria-label");
      this._element.removeAttribute("aria-busy");
      this._element.className = "";
    }
    this._element = null;
  }
  _destroyChildren() {
    for (const btn of this._childButtons) {
      btn.destroy();
    }
    this._childButtons = [];
    this._childElements = [];
  }
};
_ArvoButtonGroup.VARIANTS = ["primary", "secondary"];
_ArvoButtonGroup.SIZES = ["sm", "lg"];
_ArvoButtonGroup.DEFAULTS = {
  items: [],
  value: null,
  variant: "primary",
  size: "lg",
  isMultiSelect: false,
  isIconOnly: false,
  hasOverflow: false,
  expandOnSelect: false,
  isDisabled: false,
  isLoading: false,
  ariaLabel: "",
  onChange: null
};
let ArvoButtonGroup = _ArvoButtonGroup;
export {
  ArvoButtonGroup
};
//# sourceMappingURL=ButtonGroup.js.map
