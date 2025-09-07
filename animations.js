// Animation Controller
class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverAnimations();
        this.setupLoadingAnimations();
        this.setupParallaxEffects();
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Add staggered delays for multiple elements
                    const siblings = entry.target.parentElement.children;
                    Array.from(siblings).forEach((sibling, index) => {
                        if (sibling.classList.contains('animate-bounce-in-scroll') || 
                            sibling.classList.contains('animate-scale-in-scroll')) {
                            sibling.style.animationDelay = `${index * 0.1}s`;
                        }
                    });
                }
            });
        }, observerOptions);

        // Observe all elements with scroll animation classes
        const animatedElements = document.querySelectorAll(`
            .animate-on-scroll,
            .animate-fade-in-scroll,
            .animate-slide-left-scroll,
            .animate-slide-right-scroll,
            .animate-scale-in-scroll,
            .animate-rotate-in-scroll,
            .animate-bounce-in-scroll,
            .animate-flip-in-scroll
        `);

        animatedElements.forEach(el => observer.observe(el));
    }

    // Enhanced hover animations
    setupHoverAnimations() {
        // Add magnetic effect to buttons
        const magneticElements = document.querySelectorAll('.btn, .service-card, .feature-card');
        
        magneticElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.classList.add('magnetic');
            });
            
            el.addEventListener('mouseleave', () => {
                el.classList.remove('magnetic');
            });
        });

        // Add floating animation to icons
        const floatingIcons = document.querySelectorAll('.service-icon, .feature-icon');
        floatingIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.classList.add('animate-float');
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.classList.remove('animate-float');
            });
        });
    }

    // Loading animations
    setupLoadingAnimations() {
        // Show loading spinner on page load
        window.addEventListener('load', () => {
            const loader = document.querySelector('.loading-spinner');
            if (loader) {
                loader.style.display = 'none';
            }
            
            // Trigger initial animations
            this.triggerInitialAnimations();
        });
    }

    // Parallax effects
    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast');
            
            parallaxElements.forEach(el => {
                const speed = el.classList.contains('parallax-fast') ? 0.5 : 0.3;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Trigger initial animations
    triggerInitialAnimations() {
        // Animate hero elements
        const heroElements = document.querySelectorAll('.hero-subtitle, .hero-title, .hero-description, .hero-buttons');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 200);
        });

        // Animate navigation
        const navElements = document.querySelectorAll('.nav-logo, .nav-menu-items');
        navElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 100);
        });
    }

    // Utility methods
    static addAnimation(element, animationClass, duration = 1000) {
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, duration);
    }

    static staggerAnimation(elements, animationClass, delay = 100) {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add(animationClass);
            }, index * delay);
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
});

// Additional animation utilities
const AnimationUtils = {
    // Bounce effect for buttons
    bounce: (element) => {
        element.classList.add('animate-bounce');
        setTimeout(() => element.classList.remove('animate-bounce'), 1000);
    },

    // Shake effect for errors
    shake: (element) => {
        element.classList.add('animate-shake');
        setTimeout(() => element.classList.remove('animate-shake'), 500);
    },

    // Pulse effect for important elements
    pulse: (element) => {
        element.classList.add('animate-pulse');
        setTimeout(() => element.classList.remove('animate-pulse'), 2000);
    },

    // Glow effect for highlights
    glow: (element) => {
        element.classList.add('animate-glow');
        setTimeout(() => element.classList.remove('animate-glow'), 2000);
    },

    // Typewriter effect for text
    typewriter: (element, text, speed = 50) => {
        element.textContent = '';
        element.classList.add('animate-typewriter');
        
        let i = 0;
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(timer);
                element.classList.remove('animate-typewriter');
            }
        }, speed);
    }
};

// Export for use in other scripts
window.AnimationController = AnimationController;
window.AnimationUtils = AnimationUtils;
