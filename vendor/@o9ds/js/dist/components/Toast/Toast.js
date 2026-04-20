import { overlayHub } from "@o9ds/core";
const NO_AUTO_DISMISS = /* @__PURE__ */ new Set(["negative", "block"]);
const ALERT_ROLES = /* @__PURE__ */ new Set(["negative", "block"]);
let idCounter = 0;
class O9Toast {
  constructor(container, options) {
    this._container = null;
    this._toasts = /* @__PURE__ */ new Map();
    this._destroyed = false;
    this._defaults = {
      position: (options == null ? void 0 : options.position) ?? "top-right",
      timeout: (options == null ? void 0 : options.timeout) ?? 5e3,
      pauseOnHover: (options == null ? void 0 : options.pauseOnHover) ?? true
    };
    this._hub = (options == null ? void 0 : options.hub) ?? overlayHub;
    this._overlayId = `o9ds-toast-container-${++idCounter}`;
    const el = document.createElement("div");
    el.className = `o9ds-toast-container o9ds-toast-container--${this._defaults.position}`;
    el.setAttribute("role", "region");
    el.setAttribute("aria-label", "Notifications");
    this._container = el;
    let parent = document.body;
    if (typeof container === "string") {
      parent = document.querySelector(container) ?? document.body;
    } else if (container instanceof HTMLElement) {
      parent = container;
    }
    parent.appendChild(el);
    this._hub.open({
      id: this._overlayId,
      type: "toast",
      element: el,
      priority: 0,
      config: { autoCloseOnOutsideClick: false }
    });
  }
  static initialize(container, options) {
    return new O9Toast(container, options);
  }
  // ── show ─────────────────────────────────────────────────────────────
  show(options) {
    if (this._destroyed || !this._container) return "";
    const type = options.type ?? "info";
    const shouldFade = NO_AUTO_DISMISS.has(type) ? false : options.fadeAway ?? true;
    const timeout = options.timeout ?? this._defaults.timeout;
    const pauseOnHover = options.pauseOnHover ?? this._defaults.pauseOnHover;
    const role = ALERT_ROLES.has(type) ? "alert" : "status";
    const id = `o9ds-toast-${++idCounter}`;
    const state = {
      id,
      element: null,
      timer: null,
      removed: false,
      options: {
        type,
        title: options.title ?? null,
        message: options.message,
        fadeAway: shouldFade,
        timeout,
        pauseOnHover,
        icon: options.icon ?? null,
        link: options.link ?? null,
        onClose: options.onClose ?? null
      }
    };
    const toast = document.createElement("div");
    const classes = ["o9ds-toast", `o9ds-toast--${type}`];
    toast.className = classes.join(" ");
    toast.setAttribute("role", role);
    toast.setAttribute("aria-atomic", "true");
    const icoClasses = ["o9ds-toast__ico", "o9con"];
    if (state.options.icon) icoClasses.push(`o9con-${state.options.icon}`);
    const ico = document.createElement("span");
    ico.className = icoClasses.join(" ");
    ico.setAttribute("aria-hidden", "true");
    toast.appendChild(ico);
    const content = document.createElement("div");
    content.className = "o9ds-toast__content";
    const textWrap = document.createElement("div");
    if (state.options.title) {
      const titleEl = document.createElement("p");
      titleEl.className = "o9ds-toast__title";
      titleEl.textContent = state.options.title;
      textWrap.appendChild(titleEl);
    }
    const msgEl = document.createElement("p");
    msgEl.className = "o9ds-toast__msg";
    msgEl.textContent = state.options.message;
    textWrap.appendChild(msgEl);
    content.appendChild(textWrap);
    if (state.options.link) {
      const linkWrap = document.createElement("div");
      linkWrap.className = "o9ds-toast__link";
      linkWrap.appendChild(state.options.link);
      content.appendChild(linkWrap);
    }
    toast.appendChild(content);
    const closeBtn = document.createElement("button");
    closeBtn.className = "o9ds-toast__close";
    closeBtn.setAttribute("aria-label", "Close notification");
    closeBtn.setAttribute("type", "button");
    const closeIco = document.createElement("span");
    closeIco.className = "o9con o9con-close";
    closeBtn.appendChild(closeIco);
    toast.appendChild(closeBtn);
    state.element = toast;
    this._toasts.set(id, state);
    this._container.insertBefore(toast, this._container.firstChild);
    closeBtn.addEventListener("click", () => this._remove(id, "click"));
    toast.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        this._remove(id, "escape");
      }
    });
    if (shouldFade) {
      this._startFadeTimer(state, timeout);
      if (pauseOnHover) {
        toast.addEventListener("mouseenter", () => {
          if (state.timer) {
            clearTimeout(state.timer);
            state.timer = null;
          }
          toast.classList.add("is-paused");
          toast.classList.remove("is-fading");
        });
        toast.addEventListener("mouseleave", () => {
          toast.classList.remove("is-paused");
          this._startFadeTimer(state, timeout);
        });
      }
    }
    return id;
  }
  // ── close ────────────────────────────────────────────────────────────
  close(id) {
    this._remove(id, "programmatic");
  }
  // ── closeAll ─────────────────────────────────────────────────────────
  closeAll() {
    const ids = [...this._toasts.keys()];
    for (const id of ids) {
      this._remove(id, "programmatic");
    }
  }
  // ── destroy ──────────────────────────────────────────────────────────
  destroy() {
    var _a;
    if (this._destroyed) return;
    this._destroyed = true;
    this.closeAll();
    this._hub.close(this._overlayId);
    (_a = this._container) == null ? void 0 : _a.remove();
    this._container = null;
  }
  // ── internal helpers ─────────────────────────────────────────────────
  _startFadeTimer(state, timeout) {
    state.timer = setTimeout(() => {
      const el = state.element;
      el.classList.add("is-fading");
      el.classList.remove("is-paused");
      const onEnd = () => {
        el.removeEventListener("transitionend", onEnd);
        this._remove(state.id, "fade");
      };
      el.addEventListener("transitionend", onEnd);
    }, timeout);
  }
  _remove(id, reason) {
    var _a, _b, _c;
    const state = this._toasts.get(id);
    if (!state || state.removed) return;
    state.removed = true;
    if (state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }
    (_b = (_a = state.options).onClose) == null ? void 0 : _b.call(_a);
    state.element.remove();
    this._toasts.delete(id);
    (_c = this._container) == null ? void 0 : _c.dispatchEvent(new CustomEvent("toast:close", {
      bubbles: true,
      cancelable: false,
      detail: { id, reason }
    }));
  }
}
export {
  O9Toast
};
//# sourceMappingURL=Toast.js.map
