import { useState } from "react";
import "./ProjectShowcase.css";

/**
 * Reusable Project Showcase Component with Navigation
 * 
 * USAGE:
 * 
 * const projects = [
 *   {
 *     image: "/Forge.svg",
 *     number: "01",
 *     name: "Forge",
 *     link: "https://your-website.com"
 *   },
 *   {
 *     image: "/Moolahmate.svg",
 *     number: "02",
 *     name: "Moolahmate",
 *     link: "https://another-website.com"
 *   }
 * ];
 * 
 * <ProjectShowcase projects={projects} />
 * 
 * @param {Array} projects - Array of project objects with image, number, name, and link
 */
export function ProjectShowcase({ projects = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!projects || projects.length === 0) {
    return (
      <div className="project-showcase-container">
        <p>No projects to display</p>
      </div>
    );
  }

  const currentProject = projects[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-showcase-container">
      <button 
        className="nav-arrow nav-arrow-left" 
        onClick={handlePrevious}
        aria-label="Previous project"
      >
        &lt;
      </button>

      <div className="project-showcase-content">
        <div className="project-card-left">
          <img 
            src={currentProject.image} 
            alt={currentProject.name} 
            className="project-showcase-image"
          />
          <h3 className="project-showcase-name-left">{currentProject.name}</h3>
        </div>

        <div className="project-details-right">
          <div className="project-number">{currentProject.number}</div>
          <h2 className="project-showcase-name-right">{currentProject.name}</h2>
          <a 
            href={currentProject.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-website-button"
          >
            View Website
          </a>
        </div>
      </div>

      <button 
        className="nav-arrow nav-arrow-right" 
        onClick={handleNext}
        aria-label="Next project"
      >
        &gt;
      </button>
    </div>
  );
}

