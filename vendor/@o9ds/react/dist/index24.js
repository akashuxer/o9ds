import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import O9Button from "./index11.js";
import O9IconButton from "./index12.js";
import O9Indicator from "./index44.js";
const VALID_VARIANTS = ["primary", "secondary"];
const O9FabButton = forwardRef(
  function O9FabButton2({
    variant = "primary",
    icon,
    label,
    isDisabled = false,
    isLoading = false,
    indicator = false,
    indicatorSize = "lg",
    zIndex,
    tooltip,
    className,
    onClick,
    onFocus,
    onBlur
  }, ref) {
    const btnRef = useRef(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        var _a;
        return (_a = btnRef.current) == null ? void 0 : _a.focus();
      },
      buttonElement: btnRef.current
    }));
    const safeVariant = VALID_VARIANTS.includes(variant) ? variant : "primary";
    const isWithLabel = !!label;
    const blocked = isDisabled || isLoading;
    const showIndicator = indicator !== false && !blocked;
    const wrapperClasses = [
      "o9ds-fab-btn",
      `o9ds-fab-btn--${safeVariant}`,
      isWithLabel ? "o9ds-fab-btn--with-label" : "o9ds-fab-btn--icon-only",
      isDisabled ? "is-disabled" : "",
      isLoading ? "loading" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    const wrapperStyle = zIndex !== void 0 ? { zIndex } : void 0;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: wrapperClasses,
        style: wrapperStyle,
        "aria-busy": isLoading ? true : void 0,
        children: [
          isWithLabel ? /* @__PURE__ */ jsx(
            O9Button,
            {
              ref: btnRef,
              variant: safeVariant,
              size: "md",
              icon,
              label,
              isDisabled,
              isLoading,
              tooltip,
              onClick,
              onFocus,
              onBlur
            }
          ) : /* @__PURE__ */ jsx(
            O9IconButton,
            {
              ref: btnRef,
              variant: safeVariant,
              size: "lg",
              icon,
              tooltip: tooltip ?? "",
              isDisabled,
              isLoading,
              onClick,
              onFocus,
              onBlur
            }
          ),
          showIndicator && /* @__PURE__ */ jsx(O9Indicator, { variant: indicator, size: indicatorSize })
        ]
      }
    );
  }
);
export {
  O9FabButton as default
};
//# sourceMappingURL=index24.js.map
