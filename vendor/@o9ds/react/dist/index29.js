import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const O9Breadcrumb = forwardRef(
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
    return /* @__PURE__ */ jsx(
      "nav",
      {
        ref,
        "aria-label": ariaLabel,
        "aria-busy": isLoading ? true : void 0,
        className: classes,
        children: /* @__PURE__ */ jsx("ol", { className: "o9ds-bc__list", children: items.map((item, index) => {
          const isLast = index === lastIndex;
          const isIconOnly = !!item.icon && !item.label;
          return /* @__PURE__ */ jsx("li", { className: "o9ds-bc__item", children: isLast ? /* @__PURE__ */ jsx("span", { className: "o9ds-bc__lbl", "aria-current": "page", children: item.label }) : /* @__PURE__ */ jsxs(
            "a",
            {
              className: "o9ds-bc__lnk",
              href: isDisabled ? void 0 : item.href,
              "aria-disabled": isDisabled ? true : void 0,
              "aria-label": isIconOnly ? item.label || "Home" : void 0,
              tabIndex: isDisabled ? 0 : void 0,
              onClick: (e) => handleClick(e, item, index),
              children: [
                item.icon && /* @__PURE__ */ jsx(
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
export {
  O9Breadcrumb as default
};
//# sourceMappingURL=index29.js.map
