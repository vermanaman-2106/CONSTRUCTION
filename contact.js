// Initialize contact page functionality
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
    initScrollAnimations();
});

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
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
        showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }, 2000);
}

function validateContactForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.service) {
        errors.push('Please select a service');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth scroll to contact form from other pages
function scrollToContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Auto-fill service field if coming from services page
function setServiceField(serviceType) {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect && serviceType) {
        serviceSelect.value = serviceType;
    }
}

// Check URL parameters for service pre-selection
function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    
    if (service) {
        setServiceField(service);
    }
}

// Initialize URL parameter checking
document.addEventListener('DOMContentLoaded', function() {
    checkURLParams();
});

// Scroll Animations functionality
function initScrollAnimations() {
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

    // Observe all sections with animate-on-scroll class
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Export functions for global access
window.scrollToContactForm = scrollToContactForm;
window.setServiceField = setServiceField;
