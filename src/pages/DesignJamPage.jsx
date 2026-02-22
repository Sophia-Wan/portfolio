import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import "./DesignJamPage.css";

export function DesignJamPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <div className="design-jam-page">
        <div className="design-jam-content">
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
