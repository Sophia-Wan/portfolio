import { useState } from "react";
import "./MenuPage.css";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";

/* Replace these image paths with your menu page images (e.g. menu page 1, 2, 3) */
const MENU_CAROUSEL_IMAGES = ["/Menu1.png", "/Menu2.png", "/Menu3.png"];

export function MenuPage() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const goPrev = () => {
    setCarouselIndex((i) =>
      i === 0 ? MENU_CAROUSEL_IMAGES.length - 1 : i - 1
    );
  };
  const goNext = () => {
    setCarouselIndex((i) =>
      i === MENU_CAROUSEL_IMAGES.length - 1 ? 0 : i + 1
    );
  };

  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="menu-page">
        <ProjectShowcase
          image="/Menu.png"
          number="02"
          name="Menu"
          link="#"
        />

        <div className="menu-description">
          <div className="menu-description-left">
            <h2 className="menu-description-heading">Overview</h2>
            <p className="menu-description-text">
             The purpose of this menu is to provide a clear and easy to navigate menu for the restaurant. It is designed to be visually appealing and easy to use, with a focus on providing information about the restaurant's menu and services.The theme focused on a pale green with touch of gold, and moon and wisteria elements, the menu is designed to be a calming and inviting experience for the guests.
            </p>
          </div>
          <div className="menu-description-right">
            <h2 className="menu-description-heading">Year</h2>
            <p className="menu-description-text">2024</p>
            <h2 className="menu-description-heading">Team</h2>
            <p className="menu-description-text">Solo project</p>
            <h2 className="menu-description-heading">My role</h2>
            <p className="menu-description-text">Designer</p>
          </div>
        </div>

        <div className="menu-design-desc">
          <h2 className="menu-design-desc-heading">Design</h2>
          <p className="menu-design-desc-text">
          This brunch menu focuses on clear layout and visual balance, making
              it easy for guests to scan and find what they're looking for across
              a three-page layout. I used soft colours, elegant typography, and
              subtle decorative elements to create a cozy, welcoming brunch
              vibe while keeping the information organized.
          </p>
        </div>

        <div className="menu-carousel">
          <div className="menu-carousel-inner">
            <button
              type="button"
              className="menu-carousel-prev"
              onClick={goPrev}
              aria-label="Previous"
            >
              <img
                src="/Arrows.svg"
                alt=""
                className="menu-carousel-arrow menu-carousel-arrow-prev"
              />
            </button>
            <div className="menu-carousel-track">
              {MENU_CAROUSEL_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className={`menu-carousel-slide ${i === carouselIndex ? "active" : ""}`}
                  aria-hidden={i !== carouselIndex}
                >
                  {src ? (
                    <img src={src} alt={`Menu page ${i + 1}`} />
                  ) : (
                    <span className="menu-carousel-placeholder">
                      Add image {i + 1}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              className="menu-carousel-next"
              onClick={goNext}
              aria-label="Next"
            >
              <img
                src="/Arrows.svg"
                alt=""
                className="menu-carousel-arrow menu-carousel-arrow-next"
              />
            </button>
          </div>
          <div className="menu-carousel-dots">
            {MENU_CAROUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`menu-carousel-dot ${i === carouselIndex ? "active" : ""}`}
                onClick={() => setCarouselIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
