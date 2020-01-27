//variable//
var highScore = document.getElementById('score');
var timer = document.getElementById("time");
const start = document.getElementById('start');
const beginning = document.getElementById('intro');
var ques1 = document.getElementById("ques1");
var ques2 = document.getElementById("ques2");
var ques3 = document.getElementById("ques3");
var ques4 = document.getElementById('ques4');
var ques5 = document.getElementById('ques5');
var initials = document.getElementById('');
var submit = document.getElementById('');


let shuffledQuestions, currentQuestionIndex 

//start button timer//
start.addEventListener('click', function() {
  setTime();
})

//start button start game//
start.addEventListener('click', function() {
    startGame();
}) 

function startGame() {
    console.log(beginning);
    intro.classList.add('hide') 
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    ques1.classList.remove('hide')
    setNextQuestion()
}

//questions//
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//timer//

var secondsLeft = 75;

 function setTime() {
   var timerInterval = setInterval(function() {
     secondsLeft--;
     timer.textContent = 'Time: ' + secondsLeft;

     if(secondsLeft === 0) {
       clearInterval(timerInterval);
       console.log("Game Over!");
     }

   }, 1000);
 };

//questions//

for(var i = 0; i < questions[0].choices.length; i++) {

    ques1.innerText += questions[0].title
    ques1.innerHTML += "<button>" + questions[0].choices[i] + "</button>";

}

for(var i = 0; i < questions[1].choices.length; i++) {

    ques2.innerHTML += "<button>" + questions[1].choices[i] + "</button>";

}

for(var i = 0; i < questions[2].choices.length; i++) {

    ques3.innerHTML += "<button>" + questions[2].choices[i] + "</button>";

}

for(var i = 0; i < questions[3].choices.length; i++) {

    ques4.innerHTML += "<button>" + questions[3].choices[i] + "</button>";

}

for(var i = 0; i < questions[4].choices.length; i++) {

    ques5.innerHTML += "<button>" + questions[4].choices[i] + "</button>";

}

var questions = [
    {
      title: "What does DOM stand for?",
      choices: ["Document Order Modal", "Document Object Model", "Desktop Object Model"],
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