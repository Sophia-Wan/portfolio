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
                        <h2>About This Project</h2>
                        <p>
                            Add your project description here. This is where you
                            can describe the Forge project, its purpose,
                            technologies used, and key features.
                        </p>
                    </div>

                    <FigmaPrototype
                        figmaUrl='https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/wjKad59FcjjUYrbksNSFto/Forge-App-MockUp?node-id=1725-3823&p=f&t=BqRgtKixIFvcBVNn-0&scaling=scale-down&content-scaling=fixed&page-id=1725%3A2428&starting-point-node-id=1725%3A3823&share=1'
                        title='Forge Prototype'
                        height='800px'
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
