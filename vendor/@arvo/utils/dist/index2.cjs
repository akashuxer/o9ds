"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function createFormLabel(options) {
  const tag = options.as === "span" ? "span" : "label";
  const el = document.createElement(tag);
  el.className = "arvo-form-lbl";
  if (tag === "label" && options.for) {
    el.setAttribute("for", options.for);
  }
  el.appendChild(document.createTextNode(options.text));
  if (options.isRequired) {
    el.classList.add("arvo-form-lbl--required");
    const asterisk = document.createElement("span");
    asterisk.className = "arvo-form-lbl__req";
    asterisk.setAttribute("aria-hidden", "true");
    asterisk.textContent = "*";
    el.appendChild(asterisk);
  }
  if (options.isDisabled) {
    el.classList.add("is-disabled");
  }
  if (options.isInvalid) {
    el.classList.add("is-invalid");
  }
  return el;
}
exports.createFormLabel = createFormLabel;
//# sourceMappingURL=index2.cjs.map
