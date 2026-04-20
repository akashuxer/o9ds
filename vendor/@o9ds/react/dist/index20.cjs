"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const useControllableState = require("./index40.cjs");
const O9Switch = react.forwardRef(
  function O9Switch2({
    label = null,
    isChecked: checkedProp,
    defaultChecked = false,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    value = "on",
    name,
    labelPosition = "end",
    isLoading = false,
    onChange,
    onFocus,
    onBlur,
    className,
    ...rest
  }, ref) {
    const uid = react.useId();
    const inputId = `o9ds-sw-${uid}`;
    const labelId = label ? `o9ds-sw-lbl-${uid}` : void 0;
    const inputRef = react.useRef(null);
    const [isChecked, setChecked] = useControllableState.useControllableState(checkedProp, defaultChecked);
    const classes = [
      "o9ds-sw",
      labelPosition === "start" && "o9ds-sw--label-start",
      isLoading && "loading",
      isDisabled && "is-disabled",
      isReadOnly && "is-readonly",
      className
    ].filter(Boolean).join(" ");
    const handleChange = react.useCallback(() => {
      if (isDisabled || isLoading || isReadOnly) return;
      const next = !isChecked;
      setChecked(next);
      onChange == null ? void 0 : onChange({ isChecked: next, value });
    }, [isDisabled, isLoading, isReadOnly, onChange, isChecked, value, setChecked]);
    const handleKeyDown = react.useCallback(
      (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (isDisabled || isLoading || isReadOnly) return;
          const next = !isChecked;
          setChecked(next);
          onChange == null ? void 0 : onChange({ isChecked: next, value });
        }
      },
      [isDisabled, isLoading, isReadOnly, onChange, isChecked, value, setChecked]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: classes,
        "aria-busy": isLoading || void 0,
        ...rest,
        children: /* @__PURE__ */ jsxRuntime.jsxs("label", { className: "o9ds-sw__field", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              ref: inputRef,
              id: inputId,
              className: "o9ds-sw__input",
              type: "checkbox",
              role: "switch",
              name,
              value,
              checked: isChecked,
              disabled: isDisabled,
              required: isRequired,
              "aria-checked": isChecked,
              "aria-required": isRequired || void 0,
              "aria-labelledby": labelId,
              onChange: handleChange,
              onKeyDown: handleKeyDown,
              onFocus,
              onBlur
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-sw__track", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-sw__thumb" }) }),
          label && /* @__PURE__ */ jsxRuntime.jsxs("span", { id: labelId, className: "o9ds-sw__lbl", children: [
            label,
            isRequired && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-sw__required", "aria-hidden": "true", children: "*" })
          ] })
        ] })
      }
    );
  }
);
exports.default = O9Switch;
//# sourceMappingURL=index20.cjs.map
