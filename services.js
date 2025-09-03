// Service detail data
const serviceDetails = {
    'interior-design': {
        title: 'Interior Design',
        description: 'Transform your space with our innovative interior design solutions. We create functional, beautiful, and personalized environments that reflect your style and enhance your lifestyle.',
        features: [
            'Space planning and layout design',
            'Color scheme and material selection',
            'Furniture and decor consultation',
            '3D visualization and renderings',
            'Lighting design and implementation',
            'Custom furniture design',
            'Art and accessory selection',
            'Sustainable design solutions'
        ],
        process: [
            'Initial consultation and space analysis',
            'Concept development and mood boards',
            'Detailed design plans and 3D renderings',
            'Material and furniture selection',
            'Implementation and project management',
            'Final styling and accessorizing'
        ],
        pricing: 'Starting from $2,500',
        duration: '2-8 weeks depending on project scope'
    },
    'renovation': {
        title: 'Renovation',
        description: 'Complete home and office renovations with attention to detail and modern construction techniques. We breathe new life into existing spaces while maintaining structural integrity.',
        features: [
            'Kitchen and bathroom renovations',
            'Flooring and wall treatments',
            'Electrical and plumbing updates',
            'Structural modifications',
            'HVAC system upgrades',
            'Window and door replacement',
            'Outdoor living spaces',
            'Accessibility improvements'
        ],
        process: [
            'Site assessment and planning',
            'Design and permit acquisition',
            'Demolition and preparation',
            'Structural work and installations',
            'Finishing and detailing',
            'Final inspection and cleanup'
        ],
        pricing: 'Starting from $15,000',
        duration: '4-12 weeks depending on scope'
    },
    'architecture': {
        title: 'Architecture',
        description: 'Professional architectural services from concept to completion. Our licensed architects ensure structural integrity, aesthetic appeal, and compliance with building codes.',
        features: [
            'Residential and commercial design',
            'Building permits and approvals',
            'Structural engineering',
            'Site planning and development',
            'Sustainable design solutions',
            'Accessibility compliance',
            'Energy-efficient design',
            'Historic preservation'
        ],
        process: [
            'Site analysis and programming',
            'Conceptual design development',
            'Design development and documentation',
            'Permit drawings and approvals',
            'Construction administration',
            'Post-construction services'
        ],
        pricing: 'Starting from $5,000',
        duration: '8-24 weeks depending on project complexity'
    },
    'construction': {
        title: 'Construction',
        description: 'Full-scale construction projects with experienced teams and premium materials. We handle everything from foundation to finishing touches with precision and quality.',
        features: [
            'New home construction',
            'Commercial buildings',
            'Additions and extensions',
            'Project management',
            'Custom home building',
            'Multi-family developments',
            'Industrial construction',
            'Green building practices'
        ],
        process: [
            'Site preparation and foundation',
            'Framing and structural work',
            'Mechanical, electrical, and plumbing',
            'Insulation and drywall',
            'Finishing and trim work',
            'Final inspections and handover'
        ],
        pricing: 'Starting from $150 per sq ft',
        duration: '12-52 weeks depending on project size'
    },
    '3d-visualization': {
        title: '3D Visualization',
        description: 'Bring your project to life with our advanced 3D visualization services. See your space before construction begins with photorealistic renderings and virtual walkthroughs.',
        features: [
            '3D modeling and rendering',
            'Virtual reality walkthroughs',
            'Material and lighting simulation',
            'Interactive design presentations',
            'Animation and fly-through videos',
            'Augmented reality applications',
            'Real-time design changes',
            'Client presentation tools'
        ],
        process: [
            'Project briefing and requirements',
            '3D modeling and texturing',
            'Lighting and material setup',
            'Rendering and post-production',
            'Client review and revisions',
            'Final delivery and presentation'
        ],
        pricing: 'Starting from $500 per rendering',
        duration: '1-2 weeks per project'
    },
    'project-management': {
        title: 'Project Management',
        description: 'Comprehensive project management services to ensure your construction project runs smoothly, on time, and within budget. We coordinate all aspects of your project.',
        features: [
            'Timeline and budget management',
            'Vendor and contractor coordination',
            'Quality control and inspections',
            'Progress reporting and updates',
            'Risk assessment and mitigation',
            'Change order management',
            'Safety compliance',
            'Warranty and maintenance planning'
        ],
        process: [
            'Project initiation and planning',
            'Resource allocation and scheduling',
            'Execution and monitoring',
            'Quality control and testing',
            'Project closure and handover',
            'Post-project evaluation'
        ],
        pricing: 'Starting from 8% of project value',
        duration: 'Throughout project lifecycle'
    }
};

// Initialize services page functionality
document.addEventListener('DOMContentLoaded', function() {
    initServiceModals();
});

function initServiceModals() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            openServiceModal(serviceType);
        });
    });
}

function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('serviceModalContent');
    const serviceData = serviceDetails[serviceType];
    
    if (!serviceData) {
        console.error('Service data not found for:', serviceType);
        return;
    }
    
    content.innerHTML = `
        <div class="service-modal-content">
            <div class="service-modal-header">
                <h2>${serviceData.title}</h2>
                <p class="service-description">${serviceData.description}</p>
            </div>
            
            <div class="service-modal-body">
                <div class="service-details-grid">
                    <div class="service-detail-section">
                        <h3><i class="fas fa-check-circle"></i> What's Included</h3>
                        <ul class="feature-list">
                            ${serviceData.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="service-detail-section">
                        <h3><i class="fas fa-cogs"></i> Our Process</h3>
                        <ol class="process-list">
                            ${serviceData.process.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                    
                    <div class="service-detail-section">
                        <h3><i class="fas fa-dollar-sign"></i> Pricing</h3>
                        <p class="pricing-info">${serviceData.pricing}</p>
                    </div>
                    
                    <div class="service-detail-section">
                        <h3><i class="fas fa-clock"></i> Timeline</h3>
                        <p class="timeline-info">${serviceData.duration}</p>
                    </div>
                </div>
                
                <div class="service-modal-actions">
                    <button class="btn btn-primary" onclick="openQuoteForm(); closeServiceModal();">Get Quote for ${serviceData.title}</button>
                    <button class="btn btn-secondary" onclick="closeServiceModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});
