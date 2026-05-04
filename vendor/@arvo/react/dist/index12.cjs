"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const useTooltip = require("./index10.cjs");
const ArvoIconButton = react.forwardRef(
  function ArvoIconButton2({
    variant = "primary",
    size = "md",
    type = "button",
    icon,
    tooltip,
    isDisabled = false,
    isSelected,
    isLoading = false,
    className,
    onClick,
    onKeyDown,
    ...rest
  }, ref) {
    const internalRef = react.useRef(null);
    const tooltipContent = typeof tooltip === "string" ? tooltip : tooltip.content;
    useTooltip.useTooltip({ triggerRef: internalRef, tooltip });
    const classes = [
      "arvo-icon-btn",
      `arvo-btn--${variant}`,
      `arvo-btn--${size}`,
      isLoading ? "loading" : "",
      isSelected === true ? "active" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    const blocked = isDisabled || isLoading;
    const handleClick = (e) => {
      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        return;
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
    const ariaPressedProp = isSelected !== void 0 ? { "aria-pressed": isSelected } : {};
    const mergeRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
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
            className: `arvo-btn__ico o9con o9con-${icon}`,
            "aria-hidden": "true"
          }
        )
      }
    );
  }
);
exports.default = ArvoIconButton;
//# sourceMappingURL=index12.cjs.map
