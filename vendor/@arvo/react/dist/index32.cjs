"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const utils = require("@arvo/utils");
const useTooltip = require("./index10.cjs");
const IconButton = require("./index12.cjs");
const ML_DEFAULTS = {
  enabled: true,
  expandRows: true,
  maxRows: 3,
  delimiter: ","
};
const LINE_HEIGHT = 20;
const TEXTAREA_PAD_Y = 12;
function normalizeMultiLine(prop) {
  if (!prop) return null;
  if (prop === true) return { ...ML_DEFAULTS };
  if (!prop.enabled) return null;
  return {
    enabled: true,
    expandRows: prop.expandRows ?? ML_DEFAULTS.expandRows,
    maxRows: prop.maxRows ?? ML_DEFAULTS.maxRows,
    delimiter: prop.delimiter ?? ML_DEFAULTS.delimiter
  };
}
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
function parseValues(value, delimiter) {
  return value.split("\n").flatMap((line) => line.split(delimiter)).map((s) => s.trim()).filter(Boolean);
}
const ArvoSearch = react.forwardRef(
  function ArvoSearch2({
    variant = "filter",
    value,
    defaultValue = "",
    placeholder = "Search",
    isDisabled = false,
    isInvalid = false,
    errorMsg,
    errorDisplay = "inline",
    isClearable = true,
    shortcut,
    counter = null,
    searchMode = "input",
    minChars = 0,
    isMultiLine: multiLineProp,
    isLoading = false,
    width,
    isFullWidth = false,
    onSearch,
    onInput,
    onChange,
    onClear,
    onFocus,
    onBlur,
    onNext,
    onPrevious,
    className,
    "aria-label": ariaLabel = "Search"
  }, ref) {
    const uid = react.useId();
    const errorId = `arvo-search-err-${uid}`;
    const inputRef = react.useRef(null);
    const fieldRef = react.useRef(null);
    const actionsRef = react.useRef(null);
    const errIcoRef = react.useRef(null);
    const valueOnFocusRef = react.useRef(defaultValue);
    const isControlled = value !== void 0;
    const [internalValue, setInternalValue] = react.useState(defaultValue);
    const currentValue = isControlled ? value : internalValue;
    const hasValue = currentValue.length > 0;
    const [isFocusWithin, setIsFocusWithin] = react.useState(false);
    const [isHovered, setIsHovered] = react.useState(false);
    const mlConfig = variant === "filter" ? normalizeMultiLine(multiLineProp) : null;
    const isMultiLine = !!mlConfig;
    const effectiveClearable = isClearable && !isMultiLine;
    const errorMessage = errorMsg ?? utils.getDefaultErrorMsg();
    const showTooltipIcon = isInvalid && errorDisplay === "tooltip";
    const showInlineAlert = isInvalid && errorDisplay === "inline";
    useTooltip.useTooltip({
      triggerRef: errIcoRef,
      tooltip: showTooltipIcon ? errorMessage : void 0
    });
    const isTouchRef = react.useRef(
      typeof document !== "undefined" && !document.documentElement.classList.contains("no-touch")
    );
    const classes = [
      "arvo-search",
      `arvo-search--${variant}`,
      isMultiLine && "arvo-search--multi-line",
      isFullWidth && "arvo-search--full-width",
      hasValue && "has-value",
      isInvalid && "has-error",
      showTooltipIcon && "error-tooltip",
      isDisabled && "is-disabled",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    const updatePadding = react.useCallback(() => {
      if (!actionsRef.current || !fieldRef.current) return;
      const w = actionsRef.current.offsetWidth;
      const pad = w > 0 ? w + 4 : 4;
      fieldRef.current.style.setProperty("--arvo-search-pad-r", `${pad}px`);
    }, []);
    react.useEffect(() => {
      updatePadding();
    });
    react.useEffect(() => {
      const el = actionsRef.current;
      if (!el) return;
      const obs = new ResizeObserver(updatePadding);
      obs.observe(el);
      return () => obs.disconnect();
    }, [updatePadding]);
    const autoResize = react.useCallback(() => {
      const el = inputRef.current;
      if (!el || !mlConfig) return;
      el.style.height = "auto";
      const max = mlConfig.maxRows * LINE_HEIGHT + TEXTAREA_PAD_Y;
      if (el.scrollHeight > max) {
        el.style.height = `${max}px`;
        el.style.overflowY = "auto";
      } else {
        el.style.height = `${el.scrollHeight}px`;
        el.style.overflowY = "hidden";
      }
    }, [mlConfig]);
    react.useEffect(() => {
      if (isMultiLine) autoResize();
    }, [currentValue, isMultiLine, autoResize]);
    react.useEffect(() => {
      var _a;
      if ((isLoading || isDisabled) && document.activeElement === inputRef.current) {
        (_a = inputRef.current) == null ? void 0 : _a.blur();
      }
    }, [isLoading, isDisabled]);
    react.useEffect(() => {
      if (!shortcut || isDisabled || isLoading) return;
      const combo = parseShortcut(shortcut);
      const handler = (e) => {
        var _a, _b;
        const t = e.target;
        if (t !== inputRef.current && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable))
          return;
        if (document.activeElement === inputRef.current) return;
        if (e.key.toLowerCase() === combo.key && e.ctrlKey === combo.ctrl && e.altKey === combo.alt && e.shiftKey === combo.shift && e.metaKey === combo.meta) {
          e.preventDefault();
          e.stopPropagation();
          (_a = inputRef.current) == null ? void 0 : _a.focus();
          (_b = inputRef.current) == null ? void 0 : _b.select();
        }
      };
      document.addEventListener("keydown", handler, true);
      return () => document.removeEventListener("keydown", handler, true);
    }, [shortcut, isDisabled, isLoading]);
    const clearVisible = effectiveClearable && hasValue && !isDisabled && !isLoading && (isFocusWithin || isHovered || isTouchRef.current);
    const counterVisible = !!counter && hasValue && !isDisabled;
    const shortcutVisible = !!shortcut && !hasValue && !isFocusWithin;
    const sep1 = clearVisible && (counterVisible || shortcutVisible);
    const sep2 = variant === "find" && !isDisabled && !isLoading;
    const navDisabled = isDisabled || isLoading || counter != null && counter.total === 0;
    function fireSearch(val) {
      if (!onSearch) return;
      if (mlConfig) {
        onSearch(val, parseValues(val, mlConfig.delimiter));
      } else {
        onSearch(val);
      }
    }
    function handleInputEvent(e) {
      if (isDisabled || isLoading) {
        e.preventDefault();
        return;
      }
      onInput == null ? void 0 : onInput(e);
    }
    function handleValueChange(e) {
      if (isDisabled || isLoading) {
        e.preventDefault();
        return;
      }
      const v = e.target.value;
      if (!isControlled) setInternalValue(v);
      if (searchMode === "input" && v.length >= minChars) {
        fireSearch(v);
      }
    }
    function handleFocus(e) {
      valueOnFocusRef.current = currentValue;
      onFocus == null ? void 0 : onFocus(e);
    }
    function handleBlur(e) {
      if (currentValue !== valueOnFocusRef.current) {
        onChange == null ? void 0 : onChange(currentValue);
      }
      onBlur == null ? void 0 : onBlur(e);
    }
    function handleKeyDown(e) {
      if (isDisabled || isLoading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (e.key === "Escape") {
        if (effectiveClearable && hasValue) {
          doClear();
        } else {
          e.target.blur();
        }
        return;
      }
      if (e.key === "Enter") {
        if (variant === "find") {
          e.preventDefault();
          if (e.shiftKey) onPrevious == null ? void 0 : onPrevious();
          else onNext == null ? void 0 : onNext();
          return;
        }
        if (isMultiLine && e.shiftKey) {
          requestAnimationFrame(autoResize);
          return;
        }
        e.preventDefault();
        fireSearch(currentValue);
      }
    }
    function handlePaste() {
      if (isMultiLine) requestAnimationFrame(autoResize);
    }
    function doClear() {
      var _a;
      if (!isControlled) setInternalValue("");
      onClear == null ? void 0 : onClear();
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      if (searchMode === "input") {
        fireSearch("");
      }
    }
    function handleRootFocusCapture() {
      setIsFocusWithin(true);
    }
    function handleRootBlurCapture(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsFocusWithin(false);
      }
    }
    const inputAttrs = {
      className: "arvo-search__input",
      value: currentValue,
      placeholder,
      disabled: isDisabled,
      "aria-label": ariaLabel,
      "aria-invalid": isInvalid || void 0,
      "aria-describedby": showInlineAlert ? errorId : void 0,
      onInput: handleInputEvent,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onPaste: handlePaste
    };
    const rootStyle = (() => {
      const effectiveWidth = isFullWidth ? "100%" : width;
      if (!effectiveWidth) return void 0;
      return { "--arvo-form-input-width": effectiveWidth };
    })();
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: classes,
        style: rootStyle,
        role: "search",
        "aria-busy": isLoading || void 0,
        "aria-disabled": isDisabled || void 0,
        onFocusCapture: handleRootFocusCapture,
        onBlurCapture: handleRootBlurCapture,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: fieldRef, className: "arvo-search__field", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "i",
              {
                className: "arvo-search__ico o9con o9con-search",
                "aria-hidden": "true"
              }
            ),
            isMultiLine ? /* @__PURE__ */ jsxRuntime.jsx(
              "textarea",
              {
                ref: inputRef,
                ...inputAttrs,
                rows: 1,
                "aria-multiline": "true",
                onChange: handleValueChange
              }
            ) : /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                ref: inputRef,
                ...inputAttrs,
                type: "search",
                onChange: handleValueChange
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: actionsRef, className: "arvo-search__actions", children: [
              effectiveClearable && hasValue && !isDisabled && !isLoading && /* @__PURE__ */ jsxRuntime.jsx(
                IconButton.default,
                {
                  size: "sm",
                  variant: "tertiary",
                  icon: "close",
                  tooltip: "Clear",
                  tabIndex: -1,
                  onClick: doClear,
                  className: "arvo-search__clear"
                }
              ),
              sep1 && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: "arvo-search__sep",
                  style: { display: "block" },
                  "aria-hidden": "true"
                }
              ),
              shortcut && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-search__shortcut", children: shortcut }),
              counter && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "arvo-search__counter", "aria-live": "polite", children: [
                counter.current,
                "/",
                counter.total
              ] }),
              variant === "find" && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                sep2 && /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    className: "arvo-search__sep",
                    style: { display: "block" },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  IconButton.default,
                  {
                    size: "sm",
                    variant: "tertiary",
                    icon: "angle-up",
                    tooltip: "Previous match",
                    isDisabled: navDisabled,
                    onClick: onPrevious,
                    className: "arvo-search__prev"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  IconButton.default,
                  {
                    size: "sm",
                    variant: "tertiary",
                    icon: "angle-down",
                    tooltip: "Next match",
                    isDisabled: navDisabled,
                    onClick: onNext,
                    className: "arvo-search__next"
                  }
                )
              ] }),
              showTooltipIcon && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  ref: errIcoRef,
                  className: "arvo-search__err-ico",
                  role: "img",
                  "aria-label": errorMessage
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-search__border" })
          ] }),
          showInlineAlert && /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: "arvo-inline-alert arvo-inline-alert--error",
              id: errorId,
              role: "alert",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__ico", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__msg", children: errorMessage })
              ]
            }
          )
        ]
      }
    );
  }
);
exports.default = ArvoSearch;
//# sourceMappingURL=index32.cjs.map
