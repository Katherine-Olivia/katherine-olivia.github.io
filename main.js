// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation links - FIXED VERSION
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Skip preventDefault for resume button
    if (this.classList.contains('resume-btn')) {
      return; // Let the resume button work normally
    }
    
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Handle resume download specifically
document.addEventListener('DOMContentLoaded', function() {
  const resumeBtn = document.querySelector('.navbar .resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      // Force download
      const link = document.createElement('a');
      link.href = 'resume.pdf';
      link.download = 'Katherine_Olivia_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});

// Typing effect
const aboutText = `I'm Katherine Olivia, a passionate AI & Data Science student at Shiv Nadar University. I specialize in Machine learning, Data Science ,Cloud infrastructure and full-stack development. Currently working on cutting-edge projects involving Auto ML, Fraud detection systems,cloud traffic analysis and real-time data processing. I love solving complex problems with innovative solutions and have hands-on experience with major tech companies like Zoho and research institutions like IIT Hyderabad.`;

const target = document.querySelector(".typewriter-text");
let index = 0;

function typeWriter() {
  if (index < aboutText.length) {
    target.textContent += aboutText.charAt(index);
    index++;
    setTimeout(typeWriter, 30);
  }
}

// Start typing effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 1000);
});

// Animate timeline items on scroll
function animateOnScroll() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load