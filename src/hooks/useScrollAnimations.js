import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // 1. Assign stagger classes to child cards automatically
    const cardGridSelectors = [
      '.services-quad-grid',
      '.process-steps-grid',
      '.about-triad',
      '.stats-grid',
      '.contact-cards-row'
    ];

    cardGridSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(grid => {
        Array.from(grid.children).forEach((child, index) => {
          child.classList.add(`stagger-${(index % 10) + 1}`);
        });
      });
    });

    // 2. Query all cards that rearrange and animate
    const allCards = document.querySelectorAll(
      '.service-horizontal-card, .step-card, .contact-card, .stat-item, ' +
      '.about-triad > div, .founder-card, .dependable-card, .partner-card, ' +
      '.discuss-form-card, .contact-form-col, .brands-table-card'
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    allCards.forEach(card => cardObserver.observe(card));

    // 3. Continuous subtle scroll motion
    const scrollShiftCards = document.querySelectorAll(
      '.services-quad-grid > .service-horizontal-card, ' +
      '.process-steps-grid > .step-card, ' +
      '.contact-cards-row > .contact-card'
    );

    let ticking = false;
    const handleScrollMotion = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const vh = window.innerHeight;
          scrollShiftCards.forEach((card, idx) => {
            if (!card.classList.contains('visible')) return;
            const rect = card.getBoundingClientRect();
            const centerOffset = (rect.top + rect.height / 2) - (vh / 2);
            const progress = centerOffset / (vh / 2); // -1 to 1

            // Subtle parallax translateY and rotation shift
            const factor = (idx % 2 === 0 ? 1 : -1) * 8;
            const translateY = Math.max(-14, Math.min(14, progress * factor));
            card.style.transform = `translateY(${translateY}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollMotion, { passive: true });

    return () => {
      cardObserver.disconnect();
      window.removeEventListener('scroll', handleScrollMotion);
    };
  }, []);
}
