// Global variables
const quizContainer = document.querySelector('.quiz-container');
const choicesGrid = document.querySelector('.choices-grid');
const startContainer = document.querySelector('.start-container');
const startBtn = document.querySelector('.start-button');
const nextBtn = document.querySelector('.next-button');
const question = document.querySelector('.question');
let questionIndex = 0;
let score = 0;

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', function() {
    questionIndex++;
    clearPrevQuestion();
    displayQuestions();
})

const allQuestions = [
    {question: 'What is a baby kangaroo called?',
     choices: [{choice: 'Donkey'}, {choice: 'Gary'}, {choice: 'Joey'}, {choice:'Ricky'}],
     correctAnswer: 2},

    {question: 'What is the closest planet to the Sun?',
     choices: [{choice:'Mercury'}, {choice: 'Earth'}, {choice: 'Jupiter'}, {choice: 'Uranus'}],
     correctAnswer: 0},
    
    {question: 'How many letters are in the English alphabet?',
     choices: [{choice: '20'}, {choice: '22'},{choice: '24'}, {choice: '26'}],
     correctAnswer: 3},

    {question: 'What is the name of the tallest mountain on Earth?',
     choices: [{choice: 'Mt.Everest'}, {choice: 'Mt.Fuji'}, {choice: 'Mt.Kilimanjaro'}, {choice: 'Mt.Olympus'}],
     correctAnswer: 0},

    {question: 'How many months have 31 days?',
     choices: [{choice: '8'}, {choice: '6'}, {choice: '9'}, {choice: '7'}],
     correctAnswer: 3},

    {question: 'Where do polar bears live?',
     choices: [{choice: 'Poland'}, {choice: 'The Arctic'}, {choice: 'Polar Planet'}, {choice: 'America'}],
     correctAnswer: 1},

    {question: 'How many continents are there?',
     choices: [{choice: '5'}, {choice: '10'}, {choice: '8'},{choice: '7'}],
     correctAnswer: 3},

    {question: 'How many days are in a year?',
     choices: [{choice: '355'}, {choice: '365'}, {choice: '375'}, {choice: '380'}],
     correctAnswer: 1},

    {question: 'What is the name of a shape with 5 sides?',
     choices: [{choice: 'Polygon'}, {choice: 'Decagon'}, {choice: 'Octagon'}, {choice: 'Pentagon'}],
     correctAnswer: 3},

    {question: 'In which country can you find the Eiffel Tower?',
     choices: [{choice: 'Germany'}, {choice: 'Finland'}, {choice: 'France'}, {choice: 'Canada'}],
     correctAnswer: 2}
]

function startQuiz() {
    startContainer.classList.add('start-container-hidden');
    displayQuestions();
}

function clearPrevQuestion() {
    while (choicesGrid.hasChildNodes()) {
        choicesGrid.removeChild(choicesGrid.firstChild);
    }
}

function makeChoice(e) {
    const userChoice = e.currentTarget;
    const choice = Array.from(choicesGrid.children);
    const correctChoice = allQuestions[questionIndex].correctAnswer;
           for (let choices of choicesGrid.children) {
                choices.classList.remove('choice-button-selected');
           }
                userChoice.classList.toggle('choice-button-selected');
                 if (choice.indexOf(userChoice) === correctChoice && userChoice.classList.contains('choice-button-selected')) {
                      score++;
                 }   
                    console.log(userChoice);
                    console.log(score);
}

function displayScore() {
    const scoreDisplay = document.querySelector('.score-display');
    choicesGrid.appendChild(scoreDisplay);
    scoreDisplay.textContent = `You scored ${score} out of 10!`;
}

function displayQuestions() {
    quizContainer.classList.add('quiz-container-visible');
    if (questionIndex <= 9) {
    allQuestions[questionIndex].choices.forEach(function(choices) {
        const choiceButtons = document.createElement('button');
        choiceButtons.textContent = choices.choice;
        choicesGrid.appendChild(choiceButtons);
        choiceButtons.classList.add('choice-buttons');
        choiceButtons.addEventListener('click', makeChoice);
        question.textContent = allQuestions[questionIndex].question;
    }) 
} else if (questionIndex > 9) {
    question.classList.toggle('question-hidden');
    nextBtn.classList.toggle('next-button-hidden');
    displayScore();
}
    
}



