// Language Switching
const langData = {
    cz: {},
    en: {}
};

// Initialize language data from data attributes
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-cz][data-en]');

    elements.forEach(element => {
        const key = element.tagName + '_' + Array.from(elements).indexOf(element);
        langData.cz[key] = element.getAttribute('data-cz');
        langData.en[key] = element.getAttribute('data-en');
        element.dataset.key = key;
    });

    // Set initial language
    setLanguage('cz');

    // Add event listeners to language buttons
    document.getElementById('lang-cz').addEventListener('click', () => setLanguage('cz'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
});

function setLanguage(lang) {
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update content
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (langData[lang][key]) {
            element.textContent = langData[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Load saved language preference
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        setLanguage(savedLang);
    }
});

// Smooth scrolling for anchor links (if you add navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
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

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
