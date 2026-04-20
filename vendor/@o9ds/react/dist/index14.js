import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useState, useCallback, useEffect } from "react";
import { getDefaultErrorMsg, formatCharCount } from "@o9ds/utils";
import { useTooltip } from "./index10.js";
import { FormLabel } from "./index43.js";
const O9Textarea = forwardRef(
  function O9Textarea2({
    value,
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    label,
    isRequired = false,
    isInvalid = false,
    size = "sm",
    icon,
    rows = 3,
    maxLength,
    hasCounter = false,
    autoResize = false,
    resizable = "none",
    errorMsg,
    isInlineError = false,
    isLoading = false,
    isFullWidth = false,
    onInput,
    onChange,
    onFocus,
    onBlur,
    className,
    ...rest
  }, ref) {
    const uid = useId();
    const inputId = `o9ds-textarea-${uid}`;
    const errorId = `o9ds-textarea-err-${uid}`;
    const counterId = `o9ds-textarea-counter-${uid}`;
    const textareaRef = useRef(null);
    const rootRef = useRef(null);
    const errIcoRef = useRef(null);
    const previousValueRef = useRef("");
    const isControlled = value !== void 0;
    const [internalValue, setInternalValue] = useState("");
    const currentValue = isControlled ? value : internalValue;
    const errorMessage = errorMsg ?? getDefaultErrorMsg();
    useTooltip({
      triggerRef: errIcoRef,
      tooltip: isInlineError && isInvalid ? errorMessage : void 0
    });
    const showInlineAlert = isInvalid && !isInlineError;
    const classes = [
      "o9ds-textarea",
      `o9ds-textarea--${size}`,
      isFullWidth && "o9ds-textarea--full-width",
      autoResize && "o9ds-textarea--auto-resize",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      isInvalid && "has-error",
      isInvalid && isInlineError && "error-inline",
      className
    ].filter(Boolean).join(" ");
    const recalcAutoResizeHeight = useCallback(() => {
      const el = textareaRef.current;
      if (!el || !autoResize) return;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
      el.style.overflow = el.scrollHeight > el.clientHeight ? "auto" : "hidden";
    }, [autoResize]);
    useEffect(() => {
      previousValueRef.current = currentValue;
    }, [currentValue]);
    useEffect(() => {
      if (autoResize) {
        recalcAutoResizeHeight();
      }
    }, [currentValue, autoResize, recalcAutoResizeHeight]);
    function handleInput(e) {
      if (isDisabled || isLoading) {
        e.preventDefault();
        return;
      }
      if (!isControlled) {
        setInternalValue(e.currentTarget.value);
      }
      onInput == null ? void 0 : onInput(e);
    }
    function handleChange(e) {
      var _a;
      if (isDisabled || isLoading) {
        e.preventDefault();
        return;
      }
      const newValue = e.target.value;
      const prev = previousValueRef.current;
      previousValueRef.current = newValue;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      (_a = rootRef.current) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("textarea:change", {
          bubbles: true,
          cancelable: true,
          detail: { value: newValue, previousValue: prev }
        })
      );
      onChange == null ? void 0 : onChange(e);
    }
    function handleFocus(e) {
      onFocus == null ? void 0 : onFocus(e);
    }
    function handleBlur(e) {
      onBlur == null ? void 0 : onBlur(e);
    }
    const resizeStyle = autoResize ? "none" : resizable;
    function setRefs(node) {
      rootRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    }
    const describedByParts = [];
    if (isInvalid) describedByParts.push(errorId);
    if (hasCounter && !showInlineAlert) describedByParts.push(counterId);
    const describedBy = describedByParts.length > 0 ? describedByParts.join(" ") : void 0;
    return /* @__PURE__ */ jsxs("div", { ref: setRefs, className: classes, role: "group", "aria-busy": isLoading || void 0, children: [
      label && /* @__PURE__ */ jsx(FormLabel, { htmlFor: inputId, size: "sm", isRequired, isDisabled, className: "o9ds-textarea__lbl", children: label }),
      /* @__PURE__ */ jsxs("div", { className: "o9ds-textarea__field", children: [
        icon && /* @__PURE__ */ jsx("span", { className: `o9ds-textarea__ico o9con o9con-${icon}`, "aria-hidden": "true" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            ref: textareaRef,
            id: inputId,
            className: "o9ds-textarea__input",
            value: currentValue,
            placeholder,
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired,
            rows,
            maxLength,
            style: { resize: resizeStyle },
            "aria-invalid": isInvalid || void 0,
            "aria-required": isRequired || void 0,
            "aria-describedby": describedBy,
            onInput: handleInput,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...rest
          }
        ),
        isInlineError && isInvalid && /* @__PURE__ */ jsx("span", { ref: errIcoRef, className: "o9ds-textarea__err-ico", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "o9ds-textarea__border" })
      ] }),
      hasCounter && !showInlineAlert && /* @__PURE__ */ jsx("span", { id: counterId, className: "o9ds-textarea__counter", children: formatCharCount(currentValue.length, maxLength ?? null) }),
      isInvalid && !isInlineError && /* @__PURE__ */ jsxs("div", { className: "o9ds-inline-alert o9ds-inline-alert--error", id: errorId, role: "alert", children: [
        /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__ico", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__msg", children: errorMessage })
      ] })
    ] });
  }
);
export {
  O9Textarea as default
};
//# sourceMappingURL=index14.js.map
