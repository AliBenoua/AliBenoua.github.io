//
// Ali Bennani — Portfolio scripts
//

window.addEventListener('DOMContentLoaded', () => {

    // Current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Navbar background on scroll
    const nav = document.getElementById('mainNav');
    const onScroll = () => {
        if (!nav) return;
        nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });

    // Mobile nav toggle
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
        // Close the menu after clicking a link (mobile)
        links.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll-reveal animation
    const revealTargets = document.querySelectorAll(
        '.section-kicker, .section-title, .section-lead, .about-grid, ' +
        '.skill-card, .project-card, .timeline-item, .contact-lead, ' +
        '.contact-inner .btn, .contact-social'
    );
    revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealTargets.forEach((el) => observer.observe(el));
    } else {
        revealTargets.forEach((el) => el.classList.add('is-visible'));
    }
});
