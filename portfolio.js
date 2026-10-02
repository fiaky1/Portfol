/* =============================================================================
   PORTFOLIO DESIGN — portfolio.js
   Logique interactive : thème, filtres, modal, lightbox, scroll, cursor
   ============================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     BASE DE DONNÉES DES PROJETS
     → Modifier ici pour personnaliser vos projets
     ============================================================ */
  const PROJECTS = {

    'fiaky-brand': {
      title: "Fiaky Compagnie — Identité visuelle",
      category: "Identité visuelle",
      tools: ["Canva Pro"],
      context: "Création complète de l'identité visuelle de Fiaky Compagnie.",
      objective: "Mettre en place une charte graphique premium avec un aigle doré sur fond sombre.",
      result: "Une identité visuelle forte et reconnaissable déclinée sur de multiples supports.",
      desc: "Projet de branding. Le logo représente un aigle stylisé de couleur or, symbolisant le prestige et la vision. L'ensemble est accompagné d'une palette noire et or très contrastée et d'une typographie élégante.",
      images: ['sary/2.png']
    },

    'identity-01': {
      title: "Système d'Identité Visuelle",
      category: "Identité visuelle",
      tools: ["Adobe Illustrator", "Canva Pro", "Adobe Fonts"],
      context: "Marque commerciale naissante dans le secteur du bien-être.",
      objective: "Définir une identité cohérente, différenciante et déclinable sur tous les supports.",
      result: "Système complet : logotype, variantes, palette, typographie, iconographie et guide d'usage.",
      desc: "Partant d'une page blanche et d'un brief client, ce projet couvre l'intégralité du processus de création d'identité : exploration sémantique, moodboarding, construction du logotype, définition de la palette chromatique et du système typographique. Le livrable final est un guide de marque de 24 pages.",
      images: [
        'sary/mockup_identity.png'
      ]
    },

    'logo-hex': {
      title: "Logo Hexagonal — Icône Immobilier",
      category: "Identité visuelle",
      tools: ["Canva Pro"],
      context: "Conception d'un logo géométrique en hexagone associant une icône de maison stylisée.",
      objective: "Créer un logo mémorable et épuré pour le secteur de l'immobilier ou de l'architecture.",
      result: "Un logo vectoriel bicolore (marine / saumon) fonctionnant sur tous les supports.",
      desc: "Le design repose sur un équilibre géométrique strict, enfermant l'icône de la maison dans un hexagone pour suggérer la solidité et la protection.",
      images: ['sary/LOGO SEUL.png']
    },

    'logo-branding': {
      title: "Logo Branding Alternatif",
      category: "Identité visuelle",
      tools: ["Illustrator", "Photoshop"],
      context: "Exploration de branding et conception d'un logotype additionnel.",
      objective: "Proposer un design moderne et mémorable.",
      result: "Un visuel marquant et professionnel.",
      desc: "Ce projet illustre mon approche dans la recherche d'identités visuelles impactantes.",
      images: ['sary/logo-branding.jpg']
    },

    'logo-simple': {
      title: "Design de Logotype",
      category: "Identité visuelle",
      tools: ["Illustrator"],
      context: "Création d'un logo simple et efficace.",
      objective: "Développer une identité visuelle claire.",
      result: "Un logo polyvalent et lisible.",
      desc: "L'objectif de ce logotype est d'être le plus direct et reconnaissable possible.",
      images: ['sary/logo.png']
    },

    'cv-fiaky': {
      title: "Carte de Visite — Fiaky Compagnie",
      category: "Print & Étiquettes",
      tools: ["Canva Pro"],
      context: "Design de carte de visite premium pour Fiaky Compagnie.",
      objective: "Créer une carte élégante avec un fond noir mat, des ondes dorées et un portrait encadré.",
      result: "Une carte de visite professionnelle très appréciée par les clients.",
      desc: "La déclinaison recto / verso est parfaitement cohérente avec la charte graphique de l'entreprise, renforçant le positionnement premium.",
      images: ['sary/carte-visite.png']
    },

    'sticker-round': {
      title: "Étiquette Ronde — Soutenance de Licence",
      category: "Print & Étiquettes",
      tools: ["Canva Pro"],
      context: "Création d'une étiquette ronde de remerciement pour une soutenance de mémoire de licence.",
      objective: "Allier un graphisme technologique à un message de remerciement personnel.",
      result: "Un sticker original distribué lors de la soutenance.",
      desc: "J'ai utilisé un motif de circuits imprimés combiné avec une typographie calligraphique élégante pour contraster l'aspect technique.",
      images: ['sary/CHOIX 2 Rond.png']
    },

    'sticker-rect': {
      title: "Étiquette Rectangulaire — Thank You",
      category: "Print & Étiquettes",
      tools: ["Canva Pro"],
      context: "Version panoramique de l'étiquette de remerciement.",
      objective: "Adapter le design 'Thank You' à un format rectangulaire pour des emballages.",
      result: "Une étiquette prête pour l'impression autocollante.",
      desc: "Le fond utilise un dégradé subtil vert pâle, des motifs de circuits et une citation malagasy encadrée par des hexagones décoratifs.",
      images: ['sary/etiQ RECT.png']
    },

    'barca-poster': {
      title: "Affiche Sportive — FC Barcelone",
      category: "Affiches",
      tools: ["Canva Pro", "Photomontage"],
      context: "Composition publicitaire sportive autour de l'équipe du FC Barcelone.",
      objective: "Réaliser un montage photographique multi-joueurs dynamique.",
      result: "Une affiche sportive intense, format carré optimisé pour les réseaux sociaux.",
      desc: "L'affiche utilise un fond de stade, une typographie bold très impactante, et respecte la palette de couleurs traditionnelle du club (blaugrana).",
      images: ['sary/affiche-publicitaire.jpg']
    },

    'poster-01': {
      title: "Série d'Affiches Culturelles",
      category: "Affiches",
      tools: ["Canva Pro", "Adobe Photoshop", "Impression offset"],
      context: "Événement culturel annuel regroupant musique, arts visuels et littérature.",
      objective: "Concevoir une série de trois affiches reconnaissables en grand format (120×176 cm).",
      result: "Affiches imprimées et affichées, couverture médias sociaux avec +3 000 impressions organiques.",
      desc: "La commande portait sur trois déclinaisons pour trois soirées thématiques distinctes, avec une cohérence graphique forte assurant la lisibilité de la série. Le choix d'une typographie display bold, d'une palette restreinte (noir + couleur vive) et de compositions asymétriques donne à chaque affiche sa personnalité tout en maintenant l'unité de la série.",
      images: [
        'sary/mockup_poster.png'
      ]
    },

    'tshirt-engineer': {
      title: "T-shirt Design — Proud to be an Engineer",
      category: "T-shirt / Merch",
      tools: ["Canva Pro", "Print-on-demand"],
      context: "Demande de conception de produits dérivés (merch) pour une association d'étudiants en ingénierie.",
      objective: "Créer un visuel qui suscite la fierté d'appartenance.",
      result: "Design technique et moderne ('Proud to be an Engineer') très apprécié.",
      desc: "Ce projet explore le design textile. J'ai utilisé une iconographie forte (engrenages, outils) organisée dans une composition circulaire très équilibrée.",
      images: ['sary/tshirt-design.jpg']
    }

  };


  /* ============================================================
     1. GESTION DU THÈME (clair / sombre)
     ============================================================ */
  const themeBtn = document.getElementById('theme-btn');
  const savedTheme = localStorage.getItem('design_portfolio_theme') || 'light';

  // Appliquer le thème sauvegardé
  applyTheme(savedTheme, false);

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
    localStorage.setItem('design_portfolio_theme', next);
  });

  function applyTheme(theme, animate) {
    if (animate) {
      document.body.classList.add('theme-transitioning');
      setTimeout(() => document.body.classList.remove('theme-transitioning'), 400);
    }
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }


  /* ============================================================
     2. HEADER — EFFET SCROLL
     ============================================================ */
  const header = document.querySelector('.site-header');

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();


  /* ============================================================
     3. CURSOR GLOW (desktop uniquement)
     ============================================================ */
  const cursorGlow = document.getElementById('cursor-glow');

  if (window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      // Léger décalage pour un rendu plus naturel
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    }, { passive: true });
  }


  /* ============================================================
     4. FILTRES DES PROJETS
     ============================================================ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const noResults = document.getElementById('no-results');
  const grid = document.getElementById('projects-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Mettre à jour les boutons actifs
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Mettre à jour l'état visuel des cartes
      let visibleCount = 0;

      projectCards.forEach((card, index) => {
        const cat = card.getAttribute('data-category');
        const isVisible = (filter === 'all') || (cat === filter);

        if (isVisible) {
          // Réinitialiser position dans le flux
          card.style.position = '';
          card.style.opacity = '';
          card.style.transform = '';
          card.removeAttribute('aria-hidden');
          visibleCount++;
          // Animer avec délai
          card.style.transitionDelay = `${(visibleCount - 1) * 0.06}s`;
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';
          card.setAttribute('aria-hidden', 'true');
          // Retirer du flux après l'animation
          setTimeout(() => {
            if (!isMatchingFilter(card, document.querySelector('.filter-btn.active'))) {
              card.style.position = 'absolute';
            }
          }, 300);
        }
      });

      // Gérer le message "aucun résultat"
      noResults.hidden = (visibleCount > 0);

      // Recalculer la hauteur du grid (les cartes en position absolute ne participent plus)
      setTimeout(() => {
        // Reset des délais après animation
        projectCards.forEach(c => c.style.transitionDelay = '');
      }, 500);
    });
  });

  function isMatchingFilter(card, activeBtn) {
    if (!activeBtn) return false;
    const filter = activeBtn.getAttribute('data-filter');
    return filter === 'all' || card.getAttribute('data-category') === filter;
  }


  /* ============================================================
     5. MODAL DÉTAIL DE PROJET
     ============================================================ */
  const modalOverlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  // Ouvrir depuis les boutons overlay de carte
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  // Ouvrir le modal
  function openModal(projectId) {
    const data = PROJECTS[projectId];
    if (!data) return;

    // Construire le HTML interne du modal
    const toolTagsHTML = data.tools
      .map(t => `<span class="modal-tool-tag">${t}</span>`)
      .join('');

    const imagesHTML = data.images
      .map((src, i) => `<img
          src="${src}"
          alt="${i === 0 ? 'Visuel principal — ' : 'Visuel — '}${data.title} [Remplacer avec votre image]"
          class="modal-gallery-img reveal"
          loading="lazy"
          tabindex="0"
          role="button"
          aria-label="Agrandir l'image"
        >`)
      .join('');

    modalContent.innerHTML = `
      <p class="modal-eyebrow">${data.category}</p>
      <h2 class="modal-title" id="modal-project-title">${data.title}</h2>

      <!-- Galerie de visuels -->
      <div class="modal-gallery" id="modal-gallery">
        ${imagesHTML}
      </div>

      <!-- Description longue -->
      <p class="modal-desc">${data.desc}</p>

      <!-- Blocs contexte / objectif / résultat -->
      <div class="modal-info-grid">
        <div class="modal-info-block">
          <div class="modal-info-label">Contexte</div>
          <div class="modal-info-value">${data.context}</div>
        </div>
        <div class="modal-info-block">
          <div class="modal-info-label">Objectif</div>
          <div class="modal-info-value">${data.objective}</div>
        </div>
        <div class="modal-info-block">
          <div class="modal-info-label">Résultat</div>
          <div class="modal-info-value">${data.result}</div>
        </div>
      </div>

      <!-- Outils -->
      <div class="modal-info-label" style="margin-bottom:.5rem">Outils utilisés</div>
      <div class="modal-tools-row">${toolTagsHTML}</div>
    `;

    // Afficher le modal
    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';

    // Déclencher les animations d'entrée
    requestAnimationFrame(() => {
      modalOverlay.classList.add('is-open');
      // Animer les images avec délai en cascade
      modalContent.querySelectorAll('.modal-gallery-img').forEach((img, i) => {
        setTimeout(() => img.classList.add('is-visible'), 100 + i * 80);
      });
    });

    // Liaison lightbox pour les images dans le modal
    bindLightbox();

    // Focus sur le modal pour l'accessibilité
    modalClose.focus();
  }

  // Fermer le modal
  function closeModal() {
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => {
      modalOverlay.hidden = true;
      modalContent.innerHTML = '';
    }, 350);
  }

  modalClose.addEventListener('click', closeModal);

  // Fermer en cliquant sur l'overlay (fond)
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!lightboxOverlay.hidden) closeLightbox();
      else if (!modalOverlay.hidden) closeModal();
    }
  });


  /* ============================================================
     6. LIGHTBOX (zoom image depuis le modal)
     ============================================================ */
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.className = 'lightbox-overlay';
  lightboxOverlay.hidden = true;
  lightboxOverlay.setAttribute('role', 'dialog');
  lightboxOverlay.setAttribute('aria-modal', 'true');
  lightboxOverlay.setAttribute('aria-label', 'Image agrandie');
  document.body.appendChild(lightboxOverlay);

  const lightboxImg = document.createElement('img');
  lightboxImg.className = 'lightbox-img';
  lightboxImg.alt = '';
  lightboxOverlay.appendChild(lightboxImg);

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightboxOverlay.hidden = false;
    requestAnimationFrame(() => lightboxOverlay.classList.add('is-open'));
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('is-open');
    setTimeout(() => {
      lightboxOverlay.hidden = true;
      lightboxImg.src = '';
    }, 320);
  }

  lightboxOverlay.addEventListener('click', closeLightbox);

  function bindLightbox() {
    document.querySelectorAll('.modal-gallery-img').forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
      // Accessibilité : touche Entrée aussi
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(img.src, img.alt);
        }
      });
    });
  }


  /* ============================================================
     7. ANIMATIONS SCROLL (Intersection Observer)
     ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target); // une seule fois
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observer toutes les cartes et éléments avec classe .reveal
  document.querySelectorAll('.project-card, .value-item, .about-para').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });


  /* ============================================================
     8. NAVIGATION — LIEN ACTIF AU SCROLL
     ============================================================ */
  const navLinks = document.querySelectorAll('.header-nav-link');
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => sectionObserver.observe(section));


  /* ============================================================
     FIN DU SCRIPT
     ============================================================ */

}); // DOMContentLoaded
