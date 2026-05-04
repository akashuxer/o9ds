"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const ActionMenu = require("./index31.cjs");
const useTooltip = require("./index10.cjs");
const ArvoDropdownIconButton = react.forwardRef(
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
    const [isOpen, setIsOpen] = react.useState(false);
    const handleOpenChange = react.useCallback(
      (isOpen2) => {
        setIsOpen(isOpen2);
        onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      },
      [onOpenChange]
    );
    const tooltipContent = typeof tooltip === "string" ? tooltip : tooltip.content;
    const triggerRefInternal = react.useRef(null);
    useTooltip.useTooltip({ triggerRef: triggerRefInternal, tooltip });
    const mergeRef = react.useCallback(
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
    const triggerElement = /* @__PURE__ */ jsxRuntime.jsxs(
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
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: `arvo-dd-icon-btn__icon o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          !isCompact && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: "arvo-dd-icon-btn__caret o9con o9con-angle-down",
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
    return /* @__PURE__ */ jsxRuntime.jsx(
      ActionMenu.ArvoActionMenu,
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
exports.default = ArvoDropdownIconButton;
//# sourceMappingURL=index37.cjs.map
