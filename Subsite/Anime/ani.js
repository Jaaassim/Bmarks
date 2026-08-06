websites = [
//  "WebsiteLogo",      "WebsiteURL",
    "conan.png",                 "watch/case-closed",             "",
    "demon slayer.png",                 "watch/demon-slayer-kimetsu-no-yaiba",             "",
    // "One Pace.png",                 "watch/spy-x-family-season-3-19931",             "",
    // "mha.png",                 "watch/my-hero-academia-season-6-18154",             "                                 season 6",
    "frieren.png",    "watch/frieren-beyond-journeys-end",   "",
    "mob.png",    "watch/mob-psycho-100",   "",
    
    "buffer.png",                 "",             "On going",
    "sakamoto.png",               "watch/sakamoto-days-part-2",               "",
    
    "buffer.png",                 "",             "Seen",
    "Yu Yu Hakusho.png",     "watch/yu-yu-hakusho-ghost-files",         "",
    "spyfamily3.png",                 "watch/spy-x-family-season-3",             "",
    "Dragonball Daima.png",         "watch/dragon-ball-daima",                 "",             
    
    "buffer.png",   "",     "",
    "hianime.png",          "",              "",
    // "",                 "",             "",
    // "",                 "",             "",
];

serves = "https://www1.anikai.cc/"

// console.log(websites.length/2 + 1)
let displayWebsites = "<div id=\"URLs\">";
for (let i = 1; i < websites.length/3 + 1; i++) {
    displayWebsites += "<a class=\"urls\" href=\"" + serves + websites[3*i-2] + "\"><div onclick=\"Done()\" class=\"animes\"><img class=\"logos\" src=\"Logo/" + websites[3*i-3] + "\"><p class=\"Placeholdertext\">" + websites[3*i-1] + "</p></div></a>"
    // console.log(2*i-1)
    // console.log(2*i-2)
}
displayWebsites += "</div>";
document.getElementById("ContainerURLs").innerHTML = displayWebsites;



function Done() {
    var audio = new Audio("sfx/click1.mp3");
    audio.play();
}

document.addEventListener("mouseover", e => {
    if (e.target.classList.contains("Placeholdertext")) {
        var audio = new Audio("sfx/hover1.mp3");
        audio.play();
    }
});
