"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const core = require("@arvo/core");
function useFocusTrap(containerRef, options) {
  const trapRef = react.useRef(null);
  const optionsRef = react.useRef(options);
  optionsRef.current = options;
  react.useEffect(() => {
    if (!trapRef.current) {
      trapRef.current = core.createFocusTrap();
    }
    const trap = trapRef.current;
    if (options.active && containerRef.current) {
      const { active: _active, ...rest } = optionsRef.current;
      trap.activate({ container: containerRef.current, ...rest });
    } else {
      trap.deactivate();
    }
    return () => {
      trap.deactivate();
    };
  }, [
    options.active,
    containerRef,
    options.initialFocus,
    options.returnFocusOnDeactivate,
    options.escapeDeactivates,
    options.allowOutsideClick
  ]);
}
exports.useFocusTrap = useFocusTrap;
//# sourceMappingURL=index7.cjs.map
