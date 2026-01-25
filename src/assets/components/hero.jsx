import "./hero.css"

export function Hero() {
  return (
    <section className="hero">
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        onCanPlay={(e) => {
          e.target.play().catch(err => console.log('Video play error:', err));
        }}
        onError={(e) => {
          console.error('Video error:', e);
        }}
      >
        <source src="/12651127_3840_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1>Hi, My name is Sophia!</h1>
          <p>I design and code. More design though</p>
        </div>
        <div className="hero-image">
          <img src="/Moon-Wisteria.svg" alt="Moon with wisteria" className="hero-logo" />
        </div>
      </div>
    </section>
  )
}
