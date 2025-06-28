// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const productImage = document.querySelector('.product-image');
    const productInfo = document.querySelector('.product-info');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    observer.observe(productImage);
    observer.observe(productInfo);
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

// Handle order button click
function handleOrder() {
    // Add bounce animation
    const button = event.target;
    button.style.animation = 'bounce 0.3s ease';
    
    // Reset animation
    setTimeout(() => {
        button.style.animation = '';
    }, 300);

    // Redirect to WhatsApp
    window.location.href = 'https://wa.me/6283135571641?text=Saya%20ingin%20memesan%20Basreng%20Pedas%20Gurih';
}

// Handle variant order button click
function handleOrderVariant(variant) {
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/6283135571641?text=Saya%20ingin%20memesan%20Basreng%20${encodeURIComponent(variant)}`;
}

// Add floating animation to header background
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    // Create floating spice particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${2 + Math.random() * 4}px;
            height: ${2 + Math.random() * 4}px;
            background: rgba(255, 215, 0, ${0.5 + Math.random() * 0.5});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        header.appendChild(particle);
    }
});

// Smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});