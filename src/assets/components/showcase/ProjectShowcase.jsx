import { useState } from "react";
import "./ProjectShowcase.css";

export function ProjectShowcase({ projects, image, number, name, link }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // If individual props are provided, create a single-item array
    // Otherwise use the projects array
    let projectsArray = [];
    if (image || number || name || link) {
        projectsArray = [{ image, number, name, link }];
    } else if (projects && projects.length > 0) {
        projectsArray = projects;
    }

    if (projectsArray.length === 0) {
        return (
            <div className='project-showcase-container'>
                <p>No projects to display</p>
            </div>
        );
    }

    const currentProject = projectsArray[currentIndex];
    const hasMultipleProjects = projectsArray.length > 1;

    const handlePrevious = () => {
        if (hasMultipleProjects) {
            setCurrentIndex((prev) =>
                prev === 0 ? projectsArray.length - 1 : prev - 1,
            );
        }
    };

    const handleNext = () => {
        if (hasMultipleProjects) {
            setCurrentIndex((prev) =>
                prev === projectsArray.length - 1 ? 0 : prev + 1,
            );
        }
    };

    return (
        <div className='project-showcase-container'>
            <button
                className='nav-arrow nav-arrow-left'
                onClick={handlePrevious}
                aria-label='Previous project'
                disabled={!hasMultipleProjects}>
                &lt;
            </button>

            <div className='project-showcase-content'>
                <img
                    src={currentProject.image}
                    alt={currentProject.name}
                    className='project-showcase-image'
                />

                <div className='project-details-right'>
                    <div className='project-number'>
                        {currentProject.number}
                    </div>
                    <h2 className='project-showcase-name-right'>
                        {currentProject.name}
                    </h2>
                    <a
                        href={currentProject.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='view-website-button'>
                        View Website
                    </a>
                </div>
            </div>

            <button
                className='nav-arrow nav-arrow-right'
                onClick={handleNext}
                aria-label='Next project'
                disabled={!hasMultipleProjects}>
                &gt;
            </button>
        </div>
    );
}
