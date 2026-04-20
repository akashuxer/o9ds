"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const utils = require("@o9ds/utils");
const useTooltip = require("./index10.cjs");
const FormLabel = require("./index43.cjs");
const IconButton = require("./index12.cjs");
const O9Textbox = react.forwardRef(
  function O9Textbox2({
    value,
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    label,
    isRequired = false,
    isInvalid = false,
    size = "lg",
    type = "text",
    maxLength,
    hasCounter = false,
    errorMsg,
    isInlineError = false,
    isClearable = false,
    isLoading = false,
    isFullWidth = false,
    width,
    leadingIcon,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    className,
    ...rest
  }, ref) {
    const uid = react.useId();
    const inputId = `o9ds-textbox-${uid}`;
    const errorId = `o9ds-textbox-err-${uid}`;
    const inputRef = react.useRef(null);
    const fieldRef = react.useRef(null);
    const actionsRef = react.useRef(null);
    const errIcoRef = react.useRef(null);
    const isControlled = value !== void 0;
    const [internalValue, setInternalValue] = react.useState("");
    const currentValue = isControlled ? value : internalValue;
    const errorMessage = errorMsg ?? utils.getDefaultErrorMsg();
    useTooltip.useTooltip({
      triggerRef: errIcoRef,
      tooltip: isInlineError && isInvalid ? errorMessage : void 0
    });
    const showInlineAlert = isInvalid && !isInlineError;
    const updatePadding = react.useCallback(() => {
      if (!actionsRef.current || !fieldRef.current) return;
      const w = actionsRef.current.offsetWidth;
      const pad = w > 0 ? w + 4 : 0;
      fieldRef.current.style.setProperty("--o9ds-textbox-pad-r", `${pad}px`);
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
    const classes = [
      "o9ds-textbox",
      `o9ds-textbox--${size}`,
      isFullWidth && "o9ds-textbox--full-width",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      isInvalid && "has-error",
      isInvalid && isInlineError && "error-inline",
      currentValue.length > 0 && "has-value",
      className
    ].filter(Boolean).join(" ");
    function handleInput(e) {
      if (isDisabled || isLoading) {
        e.preventDefault();
        return;
      }
      onInput == null ? void 0 : onInput(e);
    }
    function handleChange(e) {
      if (isDisabled || isLoading) {
        e.preventDefault();
        return;
      }
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange == null ? void 0 : onChange(e);
    }
    function handleFocus(e) {
      onFocus == null ? void 0 : onFocus(e);
    }
    function handleBlur(e) {
      onBlur == null ? void 0 : onBlur(e);
    }
    function handleKeyDown(e) {
      if (isDisabled || isLoading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (e.key === "Escape" && isClearable && currentValue.length > 0) {
        clearValue();
        return;
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    }
    function clearValue() {
      var _a, _b;
      if (!isControlled) {
        setInternalValue("");
      }
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      if (onChange) {
        const nativeInput = inputRef.current;
        if (nativeInput) {
          const nativeInputValueSetter = (_b = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
          )) == null ? void 0 : _b.set;
          nativeInputValueSetter == null ? void 0 : nativeInputValueSetter.call(nativeInput, "");
          nativeInput.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }
    function handleClear() {
      clearValue();
    }
    const rootStyle = (() => {
      const effectiveWidth = isFullWidth ? "100%" : width;
      if (!effectiveWidth) return void 0;
      return { "--o9ds-form-input-width": effectiveWidth };
    })();
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: classes, style: rootStyle, role: "group", "aria-busy": isLoading || void 0, children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(FormLabel.FormLabel, { htmlFor: inputId, size: "sm", isRequired, isDisabled, className: "o9ds-textbox__lbl", children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: fieldRef, className: "o9ds-textbox__field", children: [
        leadingIcon && /* @__PURE__ */ jsxRuntime.jsx(
          "i",
          {
            className: `o9ds-textbox__leading-icon o9con o9con-${leadingIcon}`,
            "aria-hidden": "true",
            onClick: () => {
              var _a;
              return (_a = inputRef.current) == null ? void 0 : _a.focus();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            ref: inputRef,
            id: inputId,
            type,
            className: "o9ds-textbox__input",
            value: currentValue,
            placeholder,
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired,
            maxLength,
            "aria-invalid": isInvalid || void 0,
            "aria-required": isRequired || void 0,
            "aria-describedby": isInvalid ? errorId : void 0,
            onInput: handleInput,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            ...rest
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: actionsRef, className: "o9ds-textbox__actions", children: [
          isClearable && currentValue.length > 0 && !isDisabled && !isReadOnly && !isLoading && /* @__PURE__ */ jsxRuntime.jsx(
            IconButton.default,
            {
              size: "sm",
              tooltip: "Clear",
              variant: "tertiary",
              icon: "close",
              "aria-label": "Clear",
              tabIndex: -1,
              onClick: handleClear,
              className: "o9ds-textbox__clear"
            }
          ),
          isInlineError && isInvalid && /* @__PURE__ */ jsxRuntime.jsx("span", { ref: errIcoRef, className: "o9ds-textbox__err-ico", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-textbox__border" })
      ] }),
      hasCounter && !showInlineAlert && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-textbox__counter", children: utils.formatCharCount(currentValue.length, maxLength ?? null) }),
      isInvalid && !isInlineError && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-inline-alert o9ds-inline-alert--error", id: errorId, role: "alert", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-inline-alert__ico", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-inline-alert__msg", children: errorMessage })
      ] })
    ] });
  }
);
exports.default = O9Textbox;
//# sourceMappingURL=index13.cjs.map
