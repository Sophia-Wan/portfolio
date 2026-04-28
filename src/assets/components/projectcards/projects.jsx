import { Children, cloneElement, isValidElement } from "react";
import "./projects.css";
import { SparkleButton } from "../button/sparklebutton.jsx";
import { Reveal } from "../reveal/Reveal.jsx";
import { useReveal } from "../reveal/useReveal.js";
import { useNavigate } from "react-router-dom";

export function ProjectCard({ title, year, image, description, accent, video, videoPoster, revealDelay = 0 }) {
  const navigate = useNavigate();
  const [revealRef, revealVisible] = useReveal();

  const routes = {
    "Forge": "/forge",
    "Moolahmate": "/moolahmate",
    "Bandit Breakout": "/bandit-breakout",
    "GameCatalog": "/gamecatalog"
  };

  const comingSoonTitles = ["GameCatalog"];
  const isComingSoon = comingSoonTitles.includes(title);

  const handleViewProject = () => {
    if (isComingSoon) return;
    const route = routes[title];
    if (route) {
      navigate(route);
    }
  };

  const cardClass = [
    "project-card",
    "reveal",
    revealVisible ? "reveal--visible" : "",
    accent ? `project-card--${accent}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={revealRef}
      className={cardClass}
      style={revealDelay ? { transitionDelay: `${revealDelay}ms` } : undefined}
    >
      <img src="/butterfly.svg" alt="Butterfly decoration" className="butterfly-decoration" />
      <div className={`project-image ${image ? "has-image" : ""}`}>
        {video ? (
          <video
            className="project-image-svg project-image-video"
            src={video}
            poster={videoPoster || image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title}
          />
        ) : (
          <img src={image} alt={title} className="project-image-svg" />
        )}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-year">{year}</p>
        {description ? (
          <p className="project-description">{description}</p>
        ) : null}
        <SparkleButton onClick={handleViewProject} disabled={isComingSoon}>
          {isComingSoon ? "Coming soon" : "View Project"}
        </SparkleButton>
      </div>
    </div>
  );
}

export function Projects({ children }) {
  const cards = Children.toArray(children).map((child, i) =>
    isValidElement(child) ? cloneElement(child, { revealDelay: i * 140 }) : child
  );

  return (
    <section className="projects" id="projects">
      <Reveal as="h2">Projects</Reveal>
      <div className="projects-grid">{cards}</div>
    </section>
  );
}
