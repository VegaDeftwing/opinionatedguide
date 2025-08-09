// Stolen from https://codepen.io/msriki12/pen/yyBNMEr

/* The higher, the less card rotation */
let rotationFactor = 20;
/* Indicates whether the card goes back or forward when mouse is hovering */
let invertRotation = false;

const PARAMS = {
  disableBlur: false,
  disableGlare: false,
  rotationFactor,
  invertRotation: false
};

// --------- MOUSE TRACKING AND CARD EFFECTS LOGIC ----------------

// Distance from which the gradient starts being noticeable on the card
const gradientRange = 300;
// Reduce the actual distance to avoid the gradient to disappear abruptly
document.documentElement.style.setProperty(
  "--gradient-range",
  gradientRange - 50
);

/**
 * There are 2 effects happening on the card at the same time:
 *
 * 1. Card glare and shine effects are activated at certain moment when the cursor aproximates to the card
 * 2. Card 3D scale and rotation occurs when the mouse hovers over the card
 *
 * First effect needs to be handled on a parent component, to track the mouse outside the cards, while rotation effect can be handled as part of an event listener on the actual cards.
 */
const cards = document.querySelectorAll(".card");

document.body.addEventListener("mousemove", (e) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Detect if mouse is near the card
    const distanceX = Math.max(
      0,
      Math.abs(e.clientX - rect.left - centerX) - centerX
    );
    const distanceY = Math.max(
      0,
      Math.abs(e.clientY - rect.top - centerY) - centerY
    );
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < gradientRange) {
      // Proximity percentage (%)
      const proximity = 0.5 - distance / gradientRange;

      // Activate gradient and opacity for this card
      card.style.setProperty("--gradient-opacity", proximity.toFixed(2));
      card.style.setProperty("--mouse-x", `${(mouseX / rect.width) * 100}%`);
      card.style.setProperty("--mouse-y", `${(mouseY / rect.height) * 100}%`);
    } else {
      // If distance is bigger than the gradientRange, turn off the gradient
      card.style.setProperty("--gradient-opacity", "0");
    }
  });
});

// Logic for card rotation
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const cardCenterX = rect.width / 2;
    const cardCenterY = rect.height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let rotateX = (y - cardCenterY) / rotationFactor;
    let rotateY = (cardCenterX - x) / rotationFactor;

    if (invertRotation === true) {
      rotateX = (cardCenterY - y) / rotationFactor;
      rotateY = (x - cardCenterX) / rotationFactor;
    }

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.2, 1.2, 1.2)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
});