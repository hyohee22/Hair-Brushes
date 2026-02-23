// Initialize Lucide Icons
lucide.createIcons();

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    document.getElementById('scroll-progress').style.width = scrollPercentage + '%';
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Target all elements with .scroll-reveal class
document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOpen = document.getElementById('mobile-menu-open');
const mobileClose = document.getElementById('mobile-menu-close');

if (mobileToggle && mobileMenu && mobileOpen && mobileClose) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileOpen.classList.toggle('hidden');
        mobileClose.classList.toggle('hidden');
        mobileToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileOpen.classList.remove('hidden');
            mobileClose.classList.add('hidden');
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
