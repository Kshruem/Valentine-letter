// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open letter on envelope tap/click
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Get random move distance (responsive)
function getMoveDistance() {
  const vw = window.innerWidth;
  if (vw < 400) return 100; // small phones
  if (vw < 700) return 150; // larger phones
  return 200;               // desktop/tablet
}

// Helper: reset animation to allow re-triggering
function resetAnimation(element) {
  element.style.animation = "none";
  element.offsetHeight; // trigger reflow
  element.style.animation = null;
}

// Move NO button with bounce effect + vibration
function moveNoBtn() {
  const distance = getMoveDistance();
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  // Vibrate device 50ms
  if (navigator.vibrate) navigator.vibrate(50);

  // Move with CSS transform & add bounce class
  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

  resetAnimation(noBtn);
  noBtn.classList.add("bounce");
}

// NO button events
noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevent accidental click
  moveNoBtn();
}, { passive: false });

// YES button grow animation + vibration
yesBtn.addEventListener("click", () => {
  // Vibrate device 100ms
  if (navigator.vibrate) navigator.vibrate(100);

  // Animate YES button grow
  yesBtn.style.transition = "transform 0.4s ease";
  yesBtn.style.transformOrigin = "center center";
  yesBtn.style.transform = "scale(1.5)";

  // After animation ends, show final screen
  setTimeout(() => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";

    // Reset YES button scale in case user returns
    yesBtn.style.transform = "";
  }, 400);
});
