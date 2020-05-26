let score = 0;
function startScreen(){
    document.getElementById("start").style.display = "inline";
    document.getElementById("pregameForm").style.display = "inline";
    document.getElementById("answer").style.display = "none";
    document.querySelector(".final-score").innerText= "";
    document.getElementById("answer").reset();
};

startScreen();