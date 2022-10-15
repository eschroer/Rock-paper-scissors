let playerScore = 0;
let computerScore = 0;

function playGame(){
    const btns = document.querySelectorAll("button");
    btns.forEach(function(item){
        item.addEventListener("click", function(){
            const userSelection = item.className
            const computerSelection = getComputerChoice();
            const computerSelText = document.querySelector(".computer-sel");
            const playerSelText = document.querySelector(".player-sel")
            
            computerSelText.textContent = `Computer: ${computerSelection}`
            playerSelText.textContent = `Player: ${userSelection}`

            trackScore(compareChoices(userSelection,computerSelection));
            if (playerScore === 5 || computerScore === 5){
                compareScore();
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
    const roundOutcome = document.querySelector(".round-outcome");

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
    const playerScoreText = document.querySelector(".player-score");
    const computerScoreText = document.querySelector(".computer-score");

    if (roundOutcome === "You win!"){
        playerScore++
    } else if (roundOutcome === "You lose!") {
        computerScore++
    }
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    console.log(`The score is: \nPlayer: ${playerScore}\nComputer: ${computerScore}`)
}
function compareScore(){
    const gameOutcomeText = document.querySelector(".game-outcome");
    if (playerScore > computerScore){
        console.log("You win the game!")
        gameOutcomeText.textContent = "You win the game!"
    } else if (computerScore > playerScore) {
        gameOutcomeText.textContent = "You lose the game!"
        console.log("You lose the game!")
    } 
}
playGame();
