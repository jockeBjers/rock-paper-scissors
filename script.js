let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];
    const randomElement = choices[Math.floor(Math.random() * choices.length)];
    return randomElement;
}

function getHumanChoice() {
    let choice = prompt("Enter your choice").toUpperCase();
    return choice;
}
function playRound(getHumanChoice, getComputerChoice) {

    console.log("your choice: " + getHumanChoice);
    console.log("Computer chose: " + getComputerChoice);
    
    if (getHumanChoice == "ROCK" && getComputerChoice == "SCISSOR") {
        console.log("you win! rock beats scissor!")
        ++humanScore;
    }

    else if (getHumanChoice == "PAPER" && getComputerChoice == "ROCK") {
        console.log("you win! Paper beats rock!")
        ++humanScore;
    }

    else if (getHumanChoice == "SCISSOR" && getComputerChoice == "PAPER") {
        console.log("you win! Scissor beats paper!")
        ++humanScore;
    }

    if (getComputerChoice == "ROCK" && getHumanChoice == "SCISSOR") {
        console.log("computer win! rock beats scissor!")
        ++computerScore;
    }

    else if (getComputerChoice == "PAPER" && getHumanChoice == "ROCK") {
        console.log("computer win! Paper beats rock!")
        ++computerScore;
    }

    else if (getComputerChoice == "SCISSOR" && getHumanChoice == "PAPER") {
        console.log("computer win! Scissor beats paper!")
        ++computerScore;

    }

    if (getComputerChoice === getHumanChoice) {
        console.log("its a tie");
    }
    console.log("\n*****\n\n");

}

function playGame() {


    for (i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("score: " + humanScore + " : " + computerScore);

    if(humanScore > computerScore){
     console.log("Congratulations! You win!")   
    } else if (computerScore > humanScore){
        console.log("Better luck next time. You lose!")
    } else {
        console.log("It is tied!")
    }


    
}

playGame();


