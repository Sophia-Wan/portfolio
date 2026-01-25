"use client"

import "./navbar.css"

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="logo-link">
          <img src="/Logo.svg" alt="Logo" className="logo-img" />
          <span className="logo-text">Sophia Wan</span>
        </a>
        
        <div className="nav-links">
          <a href="#resume" className="nav-link">
            Resume
          </a>
          <a href="#designs" className="nav-link">
            Designs
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}