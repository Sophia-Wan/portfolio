import "./footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-contact">
            <span className="icon">✉</span>
            <a href="mailto:email@gmail.com">email@gmail.com</a>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-contact">
            <span className="icon">💼</span>
            <a href="https://linkedin.com/sophiawan" target="_blank" rel="noopener noreferrer">
              linkedin.com/sophiawan
            </a>
          </div>
        </div>
        
        <div className="footer-center">
          <img src="/Moon-Wisteria.svg" alt="Moon with wisteria" className="footer-logo" />
          <p className="footer-name">Sophia Wan</p>
        </div>
        
        <div className="footer-right">
          <div className="footer-divider"></div>
          <div className="footer-nav">
            <a href="#resume">Resume</a>
            <a href="#designs">Design</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-divider"></div>
        </div>
      </div>
    </footer>
  )
}
