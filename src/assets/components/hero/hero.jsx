import "./hero.css"

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1>Hi, My name is Sophia!</h1>
          <p>Hi, I’m Sophia, a Digital Design and Development student at BCIT. I enjoy combining visual design and front-end development to bring ideas to life. Outside of digital work, I enjoy oil painting and hands-on craft projects.</p>
        </div>
        <div className="hero-image">
          <img src="/Moon-Wisteria.svg" alt="Moon with wisteria" className="hero-logo" />
        </div>
      </div>
    </section>
  )
}
