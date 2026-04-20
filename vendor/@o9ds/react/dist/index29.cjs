"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const O9Breadcrumb = react.forwardRef(
  function O9Breadcrumb2({
    items,
    isDisabled = false,
    isLoading = false,
    ariaLabel = "Breadcrumb",
    onNavigate,
    className
  }, ref) {
    const classes = [
      "o9ds-bc",
      isDisabled ? "is-disabled" : "",
      isLoading ? "loading" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    const blocked = isDisabled || isLoading;
    const lastIndex = items.length - 1;
    const handleClick = (e, item, index) => {
      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (onNavigate && item.href) {
        onNavigate({ href: item.href, index, label: item.label });
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "nav",
      {
        ref,
        "aria-label": ariaLabel,
        "aria-busy": isLoading ? true : void 0,
        className: classes,
        children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: "o9ds-bc__list", children: items.map((item, index) => {
          const isLast = index === lastIndex;
          const isIconOnly = !!item.icon && !item.label;
          return /* @__PURE__ */ jsxRuntime.jsx("li", { className: "o9ds-bc__item", children: isLast ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-bc__lbl", "aria-current": "page", children: item.label }) : /* @__PURE__ */ jsxRuntime.jsxs(
            "a",
            {
              className: "o9ds-bc__lnk",
              href: isDisabled ? void 0 : item.href,
              "aria-disabled": isDisabled ? true : void 0,
              "aria-label": isIconOnly ? item.label || "Home" : void 0,
              tabIndex: isDisabled ? 0 : void 0,
              onClick: (e) => handleClick(e, item, index),
              children: [
                item.icon && /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    className: `o9ds-bc__ico o9con o9con-${item.icon}`,
                    "aria-hidden": "true"
                  }
                ),
                item.label && item.label
              ]
            }
          ) }, index);
        }) })
      }
    );
  }
);
exports.default = O9Breadcrumb;
//# sourceMappingURL=index29.cjs.map
