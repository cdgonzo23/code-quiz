var startBtn = document.querySelector('#start-btn');
var question1El = document.querySelector('#question-1');
var question2El = document.querySelector('#question-2');
var question3El = document.querySelector('#question-3');
var question4El = document.querySelector('#question-4');
var question5El = document.querySelector('#question-5');
var question6El = document.querySelector('#question-6');
var question7El = document.querySelector('#question-7');
var question8El = document.querySelector('#question-8');
var question9El = document.querySelector('#question-9');
var question10El = document.querySelector('#question-10');
var answerBtn = document.querySelector('#answers')
var finalAnswerBtn = document.querySelector('#final-answer');
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var timeEl = document.querySelector('.timer');

startBtn.addEventListener('click', function() {
    quizEl.style.display = null;
    startEl.style.display = "none";
    endEl.style.display = "none";

    answerBtn.addEventListener('click', function() {
        question1El.style.display = "none";
        question10El.style.display = null;
    });
    
});

finalAnswerBtn.addEventListener('click', function() {
    quizEl.style.display = "none";
    startEl.style.display = "none";
    endEl.style.display = null;
});

submitBtn.addEventListener('click', function() {
    quizEl.style.display = "none";
    startEl.style.display = null;
    endEl.style.display = "none";
});