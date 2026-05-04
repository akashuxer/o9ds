import { prefersReducedMotion } from "./index10.js";
const FALLBACK_MS = 500;
function runTransition(element, phase, options) {
  return new Promise((resolve) => {
    var _a;
    if (prefersReducedMotion()) {
      (_a = options.onComplete) == null ? void 0 : _a.call(options);
      resolve();
      return;
    }
    const typeClass = `arvo-${options.type}`;
    const fromClass = `arvo-${phase}-from`;
    const activeClass = `arvo-${phase}-active`;
    const toClass = `arvo-${phase}-to`;
    element.classList.add(fromClass, typeClass);
    if (options.duration !== void 0) {
      element.style.transitionDuration = `${options.duration}ms`;
    }
    if (options.easing !== void 0) {
      element.style.transitionTimingFunction = options.easing;
    }
    void element.offsetHeight;
    element.classList.remove(fromClass);
    element.classList.add(activeClass, toClass);
    let settled = false;
    function cleanup() {
      var _a2;
      element.classList.remove(activeClass, toClass, typeClass);
      if (options.duration !== void 0) {
        element.style.removeProperty("transition-duration");
      }
      if (options.easing !== void 0) {
        element.style.removeProperty("transition-timing-function");
      }
      (_a2 = options.onComplete) == null ? void 0 : _a2.call(options);
      resolve();
    }
    const onEnd = (event) => {
      if (event.target !== element || settled) return;
      settled = true;
      element.removeEventListener("transitionend", onEnd);
      window.clearTimeout(timer);
      cleanup();
    };
    element.addEventListener("transitionend", onEnd);
    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      element.removeEventListener("transitionend", onEnd);
      cleanup();
    }, (options.duration ?? FALLBACK_MS) + 50);
  });
}
function enter(options) {
  return runTransition(options.element, "enter", options);
}
function exit(options) {
  return runTransition(options.element, "exit", options);
}
export {
  enter,
  exit
};
//# sourceMappingURL=index9.js.map
