function showSection(id) {
  const sections = document.querySelectorAll('.content');
  const targetSection = document.getElementById(id);

  // First, remove active class from all sections
  sections.forEach((section) => {
    section.classList.remove('active');
  });

  // Add active class to target section after a short delay for smooth transition
  setTimeout(() => {
    targetSection.classList.add('active');

    // Animate cards with stagger
    animateCards(targetSection);

    // Animate skill bars if skills section is shown
    if (id === 'skills') {
      animateSkillBars();
    }
  }, 50);
}

// Animate cards with staggered effect
function animateCards(section) {
  const cards = section.querySelectorAll('.info-card, .task-card, .project-card, .other-card, .skill-category');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150); // stagger by 150ms
  });
}



// Animate skill bars
function animateSkillBars() {
  const skillFills = document.querySelectorAll('.skill-fill');
  skillFills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => {
      fill.style.width = width;
    }, 100);
  });
}

// Add scroll animations
function handleScroll() {
  const cards = document.querySelectorAll('.info-card, .task-card, .project-card, .other-card, .skill-category');
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  cards.forEach(card => {
    const cardTop = card.offsetTop;
    if (scrollY + windowHeight > cardTop + 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

// Open WhatsApp with the number
function openWhatsApp() {
  const phoneNumber = '+6285891882505';
  const url = `https://wa.me/${phoneNumber.replace('+', '')}`;
  window.open(url, '_blank');
}

// Open Instagram profile
function openInstagram() {
  const instagramUsername = 'rikisaputraanwar';
  const url = `https://instagram.com/${instagramUsername}`;
  window.open(url, '_blank');
}

// Modal functionality for image zoom
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');
const profileImg = document.getElementById('profileImg');

profileImg.onclick = function() {
  // Add zoom-in class for animation
  this.classList.add('zoom-in');
  // Add circular class to avatar for shape change
  const avatar = this.parentElement;
  avatar.classList.add('circular');
  setTimeout(() => {
    modal.style.display = 'flex';
    modalImg.src = this.src;
    this.classList.remove('zoom-in');
  }, 300);
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Add fade-in animation on page load
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  const cards = document.querySelectorAll('.info-card, .task-card, .project-card, .other-card, .skill-category');

  // Add initial classes for animation
  header.style.opacity = '0';
  header.style.transform = 'translateY(-20px)';
  nav.style.opacity = '0';
  nav.style.transform = 'translateY(-10px)';
  footer.style.opacity = '0';
  footer.style.transform = 'translateY(20px)';

  // Hide cards initially
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
  });

  // Animate in
  setTimeout(() => {
    header.style.transition = 'all 0.8s ease';
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  }, 100);

  setTimeout(() => {
    nav.style.transition = 'all 0.8s ease';
    nav.style.opacity = '1';
    nav.style.transform = 'translateY(0)';
  }, 300);

  setTimeout(() => {
    footer.style.transition = 'all 0.8s ease';
    footer.style.opacity = '1';
    footer.style.transform = 'translateY(0)';
  }, 500);

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Trigger initial scroll check
  handleScroll();
});
