// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    const currentTheme = body.getAttribute('data-theme');
    
    icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Project Data
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with React and Node.js',
        image: 'https://picsum.photos/seed/1/600/400',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'Task Management App',
        description: 'A beautiful and intuitive task management application',
        image: 'https://picsum.photos/seed/2/600/400',
        tags: ['Vue.js', 'Firebase', 'Tailwind CSS']
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather monitoring with beautiful visualizations',
        image: 'https://picsum.photos/seed/3/600/400',
        tags: ['JavaScript', 'Weather API', 'Chart.js']
    }
];

// Populate Projects
const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});

// Skills Data
const skills = {
    frontend: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Vue.js', level: 75 }
    ],
    backend: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'MongoDB', level: 70 }
    ]
};

// Populate Skills
function populateSkills() {
    const categories = document.querySelectorAll('.skills-category');
    
    categories.forEach(category => {
        const skillBars = category.querySelector('.skill-bars');
        const categoryName = category.querySelector('h3').textContent.toLowerCase();
        
        skills[categoryName].forEach(skill => {
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            
            skillBar.innerHTML = `
                <div class="skill-info">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-fill" style="--fill-percentage: ${skill.level}%"></div>
                </div>
            `;
            
            skillBars.appendChild(skillBar);
        });
    });
}

populateSkills();

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Navbar Scroll Effect
const nav = document.querySelector('.nav-container');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});
