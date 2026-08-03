/* =========================================================
   Ô POULET BOUKANÉ — script.js
   3 comportements, chacun protégé par une vérification
   d'existence des éléments (le même fichier est chargé
   sur toutes les pages, qui n'ont pas toutes les mêmes blocs).
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Menu de navigation responsive ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
  }
});

    // Referme le menu mobile après un clic sur un lien
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. Filtre du menu par catégorie (page menu.html) ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');
  const emptyState = document.getElementById('emptyState');

  if (filterButtons.length && menuItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('is-active'));
        button.classList.add('is-active');

        const filter = button.dataset.filter;
        let visibleCount = 0;

        menuItems.forEach((item) => {
          const matches = filter === 'tout' || item.dataset.category === filter;
          item.hidden = !matches;
          if (matches) visibleCount += 1;
        });

        if (emptyState) {
          emptyState.hidden = visibleCount !== 0;
        }
      });
    });
  }

  /* ---------- 3. Validation du formulaire de contact (page contact.html) ---------- */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const fields = {
      nom: {
        input: document.getElementById('nom'),
        wrapper: document.getElementById('fieldNom'),
        error: document.getElementById('errorNom'),
        validate: (value) => value.trim().length >= 2,
        message: "Merci d'indiquer votre nom (2 caractères minimum)."
      },
      email: {
        input: document.getElementById('email'),
        wrapper: document.getElementById('fieldEmail'),
        error: document.getElementById('errorEmail'),
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
        message: 'Merci d\u2019indiquer une adresse e-mail valide.'
      },
      message: {
        input: document.getElementById('message'),
        wrapper: document.getElementById('fieldMessage'),
        error: document.getElementById('errorMessage'),
        validate: (value) => value.trim().length >= 10,
        message: 'Votre message doit contenir au moins 10 caractères.'
      }
    };

    const formSuccess = document.getElementById('formSuccess');

    function validateField(field) {
      const isValid = field.validate(field.input.value);
      field.wrapper.classList.toggle('has-error', !isValid);
      field.error.textContent = isValid ? '' : field.message;
      return isValid;
    }

    Object.values(fields).forEach((field) => {
      field.input.addEventListener('blur', () => validateField(field));
    });

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const allValid = Object.values(fields).map(validateField).every(Boolean);

      if (allValid) {
        formSuccess.hidden = false;
        contactForm.reset();
        Object.values(fields).forEach((field) => field.wrapper.classList.remove('has-error'));
      } else {
        formSuccess.hidden = true;
      }
    });
  }

});
