// =============================================
//  SHARED JS — E-Portfolio
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Active nav link ----
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ---- Mobile hamburger ----
  const burger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // ---- Animate skill bars on scroll ----
  const fills = document.querySelectorAll('.skill-fill[data-width]');
  if (fills.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.width;
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(f => obs.observe(f));
  }

  // ---- Fade-up on scroll for cards ----
  const cards = document.querySelectorAll('.card, .timeline-item');
  if (cards.length) {
    const cardObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '0';
          e.target.style.transform = 'translateY(16px)';
          setTimeout(() => {
            e.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }, i * 60);
          cardObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => cardObs.observe(c));
  }

});
