var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('#answer')
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var timeEl = document.querySelector('.timer');
var nextQuestion = document.querySelector('.selection');
// var userInfo = 
var questionArr = [
    {
        question: 'Question 1',
        choices: ['1.1', '2.1', '3.1', '4.1',],
        answer: '2.1', 
    },
    {
        question: 'Question 2',
        choices: ['1.2', '2.2', '3.2', '4.2',],
        answer: '3.2',
    },
    {
        question: 'Question 3',
        choices: ['1.3', '2.3', '3.3', '4.3',],
        answer: '2.3',
    },
    {
        question: 'Question 4',
        choices: ['1.4', '2.4', '3.4', '4.4',],
        answer: '1.4',
    },
    {
        question: 'Question 5',
        choices: ['1.5', '2.5', '3.5', '4.5',],
        answer: '2.5',
    },
    {
        question: 'Question 6',
        choices: ['1.6', '2.6', '3.6', '4.6',],
        answer: '3.6',
    },
    {
        question: 'Question 7',
        choices: ['1.7', '2.7', '3.7', '4.7',],
        answer: '1.7',
    },
    {
        question: 'Question 8',
        choices: ['1.8', '2.8', '3.8', '4.8',],
        answer: '1.8',
    },
    {
        question: 'Question 9',
        choices: ['1.9', '2.9', '3.9', '4.9',],
        answer: '4.9',
    },
    {
        question: 'Question 10',
        choices: ['1.10', '2.10', '3.10', '4.10',],
        answer: '3.10',
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
    var result = document.getElementById('answer-result');

    
    displayQuestion.textContent = questionArr[0].question;
    displayAnswer1.textContent = questionArr[0].choices[0];
    displayAnswer2.textContent = questionArr[0].choices[1];
    displayAnswer3.textContent = questionArr[0].choices[2];
    displayAnswer4.textContent = questionArr[0].choices[3];

    nextQuestion.addEventListener('click', function() {
        for (i = 0; i < questionArr.length; i++) {
            displayQuestion.textContent = questionArr[i].question;
            displayQuestion.textContent = questionArr[i].choices[0];
            displayQuestion.textContent = questionArr[i].choices[1];
            displayQuestion.textContent = questionArr[i].choices[2];
            displayQuestion.textContent = questionArr[i].choices[3];
            console.log(questionArr[i].question);
        };
        if (questionArr.answer) {
            result.textContent = 'Correct!'
        } else {
            result.textContent = 'False'
        }
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