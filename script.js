// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      sec.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Sticky nav slide down
const stickyNav = document.getElementById("stickyNav");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > 100 && currentScroll > lastScroll) {
    stickyNav.style.top = "0";
  } else if (currentScroll < lastScroll) {
    stickyNav.style.top = "0";
  }
  lastScroll = currentScroll;
});
