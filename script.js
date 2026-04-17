    function toggleMenu() {
      const m = document.getElementById('mobile-menu');
      const b = document.getElementById('burger');
      const open = m.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
    }

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

    // Hero reveal on load
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.hero .fade-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 120 + i * 80);
      });
    });

    // Close mobile menu on nav link click
    document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
    });
