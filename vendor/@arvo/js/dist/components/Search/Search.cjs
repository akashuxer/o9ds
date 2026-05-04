"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils = require("@arvo/utils");
const core = require("@arvo/core");
const IconButton = require("../IconButton/IconButton.cjs");
let _idCounter = 0;
function parseShortcut(shortcut) {
  const parts = shortcut.split("+").map((p) => p.trim().toLowerCase());
  const key = parts.pop();
  const isMac = typeof navigator !== "undefined" && /mac|iphone|ipad/i.test(navigator.platform);
  const hasCtrl = parts.includes("ctrl") || parts.includes("cmd");
  return {
    key,
    ctrl: hasCtrl && !isMac,
    alt: parts.includes("alt"),
    shift: parts.includes("shift"),
    meta: hasCtrl && isMac || parts.includes("meta")
  };
}
const _ArvoSearch = class _ArvoSearch {
  constructor(element, options) {
    this._inputEl = null;
    this._fieldEl = null;
    this._actionsEl = null;
    this._borderEl = null;
    this._icoEl = null;
    this._clearEl = null;
    this._clearBtn = null;
    this._sep1El = null;
    this._sep2El = null;
    this._shortcutEl = null;
    this._counterEl = null;
    this._prevEl = null;
    this._prevBtn = null;
    this._nextEl = null;
    this._nextBtn = null;
    this._errIcoEl = null;
    this._errIcoConnector = null;
    this._inlineAlertEl = null;
    this._previousValue = "";
    this._errorId = "";
    this._shortcutCombo = null;
    this._boundShortcutHandler = null;
    this._resizeObserver = null;
    this._element = element;
    const variant = (options == null ? void 0 : options.variant) && _ArvoSearch.VARIANTS.includes(options.variant) ? options.variant : _ArvoSearch.DEFAULTS.variant;
    const searchMode = (options == null ? void 0 : options.searchMode) && _ArvoSearch.SEARCH_MODES.includes(options.searchMode) ? options.searchMode : _ArvoSearch.DEFAULTS.searchMode;
    this._options = {
      ..._ArvoSearch.DEFAULTS,
      ...options,
      variant,
      searchMode,
      width: (options == null ? void 0 : options.width) ?? null,
      errorMsg: (options == null ? void 0 : options.errorMsg) ?? null,
      shortcut: (options == null ? void 0 : options.shortcut) ?? null,
      counter: (options == null ? void 0 : options.counter) ?? null,
      onSearch: (options == null ? void 0 : options.onSearch) ?? null,
      onInput: (options == null ? void 0 : options.onInput) ?? null,
      onChange: (options == null ? void 0 : options.onChange) ?? null,
      onClear: (options == null ? void 0 : options.onClear) ?? null,
      onFocus: (options == null ? void 0 : options.onFocus) ?? null,
      onBlur: (options == null ? void 0 : options.onBlur) ?? null,
      onNext: (options == null ? void 0 : options.onNext) ?? null,
      onPrevious: (options == null ? void 0 : options.onPrevious) ?? null
    };
    this._previousValue = this._options.value;
    this._boundHandleInput = this._handleInput.bind(this);
    this._boundHandleFocus = this._handleFocus.bind(this);
    this._boundHandleBlur = this._handleBlur.bind(this);
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._boundHandleClearClick = this._handleClearClick.bind(this);
    this._boundHandlePrevClick = this._handlePrevClick.bind(this);
    this._boundHandleNextClick = this._handleNextClick.bind(this);
    this._boundHandlePaste = this._handlePaste.bind(this);
    this._render();
    this._bindEvents();
    this._registerShortcut();
  }
  static initialize(element, options) {
    return new _ArvoSearch(element, options);
  }
  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    const uid = ++_idCounter;
    this._errorId = `arvo-search-err-${uid}`;
    const {
      variant,
      value,
      placeholder,
      isDisabled,
      isInvalid,
      errorMsg,
      errorDisplay,
      isClearable,
      shortcut,
      counter,
      isLoading
    } = this._options;
    const useTooltipError = errorDisplay === "tooltip";
    const useInlineAlert = errorDisplay === "inline";
    const ariaLabel = this._options["aria-label"];
    const mlConfig = this._resolveMultiLineConfig();
    const effectiveClearable = mlConfig.enabled ? false : isClearable;
    el.classList.add("arvo-search", `arvo-search--${variant}`);
    el.setAttribute("role", "search");
    if (this._options.isFullWidth) el.classList.add("arvo-search--full-width");
    if (mlConfig.enabled) el.classList.add("arvo-search--multi-line");
    this._applyWidthStyle();
    this._fieldEl = document.createElement("div");
    this._fieldEl.className = "arvo-search__field";
    this._icoEl = document.createElement("i");
    this._icoEl.className = "arvo-search__ico o9con o9con-search";
    this._icoEl.setAttribute("aria-hidden", "true");
    this._fieldEl.appendChild(this._icoEl);
    if (mlConfig.enabled) {
      const ta = document.createElement("textarea");
      ta.className = "arvo-search__input";
      ta.rows = 1;
      ta.value = value;
      if (placeholder) ta.placeholder = placeholder;
      ta.disabled = isDisabled;
      ta.setAttribute("aria-multiline", "true");
      if (ariaLabel) ta.setAttribute("aria-label", ariaLabel);
      this._inputEl = ta;
    } else {
      const inp = document.createElement("input");
      inp.className = "arvo-search__input";
      inp.type = "search";
      inp.value = value;
      if (placeholder) inp.placeholder = placeholder;
      inp.disabled = isDisabled;
      if (ariaLabel) inp.setAttribute("aria-label", ariaLabel);
      this._inputEl = inp;
    }
    this._fieldEl.appendChild(this._inputEl);
    this._actionsEl = document.createElement("div");
    this._actionsEl.className = "arvo-search__actions";
    if (effectiveClearable) {
      this._clearEl = document.createElement("button");
      this._clearBtn = IconButton.ArvoIconButton.initialize(this._clearEl, {
        size: "sm",
        variant: "tertiary",
        icon: "close",
        tooltip: "Clear",
        isDisabled: isDisabled || isLoading
      });
      this._clearEl.setAttribute("aria-label", "Clear");
      this._clearEl.tabIndex = -1;
      this._clearEl.classList.add("arvo-search__clear");
      this._actionsEl.appendChild(this._clearEl);
    }
    this._sep1El = document.createElement("span");
    this._sep1El.className = "arvo-search__sep";
    this._sep1El.style.display = "none";
    this._actionsEl.appendChild(this._sep1El);
    if (shortcut !== null) {
      this._shortcutEl = document.createElement("span");
      this._shortcutEl.className = "arvo-search__shortcut";
      this._shortcutEl.textContent = shortcut;
      this._actionsEl.appendChild(this._shortcutEl);
    }
    this._counterEl = document.createElement("span");
    this._counterEl.className = "arvo-search__counter";
    this._counterEl.setAttribute("aria-live", "polite");
    if (counter) {
      this._counterEl.textContent = `${counter.current}/${counter.total}`;
    }
    this._actionsEl.appendChild(this._counterEl);
    if (variant === "find") {
      this._sep2El = document.createElement("span");
      this._sep2El.className = "arvo-search__sep";
      this._actionsEl.appendChild(this._sep2El);
      const navDisabled = isDisabled || isLoading || (counter ? counter.total === 0 : false);
      this._prevEl = document.createElement("button");
      this._prevBtn = IconButton.ArvoIconButton.initialize(this._prevEl, {
        size: "sm",
        variant: "tertiary",
        icon: "angle-up",
        tooltip: "Previous match",
        isDisabled: navDisabled
      });
      this._prevEl.setAttribute("aria-label", "Previous match");
      this._prevEl.classList.add("arvo-search__prev");
      this._actionsEl.appendChild(this._prevEl);
      this._nextEl = document.createElement("button");
      this._nextBtn = IconButton.ArvoIconButton.initialize(this._nextEl, {
        size: "sm",
        variant: "tertiary",
        icon: "angle-down",
        tooltip: "Next match",
        isDisabled: navDisabled
      });
      this._nextEl.setAttribute("aria-label", "Next match");
      this._nextEl.classList.add("arvo-search__next");
      this._actionsEl.appendChild(this._nextEl);
    }
    if (useTooltipError) {
      const tooltip = errorMsg ?? utils.getDefaultErrorMsg();
      this._errIcoEl = utils.createErrorTooltipIcon({ tooltip });
      this._errIcoEl.classList.add("arvo-search__err-ico");
      this._errIcoConnector = core.connectTooltip(core.tooltipManager, {
        anchor: this._errIcoEl,
        content: tooltip
      });
      this._actionsEl.appendChild(this._errIcoEl);
    }
    this._fieldEl.appendChild(this._actionsEl);
    this._borderEl = document.createElement("div");
    this._borderEl.className = "arvo-search__border";
    this._fieldEl.appendChild(this._borderEl);
    el.appendChild(this._fieldEl);
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
    if (value.length > 0) el.classList.add("has-value");
    if (isInvalid) el.classList.add("has-error");
    if (isInvalid && useTooltipError) el.classList.add("error-tooltip");
    if (isLoading) el.classList.add("loading");
    if (isInvalid) {
      this._inputEl.setAttribute("aria-invalid", "true");
      if (useInlineAlert) this._inputEl.setAttribute("aria-describedby", this._errorId);
    }
    if (isDisabled) {
      this._inputEl.setAttribute("aria-disabled", "true");
      el.setAttribute("aria-disabled", "true");
    }
    if (isLoading) el.setAttribute("aria-busy", "true");
    if (isInvalid && useInlineAlert && this._inlineAlertEl) {
      this._inlineAlertEl.style.display = "";
    }
    if (mlConfig.enabled && this._inputEl instanceof HTMLTextAreaElement) {
      this._autoResizeTextarea();
    }
    this._updateSeparators();
    this._updatePadding();
  }
  // ---------------------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------------------
  _bindEvents() {
    const input = this._inputEl;
    if (!input) return;
    input.addEventListener("input", this._boundHandleInput);
    input.addEventListener("focus", this._boundHandleFocus);
    input.addEventListener("blur", this._boundHandleBlur);
    input.addEventListener("keydown", this._boundHandleKeydown);
    if (this._resolveMultiLineConfig().enabled) {
      input.addEventListener("paste", this._boundHandlePaste);
    }
    if (this._clearEl) {
      this._clearEl.addEventListener("click", this._boundHandleClearClick);
    }
    if (this._prevEl) {
      this._prevEl.addEventListener("click", this._boundHandlePrevClick);
    }
    if (this._nextEl) {
      this._nextEl.addEventListener("click", this._boundHandleNextClick);
    }
    if (this._actionsEl) {
      this._resizeObserver = new ResizeObserver(() => {
        this._updatePadding();
      });
      this._resizeObserver.observe(this._actionsEl);
    }
  }
  _registerShortcut() {
    if (this._options.shortcut) {
      this._shortcutCombo = parseShortcut(this._options.shortcut);
      this._boundShortcutHandler = this._handleShortcutKeyDown.bind(this);
      document.addEventListener("keydown", this._boundShortcutHandler, true);
    }
  }
  _handleInput(event) {
    var _a, _b, _c, _d;
    if (this._options.isDisabled || this._options.isLoading) return;
    const val = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
    (_b = this._element) == null ? void 0 : _b.classList.toggle("has-value", val.length > 0);
    this._options.value = val;
    const mlConfig = this._resolveMultiLineConfig();
    if (mlConfig.enabled && this._inputEl instanceof HTMLTextAreaElement) {
      this._autoResizeTextarea();
    }
    this._dispatchEvent("search:input", { value: val });
    (_d = (_c = this._options).onInput) == null ? void 0 : _d.call(_c, event);
    if (this._options.searchMode === "input") {
      if (val.length >= this._options.minChars) {
        this._triggerSearch();
      }
    }
    this._updateSeparators();
    this._updatePadding();
  }
  _handleFocus(event) {
    var _a, _b;
    this._updateSeparators();
    this._updatePadding();
    (_b = (_a = this._options).onFocus) == null ? void 0 : _b.call(_a, event);
  }
  _handleBlur(event) {
    var _a, _b, _c, _d, _e;
    const val = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
    if (val !== this._previousValue) {
      this._dispatchEvent("search:change", { value: val, previousValue: this._previousValue });
      this._previousValue = val;
      (_c = (_b = this._options).onChange) == null ? void 0 : _c.call(_b, val);
    }
    this._updateSeparators();
    this._updatePadding();
    (_e = (_d = this._options).onBlur) == null ? void 0 : _e.call(_d, event);
  }
  _handleKeydown(event) {
    var _a, _b;
    if (this._options.isDisabled || this._options.isLoading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const mlConfig = this._resolveMultiLineConfig();
    if (event.key === "Escape") {
      const effectiveClearable = mlConfig.enabled ? false : this._options.isClearable;
      const val = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
      if (effectiveClearable && val.length > 0) {
        this.clear();
        return;
      }
      (_b = this._inputEl) == null ? void 0 : _b.blur();
      return;
    }
    if (event.key === "Enter") {
      if (this._options.variant === "find") {
        event.preventDefault();
        if (event.shiftKey) {
          this.previous();
        } else {
          this.next();
        }
        return;
      }
      if (mlConfig.enabled) {
        if (event.shiftKey) {
          requestAnimationFrame(() => {
            if (this._inputEl instanceof HTMLTextAreaElement) {
              this._autoResizeTextarea();
            }
            this._updatePadding();
          });
          return;
        }
        event.preventDefault();
        this._triggerSearch();
        return;
      }
      event.preventDefault();
      this._triggerSearch();
    }
  }
  _handlePaste(_event) {
    requestAnimationFrame(() => {
      if (this._inputEl instanceof HTMLTextAreaElement) {
        this._autoResizeTextarea();
      }
      this._updatePadding();
    });
  }
  _handleClearClick(event) {
    var _a;
    event.preventDefault();
    event.stopPropagation();
    this.clear();
    (_a = this._inputEl) == null ? void 0 : _a.focus();
  }
  _handlePrevClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.previous();
  }
  _handleNextClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.next();
  }
  _handleShortcutKeyDown(event) {
    var _a, _b;
    if (this._options.isDisabled || this._options.isLoading) return;
    const target = event.target;
    if (target !== this._inputEl && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) {
      return;
    }
    if (document.activeElement === this._inputEl) return;
    const combo = this._shortcutCombo;
    if (event.key.toLowerCase() === combo.key && event.ctrlKey === combo.ctrl && event.altKey === combo.alt && event.shiftKey === combo.shift && event.metaKey === combo.meta) {
      event.preventDefault();
      event.stopPropagation();
      (_a = this._inputEl) == null ? void 0 : _a.focus();
      (_b = this._inputEl) == null ? void 0 : _b.select();
    }
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  _resolveMultiLineConfig() {
    const ml = this._options.isMultiLine;
    if (ml === true) return { enabled: true, expandRows: true, maxRows: 3, delimiter: "," };
    if (ml && typeof ml === "object" && ml.enabled) {
      return {
        enabled: true,
        expandRows: ml.expandRows ?? true,
        maxRows: ml.maxRows ?? 3,
        delimiter: ml.delimiter ?? ","
      };
    }
    return { enabled: false, expandRows: true, maxRows: 3, delimiter: "," };
  }
  _parseMultiLineValues(raw) {
    const mlConfig = this._resolveMultiLineConfig();
    return raw.split("\n").flatMap((line) => line.split(mlConfig.delimiter)).map((s) => s.trim()).filter(Boolean);
  }
  _autoResizeTextarea() {
    const ta = this._inputEl;
    if (!ta) return;
    const mlConfig = this._resolveMultiLineConfig();
    ta.style.height = "auto";
    const lineHeight = 20;
    const padding = 12;
    const maxHeight = mlConfig.maxRows * lineHeight + padding;
    if (ta.scrollHeight > maxHeight) {
      ta.style.height = `${maxHeight}px`;
      ta.style.overflowY = "auto";
    } else {
      ta.style.height = `${ta.scrollHeight}px`;
      ta.style.overflowY = "hidden";
    }
  }
  _triggerSearch() {
    var _a, _b, _c, _d, _e;
    const val = ((_a = this._inputEl) == null ? void 0 : _a.value) ?? "";
    const mlConfig = this._resolveMultiLineConfig();
    const detail = { value: val };
    if (mlConfig.enabled) {
      const values = this._parseMultiLineValues(val);
      detail.values = values;
      this._dispatchEvent("search:search", detail);
      (_c = (_b = this._options).onSearch) == null ? void 0 : _c.call(_b, val, values);
    } else {
      this._dispatchEvent("search:search", detail);
      (_e = (_d = this._options).onSearch) == null ? void 0 : _e.call(_d, val);
    }
  }
  _applyWidthStyle() {
    if (!this._element) return;
    const effectiveWidth = this._options.isFullWidth ? "100%" : this._options.width;
    if (effectiveWidth) {
      this._element.style.setProperty("--arvo-form-input-width", effectiveWidth);
    } else {
      this._element.style.removeProperty("--arvo-form-input-width");
    }
  }
  _updatePadding() {
    if (!this._actionsEl || !this._fieldEl) return;
    const actionsWidth = this._actionsEl.offsetWidth;
    const gap = 4;
    const padR = actionsWidth > 0 ? actionsWidth + gap : 4;
    this._fieldEl.style.setProperty("--arvo-search-pad-r", `${padR}px`);
  }
  _updateSeparators() {
    if (this._sep1El) {
      const clearVisible = this._clearEl ? getComputedStyle(this._clearEl).display !== "none" : false;
      const counterVisible = this._counterEl ? getComputedStyle(this._counterEl).display !== "none" : false;
      const shortcutVisible = this._shortcutEl ? getComputedStyle(this._shortcutEl).display !== "none" : false;
      const badgeVisible = counterVisible || shortcutVisible;
      this._sep1El.style.display = clearVisible && badgeVisible ? "" : "none";
    }
    if (this._sep2El) {
      this._sep2El.style.display = this._options.isDisabled || this._options.isLoading ? "none" : "";
    }
  }
  _updateNavState() {
    var _a, _b;
    if (this._options.variant !== "find") return;
    const navDisabled = this._options.isDisabled || this._options.isLoading || (this._options.counter ? this._options.counter.total === 0 : false);
    (_a = this._prevBtn) == null ? void 0 : _a.disabled(navDisabled);
    (_b = this._nextBtn) == null ? void 0 : _b.disabled(navDisabled);
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
    const mlConfig = this._resolveMultiLineConfig();
    if (mlConfig.enabled && this._inputEl instanceof HTMLTextAreaElement) {
      this._autoResizeTextarea();
    }
    if (newValue !== previousValue) {
      this._dispatchEvent("search:change", { value: newValue, previousValue });
    }
    this._updateSeparators();
    this._updatePadding();
  }
  clear() {
    var _a, _b, _c;
    this._dispatchEvent("search:clear", {});
    (_b = (_a = this._options).onClear) == null ? void 0 : _b.call(_a);
    this.value("");
    (_c = this._inputEl) == null ? void 0 : _c.focus();
    if (this._options.searchMode === "input") {
      this._triggerSearch();
    }
  }
  counter(current, total) {
    if (current === void 0) {
      return this._options.counter;
    }
    this._options.counter = { current, total };
    if (this._counterEl) {
      this._counterEl.textContent = `${current}/${total}`;
    }
    this._updateNavState();
    this._updateSeparators();
    this._updatePadding();
  }
  search() {
    this._triggerSearch();
  }
  next() {
    var _a, _b;
    if (this._options.variant !== "find") return;
    if (this._options.isDisabled || this._options.isLoading) return;
    if (this._options.counter && this._options.counter.total === 0) return;
    this._dispatchEvent("search:next", {});
    (_b = (_a = this._options).onNext) == null ? void 0 : _b.call(_a);
  }
  previous() {
    var _a, _b;
    if (this._options.variant !== "find") return;
    if (this._options.isDisabled || this._options.isLoading) return;
    if (this._options.counter && this._options.counter.total === 0) return;
    this._dispatchEvent("search:previous", {});
    (_b = (_a = this._options).onPrevious) == null ? void 0 : _b.call(_a);
  }
  disabled(state) {
    var _a, _b, _c, _d, _e, _f;
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.classList.add("is-disabled");
      (_b = this._element) == null ? void 0 : _b.setAttribute("aria-disabled", "true");
      if (this._inputEl) {
        this._inputEl.disabled = true;
        this._inputEl.setAttribute("aria-disabled", "true");
        if (document.activeElement === this._inputEl) {
          this._inputEl.blur();
        }
      }
      (_c = this._clearBtn) == null ? void 0 : _c.disabled(true);
    } else {
      (_d = this._element) == null ? void 0 : _d.classList.remove("is-disabled");
      (_e = this._element) == null ? void 0 : _e.removeAttribute("aria-disabled");
      if (this._inputEl) {
        this._inputEl.disabled = false;
        this._inputEl.removeAttribute("aria-disabled");
      }
      if (!this._options.isLoading) {
        (_f = this._clearBtn) == null ? void 0 : _f.disabled(false);
      }
    }
    this._updateNavState();
    this._updateSeparators();
    this._updatePadding();
  }
  shortcut(newValue) {
    if (newValue === void 0) return this._options.shortcut ?? null;
    if (this._boundShortcutHandler) {
      document.removeEventListener("keydown", this._boundShortcutHandler, true);
      this._boundShortcutHandler = null;
    }
    this._options.shortcut = newValue ?? null;
    if (this._shortcutEl) {
      this._shortcutEl.textContent = newValue ?? "";
    }
    if (newValue) {
      this._shortcutCombo = parseShortcut(newValue);
      this._boundShortcutHandler = this._handleShortcutKeyDown.bind(this);
      document.addEventListener("keydown", this._boundShortcutHandler, true);
    } else {
      this._shortcutCombo = null;
    }
    this._updateSeparators();
    this._updatePadding();
  }
  width(newValue) {
    if (newValue === void 0) return this._options.width;
    this._options.width = newValue ?? null;
    this._applyWidthStyle();
  }
  fullWidth(state) {
    var _a;
    if (state === void 0) return this._options.isFullWidth;
    this._options.isFullWidth = state;
    (_a = this._element) == null ? void 0 : _a.classList.toggle("arvo-search--full-width", state);
    this._applyWidthStyle();
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
      return;
    }
    const msg = message || utils.getDefaultErrorMsg();
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
      utils.updateErrorTooltipIcon(this._errIcoEl, msg);
      if (this._errIcoConnector) {
        this._errIcoConnector.update({ content: msg });
      }
      (_c = this._element) == null ? void 0 : _c.classList.add("error-tooltip");
    }
    if (useInlineAlert && this._inlineAlertEl) {
      utils.updateInlineAlert(this._inlineAlertEl, { message: msg });
      this._inlineAlertEl.style.display = "";
    }
    this._updateSeparators();
    this._updatePadding();
  }
  focus() {
    var _a;
    if (!this._options.isDisabled && !this._options.isLoading) {
      (_a = this._inputEl) == null ? void 0 : _a.focus();
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
    this._updateNavState();
    this._updateSeparators();
    this._updatePadding();
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f;
    const el = this._element;
    if (!el) return;
    if (this._inputEl) {
      this._inputEl.removeEventListener("input", this._boundHandleInput);
      this._inputEl.removeEventListener("focus", this._boundHandleFocus);
      this._inputEl.removeEventListener("blur", this._boundHandleBlur);
      this._inputEl.removeEventListener("keydown", this._boundHandleKeydown);
      this._inputEl.removeEventListener("paste", this._boundHandlePaste);
    }
    if (this._clearEl) {
      this._clearEl.removeEventListener("click", this._boundHandleClearClick);
    }
    if (this._prevEl) {
      this._prevEl.removeEventListener("click", this._boundHandlePrevClick);
    }
    if (this._nextEl) {
      this._nextEl.removeEventListener("click", this._boundHandleNextClick);
    }
    if (this._boundShortcutHandler) {
      document.removeEventListener("keydown", this._boundShortcutHandler, true);
      this._boundShortcutHandler = null;
    }
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    (_a = this._clearBtn) == null ? void 0 : _a.destroy();
    (_b = this._prevBtn) == null ? void 0 : _b.destroy();
    (_c = this._nextBtn) == null ? void 0 : _c.destroy();
    el.classList.remove(
      "arvo-search",
      "arvo-search--filter",
      "arvo-search--find",
      "arvo-search--multi-line",
      "arvo-search--full-width",
      "is-disabled",
      "has-error",
      "error-tooltip",
      "loading",
      "has-value"
    );
    el.removeAttribute("role");
    el.removeAttribute("aria-busy");
    el.removeAttribute("aria-disabled");
    el.style.removeProperty("--arvo-form-input-width");
    (_d = this._inlineAlertEl) == null ? void 0 : _d.remove();
    (_e = this._fieldEl) == null ? void 0 : _e.remove();
    this._element = null;
    this._inputEl = null;
    this._fieldEl = null;
    this._actionsEl = null;
    this._borderEl = null;
    this._icoEl = null;
    this._clearEl = null;
    this._clearBtn = null;
    this._sep1El = null;
    this._sep2El = null;
    this._shortcutEl = null;
    this._counterEl = null;
    this._prevEl = null;
    this._prevBtn = null;
    this._nextEl = null;
    this._nextBtn = null;
    (_f = this._errIcoConnector) == null ? void 0 : _f.destroy();
    this._errIcoConnector = null;
    this._errIcoEl = null;
    this._inlineAlertEl = null;
    this._shortcutCombo = null;
  }
};
_ArvoSearch.VARIANTS = ["filter", "find"];
_ArvoSearch.SEARCH_MODES = ["input", "submit"];
_ArvoSearch.DEFAULTS = {
  variant: "filter",
  value: "",
  placeholder: "Search",
  isDisabled: false,
  isInvalid: false,
  errorMsg: null,
  errorDisplay: "inline",
  isClearable: true,
  shortcut: null,
  counter: null,
  searchMode: "input",
  minChars: 0,
  isMultiLine: false,
  isLoading: false,
  width: null,
  isFullWidth: false,
  onSearch: null,
  onInput: null,
  onChange: null,
  onClear: null,
  onFocus: null,
  onBlur: null,
  onNext: null,
  onPrevious: null,
  "aria-label": "Search"
};
let ArvoSearch = _ArvoSearch;
exports.ArvoSearch = ArvoSearch;
//# sourceMappingURL=Search.cjs.map
