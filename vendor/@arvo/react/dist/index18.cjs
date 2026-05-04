"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const Checkbox = require("./index17.cjs");
const CheckboxGroupContext = react.createContext(null);
const ArvoCheckboxGroup = react.forwardRef(
  function ArvoCheckboxGroup2({
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
    const uid = react.useId();
    const labelId = `arvo-cb-grp-lbl-${uid}`;
    const errorId = `arvo-cb-grp-err-${uid}`;
    const childStateRef = react.useRef(/* @__PURE__ */ new Map());
    const [selectAllChecked, setSelectAllChecked] = react.useState(false);
    const [selectAllIndeterminate, setSelectAllIndeterminate] = react.useState(false);
    const recomputeSelectAll = react.useCallback(() => {
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
    const registerCheckbox = react.useCallback(
      (value, isChecked) => {
        childStateRef.current.set(value, isChecked);
        recomputeSelectAll();
      },
      [recomputeSelectAll]
    );
    const unregisterCheckbox = react.useCallback(
      (value) => {
        childStateRef.current.delete(value);
        recomputeSelectAll();
      },
      [recomputeSelectAll]
    );
    const fireOnChange = react.useCallback(() => {
      if (!onChange) return;
      const entries = Array.from(childStateRef.current.entries());
      const values = entries.filter(([, isChecked]) => isChecked).map(([v]) => v);
      const allChecked = entries.length > 0 && entries.every(([, isChecked]) => isChecked);
      onChange({ values, allChecked });
    }, [onChange]);
    const onChildChange = react.useCallback(
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
      "arvo-cb-grp",
      `arvo-cb-grp--${size}`,
      orientation === "horizontal" && "arvo-cb-grp--horizontal",
      labelPosition === "start" && "arvo-cb-grp--label-start",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      isInvalid && "has-error",
      className
    ].filter(Boolean).join(" ");
    const labelClasses = [
      "arvo-form-lbl",
      "arvo-cb-grp__lbl",
      size === "sm" && "arvo-form-lbl--sm",
      isRequired && "arvo-form-lbl--required",
      isDisabled && "is-disabled"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsx(CheckboxGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsxs(
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
          label && /* @__PURE__ */ jsxRuntime.jsxs("span", { id: labelId, className: labelClasses, children: [
            label,
            isRequired && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-form-lbl__req", "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-cb-grp__bdy", children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                className: "arvo-cb-grp__items",
                "data-arvo-loading": isLoading ? "true" : void 0,
                children: [
                  hasSelectAll && /* @__PURE__ */ jsxRuntime.jsx(
                    Checkbox.default,
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
            showAlert && /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                className: "arvo-inline-alert arvo-inline-alert--error",
                id: errorId,
                role: "alert",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__ico", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__msg", children: errorMsg })
                ]
              }
            )
          ] })
        ]
      }
    ) });
  }
);
exports.CheckboxGroupContext = CheckboxGroupContext;
exports.default = ArvoCheckboxGroup;
//# sourceMappingURL=index18.cjs.map
