import { jsxs, jsx } from "react/jsx-runtime";
import O9Button from "./index11.js";
const DEFAULTS = {
  noDataTitle: "No data available",
  noDataMessage: "Adjust your filter search query.",
  noResultsTitle: "No results found",
  noResultsMessage: "Adjust your filter search query.",
  noResultsClearLabel: "Clear Search"
};
function EmptyState({ kind, config = {}, onClear }) {
  const cfg = { ...DEFAULTS, ...config };
  const isNoResults = kind === "no-results";
  const title = isNoResults ? cfg.noResultsTitle : cfg.noDataTitle;
  const message = isNoResults ? cfg.noResultsMessage : cfg.noDataMessage;
  const illusClass = isNoResults ? "o9illus o9illus-no-results-found" : "o9illus o9illus-no-filters-found";
  const classes = [
    "o9ds-hpop__empty",
    isNoResults ? "o9ds-hpop__empty--no-results" : "o9ds-hpop__empty--no-data"
  ].join(" ");
  return /* @__PURE__ */ jsxs("div", { className: classes, role: "status", children: [
    /* @__PURE__ */ jsx("span", { className: `o9ds-hpop__empty-illus ${illusClass}`, "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("span", { className: "o9ds-hpop__empty-title", children: title }),
    /* @__PURE__ */ jsx("span", { className: "o9ds-hpop__empty-msg", children: message }),
    isNoResults && onClear && /* @__PURE__ */ jsx("span", { className: "o9ds-hpop__empty-action", children: /* @__PURE__ */ jsx(
      O9Button,
      {
        label: cfg.noResultsClearLabel,
        variant: "outline",
        size: "sm",
        onClick: onClear
      }
    ) })
  ] });
}
export {
  EmptyState,
  EmptyState as default
};
//# sourceMappingURL=index46.js.map
