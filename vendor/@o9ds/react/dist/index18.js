import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, forwardRef, useId, useRef, useState, useCallback } from "react";
import O9Checkbox from "./index17.js";
const CheckboxGroupContext = createContext(null);
const O9CheckboxGroup = forwardRef(
  function O9CheckboxGroup2({
    label = null,
    hasSelectAll = false,
    orientation = "vertical",
    labelPosition = "top",
    size = "lg",
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    isInvalid = false,
    errorMsg = null,
    isLoading = false,
    name,
    onChange,
    className,
    children,
    ...rest
  }, ref) {
    const uid = useId();
    const labelId = `o9ds-cb-grp-lbl-${uid}`;
    const errorId = `o9ds-cb-grp-err-${uid}`;
    const childStateRef = useRef(/* @__PURE__ */ new Map());
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [selectAllIndeterminate, setSelectAllIndeterminate] = useState(false);
    const recomputeSelectAll = useCallback(() => {
      const states = Array.from(childStateRef.current.values());
      if (states.length === 0) {
        setSelectAllChecked(false);
        setSelectAllIndeterminate(false);
        return;
      }
      const checkedCount = states.filter(Boolean).length;
      setSelectAllChecked(checkedCount === states.length);
      setSelectAllIndeterminate(checkedCount > 0 && checkedCount < states.length);
    }, []);
    const registerCheckbox = useCallback(
      (value, isChecked) => {
        childStateRef.current.set(value, isChecked);
        recomputeSelectAll();
      },
      [recomputeSelectAll]
    );
    const unregisterCheckbox = useCallback(
      (value) => {
        childStateRef.current.delete(value);
        recomputeSelectAll();
      },
      [recomputeSelectAll]
    );
    const fireOnChange = useCallback(() => {
      if (!onChange) return;
      const entries = Array.from(childStateRef.current.entries());
      const values = entries.filter(([, isChecked]) => isChecked).map(([v]) => v);
      const allChecked = entries.length > 0 && entries.every(([, isChecked]) => isChecked);
      onChange({ values, allChecked });
    }, [onChange]);
    const onChildChange = useCallback(
      (value, isChecked) => {
        childStateRef.current.set(value, isChecked);
        recomputeSelectAll();
        fireOnChange();
      },
      [recomputeSelectAll, fireOnChange]
    );
    function handleSelectAllChange({ isChecked }) {
      childStateRef.current.forEach((_, key) => {
        childStateRef.current.set(key, isChecked);
      });
      recomputeSelectAll();
      if (onChange) {
        const entries = Array.from(childStateRef.current.entries());
        const values = entries.filter(([, c]) => c).map(([v]) => v);
        onChange({ values, allChecked: isChecked });
      }
    }
    const contextValue = {
      size,
      isDisabled,
      isReadOnly,
      isLoading,
      name,
      registerCheckbox,
      unregisterCheckbox,
      onChildChange
    };
    const showAlert = isInvalid && !!errorMsg;
    const classes = [
      "o9ds-cb-grp",
      `o9ds-cb-grp--${size}`,
      orientation === "horizontal" && "o9ds-cb-grp--horizontal",
      labelPosition === "start" && "o9ds-cb-grp--label-start",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      isInvalid && "has-error",
      className
    ].filter(Boolean).join(" ");
    const labelClasses = [
      "o9ds-form-lbl",
      "o9ds-cb-grp__lbl",
      size === "sm" && "o9ds-form-lbl--sm",
      isRequired && "o9ds-form-lbl--required",
      isDisabled && "is-disabled"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx(CheckboxGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: classes,
        role: "group",
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
          /* @__PURE__ */ jsxs("div", { className: "o9ds-cb-grp__bdy", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "o9ds-cb-grp__items",
                "data-o9ds-loading": isLoading ? "true" : void 0,
                children: [
                  hasSelectAll && /* @__PURE__ */ jsx(
                    O9Checkbox,
                    {
                      label: "Select All",
                      isChecked: selectAllChecked,
                      isIndeterminate: selectAllIndeterminate,
                      size,
                      isDisabled,
                      isReadOnly,
                      isLoading,
                      onChange: handleSelectAllChange
                    }
                  ),
                  children
                ]
              }
            ),
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
  CheckboxGroupContext,
  O9CheckboxGroup as default
};
//# sourceMappingURL=index18.js.map
