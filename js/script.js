// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header with Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle (Basic implementation)
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
                nav.style.padding = '20px';
                nav.style.borderBottom = '1px solid var(--border-color)';
            }
        });
    }

    // 3. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };
    
    const revealOptions = {
        threshold: 0.15, // 15% of element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits bottom
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});
