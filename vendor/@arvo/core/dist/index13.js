import { createFocusTrap } from "./index4.js";
import { createBackdropManager } from "./index14.js";
const DEFAULT_CONFIG = {
  containerSelector: "body",
  positionMode: "viewport",
  zIndexBase: 1e3,
  autoCloseOnRouteChange: true,
  autoCloseOnOutsideClick: true,
  maxStack: 0
};
const MODAL_TYPES = /* @__PURE__ */ new Set([
  "modal",
  "side-panel"
]);
const DISPLACED_BY_MODAL = /* @__PURE__ */ new Set([
  "dropdown",
  "popover",
  "action-menu"
]);
function createOverlayHub() {
  let _config = { ...DEFAULT_CONFIG };
  const _stack = [];
  const _traps = /* @__PURE__ */ new Map();
  const _zIndices = /* @__PURE__ */ new Map();
  const _backdrop = createBackdropManager();
  let _onMouseDown = null;
  let _onKeyDown = null;
  let _onPopState = null;
  function zIndexFor(stackIndex) {
    return _config.zIndexBase + stackIndex * 10;
  }
  function isDismissable(entry) {
    return (entry.config.autoCloseOnOutsideClick ?? _config.autoCloseOnOutsideClick) !== false;
  }
  function ensureToastsOnTop() {
    const nonToast = [];
    const toast = [];
    for (const e of _stack) {
      (e.type === "toast" ? toast : nonToast).push(e);
    }
    if (toast.length === 0) return;
    const merged = nonToast.concat(toast);
    for (let i = 0; i < merged.length; i++) _stack[i] = merged[i];
  }
  function refreshZIndices() {
    ensureToastsOnTop();
    for (let i = 0; i < _stack.length; i++) {
      const z = zIndexFor(i);
      _zIndices.set(_stack[i].id, z);
      _stack[i].element.style.zIndex = String(z);
    }
  }
  function stackIds() {
    return _stack.map((e) => e.id);
  }
  function syncBackdrop() {
    const topModal = findTopmostModal();
    if (!topModal) {
      _backdrop.hide();
      return;
    }
    const container = hub.getContainer();
    const z = _zIndices.get(topModal.id) ?? _config.zIndexBase;
    if (!_backdrop.isVisible()) {
      _backdrop.show({
        opacity: 0.5,
        closeOnClick: isDismissable(topModal),
        animated: false,
        container
      });
    }
    const el = _backdrop.getElement();
    if (el) el.style.zIndex = String(z - 1);
  }
  function findTopmostModal() {
    for (let i = _stack.length - 1; i >= 0; i--) {
      if (MODAL_TYPES.has(_stack[i].type)) return _stack[i];
    }
    return void 0;
  }
  function attachGlobal() {
    if (_onMouseDown) return;
    _onMouseDown = (event) => {
      var _a;
      for (let i = _stack.length - 1; i >= 0; i--) {
        const entry = _stack[i];
        const target = event.target;
        if (entry.element.contains(target)) return;
        if ((_a = entry.triggerElement) == null ? void 0 : _a.contains(target)) return;
        if (isDismissable(entry)) {
          hub.close(entry.id);
          return;
        }
        return;
      }
    };
    document.addEventListener("mousedown", _onMouseDown);
    _onKeyDown = (event) => {
      if (event.key !== "Escape" || _stack.length === 0) return;
      for (let i = _stack.length - 1; i >= 0; i--) {
        const entry = _stack[i];
        if (isDismissable(entry)) {
          event.preventDefault();
          hub.close(entry.id);
          return;
        }
        return;
      }
    };
    document.addEventListener("keydown", _onKeyDown);
    _onPopState = () => {
      if (_config.autoCloseOnRouteChange) {
        hub.closeAll();
      }
    };
    window.addEventListener("popstate", _onPopState);
  }
  function detachGlobal() {
    if (_onMouseDown) {
      document.removeEventListener("mousedown", _onMouseDown);
      _onMouseDown = null;
    }
    if (_onKeyDown) {
      document.removeEventListener("keydown", _onKeyDown);
      _onKeyDown = null;
    }
    if (_onPopState) {
      window.removeEventListener("popstate", _onPopState);
      _onPopState = null;
    }
  }
  function applyStackingRules(entry) {
    if (MODAL_TYPES.has(entry.type)) {
      const ids = _stack.filter((e) => DISPLACED_BY_MODAL.has(e.type)).map((e) => e.id);
      for (const id of ids) hub.close(id);
    }
    if (entry.type === "action-menu") {
      const ids = _stack.filter((e) => e.type === "action-menu").map((e) => e.id);
      for (const id of ids) hub.close(id);
    }
  }
  const hub = {
    configure(config) {
      _config = { ..._config, ...config };
    },
    getConfig() {
      return { ..._config };
    },
    open(entry) {
      var _a, _b;
      if (hub.isOpen(entry.id)) hub.close(entry.id);
      applyStackingRules(entry);
      if (_config.maxStack > 0 && _stack.length >= _config.maxStack) {
        hub.close(_stack[0].id);
      }
      _stack.push(entry);
      if (_stack.length === 1) attachGlobal();
      refreshZIndices();
      if (MODAL_TYPES.has(entry.type)) {
        const trap = createFocusTrap();
        trap.activate({
          container: entry.element,
          initialFocus: "first",
          returnFocusOnDeactivate: true,
          escapeDeactivates: false,
          allowOutsideClick: true
        });
        _traps.set(entry.id, trap);
      }
      syncBackdrop();
      (_a = _config.onOpen) == null ? void 0 : _a.call(_config, entry.id);
      (_b = _config.onStackChange) == null ? void 0 : _b.call(_config, stackIds());
    },
    close(id) {
      var _a, _b, _c;
      const idx = _stack.findIndex((e) => e.id === id);
      if (idx === -1) return;
      const entry = _stack[idx];
      _stack.splice(idx, 1);
      const trap = _traps.get(id);
      if (trap) {
        trap.deactivate();
        _traps.delete(id);
      }
      _zIndices.delete(id);
      refreshZIndices();
      if (_stack.length === 0) detachGlobal();
      syncBackdrop();
      (_a = entry.onClose) == null ? void 0 : _a.call(entry);
      (_b = _config.onClose) == null ? void 0 : _b.call(_config, id);
      (_c = _config.onStackChange) == null ? void 0 : _c.call(_config, stackIds());
    },
    closeAll(options) {
      const except = new Set((options == null ? void 0 : options.except) ?? []);
      const ids = _stack.filter((e) => !except.has(e.id)).map((e) => e.id).reverse();
      for (const id of ids) hub.close(id);
    },
    closeByType(type) {
      const ids = _stack.filter((e) => e.type === type).map((e) => e.id).reverse();
      for (const id of ids) hub.close(id);
    },
    isOpen(id) {
      return _stack.some((e) => e.id === id);
    },
    getActive() {
      return [..._stack];
    },
    getTopmost() {
      return _stack.length > 0 ? _stack[_stack.length - 1] : null;
    },
    getContainer() {
      return document.querySelector(
        _config.containerSelector
      ) ?? document.body;
    },
    getZIndex(id) {
      return _zIndices.get(id) ?? _config.zIndexBase;
    }
  };
  return hub;
}
const overlayHub = createOverlayHub();
export {
  createOverlayHub,
  overlayHub
};
//# sourceMappingURL=index13.js.map
