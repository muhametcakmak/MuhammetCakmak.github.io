document.addEventListener('DOMContentLoaded', () => {
    // Terminal yazı efekti
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

    // Matrix arka plan efekti
    const createMatrixEffect = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.05';

        document.body.appendChild(canvas);

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const cols = Math.floor(width / 20);
        const ypos = Array(cols).fill(0);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        function matrix() {
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#0f0';
            ctx.font = '15pt monospace';

            ypos.forEach((y, ind) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                else ypos[ind] = y + 20;
            });
        }

        setInterval(matrix, 50);

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);
        });
    };

    // Scroll animasyonları
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Sertifika kartları için hover efekti
    const certificates = document.querySelectorAll('.certificate-card');
    certificates.forEach(cert => {
        cert.addEventListener('mousemove', (e) => {
            const rect = cert.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            cert.style.setProperty('--x', `${x}px`);
            cert.style.setProperty('--y', `${y}px`);
        });
    });

    // Sayfa yüklendiğinde terminal efektini başlat
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        typeWriter(typedElement, './send_message.sh');
    }

    // Matrix efektini başlat
    createMatrixEffect();
}); 