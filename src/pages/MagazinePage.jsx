import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import { MagazineFlipbook } from "../assets/components/magazine/MagazineFlipbook.jsx";
import "./MagazinePage.css";


const MAGAZINE_PAGE_IMAGES = [
  "/magazine/CoverPage.png",
  "/magazine/pg1.png",
  "/magazine/pg2.png",
  "/magazine/pg3.png",
  "/magazine/pg4.png",
  "/magazine/pg5.png",
  "/magazine/pg6.png",
  "/magazine/pg7.png",
  "/magazine/pg8.png",
  "/magazine/pg9.png",
  "/magazine/pg10.png",
  "/magazine/pg11.png",
  "/magazine/pg12.png",
  "/magazine/pg13.png",
  "/magazine/pg14.png",
  "/magazine/pg15.png",
];

export function MagazinePage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="magazine-page">
        <ProjectShowcase
          image="/MagazineCover.png"
          number="03"
          name="Magazine"
          link="#"
        />

        <div className="magazine-description">
          <div className="magazine-description-left">
            <h2 className="magazine-description-heading">Overview</h2>
            <p className="magazine-description-text">
            This project is a travel magazine cover about a tour from Shanghai to Hong Kong, combining modern city vibes with cultural elements. I focused on creating a clear and eye-catching layout that highlights the journey while keeping the design clean and easy to read.
            </p>
          </div>
          <div className="magazine-description-right">
            <h2 className="magazine-description-heading">Year</h2>
            <p className="magazine-description-text">2025</p>
            <h2 className="magazine-description-heading">Apps Used</h2>
            <div className="magazine-app-tags">
              <div className="magazine-app-tag">
                <img src="/cloud_tag.svg" alt="" className="magazine-app-tag-icon" />
                <span>Figma</span>
              </div>
              <div className="magazine-app-tag">
                <img src="/cloud_tag.svg" alt="" className="magazine-app-tag-icon" />
                <span>InDesign</span>
              </div>
              <div className="magazine-app-tag">
                <img src="/cloud_tag.svg" alt="" className="magazine-app-tag-icon" />
                <span>Photoshop</span>
              </div>
              <div className="magazine-app-tag">
                <img src="/cloud_tag.svg" alt="" className="magazine-app-tag-icon" />
                <span>Illustrator</span>
              </div>
            </div>
            </div>
          </div>

        <div className="magazine-design-desc">
          <h2 className="magazine-design-desc-heading">Design</h2>
          <p className="magazine-design-desc-text">
         
        
          I used bold typography for the title to make it stand out, paired with a simpler font for the supporting text to create contrast. The colors and imagery were chosen to reflect both the energy of city life and the excitement of travel, while keeping the overall look balanced and polished.
          </p>

          <h2 className="magazine-design-desc-heading magazine-flip-section-title">
            Take a look!
          </h2>
          <MagazineFlipbook pages={MAGAZINE_PAGE_IMAGES} />
        </div>
      </main>
      <Footer />
    </>
  );
}
