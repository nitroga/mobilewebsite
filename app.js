function displaySettings() {
    document.querySelector(".settings").classList.toggle("hidden");   
    if (document.querySelector(".settings").classList.contains("pos")) {
        document.querySelector(".settings").classList.toggle("pos");
    }
    document.querySelector(".settings").animate(settingsMove, animationDuration);
    setTimeout(() => { document.querySelector(".settings").classList.toggle("pos"); }, 1020);
}

const settingsMove = [
    { transform: "translate(0, 70px)" }
];

const animationDuration = {
    duration: 1000,
    iterations: 1,
}