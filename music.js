const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pad");
const visuals = document.querySelector(".visuals");
const colors = [
    "#00ffff",
    "#708090",
    "#deb887",
    "#ff6347",
    "#6495ed",
    "#9acd32"
]

pads.forEach((value, index) => {
    value.addEventListener('click', () => {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
    });
});

const createBubble = (index) => {
    const bubble = document.createElement("div");
    visuals.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 2s ease";
    bubble.style.setProperty("--location", ((16.66 * (index + 1)) - 8.33) + "%" );
    bubble.addEventListener('animationend', () => {
        visuals.removeChild(bubble);
    });
}
