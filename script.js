// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initCarousel();
    initForms();
    initScrollEffects();
    initAnimations();
    initHeroVideo();
    initCostEstimator();
    initProjectVideo();
    initAnimatedStats();
    initScrollAnimations();
    initScrollProgress();
    initParallaxEffects();
    initSmoothScroll();
    initSlideshow();
    initHeroBackground();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(28, 28, 28, 0.98)';
            navbar.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.4)';
            navbar.style.transform = 'scale(0.95)';
        } else {
            navbar.style.background = 'rgba(28, 28, 28, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
            navbar.style.transform = 'scale(1)';
        }
    });
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.project-slide');
const totalSlides = slides.length;

function initCarousel() {
    if (slides.length === 0) return;
    
    // Auto-advance carousel
    setInterval(() => {
        changeSlide(1);
    }, 5000);

    // Initialize first slide
    showSlide(0);
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Form functionality
function initForms() {
    // Quote form
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', handleQuoteSubmit);
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleQuoteSubmit(e) {
    // Let Formspree handle the submission naturally
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Show success message after form submission
    setTimeout(() => {
        showNotification('Quote request submitted successfully! We\'ll contact you soon.', 'success');
        e.target.reset();
        closeQuoteForm();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }, 2000);
}

function handleContactSubmit(e) {
    // Let Formspree handle the submission naturally
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Show success message after form submission
    setTimeout(() => {
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }, 2000);
}

// Modal functionality
function openQuoteForm() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus on first input
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeQuoteForm() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('quoteModal');
    if (e.target === modal) {
        closeQuoteForm();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeQuoteForm();
    }
});

// Scroll effects
function initScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to section function
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .stat');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Animations
function initAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .feature-card, .testimonial-card, .stat {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .service-card.animate-in, .feature-card.animate-in, 
        .testimonial-card.animate-in, .stat.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card:nth-child(1).animate-in { transition-delay: 0.1s; }
        .service-card:nth-child(2).animate-in { transition-delay: 0.2s; }
        .service-card:nth-child(3).animate-in { transition-delay: 0.3s; }
        .service-card:nth-child(4).animate-in { transition-delay: 0.4s; }
        
        .feature-card:nth-child(1).animate-in { transition-delay: 0.1s; }
        .feature-card:nth-child(2).animate-in { transition-delay: 0.2s; }
        .feature-card:nth-child(3).animate-in { transition-delay: 0.3s; }
        .feature-card:nth-child(4).animate-in { transition-delay: 0.4s; }
        
        .testimonial-card:nth-child(1).animate-in { transition-delay: 0.1s; }
        .testimonial-card:nth-child(2).animate-in { transition-delay: 0.2s; }
        .testimonial-card:nth-child(3).animate-in { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(animationStyle);

    // Add to DOM
    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScroll = debounce(() => {
    // Handle scroll events here if needed
}, 16);

window.addEventListener('scroll', debouncedScroll);

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if there are lazy images
if (document.querySelectorAll('img[data-src]').length > 0) {
    initLazyLoading();
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to a logging service here
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Hero Video functionality
function initHeroVideo() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        // Handle video loading
        heroVideo.addEventListener('loadeddata', function() {
            console.log('Hero video loaded successfully');
        });
        
        // Handle video errors
        heroVideo.addEventListener('error', function() {
            console.log('Hero video failed to load, using fallback image');
            // The fallback image in the video tag will be displayed
        });
        
        // Pause video when page is not visible (for performance)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                heroVideo.pause();
            } else {
                heroVideo.play().catch(e => {
                    // Autoplay might be blocked, that's okay
                    console.log('Video autoplay blocked:', e);
                });
            }
        });
        
        // Handle mobile devices - some browsers don't support autoplay
        if (isMobileDevice()) {
            // On mobile, we might want to show a play button or just use the first frame
            heroVideo.muted = true; // Ensure it's muted for autoplay
        }
    }
}

// Check if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Cost Estimator functionality
function initCostEstimator() {
    const form = document.getElementById('costEstimatorForm');
    const resultDiv = document.getElementById('estimateResult');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateEstimate();
        });
    }
}

function calculateEstimate() {
    const form = document.getElementById('costEstimatorForm');
    const formData = new FormData(form);
    
    // Get form values
    const projectType = formData.get('projectType');
    const propertySize = parseInt(formData.get('propertySize'));
    const roomCount = parseInt(formData.get('roomCount'));
    const qualityLevel = formData.get('qualityLevel');
    const additionalServices = formData.getAll('additionalServices');

    // Validate inputs
    if (!projectType || !propertySize || !roomCount || !qualityLevel) {
        alert('Please fill in all required fields.');
        return;
    }

    // Base cost calculation based on quality level
    let baseCostPerSqFt = 0;
    switch (qualityLevel) {
        case 'basic':
            baseCostPerSqFt = 1000; // Average of ₹800-1200
            break;
        case 'standard':
            baseCostPerSqFt = 1500; // Average of ₹1200-1800
            break;
        case 'premium':
            baseCostPerSqFt = 2150; // Average of ₹1800-2500
            break;
        case 'luxury':
            baseCostPerSqFt = 3000; // ₹2500+
            break;
    }

    // Project type multiplier
    let projectMultiplier = 1;
    switch (projectType) {
        case 'interior-design':
            projectMultiplier = 1;
            break;
        case 'renovation':
            projectMultiplier = 1.2;
            break;
        case 'construction':
            projectMultiplier = 1.5;
            break;
        case 'commercial':
            projectMultiplier = 1.3;
            break;
    }

    // Calculate base cost
    const baseCost = propertySize * baseCostPerSqFt * projectMultiplier;

    // Additional services cost
    let additionalCost = 0;
    const additionalServiceCosts = {
        'furniture': propertySize * 200,
        'lighting': propertySize * 150,
        'landscaping': propertySize * 100,
        'smart-home': propertySize * 300
    };

    additionalServices.forEach(service => {
        additionalCost += additionalServiceCosts[service] || 0;
    });

    // Room count adjustment (more rooms = slight discount per room)
    const roomDiscount = Math.max(0, (roomCount - 2) * 0.05); // 5% discount per room over 2
    const adjustedBaseCost = baseCost * (1 - roomDiscount);

    const totalCost = adjustedBaseCost + additionalCost;

    // Display results
    displayEstimate(adjustedBaseCost, additionalCost, totalCost);
}

function displayEstimate(baseCost, additionalCost, totalCost) {
    const resultDiv = document.getElementById('estimateResult');
    const baseCostElement = document.getElementById('baseCost');
    const additionalCostElement = document.getElementById('additionalCost');
    const totalCostElement = document.getElementById('totalCost');

    // Format numbers with Indian number system
    baseCostElement.textContent = formatIndianCurrency(baseCost);
    additionalCostElement.textContent = formatIndianCurrency(additionalCost);
    totalCostElement.textContent = formatIndianCurrency(totalCost);

    // Show result with animation
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function formatIndianCurrency(amount) {
    // Convert to Indian number format (lakhs and crores)
    if (amount >= 10000000) { // 1 crore
        return '₹' + (amount / 10000000).toFixed(1) + ' Cr';
    } else if (amount >= 100000) { // 1 lakh
        return '₹' + (amount / 100000).toFixed(1) + ' L';
    } else {
        return '₹' + amount.toLocaleString('en-IN');
    }
}

function resetEstimator() {
    const form = document.getElementById('costEstimatorForm');
    const resultDiv = document.getElementById('estimateResult');
    
    form.reset();
    resultDiv.style.display = 'none';
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Project Video functionality
function initProjectVideo() {
    const video = document.getElementById('projectVideo');
    
    if (video) {
        // Pause video when it's not visible (performance optimization)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(video);
    }
}

// Animated Stats functionality
function initAnimatedStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    };

    // Trigger animation when stats section is visible
    const statsSection = document.querySelector('.project-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }
}

// Enhanced Scroll Animations functionality
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Staggered animation for grid items
                if (entry.target.classList.contains('services') || 
                    entry.target.classList.contains('why-choose-us') ||
                    entry.target.classList.contains('testimonials')) {
                    
                    const cards = entry.target.querySelectorAll('.service-card, .feature-card, .testimonial-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 100);
                    });
                }
                
                // Staggered animation for stats
                if (entry.target.classList.contains('project-stats')) {
                    const stats = entry.target.querySelectorAll('.stat-item');
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.classList.add('animate');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);

    // Enhanced observer for new animation classes
    const enhancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Handle stagger animations
                if (entry.target.classList.contains('stagger-animation')) {
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 100);
                }
            }
        });
    }, observerOptions);

    // Observe all sections with animate-on-scroll class
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe individual cards for staggered animations
    const cards = document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .stat-item');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Observe new animation classes
    const newAnimationElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-up, .scroll-rotate, .stagger-animation');
    newAnimationElements.forEach(element => {
        enhancedObserver.observe(element);
    });
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Smooth scroll enhancement
function initSmoothScroll() {
    // Enhanced smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Slideshow functionality
let currentSlideshowSlide = 0;
let slideshowInterval;

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slideshow-dots .dot');
    
    if (slides.length === 0) return;
    
    // Auto-advance slideshow
    slideshowInterval = setInterval(() => {
        nextSlide();
    }, 5000);
    
    // Initialize first slide
    showSlideshowSlide(0);
    
    // Pause slideshow on hover
    const slideshowContainer = document.querySelector('.project-slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideshowInterval);
        });
        
        slideshowContainer.addEventListener('mouseleave', () => {
            slideshowInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        });
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideshowSlide = (currentSlideshowSlide + 1) % slides.length;
    showSlideshowSlide(currentSlideshowSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideshowSlide = (currentSlideshowSlide - 1 + slides.length) % slides.length;
    showSlideshowSlide(currentSlideshowSlide);
}

function showSlideshowSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slideshow-dots .dot');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Activate current dot
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentSlideshowSlide = index;
}

// Global functions for slideshow controls
window.changeSlide = function(direction) {
    if (direction === 1) {
        nextSlide();
    } else if (direction === -1) {
        prevSlide();
    }
};

window.currentSlide = function(slideIndex) {
    showSlideshowSlide(slideIndex - 1); // Convert to 0-based index
};

// Hero background functionality - static image
function initHeroBackground() {
    // Static background image - no slideshow needed
    console.log('Hero background initialized with static image');
}

// Export functions for global access
window.openQuoteForm = openQuoteForm;
window.closeQuoteForm = closeQuoteForm;
window.resetEstimator = resetEstimator;
window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
};
