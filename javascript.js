///////// BURGERMENU START ////////

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

///////// BURGERMENU SLUT ////////


///////// SLIDER/INFOGRAFIK START ////////

document.querySelector("#myRange").addEventListener("input", visTal);

function visTal() {

    console.log(this.value);

    document.querySelector(".value").textContent = this.value;
    document.querySelector(".pris").textContent = Math.round(this.value / 200);

}

///////// SLIDER/INFOGRAFIK START ////////
