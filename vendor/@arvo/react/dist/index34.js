import { jsxs, jsx } from "react/jsx-runtime";
import { createContext, useState, useRef, useContext, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { overlayHub } from "@arvo/core";
import { OverlayContext } from "./index3.js";
const ToastContext = createContext(null);
function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within an ArvoToastProvider");
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
  const elRef = useRef(null);
  const timerRef = useRef(null);
  const removedRef = useRef(false);
  const remove = useCallback((reason) => {
    if (removedRef.current) return;
    removedRef.current = true;
    onClose == null ? void 0 : onClose();
    onRemove(id, reason);
  }, [id, onClose, onRemove]);
  useEffect(() => {
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
  const handleMouseEnter = useCallback(() => {
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
  const handleMouseLeave = useCallback(() => {
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
  const handleCloseClick = useCallback(() => {
    remove("click");
  }, [remove]);
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      remove("escape");
    }
  }, [remove]);
  const rootClasses = [
    "arvo-toast",
    `arvo-toast--${type}`,
    className
  ].filter(Boolean).join(" ");
  const iconClasses = [
    "arvo-toast__ico",
    "o9con",
    icon ? `o9con-${icon}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx("span", { className: iconClasses, "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "arvo-toast__content", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            title && /* @__PURE__ */ jsx("p", { className: "arvo-toast__title", children: title }),
            /* @__PURE__ */ jsx("p", { className: "arvo-toast__msg", children: message })
          ] }),
          link && /* @__PURE__ */ jsx("div", { className: "arvo-toast__link", children: link })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "arvo-toast__close",
            "aria-label": "Close notification",
            onClick: handleCloseClick,
            type: "button",
            children: /* @__PURE__ */ jsx("span", { className: "o9con o9con-close" })
          }
        )
      ]
    }
  );
}
const OVERLAY_ID = "arvo-toast-container";
function ArvoToastProvider({ position = "top-right", children }) {
  const [toasts, setToasts] = useState([]);
  const containerRef = useRef(null);
  const registeredRef = useRef(false);
  const hub = useContext(OverlayContext) ?? overlayHub;
  if (!containerRef.current && typeof document !== "undefined") {
    const el = document.createElement("div");
    el.className = `arvo-toast-container arvo-toast-container--${position}`;
    el.setAttribute("role", "region");
    el.setAttribute("aria-label", "Notifications");
    containerRef.current = el;
  }
  useEffect(() => {
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
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.className = `arvo-toast-container arvo-toast-container--${position}`;
  }, [position]);
  const show = useCallback((options) => {
    const id = `arvo-toast-${++toastCounter}`;
    setToasts((prev) => [{ ...options, id }, ...prev]);
    return id;
  }, []);
  const close = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const closeAll = useCallback(() => {
    setToasts([]);
  }, []);
  const handleRemove = useCallback((id, reason) => {
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
  return /* @__PURE__ */ jsxs(ToastContext.Provider, { value: contextValue, children: [
    children,
    containerRef.current && createPortal(
      toasts.map((entry) => /* @__PURE__ */ jsx(
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
export {
  ArvoToastProvider,
  useToast
};
//# sourceMappingURL=index34.js.map
