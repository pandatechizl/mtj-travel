// ================================
// Navigation
// ================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ================================
// Scroll to Top Button
// ================================

const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================================
// Hero Scroll Button
// ================================

const heroScroll = document.querySelector('.hero-scroll');

if (heroScroll) {
    heroScroll.addEventListener('click', () => {
        const searchWidget = document.querySelector('.search-widget');
        if (searchWidget) {
            searchWidget.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ================================
// Search Form Handler
// ================================

const searchForm = document.getElementById('searchForm');

if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const destination = document.getElementById('destination').value;
        const travelDate = document.getElementById('travelDate').value;
        const duration = document.getElementById('duration').value;
        const travelers = document.getElementById('travelers').value;

        // Validate form
        if (!destination || !travelDate || !duration || !travelers) {
            alert('Please fill in all fields to search for tours.');
            return;
        }

        // Show success message and redirect
        alert(`Searching for tours to ${destination} for ${travelers} travelers...`);
        
        // In a real application, this would redirect to a results page
        window.location.href = `packages.html?destination=${destination}&date=${travelDate}&duration=${duration}&travelers=${travelers}`;
    });
}

// ================================
// Newsletter Form Handler
// ================================

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show success message
        alert('Thank you for subscribing to our newsletter! You will receive travel inspiration and exclusive offers.');
        newsletterForm.reset();
    });
}

// ================================
// Contact Form Handler
// ================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Show success message
        alert('Thank you for contacting us! We will get back to you within 24 hours.');
        contactForm.reset();
    });
}

// ================================
// Booking Form Handler
// ================================

const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('bookingName').value;
        const email = document.getElementById('bookingEmail').value;
        const phone = document.getElementById('bookingPhone').value;
        const travelers = document.getElementById('bookingTravelers').value;
        const date = document.getElementById('bookingDate').value;

        // Validate form
        if (!name || !email || !phone || !travelers || !date) {
            alert('Please fill in all required fields.');
            return;
        }

        // Show success message
        alert('Your booking request has been submitted! We will contact you shortly to confirm your reservation.');
        bookingForm.reset();
    });
}

// ================================
// Testimonial Slider
// ================================

const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
const testimonialCards = document.querySelectorAll('.testimonial-card');

if (testimonialDots.length > 0 && testimonialCards.length > 0) {
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all cards
        testimonialCards.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('active');
        });

        // Show only on mobile/tablet
        if (window.innerWidth < 992) {
            testimonialCards[index].style.display = 'block';
            testimonialCards[index].classList.add('active');
        } else {
            // Show all on desktop
            testimonialCards.forEach(card => {
                card.style.display = 'block';
            });
        }

        // Update dots
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        testimonialDots[index].classList.add('active');

        currentSlide = index;
    }

    // Dot click handlers
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        if (window.innerWidth < 992) {
            currentSlide = (currentSlide + 1) % testimonialCards.length;
            showSlide(currentSlide);
        }
    }, 5000);

    // Handle window resize
    window.addEventListener('resize', () => {
        showSlide(currentSlide);
    });

    // Initialize
    showSlide(0);
}

// ================================
// Filter Functionality (Destinations Page)
// ================================

const filterButtons = document.querySelectorAll('.filter-btn');
const destinationCards = document.querySelectorAll('.destination-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            // Filter destinations
            destinationCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const cardRegion = card.dataset.region;
                    if (cardRegion === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ================================
// Package Filter (Packages Page)
// ================================

const packageFilterButtons = document.querySelectorAll('.package-filter-btn');
const packageCards = document.querySelectorAll('.package-card');

if (packageFilterButtons.length > 0) {
    packageFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            packageFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            // Filter packages
            packageCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const cardCategory = card.dataset.category;
                    if (cardCategory === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ================================
// Price Range Filter
// ================================

const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');

function filterByPrice() {
    if (!minPriceInput || !maxPriceInput) return;

    const minPrice = parseInt(minPriceInput.value) || 0;
    const maxPrice = parseInt(maxPriceInput.value) || Infinity;

    packageCards.forEach(card => {
        const priceText = card.querySelector('.price-value').textContent;
        const price = parseInt(priceText.replace(/[^0-9]/g, ''));

        if (price >= minPrice && price <= maxPrice) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

if (minPriceInput) {
    minPriceInput.addEventListener('input', filterByPrice);
}

if (maxPriceInput) {
    maxPriceInput.addEventListener('input', filterByPrice);
}

// ================================
// Scroll Animations (Simple Fade In)
// ================================

function checkVisibility() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    checkVisibility();
});

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// ================================
// Modal for Package Details
// ================================

const packageViewButtons = document.querySelectorAll('.view-package-details');

if (packageViewButtons.length > 0) {
    packageViewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const packageName = btn.closest('.package-card').querySelector('h3').textContent;
            alert(`Opening details for: ${packageName}`);
            // In a real application, this would open a modal or redirect to a details page
        });
    });
}

// ================================
// Search Result Parameters Handler
// ================================

// Check if there are URL parameters and display them
if (window.location.search) {
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');
    const date = urlParams.get('date');
    const duration = urlParams.get('duration');
    const travelers = urlParams.get('travelers');

    if (destination) {
        console.log('Search parameters:', { destination, date, duration, travelers });
        // In a real application, you would filter results based on these parameters
    }
}

// ================================
// Image Lazy Loading (for performance)
// ================================

if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ================================
// Utility Functions
// ================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ================================
// Initialize
// ================================

console.log('Wanderlust Travel Website Loaded Successfully!');