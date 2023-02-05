//------ start button -------
const mainSection = document.querySelector('.main-section')
const button = document.querySelector('#start')
const questionOne = document.querySelector('.question-one')
const questionTwo = document.querySelector('.questionTwo')
const questionThree = document.querySelector('.questionThree')



button.addEventListener('click', function() {
    questionOne.style.display = "block";
    mainSection.style.display = "none"
})