let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

// to check whether the user has given a prpoper number.
// To Make sure that user gives a Valid value and is also in range.
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number');
    } else if (guess < 1) {
        alert('Please Enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number smaller than 100');
    } else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess) 
        }
    } 
}

// For Printing a message whether the Random number given by the user is correct,Low or High or equal 
// & if its equal then @displayMessage gives the message.  
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Your guess was right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Your guess was tOO LOW`);
    } else if(guess > randomNumber){
        displayMessage(`Your guess was tOO HIGH`);
    }
}


//To clean the value for next input, To update the guess array @prevGuess
function displayGuess(guess) {
    userInput.value = '';   
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}


// To display a message for the value
function displayMessage(message) {
    lowOrHi.innerHTML = `<h4>${message}</h4>`;
}



function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}






























