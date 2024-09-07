let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
const winningScore = 3;
const maxRounds = 5;

const container = document.querySelector(".container");
const playerChoice = document.createElement("div");
const computerChoice = document.createElement("div");
const results = document.createElement("div");
const humanCount = document.createElement("div");
const computerCount = document.createElement("div");
const finalWinner = document.createElement("div");

container.appendChild(playerChoice);
container.appendChild(computerChoice);
container.appendChild(results);
container.appendChild(humanCount);
container.appendChild(computerCount);
container.appendChild(finalWinner);

playerChoice.textContent = "play! ";
computerChoice.textContent = "It's your turn!";
results.textContent = "Best of five wins ";
humanCount.textContent = "your score: " + humanScore;
computerCount.textContent = "Computer score: " + computerScore;
finalWinner.textContent = "Best of five: ";

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

const resetGame = document.querySelector("#reset");
resetGame.addEventListener("click", () => {
    reset();
});

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];
    const randomElement = choices[Math.floor(Math.random() * choices.length)];
    return randomElement;
}

function playRound(getHumanChoice, getComputerChoice) {

    playerChoice.textContent = "Your choice: " + getHumanChoice;
    computerChoice.textContent = "Computer choice: " + getComputerChoice;

    if ((getHumanChoice === "ROCK" && getComputerChoice === "SCISSOR") ||
        (getHumanChoice === "PAPER" && getComputerChoice === "ROCK") ||
        (getHumanChoice === "SCISSOR" && getComputerChoice === "PAPER")) {

        results.textContent = `You win! ${getHumanChoice} beats ${getComputerChoice}!`;
        ++humanScore;
    }

    else if (getComputerChoice === getHumanChoice) {
        results.textContent = "its a tie";
    }
    else {
        results.textContent = `Computer wins! ${getComputerChoice} beats ${getHumanChoice}!`;
        ++computerScore;
    }

    gamesPlayed++;
    calc();

}

function calc() {
    humanCount.textContent = "your score: " + humanScore;
    computerCount.textContent = "Computer score: " + computerScore;
    finalWinner.textContent = "Current round: " + gamesPlayed;

    if (humanScore === winningScore) {
        humanWinner();
    }
    else if (computerScore === winningScore) {
        computerWinner();
    }

    if (gamesPlayed >= 4) {
        if (humanScore === 2 && computerScore === 0) {
            humanWinner();
            return;
        } else if (computerScore === 2 && humanScore === 0) {
            computerWinner();
            return;
        }
    }

    if (gamesPlayed >= maxRounds) {

        if (humanScore === computerScore) {
            finalWinner.textContent = "Current round: " + gamesPlayed + ` It's still a tie after ${gamesPlayed} rounds! Keep playing...`;
        }
        else if (humanScore > computerScore) {
            humanWinner();
        }
        else {
            computerWinner();
        }
    }
}

function humanWinner() {
    finalWinner.textContent =  "Current round: " + gamesPlayed + " Congratulations! You win!";
    container.setAttribute("style", "color: black; background: lightgreen;");
    disableGame();
}

function computerWinner() {
    finalWinner.textContent =  "Current round: " + gamesPlayed + " Awwwwwww! You lose!";
    container.setAttribute("style", "color: black; background: red;");
    disableGame();
}
function disableGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    rock.setAttribute("style", "background: grey;")
    paper.setAttribute("style", "background: grey;")
    scissor.setAttribute("style", "background: grey;")
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    gamesPlayed = 0;

    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    rock.setAttribute("style", "background: #f85e5e;")
    paper.setAttribute("style", "background: #70f556;")
    scissor.setAttribute("style", "background: #64a4f8;")

    playerChoice.textContent = "play!";
    computerChoice.textContent = "It's your turn!";
    container.setAttribute("style", "background: white");
    results.textContent = "Best of five wins ";
    humanCount.textContent = "your score: " + humanScore;
    computerCount.textContent = "Computer score: " + computerScore;
    finalWinner.textContent = "Best of five: ";
}