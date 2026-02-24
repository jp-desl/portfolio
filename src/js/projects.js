import gsap from "gsap";
document.addEventListener("DOMContentLoaded", function() {
const itemsList = document.querySelectorAll('ul.c-projects__list > li');
const descriptionContainer = document.querySelector('.c-projects__description');

let isAnimating = false;

function updateProject(item) {
  if (isAnimating) return;
  isAnimating = true;

  const itemDetails = item.querySelector('.c-project__details');

  const clonedDetails = itemDetails.cloneNode(true);

  const currentContent = descriptionContainer.firstElementChild;

  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    }
  });

  if (currentContent) {
    // Slide out right
    tl.to(currentContent, {
      x: 100,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        descriptionContainer.replaceChildren(clonedDetails);
      }
    });
  } else {
    descriptionContainer.appendChild(clonedDetails);
  }

  // Prepare new content off-screen (left)
  gsap.set(clonedDetails, { x: -100, opacity: 0 });

  // New content
  tl.to(clonedDetails, {
    x: 0,
    opacity: 1,
    duration: 0.45,
    ease: "power3.out"
  });
}

itemsList.forEach(item => {
  item.addEventListener("click", function () {

    if (this.classList.contains('--active') || isAnimating) return;

    itemsList.forEach(i => i.classList.remove('--active'));
    this.classList.add('--active');

    updateProject(this);
  });
});

// Activate first item on load
if (itemsList.length > 0) {
  itemsList[0].classList.add('--active');
  updateProject(itemsList[0]);
}

});