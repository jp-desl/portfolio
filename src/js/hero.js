import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl
    .set(".c-hero__title", { text: "" })

    // Quick typing of the first version
    .to(".c-hero__title", {
      duration: 0.9,      // slightly faster
      text: "JEAN-PHI",
      delimiter: "",
      ease: "power1.out"
    })

    // Pause
    .to({}, { duration: 0.4 })

    // Erase quickly with snappy ease
    .to(".c-hero__title", {
      duration: 0.5,
      text: "",
      ease: "power3.in"
    })

    // Tiny pause before final name
    .to({}, { duration: 0.2 })

    // Type final, confident version
    .to(".c-hero__title", {
      duration: 1.2,
      text: "J.P. DESLOGES",
      delimiter: "",
      ease: "power2.out"
    })

    // Subtitle fades in naturally
    .to(".c-hero__subtitle", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "+=0.2");


});