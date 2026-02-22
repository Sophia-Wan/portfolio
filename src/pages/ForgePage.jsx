import { useNavigate } from "react-router-dom";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { FigmaPrototype } from "../assets/components/figma/FigmaPrototype.jsx";
import { LiveApp } from "../assets/components/liveapp/LiveApp.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./ForgePage.css";

export function ForgePage() {
    const navigate = useNavigate();

    return (
        <>
            <InteractiveBackground />
            <Header />
            <div className='forge-page'>
                <div className='forge-content'>
                    <ProjectShowcase
                        image='/Forge-mockup.png'
                        number='01'
                        name='Forge'
                        link='http://forgecareers.ca/'
                    />

                    <div className='forge-description'>
                        <div className='forge-description-left'>
                            <h2 className='forge-description-heading'>
                                Overview
                            </h2>
                            <p className='forge-description-text'>
                                Forge is a career pathway app designed to help
                                high school students explore and discover trade
                                careers through interactive career simulations.
                                This team-based project focused on making trades
                                job finding more engaging, personalized, and
                                accessible for students who may not know where
                                to start.
                            </p>
                        </div>
                        <div className='forge-description-right'>
                            <div className='forge-detail-block'>
                                <h3 className='forge-detail-label'>Year</h3>
                                <p className='forge-detail-value'>2025</p>
                            </div>
                            <div className='forge-detail-block'>
                                <h3 className='forge-detail-label'>Team</h3>
                                <p className='forge-detail-value'>8 members</p>
                            </div>
                            <div className='forge-detail-block'>
                                <h3 className='forge-detail-label'>My Role</h3>
                                <p className='forge-detail-value'>
                                    UI/UX Designer, Illustrator, Front-end
                                    Developer
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='forge-sections-wrapper'>
                        <div className='forge-problem forge-section-card'>
                            <h2 className='forge-description-heading'>
                                Problem
                            </h2>
                            <p className='forge-description-text'>
                                Teens and young adults often lack awareness of
                                skilled trade careers and clear guidance on how
                                to pursue them. Existing online information can
                                feel overwhelming and difficult to understand.
                                Students need a way to experience what a trade
                                career could feel like before committing to it.
                                <br />
                                <br />
                                We began by conducting a survey targeting
                                students in grades 11–12 who were about to
                                graduate. Based on the findings, we created two
                                personas to represent key challenges, including
                                overwhelming and difficult-to-understand online
                                information. The research revealed that students
                                need a way to experience what a trade career
                                could feel like before committing to it.
                            </p>

                            <div className='forge-problem-personas'>
                                <div className='forge-problem-persona'>
                                    <img
                                        src='/Persona1.png'
                                        alt='Forge persona 1'
                                        className='forge-problem-persona-image'
                                    />
                                </div>
                                <div className='forge-problem-persona'>
                                    <img
                                        src='/Persona2.png'
                                        alt='Forge persona 2'
                                        className='forge-problem-persona-image'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-section-layout'>
                                <div className='forge-section-text'>
                                    <h2 className='forge-description-heading'>
                                        Ideation
                                    </h2>
                                    <p className='forge-description-text'>
                                        While researching these issues, we found
                                        colours that could help.
                                        <br />
                                        → Orange: energy and optimism, motivates
                                        high school students while searching for
                                        careers.
                                        <br />
                                        → Green: growth, stability and
                                        opportunity: sustain skilled careers!
                                        <br />
                                        Adding key features such as badges and
                                        creating a character for our AI helped
                                        keep users entertained.
                                    </p>
                                </div>
                                <div className='forge-section-media'>
                                    {/* Replace src with your final ideation image if needed */}
                                    <img
                                        src='/Forge-colours.png'
                                        alt='Forge ideation colours'
                                        className='forge-ideation-image'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-section-layout forge-section-layout--reverse'>
                                <div className='forge-section-text'>
                                    <h2 className='forge-description-heading'>
                                        Illustration
                                    </h2>
                                    <p className='forge-description-text'>
                                        After getting the theme and colours of
                                        how Forge was to be like, it was time to
                                        start ideating illustrations. Some main
                                        illustrations we needed were: <br />{" "}
                                        <br />
                                        - our AI chatbox <br />
                                        - badges <br />
                                        - onboarding screens <br />- trade icons
                                    </p>
                                </div>
                                <div className='forge-section-media'>
                                    <div className='forge-illustration-grid'>
                                        <img
                                            src='/Forge-icon1.png'
                                            alt='Forge illustration 1'
                                            className='forge-illustration-image'
                                        />
                                        <img
                                            src='/Forge-icon2.png'
                                            alt='Forge illustration 2'
                                            className='forge-illustration-image'
                                        />
                                        <img
                                            src='/Forge-icon3.png'
                                            alt='Forge illustration 3'
                                            className='forge-illustration-image'
                                        />
                                        <img
                                            src='/Forge-icon4.png'
                                            alt='Forge illustration 4'
                                            className='forge-illustration-image'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-section-layout'>
                                <div className='forge-section-text'>
                                    <h2 className='forge-description-heading'>
                                        AI ChatBox
                                    </h2>
                                    <p className='forge-description-text'>
                                        My first main goal was designing the AI
                                        chat assistant that guides users through
                                        the career simulation. The character,
                                        named Anna, appears as the assistant
                                        icon and helps create a supportive and
                                        approachable experience.
                                        <br />
                                        <br />
                                        Anna’s design uses familiar
                                        trade-related colors and soft shapes to
                                        create a trustworthy yet approachable
                                        guide for students exploring career
                                        paths.
                                    </p>
                                </div>
                                <div className='forge-section-media forge-chatbox-media'>
                                    <img
                                        src='/Anna.png'
                                        alt='Forge AI chatbox'
                                        className='forge-chatbox-image'
                                    />
                                    <img
                                        src="/Anna.png"
                                        alt="Forge AI chatbox variant"
                                        className="forge-chatbox-image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-section-layout'>
                                <div className='forge-section-text'>
                                    <h2 className='forge-description-heading'>
                                        Badge
                                    </h2>
                                    <p className='forge-description-text'>
                                        While creating Forge, we wanted to add a
                                        rewarding system that acknowledges
                                        users’ progress after each milestone.
                                        After finalizing the AI chat bot app
                                        flow, I mapped out all the needed badges
                                        that would support and align with each
                                        stage of the experience.
                                    </p>
                                    </div>
                                <div className='forge-section-media forge-badge-media'>
                                    <img
                                        src='/badges.png'
                                        alt='Forge badges'
                                        className='forge-badge-icon-image'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-section-layout forge-section-layout--reverse'>
                                <div className='forge-section-text'>
                                    <h2 className='forge-description-heading'>
                                        Onboarding
                                    </h2>
                                    <p className='forge-description-text'>
                                        Each illustration represents a key step
                                        in the user journey: <br />
                                        - Welcome to Forge introduces the app
                                        with a simple, abstract visual to avoid
                                        information overload. <br />
                                        - Try Different Trades uses recognizable
                                        trade tools to communicate exploration
                                        and variety without requiring prior
                                        knowledge. <br />
                                        - Experience the Work shows a character
                                        actively working, helping students
                                        visualize what a trade career could feel
                                        like. <br />- Build Your Roadmap uses a
                                        road metaphor to represent progression,
                                        direction, and long-term planning.{" "}
                                        <br />
                                        - Ready to Forge Your Future combines
                                        tools and symbols to reinforce
                                        confidence and action before entering
                                        the app. <br />
                                    </p>
                                </div>
                                <div className='forge-section-media'>
                                    <div className='forge-onboarding-grid'>
                                        <img
                                            src='/Onboarding1.svg'
                                            alt='Forge onboarding 1'
                                            className='forge-onboarding-image'
                                        />
                                        <img
                                            src='/Forge-icon2.png'
                                            alt='Forge onboarding 2'
                                            className='forge-onboarding-image'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-section-layout'>
                                <div className='forge-section-text'>
                                    <h2 className='forge-description-heading'>
                                        Trade Icons
                                    </h2>
                                    <p className='forge-description-text'>
                                        The trade icons were designed as part of
                                        Forge’s reward system to make career
                                        exploration more engaging and visually
                                        intuitive. Each badge represents a trade
                                        using simple, familiar symbols to help
                                        users quickly understand and recognize
                                        different career paths. <br />
                                        - Uses one clear tool or symbol per
                                        trade for quick recognition <br />
                                        - Circular badge format inspired by game
                                        achievement systems <br />
                                        - Consistent illustration style to
                                        maintain visual cohesion <br />
                                        - Color variations help differentiate
                                        trades and add motivation <br />
                                        - Reduces reliance on text-heavy
                                        information <br />
                                    </p>
                                </div>
                                <div className='forge-section-media'>
                                    <div className='forge-trade-icons'>
                                        <img
                                            src='/Trade-icons.svg'
                                            alt='Trade icon 1'
                                            className='forge-trade-icon-image'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-section-layout forge-section-layout--reverse'>
                                <div className='forge-section-text'>
                                    <h2 className='forge-description-heading'>
                                        Challenges
                                    </h2>
                                    <p className='forge-description-text'>
                                        While illustrating for Forge, I went
                                        through challenges such as limited
                                        animation, time constraints on
                                        development, and working within a
                                        restricted color palette while keeping
                                        visuals engaging and non-repetitive.
                                    </p>
                                </div>
                                <div className='forge-section-media'>
                                    <img
                                        src='/Money.svg'
                                        alt='Forge illustration challenges 1'
                                        className='forge-challenges-image'
                                    />
                                    <img
                                        src='/Suitcase.svg'
                                        alt='Forge illustration challenges 2'
                                        className='forge-challenges-image'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='forge-section-card'>
                            <div className='forge-final'>
                                <h2 className='forge-description-heading'>
                                    Final
                                </h2>
                                <p className='forge-description-text forge-final-text'>
                                    As the final product was created, working on
                                    Forge taught me to be more intentional with
                                    my illustrations. Because of time limits,
                                    limited animation, and a small color
                                    palette, I had to focus on what visuals
                                    mattered most while keeping everything
                                    consistent. This project helped me learn how
                                    to adapt my designs to real constraints
                                    without losing clarity or impact.
                                </p>
                                <div className='forge-final-grid'>
                                    {/* Replace with your event photos */}
                                    <img
                                        src='/Forge-final1.png'
                                        alt='Forge final photo 1'
                                        className='forge-final-photo-image'
                                    />
                                    <img
                                        src='/Forge-final2.png'
                                        alt='Forge final photo 2'
                                        className='forge-final-photo-image'
                                    />
                                    <img
                                        src='/Forge-final3.png'
                                        alt='Forge final photo 3'
                                        className='forge-final-photo-image'
                                    />
                                    <img
                                        src='/Forge-final4.png'
                                        alt='Forge final photo 4'
                                        className='forge-final-photo-image'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
