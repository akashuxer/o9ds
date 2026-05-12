"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const useControllableState = require("./index49.cjs");
const ArvoButton = react.forwardRef(
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
    const internalRef = react.useRef(null);
    const [isSelected, setSelected] = useControllableState.useControllableState(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
          icon && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: `arvo-btn__ico o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-btn__lbl", children: label })
        ]
      }
    );
  }
);
exports.ArvoButton = ArvoButton;
exports.default = ArvoButton;
//# sourceMappingURL=index13.cjs.map
