const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = mobileMenu.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
});

// Close the mobile menu when any link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
  });
});

const roles = ["Full-Stack Developer", "Java Programmer","Web Enthusiast" ];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typedElement = document.getElementById("typed");

function typeEffect() {
  if (index >= roles.length) index = 0;
  currentText = roles[index];

  if (isDeleting) {
    typedElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typedElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length + 10) {
      isDeleting = true;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill-circle");

  skills.forEach(skill => {
    const circle = skill.querySelector(".progress-ring");
    const percent = +circle.dataset.percentage;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.setProperty('--offset', offset);

    // Counter
    const counter = skill.querySelector(".counter");
    let count = 0;
    const updateCount = () => {
      if (count <= percent) {
        counter.textContent = `${count}%`;
        count++;
        requestAnimationFrame(updateCount);
      }
    };

    // Hover to animate
    skill.addEventListener("mouseenter", () => {
      circle.style.strokeDashoffset = offset;
      count = 0;
      updateCount();
    });

    skill.addEventListener("mouseleave", () => {
      circle.style.strokeDashoffset = circumference;
      counter.textContent = `0%`;
    });
  });
});

