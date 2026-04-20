import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { computePosition, createPositionWatcher } from "@o9ds/core";
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
  const [position, setPosition] = useState(null);
  const watcherRef = useRef(null);
  const optionsRef = useRef({
    placement,
    gap,
    width,
    observeContainerSelector
  });
  optionsRef.current = { placement, gap, width, observeContainerSelector };
  const update = useCallback(() => {
    if (watcherRef.current) {
      watcherRef.current.update();
    } else if (anchorRef.current && floatRef.current) {
      setPosition(
        computePosition(anchorRef.current, floatRef.current, optionsRef.current)
      );
    }
  }, [anchorRef, floatRef]);
  useLayoutEffect(() => {
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
    setPosition(computePosition(anchor, float, watcherOpts));
    const watcher = createPositionWatcher(anchor, float, watcherOpts, setPosition);
    watcherRef.current = watcher;
    return () => {
      watcher.destroy();
      watcherRef.current = null;
    };
  }, [anchorRef, floatRef, enabled, placement, gap, width, observeContainerSelector]);
  return { position, update };
}
export {
  usePositioning
};
//# sourceMappingURL=index9.js.map
