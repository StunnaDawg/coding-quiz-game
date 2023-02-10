// Document Query selectors
const mainSection = document.querySelector('.main-section')
const button = document.querySelector('#start')
const questionOne = document.querySelector('.question-one')
const questionTwo = document.querySelector('.question-two')
const questionThree = document.querySelector('.question-three')
const questionFour = document.querySelector('.question-four')
const questionFive = document.querySelector('.question-five')
const questionSix = document.querySelector('.question-six')
const timerDisplay = document.querySelector('#timer')
const wrong = document.querySelector('.wrong')
const correctAnswer = document.querySelector('.correct-answer')
const loading = document.querySelector('.loading')

//Questions stored in this array

const array = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix]


//This event listener starts the quiz
//I added a laoding section because there is a delay with timer
button.addEventListener('click', function() {
    mainSection.style.display = "none";
    loading.style.display = "flex"
    startTimer();
    setTimeout(function() {
        changeQuestion(mainSection, array)
    }, 1000);
})

//The timer function countsdown when the star button is clicked
//When a wrong question is clicked 5 seconds is taken off the timer

var timer;
var sec = 60;
    function startTimer(){
        var timer = setInterval(function(){
            
            if (sec < 10) {
                document.getElementById('timer').innerHTML='00:0'+sec;
                } else {
                document.getElementById('timer').innerHTML='00:'+sec;
                }
            if (sec === 0 || array.length === 0) {
             clearInterval(timer);
             if (sec === 0) {
                endGame();
              }
            }
            sec--;
        }, 1000);
  return sec;}
    function decrementTimer() {
        sec -= 5;
        if (sec < 10) {
          document.getElementById("timer").innerHTML = "00:0" + sec;
        } else {
          document.getElementById("timer").innerHTML = "00:" + sec;
        }
      }

      document.querySelectorAll(".wrong-answer").forEach(function(element) {
        element.addEventListener("click", function() {
            wrong.style.display = 'flex'
          decrementTimer();
          setTimeout(function() {
            wrong.style.display = 'none';
        }, 800);
    });
        });


// This section makes sure the questions cycle through each other
// Removes items within the array so that the game ends when the array is empty

const wrongAnswer = document.querySelector(".wrong-answer");
const questionOneButtons = document.querySelectorAll('.question-one-button'); 
const questionTwoButtons = document.querySelectorAll('.question-two-button');
const questionThreeButtons = document.querySelectorAll('.question-three-button');
const questionFourButtons = document.querySelectorAll('.question-four-button')
const questionFiveButtons = document.querySelectorAll('.question-five-button')
const questionSixButtons = document.querySelectorAll('.question-six-button')

let endButtonClicked = false;

    function changeQuestion(lastQuestion, array) {
        if (array.length === 0 && endButtonClicked) {
                endGame();
        }
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomQuestion = array[randomIndex];
        if (array.length > 0) {
        randomQuestion.style.display = 'flex';
        randomQuestion.style.flexDirection = 'column';
        }
        lastQuestion.style.display = 'none';
        loading.style.display = 'none'
        array.splice(randomIndex, 1);
        console.log(array)
    }

// The end button makes SURE the endGame() function is not called until the array is 0 and the button is clicked
// This will be overwritten if the timer is 0

    function onEndbuttonClick () {
        endButtonClicked = true
    }
    
    let endButtons = document.querySelectorAll(".end-button");
    endButtons.forEach(function(button) {
        button.addEventListener("click", onEndbuttonClick);
    });

questionOneButtons.forEach(function(questionOneButtons) {
        console.log(array)
        questionOneButtons.addEventListener('click', function() {
            changeQuestion(questionOne, array);
        }
    )});


questionTwoButtons.forEach(function(questionTwoButtons) {
    console.log(array)
        questionTwoButtons.addEventListener('click', function() {
            changeQuestion(questionTwo, array);
        }, 
   )});

questionThreeButtons.forEach(function(questionThreeButtons) {
    console.log(array)
        questionThreeButtons.addEventListener('click', function() {
            changeQuestion(questionThree, array);
        }
)});

questionFourButtons.forEach(function(questionFourButtons) {
    console.log(array)
        questionFourButtons.addEventListener('click', function() {
            changeQuestion(questionFour, array);
        }
)});

questionFiveButtons.forEach(function(questionFiveButtons) {
    console.log(array)
        questionFiveButtons.addEventListener('click', function() {
            changeQuestion(questionFive, array);
        }
)});

questionSixButtons.forEach(function(questionSixButtons) {
    console.log(array)
        questionSixButtons.addEventListener('click', function() {
            changeQuestion(questionSix, array);
        }
)});

const rightAnswer = document.querySelector('right-answer')
document.querySelectorAll(".right-answer").forEach(function(element) {
    element.addEventListener("click", function() {
        correctAnswer.style.display = 'flex'
      setTimeout(function() {
        correctAnswer.style.display = 'none';
    }, 800);
     } 
    )})


//Ending screen
const endScreen = document.querySelector('.end-screen')

function endGame () {
    if (array.length === 0 || sec === 0) {
endScreen.style.display = 'flex';
questionOne.style.display = 'none';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
questionFour.style.display = 'none';
questionFive.style.display = 'none';
questionSix.style.display = 'none';
document.querySelector('#finalScore').innerHTML =`Your final score is: ${sec}`;
    }
}

//form takes the user's score and input and stores them in local storage

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {

  event.preventDefault();

  const userName = form.elements.userName.value;
  if (!userName) {
    alert("Please enter a name");
    return;
  }

  let Storedscore = JSON.parse(localStorage.getItem("score")) || [];
  Storedscore.push({ name: userName, score: sec });
  localStorage.setItem("score", JSON.stringify(Storedscore));
  endScreen.style.display = 'none';
  leaderBoard.style.display = 'flex';
  highScore.style.display = 'flex';
  renderLeaderboard(); 
});

//the leaderboard section take the top 5 scores in the local storage

const leaderBoard = document.querySelector('.leaderboard');

const renderLeaderboard = function() {
    const Storedscore = JSON.parse(localStorage.getItem("score")) || [];
  
    // sorts the stored items from highest to lowest
    Storedscore.sort(function(a, b) {
      return b.score - a.score;
    });
  
    // Takes those 5 scores and leaves the rest in the storage
    const top5Scores = Storedscore.slice(0, 5);
  
    // clears the leaderboard
    leaderBoard.innerHTML = "";
  
    // creates a list of the current top 5 scores when renderLeaderboard() is called
    const list = document.createElement("ul");
    for (let i = 0; i < top5Scores.length; i++) {
      const score = top5Scores[i];
      const item = document.createElement("li");
      item.innerHTML = score.name + ": " + score.score;
      list.appendChild(item);
    }
  
    leaderBoard.appendChild(list);
  };
  

//This section shows the highscore screen

const highScore = document.querySelector('.high-scores');
const playAgain = document.querySelector('#play-again');

const highScoreScreen = document.querySelector('.high-score-screen')

highScoreScreen.addEventListener("click", function(){
    mainSection.style.display = 'none';
    endScreen.style.display = 'none';
    questionOne.style.display = 'none';
    questionTwo.style.display = 'none';
    questionThree.style.display = 'none';
    questionFour.style.display = 'none';
    questionFive.style.display = 'none';
    questionSix.style.display = 'none';
    highScore.style.display = 'flex';
    leaderBoard.style.display = 'flex';
    renderLeaderboard();
})