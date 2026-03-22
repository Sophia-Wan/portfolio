import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo-link">
          <img src="/Logo.svg" alt="Logo" className="logo-img" />
          <span className="logo-text">Sophia Wan</span>
        </Link>

        <div className="nav-links">
          <NavLink
            to="/designs"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link--active" : ""}`
            }
          >
            Designs
          </NavLink>
          <a href="/#projects" className="nav-link">
            Projects
          </a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link--active" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}