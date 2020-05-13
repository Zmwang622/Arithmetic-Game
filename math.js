function calculate(left, right, operation) {
    switch(operation) {
        case 1:
           return left + right; 
        case 2:
           return left - right; 
        case 3:
           return left * right; 
        case 4:
           return left / right; 
    }
}

function generateStmt() {
    const dict = {1:"+", 2:"-", 3:"*", 4:"/"};
        let opSelector = Math.floor(Math.random() * 4) + 1;
        let right;
        let left;

    if(opSelector < 3) {
        left = Math.floor(Math.random() * 100) + 2;
        right = Math.floor(Math.random() * left) + 1; 
    } else if (opSelector === 4){
        right = Math.floor(Math.random() * 13) + 2;
        left = right * (Math.floor(Math.random() * 13) + 2);
    } else {
        right = Math.floor(Math.random() * 13) + 2;
        left = (Math.floor(Math.random() * 13) + 2);
    }
        
    let correctVal = calculate(left,right,opSelector)
    let stmt = left + dict[opSelector] + right;

    var currentProblem = {"prob":stmt, "answer": correctVal};
    return currentProblem;
}

let score = 0;

function playGame() {
    document.getElementById("answer").style.display = "inline";
    document.getElementById("start").style.display = "none";
    let currentProblem = generateStmt();
    window.setInterval(() => {
        document.querySelector('.game').innerText = currentProblem.prob;
        let inputBox = document.getElementById('answer');
        if (inputBox !== null) {
            let answer = inputBox.value;
            
            if (answer == currentProblem.answer) {
                currentProblem = generateStmt();
                inputBox.value = '';
                score++;
            }
        }

        document.querySelector('.score').innerText = "Score: " + score;
    }, 100);
}

function gameLost() {
  alert("Game Over!");
}

function setupGame() {
    playGame();
    setTimeout(gameLost, 60000);
}