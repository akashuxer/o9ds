"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const core = require("@arvo/core");
function useKeyboardNav(containerRef, options) {
  const [activeIndex, setActiveIndex] = react.useState(0);
  const navRef = react.useRef(null);
  const onNavigateRef = react.useRef(options.onNavigate);
  const onSelectRef = react.useRef(options.onSelect);
  const onEscapeRef = react.useRef(options.onEscape);
  onNavigateRef.current = options.onNavigate;
  onSelectRef.current = options.onSelect;
  onEscapeRef.current = options.onEscape;
  react.useEffect(() => {
    const nav = core.createArrowNav({
      items: options.items,
      orientation: options.orientation,
      wrap: options.wrap,
      onNavigate(item, index) {
        setActiveIndex(index);
        onNavigateRef.current(item, index);
      },
      onSelect(item, index) {
        var _a;
        (_a = onSelectRef.current) == null ? void 0 : _a.call(onSelectRef, item, index);
      },
      onEscape() {
        var _a;
        (_a = onEscapeRef.current) == null ? void 0 : _a.call(onEscapeRef);
      }
    });
    navRef.current = nav;
    return () => nav.destroy();
  }, [options.orientation, options.wrap]);
  react.useEffect(() => {
    var _a;
    (_a = navRef.current) == null ? void 0 : _a.setItems(options.items);
  }, [options.items]);
  const handleKeyDown = react.useCallback((event) => {
    var _a;
    (_a = navRef.current) == null ? void 0 : _a.handleKeyDown(event.nativeEvent);
  }, []);
  return { handleKeyDown, activeIndex };
}
exports.useKeyboardNav = useKeyboardNav;
//# sourceMappingURL=index8.cjs.map
