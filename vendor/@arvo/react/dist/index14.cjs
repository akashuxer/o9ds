"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const useTooltip = require("./index10.cjs");
const useControllableState = require("./index49.cjs");
const ArvoIconButton = react.forwardRef(
  function ArvoIconButton2({
    variant = "primary",
    size = "md",
    type = "button",
    icon,
    selectedIcon,
    tooltip,
    isDisabled = false,
    isSelected: selectedProp,
    defaultSelected = false,
    isToggle = false,
    onSelectionChange,
    isLoading = false,
    className,
    onClick,
    onKeyDown,
    ...rest
  }, ref) {
    const internalRef = react.useRef(null);
    const tooltipContent = typeof tooltip === "string" ? tooltip : tooltip.content;
    const [isSelected, setSelected] = useControllableState.useControllableState(
      selectedProp,
      defaultSelected
    );
    useTooltip.useTooltip({ triggerRef: internalRef, tooltip });
    const classes = [
      "arvo-icon-btn",
      `arvo-btn--${variant}`,
      `arvo-btn--${size}`,
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
    const renderedIcon = isSelected && selectedIcon ? selectedIcon : icon;
    return /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        ref: mergeRefs,
        type,
        disabled: isDisabled,
        ...rest,
        className: classes,
        "aria-label": tooltipContent,
        "aria-busy": isLoading ? true : void 0,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        ...ariaPressedProp,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: `arvo-btn__ico o9con o9con-${renderedIcon}`,
            "aria-hidden": "true"
          }
        )
      }
    );
  }
);
exports.ArvoIconButton = ArvoIconButton;
exports.default = ArvoIconButton;
//# sourceMappingURL=index14.cjs.map
