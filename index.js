let playerScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll("button");
const computerSelText = document.querySelector(".computer-sel");
const playerSelText = document.querySelector(".player-sel");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const roundOutcome = document.querySelector(".round-outcome");
const gameOutcomeText = document.querySelector(".game-outcome");

function playGame(){
    btns.forEach(function(item){
        item.addEventListener("click", function getChoices(){
            const userSelection = item.className
            const computerSelection = getComputerChoice();
                        
            computerSelText.textContent = `Computer: ${computerSelection[0].toUpperCase() + computerSelection.substring(1)}`;
            playerSelText.textContent = `Player: ${userSelection[0].toUpperCase() + userSelection.substring(1)}`;

            trackScore(compareChoices(userSelection,computerSelection));
            if (playerScore === 5 || computerScore === 5){
                compareScore();
                const restartBtn = document.createElement("button");
                restartBtn.textContent = "Restart";
                gameOutcomeText.appendChild(restartBtn);
                restartBtn.addEventListener("click", restartGame);
                btns.forEach(function(btn){
                    btn.classList.add("hidden")
                })
            }
        })
    })
}



function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

function compareChoices(userChoice, computerChoice){
    if (userChoice === "rock") {
        if (computerChoice === "scissors"){
            roundOutcome.textContent = "You win!"
            return "You win!";
        } else if (computerChoice === "paper") {
            roundOutcome.textContent = "You lose!"
            return "You lose!";
        } else {
            roundOutcome.textContent = "You tie."
            return "You tie.";
        }
    } else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            roundOutcome.textContent = "You win!"
            return "You win!";
        } else if (computerChoice === "scissors"){
            roundOutcome.textContent = "You lose!"
            return "You lose!";
        } else {
            roundOutcome.textContent = "You tie."
            return "You tie.";
        }
    } else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
            roundOutcome.textContent = "You win!"
            return "You win!";
        } else if (computerChoice === "rock") {
            roundOutcome.textContent = "You lose!"
            return "You lose!";
        } else {
            roundOutcome.textContent = "You tie."
            return "You tie.";
        }
    }
}
function trackScore(roundOutcome) {
    if (roundOutcome === "You win!"){
        playerScore++
    } else if (roundOutcome === "You lose!") {
        computerScore++
    }
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}
function compareScore(){
    if (playerScore > computerScore){
        roundOutcome.textContent = "You win the game!"
    } else if (computerScore > playerScore) {
        roundOutcome.textContent = "You lose the game!"
    } 
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    playerSelText.textContent = ""
    computerSelText.textContent = ""
    roundOutcome.textContent = ""
    gameOutcomeText.textContent = "";
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    btns.forEach(function(btn){
        btn.classList.remove("hidden")
    })
}
playGame();
