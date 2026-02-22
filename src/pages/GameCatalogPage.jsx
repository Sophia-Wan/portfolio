import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import "./GameCatalogPage.css";

export function GameCatalogPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <div className="gamecatalog-page">
        <div className="gamecatalog-content">
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
