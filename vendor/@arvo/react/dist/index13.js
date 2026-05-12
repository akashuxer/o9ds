import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { useControllableState } from "./index49.js";
const ArvoButton = forwardRef(
  function ArvoButton2({
    variant = "primary",
    size = "md",
    type = "button",
    label,
    icon,
    isDisabled = false,
    isSelected: selectedProp,
    defaultSelected = false,
    isToggle = false,
    onSelectionChange,
    isFullWidth = false,
    isLoading = false,
    className,
    onClick,
    onKeyDown,
    ...rest
  }, ref) {
    const internalRef = useRef(null);
    const [isSelected, setSelected] = useControllableState(
      selectedProp,
      defaultSelected
    );
    const classes = [
      "arvo-btn",
      `arvo-btn--${variant}`,
      `arvo-btn--${size}`,
      isFullWidth ? "arvo-btn--full-width" : "",
      isLoading ? "loading" : "",
      isSelected ? "active" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    const blocked = isDisabled || isLoading;
    const handleClick = (e) => {
      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (isToggle) {
        const next = !isSelected;
        setSelected(next);
        onSelectionChange == null ? void 0 : onSelectionChange(next);
      }
      onClick == null ? void 0 : onClick(e);
    };
    const handleKeyDown = (e) => {
      if (blocked && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    };
    const showAriaPressed = isToggle || selectedProp !== void 0;
    const ariaPressedProp = showAriaPressed ? { "aria-pressed": isSelected } : {};
    const mergeRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref: mergeRefs,
        type,
        className: classes,
        disabled: isDisabled,
        "aria-busy": isLoading ? true : void 0,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        ...ariaPressedProp,
        ...rest,
        children: [
          icon && /* @__PURE__ */ jsx(
            "span",
            {
              className: `arvo-btn__ico o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "arvo-btn__lbl", children: label })
        ]
      }
    );
  }
);
export {
  ArvoButton,
  ArvoButton as default
};
//# sourceMappingURL=index13.js.map
