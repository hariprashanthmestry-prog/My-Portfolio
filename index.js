
        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        // Mobile menu toggle
       
// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navUl = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navUl.style.display =
        navUl.style.display === 'flex' ? 'none' : 'flex';

    navUl.style.position = 'absolute';
    navUl.style.top = '60px';
    navUl.style.left = '0';
    navUl.style.right = '0';
    navUl.style.flexDirection = 'column';
    navUl.style.background = 'white';
    navUl.style.padding = '2rem';
    navUl.style.gap = '1rem';
    navUl.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
});

// Close menu only on mobile after clicking a link
document.querySelectorAll('nav ul a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navUl.style.display = 'none';
        }
    });
});


        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
  