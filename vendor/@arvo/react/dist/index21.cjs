"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const useControllableState = require("./index49.cjs");
const FormLabel = require("./index11.cjs");
const MessageAlert = require("./index12.cjs");
const RadioGroupContext = react.createContext(null);
const ArvoRadioGroup = react.forwardRef(
  function ArvoRadioGroup2({
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
    const labelId = `arvo-rb-grp-lbl-${uid}`;
    const errorId = `arvo-rb-grp-err-${uid}`;
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
      "arvo-rb-grp",
      `arvo-rb-grp--${size}`,
      orientation === "horizontal" && "arvo-rb-grp--horizontal",
      labelPosition === "start" && "arvo-rb-grp--label-start",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadonly && "is-readonly",
      isInvalid && "has-error",
      className
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
          label && /* @__PURE__ */ jsxRuntime.jsx(
            FormLabel.ArvoFormLabelText,
            {
              id: labelId,
              className: "arvo-rb-grp__lbl",
              size,
              isRequired,
              isDisabled,
              isInvalid,
              children: label
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-rb-grp__bdy", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "arvo-rb-grp__items", children }),
            showAlert && /* @__PURE__ */ jsxRuntime.jsx(MessageAlert.ArvoMessageAlert, { type: "error", id: errorId, message: errorMsg })
          ] })
        ]
      }
    ) });
  }
);
exports.RadioGroupContext = RadioGroupContext;
exports.default = ArvoRadioGroup;
//# sourceMappingURL=index21.cjs.map
