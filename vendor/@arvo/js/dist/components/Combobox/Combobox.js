import { connectTooltip, tooltipManager, filterGroups, filterItems, createArrowNav, overlayHub, computePosition, createPositionWatcher, enter, exit } from "@arvo/core";
import { createFormLabel, updateInlineAlert, createInlineAlert } from "@arvo/utils";
import { ArvoIconButton } from "../IconButton/IconButton.js";
let _idCounter = 0;
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) {
    const result = [];
    for (const group of items) {
      for (const item of group.items) result.push(item);
    }
    return result;
  }
  return items;
}
const _ArvoCombobox = class _ArvoCombobox {
  constructor(element, options) {
    this._fieldEl = null;
    this._inputEl = null;
    this._actionsEl = null;
    this._panelWrapperEl = null;
    this._panelEl = null;
    this._scrollEl = null;
    this._clearBtnEl = null;
    this._clearBtnInstance = null;
    this._errIcoEl = null;
    this._errIcoConnector = null;
    this._sepEl = null;
    this._chevronEl = null;
    this._chevronBtnInstance = null;
    this._borderEl = null;
    this._labelEl = null;
    this._alertEl = null;
    this._resizeObserver = null;
    this._isOpen = false;
    this._isDisabled = false;
    this._isLoading = false;
    this._isReadonly = false;
    this._activeIndex = -1;
    this._value = null;
    this._inputText = "";
    this._arrowNav = null;
    this._positionWatcher = null;
    this._flatItems = [];
    this._itemEls = [];
    this._blurTimeout = null;
    this._isClosing = false;
    this._isUserTyping = false;
    this._element = element;
    this._panelId = `arvo-combobox-${++_idCounter}`;
    this._options = {
      ..._ArvoCombobox.DEFAULTS,
      ...options,
      items: options.items ?? [],
      maxHeight: options.maxHeight ?? null,
      errorMsg: options.errorMsg ?? null,
      inputValue: options.inputValue ?? null,
      width: options.width ?? null,
      filterFn: options.filterFn ?? null,
      onChange: options.onChange ?? null,
      onInputChange: options.onInputChange ?? null,
      onOpen: options.onOpen ?? null,
      onClose: options.onClose ?? null,
      onClear: options.onClear ?? null,
      onOpenChange: options.onOpenChange ?? null
    };
    this._isDisabled = this._options.isDisabled;
    this._isLoading = this._options.isLoading;
    this._isReadonly = this._options.isReadOnly;
    this._value = options.value ?? null;
    if (options.inputValue !== void 0) {
      this._inputText = options.inputValue;
    } else if (this._value != null) {
      const allFlat = flattenItems(this._options.items);
      const found = allFlat.find((item) => item.value === this._value);
      this._inputText = (found == null ? void 0 : found.label) ?? "";
    }
    this._boundHandleInputInput = this._handleInputInput.bind(this);
    this._boundHandleInputKeyDown = this._handleInputKeyDown.bind(this);
    this._boundHandleInputBlur = this._handleInputBlur.bind(this);
    this._boundHandleInputFocus = this._handleInputFocus.bind(this);
    this._boundHandleChevronClick = this._handleChevronClick.bind(this);
    this._boundHandleFocusIn = this._handleFocusIn.bind(this);
    this._buildRoot();
    this._buildPanel();
    this._applyRootClasses();
  }
  static initialize(element, options) {
    return new _ArvoCombobox(element, options);
  }
  // ---------------------------------------------------------------------------
  // Root DOM Build
  // ---------------------------------------------------------------------------
  _buildRoot() {
    const el = this._element;
    const effectiveWidth = this._options.isFullWidth ? "100%" : this._options.width;
    if (effectiveWidth) {
      el.style.setProperty("--arvo-form-input-width", effectiveWidth);
    }
    if (this._options.label) {
      const lbl = createFormLabel({
        text: this._options.label,
        for: `${this._panelId}-input`,
        isRequired: this._options.isRequired
      });
      if (lbl) {
        lbl.id = `${this._panelId}-lbl`;
        lbl.classList.add("arvo-combobox__lbl");
        el.appendChild(lbl);
        this._labelEl = lbl;
      }
    }
    this._fieldEl = document.createElement("div");
    this._fieldEl.className = "arvo-combobox__field";
    this._inputEl = document.createElement("input");
    this._inputEl.type = "text";
    this._inputEl.id = `${this._panelId}-input`;
    this._inputEl.className = "arvo-combobox__input";
    this._inputEl.setAttribute("role", "combobox");
    this._inputEl.setAttribute("autocomplete", "off");
    this._inputEl.setAttribute("aria-haspopup", "listbox");
    this._inputEl.setAttribute("aria-expanded", "false");
    this._inputEl.setAttribute("aria-controls", this._panelId);
    this._inputEl.setAttribute("aria-autocomplete", "list");
    this._inputEl.value = this._inputText;
    if (this._options.placeholder) {
      this._inputEl.placeholder = this._options.placeholder;
    }
    if (this._isDisabled) {
      this._inputEl.disabled = true;
      this._inputEl.setAttribute("aria-disabled", "true");
    }
    if (this._isReadonly) {
      this._inputEl.readOnly = true;
    }
    if (this._options.isRequired) {
      this._inputEl.setAttribute("aria-required", "true");
    }
    if (this._options.isInvalid) {
      this._inputEl.setAttribute("aria-invalid", "true");
    }
    if (this._isLoading) {
      this._inputEl.setAttribute("aria-busy", "true");
    }
    if (this._labelEl) {
      this._inputEl.setAttribute("aria-labelledby", `${this._panelId}-lbl`);
    }
    this._inputEl.addEventListener("input", this._boundHandleInputInput);
    this._inputEl.addEventListener("keydown", this._boundHandleInputKeyDown);
    this._inputEl.addEventListener("blur", this._boundHandleInputBlur);
    this._inputEl.addEventListener("focus", this._boundHandleInputFocus);
    this._fieldEl.appendChild(this._inputEl);
    this._actionsEl = document.createElement("div");
    this._actionsEl.className = "arvo-combobox__actions";
    if (this._options.isClearable) {
      this._clearBtnEl = document.createElement("button");
      this._clearBtnInstance = ArvoIconButton.initialize(this._clearBtnEl, {
        variant: "tertiary",
        size: "sm",
        icon: "close",
        tooltip: "Clear",
        onClick: (e) => {
          e.stopPropagation();
          this.clear();
        }
      });
      this._clearBtnEl.classList.add("arvo-combobox__clear");
      this._clearBtnEl.setAttribute("tabindex", "-1");
      this._actionsEl.appendChild(this._clearBtnEl);
      this._sepEl = document.createElement("span");
      this._sepEl.className = "arvo-combobox__sep";
      this._actionsEl.appendChild(this._sepEl);
    }
    if (this._options.errorDisplay === "tooltip") {
      this._errIcoEl = document.createElement("span");
      this._errIcoEl.className = "arvo-combobox__err-ico";
      this._errIcoEl.setAttribute("aria-hidden", "true");
      if (this._options.errorMsg) {
        this._errIcoEl.setAttribute("aria-label", this._options.errorMsg);
        this._errIcoConnector = connectTooltip(tooltipManager, {
          anchor: this._errIcoEl,
          content: this._options.errorMsg
        });
      }
      this._actionsEl.appendChild(this._errIcoEl);
    }
    this._fieldEl.appendChild(this._actionsEl);
    this._chevronEl = document.createElement("button");
    this._chevronBtnInstance = ArvoIconButton.initialize(this._chevronEl, {
      variant: "tertiary",
      size: "sm",
      icon: "angle-down",
      onClick: this._boundHandleChevronClick
    });
    this._chevronEl.classList.add("arvo-combobox__ico");
    this._chevronEl.setAttribute("tabindex", "-1");
    this._chevronEl.setAttribute("aria-label", "Toggle menu");
    this._fieldEl.appendChild(this._chevronEl);
    this._borderEl = document.createElement("div");
    this._borderEl.className = "arvo-combobox__border";
    this._fieldEl.appendChild(this._borderEl);
    el.appendChild(this._fieldEl);
    this._resizeObserver = new ResizeObserver(() => {
      this._updatePadding();
    });
    this._resizeObserver.observe(this._actionsEl);
    this._updatePadding();
    if (this._options.isInvalid && this._options.errorMsg && this._options.errorDisplay === "inline") {
      this._alertEl = this._buildInlineAlert(this._options.errorMsg);
      if (this._alertEl) {
        this._inputEl.setAttribute("aria-describedby", `${this._panelId}-err`);
        el.appendChild(this._alertEl);
      }
    }
  }
  // ---------------------------------------------------------------------------
  // Panel Build
  // ---------------------------------------------------------------------------
  _buildPanel() {
    this._panelWrapperEl = document.createElement("div");
    this._panelWrapperEl.className = `arvo-combobox arvo-combobox--${this._options.size}`;
    this._panelWrapperEl.style.display = "contents";
    this._panelEl = document.createElement("div");
    this._panelEl.id = this._panelId;
    this._panelEl.className = "arvo-combobox__panel";
    this._panelEl.setAttribute("role", "listbox");
    this._panelEl.style.position = "fixed";
    this._panelEl.style.top = "0";
    this._panelEl.style.left = "0";
    this._panelEl.style.margin = "0";
    if (this._isLoading) {
      this._panelEl.setAttribute("aria-busy", "true");
    }
    if (this._options.maxHeight) {
      this._panelEl.style.setProperty(
        "--arvo-combobox-panel-max-height",
        this._options.maxHeight
      );
    }
    this._scrollEl = document.createElement("div");
    this._scrollEl.className = "arvo-combobox__scroll";
    this._panelEl.appendChild(this._scrollEl);
    this._panelWrapperEl.appendChild(this._panelEl);
    document.body.appendChild(this._panelWrapperEl);
  }
  // ---------------------------------------------------------------------------
  // CSS Classes
  // ---------------------------------------------------------------------------
  _applyRootClasses() {
    const el = this._element;
    if (!el) return;
    const hasValue = this._value != null || this._inputText.length > 0;
    el.classList.add("arvo-combobox", `arvo-combobox--${this._options.size}`);
    el.classList.toggle("arvo-combobox--full-width", this._options.isFullWidth);
    el.classList.toggle("arvo-combobox--clearable", this._options.isClearable);
    el.classList.toggle("loading", this._isLoading);
    el.classList.toggle("is-disabled", this._isDisabled);
    el.classList.toggle("is-readonly", this._isReadonly);
    el.classList.toggle("has-error", this._options.isInvalid);
    el.classList.toggle("error-tooltip", this._options.isInvalid && this._options.errorDisplay === "tooltip");
    el.classList.toggle("open", this._isOpen);
    el.classList.toggle("has-value", hasValue);
  }
  // ---------------------------------------------------------------------------
  // Item Rendering
  // ---------------------------------------------------------------------------
  _renderItems() {
    if (!this._scrollEl) return;
    this._scrollEl.textContent = "";
    this._itemEls = [];
    this._flatItems = [];
    const items = this._getFilteredItems();
    if (isGrouped(items)) {
      items.forEach(
        (group, groupIndex) => {
          if (groupIndex > 0 && this._options.hasGroupDividers) {
            const divider = document.createElement("hr");
            divider.className = "arvo-combobox__divider";
            divider.setAttribute("role", "separator");
            this._scrollEl.appendChild(divider);
          }
          const groupEl = document.createElement("div");
          groupEl.setAttribute("role", "group");
          if (group.label) {
            groupEl.setAttribute("aria-label", group.label);
            const header = document.createElement("div");
            header.className = "arvo-combobox__hdr";
            header.textContent = group.label;
            groupEl.appendChild(header);
          }
          group.items.forEach(
            (item) => this._renderItemInto(item, groupEl)
          );
          this._scrollEl.appendChild(groupEl);
        }
      );
    } else {
      items.forEach(
        (item) => this._renderItemInto(item, this._scrollEl)
      );
    }
    if (this._flatItems.length === 0 && this._inputText) {
      const empty = document.createElement("div");
      empty.className = "arvo-combobox__empty";
      empty.setAttribute("role", "status");
      empty.textContent = "No results";
      this._scrollEl.appendChild(empty);
    }
  }
  _renderItemInto(item, container) {
    const idx = this._flatItems.length;
    this._flatItems.push(item);
    const el = document.createElement("div");
    el.className = [
      "arvo-combobox__opt",
      item.isDisabled && "is-disabled",
      item.value === this._value && "active"
    ].filter(Boolean).join(" ");
    el.setAttribute("role", "option");
    el.setAttribute("id", `${this._panelId}-opt-${idx}`);
    el.setAttribute("tabindex", "-1");
    el.setAttribute("data-index", String(idx));
    el.setAttribute("aria-selected", String(item.value === this._value));
    if (item.isDisabled) {
      el.setAttribute("aria-disabled", "true");
    }
    if (item.icon) {
      const ico = document.createElement("span");
      ico.className = `arvo-combobox__opt__ico o9con o9con-${item.icon}`;
      ico.setAttribute("aria-hidden", "true");
      el.appendChild(ico);
    }
    const txt = document.createElement("div");
    txt.className = "arvo-combobox__opt__txt";
    const lbl = document.createElement("span");
    lbl.className = "arvo-combobox__opt__lbl";
    lbl.textContent = item.label;
    txt.appendChild(lbl);
    el.appendChild(txt);
    el.addEventListener("mousedown", (e) => e.preventDefault());
    el.addEventListener("click", () => this._handleItemActivation(idx));
    el.addEventListener("pointerenter", () => {
      if (!item.isDisabled) {
        this._setActiveIndex(idx);
      }
    });
    this._itemEls.push(el);
    container.appendChild(el);
  }
  // ---------------------------------------------------------------------------
  // Filtering
  // ---------------------------------------------------------------------------
  _getFilteredItems() {
    if (!this._isUserTyping || !this._inputText) return this._options.items;
    const items = this._options.items;
    const fn = this._options.filterFn;
    if (fn) {
      if (isGrouped(items)) {
        const result = [];
        for (const group of items) {
          const filtered = group.items.filter(
            (item) => fn(item, this._inputText)
          );
          if (filtered.length > 0) {
            result.push({ ...group, items: filtered });
          }
        }
        return result;
      }
      return items.filter(
        (item) => fn(item, this._inputText)
      );
    }
    if (isGrouped(items)) {
      return filterGroups(items, { query: this._inputText });
    }
    return filterItems(items, {
      query: this._inputText
    });
  }
  // ---------------------------------------------------------------------------
  // Event Handlers
  // ---------------------------------------------------------------------------
  _handleInputInput() {
    var _a, _b, _c, _d, _e;
    const text = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
    this._isUserTyping = true;
    this._inputText = text;
    (_c = (_b = this._options).onInputChange) == null ? void 0 : _c.call(_b, text);
    if (this._value != null) {
      const allFlat = flattenItems(this._options.items);
      const isSelected = allFlat.find((item) => item.value === this._value);
      if (isSelected && isSelected.label !== text) {
        this._value = null;
      }
    }
    this._applyRootClasses();
    (_d = this._element) == null ? void 0 : _d.dispatchEvent(
      new CustomEvent("combobox:input", {
        bubbles: true,
        detail: { value: text }
      })
    );
    if (!this._isOpen && text.length > 0) {
      this.open();
    } else if (this._isOpen) {
      this._renderItems();
      this._activeIndex = -1;
      if (this._flatItems.length > 0) {
        this._setupArrowNav();
        this._setActiveIndex(0);
      } else {
        (_e = this._arrowNav) == null ? void 0 : _e.destroy();
        this._arrowNav = null;
      }
    }
  }
  _handleInputKeyDown(e) {
    if (this._isDisabled || this._isLoading) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!this._isOpen) {
          this.open();
        } else {
          const next = this._findNextEnabled(this._activeIndex, 1);
          if (next >= 0) this._setActiveIndex(next, true);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!this._isOpen) {
          this.open();
        } else {
          const prev = this._findNextEnabled(this._activeIndex, -1);
          if (prev >= 0) this._setActiveIndex(prev, true);
        }
        break;
      case "Enter":
        if (this._isOpen && this._activeIndex >= 0 && this._activeIndex < this._flatItems.length) {
          e.preventDefault();
          const item = this._flatItems[this._activeIndex];
          if (!item.isDisabled) {
            this._handleItemActivation(this._activeIndex);
          }
        }
        break;
      case "Escape":
        e.preventDefault();
        if (this._isOpen) {
          this.close();
        } else {
          this._inputText = "";
          this._value = null;
          if (this._inputEl) this._inputEl.value = "";
          this._applyRootClasses();
        }
        break;
      case "Tab":
        if (this._isOpen) {
          e.preventDefault();
          if (this._activeIndex >= 0 && this._activeIndex < this._flatItems.length) {
            const item = this._flatItems[this._activeIndex];
            if (!item.isDisabled) {
              this._handleItemActivation(this._activeIndex);
              return;
            }
          }
          this.close();
        }
        break;
    }
  }
  _handleFocusIn(e) {
    var _a, _b;
    if (!this._isOpen) return;
    const target = e.target;
    if ((_a = this._element) == null ? void 0 : _a.contains(target)) return;
    if ((_b = this._panelEl) == null ? void 0 : _b.contains(target)) return;
    this.close();
  }
  _handleInputBlur() {
    this._blurTimeout = setTimeout(() => {
      if (this._isOpen) this.close();
    }, 100);
  }
  _handleInputFocus() {
    if (this._blurTimeout) {
      clearTimeout(this._blurTimeout);
      this._blurTimeout = null;
    }
  }
  _handleChevronClick(e) {
    e.stopPropagation();
    if (this._isDisabled || this._isLoading || this._isReadonly) return;
    if (this._isOpen) {
      this.close();
    } else {
      this.open();
      requestAnimationFrame(() => {
        var _a;
        (_a = this._inputEl) == null ? void 0 : _a.focus({ preventScroll: true });
      });
    }
  }
  _findNextEnabled(from, direction) {
    const len = this._flatItems.length;
    if (len === 0) return -1;
    let idx = from + direction;
    while (idx >= 0 && idx < len) {
      if (!this._flatItems[idx].isDisabled) return idx;
      idx += direction;
    }
    return -1;
  }
  // ---------------------------------------------------------------------------
  // Item Activation
  // ---------------------------------------------------------------------------
  _handleItemActivation(index) {
    var _a, _b, _c;
    const item = this._flatItems[index];
    if (!item || item.isDisabled) return;
    const result = (_b = (_a = this._options).onChange) == null ? void 0 : _b.call(_a, item, index);
    this._isUserTyping = false;
    this._value = item.value;
    this._inputText = item.label;
    if (this._inputEl) this._inputEl.value = item.label;
    this._applyRootClasses();
    (_c = this._element) == null ? void 0 : _c.dispatchEvent(
      new CustomEvent("combobox:change", {
        bubbles: true,
        cancelable: true,
        detail: { item, index }
      })
    );
    if (result !== false) {
      this.close();
    }
  }
  // ---------------------------------------------------------------------------
  // Active Index
  // ---------------------------------------------------------------------------
  _setActiveIndex(index, fromKeyboard = false) {
    if (this._activeIndex >= 0 && this._activeIndex < this._itemEls.length) {
      this._itemEls[this._activeIndex].classList.remove("focused");
    }
    this._activeIndex = index;
    if (index >= 0 && index < this._itemEls.length) {
      const el = this._itemEls[index];
      if (fromKeyboard) el.classList.add("focused");
      this._scrollIntoView(el);
      if (this._inputEl) {
        this._inputEl.setAttribute("aria-activedescendant", el.id);
      }
    } else if (this._inputEl) {
      this._inputEl.removeAttribute("aria-activedescendant");
    }
  }
  _scrollIntoView(el) {
    if (!this._scrollEl) return;
    const containerRect = this._scrollEl.getBoundingClientRect();
    const itemRect = el.getBoundingClientRect();
    if (itemRect.bottom > containerRect.bottom) {
      this._scrollEl.scrollTop += itemRect.bottom - containerRect.bottom;
    } else if (itemRect.top < containerRect.top) {
      this._scrollEl.scrollTop -= containerRect.top - itemRect.top;
    }
  }
  // ---------------------------------------------------------------------------
  // Arrow Nav (for programmatic Up/Down only; no typeAhead since typing goes to input)
  // ---------------------------------------------------------------------------
  _setupArrowNav() {
    var _a;
    (_a = this._arrowNav) == null ? void 0 : _a.destroy();
    this._arrowNav = createArrowNav({
      items: this._itemEls,
      orientation: "vertical",
      wrap: true,
      skipDisabled: (i) => {
        var _a2;
        return ((_a2 = this._flatItems[i]) == null ? void 0 : _a2.isDisabled) === true;
      },
      onNavigate: (_el, index) => this._setActiveIndex(index, true),
      onSelect: (_el, index) => this._handleItemActivation(index),
      onEscape: () => this.close()
    });
  }
  // ---------------------------------------------------------------------------
  // Positioning
  // ---------------------------------------------------------------------------
  _applyPosition(result) {
    if (!this._panelEl) return;
    this._panelEl.style.transform = `translate(${result.x}px, ${result.y}px)`;
    if (result.maxHeight != null) {
      this._panelEl.style.maxHeight = `${result.maxHeight}px`;
    }
    if (this._fieldEl) {
      this._panelEl.style.minWidth = `${this._fieldEl.getBoundingClientRect().width}px`;
    }
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  open() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (this._isOpen || this._isDisabled || this._isLoading || this._isReadonly)
      return;
    if (((_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a)) === false) return;
    const event = new CustomEvent("combobox:open", {
      bubbles: true,
      cancelable: true
    });
    if (!((_c = this._element) == null ? void 0 : _c.dispatchEvent(event))) return;
    this._isOpen = true;
    (_d = this._element) == null ? void 0 : _d.classList.add("open");
    (_e = this._panelWrapperEl) == null ? void 0 : _e.classList.add("open");
    overlayHub.open({
      id: this._panelId,
      type: "dropdown",
      element: this._panelEl,
      triggerElement: this._inputEl ?? void 0,
      priority: 20,
      config: { autoCloseOnOutsideClick: true },
      onClose: () => this.close()
    });
    if (this._fieldEl && this._panelEl) {
      this._panelEl.style.minWidth = `${this._fieldEl.getBoundingClientRect().width}px`;
      const placement = this._options.placement;
      const posResult = computePosition(this._fieldEl, this._panelEl, {
        placement,
        gap: 2
      });
      this._applyPosition(posResult);
      this._positionWatcher = createPositionWatcher(
        this._fieldEl,
        this._panelEl,
        { placement, gap: 2 },
        (result) => this._applyPosition(result)
      );
    }
    this._renderItems();
    this._setupArrowNav();
    if (this._panelEl) {
      enter({ element: this._panelEl, type: "fade", duration: 150 });
    }
    if (this._flatItems.length > 0) {
      const firstEnabled = this._flatItems.findIndex(
        (item) => !item.isDisabled
      );
      if (firstEnabled >= 0) {
        this._setActiveIndex(firstEnabled);
      }
    }
    (_f = this._inputEl) == null ? void 0 : _f.setAttribute("aria-expanded", "true");
    (_h = (_g = this._options).onOpenChange) == null ? void 0 : _h.call(_g, true);
    document.addEventListener("focusin", this._boundHandleFocusIn);
  }
  close() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    if (!this._isOpen) return;
    if (this._isClosing) return;
    this._isClosing = true;
    if (((_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a)) === false) {
      this._isClosing = false;
      return;
    }
    const event = new CustomEvent("combobox:close", {
      bubbles: true,
      cancelable: true
    });
    if (!((_c = this._element) == null ? void 0 : _c.dispatchEvent(event))) {
      this._isClosing = false;
      return;
    }
    this._isOpen = false;
    this._isUserTyping = false;
    const allFlat = flattenItems(this._options.items);
    const isSelected = allFlat.find((item) => item.value === this._value);
    this._inputText = (isSelected == null ? void 0 : isSelected.label) ?? "";
    if (this._inputEl) this._inputEl.value = this._inputText;
    this._activeIndex = -1;
    if (this._panelEl) {
      exit({
        element: this._panelEl,
        type: "fade",
        duration: 150,
        onComplete: () => {
          var _a2;
          (_a2 = this._panelWrapperEl) == null ? void 0 : _a2.classList.remove("open");
        }
      });
    }
    (_d = this._element) == null ? void 0 : _d.classList.remove("open");
    this._applyRootClasses();
    (_e = this._arrowNav) == null ? void 0 : _e.destroy();
    this._arrowNav = null;
    (_f = this._positionWatcher) == null ? void 0 : _f.destroy();
    this._positionWatcher = null;
    overlayHub.close(this._panelId);
    document.removeEventListener("focusin", this._boundHandleFocusIn);
    (_g = this._inputEl) == null ? void 0 : _g.setAttribute("aria-expanded", "false");
    (_h = this._inputEl) == null ? void 0 : _h.removeAttribute("aria-activedescendant");
    (_i = this._inputEl) == null ? void 0 : _i.focus({ preventScroll: true });
    (_k = (_j = this._options).onOpenChange) == null ? void 0 : _k.call(_j, false);
    this._isClosing = false;
  }
  toggle(force) {
    const shouldOpen = force !== void 0 ? force : !this._isOpen;
    if (shouldOpen) this.open();
    else this.close();
  }
  value(newValue) {
    var _a;
    if (newValue === void 0) return this._value;
    this._value = newValue;
    const allFlat = flattenItems(this._options.items);
    const item = allFlat.find((i) => i.value === newValue);
    this._inputText = (item == null ? void 0 : item.label) ?? "";
    if (this._inputEl) this._inputEl.value = this._inputText;
    this._applyRootClasses();
    if (item) {
      const idx = allFlat.indexOf(item);
      (_a = this._element) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("combobox:change", {
          bubbles: true,
          cancelable: true,
          detail: { item, index: idx }
        })
      );
    }
  }
  inputValue(text) {
    if (text === void 0) return this._inputText;
    this._inputText = text;
    if (this._inputEl) this._inputEl.value = text;
    this._applyRootClasses();
  }
  clear() {
    var _a, _b, _c, _d;
    const previousValue = this._value;
    this._isUserTyping = false;
    this._value = null;
    this._inputText = "";
    if (this._inputEl) this._inputEl.value = "";
    this._applyRootClasses();
    (_b = (_a = this._options).onClear) == null ? void 0 : _b.call(_a, { previousValue });
    (_c = this._element) == null ? void 0 : _c.dispatchEvent(
      new CustomEvent("combobox:clear", {
        bubbles: true,
        cancelable: false,
        detail: { previousValue }
      })
    );
    if (this._isOpen) this.close();
    (_d = this._inputEl) == null ? void 0 : _d.focus({ preventScroll: true });
  }
  updateItems(items) {
    this._options.items = items;
    if (this._isOpen) {
      this._renderItems();
      this._setupArrowNav();
      if (this._flatItems.length > 0) {
        this._setActiveIndex(0);
      } else {
        this._activeIndex = -1;
      }
    }
    if (this._value != null) {
      const allFlat = flattenItems(items);
      const found = allFlat.find((item) => item.value === this._value);
      if (found && !this._isOpen) {
        this._inputText = found.label;
        if (this._inputEl) this._inputEl.value = this._inputText;
      }
    }
  }
  disabled(state) {
    if (state === void 0) return this._isDisabled;
    this._isDisabled = state;
    this._options.isDisabled = state;
    if (this._inputEl) {
      this._inputEl.disabled = state;
      if (state) {
        this._inputEl.setAttribute("aria-disabled", "true");
        if (this._isOpen) this.close();
      } else {
        this._inputEl.removeAttribute("aria-disabled");
      }
    }
    this._applyRootClasses();
  }
  setError(message) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const useTooltipError = this._options.errorDisplay === "tooltip";
    const useInlineAlert = this._options.errorDisplay === "inline";
    if (message === false) {
      this._options.isInvalid = false;
      this._options.errorMsg = null;
      (_a = this._element) == null ? void 0 : _a.classList.remove("has-error", "error-tooltip");
      (_b = this._inputEl) == null ? void 0 : _b.removeAttribute("aria-invalid");
      (_c = this._inputEl) == null ? void 0 : _c.removeAttribute("aria-describedby");
      if (this._alertEl) {
        this._alertEl.remove();
        this._alertEl = null;
      }
      if (this._errIcoEl) {
        this._errIcoEl.removeAttribute("aria-label");
        (_d = this._errIcoConnector) == null ? void 0 : _d.destroy();
        this._errIcoConnector = null;
      }
    } else {
      this._options.isInvalid = true;
      this._options.errorMsg = message;
      (_e = this._element) == null ? void 0 : _e.classList.add("has-error");
      (_f = this._element) == null ? void 0 : _f.classList.toggle("error-tooltip", useTooltipError);
      (_g = this._inputEl) == null ? void 0 : _g.setAttribute("aria-invalid", "true");
      if (useTooltipError) {
        if (this._errIcoEl) {
          this._errIcoEl.setAttribute("aria-label", message);
          if (this._errIcoConnector) {
            this._errIcoConnector.update({ content: message });
          } else {
            this._errIcoConnector = connectTooltip(tooltipManager, {
              anchor: this._errIcoEl,
              content: message
            });
          }
        }
      } else if (useInlineAlert) {
        if (this._alertEl) {
          updateInlineAlert(this._alertEl, { message });
        } else {
          this._alertEl = this._buildInlineAlert(message);
          if (this._alertEl) {
            (_h = this._element) == null ? void 0 : _h.appendChild(this._alertEl);
          }
        }
        (_i = this._inputEl) == null ? void 0 : _i.setAttribute(
          "aria-describedby",
          `${this._panelId}-err`
        );
      }
    }
  }
  _updatePadding() {
    if (!this._actionsEl || !this._fieldEl) return;
    const w = this._actionsEl.offsetWidth;
    const pad = w > 0 ? w + 4 : 0;
    this._fieldEl.style.setProperty("--arvo-combobox-pad-r", `${pad}px`);
  }
  _buildInlineAlert(message) {
    const alert = createInlineAlert({
      type: "error",
      message,
      id: `${this._panelId}-err`
    });
    return alert ?? null;
  }
  setLoading(isLoading) {
    var _a, _b, _c;
    this._isLoading = isLoading;
    this._options.isLoading = isLoading;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("loading", isLoading);
    if (isLoading) {
      (_b = this._inputEl) == null ? void 0 : _b.setAttribute("aria-busy", "true");
      if (this._isOpen) this.close();
    } else {
      (_c = this._inputEl) == null ? void 0 : _c.removeAttribute("aria-busy");
    }
  }
  focus() {
    var _a;
    (_a = this._inputEl) == null ? void 0 : _a.focus();
  }
  width(value) {
    var _a;
    if (value === void 0) {
      return this._options.width;
    }
    this._options.width = value;
    (_a = this._element) == null ? void 0 : _a.style.setProperty("--arvo-form-input-width", value);
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (this._blurTimeout) {
      clearTimeout(this._blurTimeout);
      this._blurTimeout = null;
    }
    (_a = this._resizeObserver) == null ? void 0 : _a.disconnect();
    this._resizeObserver = null;
    if (this._isOpen) {
      this._isOpen = false;
      (_b = this._arrowNav) == null ? void 0 : _b.destroy();
      this._arrowNav = null;
      (_c = this._positionWatcher) == null ? void 0 : _c.destroy();
      this._positionWatcher = null;
      overlayHub.close(this._panelId);
      document.removeEventListener("focusin", this._boundHandleFocusIn);
    }
    (_d = this._inputEl) == null ? void 0 : _d.removeEventListener("input", this._boundHandleInputInput);
    (_e = this._inputEl) == null ? void 0 : _e.removeEventListener(
      "keydown",
      this._boundHandleInputKeyDown
    );
    (_f = this._inputEl) == null ? void 0 : _f.removeEventListener("blur", this._boundHandleInputBlur);
    (_g = this._inputEl) == null ? void 0 : _g.removeEventListener("focus", this._boundHandleInputFocus);
    (_h = this._clearBtnInstance) == null ? void 0 : _h.destroy();
    this._clearBtnInstance = null;
    (_i = this._chevronBtnInstance) == null ? void 0 : _i.destroy();
    this._chevronBtnInstance = null;
    if (this._panelWrapperEl) {
      this._panelWrapperEl.remove();
    }
    if (this._element) {
      this._element.textContent = "";
      this._element.className = "";
    }
    this._element = null;
    this._fieldEl = null;
    this._inputEl = null;
    this._actionsEl = null;
    this._panelWrapperEl = null;
    this._panelEl = null;
    this._scrollEl = null;
    this._clearBtnEl = null;
    (_j = this._errIcoConnector) == null ? void 0 : _j.destroy();
    this._errIcoConnector = null;
    this._errIcoEl = null;
    this._sepEl = null;
    this._chevronEl = null;
    this._borderEl = null;
    this._labelEl = null;
    this._alertEl = null;
    this._flatItems = [];
    this._itemEls = [];
  }
};
_ArvoCombobox.DEFAULTS = {
  items: [],
  value: void 0,
  inputValue: null,
  placeholder: "",
  label: "",
  isDisabled: false,
  isRequired: false,
  isInvalid: false,
  errorMsg: null,
  errorDisplay: "inline",
  size: "lg",
  isClearable: true,
  isLoading: false,
  isReadOnly: false,
  isFullWidth: false,
  width: null,
  placement: "bottom-start",
  maxHeight: null,
  hasGroupDividers: true,
  filterFn: null,
  onChange: null,
  onInputChange: null,
  onOpen: null,
  onClose: null,
  onClear: null,
  onOpenChange: null
};
let ArvoCombobox = _ArvoCombobox;
export {
  ArvoCombobox
};
//# sourceMappingURL=Combobox.js.map
