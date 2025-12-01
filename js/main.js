// Main JavaScript for Portfolio Website

// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        header && header.classList.add('scrolled');
        backToTop && backToTop.classList.add('active');
    } else {
        header && header.classList.remove('scrolled');
        backToTop && backToTop.classList.remove('active');
    }
});

// ⭐⭐⭐ BACK TO TOP CLICK HANDLER - ADD THIS ⭐⭐⭐
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Project Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(button => button.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Show More Projects
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenProjects = document.querySelectorAll('.project-card.hidden');
let showAllProjects = false;

if (showMoreBtn && hiddenProjects.length > 0) {
    showMoreBtn.addEventListener('click', () => {
        showAllProjects = !showAllProjects;
        
        hiddenProjects.forEach(project => {
            if (showAllProjects) {
                project.classList.remove('hidden');
                showMoreBtn.textContent = 'Show Less';
            } else {
                project.classList.add('hidden');
                showMoreBtn.textContent = 'Show More Projects';
            }
        });
    });
}

// Experience Details Toggle
const showMoreBtns = document.querySelectorAll('.show-more-btn');

showMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.previousElementSibling;
        const icon = btn.querySelector('i');
        
        if (details.classList.contains('expanded')) {
            details.classList.remove('expanded');
            btn.querySelector('span').textContent = 'Show Details';
            icon.className = 'fas fa-chevron-down';
        } else {
            details.classList.add('expanded');
            btn.querySelector('span').textContent = 'Show Less';
            icon.className = 'fas fa-chevron-up';
        }
    });
});

// Blog Scroll
const blogScroll = document.querySelector('.blog-scroll');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

if (blogScroll && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener('click', () => {
        blogScroll.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        blogScroll.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Intersection Observer for skill bars animation
const skillsSection = document.querySelector('.skills');
const observerOptions = {
    root: null,
    threshold: 0.3
};

if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(skillsSection);
}

// WhatsApp and Telegram chat functionality
const whatsappBtn = document.querySelector('.whatsapp-btn');
const telegramBtn = document.querySelector('.telegram-btn');

// Predefined message for WhatsApp
if (whatsappBtn) {
    const whatsappNumber = "8794960807";
    const whatsappMessage = "Hi Rajesh, I saw your portfolio and would like to connect with you.";
    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
    // whatsappBtn.href = `https://wa.me/919900990099?text=${encodedWhatsappMessage}`;
        // WhatsApp URL format: https://wa.me/917894960807?text=message
    whatsappBtn.href = `https://wa.me/91${whatsappNumber}?text=${encodedWhatsappMessage}`;
    
    console.log('✅ WhatsApp link updated:', whatsappBtn.href);
}

// Telegram username
if (telegramBtn) {
    const telegramUsername = "Rajesh1998C";
    telegramBtn.href = `https://t.me/${telegramUsername}`;

    console.log('✅ Telegram link updated:', telegramBtn.href);
}

// Console log for debugging
console.log('✅ Main JavaScript loaded successfully');
console.log('Back to Top button found:', !!document.querySelector('.back-to-top'));