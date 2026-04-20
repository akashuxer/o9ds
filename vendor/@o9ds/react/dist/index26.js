import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { useTooltip } from "./index10.js";
const O9ButtonLink = forwardRef(
  function O9ButtonLink2({
    variant = "primary",
    size = "md",
    label,
    href,
    icon,
    isDisabled = false,
    isFullWidth = false,
    isLoading = false,
    tooltip,
    target,
    rel,
    className,
    onClick,
    ...rest
  }, ref) {
    const internalRef = useRef(null);
    useTooltip({ triggerRef: internalRef, tooltip });
    const needsRel = target === "_blank";
    const effectiveRel = needsRel ? rel ?? "noopener noreferrer" : rel;
    const classes = [
      "o9ds-btn",
      `o9ds-btn--${variant}`,
      `o9ds-btn--${size}`,
      isFullWidth ? "o9ds-btn--full-width" : "",
      isDisabled ? "is-disabled" : "",
      isLoading ? "loading" : "",
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
    const mergeRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
    return /* @__PURE__ */ jsxs(
      "a",
      {
        ref: mergeRefs,
        href: isDisabled ? void 0 : href,
        target: isDisabled ? void 0 : target,
        rel: isDisabled ? void 0 : effectiveRel,
        className: classes,
        "aria-disabled": isDisabled ? true : void 0,
        "aria-busy": isLoading ? true : void 0,
        tabIndex: isDisabled ? 0 : void 0,
        onClick: handleClick,
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
  O9ButtonLink as default
};
//# sourceMappingURL=index26.js.map
