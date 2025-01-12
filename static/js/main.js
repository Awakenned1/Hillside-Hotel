// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Add form submission animation
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button');
    button.innerHTML = 'Sending...';
    setTimeout(() => {
        button.innerHTML = 'Message Sent!';
        this.reset();
        setTimeout(() => {
            button.innerHTML = 'Send Message';
        }, 2000);
    }, 1500);
});

// Smooth reveal of amenity items on scroll
const amenityItems = document.querySelectorAll('.amenity-item');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

amenityItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    observer.observe(item);
});
