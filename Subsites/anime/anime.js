

const animeb = [
    "conan",  "https://hianime.to/watch/case-closed-323",
    "demon slayer", "https://hianime.to/watch/demon-slayer-kimetsu-no-yaiba-47",
    "One Pace",     "https://onepace.net/en",
    "spyfamily3",   "https://hianime.to/watch/spy-x-family-season-3-19931",
    "MHA",      "https://hianime.to/watch/my-hero-academia-season-6-18154",
    "deathnote", "https://hianime.to/watch/death-note-60",

    
    // Fineshed / Revisit
    "buffer",     "file:///C:/Users/block/Documents/Files/code/HTML%20plus/WIP%20Private/bookmark/index.html",
    "Dragonball Daima",     "https://hianime.to/watch/dragon-ball-daima-19328",


]; 


let animeaLen = animeb.length;

let animeadisplay = "<div>";
for (let i = 1; i < animeaLen/2+1; i++) {
    animeadisplay += "<a href=\"" + animeb[2*i-1] + "\">" +   "<img src=\"anime/" + animeb[2*i-2] + ".png\"></a>"
}

animeadisplay += "</div>";

document.getElementById("animeb").innerHTML = animeadisplay;


const originalb = [
    "hianime",  "https://hianime.to/",


]; 


let originalaLen = originalb.length;

let originaladisplay = "<div>";
for (let i = 1; i < originalaLen/2+1; i++) {
    originaladisplay += "<a href=\"" + originalb[2*i-1] + "\">" +   "<img class=\"og\" src=\"anime/" + originalb[2*i-2] + ".png\"></a>"
}

originaladisplay += "</div>";

document.getElementById("originalb").innerHTML = originaladisplay;



