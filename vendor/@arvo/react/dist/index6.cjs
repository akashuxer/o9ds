"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const core = require("@arvo/core");
const OverlayContext = require("./index3.cjs");
function useOverlay() {
  const hub = react.useContext(OverlayContext.OverlayContext) ?? core.overlayHub;
  return {
    open: (entry) => hub.open(entry),
    close: (id) => hub.close(id),
    closeAll: (opts) => hub.closeAll(opts),
    isOpen: (id) => hub.isOpen(id),
    getContainer: () => hub.getContainer()
  };
}
exports.useOverlay = useOverlay;
//# sourceMappingURL=index6.cjs.map
