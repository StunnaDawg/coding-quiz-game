//------ start button -------
const mainSection = document.querySelector('.main-section')
const button = document.querySelector('#start')
const questionOne = document.querySelector('.question-one')
const questionTwo = document.querySelector('.question-two')
const questionThree = document.querySelector('.question-three')
const questionFour = document.querySelector('.question-four')
const questionFive = document.querySelector('.question-five')
const questionSix = document.querySelector('.question-six')
const timerDisplay = document.querySelector('#timer')

//Starting event

const array = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix]

button.addEventListener('click', function() {
    mainSection.style.display = "none";
    startTimer();
    changeQuestion(mainSection, array)
})

//-----------------------------------------------------------//

//timer function



var timer;
var sec = 60;
    function startTimer(){
        var timer = setInterval(function(){
            
            if (sec < 10) {
                document.getElementById('timer').innerHTML='00:0'+sec;
                } else {
                document.getElementById('timer').innerHTML='00:'+sec;
                }
            if (sec < 0 || array.length === 0) {
             clearInterval(timer);
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
          decrementTimer();
        });
      });
 //made into a variable so I am able to call the subtractTime function when the buttons are clicked

//-----------------------------------------------------------//

// This section makes sure the questions cycle through each other
const wrongAnswer = document.querySelector(".wrong-answer");
const questionOneButtons = document.querySelectorAll('.question-one-button'); // all selector chooses every button
const questionTwoButtons = document.querySelectorAll('.question-two-button');
const questionThreeButtons = document.querySelectorAll('.question-three-button');
const questionFourButtons = document.querySelectorAll('.question-four-button')
const questionFiveButtons = document.querySelectorAll('.question-five-button')
const questionSixButtons = document.querySelectorAll('.question-six-button')



    function changeQuestion(lastQuestion, array) {
        if (array.length === 0) {
            endGame();
        }
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomQuestion = array[randomIndex];
        if (array.length > 0) {
        randomQuestion.style.display = 'flex';
        randomQuestion.style.flexDirection = 'column';
        }
        lastQuestion.style.display = 'none';
        array.splice(randomIndex, 1);
        console.log(array)

    }

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

//-----------------------------------------------------------//

//Ending screen
const endScreen = document.querySelector('.end-screen')

function endGame () {
    if (array.length === 0) {
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

//-----------------------------------------------------------//

//Scores stored in local storage

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {

  event.preventDefault();
  const userName = form.elements.userName.value;
  let Storedscore = JSON.parse(localStorage.getItem("score")) || [];
  Storedscore.push({ name: userName, score: sec });
  localStorage.setItem("score", JSON.stringify(Storedscore));
  endScreen.style.display = 'none';
  leaderBoard.style.display = 'flex';
  highScore.style.display = 'flex';
  renderLeaderboard();
});


//-----------------------------------------------------------//

//Leaderboard 

const renderLeaderboard = function() {
    const Storedscore = JSON.parse(localStorage.getItem("score")) || [];
  
    // sort the stored scores in descending order by score
    Storedscore.sort(function(a, b) {
      return b.score - a.score;
    });
  
    // only display the top 5 scores
    const top5Scores = Storedscore.slice(0, 5);
  
    // clear the leaderboard
    leaderBoard.innerHTML = "";
  
    // render the top 5 scores in the leaderboard
    const list = document.createElement("ul");
    for (let i = 0; i < top5Scores.length; i++) {
      const score = top5Scores[i];
      const item = document.createElement("li");
      item.innerHTML = score.name + ": " + score.score;
      list.appendChild(item);
    }
  
    leaderBoard.appendChild(list);
  };
  

//Play again button

const leaderBoard = document.querySelector('.leaderboard');
const highScore = document.querySelector('.high-scores');
const playAgain = document.querySelector('#play-again');

playAgain.addEventListener("click", function(){

})

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