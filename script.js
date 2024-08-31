let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];
    const randomElement = choices[Math.floor(Math.random() * choices.length)];
    return randomElement;
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound('ROCK', getComputerChoice())
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound('PAPER', getComputerChoice())
});
const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
    playRound('SCISSOR', getComputerChoice())
});

const container = document.querySelector(".container");
const playerChoice = document.createElement("div");
const computerChoice = document.createElement("div");
const results = document.createElement("div");
const humanCount = document.createElement("div");
const computerCount = document.createElement("div");
const finalWinner = document.createElement("div");

playerChoice.textContent = "play! ";
computerChoice.textContent = "It's your turn!";
results.textContent = "Best of five wins ";
humanCount.textContent = "your score: " + humanScore;
computerCount.textContent = "Computer score: " + computerScore;
finalWinner.textContent = "Best of five: ";

container.appendChild(playerChoice);
container.appendChild(computerChoice);
container.appendChild(results);
container.appendChild(humanCount);
container.appendChild(computerCount);
container.appendChild(finalWinner);


function playRound(getHumanChoice, getComputerChoice) {

    playerChoice.textContent = "Your choice: " + getHumanChoice;
    computerChoice.textContent = "Computer choice: " + getComputerChoice;

    if (getHumanChoice == "ROCK" && getComputerChoice == "SCISSOR") {
        results.textContent = "You win! rock beats scissor!";
        ++humanScore;
        humanCount.textContent = "your score: " + humanScore;
        computerCount.textContent = "Computer score: " + computerScore;
        gamesPlayed++;
    }

    else if (getHumanChoice == "PAPER" && getComputerChoice == "ROCK") {
        results.textContent = "You win! Paper beats rock!";
        ++humanScore;
        humanCount.textContent = "your score: " + humanScore;
        computerCount.textContent = "Computer score: " + computerScore;
        gamesPlayed++;
    }

    else if (getHumanChoice == "SCISSOR" && getComputerChoice == "PAPER") {
        results.textContent = "You win! Scissor beats paper!";
        ++humanScore;
        humanCount.textContent = "your score: " + humanScore;
        computerCount.textContent = "Computer score: " + computerScore;
        gamesPlayed++;
    }

    if (getComputerChoice == "ROCK" && getHumanChoice == "SCISSOR") {
        results.textContent = "Computer win! rock beats scissor!";
        ++computerScore;
        humanCount.textContent = "your score: " + humanScore;
        computerCount.textContent = "Computer score: " + computerScore;
        gamesPlayed++;
    }

    else if (getComputerChoice == "PAPER" && getHumanChoice == "ROCK") {
        results.textContent = "Computer win! Paper beats rock!";
        ++computerScore;
        humanCount.textContent = "your score: " + humanScore;
        computerCount.textContent = "Computer score: " + computerScore;
        gamesPlayed++;
    }

    else if (getComputerChoice == "SCISSOR" && getHumanChoice == "PAPER") {
        results.textContent = "Computer win! Scissor beats paper!";
        ++computerScore;
        humanCount.textContent = "your score: " + humanScore;
        computerCount.textContent = "Computer score: " + computerScore;
        gamesPlayed++;
    }

    if (getComputerChoice === getHumanChoice) {
        results.textContent = "It's a tie";
        humanCount.textContent = "your score: " + humanScore;
        computerCount.textContent = "Computer score: " + computerScore;
    }

    if (gamesPlayed >= 5) {
        if (humanScore > computerScore) {
            finalWinner.textContent = "Congratulations! You win!";
            container.setAttribute("style", "color: black; background: green;");
        } else {
            finalWinner.textContent = "Awwwwwww! You lose!";
            container.setAttribute("style", "color: black; background: red;");
        }
    }

    if (gamesPlayed >= 6) {
        reset();
    }
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
    playerChoice.textContent = "play!";
    computerChoice.textContent = "It's your turn!";
    container.setAttribute("style", "backgrond: white")
    results.textContent = "result: ";
    humanCount.textContent = "your score: " + humanScore;
    computerCount.textContent = "Computer score: " + computerScore;
    finalWinner.textContent = "Best of five: ";
}