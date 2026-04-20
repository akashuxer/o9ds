import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useContext, useEffect } from "react";
import { CheckboxGroupContext } from "./index18.js";
import { useControllableState } from "./index40.js";
const O9Checkbox = forwardRef(
  function O9Checkbox2({
    label = null,
    isChecked: checkedProp,
    defaultChecked = false,
    isIndeterminate = false,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    isInvalid = false,
    isExcluded = false,
    size = "lg",
    value = "on",
    name,
    errorMsg = null,
    isInlineError = true,
    isLoading = false,
    onChange,
    onFocus,
    onBlur,
    className,
    ...rest
  }, ref) {
    const uid = useId();
    const inputId = `o9ds-checkbox-${uid}`;
    const errorId = `o9ds-checkbox-err-${uid}`;
    const inputRef = useRef(null);
    const [isChecked, setChecked] = useControllableState(checkedProp, defaultChecked);
    const group = useContext(CheckboxGroupContext);
    const resolvedSize = group ? group.size : size;
    const resolvedDisabled = isDisabled || (group ? group.isDisabled : false);
    const resolvedReadonly = isReadOnly || (group ? group.isReadOnly : false);
    const resolvedLoading = isLoading || (group ? group.isLoading : false);
    const resolvedName = name ?? (group == null ? void 0 : group.name);
    useEffect(() => {
      if (!group || value === "on") return;
      group.registerCheckbox(value, isChecked);
      return () => {
        group.unregisterCheckbox(value);
      };
    }, [value, group == null ? void 0 : group.registerCheckbox, group == null ? void 0 : group.unregisterCheckbox]);
    useEffect(() => {
      if (!group || value === "on") return;
      group.registerCheckbox(value, isChecked);
    }, [isChecked]);
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate;
        if (isIndeterminate) {
          inputRef.current.setAttribute("data-indeterminate", "true");
        } else {
          inputRef.current.removeAttribute("data-indeterminate");
        }
      }
    }, [isIndeterminate]);
    const classes = [
      "o9ds-checkbox",
      `o9ds-checkbox--${resolvedSize}`,
      resolvedLoading && "loading",
      resolvedDisabled && "is-disabled",
      resolvedReadonly && "is-readonly",
      isInvalid && "has-error",
      className
    ].filter(Boolean).join(" ");
    function handleChange() {
      if (resolvedDisabled || resolvedLoading || resolvedReadonly) return;
      const nextChecked = isIndeterminate ? true : !isChecked;
      setChecked(nextChecked);
      onChange == null ? void 0 : onChange({ isChecked: nextChecked, value });
      group == null ? void 0 : group.onChildChange(value, nextChecked);
    }
    const showAlert = isInvalid && isInlineError;
    const errorMessage = errorMsg || "Error";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: classes,
        "aria-busy": resolvedLoading || void 0,
        "data-excluded": isExcluded || void 0,
        "data-indeterminate": isIndeterminate || void 0,
        ...rest,
        children: [
          /* @__PURE__ */ jsxs("label", { className: "o9ds-checkbox__field", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                id: inputId,
                className: "o9ds-checkbox__input",
                type: "checkbox",
                name: resolvedName,
                value,
                checked: isChecked,
                disabled: resolvedDisabled,
                required: isRequired,
                "aria-invalid": isInvalid || void 0,
                "aria-required": isRequired || void 0,
                "aria-describedby": showAlert ? errorId : void 0,
                onChange: handleChange,
                onFocus,
                onBlur
              }
            ),
            label && /* @__PURE__ */ jsx("span", { className: "o9ds-checkbox__lbl", children: label })
          ] }),
          showAlert && /* @__PURE__ */ jsxs("div", { className: "o9ds-inline-alert o9ds-inline-alert--error", id: errorId, role: "alert", children: [
            /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__ico", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "o9ds-inline-alert__msg", children: errorMessage })
          ] })
        ]
      }
    );
  }
);
export {
  O9Checkbox as default
};
//# sourceMappingURL=index17.js.map
