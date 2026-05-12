"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const ActionMenu = require("./index35.cjs");
const useTooltip = require("./index10.cjs");
const ArvoSplitIconButton = react.forwardRef(function ArvoSplitIconButton2({
  icon,
  tooltip,
  variant = "primary",
  size = "md",
  isDisabled = false,
  isActionDisabled = false,
  isTriggerDisabled = false,
  isLoading = false,
  items,
  search,
  placement = "bottom-end",
  maxHeight,
  hasGroupDividers = true,
  closeOnSelect = true,
  triggerLabel = "Show options",
  className,
  onAction,
  onSelect,
  onOpen,
  onClose,
  onOpenChange,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  ...rest
}, ref) {
  const wrapperRef = react.useRef(null);
  const actionRef = react.useRef(null);
  const triggerRef = react.useRef(null);
  const menuSize = size === "sm" ? "sm" : "md";
  react.useEffect(() => {
    if (process.env.NODE_ENV !== "production" && !tooltip) {
      console.warn(
        "ArvoSplitIconButton: `tooltip` is required so the action segment has an accessible name (it is also rendered as the visual tooltip)."
      );
    }
  }, [tooltip]);
  useTooltip.useTooltip({ triggerRef: actionRef, tooltip });
  const tooltipLabel = typeof tooltip === "string" ? tooltip : tooltip != null ? tooltip.content : void 0;
  const [isOpen, setIsOpen] = react.useState(false);
  const dispatchWrapperEvent = react.useCallback(
    (name, detail, cancelable = true) => {
      var _a;
      (_a = wrapperRef.current) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent(name, { bubbles: true, cancelable, detail })
      );
    },
    []
  );
  const handleOpenChange = react.useCallback(
    (next) => {
      setIsOpen(next);
      if (next) {
        dispatchWrapperEvent("split-icon-btn:open", {});
      } else {
        dispatchWrapperEvent("split-icon-btn:close", {});
      }
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [dispatchWrapperEvent, onOpenChange]
  );
  const handleMenuSelect = react.useCallback(
    (item, index) => {
      dispatchWrapperEvent("split-icon-btn:select", { item, index });
      return onSelect == null ? void 0 : onSelect(item, index);
    },
    [dispatchWrapperEvent, onSelect]
  );
  const actionDisabled = isDisabled || isActionDisabled || isLoading;
  const triggerDisabled = isDisabled || isTriggerDisabled || isLoading;
  const handleActionClick = react.useCallback(
    (event) => {
      if (actionDisabled) return;
      dispatchWrapperEvent("split-icon-btn:action", {});
      onAction == null ? void 0 : onAction(event);
      onClick == null ? void 0 : onClick(event);
    },
    [actionDisabled, dispatchWrapperEvent, onAction, onClick]
  );
  const handleActionKeyDown = react.useCallback(
    (event) => {
      var _a;
      onKeyDown == null ? void 0 : onKeyDown(event);
      if (event.defaultPrevented) return;
      if ((event.key === "ArrowDown" || event.altKey && event.key === "ArrowDown") && !actionDisabled) {
        event.preventDefault();
        (_a = triggerRef.current) == null ? void 0 : _a.click();
      }
    },
    [actionDisabled, onKeyDown]
  );
  const mergeActionRef = react.useCallback(
    (node) => {
      actionRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );
  const wrapperClasses = [
    "arvo-split-icon-btn",
    `arvo-split-icon-btn--${variant}`,
    `arvo-split-icon-btn--${size}`,
    isOpen && "open",
    isLoading && "loading",
    className
  ].filter(Boolean).join(" ");
  const actionSegmentClasses = [
    "arvo-icon-btn",
    `arvo-btn--${variant}`,
    `arvo-btn--${size}`,
    "arvo-split-icon-btn__action"
  ].join(" ");
  const triggerSegmentClasses = [
    "arvo-btn",
    `arvo-btn--${variant}`,
    `arvo-btn--${size}`,
    "arvo-split-icon-btn__trigger"
  ].join(" ");
  const triggerElement = /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      type: "button",
      className: triggerSegmentClasses,
      disabled: triggerDisabled,
      "aria-label": triggerLabel,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: "arvo-split-icon-btn__caret o9con o9con-angle-down",
          "aria-hidden": "true"
        }
      )
    }
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref: wrapperRef,
      className: wrapperClasses,
      role: "group",
      "aria-disabled": isDisabled || void 0,
      "aria-busy": isLoading || void 0,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            ...rest,
            ref: mergeActionRef,
            type: "button",
            className: actionSegmentClasses,
            disabled: actionDisabled,
            "aria-label": tooltipLabel,
            onClick: handleActionClick,
            onKeyDown: handleActionKeyDown,
            onFocus,
            onBlur,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: `arvo-split-icon-btn__icon o9con o9con-${icon}`,
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
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
            isDisabled: isDisabled || isTriggerDisabled || isLoading,
            isLoading: false,
            onOpen,
            onClose,
            onSelect: handleMenuSelect,
            onOpenChange: handleOpenChange
          }
        )
      ]
    }
  );
});
exports.default = ArvoSplitIconButton;
//# sourceMappingURL=index42.cjs.map
