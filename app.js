(function(){
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
