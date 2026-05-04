const VALID_VARIANTS = ["unsaved", "new", "unread"];
const VALID_SIZES = ["sm", "lg"];
function createIndicator(options) {
  const variant = VALID_VARIANTS.includes(options.variant) ? options.variant : "unsaved";
  const size = options.size && VALID_SIZES.includes(options.size) ? options.size : "lg";
  const el = document.createElement("span");
  el.className = `arvo-indicator arvo-indicator--${variant} arvo-indicator--${size}`;
  el.setAttribute("aria-hidden", "true");
  return el;
}
function updateIndicator(el, options) {
  if (options.variant !== void 0) {
    const variant = VALID_VARIANTS.includes(options.variant) ? options.variant : "unsaved";
    VALID_VARIANTS.forEach((v) => el.classList.remove(`arvo-indicator--${v}`));
    el.classList.add(`arvo-indicator--${variant}`);
  }
  if (options.size !== void 0) {
    const size = VALID_SIZES.includes(options.size) ? options.size : "lg";
    VALID_SIZES.forEach((s) => el.classList.remove(`arvo-indicator--${s}`));
    el.classList.add(`arvo-indicator--${size}`);
  }
}
function removeIndicator(el) {
  el == null ? void 0 : el.remove();
  return null;
}
export {
  createIndicator,
  removeIndicator,
  updateIndicator
};
//# sourceMappingURL=index5.js.map
