
document.addEventListener("DOMContentLoaded", function() {


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(9, 9, 15, 0.95)';
                nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            } else {
                nav.style.background = 'rgba(13, 13, 21, 0.9)';
                nav.style.boxShadow = 'none';
            }
        }
    });

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('section').forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function() {
            setTimeout(() => {
                alert("Thank you for your message! I will get back to you soon.");
            }, 500);
        });
    }

});

