// variables for pre quiz stuff
var preQuizWindow = document.querySelector(".preQuizWindow");
var timer = document.getElementById("#timer");
var startQuiz = document.querySelector(".startButton");

// variables for quiz questions
var nextButton= document.querySelector("next-btn")
var questionContainerElement= document.querySelector('.container')
var questionsELement = document.getElementById("question")
var answerButtonsElement= document.getElementById("choices")
var submit= document.getElementById('submit');

// variables for post quiz
var playerName = document.querySelector("#playerName");
var submit = document.querySelector("#submit");
var quizResults = document.querySelector(".quizResults");
var finalScore = document.querySelector("#finalScore");
var highScores = document.querySelector(".highScores");


// question and answers
var questions = [
    {
      question: "",
      choices: [""],
      answer: ""
    },
    {
      question: "",
      choices: [''],
      answer: ""
    },
    {
      question: "",
      choices: [""],
      answer: "",
    },
    {
      question:"",
      choices:[""],
      answer:"",
    },
    {
      question: "",
      choices:[ ""],
      answer: "",
    },
    {
      question: "",
      choices: [""],
      answer: "",
    },
  ]
  
  
// start quiz button
startQuiz.addEventListener ("click", function confirmStart(){
    preQuizWindow.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    startTimer()
    setNextQuestion()
    });

// event listener for next button
 nextButton.addEventListener('click', ()=> {
     currentQuestionIndex++
     setNextQuestion()
 })


// this is where all the information is stored, so they can see their 
// results in the board at the end of the game. 
    function viewAllScores(){
        quizQuestions.classList.add('hide');
        rightAnswer.classList.add('hide');
        wrongAnswer.classList.add('hide');
        quizResults.classList.add('hide');
        preQuizWindow.classList.add('hide');
        highScores.classList.remove('hide');
        displayScores();
    }
// declares the shuffle varibale for the quesitons
    var shuffledQuestions, currentQuestionIndex

    
// uses the shuffle variable to shift to next question
function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
// adding values to the buttons for the questions and answer choices
function showQuestion(questions){
    questionsELement.innertext= questions.questions
    questions.answers.forEach(answer => {
        var button =document.createElement("button")
        button.innerText = answer.textbutton.classList.add("btn")
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
// resets the questionare for the next quesiton
function resetState(){
    nextButton.clasList.add('hide')
    while (answerButtonsElement.firstChild){
        (answerButtonsElement.firstChild)
    }
}
// this records the selected answers
function selectAnswer(){
    var selectedButton= e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, corret)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(Button, button.dataset.correct)
    })
}
// this determines if the answers are right or wrong, and records the data
function setStatusClass(element, correct) {
    clearStausClass(element)
    if (correct) {
        element.ckassList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}
// this removes it for the next question 
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

//penalize the player by reducing 10 seconds off the clock if the answer is wrong and ends the game when the clock
    //runs down 
    if (seconds === 0){
        setTimeout(()=>{
            seconds = seconds - 10
        },1001)
    }else{
        seconds = seconds - 10
    }
    rightAnswer.classList.add("hide");
    if (dataLength.length ===0 ){
        gameEnd()
    }
    
// function to start timer
    function startTimer(){
        seconds = 0;
        let minutes = 1;
        time = minutes+':'+seconds;
        timer.textContent = time
        intervalId = setInterval(()=>{
            if (seconds == 0){
                seconds = 60;
                minutes--;
            }
            seconds --;
            time = minutes+':'+seconds;
            timer.textContent = time
            if (time === '0:0' ){
                clearInterval(intervalId);
                clearInterval(setInterval);
                gameEnd();
            }
        },1000);
    }
// change to the scores page at the end of the game 
    function gameEnd(){
        clearInterval(intervalId)
        quizQuestions.classList.add("hide");
        quizResults.classList.remove("hide");
    }
    
    // when someone inputs a name, and score we can display it in viewAllScores
    function saveScore(){
        if (playerName.value !== ""){
            quizResults.classList.add("hide");
            highScores.classList.remove("hide")
            recordScore(playerName.value)
            viewAllScores();
        }
    }
    
