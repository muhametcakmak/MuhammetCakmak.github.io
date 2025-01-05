document.addEventListener('DOMContentLoaded', () => {
    // Terminal yazı efekti
    const commandLine = document.querySelector('.command-line');
    if (commandLine) {  // Null check ekledik
        const typeWriter = (element, text, speed = 50) => {
            let i = 0;
            element.innerHTML = '';
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, speed);
        };

        typeWriter(commandLine, '$ ./welcome.sh');
    }

    // Skill bars
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.setProperty('--width', `${level}%`);
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});