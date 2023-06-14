//this is an array of random words which we can use in game
secret_words = ['python', 'computer', 'programming', 'algorithm', 'database', 'javascript', 'html', 'css', 'network', 'security', 'encryption', 'decryption', 'authentication', 'authorization', 'server', 'client', 'router', 'firewall', 'operating', 'system', 'kernel', 'memory', 'storage', 'backup', 'restore', 'virtualization', 'cloud', 'container', 'microservices', 'api', 'rest', 'soap', 'graphql', 'docker', 'kubernetes', 'jenkins', 'git', 'github', 'bitbucket', 'agile', 'scrum', 'kanban', 'devops', 'testing', 'automation', 'machine', 'learning', 'artificial', 'intelligence'];

//global varible declaring
let selectedWord = "";
let result = "";
let clickedLetters = [];
let mistakeCount = 0;

//this function select a random word from an array of words to begin with
//then it adds an event listener to alphabets shown on screen to handle clicks
//also it adds an event listener to whole window to capture key presses on keyboard
function wordSelect(){
    selectedWord = secret_words[Math.floor(Math.random() * secret_words.length)];
    document.getElementById("letters").addEventListener("click", buttonHandler);
    window.addEventListener("keypress", keyHandler);
    document.getElementById("restart").addEventListener("click",restart);
};

//this function is used to check if user win the game, if true,
//it triggers the game over text and picture.
function checkIfWon(){
    if (result == selectedWord){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("images").querySelector("img").src = "./assets/winner.png";
    }
};

//this function is used to check if user lost the game or not, if true,
//it triggers the game over text and shows the correct word.
function checkIfLose(){
    if(mistakeCount === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("images").querySelector("img").src = "./assets/hangman6.png";
        document.getElementById("clue").innerHTML = `${selectedWord}`;
        document.getElementById("restart").style.display = "block";
    };
};

//this function handles the underscores and correct letter guesses shown on clue section
function underscoreHandler(){
    let splitedWord = selectedWord.split("");
    // console.log(splitedWord);
    let mappedWord = splitedWord.map(letter => (clickedLetters.indexOf(letter) >= 0 ? letter : "_"));
    let rejoinedWord = mappedWord.join("");
    result = rejoinedWord;
    // console.log(result);
    document.getElementById("clue").innerHTML = `<p>${result}</p>`;
};



//هرگز به لپ تاپ سخیف تو عادت نکنم
//گر که عادت بکنم 
//به تو شکایت نکنم
//استاد فیض آبادی 23 خرداد 1402 ساعت 20 باغ کتاب تهران 
// @ARFA79

//this is the main function that checks the input and calls proper functions 
//to handle underscores and checking the winning or losing conditions
function letterHandler(letter) {
    // console.log(letter)
    letter = letter.toLowerCase();
    // console.log(`letter to lowercase test : ${letter}`)
    
    clickedLetters.indexOf(letter) === -1 ? clickedLetters.push(letter) : null;
    document.getElementById(letter.toUpperCase()).setAttribute("class", "used");
    // console.log(document.getElementById(letter.toUpperCase()));
    if (selectedWord.indexOf(letter) >= 0){
        // console.log("the shitshow");
        // console.log(`${selectedWord.indexOf(letter)}`);
        underscoreHandler();
        checkIfWon();
    }else if (selectedWord.indexOf(letter) === -1){
        mistakeCount++;
        updateHangmanPicture();
        checkIfLose();
    }
};

//a function to handle the key presses on keyboard
function keyHandler(event){
    letterHandler(event.key);
    // console.log(event.key);
};

//a function to handle the clicks on alphabets shown in the screen.
function buttonHandler(event){
    letterHandler(event.target.id);
    // console.log(event.target.id);

};

//a function to update the hangman picture in every step
function updateHangmanPicture() {
    const image = document.getElementById("images").querySelector("img");
    if (mistakeCount <= 6){
        image.src = `./assets/hangman${mistakeCount}.png`
    };
};

//this function restart the whole process by reloading the page 
function restart(){
    location.reload();
};


//the main routine of the game starts here by calling these two functions
wordSelect();
underscoreHandler();
