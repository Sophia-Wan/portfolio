import { useNavigate } from "react-router-dom";
import "./ClubCarousel.css";

const carouselItems = [
  { src: "/Kaguya.png", alt: "Kaguya", route: "/kaguya" },
  {
    src: "/sponsorship_package.png",
    alt: "Sponsorship Package",
    href: "https://indd.adobe.com/view/02541287-87ea-4b4b-a886-4895a55d5cae",
  },
  { src: "/Menu.png", alt: "Menu", route: "/menu" },
  {
    src: "/newsletter_Jan-Feb.png",
    alt: "BCIT Racing Newsletter",
    href: "https://indd.adobe.com/view/96e5c12f-ed22-4ce6-b016-d55521671bbe",
  },
  { src: "/MagazineCover.png", alt: "Magazine", route: "/magazine" },
  {
    src: "/newsletter.png",
    alt: "BCIT Racing Newsletter (Sept–Dec)",
    href: "https://indd.adobe.com/view/d56d23d5-96d9-4394-8ad1-68a2e35ba417",
  },
  { src: "/BCIT_Resume_Cover.jpg", alt: "BCIT Racing Resume Book (2024–25)" },
  { src: "/Resume_Cover_2025-2026.jpg", alt: "BCIT Racing Resume Book (2025–26)" },
];

export function ClubCarousel() {
  const navigate = useNavigate();
  const doubled = [...carouselItems, ...carouselItems];

  return (
    <div className="club-carousel">
      <div className="club-carousel-track">
        {doubled.map((item, i) => {
          const handleClick = item.href
            ? () => window.open(item.href, "_blank", "noopener,noreferrer")
            : item.route
              ? () => navigate(item.route)
              : undefined;
          const isInteractive = Boolean(item.href || item.route);

          return (
            <div
              className={`club-carousel-slide${isInteractive ? " club-carousel-slide--link" : ""}`}
              key={`${item.src}-${i}`}
              onClick={handleClick}
            >
              <img src={item.src} alt={item.alt} className="club-carousel-img" />
              {item.alt && !item.alt.startsWith("Club") && (
                <span className="club-carousel-label">{item.alt}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
