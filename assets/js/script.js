// Global Variables
var startBtn = document.querySelector("#start-btn");
var answerBtn = document.querySelector("#answer");
var submitBtn = document.querySelector(".submit");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var timeEl = document.querySelector(".timer");
// var nextQuestion = document.querySelector(".selection");
var btnAns1 = document.querySelector("#answer-1");
var btnAns2 = document.querySelector("#answer-2");
var btnAns3 = document.querySelector("#answer-3");
var btnAns4 = document.querySelector("#answer-4");
var playAgain = document.querySelector(".restart");
var quizScore = 0;
var questionArr = [
  {
    question: "Delaware",
    choices: ["Wilmington", "Dover", "Milford", "Georgetown"],
    answer: "Dover",
  },
  {
    question: "Arizona",
    choices: ["Scottsdale", "Tempe", "Phoenix", "Tuscon"],
    answer: "Phoenix",
  },
  {
    question: "Illinois",
    choices: ["Chicago", "Springfield", "Normal", "Peoria"],
    answer: "Springfield",
  },
  {
    question: "Oregon",
    choices: ["Salem", "Portland", "Eugene", "Corvallis"],
    answer: "Salem",
  },
  {
    question: "Michigan",
    choices: ["Detroit", "Lansing", "Grand Rapids", "Ann Arbor"],
    answer: "Lansing",
  },
  {
    question: "Mississippi",
    choices: ["Tupelo", "Oxford", "Jackson", "Biloxi"],
    answer: "Jackson",
  },
  {
    question: "Minnesota",
    choices: ["Saint Paul", "Minneapolis", "Duluth", "Hibbing"],
    answer: "Saint Paul",
  },
  {
    question: "Florida",
    choices: ["Tallahassee", "Jacksonville", "Miami", "Tampa"],
    answer: "Tallahassee",
  },
  {
    question: "Kentucky",
    choices: ["Louisville", "Bowling Green", "Lexington", "Frankfort"],
    answer: "Frankfort",
  },
  {
    question: "Tennessee",
    choices: ["Memphis", "Knoxville", "Nashville", "Chattanooga"],
    answer: "Nashville",
  },
];
var questionIndex = 0;
var secondsLeft = 20;
var timerInterval;
var displayQuestion = document.getElementById("question");
var displayAnswer1 = document.getElementById("answer-1");
var displayAnswer2 = document.getElementById("answer-2");
var displayAnswer3 = document.getElementById("answer-3");
var displayAnswer4 = document.getElementById("answer-4");
var resultEl = document.getElementById("answer-result");
var scoresPage = document.querySelector("#scores-page");
var highScoresEl = document.querySelector(".scores");
var scoresListEl = document.querySelector("#scores-list");
submitBtn.textContent = "Submit";
var userInitials = document.querySelector("#user-info");
var userScore = document.querySelector("#user-score");
var msgDiv = document.querySelector("#msg");
msgDiv.style.display = "none";
var highscore = JSON.parse(localStorage.getItem("highscores")) || [];
var clearScores = document.querySelector(".clear");
// Functions
function setTime() {
  timeEl.textContent = secondsLeft;
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      quizEl.style.display = "none";
      timeEl.style.display = "none";
      endEl.style.display = null;
    }
  }, 1000);
};

function quizDisplay() {
  displayQuestion.textContent = questionArr[questionIndex].question;
  displayAnswer1.textContent = questionArr[questionIndex].choices[0];
  displayAnswer2.textContent = questionArr[questionIndex].choices[1];
  displayAnswer3.textContent = questionArr[questionIndex].choices[2];
  displayAnswer4.textContent = questionArr[questionIndex].choices[3];
  displayAnswer1.setAttribute("value", questionArr[questionIndex].choices[0]);
  displayAnswer2.setAttribute("value", questionArr[questionIndex].choices[1]);
  displayAnswer3.setAttribute("value", questionArr[questionIndex].choices[2]);
  displayAnswer4.setAttribute("value", questionArr[questionIndex].choices[3]);
};

function start() {
  quizEl.style.display = null;
  startEl.style.display = "none";
  endEl.style.display = "none";
  timeEl.style.display = null;
  resultEl.style.display = "none";
  setTime();
  quizDisplay();
};

function buttonClick(event) {
  var element = event.target.value;
  console.log(element);
  if (element === questionArr[questionIndex].answer) {
    resultEl.style.display = null;
    resultEl.textContent = "Correct!";
    quizScore += 5;
    // console.log('correct');
  } else {
    secondsLeft -= 5;
    timeEl.textContent = secondsLeft;
    resultEl.style.display = null;
    resultEl.textContent = "False";
  };
  questionIndex++;
  if (questionIndex !== 10) {
    quizDisplay();
    // console.log(questionIndex);
    // console.log('User selected answer');
  } else {
    endEl.style.display = null;
    startEl.style.display = "none";
    quizEl.style.display = "none";
    timeEl.style.display = "none";
    console.log(quizScore);
    clearInterval(timerInterval);
  };
};

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
};

highscoreIndex = 0
function renderHighscore() {
  scoresListEl.classList.remove('hide')
  for (let i = 0; i < highscore.length; i++) {
    // create the li
    var li = document.createElement("li");
    // add content to the li
    li.textContent = highscore[highscoreIndex].name.toUpperCase() +  ': ' + highscore[highscoreIndex].score;
    // append the li to scoresListEl
    highscoreIndex++

    scoresListEl.append(li);
  };
};

function displayScore() {
  // var addScore = document.createElement(newScore)
  var userObj = {
    name: userInitials.value,
    score: quizScore,
  };
  if (userObj.name !== "") {
    highscore.push(userObj);
    localStorage.setItem("highscores", JSON.stringify(highscore));
  };
  renderHighscore();
};

function submit() {
  var userInfo = document.querySelector("#user-info").value;
  if (userInfo === "") {
    msgDiv.style.display = null;
    displayMessage("error", "Please Enter Initials!");
  } else {
    quizEl.style.display = "none";
    startEl.style.display = "none";
    endEl.style.display = "none";
    highScoresEl.style.display = null;
    timeEl.style.display = "none";
    displayScore();
  };
};  

function clearScoreList() {
  localStorage.clear();
  scoresListEl.style.display = "none";
};

function scores() {
  quizEl.style.display = "none";
  startEl.style.display = "none";
  endEl.style.display = "none";
  highScoresEl.style.display = null;
  timeEl.style.display = "none";
  renderHighscore();
};

function restart() {
  startEl.style.display = null;
  highScoresEl.style.display = "none";
  secondsLeft = 20
  questionIndex = 0;
  quizScore = 0;
};
// event listeners
startBtn.addEventListener("click", start);
btnAns1.addEventListener("click", buttonClick);
btnAns2.addEventListener("click", buttonClick);
btnAns3.addEventListener("click", buttonClick);
btnAns4.addEventListener("click", buttonClick);
submitBtn.addEventListener("click", submit);
scoresPage.addEventListener("click", scores);
playAgain.addEventListener("click", restart);
clearScores.addEventListener("click", clearScoreList);