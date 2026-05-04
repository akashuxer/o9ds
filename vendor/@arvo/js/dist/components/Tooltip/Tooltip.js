import { connectTooltip, tooltipManager } from "@arvo/core";
const _ArvoTooltip = class _ArvoTooltip {
  constructor(element, options, manager) {
    this._element = element;
    this._connector = connectTooltip(manager, {
      anchor: element,
      content: options.content,
      placement: options.placement,
      shortcut: options.shortcut
    });
  }
  static initialize(element, options, manager) {
    return new _ArvoTooltip(element, { ..._ArvoTooltip.DEFAULTS, ...options }, manager ?? tooltipManager);
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
_ArvoTooltip.DEFAULTS = {};
let ArvoTooltip = _ArvoTooltip;
export {
  ArvoTooltip
};
//# sourceMappingURL=Tooltip.js.map
