import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import { ProjectShowcase } from "../assets/components/showcase/ProjectShowcase.jsx";
import "./BanditBreakoutPage.css";

export function BanditBreakoutPage() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <div className="bandit-breakout-page">
        <div className="bandit-breakout-content">
          <ProjectShowcase
            image="/Bandit_breakout.svg"
            number="02"
            name="Bandit Breakout"
            link="#"
          />
          <div className="bb-description">
            <div className="bb-description-top">
              <div className="bb-description-left">
                <h2 className="bb-description-heading">Overview</h2>
                <p className="bb-description-text">
                  Bandit Breakout is a tile-based, dice-driven experience focused
                  on player choice and progression. Players roll to move across
                  the board, earn gold from safe tiles, and spend resources in
                  shops found in new cities. Decision and event spaces introduce
                  choices that shape each run, influencing outcomes, rewards, and
                  relationships within the game world.
                </p>
              </div>
              <div className="bb-description-right">
                <div className="bb-detail-block">
                  <h3 className="bb-detail-label">Year</h3>
                  <p className="bb-detail-value">2024</p>
                </div>
                <div className="bb-detail-block">
                  <h3 className="bb-detail-label">Team</h3>
                  <p className="bb-detail-value">4 members</p>
                </div>
                <div className="bb-detail-block">
                  <h3 className="bb-detail-label">My Role</h3>
                  <p className="bb-detail-value">
                    UI/UX Designer, Illustrator, Mechanic
                  </p>
                </div>
              </div>
            </div>

            <div className="bb-media-row">
              <div className="bb-image-box">
                <img
                  src="/BanditBreakout.png"
                  alt="Bandit Breakout"
                  className="bb-media-image"
                />
              </div>
              <div className="bb-video-box">
                <video
                  className="bb-media-video"
                  controls
                  playsInline
                  src="/BB_Video.mp4"
                  poster=""
                  aria-label="Bandit Breakout video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="bb-section-card">
            <div className="bb-section-block">
              <h2 className="bb-section-heading">Design Goal</h2>
              <p className="bb-section-text">
                Our goal of this project was to create a re-playable board game
                where each playthrough could lead to different outcomes. We wanted
                players to feel that their choices mattered, with decisions and
                events shaping not only their gameplay progression but also each
                character's ending.
              </p>
              <div className="bb-gallery">
                <img
                  src="/snakeend.png"
                  alt="Bandit Breakout concept"
                  className="bb-gallery-image"
                />
                <img
                  src="/Capyend.png"
                  alt="Bandit Breakout character"
                  className="bb-gallery-image"
                />
                <img
                  src="/crowend.png"
                  alt="Bandit Breakout scene"
                  className="bb-gallery-image"
                />
                <img
                  src="/dogend.png"
                  alt="Bandit Breakout character"
                  className="bb-gallery-image"
                />
                <img
                  src="/Catend.png"
                  alt="Bandit Breakout"
                  className="bb-gallery-image"
                />
              </div>
            </div>

            <div className="bb-section-block bb-research">
              <h2 className="bb-section-heading">Research</h2>
              <div className="bb-research-content">
                <div className="bb-research-text">
                  <p className="bb-section-text">
                    We conducted primary research through surveys and secondary
                    research by analyzing game reviews and online forums. Across
                    both sources, we identified strong patterns in player
                    preferences.
                  </p>
                  <p className="bb-section-text">
                    83% of respondents said they enjoy playing games collaboratively
                    with friends. Additionally, 75% regularly play board-game-style
                    experiences but feel that many of these games move too slowly
                    and would prefer faster pacing.
                  </p>
                </div>
                <a
                  href="https://docs.google.com/document/d/12Z3Hw660hhzNR4QW1Gg4uPothI71lgKRqduENTvWCV4/edit?tab=t.0#heading=h.ckmm2i24taya"
                  className="bb-view-report-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Report
                </a>
              </div>
            </div>

            <div className="bb-section-block bb-mechanics">
              <h2 className="bb-section-heading">Gameplay Mechanics</h2>
              <div className="bb-tiles-row">
                <div className="bb-tiles-text">
                  <h3 className="bb-subheading">Tiles</h3>
                  <p className="bb-section-text bb-tiles-intro">
                    Each tile created has its own respective event that happens on it.
                    While creating the tiles many thoughts went to thinking how each
                    and every tile can be unique to our game.
                  </p>
                </div>
                <div className="bb-mechanics-image-boxes">
                  <div className="bb-mechanics-image-box">
                    <img src="Tile1.png" alt="" />
                  </div>
                  <div className="bb-mechanics-image-box">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <h3 className="bb-subheading">Bridge</h3>
              <div className="bb-bridge-row">
                <div className="bb-bridge-image-wrap">
                  <img src="/Bandit_breakout.svg" alt="Bridge" className="bb-bridge-image" />
                </div>
                <p className="bb-section-text bb-bridge-text">
                  The bridge was inspired by the game snakes and ladder, while looking
                  at the board I felt that it was a little empty and needed something
                  that could potentially speed up the movement process for players
                  since sometimes users don't always want a long game. Thus bridges
                  were created.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
