import React from 'react';
import Button from "../common/Button";

// Même nom que dans le HeroSection
const PLATFORM_NAME = "ESEF Learn";

// Icônes SVG cohérentes (style trait)
const Icon = ({ children }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const icons = {
  courses: (
    <Icon>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </Icon>
  ),
  videos: (
    <Icon>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </Icon>
  ),
  quiz: (
    <Icon>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </Icon>
  ),
  ai: (
    <Icon>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 3v4M21 5h-4" />
    </Icon>
  ),
  progress: (
    <Icon>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </Icon>
  ),
  chat: (
    <Icon>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.6A8.5 8.5 0 1 1 21 11.5z" />
    </Icon>
  ),
};

const reasons = [
  {
    title: "Cours centralisés",
    description:
      "Retrouvez tous vos supports au même endroit, organisés par module et mis à jour par vos coordinateurs pédagogiques.",
    tags: ["PDF", "Présentations", "Résumés"],
    icon: icons.courses,
    accent: "#3498db",
    accentDark: "#2980b9",
  },
  {
    title: "Vidéos pédagogiques",
    description:
      "Visionnez des vidéos liées à chaque cours ou notion, puis vérifiez votre compréhension avec une activité associée.",
    tags: ["Par notion", "Quiz associé"],
    icon: icons.videos,
    accent: "#8b5cf6",
    accentDark: "#6d28d9",
  },
  {
    title: "Quiz et exercices interactifs",
    description:
      "Testez vos connaissances et consultez vos résultats, avec les réponses correctes et des explications lorsque disponibles.",
    tags: ["QCM", "Vrai/Faux", "Réponses courtes"],
    icon: icons.quiz,
    accent: "#10b981",
    accentDark: "#059669",
  },
  {
    title: "Assistant IA adaptatif",
    description:
      "Une explication plus simple, un exemple concret, un exercice sur mesure : l'IA s'adapte à votre niveau, à vos résultats et à vos difficultés.",
    tags: ["Personnalisé", "Selon vos quiz", "Disponible 24/7"],
    icon: icons.ai,
    featured: true,
  },
  {
    title: "Suivi de progression",
    description:
      "Un tableau de bord clair pour visualiser vos cours, vos résultats et votre évolution, et savoir quelles notions retravailler.",
    tags: ["Mes résultats", "Ma progression"],
    icon: icons.progress,
    accent: "#f59e0b",
    accentDark: "#d97706",
  },
  {
    title: "Chatbot et communication",
    description:
      "Trouvez rapidement une information, localisez un cours ou soyez orienté vers l'enseignant ou le responsable concerné.",
    tags: ["Orientation", "Enseignants"],
    icon: icons.chat,
    accent: "#06b6d4",
    accentDark: "#0891b2",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-section" id="services">
      <div className="container">
        <div className="why-header">
          <span className="why-eyebrow">Pourquoi {PLATFORM_NAME} ?</span>
          <h2 className="section-title">
            Tout ce qu'il faut pour <span className="why-brand">réussir vos études</span>
          </h2>
          <p className="why-subtitle">
            Une plateforme unique pour apprendre, vous entraîner et progresser,
            accompagné par une intelligence artificielle qui s'adapte à vous.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`reason-card${reason.featured ? ' featured' : ''}`}
              tabIndex={0}
              style={{
                '--accent': reason.accent,
                '--accent-dark': reason.accentDark,
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <span className="reason-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <ul className="reason-tags">
                {reason.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="why-cta">
          <Button variant="primary" to="/courses">Explorer les cours</Button>
          <Button variant="outline" to="/student/login">Se connecter</Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;