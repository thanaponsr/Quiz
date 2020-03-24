const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)

function startGame() {

  startButton.classList.add('hide');
  shuffledQuestions = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide');
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
  questionElement.innerText = question.question;
  for (const answer of question.answers) {
    const  button = document.createElement('img')
      button.setAttribute("src", "./images/`${answer}`");
      button.setAttribute("width", "200");
    button.classList.add('btn');
    button.classList.add('img-fluid');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);

  }
 
    //button.classList.add('btn')
    //if (answer.correct) {
      //button.dataset.correct = answer.correct
    //}
    //button.addEventListener('click', selectAnswer)
    //answerButtonsElement.appendChild(button)
 /* const newAns =`
    <button class="btn"><img src="./images/${question[0].answers[0].choice}" class="img-fluid" width="200"></button>
    <button class="btn"><img src="./images/${question[0].answers[1].choice}" class="img-fluid" width="200"></button>
    <button class="btn"><img src="./images/${question[0].answers[2].choice}" class="img-fluid" width="200"></button>
  `
  answerButtonsElement.insertAdjacentHTML("afterbegin", newAns);*/
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }

}

function selectAnswer() {

}

const question= [
  {
    question: 'Would like',
    answers: [
      {choice: 'wouldLike.jpg', correct: true},
      {choice: 'same.jpg', correct: false},
      {choice: 'what.jpg', correct: false}
    ]
}];
  
  