import "./Design.css";
import {
    DesignCard,
    DesignProjects,
} from "../assets/components/DesignProjectCards/DesignCard.jsx";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";

export function DesignsPage() {
    return (
        <>
            <InteractiveBackground />
            <Header />
            <main className='design-page'>
                <DesignProjects>
                    <DesignCard
                        title='Kaguya'
                        image='/Kaguya.png'
                    />
                    <DesignCard
                        title='Menu'
                        image='/Menu.png'
                        year='2024'
                    />
                    <DesignCard
                        title='Magazine'
                        image='/magazine.svg'
                        year='2024'
                    />
                    <DesignCard
                        title='Poster'
                        image='/poster.svg'
                        year='2024'
                    />
                </DesignProjects>

                <section className="design-club-section">
                    <h2 className="design-club-heading">Club Projects</h2>
                    <div className="design-club-grid">
                        <div className="design-club-card">
                            <div className="design-club-image-wrap">
                                <img src="/club1.png" alt="Club design 1" className="design-club-image" />
                            </div>
                        </div>
                        <div className="design-club-card">
                            <div className="design-club-image-wrap">
                                <img src="/club2.png" alt="Club design 2" className="design-club-image" />
                            </div>
                        </div>
                        <div className="design-club-card">
                            <div className="design-club-image-wrap">
                                <img src="/club3.png" alt="Club design 3" className="design-club-image" />
                            </div>
                        </div>
                        <div className="design-club-card">
                            <div className="design-club-image-wrap">
                                <img src="/club4.png" alt="Club design 4" className="design-club-image" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
