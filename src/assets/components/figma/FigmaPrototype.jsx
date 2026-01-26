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
 * />
 * 
 * @param {string} figmaUrl - The Figma prototype URL (must include /proto/)
 * @param {string} title - Optional title for the prototype
 * @param {string} height - Optional height for the iframe (default: "600px")
 */
export function FigmaPrototype({ figmaUrl, title = "Figma Prototype", height = "600px" }) {
  // If it's already an embed URL, use it directly. Otherwise, convert prototype URL to embed format
  const embedUrl = figmaUrl 
    ? (figmaUrl.includes("figma.com/embed") 
        ? figmaUrl 
        : `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`)
    : "";

  if (!figmaUrl) {
    return (
      <div className="figma-prototype-container">
        <div className="figma-error">
          <p>Please provide a Figma URL</p>
        </div>
      </div>
    );
  }

  return (
    <div className="figma-prototype-container">
      {title && <h3 className="figma-title">{title}</h3>}
      <div className="figma-wrapper" style={{ height }}>
        <iframe
          className="figma-iframe"
          src={embedUrl}
          title={title}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

