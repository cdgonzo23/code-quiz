var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('#answer')
var submitBtn = document.querySelector('.submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var timeEl = document.querySelector('.timer');
var nextQuestion = document.querySelector('.selection');
var playAgain = document.querySelector('.restart')
var userScore = 0;
// var userInfo = 
var questionArr = [
    {
        question: 'Delaware',
        choices: ['Wilmington', 'Dover', 'Milford', 'Georgetown'],
        answer: 'Dover', 
    },
    {
        question: 'Arizona',
        choices: ['Scottsdale', 'Tempe', 'Phoenix', 'Tuscon'],
        answer: 'Phoenix',
    },
    {
        question: 'Illinois',
        choices: ['Chicago', 'Springfield', 'Normal', 'Peoria'],
        answer: 'Springfield',
    },
    {
        question: 'Oregon',
        choices: ['Salem', 'Portland', 'Eugene', 'Corvallis'],
        answer: 'Salem',
    },
    {
        question: 'Michigan',
        choices: ['Detroit', 'Lansing', 'Grand Rapids', 'Ann Arbor'],
        answer: 'Lansing',
    },
    {
        question: 'Mississippi',
        choices: ['Tupelo', 'Oxford', 'Jackson', 'Biloxi'],
        answer: 'Jackson',
    },
    {
        question: 'Minnesota',
        choices: ['Saint Paul', 'Minneapolis', 'Duluth', 'Hibbing'],
        answer: 'Saint Paul',
    },
    {
        question: 'Florida',
        choices: ['Tallahassee', 'Jacksonville', 'Miami', 'Tampa'],
        answer: 'Tallahassee',
    },
    {
        question: 'Kentucky',
        choices: ['Louisville', 'Bowling Green', 'Lexington', 'Frankfort'],
        answer: 'Frankfort',
    },
    {
        question: 'Tennessee',
        choices: ['Memphis', 'Knoxville', 'Nashville', 'Chattanooga'],
        answer: 'Nashville',
    },
];


startBtn.addEventListener('click', function() {
    quizEl.style.display = null;
    startEl.style.display = "none";
    endEl.style.display = "none";

    var displayQuestion = document.getElementById('question');
    var displayAnswer1 = document.getElementById('answer-1');
    var displayAnswer2 = document.getElementById('answer-2');
    var displayAnswer3 = document.getElementById('answer-3');
    var displayAnswer4 = document.getElementById('answer-4');
    var resultEl = document.getElementById('answer-result');

    resultEl.style.display = "none"

    var questionIndex = 0;

    function quizDisplay() {
        displayQuestion.textContent = questionArr[questionIndex].question;
        displayAnswer1.textContent = questionArr[questionIndex].choices[0];
        displayAnswer2.textContent = questionArr[questionIndex].choices[1];
        displayAnswer3.textContent = questionArr[questionIndex].choices[2];
        displayAnswer4.textContent = questionArr[questionIndex].choices[3];
    };

    quizDisplay()
    
    nextQuestion.addEventListener('click', function(event) {
        questionIndex++
        var element = event.target;
        if (element.matches(questionArr[questionIndex].answer)) {
            resultEl.style.display = null;
            resultEl.textContent = 'correct'
            userScore += 5;
        };
        if (questionIndex !== 10) {
            quizDisplay()
            // console.log(questionIndex);
            // console.log('User selected answer');
        }
        else {
            endEl.style.display = null;
            startEl.style.display = 'none';
            quizEl.style.display = 'none'
            console.log(userScore * 2);
        };
    });
});
            // tell conditional what user selected questionArr[questionIndex].answer and check it matches the answer specified in question object

var highScoresEl = document.querySelector('.scores')
var submitScore = document.querySelector('.submit')
submitScore.textContent = 'Submit';

submitBtn.addEventListener('click', function() {
    quizEl.style.display = "none";
    startEl.style.display = "none";
    endEl.style.display = "none";
    highScoresEl.style = null;
});

var scoresPage = document.querySelector('#scores-page');

scoresPage.addEventListener('click', function() {
    quizEl.style.display = "none";
    startEl.style.display = "none";
    endEl.style.display = "none";
    highScoresEl.style = null;
});

playAgain.addEventListener('click', function(){
    quizEl.style.display = "none";
    startEl.style.display = null;
    endEl.style.display = "none";
    highScoresEl.style = "none";
});