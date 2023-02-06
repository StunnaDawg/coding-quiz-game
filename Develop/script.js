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

const questionOneButton = document.querySelector('.question-one-button');
const questionTwoButton = document.querySelector('.question-two-button');
const questionThreeButton = document.querySelector('.question-three-button');

questionOneButton.addEventListener('click', function() {
    let randomIndex = [Math.floor(Math.random() * array.length)];
    let randomQuestion = array[randomIndex];
    randomQuestion.style.display = 'block';
    questionOne.style.display = 'none';
}, {once : true});

questionTwoButton.addEventListener('click', function() {
    let randomIndex = [Math.floor(Math.random() * array.length)];
    let randomQuestion = array[randomIndex];
    randomQuestion.style.display = 'block';
    questionTwo.style.display = 'none';
    
}, {once : true});

questionThreeButton.addEventListener('click', function() {
    let randomIndex = [Math.floor(Math.random() * array.length)];
    let randomQuestion = array[randomIndex];
    randomQuestion.style.display = 'block';
    questionThree.style.display = 'none';
    
}, {once : true});





