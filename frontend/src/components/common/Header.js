"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import '../../styles/Header.css'

// Même nom que dans les autres composants
const PLATFORM_NAME = "ESEF Learn"

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navMenuRef = useRef(null)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    } else if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } })
    }
  }

  // Défilement après navigation vers l'accueil
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
          navigate(location.pathname, { replace: true, state: {} })
        }
      }, 100)
    }
  }, [location.state, navigate, location.pathname])

  // Style différent quand la page est défilée
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fermer le menu mobile au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        !event.target.classList.contains("mobile-menu-btn")
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path)

  return (
    <header className="header">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-brand">
            <Link to="/" className="brand-link" onClick={closeMenu}>
              <img
                src="/nvfavicon.ico"
                alt={`Logo ${PLATFORM_NAME}`}
                className="brand-logo"
              />
            </Link>
          </div>

          <div ref={navMenuRef} className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Accueil
            </Link>

            <Link
              to="/courses"
              className={`nav-link ${isActive("/courses") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Cours
            </Link>

            <button
              className="nav-link"
              onClick={() => {
                closeMenu()
                scrollToSection("services")
              }}
            >
              Fonctionnalités
            </button>

            <button
              className="nav-link"
              onClick={() => {
                closeMenu()
                scrollToSection("contact")
              }}
            >
              Contact
            </button>

            <Link to="/student/login" className="btn-primary" onClick={closeMenu}>
              Espace étudiant
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header