const sections = document.querySelectorAll(".section");
const indicators = document.querySelectorAll(".indicator a");

function setActiveIndicator(currentId) {
  indicators.forEach((link) => {
    const isActive = link.dataset.target === currentId;
    link.classList.toggle("active", isActive);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.find((e) => e.isIntersecting);
    if (visible) {
      setActiveIndicator(visible.target.id);
    }
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));
