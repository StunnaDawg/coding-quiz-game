//------ start button -------
const mainSection = document.querySelector('.main-section')
const button = document.querySelector('#start')
const questionOne = document.querySelector('.question-one')
const questionTwo = document.querySelector('.question-two')
const questionThree = document.querySelector('.question-three')
const timerDisplay = document.querySelector('#timer')

let array = [questionOne, questionTwo, questionThree]

button.addEventListener('click', function() {
    startTimer();
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomQuestion = array[randomIndex];
    randomQuestion.style.display = "block";
    mainSection.style.display = "none";
})


//timer function

let countdownTimer;
let timeLeft;



var sec = 60;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            if (sec < 10) {
                document.getElementById('timer').innerHTML='00:0'+sec;
            } else {
                document.getElementById('timer').innerHTML='00:'+sec;
            }
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
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

//Ending screen
const endScreen = document.querySelector('.end-screen')

function endGame () {
    if (array.length === 0) {
endScreen.style.display = 'block';
questionOne.style.display = 'none';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
    }
}