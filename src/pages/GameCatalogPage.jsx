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
      <main className="gamecatalog-page">
        <ProjectShowcase
          image="/GamesVault.svg"
          number="06"
          name="GameCatalog"
          link="#"
        />

        <div className="gamecatalog-description">
          <div className="gamecatalog-description-left">
            <h2 className="gamecatalog-description-heading">Overview</h2>
            <p className="gamecatalog-description-text">
              About GameCatalog
            
            </p>
          </div>
          <div className="gamecatalog-description-right">
            <h2 className="gamecatalog-description-heading">Year</h2>
            <p className="gamecatalog-description-text">2025</p>
            <h2 className="gamecatalog-description-heading">Team</h2>
            <p className="gamecatalog-description-text">4 members</p>
            <h2 className="gamecatalog-description-heading">My role</h2>
            <p className="gamecatalog-description-text">Designer</p>
          </div>
        </div>

        <div className="gamecatalog-design-desc">
          <h2 className="gamecatalog-design-desc-heading">Design</h2>
          <p className="gamecatalog-design-desc-text">
           Desc....
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
