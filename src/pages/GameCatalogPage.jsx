import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./GameCatalogPage.css";

export function GameCatalogPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <div className="gamecatalog-page">
        <div className="gamecatalog-content">
          <ProjectShowcase
            image="/GamesVault.svg"
            number="06"
            name="GameCatalog"
            link="#"
          />
          <div className="project-placeholder-box">
            <p className="project-placeholder-text">
              Currently under construction. Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
