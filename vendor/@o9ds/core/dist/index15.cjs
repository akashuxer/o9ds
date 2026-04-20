"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const BLOCK = "o9ds-overlay__mask";
function resolveContainer(container) {
  if (!container) return null;
  if (typeof container === "string") {
    return document.querySelector(container);
  }
  return container;
}
function createMask(options = {}) {
  const {
    blur = false,
    container: containerOpt,
    closeOnClick = false,
    zIndex,
    onOutside
  } = options;
  const el = document.createElement("div");
  el.className = BLOCK;
  if (blur) {
    el.classList.add(`${BLOCK}--blur`);
  }
  const containerEl = resolveContainer(containerOpt);
  if (containerEl) {
    el.classList.add(`${BLOCK}--scoped`);
  }
  if (zIndex != null) {
    el.style.zIndex = String(zIndex);
  }
  let pointerHandler = null;
  if (closeOnClick && onOutside) {
    pointerHandler = (e) => onOutside(e);
    el.addEventListener("pointerdown", pointerHandler);
  }
  let hideTimer = null;
  const mask = {
    element: el,
    show() {
      if (hideTimer != null) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      const target = containerEl ?? document.body;
      target.appendChild(el);
      setTimeout(() => {
        el.classList.add(`${BLOCK}--visible`);
      }, 10);
    },
    hide() {
      el.classList.remove(`${BLOCK}--visible`);
      hideTimer = setTimeout(() => {
        el.remove();
        hideTimer = null;
      }, 300);
    },
    destroy() {
      if (hideTimer != null) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      if (pointerHandler) {
        el.removeEventListener("pointerdown", pointerHandler);
        pointerHandler = null;
      }
      el.remove();
    }
  };
  return mask;
}
exports.createMask = createMask;
//# sourceMappingURL=index15.cjs.map
