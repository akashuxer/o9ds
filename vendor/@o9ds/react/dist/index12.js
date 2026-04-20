import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { useTooltip } from "./index10.js";
const O9IconButton = forwardRef(
  function O9IconButton2({
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
    const internalRef = useRef(null);
    const tooltipContent = typeof tooltip === "string" ? tooltip : tooltip.content;
    useTooltip({ triggerRef: internalRef, tooltip });
    const classes = [
      "o9ds-icon-btn",
      `o9ds-btn--${variant}`,
      `o9ds-btn--${size}`,
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
    return /* @__PURE__ */ jsx(
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
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `o9ds-btn__ico o9con o9con-${icon}`,
            "aria-hidden": "true"
          }
        )
      }
    );
  }
);
export {
  O9IconButton as default
};
//# sourceMappingURL=index12.js.map
