import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, visible].
 * Attach `ref` to a DOM element and toggle a CSS class on `visible`.
 * Default behavior: trigger once (no replay), at 15% in view.
 */
export function useReveal({ threshold = 0.15, once = true, rootMargin = "0px 0px -10% 0px" } = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once, rootMargin]);

    return [ref, visible];
}
