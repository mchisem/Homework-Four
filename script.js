 //variables//
 var highScore = document.getElementById('score');
 var timer = document.getElementById('timer');

 //constants//
 const start = document.getElementById('start');
 const highScoreRecord = document.getElementById('highscores');
 const intro = document.getElementById('intro');
 const next = document.querySelector('hide');
 const question1 = document.getElementById('question1');
 var answers = document.getElementById('answers');
 const question2 = document.getElementById('question2');
 const answers2 = document.getElementById('answers2');
 const question3= document.getElementById('question3');
 const answers3 = document.getElementById('answers3');
 const done = document.getElementById('done');
 
 let score = 0;
 let questionCounter = 0;
 let acceptingQuestion = false;
 let currentQuestion = {};
 let availableQuestions = [];


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
   answer: "Document Object Model", 
 },
 {
   title: "What is an array?",
   choices: ["A list of colors", "A list of elements", "A list of questions", "A list of lists"],
   answer: "A list of elements",
 },
 {
   title: "How do you style your website?",
   choices: ["Github", "Repositories", "CSS", "Scope"],
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

//for loop for questions//
 for(var i = 0; i < questions[0].choices.length; i++) {
     answers.innerHTML += "<button>" + questions[0].choices[i] + "</button>" + "<br>";
 } 

 for(var i = 0; i < questions[1].choices.length; i++) {
     answers2.innerHTML += "<button>" + questions[1].choices[i] + "</button>" + "<br>";
 }

 for(var i = 0; i < questions[2].choices.length; i++) {
     answers3.innerHTML += "<button>" + questions[2].choices[i] + "</button>" + "<br>";
 }

//answer the questions and move onto next set of questions//

 answers.addEventListener('click', e => {
     question1.classList.add('hide');
     question2.classList.remove('hide');
 })

 answers2.addEventListener('click', e => {
     question2.classList.add('hide');
     question3.classList.remove('hide');
 })

 answers3.addEventListener('click', e =>{
     question3.classList.add('hide');
     done.classList.remove('hide');

 })

//subtract 15 seconds when you click the wrong answer//

