import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {

const icon = document.querySelector(".icon-d20");
let rotationTween = null;

const startRotation = () => {
  // spin continuously while hovered
  rotationTween = gsap.to(icon, {
    rotate: 360,
    duration: 5,
    ease: "linear",
    repeat: -1
  });
};

const stopRotation = () => {
  if (rotationTween) {
    rotationTween.kill(); // stop continuous spinning
    rotationTween = null;

    // smoothly rotate back to starting position
    gsap.to(icon, {
      rotate: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  }
};

// attach hover events
icon.addEventListener("mouseenter", startRotation);
icon.addEventListener("mouseleave", stopRotation);
});