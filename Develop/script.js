//------ start button -------
const mainSection = document.querySelector('.main-section')
const button = document.querySelector('#start')
const questionOne = document.querySelector('.question-one')
const questionTwo = document.querySelector('.question-two')
const questionThree = document.querySelector('.question-three')

let array = [questionOne, questionTwo, questionThree]

button.addEventListener('click', function() {
    countdown();
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomQuestion = array[randomIndex];
    randomQuestion.style.display = "block";
    mainSection.style.display = "none";
    const [startQuestion] = array.splice(randomIndex, 1);
    startQuestion;
})

function countdown() {
    let timeLeft = 100;
    const timerDisplay = document.querySelector("#timer");
    let countdown = setInterval(function() {
        timerDisplay.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = timeLeft;
        }
    }, 1000);
}

// This section makes sure the questions cycle through each other

const questionOneButtons = document.querySelectorAll('.question-one-button'); // all selector chooses every button
const questionTwoButtons = document.querySelectorAll('.question-two-button');
const questionThreeButtons = document.querySelectorAll('.question-three-button');

function changeQuestion(currentQuestion) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomQuestion = array[randomIndex];
    randomQuestion.style.display = 'block';
    currentQuestion.style.display = 'none';
    const [questionArray] = array.splice(randomIndex, 1);
    questionArray;
    console.log(array)
}

questionOneButtons.forEach(function(questionOneButtons) {
    questionOneButtons.addEventListener('click', function() {
        changeQuestion(questionOne);
    }, {once : true});
});

questionTwoButtons.forEach(function(questionTwoButtons) {
    questionTwoButtons.addEventListener('click', function() {
        changeQuestion(questionTwo);
    }, {once : true});
});

questionThreeButtons.forEach(function(questionThreeButtons) {
    questionThreeButtons.addEventListener('click', function() {
        changeQuestion(questionThree);
    }, {once : true});
});



