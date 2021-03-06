function displaySettings() {
    document.querySelector(".settings").classList.toggle("hidden");   
    if (document.querySelector(".settings").classList.contains("pos")) {
        document.querySelector(".settings").classList.toggle("pos");
    }
    document.querySelector(".settings").animate(settingsMove, animationDuration);
    setTimeout(() => { document.querySelector(".settings").classList.toggle("pos"); }, 410);
}

function displayMenu() {
    document.querySelector(".menu").classList.toggle("hidden");   
    if (document.querySelector(".menu").classList.contains("pos")) {
        document.querySelector(".menu").classList.toggle("pos");
    }
    document.querySelector(".menu").animate(settingsMove, animationDuration);
    setTimeout(() => { document.querySelector(".menu").classList.toggle("pos"); }, 410);
}

function displayProfile() {
    document.querySelector(".profile").classList.toggle("hidden");   
    if (document.querySelector(".profile").classList.contains("pos")) {
        document.querySelector(".profile").classList.toggle("pos");
    }
    document.querySelector(".profile").animate(settingsMove, animationDuration);
    setTimeout(() => { document.querySelector(".profile").classList.toggle("pos"); }, 410);
}

function displayCom() {
    document.querySelector(".comPage").classList.remove("hidden");
    document.querySelector(".merchPage").classList.add("hidden");
    document.querySelector(".itemsPage").classList.add("hidden");
    document.querySelector(".c").classList.add("selected");
    document.querySelector(".m").classList.remove("selected");
    document.querySelector(".i").classList.remove("selected");
}

function displayMerch() {
    document.querySelector(".comPage").classList.add("hidden");
    document.querySelector(".merchPage").classList.remove("hidden");
    document.querySelector(".itemsPage").classList.add("hidden");
    document.querySelector(".c").classList.remove("selected");
    document.querySelector(".m").classList.add("selected");
    document.querySelector(".i").classList.remove("selected");
}

function displayItems() {
    document.querySelector(".comPage").classList.add("hidden");
    document.querySelector(".merchPage").classList.add("hidden");
    document.querySelector(".itemsPage").classList.remove("hidden");
    document.querySelector(".c").classList.remove("selected");
    document.querySelector(".m").classList.remove("selected");
    document.querySelector(".i").classList.add("selected");
}

function request() {
    document.querySelector(".comConfirm").classList.toggle("hidden");
    document.querySelector(".com").classList.toggle("hidden");
}

const settingsMove = [
    { transform: "translate(0, 53px)" }
];

const animationDuration = {
    duration: 400,
}

function logIn() {
    if(document.querySelector(".username").value == "alex" && document.querySelector(".password").value == "alex") {
        alert("logged in yay")
    }
}