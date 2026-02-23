import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll('.c-icon__container');

  // Scroll Trigger animation
  icons.forEach((icon, i) => {
    const direction = Math.random() > 0.5 ? 1 : -1;
    // Add a little random extra rotation
    const rotationAmount = 360 + Math.random() * 90;

    gsap.to(icon, {
      rotate: rotationAmount * direction,
      ease: "none",
      scrollTrigger: {
        trigger: icon,
        start: "top bottom",
        end: "top 35%",
        scrub: true
      }
    });
  });

  // Shake animation on click
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      gsap.fromTo(
        icon.querySelector("svg"),
        { rotation: -5, x: -3 },
        { rotation: 5, x: 3, duration: 0.05, yoyo: true, repeat: 4, ease: "power1.inOut" }
        );
      });
  });

  // TODO FLIP the side card and add the FAQ

});