"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const useTooltip = require("./index10.cjs");
const O9Button = react.forwardRef(
  function O9Button2({
    variant = "primary",
    size = "md",
    type = "button",
    label,
    icon,
    isDisabled = false,
    isSelected,
    isFullWidth = false,
    isLoading = false,
    tooltip,
    className,
    onClick,
    onKeyDown,
    ...rest
  }, ref) {
    const internalRef = react.useRef(null);
    useTooltip.useTooltip({ triggerRef: internalRef, tooltip });
    const classes = [
      "o9ds-btn",
      `o9ds-btn--${variant}`,
      `o9ds-btn--${size}`,
      isFullWidth ? "o9ds-btn--full-width" : "",
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
              className: `o9ds-btn__ico o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-btn__lbl", children: label })
        ]
      }
    );
  }
);
exports.default = O9Button;
//# sourceMappingURL=index11.cjs.map
