"use client"

import { Link } from "react-router-dom"
import "./navbar.css"

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo-link">
          <img src="/Logo.svg" alt="Logo" className="logo-img" />
          <span className="logo-text">Sophia Wan</span>
        </Link>
        
        <div className="nav-links">
          <a href="/#resume" className="nav-link">
            Resume
          </a>
          <Link to="/designs" className="nav-link">
            Designs
          </Link>
          <a href="/#projects" className="nav-link">
            Projects
          </a>
          <a href="/#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}