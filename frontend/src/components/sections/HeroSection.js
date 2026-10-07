import React, { useEffect } from 'react';
import Button from "../common/Button";
import imageHero from '../assets/LogoHeroSection.jpeg';
import '../styles/HeroSection.css';

// Nom de la plateforme : à modifier ici une seule fois
const PLATFORM_NAME = "Nibras ESEF";

const HeroSection = () => {
  // Animation du compteur (gère maintenant un suffixe optionnel, ex. "/7")
  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-value'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + suffix;
      }
    };

    updateCounter();
  };

  // Déclenche l'animation quand les statistiques deviennent visibles
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      {/* Éléments géométriques d'arrière-plan */}
      <div className="geometric-bg-elements">
        <div className="geo-circle circle-1"></div>
        <div className="geo-circle circle-2"></div>
        <div className="geo-square"></div>
        <div className="geo-triangle"></div>
        <div className="geo-dots"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">{PLATFORM_NAME} · ESEF</span>

            <h1>
              Apprenez <span className="text-highlight dynamic-excellence">à votre rythme</span>
              <br />
              guidé par <br />
              <span className="text-primary">l'intelligence artificielle</span>
            </h1>

         <p className="hero-description">
  La plateforme numérique de l'ESEF qui réunit <strong>cours</strong>,{' '}
  <strong>vidéos</strong>, <strong>exercices</strong> et <strong>quiz</strong>{' '}
  dans un seul espace, avec un <strong>assistant IA</strong> qui s'adapte
  à votre niveau et à vos difficultés.
</p>

            <div className="hero-stats">
              <div className="stat-item animate">
                <span className="stat-number" data-value="4">0</span>
                <span className="stat-label">Types de ressources</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item animate">
                <span className="stat-number" data-value="24" data-suffix="/7">0</span>
                <span className="stat-label">Assistant IA</span>
              </div>
            </div>

            <div className="hero-buttons">
              <Button variant="primary" to="/courses">Accéder aux cours</Button>
              <Button variant="outline" to="/student/login">Espace étudiant</Button>
            </div>
          </div>

          <div className="hero-image">
            <div className="geometric-pattern">
              <div className="geometric-shapes"></div>
              <img
                src={imageHero}
                alt={`Plateforme éducative ${PLATFORM_NAME} de l'ESEF`}
                className="student-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;