// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const letterWindow = document.querySelector(".letter-window");

finalText.style.display = "none";

/* --------------------------
   Open Envelope
-------------------------- */

envelope.addEventListener("click", () => {

    document.body.style.overflow = "hidden";
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});

/* --------------------------
   Move NO Button (Mobile + PC)
-------------------------- */

function moveNoButton() {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Smaller movement for mobile
    const maxDistance = screenWidth < 500 ? 120 : 200;

    const distance = Math.random() * maxDistance;
    const angle = Math.random() * Math.PI * 2;

    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;

    // Prevent going too far off screen
    const rect = noBtn.getBoundingClientRect();

    if (rect.left + moveX < 10) moveX = 20;
    if (rect.right + moveX > screenWidth - 10) moveX = -20;

    if (rect.top + moveY < 10) moveY = 20;
    if (rect.bottom + moveY > screenHeight - 10) moveY = -20;

    noBtn.style.transition = "transform 0.25s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// PC hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Stop accidental click
    moveNoButton();
});

/* --------------------------
   YES Button Click
-------------------------- */

yesBtn.addEventListener("click", () => {

    title.textContent = "Yippeeee! 💖";

    catImg.src = "cat_dance.gif";

    letterWindow.classList.add("final");

    buttons.style.display = "none";

    finalText.classList.add("show");

});


