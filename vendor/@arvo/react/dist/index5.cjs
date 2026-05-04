"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const TooltipContext = react.createContext(null);
function useTooltipManager() {
  return react.useContext(TooltipContext);
}
exports.TooltipContext = TooltipContext;
exports.useTooltipManager = useTooltipManager;
//# sourceMappingURL=index5.cjs.map
