const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

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
  questionElement.innerText = question[currentQuestionIndex].question;
  question[currentQuestionIndex].answers.forEach(ans => {
    const  button = document.createElement('img')
      button.setAttribute("src", `images/${ans.choice}`);
      button.setAttribute("width", "200");
      button.classList.add('btn');
      button.classList.add('img-fluid');
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
 
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide');
  } else{
    startButton.classList.remove('hide');
  }
  
};

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct');
    setNextQuestion();

  } else {
    element.classList.add('wrong');
    resetState();
  }
};

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const question= [
  {
    question: 'Would like',
    answers: [
      {choice: 'wouldLike.jpg', correct: 'true'},
      {choice: 'same.jpg', correct: 'false'},
      {choice: 'what.jpg', correct: 'false'}
    ]
  },
  {
    question: 'Sweet',
    answers: [
      {choice: 'salty.jpg', correct: 'false'},
      {choice: 'sour.jpg', correct: 'false'},
      {choice: 'sweet.jpg', correct: 'true'}
    ]      
  },

  {
    question: 'Sugar',
    answers:[
      {choice: 'salt.jpg', correct: 'false'},
      {choice: 'sugar.jpg', correct: 'true'},
      {choice: 'water.jpeg', correct: 'false'}
    ] 
  },

  {
    question: 'HOT',
    answers: [
      {choice: 'hot.jpg', correct: 'true'},
      {choice: 'increase.jpg', correct: 'false'},
      {choice: 'sweet.jpg', correct: 'false'}
    ]  
  },

  {
    question: 'ICE',
    answers: [
      {choice: 'ice.jpg', correct: 'true'},
      {choice: 'water.jpeg', correct: 'false'},
      {choice: 'salt.jpg', correct: 'fase'}
    ]
  },

];
  
  