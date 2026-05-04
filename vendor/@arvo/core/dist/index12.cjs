"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const compute = require("./index11.cjs");
function createPositionWatcher(anchor, float, options, onUpdate) {
  let rafId = null;
  function schedule() {
    if (rafId != null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      onUpdate(compute.computePosition(anchor, float, options));
    });
  }
  const ro = new ResizeObserver(schedule);
  ro.observe(anchor);
  let containerRo = null;
  if (options.observeContainerSelector) {
    const container = anchor.closest(options.observeContainerSelector);
    if (container) {
      containerRo = new ResizeObserver(schedule);
      containerRo.observe(container);
    }
  }
  function onScroll(e) {
    if (e.target instanceof Node && float.contains(e.target)) return;
    schedule();
  }
  window.addEventListener("scroll", onScroll, true);
  window.addEventListener("resize", schedule);
  function update() {
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    onUpdate(compute.computePosition(anchor, float, options));
  }
  function destroy() {
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    ro.disconnect();
    containerRo == null ? void 0 : containerRo.disconnect();
    window.removeEventListener("scroll", onScroll, true);
    window.removeEventListener("resize", schedule);
  }
  return { update, destroy };
}
exports.createPositionWatcher = createPositionWatcher;
//# sourceMappingURL=index12.cjs.map
