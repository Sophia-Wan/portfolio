import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./PoPaPage.css";

export function PoPaPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <div className="popa-page">
        <div className="popa-content">
          <ProjectShowcase
            image="/PoPa.svg"
            number="04"
            name="PoPa"
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
