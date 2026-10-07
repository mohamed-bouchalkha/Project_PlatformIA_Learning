import React from 'react';
import '../styles/Footer.css';

// Même nom que dans HeroSection et WhyChooseUsSection
const PLATFORM_NAME = "ESEF Learn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Bande d'appel à l'action */}
        <div className="footer-cta">
          <div>
            <h3>Prêt à apprendre à votre rythme ?</h3>
            <p>Connectez-vous à votre espace étudiant et reprenez là où vous vous êtes arrêté.</p>
          </div>
          <a href="/student/login" className="footer-cta-btn">Accéder à mon espace</a>
        </div>

        <div className="footer-content">
          {/* Présentation */}
          <div className="footer-section footer-brand">
            <h3>{PLATFORM_NAME}</h3>
            <p>
              La plateforme éducative intelligente de l'ESEF : cours, vidéos,
              exercices et quiz, avec un assistant IA qui s'adapte à chaque étudiant.
            </p>
            <a
              href="https://esef.uiz.ac.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-site-link"
            >
              Site officiel de l'ESEF →
            </a>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#services">Fonctionnalités</a></li>
              <li><a href="/courses">Cours</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Plateforme */}
          <div className="footer-section">
            <h4>Plateforme</h4>
            <ul>
              <li><a href="/courses">Cours et ressources</a></li>
              <li><a href="/courses">Vidéos pédagogiques</a></li>
              <li><a href="/courses">Quiz et exercices</a></li>
              <li><a href="/student/login">Assistant IA</a></li>
            </ul>
          </div>

          {/* Accès et contact */}
          <div className="footer-section">
            <h4>Espaces et contact</h4>
            <ul>
              <li><a href="/student/login">Espace étudiant</a></li>
              <li><a href="/login">Espace enseignant / admin</a></li>
            </ul>
            <ul className="footer-contact">
              <li>
                <span aria-hidden="true">✉️</span>
                <a href="mailto:contact@esef.ma">contact@esef.ma</a>
              </li>
              <li>
                <span aria-hidden="true">📞</span>
                <a href="tel:+212000000000">+212 0 00 00 00 00</a>
              </li>
              <li>
                <span aria-hidden="true">📍</span>
                <span>ESEF, Université Ibn Zohr, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {PLATFORM_NAME} · ESEF, Université Ibn Zohr. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;