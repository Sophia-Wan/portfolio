import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./MoolahmatePage.css";

export function MoolahmatePage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="moolahmate-page">
        <ProjectShowcase
          image="/Moolahmate.svg"
          number="03"
          name="Moolahmate"
          link="#"
        />

        <div className="moolahmate-description">
          <div className="moolahmate-description-left">
            <h2 className="moolahmate-description-heading">Overview</h2>
            <p className="moolahmate-description-text">
              About Moolahmate
            </p>
          </div>
          <div className="moolahmate-description-right">
            <h2 className="moolahmate-description-heading">Year</h2>
            <p className="moolahmate-description-text">2025</p>
            <h2 className="moolahmate-description-heading">Team</h2>
            <p className="moolahmate-description-text">4 members</p>
            <h2 className="moolahmate-description-heading">My role</h2>
            <p className="moolahmate-description-text">UI/UX Designer, Project Lead, Front-end Developer</p>
          </div>
        </div>

        <div className="moolahmate-design-desc">
          <h2 className="moolahmate-design-desc-heading">Design</h2>
          <p className="moolahmate-design-desc-text">
           Desc....
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
