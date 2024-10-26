



var loser = false;

window.onload = function() {
    document.getElementById("start").onclick = startClick;
    document.getElementById("end").onmouseover = overEnd;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}

function startClick() {
    loser = false;
    var statusElement = document.getElementById("status");
    statusElement.textContent = "Move your mouse over the 'S' to begin."; // Reset message
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
}

function overEnd() {
    var statusElement = document.getElementById("status");
    if (loser) {
        statusElement.textContent = "Sorry, you lost. ";
    } else {
        statusElement.textContent = "You win! .";
    }
}

