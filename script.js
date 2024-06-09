const questions = [
    {
        question: "What is the tallest mountain in the world?",
        answer: [
            {text: "A) Mount Kilimanjaro", correct: false},
            {text: "B) Mount Everest", correct: true},
            {text: "C) Mount McKinley", correct: false},
            {text: "D) Mount Fuji", correct: false},
        ]
    },
    {
        question: "Who is credited with the invention of the telephone?",
        answer: [
            {text: "A) Alexander Graham Bell", correct: true},
            {text: "B) Thomas Edison", correct: false},
            {text: "C) Nikola Tesla", correct: false},
            {text: "D) Guglielmo Marconi", correct: false},
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answer: [
            {text: "A) Sydney", correct: false},
            {text: "B) Melbourne", correct: false},
            {text: "C) Canberra", correct: true},
            {text: "D) Brisbane", correct: false},
        ] 
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            {text: "A) Jupiter", correct: false},
            {text: "B) Mars", correct: true},
            {text: "C) Venus", correct: false},
            {text: "D) Saturn", correct: false},
        ] 
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: [
            {text: "A) Vincent van Gogh", correct: false},
            {text: "B) Pablo Picasso", correct: false},
            {text: "C) Leonardo da Vinci", correct: true},
            {text: "D) Michelangelo Buonarroti", correct: false},
        ] 
    },
    {
        question: "Who was the first man to walk on the moon?",
        answer: [
            {text: "A) Neil Armstrong", correct: true},
            {text: "B) Buzz Aldrin", correct: false},
            {text: "C) Yuri Gagarin", correct: false},
            {text: "D) John Glenn", correct: false},
        ] 
    },
    {
        question: "In which year did the Titanic sink?",
        answer: [
            {text: "A) 1909", correct: false},
            {text: "B) 1912", correct: true},
            {text: "C) 1921", correct: false},
            {text: "D) 1933", correct: false},
        ] 
    }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-box")
const nextbutton = document.getElementById("Next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });
    
    

}


function resetState(){
    nextbutton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";

}


function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

