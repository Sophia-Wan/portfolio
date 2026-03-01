import "./ProjectShowcase.css";

export function ProjectShowcase({ projects, image, number, name, link }) {
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

    const currentProject = projectsArray[0];

    return (
        <div className='project-showcase-container'>
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
                    {currentProject.link &&
                        currentProject.link !== '#' && (
                            <a
                                href={currentProject.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='view-website-button'>
                                View Website
                            </a>
                        )}
                </div>
            </div>
        </div>
    );
}
