import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./WingnutorooPage.css";

export function WingnutorooPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="wingnutoroo-page">
        <ProjectShowcase
          image="/wingnutoroo.svg"
          number="05"
          name="Wingnutoroo"
          link="#"
        />

        <div className="wingnutoroo-description">
          <div className="wingnutoroo-description-left">
            <h2 className="wingnutoroo-description-heading">Overview</h2>
            <p className="wingnutoroo-description-text">
              About Wingnutoroo
            </p>
          </div>
          <div className="wingnutoroo-description-right">
            <h2 className="wingnutoroo-description-heading">Year</h2>
            <p className="wingnutoroo-description-text">2024</p>
            <h2 className="wingnutoroo-description-heading">Team</h2>
            <p className="wingnutoroo-description-text">Solo project</p>
            <h2 className="wingnutoroo-description-heading">My role</h2>
            <p className="wingnutoroo-description-text">Designer</p>
          </div>
        </div>

        <div className="wingnutoroo-design-desc">
          <h2 className="wingnutoroo-design-desc-heading">Design</h2>
          <p className="wingnutoroo-design-desc-text">
             Desc....
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
