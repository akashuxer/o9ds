import { useRef, useEffect } from "react";
import { createFocusTrap } from "@arvo/core";
function useFocusTrap(containerRef, options) {
  const trapRef = useRef(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;
  useEffect(() => {
    if (!trapRef.current) {
      trapRef.current = createFocusTrap();
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
export {
  useFocusTrap
};
//# sourceMappingURL=index7.js.map
