///////// BURGERMENU START ////////

function toggleMenu() {

    document.querySelector(".burger").classList.toggle("change");
    document.querySelector("nav").classList.toggle("show");
}
document.querySelector(".burger").addEventListener("click", toggleMenu);
document.querySelector("nav").addEventListener("click", toggleMenu);

///////// BURGERMENU SLUT ////////
