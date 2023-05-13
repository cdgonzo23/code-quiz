var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('#answer')
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var timeEl = document.querySelector('.timer');
var nextQuestion = document.querySelector('.selection');
// var userInfo = 
var questionArr = {
    question: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7', 'Question 8', 'Question 9',   'Question 10'],
    answer1: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10'],
    answer2: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '2.10'],
    answer3: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', '3.10'],
    answer4: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10'],
    };

startBtn.addEventListener('click', function() {
    quizEl.style.display = null;
    startEl.style.display = "none";
    endEl.style.display = "none";

    var displayQuestion = document.getElementById('question');
    var displayAnswer1 = document.getElementById('answer-1');
    var displayAnswer2 = document.getElementById('answer-2');
    var displayAnswer3 = document.getElementById('answer-3');
    var displayAnswer4 = document.getElementById('answer-4');

    
    displayQuestion.textContent = questionArr.question[0];
    displayAnswer1.textContent = questionArr.answer1[0];
    displayAnswer2.textContent = questionArr.answer2[0];
    displayAnswer3.textContent = questionArr.answer3[0];
    displayAnswer4.textContent = questionArr.answer4[0];

    nextQuestion.addEventListener('click', function() {
        questionArr.question.forEach(i => {
            displayQuestion.textContent = i;
        });
        for (var i = 0; i < questionArr.answer1.length; i++) {
            displayAnswer1.textContent = questionArr.answer1[i];
        };
        for (var i = 0; i < questionArr.answer2.length; i++) {
            displayAnswer2.textContent = questionArr.answer2[i];
        };
        for (var i = 0; i < questionArr.answer3.length; i++) {
            displayAnswer3.textContent = questionArr.answer3[i];
        };
        for (var i = 0; i < questionArr.answer4.length; i++) {
            displayAnswer4.textContent = questionArr.answer4[i];
        };
    });
});

// answerBtn.addEventListener('click', function() {
//     quizEl.style.display = "none";
//     startEl.style.display = "none";
//     endEl.style.display = null;
// });

submitBtn.addEventListener('click', function() {
    quizEl.style.display = "none";
    startEl.style.display = null;
    endEl.style.display = "none";
});