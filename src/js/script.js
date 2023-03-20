function openQuiz() {
    document.querySelector('.menu-start').classList.add('d-none');
    document.querySelector('.card').classList.remove('d-none');
}

function init() {
    let amount = document.querySelectorAll('.questions-amount')
    amount.forEach(e => {
        e.innerHTML = questions.length;
    })
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateToNextQuestion(question);
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndscreen() {
    audioResult.play();
    checkWhichPokal();
    document.querySelector('.card-body').classList.add('d-none');
    document.querySelector('.progress').classList.add('d-none');
    document.querySelector('.endscreen').classList.remove('d-none');
    document.querySelector('#right_answers').innerHTML = rightAnswers;
    document.querySelector('#result').classList.add('transition');
}

function updateToNextQuestion(question) {
    document.querySelector('#current-question').innerHTML = currentQuestion + 1;
    progressbar();
    document.querySelector('#question-text').innerHTML = question['question'];
    document.querySelector('#answer_1').innerHTML = question['answer_1'];
    document.querySelector('#answer_2').innerHTML = question['answer_2'];
    document.querySelector('#answer_3').innerHTML = question['answer_3'];
    document.querySelector('#answer_4').innerHTML = question['answer_4'];
}

function answer(answer) {
    let question = questions[currentQuestion];
    let answerNum = answer.slice(-1);
    let idRightAnswer = `answer_${question['right_answer']}`;
    if (rightAnswerSelected(answerNum, question)) {
        levelSuccess(answer);
    } else {
        levelFailure(answer, idRightAnswer);
    }
    document.querySelector('.question-footer button').disabled = false;
    document.querySelector('.question-footer button').classList.add('enabled');
    disableAnswerSelection();
}

function rightAnswerSelected(answer, question) {
    return answer == question['right_answer'];
}

function levelSuccess(answer) {
    document.getElementById(answer).parentNode.classList.add('bg-success');
    audioSuccess.play();
    rightAnswers++;
}

function levelFailure(answer, idRightAnswer) {
    document.getElementById(answer).parentNode.classList.add('bg-danger');
    document.getElementById(idRightAnswer).parentNode.classList.add('bg-success');
    audioFail.play();
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    document.querySelector('.question-footer button').disabled = true;
    document.querySelector('.question-footer button').classList.remove('enabled');
    enableAnswerSelection();
    resetAnswersColors();
}

function resetAnswersColors() {
    let answer = document.querySelectorAll('.answer');
    answer.forEach(e => {
        e.classList.remove('bg-success');
        e.classList.remove('bg-danger');
    })
}

function disableAnswerSelection() {
    let answer = document.querySelectorAll('.answer');
    answer.forEach(e => {
        e.setAttribute('onclick', '');
    })
}

function enableAnswerSelection() {
    let answer = document.querySelectorAll('.answer');
    for (i = 1; i < answer.length + 1; i++) {
        document.getElementById(`answer_${i}`).parentNode.setAttribute('onclick', `answer('answer_${i}')`);
    }
}

function checkWhichPokal() {
    if (rightAnswers >= 0 && rightAnswers < 6) {
        document.getElementById('result').src = './src/img/bronze.png';
    } else if (rightAnswers >= 6 && rightAnswers < 9) {
        document.getElementById('result').src = './src/img/silver.png';
    } else {
        document.getElementById('result').src = './src/img/gold.png';
    }
}

function progressbar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.querySelector('.progress-bar').innerHTML = `${percent}%`;
    document.querySelector('.progress-bar').style = `width: ${percent}%`;
}

function restart() {
    currentQuestion = 0;
    rightAnswers = 0;
    document.querySelector('.card-body').classList.remove('d-none');
    document.querySelector('.progress').classList.remove('d-none');
    document.querySelector('.endscreen').classList.add('d-none');
    document.querySelector('#result').classList.remove('transition');
    init();
}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 600) {
        document.querySelector('.main-card').classList.remove('d-none');
    }
    else {
        if (document.querySelector('.menu-start').classList.contains('d-none') == false) {
            document.querySelector('.main-card').classList.add('d-none');
        }
    }
})