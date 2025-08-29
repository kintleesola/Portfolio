/* ---------- Init AOS ---------- */
AOS.init({ once: true, duration: 700 });

/* ---------- Particles background ---------- */
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#0b73e6" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.12 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#0b73e6", "opacity": 0.06, "width": 1 },
    "move": { "enable": true, "speed": 1.5 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" } }
  },
  "retina_detect": true
});

/* ---------- Smooth scrolling + nav active ---------- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
    document.getElementById('main-nav').classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 80;
  document.querySelectorAll('.nav-link').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle && navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));

/* ---------- Typing effect (simple) ---------- */
const roles = ["IT Grad", "Web Creator", "Content Writer", "Problem Solver"];
let rIndex = 0;
const typedEl = document.querySelector('.typed-roles');
function typeRoles() {
  const text = roles[rIndex % roles.length];
  let i = 0;
  typedEl.textContent = '';
  const t = setInterval(() => {
    typedEl.textContent += text[i++];
    if (i === text.length) {
      clearInterval(t);
      setTimeout(() => { rIndex++; typeRoles(); }, 1200);
    }
  }, 60);
}
typeRoles();

/* ---------- Stats / counters in hero ---------- */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target || +el.textContent || 0;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      cur += step;
      el.textContent = cur;
      if (cur >= target) { el.textContent = target; clearInterval(timer); }
    }, 18);
  });
}

/* ---------- Achievement counters (when in view) ---------- */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.big-num, .stat-num').forEach(el => {
        const goal = +el.getAttribute('data-target') || +el.textContent || 0;
        let count = 0; const inc = Math.max(1, Math.floor(goal / 60));
        const id = setInterval(() => {
          count += inc;
          el.textContent = count;
          if (count >= goal) { el.textContent = goal; clearInterval(id); }
        }, 18);
      });
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.45 });

document.querySelectorAll('.achieve-card, .hero-stats').forEach(el => counterObserver.observe(el));

/* ---------- Circular skill progress animation ---------- */
function animateCircles() {
  document.querySelectorAll('.circle').forEach(c => {
    const svg = c.querySelector('.progress');
    const circleLen = 100;
    const perc = +c.getAttribute('data-perc') || 0;
    // stroke-dasharray uses percentage of 100 where full circumference = 100
    const dash = (perc / 100) * circleLen;
    let cur = 0;
    const step = Math.max(1, Math.floor(perc / 45));
    const interval = setInterval(() => {
      cur += step;
      const prog = Math.min(cur, perc);
      const dashVal = (prog / 100) * circleLen;
      svg.setAttribute('stroke-dasharray', `${dashVal},100`);
      c.querySelector('.perc').textContent = prog;
      if (prog >= perc) clearInterval(interval);
    }, 10);
  });
}

/* Intersection trigger for skills circles */
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCircles();
      skillsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const skillsSection = document.getElementById('skills');
skillsSection && skillsObserver.observe(skillsSection);

/* ---------- Testimonials slider (simple) ---------- */
const slider = document.getElementById('testimonialSlider');
const tPrev = document.getElementById('tPrev');
const tNext = document.getElementById('tNext');
let tIndex = 0;
function showTestimonial(i) {
  const cards = slider.querySelectorAll('.test-card');
  const w = cards[0].offsetWidth + 14;
  slider.style.transform = `translateX(${-(i * w)}px)`;
}
tNext && tNext.addEventListener('click', () => {
  const cards = slider.querySelectorAll('.test-card');
  tIndex = (tIndex + 1) % cards.length;
  showTestimonial(tIndex);
});
tPrev && tPrev.addEventListener('click', () => {
  const cards = slider.querySelectorAll('.test-card');
  tIndex = (tIndex - 1 + cards.length) % cards.length;
  showTestimonial(tIndex);
});
// autoplay
setInterval(() => { tNext && tNext.click(); }, 5000);

/* ---------- Tilt init ---------- */
VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 8, speed: 400, glare: true, "max-glare": 0.08 });

/* ---------- Contact form (local simulation) ---------- */
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = 'Sending...';
  setTimeout(() => {
    formMsg.textContent = 'Message sent! Thank you — I will reply soon.';
    form.reset();
  }, 900);
});

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});

/* ---------- Simple helpers for initial animations ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // set hero stats targets
  document.querySelectorAll('.stat-num').forEach((e, i) => {
    const t = [12,5,3][i] || 0;
    e.dataset.target = t;
  });
  // animate counters shortly after load
  setTimeout(animateCounters, 900);
});
