/**
 * BASE-100 Institute - Main Application JavaScript
 * Shared utilities and functions
 */

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', 
            mobileMenu.classList.contains('hidden') ? 'false' : 'true'
        );
    }
}

// Smooth scroll to sections
function smoothScroll(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Active navigation highlighting — exposed on window so components.js can call it post-inject
function setActiveNav() {
    const path = window.location.pathname;
    // file:// fallback: use href for matching
    const href = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        const isActive = section && (path.includes('/' + section) || href.includes('/' + section));
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}
window.setActiveNav = setActiveNav;

// Fade-in animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Cookie consent (GDPR compliance)
function initCookieConsent() {
    const cookieConsent = localStorage.getItem('base100_cookie_consent');
    
    if (!cookieConsent) {
        showCookieBanner();
    }
}

function showCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('hidden');
    }
}

function acceptCookies() {
    localStorage.setItem('base100_cookie_consent', 'accepted');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.add('hidden');
    }
}

function declineCookies() {
    localStorage.setItem('base100_cookie_consent', 'declined');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.add('hidden');
    }
}

// Analytics helper (privacy-friendly)
function trackPageView(pageName) {
    const consent = localStorage.getItem('base100_cookie_consent');
    if (consent === 'accepted') {
        // Add your analytics code here (e.g., Google Analytics, Plausible, etc.)
        console.log('Page view tracked:', pageName);
    }
}

// Initialize on page load — guard against DOMContentLoaded already having fired
function initApp() {
    // setActiveNav is called by components.js post-inject; also safe to run here
    setActiveNav();
    initScrollAnimations();
    initCookieConsent();

    // Track page view
    const pageName = document.title;
    trackPageView(pageName);

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBtn = document.getElementById('mobile-menu-btn');

        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenu.contains(event.target) && menuBtn && !menuBtn.contains(event.target)) {
                toggleMobileMenu();
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Utility: Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other scripts
window.BASE100 = {
    toggleMobileMenu,
    smoothScroll,
    validateEmail,
    acceptCookies,
    declineCookies,
    trackPageView
};

