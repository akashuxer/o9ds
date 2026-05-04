"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const core = require("@arvo/core");
function usePositioning(options) {
  const {
    anchorRef,
    floatRef,
    placement = "bottom-start",
    gap = 2,
    enabled = true,
    width,
    observeContainerSelector
  } = options;
  const [position, setPosition] = react.useState(null);
  const watcherRef = react.useRef(null);
  const optionsRef = react.useRef({
    placement,
    gap,
    width,
    observeContainerSelector
  });
  optionsRef.current = { placement, gap, width, observeContainerSelector };
  const update = react.useCallback(() => {
    if (watcherRef.current) {
      watcherRef.current.update();
    } else if (anchorRef.current && floatRef.current) {
      setPosition(
        core.computePosition(anchorRef.current, floatRef.current, optionsRef.current)
      );
    }
  }, [anchorRef, floatRef]);
  react.useLayoutEffect(() => {
    var _a;
    if (!enabled) {
      (_a = watcherRef.current) == null ? void 0 : _a.destroy();
      watcherRef.current = null;
      setPosition(null);
      return;
    }
    const anchor = anchorRef.current;
    const float = floatRef.current;
    if (!anchor || !float) return;
    const watcherOpts = {
      placement,
      gap,
      width,
      observeContainerSelector
    };
    setPosition(core.computePosition(anchor, float, watcherOpts));
    const watcher = core.createPositionWatcher(anchor, float, watcherOpts, setPosition);
    watcherRef.current = watcher;
    return () => {
      watcher.destroy();
      watcherRef.current = null;
    };
  }, [anchorRef, floatRef, enabled, placement, gap, width, observeContainerSelector]);
  return { position, update };
}
exports.usePositioning = usePositioning;
//# sourceMappingURL=index9.cjs.map
