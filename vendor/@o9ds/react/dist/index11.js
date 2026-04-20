import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { useTooltip } from "./index10.js";
const O9Button = forwardRef(
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
    const internalRef = useRef(null);
    useTooltip({ triggerRef: internalRef, tooltip });
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
              className: `o9ds-btn__ico o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "o9ds-btn__lbl", children: label })
        ]
      }
    );
  }
);
export {
  O9Button as default
};
//# sourceMappingURL=index11.js.map
