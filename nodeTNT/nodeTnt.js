var theTimer = 120000;

function tntDropLoop() {
    setTimeout(function () {
        console.log(("Creeper", theTimer));
        if (theTimer > 5000) {
            theTimer = theTimer * .9;
            if (theTimer < 5000) {
                theTimer = 120000;
            }
        }
        tntSpawn();

        tntDropLoop();
    }, theTimer);
}

function runStartApplication() {
    var elllllss = document.getElementsByClassName("grid-noGutter");
    if (elllllss.length > 2) {
        clearInterval(frameInterval);
        var ul = document.getElementById("console_form");
        var li = document.createElement("input");
        li.type = "submit";
        li.id = "LOTSSSS";
        ul.appendChild(li);
        tntDropLoop();
    }
}

function tntSpawn() {
    var commandLine = document.getElementById("stdin");
    var ul = document.getElementById("console_form");
    var li = document.getElementById("LOTSSSS");
    commandLine.value = "execute at @a run summon minecraft:" + "creeper" + " ~ ~ ~";
    var ev1 = new Event("change");
    var ev2 = new Event("click");
    commandLine.focus();
    commandLine.dispatchEvent(ev1);
    commandLine.focus();
    li.dispatchEvent(ev2);
    li.click();


}

function main() {
    if (window.location.href.includes("/instance/console")) {
        console.log("somehting is happening and on right page");
        frameInterval = setInterval(runStartApplication, 5000);
    }


    else {
        console.log("This is not the page you are lookign for")
    }
}

main();