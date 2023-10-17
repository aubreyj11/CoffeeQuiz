
var startPage = document.getElementById("startPage");
var quizPage = document.getElementById("quizPage");
var resultsPage = document.getElementById("resultsPage");
var startBtn = document.getElementById("startBtn");
var restartBtn = document.getElementById("restartBtn");
var homeBtn = document.getElementById("homeBtn");
var quizHomeBtn = document.getElementById("quizHomeBtn");
var questions = document.getElementById("questions");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var timer = document.getElementById("timer");
var finalScore = document.getElementById("finalScore");
var timeLeft= 60;
var score = 0;

var quizQuestions = [{
    question: "How many shots go into a grande iced americano?",
    choiceA: "1",
    choiceB: "2",
    choiceC: "3",
    choiceD: "4",
    correctAnswer: "c"
},
{
    question: "How many grams of coffee beans go into a grande sized Clover coffee?",
    choiceA: "50",
    choiceB: "40",
    choiceC: "60",
    choiceD: "70",
    correctAnswer: "a"
},
{
    question: "Which food item was NOT apart of the Fall 2023 launch?",
    choiceA: "Apple Croissant",
    choiceB: "Pumpkin Muffin",
    choiceC: "Pumpkin Scone",
    choiceD: "Pumpkin Loaf",
    correctAnswer: "c"
},
{
    question: "How many short cups come with a coffee traveler?",
    choiceA: "8",
    choiceB: "12",
    choiceC: "10",
    choiceD: "6",
    correctAnswer: "b"
},
{
    question: "How many pumps of pumpkin sauce go into the Pumpkin Cream Cold Foam?",
    choiceA: "3",
    choiceB: "4",
    choiceC: "1",
    choiceD: "2",
    correctAnswer: "d"
},
{
    question: "To what line on a refresher pitcher do you fill the lemonade up to before adding water?",
    choiceA: "0.25 L",
    choiceB: "1 L",
    choiceC: "0.75 L",
    choiceD: "0.5 L",
    correctAnswer: "c"
},
{
    question: "Which of the following drinks was on the 'secret menu' and later became a permanent menu item?",
    choiceA: "Honey Citrus Mint Tea",
    choiceB: "Strawberry Acai Refresher",
    choiceC: "Iced Chai Latte",
    choiceD: "Iced Caramel Macchiato",
    correctAnswer: "a"
}];

var currentQuestion = 0;

function loadQuestion() {
    questions.innerText = quizQuestions[currentQuestion].question;
    choiceA.innerText = quizQuestions[currentQuestion].choiceA;
    choiceB.innerText = quizQuestions[currentQuestion].choiceB;
    choiceC.innerText = quizQuestions[currentQuestion].choiceC;
    choiceD.innerText = quizQuestions[currentQuestion].choiceD;
}


function questionAnswered(e) {
    if (e.currentTarget.id === quizQuestions[currentQuestion].correctAnswer) {
        // fire({
        //     icon: 'success',
        //     title: 'Correct!',
        //     text: 'Click OK to continue'
        //   })
        // alert("Correct!");
          score++;
    } else {
        // fire({
        //     icon: 'error',
        //     title: 'Incorrect',
        //     text: 'Click OK to continue'
        //   })
        // alert("Incorrect!");
          timeLeft -= 3;
    }
    currentQuestion++;
    if (currentQuestion > quizQuestions.length - 1) {
        showScore();
    } else {
        loadQuestion();
    }
}

function showScore() {
    quizPage.style.display = "none";
    resultsPage.style.display = "flex";
    finalScore.innerHTML = "You got " + score + " out of " + quizQuestions.length + " questions correct and you had " + timeLeft + " seconds left!";
}

function startQuiz() {
    if (startPage.style.display === 'flex') {
        startPage.style.display = 'none';

    }

    resultsPage.style.display = "none";
    quizPage.style.display = "flex";
    

    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left!";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);

    loadQuestion();
}

function playAgain() {
    clearInterval(timerInterval);
    timeLeft = 60;
    score = 0;
    currentQuestion = 0;
    startQuiz();
}

function backBtn() {

    if (resultsPage.style.display === 'flex') {
        resultsPage.style.display = 'none';

    }
    quizPage.style.display = "none";
    startPage.style.display = "flex";
    clearInterval(timerInterval);
    timeLeft = 60;
    score = 0;
    currentQuestion = 0;
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", playAgain);
homeBtn.addEventListener("click", backBtn);
quizHomeBtn.addEventListener("click", backBtn);
choiceA.addEventListener("click", questionAnswered);
choiceB.addEventListener("click", questionAnswered);
choiceC.addEventListener("click", questionAnswered);
choiceD.addEventListener("click", questionAnswered);


