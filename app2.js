const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)

function startGame() {

  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide');
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
  questionContainerElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

function resetState() {
  nextButton.classlist.add('hide')
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
      {text: 'wouldLike.jpg', correct: true},
      {text: 'same.jpg', correct: false},
      {text: 'what.jpg', correct: false}
    ]
}]

/*
{
    questionNumber: 2,
    question: 'Sweet',
    answers: {
        a: 'salty.jpg',
        b: 'sour.jpg',
        c: 'sweet.jpg'
    },
    correctAnswer: "c"
},

{
    questionNumber: 3,
    question: 'Sugar',
    answers: {
        a: 'salt.jpg',
        b: 'sugar.jpg',
        c: 'water.jpeg'
    },
    correctAnswer: "b"
},

{
    questionNumber: 4,
    question: 'HOT',
    answers: {
        a: 'hot.jpg',
        b: 'more.jpg',
        c: 'sweet.jpg'
    },
    correctAnswer: "a"
},

{
    questionNumber: 5,
    question: 'ICE',
    answers: {
        a: 'ice.jpg',
        b: 'water.jpeg',
        c: 'salt.jpg'
    },
    correctAnswer: "a"
},

{
    questionNumber: 6,
    question: 'LESS',
    answers: {
        a: 'little.jpg',
        b: 'decrease.jpg',
        c: 'increase.jpg'
    },
    correctAnswer: "b"
},

{
    questionNumber: 7,
    question: 'TEA',
    answers: {
        a: 'hotCoffee.jpg',
        b: 'tea.jpg',
        c: 'water.jpeg'
    },
    correctAnswer: "b"
},

{
    questionNumber: 8,
    question: 'CHANGES',
    answers: {
        a: 'priceTag.jpg',
        b: 'ice.jpg',
        c: 'coins.jpg'
    },
    correctAnswer: "c"
},

{
    questionNumber: 9,
    question: 'HOW MUCH',
    answers: {
        a: 'what.jpg',
        b: 'dontKnow.jpg',
        c: 'howMuch.jpg'
    },
    correctAnswer: "c"
},

{
    questionNumber: 10,
    question: 'ต้องการ',
    answers: {
        a: 'wouldLikeEng.jpg',
        b: 'howMuchEng.jpg',
        c: 'whereEng.jpg'
    },
    correctAnswer: "a"
},

{
    questionNumber: 11,
    question: 'นิดเดียว',
    answers: {
        a: 'moreEng.jpg',
        b: 'littleEng.jpg',
        c: 'muchEng.jpg'
    },
    correctAnswer: "b"
},

{
    questionNumber: 12,
    question: 'ICED COFFEE',
    answers: {
        a: 'hotCoffee.jpg',
        b: 'priceTag.jpg',
        c: 'icedCoffee.jpg'
    },
    correctAnswer: "c"
},

{
    questionNumber: 13,
    question: 'WATER',
    answers: {
        a: 'water.jpeg',
        b: 'tea.jpg',
        c: 'ice.jpg'
    },
    correctAnswer: "a"
},

{
    questionNumber: 14,
    question: 'MORE',
    answers: {
        a: 'little.jpg',
        b: 'increase.jpg',
        c: 'decrease.jpg'
    },
    correctAnswer: "b"
},

{
    questionNumber: 15,
    question: 'หวาน',
    answers: {
        a: 'sweetEng.jpg',
        b: 'bitterEng.jpg',
        c: 'smallEng.jpg'
    },
    correctAnswer: "a"
}

]



(function(){

    // Randome question
    /*function randomQuestion() {
        const questions = [1,2,3,4,5];
        let newQuestions = [];
        questions.forEach(function(question, i) {
          question = Math.floor(Math.random()*14) + 1;
          if (question in newQuestions) {
            question = Math.floor(Math.random()*14) + 1;
          } else {
            newQuestions.push(question);
          };
        });
        let question1, question2, question3, question4, question5;
        question1 = eval(`q${newQuestions[0]}`);
        question2 = eval(`q${newQuestions[1]}`);
        question3 = eval(`q${newQuestions[2]}`);
        question4 = eval(`q${newQuestions[3]}`);
        question5 = eval(`q${newQuestions[4]}`);
        selectedQuestions = [question1, question2, question3, question4, question5];
        return selectedQuestions;
    };
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              <img src="images/${currentQuestion.answers[letter]}" width="150">

            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15;
  q1 = {
    questionNumber: 1,
    question: 'Would like',
    answer: {
      1: 'wouldLike.jpg',
      2: 'same.jpg',
      3: 'what.jpg'
    },
    correctAnswer: 1
  };

  q2 =  {
    questionNumber: 2,
    question: 'Sweet',
    answer: {
      1: 'salty.jpg',
      2: 'sour.jpg',
      3: 'sweet.jpg'
    },
    correctAnswer: 3
  };

  q3 = {
    questionNumber: 3,
    question: 'Sugar',
    answer: {
      1: 'salt.jpg',
      2: 'sugar.jpg',
      3: 'water.jpg'
    },
    correctAnswer: 2
  };

  q4 = {
    questionNumber: 4,
    question: 'HOT',
    answer: {
      1: 'hot.jpg',
      2: 'more.jpg',
      3: 'sweet.jpg'
    },
    correctAnswer: 1
  };

  q5 = {
    questionNumber: 5,
    question: 'ICE',
    answer: {
      1: 'ice.jpg',
      2: 'water.jpg',
      3: 'salt.jpg'
    },
    correctAnswer: 1
  };

  q6 = {
    questionNumber: 6,
    question: 'LESS',
    answer: {
      1: 'little.jpg',
      2: 'decrease.jpg',
      3: 'increase.jpg'
    },
    correctAnswer: 2
  };

  q7 = {
    questionNumber: 7,
    question: 'TEA',
    answer: {
      1: 'hotCoffee.jpg',
      2: 'tea.jpg',
      3: 'water.jpg'
    },
    correctAnswer: 2
  };

  q8 = {
    questionNumber: 8,
    question: 'CHANGES',
    answer: {
      1: 'priceTag.jpg',
      2: 'ice.jpg',
      3: 'coins.jpg'
    },
    correctAnswer: 3
  };

  q9 = {
    questionNumber: 9,
    question: 'HOW MUCH',
    answer: {
      1: 'what.jpg',
      2: 'dontKnow.jpg',
      3: 'howMuch.jpg'
    },
    correctAnswer: 3
  };

  q10 = {
    questionNumber: 10,
    question: 'ต้องการ',
    answer: {
      1: 'wouldLikeEng.jpg',
      2: 'howMuchEng.jpg',
      3: 'whereEng.jpg'
    },
    correctAnswer: 1
  };

  q11= {
    questionNumber: 11,
    question: 'นิดเดียว',
    answer: {
      1: 'moreEng.jpg',
      2: 'littleEng.jpg',
      3: 'muchEng.jpg'
    },
    correctAnswer: 2
  };

  q12 = {
    questionNumber: 12,
    question: 'ICED COFFEE',
    answer: {
      1: 'hotCoffee.jpg',
      2: 'priceTag.jpg',
      3: 'icedCoffee.jpg'
    },
    correctAnswer: 3
  };

  q13 = {
    questionNumber: 13,
    question: 'WATER',
    answer: {
      1: 'water.jpg',
      2: 'tea.jpg',
      3: 'ice.jpg'
    },
    correctAnswer: 1
  };

  q14 = {
    questionNumber: 14,
    question: 'MORE',
    answer: {
      1: 'little.jpg',
      2: 'increase.jpg',
      3: 'decrease.jpg'
    },
    correctAnswer: 2
  };

  q15 = {
    questionNumber: 15,
    question: 'หวาน',
    answer: {
      1: 'sweetEng.jpg',
      2: 'bitterEng.jpg',
      3: 'smallEng.jpg'
    },
    correctAnswer: 1
  };
 const myQuestions = [

    {
        questionNumber: 1,
        question: 'Would like',
        answers: {
            a: 'wouldLike.jpg',
            b: 'same.jpg',
            c: 'what.jpg'
        },
        correctAnswer: "a"
    },

    {
        questionNumber: 2,
        question: 'Sweet',
        answers: {
            a: 'salty.jpg',
            b: 'sour.jpg',
            c: 'sweet.jpg'
        },
        correctAnswer: "c"
    },

    {
        questionNumber: 3,
        question: 'Sugar',
        answers: {
            a: 'salt.jpg',
            b: 'sugar.jpg',
            c: 'water.jpeg'
        },
        correctAnswer: "b"
    },

    {
        questionNumber: 4,
        question: 'HOT',
        answers: {
            a: 'hot.jpg',
            b: 'more.jpg',
            c: 'sweet.jpg'
        },
        correctAnswer: "a"
    },

    {
        questionNumber: 5,
        question: 'ICE',
        answers: {
            a: 'ice.jpg',
            b: 'water.jpeg',
            c: 'salt.jpg'
        },
        correctAnswer: "a"
    },

    {
        questionNumber: 6,
        question: 'LESS',
        answers: {
            a: 'little.jpg',
            b: 'decrease.jpg',
            c: 'increase.jpg'
        },
        correctAnswer: "b"
    },

    {
        questionNumber: 7,
        question: 'TEA',
        answers: {
            a: 'hotCoffee.jpg',
            b: 'tea.jpg',
            c: 'water.jpeg'
        },
        correctAnswer: "b"
    },

    {
        questionNumber: 8,
        question: 'CHANGES',
        answers: {
            a: 'priceTag.jpg',
            b: 'ice.jpg',
            c: 'coins.jpg'
        },
        correctAnswer: "c"
    },

    {
        questionNumber: 9,
        question: 'HOW MUCH',
        answers: {
            a: 'what.jpg',
            b: 'dontKnow.jpg',
            c: 'howMuch.jpg'
        },
        correctAnswer: "c"
    },

    {
        questionNumber: 10,
        question: 'ต้องการ',
        answers: {
            a: 'wouldLikeEng.jpg',
            b: 'howMuchEng.jpg',
            c: 'whereEng.jpg'
        },
        correctAnswer: "a"
    },

    {
        questionNumber: 11,
        question: 'นิดเดียว',
        answers: {
            a: 'moreEng.jpg',
            b: 'littleEng.jpg',
            c: 'muchEng.jpg'
        },
        correctAnswer: "b"
    },

    {
        questionNumber: 12,
        question: 'ICED COFFEE',
        answers: {
            a: 'hotCoffee.jpg',
            b: 'priceTag.jpg',
            c: 'icedCoffee.jpg'
        },
        correctAnswer: "c"
    },

    {
        questionNumber: 13,
        question: 'WATER',
        answers: {
            a: 'water.jpeg',
            b: 'tea.jpg',
            c: 'ice.jpg'
        },
        correctAnswer: "a"
    },

    {
        questionNumber: 14,
        question: 'MORE',
        answers: {
            a: 'little.jpg',
            b: 'increase.jpg',
            c: 'decrease.jpg'
        },
        correctAnswer: "b"
    },

    {
        questionNumber: 15,
        question: 'หวาน',
        answers: {
            a: 'sweetEng.jpg',
            b: 'bitterEng.jpg',
            c: 'smallEng.jpg'
        },
        correctAnswer: "a"
    }
  ];

  // Kick things off
  //const myQuestions = randomQuestion();
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

******/
