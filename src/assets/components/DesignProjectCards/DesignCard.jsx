import "./DesignCard.css";
import { useNavigate } from "react-router-dom";

export function DesignCard({ title, image }) {
    const navigate = useNavigate();

    const handleViewProject = () => {
        const routes = {
            Kaguya: "/kaguya",
            Menu: "/menu",
            Magazine: "/magazine",
            Poster: "/poster",
            Wingnutoroo: "/wingnutoroo",
        };
        const route = routes[title];
        if (route) navigate(route);
    };

    return (
        <div className='design-card'>
            <div className='design-card-image-wrap'>
                <img
                    src={image}
                    alt={title}
                    className='design-card-image'
                />
            </div>
            <div className='design-card-footer'>
                <h3 className='design-card-title'>{title}</h3>
                <button
                    type='button'
                    className='design-card-view'
                    onClick={handleViewProject}
                    aria-label={`View ${title}`}>
                    <img
                        src='/Arrows.svg'
                        alt=''
                        className='design-card-arrow'
                    />
                </button>
            </div>
        </div>
    );
}

export function DesignProjects({ children }) {
    return (
        <section
            className='design-projects'
            id='designs'>
            <div className='design-projects-grid'>{children}</div>
        </section>
    );
}
