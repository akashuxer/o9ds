"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const useTooltip = require("./index10.cjs");
const O9Tooltip = react.forwardRef(
  function O9Tooltip2({ content, placement, shortcut, children }, forwardedRef) {
    const internalRef = react.useRef(null);
    const config = { content, placement, shortcut };
    useTooltip.useTooltip({
      triggerRef: internalRef,
      tooltip: config
    });
    if (!react.isValidElement(children)) return children;
    return react.cloneElement(children, {
      ref: (node) => {
        internalRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
        const originalRef = children.ref;
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object" && "current" in originalRef) {
          originalRef.current = node;
        }
      }
    });
  }
);
exports.O9Tooltip = O9Tooltip;
//# sourceMappingURL=index39.cjs.map
