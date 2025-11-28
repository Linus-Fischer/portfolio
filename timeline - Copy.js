const entries = document.querySelectorAll(".timeline-entry");
const plane = document.querySelector(".timeline-plane");

function updateTimeline() {
  const windowHeight = window.innerHeight;

  entries.forEach((entry, index) => {
    const rect = entry.getBoundingClientRect();
    if (rect.top < windowHeight * 0.8) {
      entry.classList.add("in-view");
      plane.style.top = `${entry.offsetTop + entry.offsetHeight / 2}px`;
    }
  });
}

window.addEventListener("scroll", updateTimeline);
window.addEventListener("load", updateTimeline);
