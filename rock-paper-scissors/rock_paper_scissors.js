const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore =0;

const resultUpdater = (result) => {
    if (result === "player") {
        console.log("You Win");
        playerScore++;
    } else if (result === "computer"){
        console.log("You Lose");
        computerScore++;
    } else {
        console.log("It's a tie!")
    };

    console.log(`Player ${playerScore} : ${computerScore} Computer`);
    console.log("...................");
};

function checkWinner(player, computer){
    if (player === computer){
        return "Draw";
    } else if (player === "rock"){
        return computer === "paper" ? "computer" : "player";
    } else if (player === "paper"){
        return computer === "rock" ? "player" : "computer";
    } else return computer === "paper" ? "player" : "computer"; 
};




const play = () => {
    
    const player = prompt("Choose between Rock, Paper and Scissors");
    if (choices.indexOf(player?.toLocaleLowerCase()) === -1){
         return"You Cheated!";
    }else {
            console.log(`You Chosed ${player} `);
        const computer = choices[Math.floor(Math.random() * choices.length)];
        console.log(`Computer Chosed ${computer}`);
        const gameResult = checkWinner(player, computer);
        resultUpdater(gameResult);
        if (playerScore >= 5 || computerScore >= 5){
            console.log("Game is Over");
            console.log("Final Result is :");
            console.log(`Player ${playerScore} : ${computerScore} Computer`);
        } else play();
    }
};

play();

































