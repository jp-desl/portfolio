import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll('.c-icon__container');
  const card = document.querySelector(".c-card");
  const frontFace = document.querySelector(".c-card__face--front");
  const backFace = document.querySelector(".c-card__face--back");
  const factKey = backFace.querySelector(".c-card__fact-key");
  const factValue = backFace.querySelector(".c-card__fact-value");

  let remainingFacts = [];
  let isAnimating = false;
  let hasFlipped = false;

  const funFacts = [
    { 
      key: "Touche ludique", 
      value: "Le jeu occupe constamment une partie de ma tête. Analogue ou numérique, un problème du quotidien se transforme rapidement en puzzle à résoudre. L’expérience prime avant tout." },
    { key: "Parcours atypique", 
      value: "Avant de me dédier au développement web, j’ai étudié le cinéma et la littérature, pour ensuite travailler en production de jeux vidéo, derrière un bar puis en édition de jeux de société. Il y a une suite logique, promis -" },
    { key: "Bien entouré", 
      value: "Père de deux jeunes enfants, ils me poussent quotidiennement à donner le meilleur de moi-même… et à redécouvrir les limites métaphysiques de la patience." },
    { key: "Amour des faits divers", 
      value: "Curieux de nature, je tombe rapidement dans un rabbit hole après une découverte ou une actualité. C’est aussi vrai pour un band ou un auteur - bref, tu me veux dans ton équipe de quiz" },
    // { key: "En vrac", value: "have cube-shaped poop" }
  ];

  // Fisher Yates Shuffle!
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getNextFact() {
    if (remainingFacts.length === 0) remainingFacts = shuffle(funFacts);
    return remainingFacts.pop();
  }

  function displayFunFact(fact) {
    factKey.textContent = fact.key;
    factValue.textContent = fact.value;
  }

  // Dice Scroll Trigger
  icons.forEach(icon => {
    const direction = Math.random() > 0.5 ? 1 : -1;
    const rotationAmount = 360 + Math.random() * 90;
    gsap.to(icon, {
      rotate: rotationAmount * direction,
      ease: "none",
      scrollTrigger: {
        trigger: icon,
        start: "top bottom",
        end: "top 15%",
        scrub: true
      }
    });
  });

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      // Dice icon shake
      gsap.fromTo(icon.querySelector("svg"),
        { rotation: -5, x: -3 },
        { rotation: 5, x: 3, duration: 0.05, yoyo: true, repeat: 4, ease: "power1.inOut" }
      );

      if (isAnimating) return;
      isAnimating = true;

      const newFact = getNextFact();
      displayFunFact(newFact);

      if (!hasFlipped) {
        // First click: flip to show back face
        gsap.to(card, { 
          rotationY: 180, 
          duration: 0.9, 
          ease: "power3.inOut", 
          onComplete: () => {
            isAnimating = false;
            hasFlipped = true;
        }});
      } 
      else {
        gsap.to(card, {
          rotationY: "+=25",
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
          onComplete: () => { isAnimating = false; }
        });
      }


    });
  });
});