import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {

  const tl = gsap.timeline({
    delay: 0.9,
    defaults: { ease: "power2.out" } 
  });

  tl
    .set(".c-hero__title", { text: "" })

    // Quick typing of the first version
    .to(".c-hero__title", {
      duration: 0.9,
      text: {
        value: "JEAN-PHI",
        delimiter: ""
      }, 
      ease: "power1.out"
    })

    // Pause
    .to({}, { duration: 0.4 })

    // Erase quickly
    .to(".c-hero__title", {
      duration: 0.5,
      text: "",
      ease: "power3.in"
    })

    // Quick pause
    .to({}, { duration: 0.2 })

    // Final
    .to(".c-hero__title", {
      duration: 1.2,
      text: {
        value: 'J<span class="c-hero__title-accent">.</span>P<span class="c-hero__title-accent ">.</span> DESLOGES',
        delimiter: "",
        type: "html"
      },
      ease: "power2.out"
    })

    // Subtitle
    .to(".c-hero__subtitle", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "+=0.2");


});