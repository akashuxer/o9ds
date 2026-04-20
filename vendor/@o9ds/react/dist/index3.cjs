"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const OverlayContext = react.createContext(null);
function useOverlayContext() {
  const hub = react.useContext(OverlayContext);
  if (!hub) {
    throw new Error("useOverlay must be used inside <OverlayProvider>");
  }
  return hub;
}
exports.OverlayContext = OverlayContext;
exports.useOverlayContext = useOverlayContext;
//# sourceMappingURL=index3.cjs.map
