// Sticky nav reveal after scrolling down
const stickyNav = document.getElementById("stickyNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    stickyNav.style.top = "0";
  } else {
    stickyNav.style.top = "-80px";
  }
});

// Smooth reveal on scroll
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
