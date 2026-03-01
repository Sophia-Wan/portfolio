import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./MagazinePage.css";

export function MagazinePage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="magazine-page">
        <ProjectShowcase
          image="/magazine.svg"
          number="03"
          name="Magazine"
          link="#"
        />

        <div className="magazine-description">
          <div className="magazine-description-left">
            <h2 className="magazine-description-heading">Overview</h2>
            <p className="magazine-description-text">
              About Magazine
            </p>
          </div>
          <div className="magazine-description-right">
            <h2 className="magazine-description-heading">Year</h2>
            <p className="magazine-description-text">2024</p>
            <h2 className="magazine-description-heading">Team</h2>
            <p className="magazine-description-text">Solo project</p>
            <h2 className="magazine-description-heading">My role</h2>
            <p className="magazine-description-text">Designer</p>
          </div>
        </div>

        <div className="magazine-design-desc">
          <h2 className="magazine-design-desc-heading">Design</h2>
          <p className="magazine-design-desc-text">
            Desc....
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
