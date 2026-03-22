import { useState } from "react";
import "./FigmaPrototype.css";

/**
 * Reusable Figma Prototype Component
 *
 * USAGE:
 *
 * <FigmaPrototype
 *   figmaUrl="https://www.figma.com/proto/abc123xyz/Project-Name?node-id=1-2"
 *   title="My Project Prototype"
 *   height="800px"
 *   loadStrategy="interaction"  // fast: iframe only after user clicks
 *   theme="light"
 * />
 *
 * loadStrategy:
 * - "immediate" — iframe loads with the page (heaviest).
 * - "interaction" — click “Load prototype” first (fastest initial load).
 * - "viewport" — same as interaction: click “Load prototype” to load (no auto-scroll).
 *
 * @param {"immediate"|"interaction"|"viewport"} [loadStrategy="immediate"]
 * @param {"dark"|"light"} [theme="dark"]
 */
export function FigmaPrototype({
  figmaUrl,
  title = "Figma Prototype",
  height = "600px",
  loadStrategy = "immediate",
  theme = "dark",
}) {
  const [shouldLoadIframe, setShouldLoadIframe] = useState(
    loadStrategy === "immediate"
  );

  // If it's already an embed URL, use it directly. Otherwise, convert prototype URL to embed format
  const embedUrl = figmaUrl
    ? figmaUrl.includes("figma.com/embed")
      ? figmaUrl
      : `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`
    : "";

  const containerClass =
    `figma-prototype-container figma-prototype-container--${theme}`.trim();

  if (!figmaUrl) {
    return (
      <div className={containerClass}>
        <div className="figma-error">
          <p>Please provide a Figma URL</p>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {title ? <h3 className="figma-title">{title}</h3> : null}
      <div className="figma-wrapper" style={{ height }}>
        {shouldLoadIframe ? (
          <iframe
            className="figma-iframe"
            src={embedUrl}
            title={title || "Figma prototype"}
            allowFullScreen
            loading={loadStrategy === "immediate" ? "eager" : "lazy"}
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="figma-placeholder">
            <button
              type="button"
              className="figma-load-btn"
              onClick={() => setShouldLoadIframe(true)}
            >
              Load prototype
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

