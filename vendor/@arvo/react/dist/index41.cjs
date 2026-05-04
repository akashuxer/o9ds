"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
function useControllableState(controlledValue, defaultValue) {
  const isControlledRef = react.useRef(controlledValue !== void 0);
  isControlledRef.current = controlledValue !== void 0;
  const [internal, setInternal] = react.useState(defaultValue);
  const value = controlledValue !== void 0 ? controlledValue : internal;
  const setValue = react.useCallback(
    (next) => {
      if (!isControlledRef.current) {
        setInternal(next);
      }
    },
    []
  );
  return [value, setValue];
}
exports.useControllableState = useControllableState;
//# sourceMappingURL=index41.cjs.map
