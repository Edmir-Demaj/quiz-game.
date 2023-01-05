// Wait for the DOM finishing load before starting the game.
document.addEventListener("DOMContentLoaded", function () {
    // hidde info box on DOM Load
    document.getElementById("rules").style.display = "none";

    let info = document.getElementById("info");
    info.addEventListener("click", showInfoBox);

    let close = document.getElementById("closeInfo");
    close.addEventListener("click", closeInfoBox);



});


/** showes the info & rules box onclick "How to play game?" */
function showInfoBox() {
    document.getElementById("rules").style.display = "block";
}

function closeInfoBox() {
    document.getElementById("rules").style.display = "none";
}