import { Header } from "./assets/components/navbar.jsx";
import { Hero } from "./assets/components/hero.jsx";
import { Projects, ProjectCard } from "./assets/components/projects.jsx";
import { Footer } from "./assets/components/footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects>
        <ProjectCard title="Forge" year="2023" image="/Forge.svg" />
        <ProjectCard title="Moolahmate" year="2024" image="/Moolahmate.svg" />
        <ProjectCard title="Bandit Breakout" year="2024" image="/Bandit_breakout.svg" />
        <ProjectCard title="PoPa" year="2024" image="/PoPa.svg" />
        <ProjectCard title="Design Jam" year="2024" image="/Design Jam.svg" />
        <ProjectCard title="GameCatalog" year="2024" image="/GameCatalog.svg" />
      </Projects>
      <Footer />
    </>
  );
}

export default App;
