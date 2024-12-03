// Typing Animation
function initTypeWriter() {
    const text = "Welcome to My Portfolio";
    const speed = 100; // Typing speed in milliseconds
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            document.querySelector('.glitch-text').setAttribute('data-text', text.substring(0, i + 1));
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', initTypeWriter);

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const moveX = (e.pageX * -1/15);
    const moveY = (e.pageY * -1/15);
    
    document.querySelectorAll('.parallax').forEach(element => {
        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
});

// Smooth Section Transitions
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
});

// Project Card Tilt Effect
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', resetTilt);
});

function handleTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const angleX = (e.clientY - cardCenterY) * 0.1;
    const angleY = (cardCenterX - e.clientX) * 0.1;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

function resetTilt() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
}

// Scroll Progress Indicator
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// Smooth Anchor Scrolling with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navHeight = document.querySelector('.nav-container').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});

// Skills Animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    
    skillBars.forEach(bar => {
        const percentage = bar.style.getPropertyValue('--fill-percentage');
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = percentage;
        }, 200);
    });
}

// Trigger skills animation when skills section is in view
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

// Cursor Trail Effect
function createTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
}

document.addEventListener('mousemove', (e) => {
    const trail = createTrail();
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
