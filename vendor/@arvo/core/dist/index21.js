import { isTruncated } from "./index17.js";
const _focusVisibleSupported = /* @__PURE__ */ (() => {
  try {
    return typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports("selector(:focus-visible)");
  } catch {
    return false;
  }
})();
function connectTooltip(manager, options) {
  let _opts = { ...options };
  function resolveContent() {
    return typeof _opts.content === "function" ? _opts.content() : _opts.content;
  }
  function shouldSuppress() {
    var _a;
    if (!_opts.autoOnTruncation) return false;
    const labelEl = _opts.labelElement ?? _opts.anchor;
    const content = resolveContent();
    const labelText = ((_a = labelEl.textContent) == null ? void 0 : _a.trim()) ?? "";
    return content === labelText && !isTruncated(labelEl);
  }
  function onMouseEnter() {
    if (shouldSuppress()) return;
    manager.show({
      anchor: _opts.anchor,
      content: resolveContent(),
      placement: _opts.placement,
      shortcut: _opts.shortcut,
      trigger: "hover"
    });
  }
  function onMouseLeave() {
    manager.hide();
  }
  function onFocusIn(e) {
    if (shouldSuppress()) return;
    if (_focusVisibleSupported) {
      const target = e.target;
      try {
        const hasVisibleFocus = _opts.anchor.matches(":focus-visible") || !!(target == null ? void 0 : target.matches(":focus-visible"));
        if (!hasVisibleFocus) return;
      } catch {
      }
    }
    manager.show({
      anchor: _opts.anchor,
      content: resolveContent(),
      placement: _opts.placement,
      shortcut: _opts.shortcut,
      trigger: "focus"
    });
  }
  function onFocusOut() {
    manager.hide(true);
  }
  function bind() {
    const el = _opts.anchor;
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
  }
  function unbind() {
    const el = _opts.anchor;
    el.removeEventListener("mouseenter", onMouseEnter);
    el.removeEventListener("mouseleave", onMouseLeave);
    el.removeEventListener("focusin", onFocusIn);
    el.removeEventListener("focusout", onFocusOut);
  }
  bind();
  return {
    update(newOpts) {
      if (newOpts.anchor && newOpts.anchor !== _opts.anchor) {
        unbind();
        _opts = { ..._opts, ...newOpts };
        bind();
      } else {
        _opts = { ..._opts, ...newOpts };
      }
    },
    destroy() {
      unbind();
      manager.hide(true);
    }
  };
}
export {
  connectTooltip
};
//# sourceMappingURL=index21.js.map
