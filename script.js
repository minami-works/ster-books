const spMenuBtn = document.getElementById("spMenuBtn");
const globalNav = document.getElementById("globalNav");
const navOverlay = document.getElementById("navOverlay");

spMenuBtn.addEventListener("click", () => {
  const isOpen = globalNav.classList.toggle("is-open");
  spMenuBtn.setAttribute("aria-expanded", isOpen);
  spMenuBtn.classList.toggle("is-open", isOpen);
  navOverlay.classList.toggle("is-open", isOpen);
});

const fadeTargets = document.querySelectorAll(".service__card");

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      fadeObserver.unobserve(entry.target); // 一度表示したら監視終了
    }
  });
});

fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});

const faqButtons = document.querySelectorAll(".faq__question-btn");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const target = document.getElementById(targetId);
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", !isOpen);
    target.classList.toggle("is-open");
  });
});
