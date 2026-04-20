"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const core = require("@o9ds/core");
const _O9Tooltip = class _O9Tooltip {
  constructor(element, options, manager) {
    this._element = element;
    this._connector = core.connectTooltip(manager, {
      anchor: element,
      content: options.content,
      placement: options.placement,
      shortcut: options.shortcut
    });
  }
  static initialize(element, options, manager) {
    return new _O9Tooltip(element, { ..._O9Tooltip.DEFAULTS, ...options }, manager ?? core.tooltipManager);
  }
  update(options) {
    this._connector.update({
      content: options.content,
      placement: options.placement,
      shortcut: options.shortcut
    });
  }
  destroy() {
    this._connector.destroy();
  }
  get element() {
    return this._element;
  }
};
_O9Tooltip.DEFAULTS = {};
let O9Tooltip = _O9Tooltip;
exports.O9Tooltip = O9Tooltip;
//# sourceMappingURL=Tooltip.cjs.map
