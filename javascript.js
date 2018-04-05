let pris;
let alder = 1;
let vaerdi = 500;

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

document.querySelector("#myRange").addEventListener("input", visVaerdi);
document.querySelector("#cykelAlder").addEventListener("input", visAlder);


function visAlder() {

    //alder
    alder = this.value;
    document.querySelector(".alder").textContent = alder;
    visTal();
}

function visVaerdi() {
    vaerdi = this.value;

    document.querySelector(".value").textContent = vaerdi;

    visTal();

}

function visTal() {

    pris = Math.round(vaerdi / (12.5 * alder));
    //    console.log(this.value);



    document.querySelector(".pris").textContent = pris;
    document.querySelector(".talCola").textContent = Math.round((pris / 15) * 100) / 100;
    document.querySelector(".talGum").textContent = Math.round((pris / 0.5) * 100) / 100;
    document.querySelector(".talIs").textContent = Math.round((pris / 8) * 100) / 100;
    document.querySelector(".talPolse").textContent = Math.round((pris / 20) * 100) / 100;
}

///////// SLIDER/INFOGRAFIK SLUT ////////
