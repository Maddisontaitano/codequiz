// variables for pre quiz stuff
var preQuizWindow = document.querySelector(".preQuizWindow");
var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");

// variables for quiz questions
var quizQuestions = document.querySelector(".quizQuestions");
var quizQuestionsTitle = document.querySelector("#quizQuestionsTitle");
var rightAnswer = document.querySelector(".rightAnswer");
var wrongAnswer = document.querySelector(".wrongAnswer");
var but1 = document.querySelector("#but1");
var but2 = document.querySelector("#but2");
var but3 = document.querySelector("#but3");
var but4 = document.querySelector("#but4");

// variables for post quiz
var playerName = document.querySelector("#playerName");
var submit = document.querySelector("#submit");
var quizResults = document.querySelector(".quizResults");
var finalScore = document.querySelector("#finalScore");
var highScores = document.querySelector(".highScores");



preQuizWindow.classList.remove("hide")
startButton.addEventListener("click",confirmStart)
viewHighScores.addEventListener("click",viewAllScores)