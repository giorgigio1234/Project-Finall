const questions = [
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            {text: "A) Mount Kilimanjaro", correct: false},
            {text: "B) Mount Everest", correct: true},
            {text: "C) Mount McKinley", correct: false},
            {text: "D) Mount Fuji", correct: false},
        ]
    },
    {
        question: "Who is credited with the invention of the telephone?",
        answers: [
            {text: "A) Alexander Graham Bell", correct: true},
            {text: "B) Thomas Edison", correct: false},
            {text: "C) Nikola Tesla", correct: false},
            {text: "D) Guglielmo Marconi", correct: false},
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            {text: "A) Sydney", correct: false},
            {text: "B) Melbourne", correct: false},
            {text: "C) Canberra", correct: true},
            {text: "D) Brisbane", correct: false},
        ] 
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "A) Jupiter", correct: false},
            {text: "B) Mars", correct: true},
            {text: "C) Venus", correct: false},
            {text: "D) Saturn", correct: false},
        ] 
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "A) Vincent van Gogh", correct: false},
            {text: "B) Pablo Picasso", correct: false},
            {text: "C) Leonardo da Vinci", correct: true},
            {text: "D) Michelangelo Buonarroti", correct: false},
        ] 
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: [
            {text: "A) Neil Armstrong", correct: true},
            {text: "B) Buzz Aldrin", correct: false},
            {text: "C) Yuri Gagarin", correct: false},
            {text: "D) John Glenn", correct: false},
        ] 
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            {text: "A) 1909", correct: false},
            {text: "B) 1912", correct: true},
            {text: "C) 1921", correct: false},
            {text: "D) 1933", correct: false},
        ] 
    }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-box")
const nextbutton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestionIndex.
    question;

    currentQuestionIndex.answers.forEach(answers => {})
}
