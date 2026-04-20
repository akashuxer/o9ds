"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactDom = require("react-dom");
const core = require("@o9ds/core");
const OverlayContext = require("./index3.cjs");
const ToastContext = react.createContext(null);
function useToast() {
  const ctx = react.useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within an O9ToastProvider");
  }
  return ctx;
}
const NO_AUTO_DISMISS = /* @__PURE__ */ new Set(["negative", "block"]);
const ALERT_ROLES = /* @__PURE__ */ new Set(["negative", "block"]);
let toastCounter = 0;
function ToastItem({ entry, onRemove }) {
  const {
    id,
    type = "info",
    title,
    message,
    fadeAway: fadeAwayProp = true,
    timeout = 5e3,
    pauseOnHover = true,
    icon,
    link,
    className,
    onClose,
    onMouseEnter: onMouseEnterCb,
    onMouseLeave: onMouseLeaveCb
  } = entry;
  const shouldFade = NO_AUTO_DISMISS.has(type) ? false : fadeAwayProp;
  const role = ALERT_ROLES.has(type) ? "alert" : "status";
  const elRef = react.useRef(null);
  const timerRef = react.useRef(null);
  const removedRef = react.useRef(false);
  const remove = react.useCallback((reason) => {
    if (removedRef.current) return;
    removedRef.current = true;
    onClose == null ? void 0 : onClose();
    onRemove(id, reason);
  }, [id, onClose, onRemove]);
  react.useEffect(() => {
    if (!shouldFade) return;
    timerRef.current = setTimeout(() => {
      const el = elRef.current;
      if (!el) {
        remove("fade");
        return;
      }
      el.classList.add("is-fading");
      el.classList.remove("is-paused");
      const onEnd = () => {
        el.removeEventListener("transitionend", onEnd);
        remove("fade");
      };
      el.addEventListener("transitionend", onEnd);
    }, timeout);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  const handleMouseEnter = react.useCallback(() => {
    onMouseEnterCb == null ? void 0 : onMouseEnterCb();
    if (!shouldFade || !pauseOnHover) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const el = elRef.current;
    if (el) {
      el.classList.add("is-paused");
      el.classList.remove("is-fading");
    }
  }, [shouldFade, pauseOnHover, onMouseEnterCb]);
  const handleMouseLeave = react.useCallback(() => {
    onMouseLeaveCb == null ? void 0 : onMouseLeaveCb();
    if (!shouldFade || !pauseOnHover) return;
    const el = elRef.current;
    if (el) {
      el.classList.remove("is-paused");
    }
    timerRef.current = setTimeout(() => {
      if (!elRef.current) {
        remove("fade");
        return;
      }
      elRef.current.classList.add("is-fading");
      const onEnd = () => {
        var _a;
        (_a = elRef.current) == null ? void 0 : _a.removeEventListener("transitionend", onEnd);
        remove("fade");
      };
      elRef.current.addEventListener("transitionend", onEnd);
    }, timeout);
  }, [shouldFade, pauseOnHover, timeout, remove, onMouseLeaveCb]);
  const handleCloseClick = react.useCallback(() => {
    remove("click");
  }, [remove]);
  const handleKeyDown = react.useCallback((e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      remove("escape");
    }
  }, [remove]);
  const rootClasses = [
    "o9ds-toast",
    `o9ds-toast--${type}`,
    className
  ].filter(Boolean).join(" ");
  const iconClasses = [
    "o9ds-toast__ico",
    "o9con",
    icon ? `o9con-${icon}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref: elRef,
      className: rootClasses,
      role,
      "aria-atomic": "true",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: iconClasses, "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-toast__content", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            title && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "o9ds-toast__title", children: title }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "o9ds-toast__msg", children: message })
          ] }),
          link && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-toast__link", children: link })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: "o9ds-toast__close",
            "aria-label": "Close notification",
            onClick: handleCloseClick,
            type: "button",
            children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9con o9con-close" })
          }
        )
      ]
    }
  );
}
const OVERLAY_ID = "o9ds-toast-container";
function O9ToastProvider({ position = "top-right", children }) {
  const [toasts, setToasts] = react.useState([]);
  const containerRef = react.useRef(null);
  const registeredRef = react.useRef(false);
  const hub = react.useContext(OverlayContext.OverlayContext) ?? core.overlayHub;
  if (!containerRef.current && typeof document !== "undefined") {
    const el = document.createElement("div");
    el.className = `o9ds-toast-container o9ds-toast-container--${position}`;
    el.setAttribute("role", "region");
    el.setAttribute("aria-label", "Notifications");
    containerRef.current = el;
  }
  react.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    document.body.appendChild(container);
    hub.open({
      id: OVERLAY_ID,
      type: "toast",
      element: container,
      priority: 0,
      config: { autoCloseOnOutsideClick: false }
    });
    registeredRef.current = true;
    return () => {
      if (registeredRef.current) {
        hub.close(OVERLAY_ID);
        registeredRef.current = false;
      }
      container.remove();
    };
  }, [hub]);
  react.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.className = `o9ds-toast-container o9ds-toast-container--${position}`;
  }, [position]);
  const show = react.useCallback((options) => {
    const id = `o9ds-toast-${++toastCounter}`;
    setToasts((prev) => [{ ...options, id }, ...prev]);
    return id;
  }, []);
  const close = react.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const closeAll = react.useCallback(() => {
    setToasts([]);
  }, []);
  const handleRemove = react.useCallback((id, reason) => {
    const container = containerRef.current;
    if (container) {
      container.dispatchEvent(new CustomEvent("toast:close", {
        bubbles: true,
        cancelable: false,
        detail: { id, reason }
      }));
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const contextValue = { show, close, closeAll };
  return /* @__PURE__ */ jsxRuntime.jsxs(ToastContext.Provider, { value: contextValue, children: [
    children,
    containerRef.current && reactDom.createPortal(
      toasts.map((entry) => /* @__PURE__ */ jsxRuntime.jsx(
        ToastItem,
        {
          entry,
          onRemove: handleRemove
        },
        entry.id
      )),
      containerRef.current
    )
  ] });
}
exports.O9ToastProvider = O9ToastProvider;
exports.useToast = useToast;
//# sourceMappingURL=index34.cjs.map
