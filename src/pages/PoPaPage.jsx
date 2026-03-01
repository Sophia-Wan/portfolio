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
      <main className="popa-page">
        <ProjectShowcase
          image="/PoPa.svg"
          number="04"
          name="PoPa"
          link="#"
        />

        <div className="popa-description">
          <div className="popa-description-left">
            <h2 className="popa-description-heading">Overview</h2>
            <p className="popa-description-text">
              About PoPa
            </p>
          </div>
          <div className="popa-description-right">
            <h2 className="popa-description-heading">Year</h2>
            <p className="popa-description-text">2025</p>
            <h2 className="popa-description-heading">Team</h2>
            <p className="popa-description-text">2 Members</p>
            <h2 className="popa-description-heading">My role</h2>
            <p className="popa-description-text">Designer, Illustrator, Prototyper</p>
          </div>
        </div>

        <div className="popa-design-desc">
          <h2 className="popa-design-desc-heading">Design</h2>
          <p className="popa-design-desc-text">
            Desc....
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
