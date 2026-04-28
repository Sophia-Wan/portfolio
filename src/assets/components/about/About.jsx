import { Reveal } from "../reveal/Reveal.jsx";
import "./About.css";

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <Reveal>
          <h2 className="about-heading">About Me</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="about-lead">
            Hi, I&apos;m Sophia! A Digital Design and Development student at BCIT.
            I love working at the intersection of visual design and front-end
            development, where careful interaction design and friendly illustration
            can turn an idea into something people actually enjoy using.
          </p>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={200} className="about-card">
            <h3 className="about-card-title">What I do</h3>
            <p className="about-card-text">
              UI/UX design, illustration, and React/Vite front-end work. I like
              building small, polished experiences with playful details.
            </p>
          </Reveal>
          <Reveal delay={320} className="about-card">
            <h3 className="about-card-title">Tools I use</h3>
            <p className="about-card-text">
              Figma, Adobe Illustrator, Photoshop, InDesign, Adobe After Effects, Adobe Premiere Pro,
              HTML, CSS, JavaScript, and React.
            </p>
          </Reveal>
          <Reveal delay={440} className="about-card">
            <h3 className="about-card-title">Outside of design</h3>
            <p className="about-card-text">
              I oil paint, do hands-on craft projects, and spend time with my
              family and friends — anything that lets me make something real.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
