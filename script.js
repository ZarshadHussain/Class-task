let score = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["KPK", "PUNJAB", "SINDH", "GILGIT"],
        correctAnswer: "PUNJAB"
    },
    {
        question: "What is the PowerFull Country?",
        choices: ["United State", "United Kingdom", "Pakistan", "India"],
        correctAnswer: "United State"
    },
    {
        question: "Which one is the best University in Peshawar ?",
        choices: ["Iqra University", "Cecos University", "Peshawar University", "Islamia University"],
        correctAnswer: "Peshawar University"
    },
    {
        question: "Add 3 + 5 =",
        choices: ["9", "10", "7", "8"],
        correctAnswer: "8"
    },
    
    {
        question: "What is the smallest prime number?",
        choices: ["1", "2", "3", "5"],
        correctAnswer: "2"
    }
];
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const buttons = document.querySelectorAll('.choices button');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    buttons.forEach((button, index) => {
        button.textContent = `${String.fromCharCode(65 + index)}. ${currentQuestion.choices[index]}`;
        button.onclick = function() {
            checkAnswer(currentQuestion.choices[index]);
        };
        button.onmouseover = function() {
            button.style.backgroundColor = "#f0f0f0";
        };
        button.onmouseout = function() {
            button.style.backgroundColor = "#f9f9f9";
        };
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('score').textContent = "Score: " + score;
        alert("Correct!");
    } else {
        alert("Try Again!");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed! Your final score is: " + score);
        // Optionally, reset the quiz or provide a way to restart
    }
}

function handleKeyDown(event) {
    const key = event.key;
    const buttons = document.querySelectorAll('.choices button');

    if (key >= 1 && key <= 4) {
        const buttonIndex = key - 1;
        buttons[buttonIndex].click();
    }
}

document.querySelector('.next-question').addEventListener('click', nextQuestion);

window.onload = function() {
    loadQuestion();
    document.addEventListener('keydown', handleKeyDown);
};