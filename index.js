let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    return options[randomNum]
}

function compareChoices(userChoice, computerChoice){
    if (userChoice === "rock") {
        if (computerChoice === "scissors"){
            return "You win!";
        } else if (computerChoice === "paper") {
            return "You lose!";
        } else {
            return "You tie.";
        }
    } else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            return "You win!";
        } else if (computerChoice === "scissors"){
            return "You lose!";
        } else {
            return "You tie.";
        }
    } else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
            return "You win!";
        } else if (computerChoice === "rock") {
            return "You lose!";
        } else {
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
    console.log(`The score is: \nPlayer: ${playerScore}\nComputer: ${computerScore}`)
}
function compareScore(){
    if (playerScore > computerScore){
        console.log("You win!")
    } else if (computerScore > playerScore) {
        console.log("You lose!")
    } else {
        console.log("You tie.")
    }
}

function playGame(){
    for (i=0; i < 5; i++){
        const userSelection = prompt("What will you choose? Rock/paper/scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        trackScore(compareChoices(userSelection,computerSelection));
    }
    compareScore();
}
playGame();
