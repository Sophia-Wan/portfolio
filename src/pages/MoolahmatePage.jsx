import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import { FigmaPrototype } from "../assets/components/figma/FigmaPrototype.jsx";
import "./MoolahmatePage.css";

/** Figma: Share → Copy link (must include /proto/). Prefer .env; or paste URL below. */
const MOOLAHMATE_FIGMA_URL_FALLBACK = "https://www.figma.com/proto/5iSUaXWfQOPQpaH66eqeA6/High-Fi-wireframes?node-id=2-2&t=HInkgZeGdIAWZsWe-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=2%3A15";
const MOOLAHMATE_FIGMA_URL =
  import.meta.env.VITE_MOOLAHMATE_FIGMA_URL || MOOLAHMATE_FIGMA_URL_FALLBACK;

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
            MoolahMate is a playful and beginner-friendly money management app designed to help users track their finances in a simple and engaging way. Guided by MooMoo the Cow, the app turns everyday budgeting into an approachable experience by making financial tracking feel less intimidating and more interactive.
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
          <h2 className="moolahmate-design-desc-heading">Goal</h2>
          <p className="moolahmate-design-desc-text">
            The goal of MoolahMate is to help users build better money habits by providing an easy way to monitor spending, manage budgets, and stay aware of their financial progress. With a lighthearted design and clear interface, MoolahMate makes personal finance more accessible.
          </p>

          <h2 className="moolahmate-design-desc-heading">Functions</h2>
          <p className="moolahmate-design-desc-text">
            MoolahMate includes several features designed to make managing money simple and engaging. The app offers detailed expense tracking, allowing users to record and categorize their spending so they can clearly see where their money goes. It also supports personal goal setting, enabling users to create savings goals and track their progress over time, helping them stay motivated and build better financial habits. Guiding the experience is MooMoo the Cow, the app’s friendly mascot who provides tips, encouragement, and a playful touch that makes managing finances feel less intimidating and more enjoyable.
          </p>
        

          <div className="moolahmate-figma">
            {MOOLAHMATE_FIGMA_URL ? (
              <FigmaPrototype
                figmaUrl={MOOLAHMATE_FIGMA_URL}
                title="Try it Out!"
                height="min(720px, 85vh)"
                loadStrategy="immediate"
                theme="light"
              />
            ) : (
              <p className="moolahmate-figma-hint">
                Add your Figma prototype URL: set{" "}
                <code className="moolahmate-figma-code">VITE_MOOLAHMATE_FIGMA_URL</code>{" "}
                in a <code className="moolahmate-figma-code">.env</code> file, or edit{" "}
                <code className="moolahmate-figma-code">MoolahmatePage.jsx</code>.
                Set <code className="moolahmate-figma-code">loadStrategy=&quot;interaction&quot;</code> on{" "}
                <code className="moolahmate-figma-code">FigmaPrototype</code> if you prefer click-to-load instead.
              </p>
            )}
          </div>
          <h2 className="moolahmate-design-desc-heading">Meet the Team</h2>
          <div className="moolahmate-team-image-wrap">
            <img
              src="/Meet-The-Team.png"
              alt="MoolahMate team"
              className="moolahmate-team-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
