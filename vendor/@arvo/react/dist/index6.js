import { useContext } from "react";
import { overlayHub } from "@arvo/core";
import { OverlayContext } from "./index3.js";
function useOverlay() {
  const hub = useContext(OverlayContext) ?? overlayHub;
  return {
    open: (entry) => hub.open(entry),
    close: (id) => hub.close(id),
    closeAll: (opts) => hub.closeAll(opts),
    isOpen: (id) => hub.isOpen(id),
    getContainer: () => hub.getContainer()
  };
}
export {
  useOverlay
};
//# sourceMappingURL=index6.js.map
