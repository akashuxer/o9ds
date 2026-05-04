import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useState, useCallback, useRef } from "react";
import { ArvoActionMenu } from "./index31.js";
import { useTooltip } from "./index10.js";
const ArvoDropdownIconButton = forwardRef(
  function ArvoDropdownIconButton2({
    icon,
    tooltip,
    variant = "primary",
    size = "md",
    isCompact = false,
    isDisabled = false,
    isLoading = false,
    items,
    search,
    placement = "bottom-end",
    maxHeight,
    hasGroupDividers = true,
    closeOnSelect = true,
    menuSize = "md",
    className,
    onSelect,
    onOpen,
    onClose,
    onOpenChange,
    onClick,
    onFocus,
    onBlur,
    ...rest
  }, ref) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenChange = useCallback(
      (isOpen2) => {
        setIsOpen(isOpen2);
        onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      },
      [onOpenChange]
    );
    const tooltipContent = typeof tooltip === "string" ? tooltip : tooltip.content;
    const triggerRefInternal = useRef(null);
    useTooltip({ triggerRef: triggerRefInternal, tooltip });
    const mergeRef = useCallback(
      (node) => {
        triggerRefInternal.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );
    const triggerClasses = [
      "arvo-dd-icon-btn",
      "arvo-btn",
      `arvo-btn--${variant}`,
      `arvo-btn--${size}`,
      isCompact && "arvo-dd-icon-btn--compact",
      isOpen && "open",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    const triggerElement = /* @__PURE__ */ jsxs(
      "button",
      {
        ref: mergeRef,
        type: "button",
        ...rest,
        className: triggerClasses,
        disabled: isDisabled,
        "aria-label": tooltipContent,
        "aria-busy": isLoading || void 0,
        onClick,
        onFocus,
        onBlur,
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `arvo-dd-icon-btn__icon o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          !isCompact && /* @__PURE__ */ jsx(
            "span",
            {
              className: "arvo-dd-icon-btn__caret o9con o9con-angle-down",
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
    return /* @__PURE__ */ jsx(
      ArvoActionMenu,
      {
        trigger: triggerElement,
        items,
        size: menuSize,
        placement,
        search,
        maxHeight,
        hasGroupDividers,
        closeOnSelect,
        isDisabled: isDisabled || isLoading,
        isLoading: false,
        onOpen,
        onClose,
        onSelect,
        onOpenChange: handleOpenChange
      }
    );
  }
);
export {
  ArvoDropdownIconButton as default
};
//# sourceMappingURL=index37.js.map
