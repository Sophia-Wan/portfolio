import { useNavigate } from "react-router-dom";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { FigmaPrototype } from "../assets/components/figma/FigmaPrototype.jsx";
import { LiveApp } from "../assets/components/liveapp/LiveApp.jsx";
import "./ForgePage.css";

export function ForgePage() {
  const navigate = useNavigate();

  return (
    <>
      <InteractiveBackground />
      <Header />
      <div className="forge-page">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Projects
        </button>
        <div className="forge-content">
          <h1>Forge</h1>
          <p className="forge-year">2023</p>
          <div className="forge-image-container">
            <img src="/Forge.svg" alt="Forge Project" className="forge-image" />
          </div>
          <div className="forge-description">
            <h2>About This Project</h2>
            <p>
              Add your project description here. This is where you can describe
              the Forge project, its purpose, technologies used, and key features.
            </p>
          </div>
          {/* 
            Use LiveApp for coded/deployed version of your app
            Just replace the appUrl with your deployed app URL
            Examples: Vercel, Netlify, CodeSandbox, or any live URL
          */}
          <LiveApp 
            appUrl="YOUR_DEPLOYED_APP_URL_HERE"
            title="Forge App"
            height="800px"
          />
          
          {/* 
            Or use FigmaPrototype for design mockups
            Uncomment below if you want to show the Figma prototype instead
          */}
          {/* <FigmaPrototype 
            figmaUrl="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/wjKad59FcjjUYrbksNSFto/Forge-App-MockUp?node-id=1725-3823&p=f&t=BqRgtKixIFvcBVNn-0&scaling=scale-down&content-scaling=fixed&page-id=1725%3A2428&starting-point-node-id=1725%3A3823&share=1"
            title="Forge Prototype"
            height="800px"
          /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

