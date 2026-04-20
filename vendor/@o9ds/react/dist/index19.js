import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, forwardRef, useId, useCallback, useMemo } from "react";
import { useControllableState } from "./index40.js";
const RadioGroupContext = createContext(null);
const O9RadioGroup = forwardRef(
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
    const uid = useId();
    const labelId = `o9ds-rb-grp-lbl-${uid}`;
    const errorId = `o9ds-rb-grp-err-${uid}`;
    const [selectedValue, setSelectedValue] = useControllableState(
      valueProp,
      defaultValue
    );
    const onChildChange = useCallback(
      (childValue) => {
        if (isDisabled || isReadonly || isLoading) return;
        setSelectedValue(childValue);
        onChange == null ? void 0 : onChange({ value: childValue, previousValue: selectedValue });
      },
      [isDisabled, isReadonly, isLoading, onChange, selectedValue, setSelectedValue]
    );
    const contextValue = useMemo(
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
    return /* @__PURE__ */ jsx(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs(
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
          label && /* @__PURE__ */ jsxs("span", { id: labelId, className: labelClasses, children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "o9ds-form-lbl__req", "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "o9ds-rb-grp__bdy", children: [
            /* @__PURE__ */ jsx("div", { className: "o9ds-rb-grp__items", children }),
            showAlert && /* @__PURE__ */ jsxs(
              "div",
              {
                className: "o9ds-inline-alert o9ds-inline-alert--error",
                id: errorId,
                role: "alert",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__ico", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__msg", children: errorMsg })
                ]
              }
            )
          ] })
        ]
      }
    ) });
  }
);
export {
  RadioGroupContext,
  O9RadioGroup as default
};
//# sourceMappingURL=index19.js.map
