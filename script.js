let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];
    const randomElement = choices[Math.floor(Math.random() * choices.length)];
    return randomElement;
}

// function getHumanChoice() {
//     let choice = prompt("Enter your choice").toUpperCase();
//     if(choice === "PAPER" || choice === "ROCK" || choice === "SCISSOR"){
//         return choice;
//     }
//     else{
//         alert("Wrong input, only paper, rock or scissor is valid.")
//         return getHumanChoice();
//     }
// }


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





function playRound(getHumanChoice, getComputerChoice) {

    console.log("Your choice: " + getHumanChoice);
    console.log("Computer choice: " + getComputerChoice);

    if (getHumanChoice == "ROCK" && getComputerChoice == "SCISSOR") {
        console.log("You win! rock beats scissor!")
        ++humanScore;
    }

    else if (getHumanChoice == "PAPER" && getComputerChoice == "ROCK") {
        console.log("You win! Paper beats rock!")
        ++humanScore;
    }

    else if (getHumanChoice == "SCISSOR" && getComputerChoice == "PAPER") {
        console.log("You win! Scissor beats paper!")
        ++humanScore;
    }

    if (getComputerChoice == "ROCK" && getHumanChoice == "SCISSOR") {
        console.log("Computer win! rock beats scissor!")
        ++computerScore;
    }

    else if (getComputerChoice == "PAPER" && getHumanChoice == "ROCK") {
        console.log("Computer win! Paper beats rock!")
        ++computerScore;
    }

    else if (getComputerChoice == "SCISSOR" && getHumanChoice == "PAPER") {
        console.log("Computer win! Scissor beats paper!")
        ++computerScore;

    }

    if (getComputerChoice === getHumanChoice) {
        console.log("It's a tie");
    }
    console.log("\n*****\n\n");

}

// function playGame() {

//     for (i = 0; i < 5; i++) {

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);

//     }

//     console.log("Score: " + humanScore + " : " + computerScore);

//     if (humanScore > computerScore) {
//         console.log("Congratulations! You win!")
//     } else if (computerScore > humanScore) {
//         console.log("Better luck next time. You lose!")
//     } else {
//         console.log("No one wins. It is tied!")
//     }

// }

// playGame();
//