"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const useControllableState = require("./index40.cjs");
const RadioGroupContext = react.createContext(null);
const O9RadioGroup = react.forwardRef(
  function O9RadioGroup2({
    name,
    label = null,
    orientation = "vertical",
    labelPosition = "top",
    size = "lg",
    isDisabled = false,
    isReadOnly: isReadonly = false,
    isRequired = false,
    isInvalid = false,
    errorMsg = null,
    isLoading = false,
    value: valueProp,
    defaultValue = null,
    onChange,
    className,
    children,
    ...rest
  }, ref) {
    const uid = react.useId();
    const labelId = `o9ds-rb-grp-lbl-${uid}`;
    const errorId = `o9ds-rb-grp-err-${uid}`;
    const [selectedValue, setSelectedValue] = useControllableState.useControllableState(
      valueProp,
      defaultValue
    );
    const onChildChange = react.useCallback(
      (childValue) => {
        if (isDisabled || isReadonly || isLoading) return;
        setSelectedValue(childValue);
        onChange == null ? void 0 : onChange({ value: childValue, previousValue: selectedValue });
      },
      [isDisabled, isReadonly, isLoading, onChange, selectedValue, setSelectedValue]
    );
    const contextValue = react.useMemo(
      () => ({
        name,
        size,
        isDisabled,
        isReadOnly: isReadonly,
        isLoading,
        selectedValue,
        onChildChange
      }),
      [name, size, isDisabled, isReadonly, isLoading, selectedValue, onChildChange]
    );
    const showAlert = isInvalid && !!errorMsg;
    const classes = [
      "o9ds-rb-grp",
      `o9ds-rb-grp--${size}`,
      orientation === "horizontal" && "o9ds-rb-grp--horizontal",
      labelPosition === "start" && "o9ds-rb-grp--label-start",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadonly && "is-readonly",
      isInvalid && "has-error",
      className
    ].filter(Boolean).join(" ");
    const labelClasses = [
      "o9ds-form-lbl",
      "o9ds-rb-grp__lbl",
      size === "sm" && "o9ds-form-lbl--sm",
      isRequired && "o9ds-form-lbl--required",
      isDisabled && "is-disabled"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsx(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: classes,
        role: "radiogroup",
        "aria-labelledby": label ? labelId : void 0,
        "aria-required": isRequired || void 0,
        "aria-invalid": isInvalid || void 0,
        "aria-describedby": showAlert ? errorId : void 0,
        "aria-busy": isLoading || void 0,
        ...rest,
        children: [
          label && /* @__PURE__ */ jsxRuntime.jsxs("span", { id: labelId, className: labelClasses, children: [
            label,
            isRequired && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-form-lbl__req", "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-rb-grp__bdy", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-rb-grp__items", children }),
            showAlert && /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                className: "o9ds-inline-alert o9ds-inline-alert--error",
                id: errorId,
                role: "alert",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-inline-alert__ico", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-inline-alert__msg", children: errorMsg })
                ]
              }
            )
          ] })
        ]
      }
    ) });
  }
);
exports.RadioGroupContext = RadioGroupContext;
exports.default = O9RadioGroup;
//# sourceMappingURL=index19.cjs.map
