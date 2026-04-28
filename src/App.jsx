import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./assets/components/navbar/navbar.jsx";
import LandingSection from "./assets/components/landing/LandingSection.jsx";
import { Hero } from "./assets/components/hero/hero.jsx";
import {
    Projects,
    ProjectCard,
} from "./assets/components/projectcards/projects.jsx";
import { ClubCarousel } from "./assets/components/ClubCarousel/ClubCarousel.jsx";
import { About } from "./assets/components/about/About.jsx";
import { Footer } from "./assets/components/footer/footer.jsx";
import { InteractiveBackground } from "./assets/components/background/InteractiveBackground.jsx";
import { ScrollToTopButton } from "./assets/components/ScrollToTop/ScrollToTopButton.jsx";
import { ForgePage } from "./pages/ForgePage.jsx";
import { MoolahmatePage } from "./pages/MoolahmatePage.jsx";
import { BanditBreakoutPage } from "./pages/BanditBreakoutPage.jsx";
import { GameCatalogPage } from "./pages/GameCatalogPage.jsx";
import { DesignsPage } from "./pages/Design.jsx";
import { KaguyaPage } from "./pages/Kaguya.jsx";
import { MenuPage } from "./pages/MenuPage.jsx";
import { MagazinePage } from "./pages/MagazinePage.jsx";
import { PosterPage } from "./pages/PosterPage.jsx";
import { WingnutorooPage } from "./pages/WingnutorooPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import "./App.css";

function Landing() {
    if (sessionStorage.getItem("landing-seen")) {
        return <Navigate to="/home" replace />;
    }
    return <LandingSection />;
}

function Home() {
    return (
        <>
            <InteractiveBackground />
            <Header />
            <Hero />
            <About />
            <Projects>
                <ProjectCard
                    title='Forge'
                    year='2023'
                    image='/Forge.svg'
                    description='An app aimed to help high school students discover trade careers through interactive career simulations.'
                />
                <ProjectCard
                    title='Bandit Breakout'
                    year='2024'
                    image='/Bandit_breakout.svg?v=2'
                    description='A mini game built around quick reflexes and mischief.'
                       video='/BB_Video.mp4'
                       videoPoster='/BanditBreakout.svg'
                    
                />
                <ProjectCard
                    title='Moolahmate'
                    year='2024'
                    image='/Moolahmate.svg'
                    description='A friendly money-tracker app guided by MooMoo the cow.'
                    accent='moolahmate'
                />
                {/* PoPa & Design Jam — hidden for now; re-add ProjectCards + routes when ready */}
            </Projects>
            <section className="home-designs">
                <h2>Designs</h2>
                <ClubCarousel />
            </section>
            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/forge" element={<ForgePage />} />
                    <Route path="/moolahmate" element={<MoolahmatePage />} />
                    <Route path="/bandit-breakout" element={<BanditBreakoutPage />} />
                    <Route path="/gamecatalog" element={<GameCatalogPage />} />
                    <Route path="/designs" element={<DesignsPage />} />
                    <Route path="/kaguya" element={<KaguyaPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/magazine" element={<MagazinePage />} />
                    <Route path="/poster" element={<PosterPage />} />
                    <Route path="/wingnutoroo" element={<WingnutorooPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <ScrollToTopButton />
            </>
        </BrowserRouter>
    );
}

export default App;
