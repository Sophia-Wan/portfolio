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
        </div>
      </main>
      <Footer />
    </>
  );
}
