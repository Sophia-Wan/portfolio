import "./LiveApp.css";

/**
 * Reusable Live App Component - Embeds a coded/working version of your app
 * 
 * USAGE:
 * 
 * // Deployed app URL
 * <LiveApp 
 *   appUrl="https://your-app.vercel.app"
 *   title="Forge App"
 *   height="800px"
 * />
 * 
 * // CodeSandbox embed
 * <LiveApp 
 *   appUrl="https://codesandbox.io/embed/your-sandbox-id"
 *   title="Forge App"
 *   height="800px"
 * />
 * 
 * @param {string} appUrl - The URL of your deployed/coded app
 * @param {string} title - Optional title for the app
 * @param {string} height - Optional height for the iframe (default: "800px")
 */
export function LiveApp({ appUrl, title = "Live App", height = "800px" }) {
  if (!appUrl) {
    return (
      <div className="live-app-container">
        <div className="live-app-error">
          <p>Please provide an app URL</p>
        </div>
      </div>
    );
  }

  return (
    <div className="live-app-container">
      {title && <h3 className="live-app-title">{title}</h3>}
      <div className="live-app-wrapper" style={{ height }}>
        <iframe
          className="live-app-iframe"
          src={appUrl}
          title={title}
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
      </div>
      <div className="live-app-link">
        <a href={appUrl} target="_blank" rel="noopener noreferrer">
          Open in new tab →
        </a>
      </div>
    </div>
  );
}

