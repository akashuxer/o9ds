const _O9Breadcrumb = class _O9Breadcrumb {
  constructor(element, options) {
    this._listEl = null;
    this._element = element;
    this._originalContent = element.innerHTML;
    this._options = {
      ..._O9Breadcrumb.DEFAULTS,
      ...options,
      onNavigate: (options == null ? void 0 : options.onNavigate) ?? null
    };
    this._boundHandleClick = this._handleClick.bind(this);
    this._render();
    this._bindEvents();
  }
  static initialize(element, options) {
    return new _O9Breadcrumb(element, options);
  }
  _render() {
    const el = this._element;
    if (!el) return;
    el.textContent = "";
    el.classList.add("o9ds-bc");
    el.setAttribute("aria-label", this._options.ariaLabel);
    this._listEl = document.createElement("ol");
    this._listEl.className = "o9ds-bc__list";
    el.appendChild(this._listEl);
    this._buildItems();
    if (this._options.isDisabled) {
      this._applyDisabled(true);
    }
    if (this._options.isLoading) {
      this._applyLoading(true);
    }
  }
  _buildItems() {
    const list = this._listEl;
    if (!list) return;
    list.textContent = "";
    const items = this._options.items;
    const lastIndex = items.length - 1;
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "o9ds-bc__item";
      if (index === lastIndex) {
        const span = document.createElement("span");
        span.className = "o9ds-bc__lbl";
        span.setAttribute("aria-current", "page");
        span.textContent = item.label;
        li.appendChild(span);
      } else {
        const a = document.createElement("a");
        a.className = "o9ds-bc__lnk";
        a.dataset.index = String(index);
        if (item.href && !this._options.isDisabled) {
          a.setAttribute("href", item.href);
        }
        if (this._options.isDisabled) {
          a.setAttribute("aria-disabled", "true");
          a.setAttribute("tabindex", "0");
        }
        const isIconOnly = !!item.icon && !item.label;
        if (isIconOnly) {
          a.setAttribute("aria-label", "Home");
        }
        if (item.icon) {
          const ico = document.createElement("span");
          ico.className = `o9ds-bc__ico o9con o9con-${item.icon}`;
          ico.setAttribute("aria-hidden", "true");
          a.appendChild(ico);
        }
        if (item.label) {
          a.appendChild(document.createTextNode(item.label));
        }
        li.appendChild(a);
      }
      list.appendChild(li);
    });
  }
  _bindEvents() {
    var _a;
    (_a = this._listEl) == null ? void 0 : _a.addEventListener("click", this._boundHandleClick);
  }
  _handleClick(event) {
    if (this._options.isDisabled || this._options.isLoading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const target = event.target.closest(".o9ds-bc__lnk");
    if (!target) return;
    const index = Number(target.dataset.index);
    const item = this._options.items[index];
    if (!item) return;
    this._dispatchEvent("bc:navigate", {
      href: item.href ?? "",
      index,
      label: item.label
    });
    if (this._options.onNavigate && item.href) {
      this._options.onNavigate({
        href: item.href,
        index,
        label: item.label
      });
    }
  }
  _dispatchEvent(name, detail) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      cancelable: true,
      detail
    }));
  }
  _applyDisabled(state) {
    const el = this._element;
    if (!el) return;
    if (state) {
      el.classList.add("is-disabled");
    } else {
      el.classList.remove("is-disabled");
    }
    const links = el.querySelectorAll(".o9ds-bc__lnk");
    links.forEach((link, i) => {
      const item = this._options.items[i];
      if (state) {
        link.setAttribute("aria-disabled", "true");
        link.removeAttribute("href");
        link.setAttribute("tabindex", "0");
      } else {
        link.removeAttribute("aria-disabled");
        link.removeAttribute("tabindex");
        if (item == null ? void 0 : item.href) {
          link.setAttribute("href", item.href);
        }
      }
    });
  }
  _applyLoading(isLoading) {
    const el = this._element;
    if (!el) return;
    if (isLoading) {
      el.classList.add("loading");
      el.setAttribute("aria-busy", "true");
    } else {
      el.classList.remove("loading");
      el.removeAttribute("aria-busy");
    }
  }
  setItems(items) {
    this._options.items = items;
    this._buildItems();
    if (this._options.isDisabled) {
      this._applyDisabled(true);
    }
  }
  disabled(state) {
    if (state === void 0) {
      return this._options.isDisabled;
    }
    this._options.isDisabled = state;
    this._applyDisabled(state);
  }
  setLoading(isLoading) {
    this._options.isLoading = isLoading;
    this._applyLoading(isLoading);
  }
  destroy() {
    var _a;
    const el = this._element;
    if (!el) return;
    (_a = this._listEl) == null ? void 0 : _a.removeEventListener("click", this._boundHandleClick);
    el.classList.remove("o9ds-bc", "is-disabled", "loading");
    el.removeAttribute("aria-label");
    el.removeAttribute("aria-busy");
    el.innerHTML = this._originalContent;
    this._element = null;
    this._listEl = null;
  }
};
_O9Breadcrumb.DEFAULTS = {
  items: [],
  separator: "/",
  isDisabled: false,
  isLoading: false,
  ariaLabel: "Breadcrumb",
  onNavigate: null
};
let O9Breadcrumb = _O9Breadcrumb;
export {
  O9Breadcrumb
};
//# sourceMappingURL=Breadcrumb.js.map
