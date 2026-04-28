import { useReveal } from "./useReveal.js";
import "./reveal.css";

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * Pass `delay` (ms) to stagger multiple Reveals near each other.
 */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div", ...rest }) {
    const [ref, visible] = useReveal();
    const cls = ["reveal", visible ? "reveal--visible" : "", className].filter(Boolean).join(" ");
    const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
    return (
        <Tag ref={ref} className={cls} style={style} {...rest}>
            {children}
        </Tag>
    );
}
