AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    mobileMenu.classList.toggle('show');
    
    if (mobileMenu.classList.contains('show')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
}

function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}!\n\nYour message has been received. I will reply soon.`);
    e.target.reset();
}

// View Project Function
function viewProject(id) {
    const projects = {
        1: "Mess Management System",
        2: "Agriculture App",
        3: "Basic E-commerce App",
        4: "BMI Calculator",
        5: "Demo Chatbot",
        6: "Tasbih App"
    };
    
    alert(`🔍 You clicked on: ${projects[id]}\n\nIn real portfolio, this button will open the live project or GitHub repository.`);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    });
});