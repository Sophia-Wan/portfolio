import { useNavigate } from "react-router-dom";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { FigmaPrototype } from "../assets/components/figma/FigmaPrototype.jsx";
import { LiveApp } from "../assets/components/liveapp/LiveApp.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./ForgePage.css";

export function ForgePage() {
    const navigate = useNavigate();

    return (
        <>
            <InteractiveBackground />
            <Header />
            <div className='forge-page'>
                <div className='forge-content'>
                    <ProjectShowcase
                        image='/Forge Mockup.png'
                        number='01'
                        name='Forge'
                        link='http://forgecareers.ca/'
                    />

                    <div className='forge-description'>
                        <div className='forge-description-left'>
                            <h2 className='forge-description-heading'>
                                Overview
                            </h2>
                            <p className='forge-description-text'>
                                Forge is a career pathway app designed to help
                                high school students explore and discover trade
                                careers through interactive career simulations.
                                This team-based project focused on making trades
                                job finding more engaging, personalized, and
                                accessible for students who may not know where
                                to start.
                            </p>
                        </div>
                        <div className='forge-description-right'>
                            <div className='forge-detail-block'>
                                <h3 className='forge-detail-label'>Year</h3>
                                <p className='forge-detail-value'>2025</p>
                            </div>
                            <div className='forge-detail-block'>
                                <h3 className='forge-detail-label'>Team</h3>
                                <p className='forge-detail-value'>8 members</p>
                            </div>
                            <div className='forge-detail-block'>
                                <h3 className='forge-detail-label'>My Role</h3>
                                <p className='forge-detail-value'>
                                    UI/UX Designer, Illustrator, Front-end
                                    Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
