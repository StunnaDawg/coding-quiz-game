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

const array = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix]

button.addEventListener('click', function() {
    startTimer();
    mainSection.style.display = "none";
    changeQuestion(mainSection, array)
})


//timer function



var timer;
var sec = 60;
    function startTimer(){
        var timer = setInterval(function(){
            sec--;
            if (sec < 10) {
                document.getElementById('timer').innerHTML='00:0'+sec;
                } else {
                document.getElementById('timer').innerHTML='00:'+sec;
                }
            if (sec < 0 || array.length === 0) {
             clearInterval(timer);
            }
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



// This section makes sure the questions cycle through each other
const wrongAnswer = document.querySelector(".wrong-answer");
const questionOneButtons = document.querySelectorAll('.question-one-button'); // all selector chooses every button
const questionTwoButtons = document.querySelectorAll('.question-two-button');
const questionThreeButtons = document.querySelectorAll('.question-three-button');
const questionFourButtons = document.querySelectorAll('.question-four-button')
const questionFiveButtons = document.querySelectorAll('.question-five-button')
const questionSixButtons = document.querySelectorAll('.question-six-button')



    function changeQuestion(lastQuestion, array) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomQuestion = array[randomIndex];
        randomQuestion.style.display = 'block';
        lastQuestion.style.display = 'none';
        array.splice(randomIndex, 1);
        console.log(array)

        if (array.length === 0) {
            endGame();
        }
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

//Ending screen
const endScreen = document.querySelector('.end-screen')

function endGame () {
    if (array.length === 0) {
endScreen.style.display = 'block';
questionOne.style.display = 'none';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
questionFour.style.display = 'none';
questionFive.style.display = 'none';
questionSix.style.display = 'none';
document.querySelector('#finalScore').innerHTML =`Your final score is: ${sec}`;
    }
}

//store the user score in local storage

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const userName = form.elements.userName.value;
  let Storedscore = JSON.parse(localStorage.getItem("score")) || [];
  Storedscore.push({ name: userName, score: sec });
  localStorage.setItem("score", JSON.stringify(Storedscore));
});


