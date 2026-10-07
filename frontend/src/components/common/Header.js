"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import '../../styles/Header.css'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    } else if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } })
    }
  }

  // Gérer le défilement après la navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
          // Nettoyer l'état après le défilement
          navigate(location.pathname, { replace: true, state: {} })
        }
      }, 100) 
    }
  }, [location.state, navigate, location.pathname])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navMenuRef = useRef(null)

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navMenuRef.current && !navMenuRef.current.contains(event.target) && 
          !event.target.classList.contains('mobile-menu-btn')) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Fonction pour fermer le menu après avoir cliqué sur un lien
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <img src="/images/logo/logo.png" alt="Logo" style={{height: '40px', width: '40px', objectFit: 'contain'}} />
              <h2 style={{margin: 0}}>ESEF Learn</h2>
            </Link>
          </div>

          <div ref={navMenuRef} className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Accueil
            </Link>
            <Link to="/courses" className="nav-link" onClick={closeMenu}>
              Nos Cours
            </Link>
            <button
              className="nav-link"
              onClick={(e) => {
                e.preventDefault()
                closeMenu()
                scrollToSection("services")
              }}
            >
              Nos Services
            </button>
            <button 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault()
                closeMenu()
                scrollToSection("faq")
              }}
            >
              FAQ
            </button>
            <Link to="/recruitment" className="nav-link recruitment-link" onClick={closeMenu}>
              Recrutement
            </Link>
            <Link to="/cours-gratuits" className="nav-link" onClick={closeMenu}>
              Cours et Concours Gratuit
            </Link>

            <button
              className="nav-link"
              onClick={(e) => {
                e.preventDefault()
                closeMenu()
                scrollToSection("contact")
              }}
            >
              Contact
            </button>
            <Link to="/login" className="btn-primary" onClick={closeMenu}>
              Connexion
            </Link>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
