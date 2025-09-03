# Interior & Construction Business Website

A modern, responsive website for an interior design and construction business built with HTML5, CSS3, and JavaScript. Features a dark theme with elegant animations and comprehensive functionality.

## 🎨 Design Features

### Color Palette
- **Background**: `#1C1C1C` (Charcoal)
- **Primary Text**: `#EAEAEA` (Light Grey)
- **Headings**: `#D97742` (Copper Orange)
- **Accents/Buttons**: `#9E6F4C` (Bronze)

### Design Philosophy
- Modern, minimal, and realistic design
- Clean, spacious layout with lots of white space
- Smooth animations and hover effects
- Fully responsive design for all devices
- Dark theme for professional appearance

## 📁 Project Structure

```
interioir:construction/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── team.html               # Team page
├── projects.html           # Projects portfolio
├── contact.html            # Contact page
├── styles.css              # Main stylesheet
├── pages.css               # Page-specific styles
├── script.js               # Homepage JavaScript
├── contact.js              # Contact page JavaScript
├── hero.mp4                # Hero section video
├── project.mp4             # Projects section video
├── asifali.png             # Team member image
├── amitsingh.png           # Team member image
├── sagarjain.png           # Team member image
├── ticker/                 # Project ticker images
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── ...
│   └── 12.png
├── proimage/               # Project gallery images
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── README.md               # This file
```

## 🚀 Features

### Homepage (`index.html`)
- **Hero Section**: Video background with call-to-action buttons
- **Services Grid**: Interactive service cards with hover effects
- **About Section**: Company introduction with animated statistics
- **Why Choose Us**: Feature cards highlighting company strengths
- **Projects Showcase**: 
  - Animated image ticker
  - Featured project video
  - Animated statistics counter
- **Project Cost Estimator**: Interactive form with Indian Rupee calculations
- **Testimonials**: Client reviews with smooth animations
- **Contact Form**: Integrated with Formspree for form submissions
- **Floating Action Buttons**: WhatsApp, Phone, and Instagram quick access

### About Page (`about.html`)
- Company story and mission
- Key statistics with animations
- Team and workplace showcase

### Services Page (`services.html`)
- Grid layout of services with icons
- Detailed service descriptions
- Interactive hover effects

### Team Page (`team.html`)
- **Department-based sections**:
  - Interiors & Finishing (Asif Ali)
  - Civil, Building Execution & Planning (Amit Singh)
  - Industrial & Project Management (Sagar Jain)
- Side-by-side layout with descriptions and images
- Responsive design for all devices

### Projects Page (`projects.html`)
- Clean image gallery layout
- Project showcase without filters
- Hover effects and smooth transitions

### Contact Page (`contact.html`)
- Contact form integrated with Formspree
- Google Maps embed
- FAQ section with accordion functionality
- Floating action buttons

## 🛠️ Technical Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 1024px, 1200px
- Optimized for all screen sizes

### Animations & Interactions
- Scroll-triggered animations using Intersection Observer
- Smooth hover effects and transitions
- Animated counters and statistics
- Video background with performance optimization
- Staggered animations for grid items

### Form Integration
- **Formspree Integration**: All forms submit to Formspree endpoints
- **Contact Form**: `https://formspree.io/f/mqadgkwq`
- **Quote Form**: `https://formspree.io/f/mblapjqr`
- Loading states and success notifications
- Form validation and user feedback

### Performance Optimizations
- Lazy loading for images
- Video performance optimization with Intersection Observer
- Efficient CSS animations
- Optimized JavaScript event handling

### Navigation
- Fixed header with rounded design
- Mobile hamburger menu with smooth animations
- Smooth scrolling between sections
- Active link highlighting

## 📱 Mobile Features

### Mobile Navigation
- Hamburger menu with smooth slide-down animation
- Optimized height to prevent content overflow
- Touch-friendly interface
- Custom scrollbar styling

### Mobile Optimizations
- Responsive images and videos
- Touch-optimized buttons and forms
- Optimized typography for mobile reading
- Efficient mobile animations

## 🎬 Media Assets

### Videos
- `hero.mp4`: Hero section background video (autoplay, muted, loop)
- `project.mp4`: Projects section featured video (controls hidden)

### Images
- Team member photos with optimized positioning
- Project gallery images with fallback URLs
- Ticker images for animated showcase
- Responsive image handling with `object-fit`

## 🔧 Customization

### Easy Modifications
- **Team Member Names**: Update in `team.html` department sections
- **Contact Information**: Update phone numbers and social media links
- **Form Endpoints**: Update Formspree URLs in form actions
- **Color Scheme**: Modify CSS custom properties in `styles.css`
- **Content**: Update text content in respective HTML files

### Adding New Projects
1. Add images to `proimage/` folder
2. Update the projects grid in `projects.html`
3. Add corresponding ticker images to `ticker/` folder

### Updating Team Information
1. Replace team member images (`asifali.png`, `amitsingh.png`, `sagarjain.png`)
2. Update names and roles in `team.html` department sections
3. Adjust image positioning in CSS if needed

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Integration

### Formspree Setup
1. Create Formspree account
2. Update form action URLs in HTML files
3. Configure form endpoints for contact and quote forms

### Social Media Integration
- WhatsApp: Direct messaging integration
- Instagram: Social media showcase
- Phone: Direct calling functionality

## 🚀 Deployment

### Static Hosting
This website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Requirements
- Modern web server
- HTTPS support (recommended)
- No server-side processing required

## 📝 License

This project is created for interior and construction business use. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for modern interior and construction businesses**
