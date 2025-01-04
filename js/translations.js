const translations = {
    tr: {
        "nav-about": "Hakkımda",
        "nav-skills": "Yetenekler",
        "nav-projects": "Projeler",
        "nav-experience": "Deneyim",
        "nav-contact": "İletişim",
        "hero-title": "Yazılım Geliştirici",
        "hero-cta": "Benimle İletişime Geç",
        "about-title": "Hakkımda",
        "about-description": "Merhaba! Ben Muhammet Çakmak. Modern web teknolojileri konusunda tutkulu bir yazılım geliştiricisiyim.",
        "skills-title": "Yetenekler",
        "projects-title": "Projeler",
        "contact-title": "İletişim",
        "contact-name": "İsim",
        "contact-email": "E-posta",
        "contact-message": "Mesaj",
        "contact-submit": "Gönder"
    },
    en: {
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-experience": "Experience",
        "nav-contact": "Contact",
        "hero-title": "Software Developer",
        "hero-cta": "Get in Touch",
        "about-title": "About Me",
        "about-description": "Hello! I'm Muhammet Çakmak. I'm a passionate software developer specialized in modern web technologies.",
        "skills-title": "Skills",
        "projects-title": "Projects",
        "contact-title": "Contact",
        "contact-name": "Name",
        "contact-email": "Email",
        "contact-message": "Message",
        "contact-submit": "Send"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    
    // Dil değiştirme fonksiyonu
    const changeLanguage = (language) => {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[language][key];
                } else {
                    element.textContent = translations[language][key];
                }
            }
        });
        
        // Dil tercihini kaydet
        localStorage.setItem('preferred-language', language);
        document.documentElement.lang = language;
    };

    // Dil seçimi değiştiğinde
    languageSelect?.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    // Sayfa yüklendiğinde kaydedilmiş dil tercihini kontrol et
    const savedLanguage = localStorage.getItem('preferred-language') || 'tr';
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    changeLanguage(savedLanguage);
}); 