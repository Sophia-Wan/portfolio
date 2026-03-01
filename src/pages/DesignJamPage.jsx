import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./DesignJamPage.css";

export function DesignJamPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="design-jam-page">
        <ProjectShowcase
          image="/Design Jam.svg"
          number="05"
          name="Design Jam"
          link="#"
        />

        <div className="design-jam-description">
          <div className="design-jam-description-left">
            <h2 className="design-jam-description-heading">Overview</h2>
            <p className="design-jam-description-text">
             About Design Jam
            </p>
          </div>
          <div className="design-jam-description-right">
            <h2 className="design-jam-description-heading">Year</h2>
            <p className="design-jam-description-text">2024</p>
            <h2 className="design-jam-description-heading">Team</h2>
            <p className="design-jam-description-text">Solo project</p>
            <h2 className="design-jam-description-heading">My role</h2>
            <p className="design-jam-description-text">Designer</p>
          </div>
        </div>

        <div className="design-jam-design-desc">
          <h2 className="design-jam-design-desc-heading">Design</h2>
          <p className="design-jam-design-desc-text">
           Desc....
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
