import { ArvoIconButton } from "../IconButton/IconButton.js";
const TYPES = [
  "positive",
  "info",
  "neutral",
  "warning",
  "negative",
  "block"
];
const ASSERTIVE_TYPES = /* @__PURE__ */ new Set([
  "negative",
  "block"
]);
function resolveRole(type, roleOverride) {
  if (roleOverride) return roleOverride;
  return ASSERTIVE_TYPES.has(type) ? "alert" : "status";
}
class ArvoBannerAlert {
  constructor(element, options) {
    this._iconEl = null;
    this._contentEl = null;
    this._copyEl = null;
    this._titleEl = null;
    this._msgEl = null;
    this._linkEl = null;
    this._closeEl = null;
    this._closeBtnInstance = null;
    this._addedRole = false;
    this._addedAriaBusy = false;
    this._destroyed = false;
    this._root = element;
    this._options = { ...options };
    const rawType = options == null ? void 0 : options.type;
    this._currentType = rawType && TYPES.includes(rawType) ? rawType : "info";
    this._isCompact = (options == null ? void 0 : options.isCompact) === true;
    this._isDismissible = (options == null ? void 0 : options.isDismissible) !== false;
    this._isLoading = (options == null ? void 0 : options.isLoading) === true;
    this._userRoleOverride = (options == null ? void 0 : options.role) !== void 0;
    this._render();
  }
  static initialize(element, options) {
    return new ArvoBannerAlert(element, options);
  }
  // -- Render -------------------------------------------------------------
  _render() {
    const root = this._root;
    if (!root) return;
    root.classList.add("arvo-bnr-alert");
    root.classList.add(`arvo-bnr-alert--${this._currentType}`);
    if (this._isCompact) root.classList.add("arvo-bnr-alert--compact");
    if (this._isLoading) root.classList.add("loading");
    const resolvedRole = resolveRole(this._currentType, this._options.role);
    root.setAttribute("role", resolvedRole);
    this._addedRole = true;
    if (this._isLoading) {
      root.setAttribute("aria-busy", "true");
      this._addedAriaBusy = true;
    }
    const ico = document.createElement("span");
    ico.className = "arvo-bnr-alert__ico o9con";
    ico.setAttribute("aria-hidden", "true");
    this._iconEl = ico;
    root.appendChild(ico);
    const content = document.createElement("div");
    content.className = "arvo-bnr-alert__content";
    this._contentEl = content;
    if (this._isCompact) {
      const msg = document.createElement("p");
      msg.className = "arvo-bnr-alert__msg";
      msg.textContent = this._options.message ?? "";
      this._msgEl = msg;
      content.appendChild(msg);
    } else {
      const copy = document.createElement("div");
      copy.className = "arvo-bnr-alert__copy";
      this._copyEl = copy;
      if (this._options.title != null) {
        const titleEl = document.createElement("p");
        titleEl.className = "arvo-bnr-alert__title";
        titleEl.textContent = this._options.title;
        this._titleEl = titleEl;
        copy.appendChild(titleEl);
      }
      const msg = document.createElement("p");
      msg.className = "arvo-bnr-alert__msg";
      msg.textContent = this._options.message ?? "";
      this._msgEl = msg;
      copy.appendChild(msg);
      content.appendChild(copy);
      if (this._options.link != null) {
        const linkWrap = document.createElement("div");
        linkWrap.className = "arvo-bnr-alert__link";
        linkWrap.appendChild(this._options.link);
        this._linkEl = linkWrap;
        content.appendChild(linkWrap);
      }
    }
    root.appendChild(content);
    if (this._isDismissible) {
      const closeBtn = document.createElement("button");
      closeBtn.className = "arvo-bnr-alert__close";
      this._closeBtnInstance = ArvoIconButton.initialize(closeBtn, {
        variant: "tertiary",
        size: "xs",
        icon: "close",
        tooltip: "Dismiss alert",
        onClick: () => this.dismiss()
      });
      closeBtn.setAttribute("aria-label", "Dismiss alert");
      this._closeEl = closeBtn;
      root.appendChild(closeBtn);
    }
  }
  type(newType) {
    if (newType === void 0) return this._currentType;
    if (this._destroyed) return;
    if (!TYPES.includes(newType)) return;
    if (newType === this._currentType) return;
    const root = this._root;
    if (!root) return;
    root.classList.remove(`arvo-bnr-alert--${this._currentType}`);
    root.classList.add(`arvo-bnr-alert--${newType}`);
    this._currentType = newType;
    this._options.type = newType;
    if (!this._userRoleOverride) {
      const resolved = resolveRole(newType, void 0);
      root.setAttribute("role", resolved);
      this._addedRole = true;
    }
  }
  message(text) {
    if (text === void 0) return this._options.message ?? "";
    if (this._destroyed) return;
    this._options.message = text;
    if (this._msgEl) {
      this._msgEl.textContent = text;
    }
  }
  title(text) {
    if (arguments.length === 0) {
      return this._options.title ?? null;
    }
    if (this._destroyed) return;
    if (this._isCompact) {
      this._options.title = text ?? null;
      return;
    }
    const copy = this._copyEl;
    if (!copy) return;
    if (text == null) {
      if (this._titleEl) {
        this._titleEl.remove();
        this._titleEl = null;
      }
      this._options.title = null;
      return;
    }
    if (this._titleEl) {
      this._titleEl.textContent = text;
    } else {
      const titleEl = document.createElement("p");
      titleEl.className = "arvo-bnr-alert__title";
      titleEl.textContent = text;
      this._titleEl = titleEl;
      copy.insertBefore(titleEl, copy.firstChild);
    }
    this._options.title = text;
  }
  setLink(element) {
    if (this._destroyed) return;
    if (this._isCompact) {
      this._options.link = element;
      return;
    }
    const content = this._contentEl;
    if (!content) return;
    if (element == null) {
      if (this._linkEl) {
        this._linkEl.remove();
        this._linkEl = null;
      }
      this._options.link = null;
      return;
    }
    if (this._linkEl) {
      while (this._linkEl.firstChild) {
        this._linkEl.removeChild(this._linkEl.firstChild);
      }
      this._linkEl.appendChild(element);
    } else {
      const linkWrap = document.createElement("div");
      linkWrap.className = "arvo-bnr-alert__link";
      linkWrap.appendChild(element);
      this._linkEl = linkWrap;
      content.appendChild(linkWrap);
    }
    this._options.link = element;
  }
  loading(state) {
    if (state === void 0) return this._isLoading;
    if (this._destroyed) return;
    const root = this._root;
    if (!root) return;
    const next = state === true;
    if (next === this._isLoading) return;
    this._isLoading = next;
    this._options.isLoading = next;
    if (next) {
      root.classList.add("loading");
      root.setAttribute("aria-busy", "true");
      this._addedAriaBusy = true;
    } else {
      root.classList.remove("loading");
      root.removeAttribute("aria-busy");
      this._addedAriaBusy = false;
    }
  }
  // -- dismiss / destroy --------------------------------------------------
  dismiss() {
    var _a, _b;
    if (this._destroyed) return;
    const root = this._root;
    if (!root) return;
    root.dispatchEvent(
      new CustomEvent("bnr-alert:dismiss", {
        bubbles: false,
        cancelable: false
      })
    );
    (_b = (_a = this._options).onDismiss) == null ? void 0 : _b.call(_a);
  }
  destroy() {
    if (this._destroyed) return;
    this._destroyed = true;
    const root = this._root;
    if (this._closeBtnInstance) {
      this._closeBtnInstance.destroy();
      this._closeBtnInstance = null;
    }
    if (root) {
      root.innerHTML = "";
      const toRemove = [];
      for (const cls of Array.from(root.classList)) {
        if (cls === "loading" || cls.startsWith("arvo-bnr-alert")) {
          toRemove.push(cls);
        }
      }
      for (const cls of toRemove) {
        root.classList.remove(cls);
      }
      if (this._addedRole) {
        root.removeAttribute("role");
      }
      if (this._addedAriaBusy) {
        root.removeAttribute("aria-busy");
      }
    }
    this._root = null;
    this._iconEl = null;
    this._contentEl = null;
    this._copyEl = null;
    this._titleEl = null;
    this._msgEl = null;
    this._linkEl = null;
    this._closeEl = null;
  }
}
export {
  ArvoBannerAlert
};
//# sourceMappingURL=BannerAlert.js.map
