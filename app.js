//Questions list
let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15;
q1 = {
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
    question: 'Sugar',
    answer: {
        1: 'salt.jpg',
        2: 'sugar.jpg',
        3: 'water.jpg'
    },
    correctAnswer: 2
};

q4 = {
    question: 'HOT',
    answer: {
        1: 'hot.jpg',
        2: 'more.jpg',
        3: 'sweet.jpg'
    },
    correctAnswer: 1
};

q5 = {
    question: 'ICE',
    answer: {
        1: 'ice.jpg',
        2: 'water.jpg',
        3: 'salt.jpg'
    },
    correctAnswer: 1
};

q6 = {
    question: 'LESS',
    answer: {
        1: 'little.jpg',
        2: 'decrease.jpg',
        3: 'increase.jpg'
    },
    correctAnswer: 2
};

q7 = {
    question: 'TEA',
    answer: {
        1: 'hotCoffee.jpg',
        2: 'tea.jpg',
        3: 'water.jpg'
    },
    correctAnswer: 2
};

q8 = {
    question: 'CHANGES',
    answer: {
        1: 'priceTag.jpg',
        2: 'ice.jpg',
        3: 'coins.jpg'
    },
    correctAnswer: 3
};

q9 = {
    question: 'HOW MUCH',
    answer: {
        1: 'what.jpg',
        2: 'dontKnow.jpg',
        3: 'howMuch.jpg'
    },
    correctAnswer: 3
};

q10 = {
    question: 'ต้องการ',
    answer: {
        1: 'wouldLikeEng.jpg',
        2: 'howMuchEng.jpg',
        3: 'whereEng.jpg'
    },
    correctAnswer: 1
};

q11= {
    question: 'นิดเดียว',
    answer: {
        1: 'moreEng.jpg',
        2: 'littleEng.jpg',
        3: 'muchEng.jpg'
    },
    correctAnswer: 2
};

q12 = {
    question: 'ICED COFFEE',
    answer: {
        1: 'hotCoffee.jpg',
        2: 'priceTag.jpg',
        3: 'icedCoffee.jpg'
        },
    correctAnswer: 3
};

q13 = {
    question: 'WATER',
    answer: {
        1: 'water.jpg',
        2: 'tea.jpg',
        3: 'ice.jpg'
    },
    correctAnswer: 1
};

q14 = {
    question: 'MORE',
    answer: {
        1: 'little.jpg',
        2: 'increase.jpg',
        3: 'decrease.jpg'
    },
    correctAnswer: 2
};

q15 = {
    question: 'หวาน',
    answer: {
        1: 'sweetEng.jpg',
        2: 'bitterEng.jpg',
        3: 'smallEng.jpg'
    },
    correctAnswer: 1
};

// Select question for quiz
function randomQuestion() {
    const questions = [1,2,3,4,5];
    let newQuestions = [];
    let selectedQuestions = [];
    questions.forEach(function(question, i) {
        question = Math.floor(Math.random()*14) + 1;
        if (question in questions) {
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
    return console.log(selectedQuestions);
};


randomQuestion();
