const banners = [
    "",
    //"twitch.gif",
    //"to do.gif",
    //"Playnite.PNG"
];
const bannerlinks = [
    "",
    "https://www.twitch.tv/",
    "https://web.whatsapp.com/",
    "https://backloggd.com/"
];

let chance = Math.floor(Math.random() * banners.length) ;
console.log(chance);

let bannerdisplay = ""
if (chance == 0) {
    console.log("Normal");
}
else if (chance > 0)  {
    bannerdisplay += "<div><a href=\"" + bannerlinks[chance] + "\"><img class=\"Banner\" src=\"banner/" + banners[chance] + "\"></a></div>";
}
document.getElementById("Banner").innerHTML = bannerdisplay;

const Book = [
    // Media
    "hianime.png",     "Subsites/anime/index.html",
    "steamgriddb.png",  "https://www.steamgriddb.com/",
    //"disneyplus.png",   "https://www.apps.disneyplus.com/sa/home",
    "fmovies.png",     "https://fmovies-watch.com/",
    "sheetmusic.png",     "https://musescore.com/",
    "Stardima.png",     "Subsites/Cartoons(arabic)/index.html",
    "wcostream.png",     "https://m.wcostream.tv/cartoon-list",
    "egdybest.png",     "https://egybest.onl/",
    "fushaar.png",     "https://www.fushaar.link/",
    "shahid4u.png",     "https://shiid4u.net/",
    "movizland.png",     "https://movizland.lol/",
    "faselhd.png",      "https://web29.faselhd1watch.one/",
    "buffer.png",   "",

    // Minecraft
    "minecraft.png",     "https://www.minecraft.net/en-us/msaprofile",
    "minecraftwiki.png",     "https://minecraft.wiki/",
    "aternos.png", "https://aternos.org/server/",
    "chunkbase.png",    "https://www.chunkbase.com/apps/",
    "curseforge java.png",     "https://www.curseforge.com/minecraft/search?page=1&pageSize=20&sortBy=relevancy",
    "modrinth.png",     "https://modrinth.com/mods",
    "curseforge bedrock.png",     "https://www.curseforge.com/minecraft-bedrock/search?page=1&pageSize=20&sortBy=popularity",
    "mcpedl.png",     "https://mcpedl.com/",
    "modbay.png",   "https://modbay.org/page/2/",
    "bedrock explorer.png",     "https://www.bedrockexplorer.com/spotlight/free-content/all/maps-and-skins/latest",
    "gamebanana.png",     "https://gamebanana.com/",    
    "buffer.png",   "",

    // University
    "collegebanner1.png", "https://pybanner.kfu.edu.sa/?NoauthenMsg=NoAuth", 
    "blackboard.png", "https://reglms.kfu.edu.sa",
    "moodle.png", "https://pydm.kfu.edu.sa/login/", 
    "pearson.png", "https://mycourses.pearson.com/course-home#/tab/active",
    "canva.png", "https://www.canva.com/",
    "outlook.png", "https://outlook.office365.com/",
    "buffer.png",   "",
    
    // Misc
    "virustotal.png", "https://www.virustotal.com/gui/",
    "gbatemp.png",     "https://gbatemp.net/threads/cheat-codes-ams-and-sx-os-add-and-request.520293/",
    "Google.png",   "https://www.google.com/advanced_image_search",
    "drive.png",    "https://drive.google.com/drive/u/0/home",
    "Google.png",     "https://www.google.com/",
    "buffer.png",   "",

    // Youtube download / YT download
    "ytmp4.png",     "https://en1.savefrom.net/21-youtube-to-mp4-37Nq.html",
    "ytmp3.png",     "https://www.ytmp3.la/Po4t/",
    "y2mate.png",     "https://en.y2mate.is/u2ZUf/youtube-to-mp4.html",
    "buffer.png",   "",
        
    // Roms and Games
    "nsw2u.png",     "https://nsw2u.com/",
    "ziperto.png",     "https://www.ziperto.com/home/",
    "romsfun.png",     "https://romsfun.com/roms/",
    "romspure.png",     "https://romspure.cc/roms/",
    "r roms.png",       "https://r-roms.github.io/",
    "co-optimus.png",     "https://www.co-optimus.com/system/28/nintendo-switch.html",
    "buffer.png",   "",

    "template.png", "https://jaaassim.github.io/"



]; 


let MarkLen = Book.length;

let Markdisplay = "<div>";
for (let i = 1; i < MarkLen/2+1; i++) {
    Markdisplay += "<a href=\"" + Book[2*i-1] + "\">" +   "<img class=\"apps\" src=\"bmarks/" + Book[2*i-2] + "\"></a>"
}

Markdisplay += "</div>";

document.getElementById("Mark").innerHTML = Markdisplay;


