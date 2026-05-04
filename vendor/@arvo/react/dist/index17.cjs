"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const CheckboxGroup = require("./index18.cjs");
const useControllableState = require("./index41.cjs");
const ArvoCheckbox = react.forwardRef(
  function ArvoCheckbox2({
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
    errorDisplay = "inline",
    isLoading = false,
    onChange,
    onFocus,
    onBlur,
    className,
    ...rest
  }, ref) {
    const uid = react.useId();
    const inputId = `arvo-checkbox-${uid}`;
    const errorId = `arvo-checkbox-err-${uid}`;
    const inputRef = react.useRef(null);
    const [isChecked, setChecked] = useControllableState.useControllableState(checkedProp, defaultChecked);
    const group = react.useContext(CheckboxGroup.CheckboxGroupContext);
    const resolvedSize = group ? group.size : size;
    const resolvedDisabled = isDisabled || (group ? group.isDisabled : false);
    const resolvedReadonly = isReadOnly || (group ? group.isReadOnly : false);
    const resolvedLoading = isLoading || (group ? group.isLoading : false);
    const resolvedName = name ?? (group == null ? void 0 : group.name);
    react.useEffect(() => {
      if (!group || value === "on") return;
      group.registerCheckbox(value, isChecked);
      return () => {
        group.unregisterCheckbox(value);
      };
    }, [value, group == null ? void 0 : group.registerCheckbox, group == null ? void 0 : group.unregisterCheckbox]);
    react.useEffect(() => {
      if (!group || value === "on") return;
      group.registerCheckbox(value, isChecked);
    }, [isChecked]);
    react.useEffect(() => {
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
      "arvo-checkbox",
      `arvo-checkbox--${resolvedSize}`,
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
    const showAlert = isInvalid && errorDisplay === "inline";
    const errorMessage = errorMsg || "Error";
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: classes,
        "aria-busy": resolvedLoading || void 0,
        "data-excluded": isExcluded || void 0,
        "data-indeterminate": isIndeterminate || void 0,
        ...rest,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("label", { className: "arvo-checkbox__field", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                ref: inputRef,
                id: inputId,
                className: "arvo-checkbox__input",
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
            label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-checkbox__lbl", children: label })
          ] }),
          showAlert && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "arvo-inline-alert arvo-inline-alert--error", id: errorId, role: "alert", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__ico", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-inline-alert__msg", children: errorMessage })
          ] })
        ]
      }
    );
  }
);
exports.default = ArvoCheckbox;
//# sourceMappingURL=index17.cjs.map
