//start button
const button = document.querySelector('#start')
const questionOne = document.querySelector('.question-one')
const mainSection = document.querySelector('.main-section')

button.addEventListener('click', function() {
    questionOne.style.display = "block";
    mainSection.style.display = "none"
})