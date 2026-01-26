import "./projects.css"
import { SparkleButton } from "../button/sparklebutton.jsx"
import { useNavigate } from "react-router-dom"

export function ProjectCard({ title, year, image }) {
  const navigate = useNavigate();

  const handleViewProject = () => {
    // Map project titles to their routes
    const routes = {
      "Forge": "/forge",
      "Moolahmate": "/moolahmate",
      "Bandit Breakout": "/bandit-breakout",
      "PoPa": "/popa",
      "Design Jam": "/design-jam",
      "GameCatalog": "/gamecatalog"
    };
    
    const route = routes[title];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="project-card">
      <img src="/butterfly.svg" alt="Butterfly decoration" className="butterfly-decoration" />
      <div className={`project-image ${image ? "has-image" : ""}`}>
          <img src={image} alt={title} className="project-image-svg" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-year">{year}</p>
        <SparkleButton onClick={handleViewProject}>View Project</SparkleButton>
      </div>
    </div>
  )
}

export function Projects({ children }) {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {children}
      </div>
      
    </section>
  )
}
