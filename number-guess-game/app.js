const randomNumber = () => Math.floor(1 + (Math.random() * 99));
let userChances = 10;
const generatedNumber = randomNumber();
let guessHistory = [];

function gameHandler(){
    let userNumber = +prompt("Please Enter Your Guess");
    if (userNumber === null) {
        return;
    } else {
        if (+userNumber < 100 && +userNumber >= 1){
            if (userChances <= 1){
                console.log(`You've Lost, The Correct Number Was ${generatedNumber}`);
            } else {
                if (+generatedNumber === +userNumber){
                    console.log("You Win!");
                    return;
                } else if (+userNumber > +generatedNumber){
                    console.log("Your Number is Greater Than Generated Number");
                    userChances--;
                    if (!guessHistory.includes(userNumber)){
                        guessHistory.push(userNumber);
                    } else null;
                    console.log(`You Still have ${userChances} Chances`);
                    console.log(`Your Guesses So Far are : ${guessHistory.toString()}`);
                    console.log("__________________");
                    gameHandler();
                } else {
                    console.log("Your Number is Lower Than Generated Number");
                    userChances--;
                    console.log(`You Still have ${userChances} Chances`);
                    if (!guessHistory.includes(userNumber)){
                        guessHistory.push(userNumber);
                    } else null;
                    console.log(`Your Guesses So Far are : ${guessHistory.toString()}`);
                    console.log("__________________");
                    gameHandler();
                }
            } 
        } else {
            console.log("You Cheated, You Must Enter a Number Between 1 and 100");
            userChances--;
            console.log(`You Still have ${userChances} Chances`);
            gameHandler();
        }
    } 
    
};
gameHandler();