// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navPanel = document.querySelector('#nav-panel');

    if (navToggle && navPanel) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navPanel.classList.toggle('nav__list--open');
            navToggle.textContent = isExpanded ? '☰' : '✕';
        });

        // Close menu when clicking a nav link
        navPanel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navPanel.classList.remove('nav__list--open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.textContent = '☰';
            });
        });
    }
});
