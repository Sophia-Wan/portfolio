import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./assets/components/navbar/navbar.jsx";
import { Hero } from "./assets/components/hero/hero.jsx";
import {
    Projects,
    ProjectCard,
} from "./assets/components/projectcards/projects.jsx";
import { Footer } from "./assets/components/footer/footer.jsx";
import { InteractiveBackground } from "./assets/components/background/InteractiveBackground.jsx";
import { ScrollToTopButton } from "./assets/components/ScrollToTop/ScrollToTopButton.jsx";
import { ForgePage } from "./pages/ForgePage.jsx";
import { MoolahmatePage } from "./pages/MoolahmatePage.jsx";
import { BanditBreakoutPage } from "./pages/BanditBreakoutPage.jsx";
import { PoPaPage } from "./pages/PoPaPage.jsx";
import { DesignJamPage } from "./pages/DesignJamPage.jsx";
import { GameCatalogPage } from "./pages/GameCatalogPage.jsx";
import { DesignsPage } from "./pages/Design.jsx";
import { KaguyaPage } from "./pages/Kaguya.jsx";
import "./App.css";

function Home() {
    return (
        <>
            <InteractiveBackground />
            <Header />
            <Hero />
            <Projects>
                <ProjectCard
                    title='Forge'
                    year='2023'
                    image='/Forge.svg'
                />
                <ProjectCard
                    title='Moolahmate'
                    year='2024'
                    image='/Moolahmate.svg'
                />
                <ProjectCard
                    title='Bandit Breakout'
                    year='2024'
                    image='/Bandit_breakout.svg?v=2'
                />
                <ProjectCard
                    title='PoPa'
                    year='2024'
                    image='/PoPa.svg'
                />
                <ProjectCard
                    title='Design Jam'
                    year='2024'
                    image='/Design Jam.svg'
                />
                <ProjectCard
                    title='GameCatalog'
                    year='2024'
                    image='/GamesVault.svg'
                />
            </Projects>
            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/forge" element={<ForgePage />} />
                    <Route path="/moolahmate" element={<MoolahmatePage />} />
                    <Route path="/bandit-breakout" element={<BanditBreakoutPage />} />
                    <Route path="/popa" element={<PoPaPage />} />
                    <Route path="/design-jam" element={<DesignJamPage />} />
                    <Route path="/gamecatalog" element={<GameCatalogPage />} />
                    <Route path="/designs" element={<DesignsPage />} />
                    <Route path="/kaguya" element={<KaguyaPage />} />
                </Routes>
                <ScrollToTopButton />
            </>
        </BrowserRouter>
    );
}

export default App;
