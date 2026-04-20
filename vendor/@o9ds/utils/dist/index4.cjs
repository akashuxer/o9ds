"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const DEFAULT_ERROR_MESSAGE = "Form field value is invalid";
function createInlineAlert(options = {}) {
  const { type = "error", message, id } = options;
  const el = document.createElement("div");
  el.className = `o9ds-inline-alert o9ds-inline-alert--${type}`;
  el.setAttribute("role", "alert");
  if (id) el.id = id;
  const ico = document.createElement("span");
  ico.className = "o9ds-inline-alert__ico";
  ico.setAttribute("aria-hidden", "true");
  el.appendChild(ico);
  const msg = document.createElement("span");
  msg.className = "o9ds-inline-alert__msg";
  msg.textContent = message ?? "";
  el.appendChild(msg);
  return el;
}
function updateInlineAlert(el, options) {
  if (options.type !== void 0) {
    el.className = `o9ds-inline-alert o9ds-inline-alert--${options.type}`;
  }
  if (options.message !== void 0) {
    const msg = el.querySelector(".o9ds-inline-alert__msg");
    if (msg) msg.textContent = options.message;
  }
}
function getDefaultErrorMsg() {
  return DEFAULT_ERROR_MESSAGE;
}
function createInlineErrorIcon(options = {}) {
  const ico = document.createElement("span");
  ico.className = "o9ds-err-ico";
  ico.setAttribute("aria-hidden", "true");
  const tooltip = options.tooltip ?? DEFAULT_ERROR_MESSAGE;
  ico.setAttribute("aria-label", tooltip);
  return ico;
}
function updateInlineErrorIcon(ico, tooltip) {
  ico.setAttribute("aria-label", tooltip);
}
exports.createInlineAlert = createInlineAlert;
exports.createInlineErrorIcon = createInlineErrorIcon;
exports.getDefaultErrorMsg = getDefaultErrorMsg;
exports.updateInlineAlert = updateInlineAlert;
exports.updateInlineErrorIcon = updateInlineErrorIcon;
//# sourceMappingURL=index4.cjs.map
