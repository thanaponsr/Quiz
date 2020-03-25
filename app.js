const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex, selectedQuestions, newQuestions;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {

  startButton.classList.add('hide');
  randomQuestions();
  shuffledQuestions = newQuestions;
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
  console.log (shuffledQuestions);
};

function randomQuestions() {
  newQuestions = [];
  let i = 0;
  while ( i <= 4) {
    selectedQuestions = question[Math.floor(Math.random()*question.length)];
    if (newQuestions.includes(selectedQuestions)) {
      selectedQuestions = question[Math.floor(Math.random()*question.length)];  
    } else {
      newQuestions.push(selectedQuestions);
    }
    i++;
  };
  return newQuestions;
};

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
  questionElement.innerText = shuffledQuestions[currentQuestionIndex].question;
  shuffledQuestions[currentQuestionIndex].answers.forEach(ans => {
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
  /*if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide');
  } else{
    startButton.classList.remove('hide');
  }*/
  
};

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct && shuffledQuestions.length > currentQuestionIndex + 1) {
    element.classList.add('correct');
    nextButton.classList.remove('hide');
  } else if (correct && shuffledQuestions.length == currentQuestionIndex + 1) {
    element.classList.add('correct');
    startButton.classList.remove('hide');
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

  {
    question: 'LESS',
    answers: [
      {choice: 'little.jpg', correct: 'false'},
      {choice: 'decrease.jpg', correct: 'true'},
      {choice: 'increase.jpg', correct: 'false'}
    ]
  },

  {
    question: 'TEA',
    answers: [
      {choice: 'hotCoffee.jpg', correct: 'false'},
      {choice: 'tea.jpg', correct: 'true'},
      {choice: 'water.jpeg', correct: 'false'}
    ]
  },
    
  {
    question: 'CHANGES',
    answers: [
      {choice: 'priceTag.jpg', correct: 'false'},
      {choice: 'ice.jpg', correct: 'false'},
      {choice: 'coins.jpg', correct: 'true'}
    ]
  },
  
  {
    question: 'HOW MUCH',
    answers: [
      {choice: 'what.jpg', correct: 'false'},
      {choice: 'dontKnow.jpg', correct: 'false'},
      {choice: 'howMuch.jpg', correct: 'true'}
    ] 
  },
  
  {
    question: 'ต้องการ',
    answers: [
      {choice: 'wouldLikeEng.jpg', correct: 'true'},
      {choice: 'howMuchEng.jpg', correct: 'false'},
      {choice: 'whereEng.jpg', correct: 'false'}
    ]    
  },

  {
    question: 'นิดเดียว',
    answers: [
      {choice: 'moreEng.jpg', correct: 'false'},
      {choice: 'littleEng.jpg', correct: 'true'},
      {choice: 'muchEng.jpg', correct: 'false'}
    ]
  },
  
  {
    question: 'ICED COFFEE',
    answers: [
      {choice: 'hotCoffee.jpg', correct:'false'},
      {choice: 'priceTag.jpg', correct: 'false'},
      {choice: 'icedCoffee.jpg', correct: 'true'}
    ]
  },
  
  {
    question: 'WATER',
    answers: [
      {choice: 'water.jpeg', correct: 'true'},
      {choice: 'tea.jpg', correct: 'false'},
      {choice: 'ice.jpg', correct: 'false'}
    ]
  },

  {
    question: 'MORE',
    answers: [
      {choice: 'little.jpg', correct: 'false'},
      {choice: 'increase.jpg', correct: 'true'},
      {choice: 'decrease.jpg', correct: 'false'}
    ]
  },
  
  {
    question: 'หวาน',
    answers: [
      {choice: 'sweetEng.jpg', correct: 'true'},
      {choice: 'bitterEng.jpg', correct: 'false'},
      {choice: 'smallEng.jpg', correct: 'false'}
    ]    
  }
];
  
  