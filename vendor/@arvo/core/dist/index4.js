import { getFirstFocusable, getFocusableElements } from "./index2.js";
import { saveFocus, restoreFocus } from "./index3.js";
function createFocusTrap() {
  let _active = false;
  let _options = null;
  let _savedFocus = null;
  function handleKeyDown(event) {
    if (!_active || !_options) return;
    if (event.key === "Tab") {
      const focusable = getFocusableElements(_options.container);
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeEl = document.activeElement;
      if (!_options.container.contains(activeEl)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus({ preventScroll: true });
        return;
      }
      if (event.shiftKey && activeEl === first) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    }
    if (event.key === "Escape" && _options.escapeDeactivates) {
      event.preventDefault();
      trap.deactivate();
    }
  }
  function handleFocusIn(event) {
    if (!_active || !_options || _options.allowOutsideClick) return;
    const target = event.target;
    if (!_options.container.contains(target)) {
      const first = getFirstFocusable(_options.container);
      if (first) first.focus({ preventScroll: true });
    }
  }
  const trap = {
    activate(options) {
      if (_active) {
        trap.deactivate();
      }
      _options = options;
      _active = true;
      _savedFocus = saveFocus();
      document.addEventListener("keydown", handleKeyDown, true);
      document.addEventListener("focusin", handleFocusIn);
      if (options.initialFocus === "none") {
        return;
      }
      if (options.initialFocus !== void 0 && options.initialFocus !== "first" && options.initialFocus instanceof HTMLElement) {
        options.initialFocus.focus({ preventScroll: true });
      } else {
        const first = getFirstFocusable(options.container);
        if (first) first.focus({ preventScroll: true });
      }
    },
    deactivate() {
      if (!_active || !_options) return;
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("focusin", handleFocusIn);
      const shouldRestore = _options.returnFocusOnDeactivate && _savedFocus;
      _active = false;
      _options = null;
      if (shouldRestore) {
        restoreFocus(_savedFocus);
      }
      _savedFocus = null;
    },
    isActive() {
      return _active;
    },
    updateContainerElements() {
    }
  };
  return trap;
}
export {
  createFocusTrap
};
//# sourceMappingURL=index4.js.map
