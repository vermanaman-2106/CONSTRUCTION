// Project data
const projectData = {
    'modern-family-home': {
        title: 'Modern Family Home',
        location: 'Beverly Hills, CA',
        type: 'Residential',
        year: '2023',
        duration: '8 months',
        size: '4,500 sq ft',
        description: 'A stunning modern family home featuring clean lines, natural materials, and seamless indoor-outdoor living. This project showcases our expertise in contemporary residential design with sustainable building practices.',
        features: [
            'Open-concept living spaces',
            'Floor-to-ceiling windows',
            'Custom kitchen with premium appliances',
            'Master suite with walk-in closet',
            'Home office and gym',
            'Outdoor kitchen and pool area',
            'Smart home technology integration',
            'Solar panel system'
        ],
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80'
        ],
        testimonial: {
            text: "Engineer's & Builder's exceeded our expectations. They delivered a beautiful home that perfectly fits our family's needs.",
            author: "The Johnson Family"
        }
    },
    'luxury-kitchen': {
        title: 'Luxury Kitchen Renovation',
        location: 'Manhattan, NY',
        type: 'Residential',
        year: '2023',
        duration: '6 weeks',
        size: '400 sq ft',
        description: 'A complete kitchen transformation featuring custom cabinetry, premium appliances, and elegant finishes. This renovation created a chef\'s dream kitchen while maintaining the home\'s historic character.',
        features: [
            'Custom walnut cabinetry',
            'Quartz countertops',
            'Professional-grade appliances',
            'Large center island',
            'Walk-in pantry',
            'Under-cabinet lighting',
            'Hardwood flooring',
            'Custom backsplash'
        ],
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80'
        ],
        testimonial: {
            text: "The kitchen renovation was flawless. Every detail was perfect and the team was professional throughout.",
            author: "Sarah & Michael Chen"
        }
    },
    'contemporary-living': {
        title: 'Contemporary Living Space',
        location: 'Austin, TX',
        type: 'Residential',
        year: '2023',
        duration: '4 months',
        size: '3,200 sq ft',
        description: 'A contemporary living space that blends modern design with natural elements. This project features an open floor plan, sustainable materials, and innovative storage solutions.',
        features: [
            'Open floor plan design',
            'Natural stone accents',
            'Energy-efficient windows',
            'Built-in storage solutions',
            'Modern fireplace',
            'Hardwood floors',
            'LED lighting system',
            'Smart home features'
        ],
        images: [
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80'
        ],
        testimonial: {
            text: "We love our new living space. The design is both beautiful and functional.",
            author: "The Martinez Family"
        }
    },
    'corporate-office': {
        title: 'Corporate Office Space',
        location: 'San Francisco, CA',
        type: 'Commercial',
        year: '2023',
        duration: '12 weeks',
        size: '15,000 sq ft',
        description: 'A modern corporate office space designed to promote collaboration and productivity. This project features flexible workspaces, meeting rooms, and employee amenities.',
        features: [
            'Open workspace design',
            'Private meeting rooms',
            'Collaboration areas',
            'Employee lounge',
            'Modern reception area',
            'Energy-efficient lighting',
            'Acoustic treatments',
            'Flexible furniture systems'
        ],
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
        ],
        testimonial: {
            text: "The new office space has improved our team's productivity and morale significantly.",
            author: "Tech Solutions Inc."
        }
    },
    'restaurant-interior': {
        title: 'Restaurant Interior',
        location: 'Miami, FL',
        type: 'Commercial',
        year: '2023',
        duration: '8 weeks',
        size: '3,500 sq ft',
        description: 'A vibrant restaurant interior that captures the essence of Miami\'s culinary scene. This project features bold colors, unique lighting, and an inviting atmosphere.',
        features: [
            'Custom bar design',
            'Unique lighting fixtures',
            'Bold color scheme',
            'Outdoor seating area',
            'Open kitchen concept',
            'Acoustic treatments',
            'Custom furniture',
            'Art installations'
        ],
        images: [
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
        ],
        testimonial: {
            text: "The restaurant design perfectly captures our brand and has been a hit with customers.",
            author: "Coastal Bistro"
        }
    },
    'retail-store': {
        title: 'Retail Store Design',
        location: 'Chicago, IL',
        type: 'Commercial',
        year: '2023',
        duration: '6 weeks',
        size: '2,800 sq ft',
        description: 'A modern retail store design that enhances the shopping experience. This project features flexible displays, comfortable seating areas, and strategic lighting.',
        features: [
            'Flexible display systems',
            'Comfortable seating areas',
            'Strategic lighting design',
            'Fitting room areas',
            'Checkout counter',
            'Storage solutions',
            'Brand elements',
            'Customer flow optimization'
        ],
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
        ],
        testimonial: {
            text: "The store design has improved our sales and customer experience.",
            author: "Urban Fashion Co."
        }
    },
    'historic-renovation': {
        title: 'Historic Home Renovation',
        location: 'Boston, MA',
        type: 'Renovation',
        year: '2023',
        duration: '10 months',
        size: '3,800 sq ft',
        description: 'A careful renovation of a historic home that preserves its character while adding modern amenities. This project required extensive planning and attention to detail.',
        features: [
            'Historic preservation',
            'Modern kitchen addition',
            'Updated electrical systems',
            'New HVAC system',
            'Restored original features',
            'Energy-efficient upgrades',
            'Bathroom renovations',
            'Structural improvements'
        ],
        images: [
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80'
        ],
        testimonial: {
            text: "They perfectly balanced historic preservation with modern living.",
            author: "The Williams Family"
        }
    },
    'bathroom-remodel': {
        title: 'Luxury Bathroom Remodel',
        location: 'Seattle, WA',
        type: 'Renovation',
        year: '2023',
        duration: '3 weeks',
        size: '120 sq ft',
        description: 'A complete bathroom transformation featuring luxury finishes and modern fixtures. This project created a spa-like retreat within the home.',
        features: [
            'Marble countertops',
            'Walk-in shower',
            'Freestanding bathtub',
            'Heated floors',
            'Custom vanity',
            'LED mirror',
            'Towel warmer',
            'Smart toilet'
        ],
        images: [
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        ],
        testimonial: {
            text: "The bathroom is now our favorite room in the house. Absolutely stunning!",
            author: "Jennifer & Robert Kim"
        }
    },
    'basement-conversion': {
        title: 'Basement Conversion',
        location: 'Denver, CO',
        type: 'Renovation',
        year: '2023',
        duration: '6 weeks',
        size: '1,200 sq ft',
        description: 'A basement conversion that transformed unused space into a functional family room and home office. This project added significant value to the home.',
        features: [
            'Home theater setup',
            'Home office space',
            'Wet bar area',
            'Storage solutions',
            'Proper lighting',
            'Soundproofing',
            'HVAC improvements',
            'Egress window installation'
        ],
        images: [
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80'
        ],
        testimonial: {
            text: "The basement conversion gave us so much more usable space. Excellent work!",
            author: "The Thompson Family"
        }
    }
};

// Initialize projects page functionality
document.addEventListener('DOMContentLoaded', function() {
    initProjectFilters();
    initProjectModals();
    initProjectVideos();
});

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initProjectModals() {
    // Modal functionality is handled by openProjectModal function
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');
    const project = projectData[projectId];
    
    if (!project) {
        console.error('Project data not found for:', projectId);
        return;
    }
    
    modalBody.innerHTML = `
        <div class="project-modal-header">
            <h2>${project.title}</h2>
            <div class="project-meta">
                <span class="project-location"><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                <span class="project-type">${project.type}</span>
                <span class="project-year">${project.year}</span>
            </div>
        </div>
        
        <div class="project-modal-body">
            <div class="project-images">
                <div class="main-image">
                    <img src="${project.images[0]}" alt="${project.title}" id="mainProjectImage">
                </div>
                <div class="image-thumbnails">
                    ${project.images.map((img, index) => `
                        <img src="${img}" alt="${project.title}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            </div>
            
            <div class="project-details">
                <div class="project-description">
                    <h3>Project Overview</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="project-specs">
                    <div class="spec-item">
                        <i class="fas fa-calendar"></i>
                        <span><strong>Duration:</strong> ${project.duration}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <span><strong>Size:</strong> ${project.size}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-tag"></i>
                        <span><strong>Type:</strong> ${project.type}</span>
                    </div>
                </div>
                
                <div class="project-features">
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-testimonial">
                    <h3>Client Testimonial</h3>
                    <blockquote>
                        <p>"${project.testimonial.text}"</p>
                        <cite>- ${project.testimonial.author}</cite>
                    </blockquote>
                </div>
                
                <div class="project-actions">
                    <button class="btn btn-primary" onclick="openQuoteForm(); closeProjectModal();">Get Quote for Similar Project</button>
                    <button class="btn btn-secondary" onclick="closeProjectModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainProjectImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainImage.src = imageSrc;
    
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Initialize project videos
function initProjectVideos() {
    const projectVideos = document.querySelectorAll('.project-video');
    
    projectVideos.forEach(video => {
        // Handle video loading
        video.addEventListener('loadeddata', function() {
            console.log('Project video loaded successfully');
        });
        
        // Handle video errors
        video.addEventListener('error', function() {
            console.log('Project video failed to load, using fallback image');
        });
        
        // Pause video when it's not visible (for performance)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Video is visible, can play if user wants
                } else {
                    // Video is not visible, pause it
                    video.pause();
                    const playBtn = entry.target.closest('.project-card').querySelector('.play-pause-btn');
                    if (playBtn) {
                        playBtn.classList.remove('playing');
                        playBtn.querySelector('i').className = 'fas fa-play';
                    }
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(video);
    });
}

// Toggle project video play/pause
function toggleProjectVideo(button) {
    const video = button.closest('.project-video-container').querySelector('.project-video');
    const icon = button.querySelector('i');
    
    if (video.paused) {
        video.play();
        button.classList.add('playing');
        icon.className = 'fas fa-pause';
    } else {
        video.pause();
        button.classList.remove('playing');
        icon.className = 'fas fa-play';
    }
}
