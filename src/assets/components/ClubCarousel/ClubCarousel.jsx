import { useNavigate } from "react-router-dom";
import "./ClubCarousel.css";

const carouselItems = [
  { src: "/Kaguya.png", alt: "Kaguya", route: "/kaguya" },
  { src: "/club1.png", alt: "Club design 1" },
  { src: "/Menu.png", alt: "Menu", route: "/menu" },
  { src: "/club2.png", alt: "Club design 2" },
  { src: "/MagazineCover.png", alt: "Magazine", route: "/magazine" },
  { src: "/club3.png", alt: "Club design 3" },
  { src: "/club4.png", alt: "Club design 4" },
];

export function ClubCarousel() {
  const navigate = useNavigate();
  const doubled = [...carouselItems, ...carouselItems];

  return (
    <div className="club-carousel">
      <div className="club-carousel-track">
        {doubled.map((item, i) => (
          <div
            className={`club-carousel-slide${item.route ? " club-carousel-slide--link" : ""}`}
            key={`${item.src}-${i}`}
            onClick={item.route ? () => navigate(item.route) : undefined}
          >
            <img src={item.src} alt={item.alt} className="club-carousel-img" />
            {item.alt && !item.alt.startsWith("Club") && (
              <span className="club-carousel-label">{item.alt}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
