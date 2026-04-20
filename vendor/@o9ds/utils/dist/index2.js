function createFormLabel(options) {
  const label = document.createElement("label");
  label.className = "o9ds-form-lbl";
  if (options.for) {
    label.setAttribute("for", options.for);
  }
  const textNode = document.createTextNode(options.text);
  label.appendChild(textNode);
  if (options.isRequired) {
    label.classList.add("o9ds-form-lbl--required");
    const asterisk = document.createElement("span");
    asterisk.className = "o9ds-form-lbl__req";
    asterisk.setAttribute("aria-hidden", "true");
    asterisk.textContent = "*";
    label.appendChild(asterisk);
  }
  return label;
}
function updateFormLabel(label, options) {
  if (options.text !== void 0) {
    label.childNodes[0].textContent = options.text;
  }
  if (options.isRequired !== void 0) {
    label.classList.toggle("o9ds-form-lbl--required", options.isRequired);
    const existing = label.querySelector(".o9ds-form-lbl__req");
    if (options.isRequired && !existing) {
      const asterisk = document.createElement("span");
      asterisk.className = "o9ds-form-lbl__req";
      asterisk.setAttribute("aria-hidden", "true");
      asterisk.textContent = "*";
      label.appendChild(asterisk);
    } else if (!options.isRequired && existing) {
      existing.remove();
    }
  }
}
export {
  createFormLabel,
  updateFormLabel
};
//# sourceMappingURL=index2.js.map
