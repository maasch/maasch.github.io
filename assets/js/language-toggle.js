/* ==========================================================
   Language Toggle — Bilingual EN / FR
   ========================================================== */

const translations = {
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_education: "Education",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",

        // Hero
        hero_greeting: "Hello, I'm",
        hero_title: "Frontend Developer & UI/UX Designer",
        hero_intro: "I build modern, responsive, and user-friendly web applications. Combining clean code with strong UX principles to create fast, intuitive digital experiences.",
        hero_cta: "Get In Touch",
        hero_projects: "View Projects",

        // About
        about_subtitle: "Get to Know Me",
        about_title: "About Me",
        about_p1: "I'm a Frontend Developer and UI/UX Designer focused on building modern, responsive, and user-friendly web applications. I develop websites and interfaces using React, TypeScript, JavaScript, HTML, and CSS — combining clean code with strong UX principles to create fast and intuitive user experiences.",
        about_p2: "I've built multiple real-world web projects from scratch, including interactive applications, API-driven platforms, and modern dashboards — all available on my GitHub portfolio.",
        about_p3: "My background in digital marketing and user experience allows me to design interfaces that are not only visually modern but also structured to improve usability and engagement. If you need a clean, responsive, and professionally built frontend — I can help turn your idea into a functional product.",
        about_stat_projects: "Projects Built",
        about_stat_apis: "API Integrations",
        about_stat_internships: "Internships",
        about_stat_technologies: "Technologies",

        // Skills
        skills_subtitle: "What I Work With",
        skills_title: "Skills & Expertise",
        skills_frontend: "Frontend Development",
        skills_uiux: "UI / UX Design",
        skills_tools: "Tools & Workflow",
        skills_performance: "Performance & Quality",
        skill_uid: "User Interface Design",
        skill_uxo: "UX Optimization",
        skill_wireframing: "Wireframing & Layouts",
        skill_modern_design: "Modern Web Design",
        skill_mobile_first: "Mobile-First Development",
        skill_rest: "REST API Integration",
        skill_debugging: "Debugging & Problem Solving",
        skill_clean_code: "Clean & Maintainable Code",
        skill_perf_opt: "Performance Optimization",
        skill_cross_browser: "Cross-Browser Compatibility",
        skill_web_perf: "Web Performance",

        // Education
        education_subtitle: "My Academic Journey",
        education_title: "Education",
        edu_year_1: "2024",
        edu_title_1: "Baccalaureate in Economic Sciences",
        edu_desc_1: "Foundation in economics, analytical thinking, and business principles.",
        edu_year_2: "2024 — Present",
        edu_title_2: "DUT in Digital Marketing & User Experience",
        edu_school_2: "École Supérieure de Technologie — Dakhla",

        // Experience
        experience_subtitle: "Where I've Worked",
        experience_title: "Professional Experience",
        exp_year_1: "Internship",
        exp_title_1: "Marsa Maroc — Port of Dakhla",
        exp_desc_1: "Observation internship in the commercial department. Worked on invoicing (facturation) and debt recovery (recouvrement) of port operations and commercial services.",
        exp_tool_invoicing: "Invoicing",
        exp_year_2: "Internship",
        exp_title_2: "FBM — Financial & Business Management",
        exp_desc_2: "Professional internship at a financial and business management firm. Gained hands-on experience in business operations and administrative workflows.",
        exp_tool_finance: "Finance",
        exp_tool_admin: "Administration",
        exp_tool_mgmt: "Management",

        // Projects
        projects_subtitle: "What I've Built",
        projects_title: "Projects",
        proj_view: "View on GitHub",
        proj_desc_1: "A modern full-stack e-commerce store with a real-world Python recommendation system using collaborative filtering, content-based, and hybrid algorithms.",
        proj_desc_2: "A beautifully crafted, responsive memory card game with dynamic levels, live stats, achievement system, and OOP game engine with LocalStorage persistence.",
        proj_desc_3: "A lightweight real-time Markdown previewer with a built-in line-numbered editor, debounced rendering, and GitHub Flavored Markdown support.",
        proj_desc_4: "A modern recipe discovery PWA powered by the Spoonacular API with intelligent search, advanced filtering, bookmarks, and full offline capability.",
        proj_desc_5: "An advanced full-stack weather application with user authentication, 5-day forecasts, city images via Unsplash, marine data, and dark/light theme toggle.",
        proj_desc_6: "A movie & TV show search app powered by TMDB and OMDB APIs with trending feeds, advanced search, personal library, and a clean dark-themed UI.",
        proj_desc_7: "An interactive quiz app covering web development topics with three difficulty levels, real-time scoring, glassmorphism UI, and randomized answers.",

        // Contact
        contact_subtitle: "Let's Connect",
        contact_title: "Contact Me",
        contact_info_title: "Contact Info",
        contact_available: "I'm currently available for freelance work and collaborations. Feel free to reach out!",
        contact_form_title: "Send a Message",
        form_name: "Name",
        form_email: "Email",
        form_submit: "Send Message",
        form_name_error: "Please enter your name.",
        form_email_error: "Please enter a valid email.",
        form_message_error: "Please enter a message.",

        // Footer
        footer_rights: "All rights reserved."
    },

    fr: {
        // Navbar
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_skills: "Compétences",
        nav_education: "Formation",
        nav_experience: "Expérience",
        nav_projects: "Projets",
        nav_contact: "Contact",

        // Hero
        hero_greeting: "Bonjour, je suis",
        hero_title: "Développeur Frontend & Designer UI/UX",
        hero_intro: "Je crée des applications web modernes, responsives et conviviales. Je combine un code propre avec des principes UX solides pour offrir des expériences numériques rapides et intuitives.",
        hero_cta: "Me Contacter",
        hero_projects: "Voir les Projets",

        // About
        about_subtitle: "Apprenez à Me Connaître",
        about_title: "À Propos de Moi",
        about_p1: "Je suis un Développeur Frontend et Designer UI/UX passionné par la création d'applications web modernes, responsives et orientées utilisateur. Je développe des sites et interfaces avec React, TypeScript, JavaScript, HTML et CSS — en combinant un code propre avec des principes UX solides pour des expériences rapides et intuitives.",
        about_p2: "J'ai construit plusieurs projets web réels à partir de zéro, y compris des applications interactives, des plateformes basées sur des API et des tableaux de bord modernes — tous disponibles sur mon portfolio GitHub.",
        about_p3: "Mon parcours en marketing digital et expérience utilisateur me permet de concevoir des interfaces non seulement visuellement modernes, mais aussi structurées pour améliorer l'utilisabilité et l'engagement. Si vous avez besoin d'un frontend propre, responsive et professionnel — je peux vous aider à concrétiser votre idée.",
        about_stat_projects: "Projets Réalisés",
        about_stat_apis: "Intégrations API",
        about_stat_internships: "Stages",
        about_stat_technologies: "Technologies",

        // Skills
        skills_subtitle: "Mes Outils de Travail",
        skills_title: "Compétences & Expertise",
        skills_frontend: "Développement Frontend",
        skills_uiux: "Design UI / UX",
        skills_tools: "Outils & Workflow",
        skills_performance: "Performance & Qualité",
        skill_uid: "Design d'Interface Utilisateur",
        skill_uxo: "Optimisation UX",
        skill_wireframing: "Wireframing & Mise en Page",
        skill_modern_design: "Design Web Moderne",
        skill_mobile_first: "Développement Mobile-First",
        skill_rest: "Intégration API REST",
        skill_debugging: "Débogage & Résolution de Problèmes",
        skill_clean_code: "Code Propre & Maintenable",
        skill_perf_opt: "Optimisation des Performances",
        skill_cross_browser: "Compatibilité Cross-Browser",
        skill_web_perf: "Performance Web",

        // Education
        education_subtitle: "Mon Parcours Académique",
        education_title: "Formation",
        edu_year_1: "2024",
        edu_title_1: "Baccalauréat en Sciences Économiques",
        edu_desc_1: "Formation en économie, pensée analytique et principes de gestion.",
        edu_year_2: "2024 — Présent",
        edu_title_2: "DUT en Marketing Digital & Expérience Utilisateur",
        edu_school_2: "École Supérieure de Technologie — Dakhla",

        // Experience
        experience_subtitle: "Où J'ai Travaillé",
        experience_title: "Expérience Professionnelle",
        exp_year_1: "Stage",
        exp_title_1: "Marsa Maroc — Port de Dakhla",
        exp_desc_1: "Stage d'observation au sein du département commercial. Travail sur la facturation et le recouvrement des opérations portuaires et des services commerciaux.",
        exp_tool_invoicing: "Facturation",
        exp_year_2: "Stage",
        exp_title_2: "FBM — Financial & Business Management",
        exp_desc_2: "Stage professionnel dans un cabinet de gestion financière et commerciale. Expérience pratique en opérations commerciales et flux administratifs.",
        exp_tool_finance: "Finance",
        exp_tool_admin: "Administration",
        exp_tool_mgmt: "Gestion",

        // Projects
        projects_subtitle: "Ce que J'ai Construit",
        projects_title: "Projets",
        proj_view: "Voir sur GitHub",
        proj_desc_1: "Une boutique e-commerce full-stack moderne avec un système de recommandation Python utilisant le filtrage collaboratif, le contenu et des algorithmes hybrides.",
        proj_desc_2: "Un jeu de mémoire responsive magnifiquement conçu avec des niveaux dynamiques, des statistiques en direct, un système de succès et un moteur de jeu OOP avec persistance LocalStorage.",
        proj_desc_3: "Un prévisualiseur Markdown léger en temps réel avec un éditeur intégré numéroté, un rendu optimisé et le support GitHub Flavored Markdown.",
        proj_desc_4: "Une application PWA moderne de découverte de recettes alimentée par l'API Spoonacular avec recherche intelligente, filtrage avancé, favoris et capacité hors ligne.",
        proj_desc_5: "Une application météo full-stack avancée avec authentification, prévisions sur 5 jours, images de villes via Unsplash, données marines et basculement de thème.",
        proj_desc_6: "Une application de recherche de films et séries alimentée par les API TMDB et OMDB avec flux tendances, recherche avancée, bibliothèque personnelle et UI sombre.",
        proj_desc_7: "Une application de quiz interactive sur le développement web avec trois niveaux de difficulté, scoring en temps réel, UI glassmorphisme et réponses aléatoires.",

        // Contact
        contact_subtitle: "Restons en Contact",
        contact_title: "Me Contacter",
        contact_info_title: "Coordonnées",
        contact_available: "Je suis actuellement disponible pour des missions freelance et des collaborations. N'hésitez pas à me contacter !",
        contact_form_title: "Envoyer un Message",
        form_name: "Nom",
        form_email: "Email",
        form_submit: "Envoyer le Message",
        form_name_error: "Veuillez entrer votre nom.",
        form_email_error: "Veuillez entrer un email valide.",
        form_message_error: "Veuillez entrer un message.",

        // Footer
        footer_rights: "Tous droits réservés."
    }
};

// Current language state
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Toggle between EN and FR
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations(currentLang);

    // Update toggle button text to show the OTHER language
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="bi bi-translate me-1"></i> ' + (currentLang === 'en' ? 'FR' : 'EN');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    applyTranslations(currentLang);

    // Set initial toggle button text
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="bi bi-translate me-1"></i> ' + (currentLang === 'en' ? 'FR' : 'EN');
    }
});
