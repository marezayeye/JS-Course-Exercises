const userChoice = prompt("Choose between Rock, Paper,Scissors");
const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    return choices[Math.floor(Math.random() * (max - min))];
}

if (userChoice){
    console.log(`You Choose ${userChoice}`);
    let opponentChoice = computerChoice();
    console.log(`Computer Chosed : ${opponentChoice}`);
    if (userChoice == "rock"  && opponentChoice == "paper"){
        console.log("You lose.");
    } else if  (userChoice == "rock" && opponentChoice == "scissors"){
        console.log("You win.");
    } else if ( userChoice == opponentChoice){
        console.log("Deuce");
    } else if (userChoice == "paper" && opponentChoice == "rock"){
        console.log("You win.");
    } else if (userChoice == "paper" && opponentChoice == "scissors"){
        console.log("You lose");
    } else if (userChoice == "scissors" && opponentChoice == "paper"){
        console.log("You win.");
    } else if (userChoice == "scissors" && opponentChoice == "rock"){
        console.log("You lose");
    }
    
} else {
    console.log("You Cheated");
}
