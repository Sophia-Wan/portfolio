import "./Design.css";
import {
    DesignCard,
    DesignProjects,
} from "../assets/components/DesignProjectCards/DesignCard.jsx";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";

/**
 * Club / sponsorship piece list.
 * To add a new piece:
 *   1. Drop the image (and PDF, if any) into `public/` — e.g. `public/sponsorship-package.pdf`.
 *   2. Add an entry below with image, title, and href.
 *
 * `href` can be:
 *   - "/sponsorship-package.pdf"   → opens a PDF you put in public/
 *   - "https://example.com/..."     → opens any external link
 *   - omitted                       → card just displays (not clickable)
 */
const CLUB_PROJECTS = [
    {
        id: "club-1",
        title: "Sponsorship Package",
        image: "/sponsorship_package.png",
        href: "https://indd.adobe.com/view/02541287-87ea-4b4b-a886-4895a55d5cae",
    },
    {
        id: "club-2",
        title: "BCIT Racing Newsletter",
        image: "/newsletter_Jan-Feb.png",
        href: "https://indd.adobe.com/view/96e5c12f-ed22-4ce6-b016-d55521671bbe",
    },
    {
        id: "club-3",
        title: "BCIT Racing Newsletter",
        image: "/newsletter.png",
        href: "https://indd.adobe.com/view/d56d23d5-96d9-4394-8ad1-68a2e35ba417",
    },
    {
        id: "club-4",
        title: "BCIT Racing Resume Book (2024–25)",
        image: "/BCIT_Resume_Cover.jpg",
        href: "",
    },
    {
        id: "club-5",
        title: "BCIT Racing Resume Book (2025–26)",
        image: "/Resume_Cover_2025-2026.jpg",
        href: "",
    },
];

function ClubCard({ title, image, href }) {
    const media = (
        <div className='design-club-image-wrap'>
            {image ? (
                <img src={image} alt={title} className='design-club-image' />
            ) : (
                <span className='design-club-image-placeholder'>Coming soon</span>
            )}
        </div>
    );

    if (href) {
        const isExternal = /^https?:\/\//i.test(href);
        return (
            <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='design-club-card design-club-card--linked'
                aria-label={`${title}${isExternal ? " (opens in a new tab)" : ""}`}>
                {media}
                <div className='design-club-footer'>
                    <span className='design-club-button'>Read Me</span>
                </div>
            </a>
        );
    }

    return <div className='design-club-card design-club-card--image-only'>{media}</div>;
}

export function DesignsPage() {
    return (
        <>
            <InteractiveBackground />
            <Header />
            <main className='design-page'>
                <DesignProjects>
                    <DesignCard title='Kaguya' image='/Kaguya.png' />
                    <DesignCard title='Menu' image='/Menu.png' year='2024' />
                    <DesignCard
                        title='Magazine'
                        image='/MagazineCover.png'
                        year='2024'
                    />
                    {/* Poster — hidden for now; route /poster still works if linked elsewhere */}
                </DesignProjects>

                <section className='design-club-section'>
                    <h2 className='design-club-heading'>Club Projects</h2>
                    <div className='design-club-grid'>
                        {CLUB_PROJECTS.map((p) => (
                            <ClubCard
                                key={p.id}
                                title={p.title}
                                image={p.image}
                                href={p.href}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
