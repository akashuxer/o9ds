"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const core = require("@o9ds/core");
const TooltipContext = require("./index5.cjs");
function TooltipProvider({
  config,
  children
}) {
  const manager = react.useMemo(() => {
    const m = core.createTooltipManager();
    if (config) m.configure(config);
    return m;
  }, []);
  react.useEffect(() => {
    if (config) manager.configure(config);
  }, [manager, config]);
  react.useEffect(() => {
    return () => manager.destroy();
  }, [manager]);
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipContext.TooltipContext.Provider, { value: manager, children });
}
exports.TooltipProvider = TooltipProvider;
//# sourceMappingURL=index4.cjs.map
