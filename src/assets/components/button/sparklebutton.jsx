import "./sparklebutton.css"

export function SparkleButton({ children, onClick }) {
  const StarSVG = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 784.11 815.53"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }}
      version="1.1"
      xmlSpace="preserve"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          className="fil0"
        ></path>
      </g>
    </svg>
  )

  return (
    <button className="sparkle-button" onClick={onClick}>
      <div className="star-1">
        <StarSVG />
      </div>
      <div className="star-2">
        <StarSVG />
      </div>
      <div className="star-3">
        <StarSVG />
      </div>
      <div className="star-4">
        <StarSVG />
      </div>
      <div className="star-5">
        <StarSVG />
      </div>
      <div className="star-6">
        <StarSVG />
      </div>
      {children}
    </button>
  )
}
