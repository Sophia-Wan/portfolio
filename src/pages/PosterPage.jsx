import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./PosterPage.css";

export function PosterPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="poster-page">
        <ProjectShowcase
          image="/poster.svg"
          number="04"
          name="Poster"
          link="#"
        />

        <div className="poster-description">
          <div className="poster-description-left">
            <h2 className="poster-description-heading">Overview</h2>
            <p className="poster-description-text">
              About Poster
            </p>
          </div>
          <div className="poster-description-right">
            <h2 className="poster-description-heading">Year</h2>
            <p className="poster-description-text">2024</p>
            <h2 className="poster-description-heading">Team</h2>
            <p className="poster-description-text">Solo project</p>
            <h2 className="poster-description-heading">My role</h2>
            <p className="poster-description-text">Designer</p>
          </div>
        </div>

        <div className="poster-design-desc">
          <h2 className="poster-design-desc-heading">Design</h2>
          <p className="poster-design-desc-text">
            Add your design description here—concept, typography, colour,
            composition, or any other design notes for the poster.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
