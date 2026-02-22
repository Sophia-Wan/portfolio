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
                    <DesignCard
                        title='Wingnutoroo'
                        image='/wingnutoroo.svg'
                        year='2024'
                    />
                </DesignProjects>
            </main>
            <Footer />
        </>
    );
}
