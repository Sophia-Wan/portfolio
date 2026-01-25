import { Header } from "./assets/components/navbar/navbar.jsx";
import { Hero } from "./assets/components/hero/hero.jsx";
import { Projects, ProjectCard } from "./assets/components/projectcards/projects.jsx";
import { Footer } from "./assets/components/footer/footer.jsx";
import { InteractiveBackground } from "./assets/components/background/InteractiveBackground.jsx";
import "./App.css";

function App() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <Hero />
      <Projects>
        <ProjectCard title="Forge" year="2023" image="/Forge.svg" />
        <ProjectCard title="Moolahmate" year="2024" image="/Moolahmate.svg" />
        <ProjectCard title="Bandit Breakout" year="2024" image="/Bandit_breakout.svg?v=2" />
        <ProjectCard title="PoPa" year="2024" image="/PoPa.svg" />
        <ProjectCard title="Design Jam" year="2024" image="/Design Jam.svg" />
        <ProjectCard title="GameCatalog" year="2024" image="/GamesVault.svg" />
      </Projects>
      <Footer />
    </>
  );
}

export default App;
