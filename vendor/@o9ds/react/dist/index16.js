import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useId, useContext } from "react";
import { RadioGroupContext } from "./index19.js";
import { useControllableState } from "./index40.js";
const O9Radio = forwardRef(
  function O9Radio2({
    value,
    name,
    label = null,
    isChecked: checkedProp,
    defaultChecked = false,
    isDisabled = false,
    isRequired = false,
    isReadOnly = false,
    isInvalid = false,
    isLoading = false,
    size = "lg",
    errorMsg = null,
    onChange,
    onFocus,
    onBlur,
    className,
    ...rest
  }, ref) {
    const uid = useId();
    const inputId = `o9ds-radio-${uid}`;
    const errorId = `o9ds-radio-err-${uid}`;
    const [ownChecked, setOwnChecked] = useControllableState(checkedProp, defaultChecked);
    const group = useContext(RadioGroupContext);
    const resolvedName = name ?? (group == null ? void 0 : group.name) ?? "";
    const resolvedSize = group ? group.size : size;
    const resolvedDisabled = isDisabled || (group ? group.isDisabled : false);
    const resolvedReadonly = isReadOnly || (group ? group.isReadOnly : false);
    const resolvedLoading = isLoading || (group ? group.isLoading : false);
    const resolvedChecked = group ? group.selectedValue === value : ownChecked;
    const classes = [
      "o9ds-radio",
      `o9ds-radio--${resolvedSize}`,
      resolvedLoading && "loading",
      resolvedDisabled && "is-disabled",
      resolvedReadonly && "is-readonly",
      isInvalid && "has-error",
      className
    ].filter(Boolean).join(" ");
    function handleChange() {
      if (resolvedDisabled || resolvedLoading || resolvedReadonly) return;
      if (group) {
        group.onChildChange(value);
      } else {
        setOwnChecked(true);
      }
      onChange == null ? void 0 : onChange({ value, name: resolvedName });
    }
    return /* @__PURE__ */ jsxs("div", { ref, className: classes, "aria-busy": resolvedLoading || void 0, ...rest, children: [
      /* @__PURE__ */ jsxs("label", { className: "o9ds-radio__field", htmlFor: inputId, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: inputId,
            className: "o9ds-radio__input",
            type: "radio",
            name: resolvedName,
            value,
            checked: resolvedChecked,
            disabled: resolvedDisabled,
            readOnly: resolvedReadonly,
            required: isRequired,
            "aria-invalid": isInvalid || void 0,
            "aria-required": isRequired || void 0,
            "aria-describedby": isInvalid && errorMsg ? errorId : void 0,
            tabIndex: resolvedReadonly ? -1 : 0,
            onChange: handleChange,
            onFocus,
            onBlur
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "o9ds-radio__control", "aria-hidden": "true" }),
        label && /* @__PURE__ */ jsx("span", { className: "o9ds-radio__text", children: label })
      ] }),
      isInvalid && errorMsg && /* @__PURE__ */ jsxs(
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
    ] });
  }
);
export {
  O9Radio as default
};
//# sourceMappingURL=index16.js.map
