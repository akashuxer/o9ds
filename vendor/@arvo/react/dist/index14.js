import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { useTooltip } from "./index10.js";
import { useControllableState } from "./index49.js";
const ArvoIconButton = forwardRef(
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
    const internalRef = useRef(null);
    const tooltipContent = typeof tooltip === "string" ? tooltip : tooltip.content;
    const [isSelected, setSelected] = useControllableState(
      selectedProp,
      defaultSelected
    );
    useTooltip({ triggerRef: internalRef, tooltip });
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
            className: `arvo-btn__ico o9con o9con-${renderedIcon}`,
            "aria-hidden": "true"
          }
        )
      }
    );
  }
);
export {
  ArvoIconButton,
  ArvoIconButton as default
};
//# sourceMappingURL=index14.js.map
