import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { ref, className: `reveal ${className}`, children });
}
export {
  Reveal as R
};
