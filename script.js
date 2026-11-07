const progressBars = document.querySelectorAll(".progress-fill[data-progress]");
const skillsSection = document.querySelector("#skills");

function animateProgressBars() {
  progressBars.forEach((bar) => {
    const rawProgress = Number(bar.dataset.progress);
    const progress = Math.min(100, Math.max(0, rawProgress));
    const track = bar.closest('[role="progressbar"]');

    bar.style.setProperty("--progress", `${progress}%`);
    bar.classList.add("is-visible");

    if (track) {
      track.setAttribute("aria-valuenow", String(progress));
    }
  });
}

if (skillsSection && "IntersectionObserver" in window) {
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillsObserver.observe(skillsSection);
} else if (skillsSection) {
  animateProgressBars();
}
