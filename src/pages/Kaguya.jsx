import { useState } from "react";
import "./Kaguya.css";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";

const Kaguya_Designs = ["/Can1.png", "/Can2.png", "/Can3.png"];

export function KaguyaPage() {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const goPrev = () => {
        setCarouselIndex((i) => (i === 0 ? Kaguya_Designs.length - 1 : i - 1));
    };
    const goNext = () => {
        setCarouselIndex((i) => (i === Kaguya_Designs.length - 1 ? 0 : i + 1));
    };

    return (
        <>
            <InteractiveBackground />
            <Header />
            <main className='kaguya-page'>
                <ProjectShowcase
                    image='/Kaguya.png'
                    number='01'
                    name='Kaguya'
                    link='#'
                />
                <div className='kaguya-description'>
                    <div className='kaguya-description-left'>
                        <h2 className='kaguya-description-heading'>Overview</h2>
                        <p className='kaguya-description-text'>
                            The name Kaguya is inspired by the Japanese moon
                            princess folklore, reinforcing the brand’s
                            connection to nighttime, calm, and gentle fantasy.
                            Kaguya is a canned drink featuring flower-flavoured
                            milk mixed with honey, designed as a gentle
                            nighttime beverage for those seeking something sweet
                            yet subtle before sleep. The brand showcases three
                            flavours, labeled in both English and French, each
                            inspired by a different flower. The name Kaguya is
                            inspired by the Japanese moon princess folklore,
                            aligning the brand with lunar imagery and quiet
                            nighttime rituals.
                        </p>
                    </div>
                    <div className='kaguya-description-right'>
                        <h2 className='kaguya-description-heading'>Year</h2>
                        <p className='kaguya-description-text'>2024</p>
                        <h2 className='kaguya-description-heading'>Team</h2>
                        <p className='kaguya-description-text'>Solo project</p>
                        <h2 className='kaguya-description-heading'>My role</h2>
                        <p className='kaguya-description-text'>Designer</p>
                    </div>
                </div>

                <div className='kaguya-design-desc'>
                    <h2 className='kaguya-design-desc-heading'>Design</h2>
                    <p className='kaguya-design-desc-text'>
                        The can designs feature soft gradients, crescent
                        moon, and star details to create a dreamy, calming
                        atmosphere, while playful bunny illustrations add a
                        calm yet cute personality. Each flavour is
                        differentiated through its own colour palette while
                        maintaining a cohesive visual identity. Rounded
                        typography and a clean layout ensure clarity and
                        approachability, resulting in packaging that feels
                        comforting, whimsical, and soothing.
                    </p>
                </div>

                <div className='kaguya-carousel'>
                    <div className='kaguya-carousel-track'>
                        <button
                            type='button'
                            className='kaguya-carousel-prev'
                            onClick={goPrev}
                            aria-label='Previous'>
                            <img src="/Arrows.svg" alt="" className="kaguya-carousel-arrow kaguya-carousel-arrow-prev" />
                        </button>
                        {Kaguya_Designs.map((src, i) => (
                            <div
                                key={i}
                                className={`kaguya-carousel-slide ${i === carouselIndex ? "active" : ""}`}
                                aria-hidden={i !== carouselIndex}>
                                {src ? (
                                    <img
                                        src={src}
                                        alt={`Kaguya ${i + 1}`}
                                    />
                                ) : (
                                    <span className='kaguya-carousel-placeholder'>
                                        Add image {i + 1}
                                    </span>
                                )}
                            </div>
                        ))}
                        <button
                            type='button'
                            className='kaguya-carousel-next'
                            onClick={goNext}
                            aria-label='Next'>
                            <img src="/Arrows.svg" alt="" className="kaguya-carousel-arrow kaguya-carousel-arrow-next" />
                        </button>
                    </div>
                    <div className='kaguya-carousel-dots'>
                        {Kaguya_Designs.map((_, i) => (
                            <button
                                key={i}
                                type='button'
                                className={`kaguya-carousel-dot ${i === carouselIndex ? "active" : ""}`}
                                onClick={() => setCarouselIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <section className="kaguya-models" aria-label="3D can models">
                    <h2 className="kaguya-models-heading">3D Models</h2>
                    <div className="kaguya-models-grid">
                        <div className="kaguya-model-wrap">
                            <model-viewer
                                src="/can1.glb"
                                alt="Kaguya can 1"
                                camera-controls
                                auto-rotate
                                camera-orbit="180deg 75deg 105%"
                                className="kaguya-model-viewer"
                            />
                        </div>
                        <div className="kaguya-model-wrap">
                            <model-viewer
                                src="/can2.glb"
                                alt="Kaguya can 2"
                                camera-controls
                                auto-rotate
                                camera-orbit="180deg 75deg 105%"
                                className="kaguya-model-viewer"
                            />
                        </div>
                        <div className="kaguya-model-wrap">
                            <model-viewer
                                src="/can3.glb"
                                alt="Kaguya can 3"
                                camera-controls
                                auto-rotate
                                camera-orbit="180deg 75deg 105%"
                                className="kaguya-model-viewer"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
