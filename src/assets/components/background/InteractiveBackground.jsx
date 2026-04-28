import "./InteractiveBackground.css";

/**
 * Solid background layer.
 * Lives behind the entire page (z-index: -1) so each section can layer on top.
 */
export function InteractiveBackground() {
    return <div className='site-background' aria-hidden='true' />;
}
