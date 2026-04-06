import { useNavigate } from "react-router-dom";
import "./Buttons.css";

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <div className="scene-btn-group">
      <button
        className="scene-btn-action"
        type="button"
        onClick={() => {
          sessionStorage.setItem("landing-seen", "1");
          navigate("/home");
        }}
      >
        Explore
      </button>
    </div>
  );
}
