/***  VARIABLES ***/
var randomNum
var userInput = document.querySelector ('.user-input');
var guessBtn = document.querySelector ('#guess');
var clearBtn = document.querySelector ('#clear');
var resetBtn = document.querySelector ('#reset');
var pinkNum = document.querySelector ('.pink-number');
var feedback = document.querySelector ('#high-or-low');
var guessesRemaining = document.querySelector ('#last-guess');
var counter = 0;
var min = 0;
var max = 100;

/***  EVENT LISTENERS ***/
guessBtn.addEventListener('click', function() {
  pinkNum.innerText = userInput.value;
  return evaluation();
  gameOver();
})

clearBtn.addEventListener('click', function() {
  userInput.value = '';
  buttonsOff();
  console.log("pink number" + userInput)
})

resetBtn.addEventListener('click', function() {
  restartGame();
})

userInput.addEventListener('input', function() {
  if (userInput.value === "") {
    buttonsOff();
  } else {
    buttonsOn();
  }
})

userInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    pinkNum.innerText = userInput.value;
    event.preventDefault();
    return evaluation();
  }
})

/***  FUNCTIONS ***/
function randomNumber(min, max) {
  var newMin = Math.floor(min);
  var newMax = Math.ceil(max);
  randomNum = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

function evaluation() {
  var parsedNum = parseInt(userInput.value);
  if (parsedNum < min || parsedNum > max) {
    feedback.innerText = "Follow the rules ya Dummy!";
  } else if (parsedNum < randomNum) {
    counter++;
    guessChecker();
    feedback.innerText = "Sorry Charlie, too low";
    gameOver();
  } else if (parsedNum > randomNum) {
    counter++;
    guessChecker();
    gameOver();
    feedback.innerText = "Little too high there Buddy";
  } else {
    feedback.innerText = "Hey! You Got It!";
    //  need to change alert to change background color
    //  element.style.backgroundColor = #
    counter = 0;
    levelUp();
    alert("Congrats! Ready for the Next Level?");
  }
}

function guessChecker() {
  console.log(counter + " guess counter")
  if (counter === 1) {
    guessesRemaining.innerText = "It's All Good... 6 More Tries";
  } else if (counter === 2) {
    guessesRemaining.innerText = "Hang In There... 5 More Tries";
  } else if (counter === 3) {
    guessesRemaining.innerText = "You Got This!... 4 More Tries";
  } else if (counter === 4) {
    guessesRemaining.innerText = "Uh Oh!... 3 More Tries";
  } else if (counter === 5) {
    guessesRemaining.innerText = "You're Not Very Good At This... 2 More Tries";
  } else {
    guessesRemaining.innerText = "Yikes!... Last Guess!";
  }
}

function buttonsOn() {
  document.querySelector("#guess").removeAttribute("disabled");
  document.querySelector("#clear").removeAttribute("disabled");
  document.querySelector("#reset").removeAttribute("disabled");
}

function buttonsOff() {
  document.querySelector("#guess").setAttribute("disabled", true);
  document.querySelector("#clear").setAttribute("disabled", true);
  document.querySelector("#reset").setAttribute("disabled", true);

}

function restartGame() {
  counter = 0;
  userInput.value = "";
  pinkNum.innerText = "?";
  feedback.innerText = "Can You Guess My Number? Pick 1-100";
  buttonsOff();
  randomNumber();
  console.log(randomNum)
 }

function levelUp() {
  counter = 0;
  randomNumber(min, max);
  gameOver();
  console.log("new number " + randomNum)
  min -= 10;
  max += 10;
  userInput.value = "";
  pinkNum.innerText = "?";
  feedback.innerText = "Now Pick From " + min + " to " + max;
  buttonsOff();
 }

 function gameOver() {
   if (counter >= 7) {
    //  need to change alert to change background color
    //  element.style.backgroundColor = #
     alert("Game Over!");
     window.location.reload();
   }
 }

randomNumber(min, max);
  console.log(randomNum);
