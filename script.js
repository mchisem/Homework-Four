var highScore = document.getElementById('score');
var timer = document.getElementById('timer');
const start = document.getElementById('start');
const highScoreRecord = document.getElementById('highscores');
const intro = document.getElementById('intro');
const next = document.querySelector('hide');
const question1 = document.getElementById('question1');
const answers = document.getElementById('answers');
var question2 = document.getElementById('question2');

//timer//
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timer.textContent = 'Time: ' + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log("over!");
        }

    }, 1000); 
}

//function for the timer to initiate when you click the start button//
start.addEventListener('click', setTime)

start.addEventListener('click', startGame)

function startGame() {
    intro.classList.add('hide');
    question1.classList.remove('hide');
}

//questions for quiz//
var questions = [
{
  title: "What does DOM stand for?",
  choices: ["Document Order Modal", "Document Object Model", "Desktop Object Model","Document Order Meal"],
  answer: "Document Object Model"
},
{
  title: "What is an array?",
  choices: ["A list of colors", "A list of elements", "A list of questions"],
  answer: "A list of elements"
},
{
  title: "How do you style your website?",
  choices: ["Github", "Repositories", "CSS"],
  answer: "CSS"
},
{
  title: "________script",
  choices: ["Java", "Haba", "Jaba"],
  answer: "Java"
},
{
  title: "What is Github used for?",
  choices: ["To host object models", "To host Git indexes", "To host Git Repositories"],
  answer: "To host Git Repositories"
},
];

//for loop for question 1//
for(var i = 0; i < questions[0].choices.length; i++) {

    answers.innerHTML += "<button>" + questions[0].choices[i] + "</button>" + "<br>";
}