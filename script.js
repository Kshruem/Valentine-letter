// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");

const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const letterWindow = document.querySelector(".letter-window");

/* ------------------------
   Open Envelope
------------------------ */

envelope.addEventListener("click", () => {

    envelope.style.display = "none";
    letter.style.display = "flex";

    document.body.style.overflow = "hidden";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});

/* ------------------------
   Move NO Button
------------------------ */

function moveNoButton() {

    const w = window.innerWidth;
    const h = window.innerHeight;

    const max = w < 500 ? 120 : 200;

    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * max;

    let x = Math.cos(angle) * dist;
    let y = Math.sin(angle) * dist;

    const rect = noBtn.getBoundingClientRect();

    if (rect.left + x < 10) x = 20;
    if (rect.right + x > w - 10) x = -20;

    if (rect.top + y < 10) y = 20;
    if (rect.bottom + y > h - 10) y = -20;

    noBtn.style.transition = "transform 0.25s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

/* ------------------------
   YES Click
------------------------ */

yesBtn.addEventListener("click", () => {

    title.textContent = "Yippeeee! 💖";

    catImg.src = "cat_dance.gif";

    letterWindow.classList.add("final");

    buttons.style.display = "none";

    finalText.classList.add("show");

});
