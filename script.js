var startPage = document.getElementsByClassName("startPage");
var quizPage = document.getElementsByClassName("quizPage");
var resultsPage = document.getElementsByClassName("resultsPage");
var startBtn = document.getElementById("startBtn");
var restartBtn = document.getElementById("restartBtn");
var questions = document.getElementById("questions");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var timer = document.getElementById("timer");
var finalScore = document.getElementById("finalScore");
var amountCorrect;
var timeLeft= 60;
var score = 0;

var quizQuestions = [{
    question: "How many shots go into a grande iced americano?",
    choiceA: "1",
    choiceB: "2",
    choiceC: "3",
    correctAnswer: "c"
},
{
    question: "How many grams of coffee beans go into a grande sized Clover coffee?",
    choiceA: "50",
    choiceB: "40",
    choiceC: "60",
    correctAnswer: "a"
},
{
    question: "Which food item was NOT apart of the Fall 2023 launch?",
    choiceA: "Apple Croissant",
    choiceB: "Pumpkin Muffin",
    choiceC: "Pumpkin Scone",
    correctAnswer: "c"
},
{
    question: "How many short cups come with a coffee traveler?",
    choiceA: "8",
    choiceB: "12",
    choiceC: "10",
    correctAnswer: "b"
},
{
    question: "How many pumps of pumpkin sauce go into the Pumpkin Cream Cold Foam?",
    choiceA: "1",
    choiceB: "2",
    choiceC: "3",
    correctAnswer: "b"
},
{
    question: "To what line on a refresher pitcher do you fill the lemonade up to before adding water?",
    choiceA: "0.25 L",
    choiceB: "1 L",
    choiceC: "0.75 L",
    correctAnswer: "c"
},
{
    question: "Which of the following drinks was on the 'secret menu' and later became a permanent menu item?",
    choiceA: "Honey Citrus Mint Tea",
    choiceB: "Strawberry Acai Refresher",
    choiceC: "Iced Chai Latte",
    correctAnswer: "a"
}];

var currentQuestion = 0;

function loadQuestion() {
    question.innerText = quizQuestions[currentQuestion].question;
    choiceA.innerText = quizQuetions[currentQuestion].choiceA;
    choiceB.innerText = quizQuestions[currentQuestion].choiceB;
    choiceC.innerText = quizQuestions[currentQuestion].choiceC;
}