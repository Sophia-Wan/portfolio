import "./projects.css"
import { SparkleButton } from "../button/sparklebutton.jsx"

export function ProjectCard({ title, year, image }) {
  return (
    <div className="project-card">
      <img src="/butterfly.svg" alt="Butterfly decoration" className="butterfly-decoration" />
      <div className={`project-image ${image ? "has-image" : ""}`}>
          <img src={image} alt={title} className="project-image-svg" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-year">{year}</p>
        <SparkleButton>View Project</SparkleButton>
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
