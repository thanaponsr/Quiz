import allQuestions from 'questions';

selectQuestion() {
    document.querySelector('.btn-new').addEventListener('click', function() {
        if(quizStart) {
            //1. Random question number
            let questionsList = [];
            for ( i < 5) {
                const question;
                question = Math.floor(Math.random()*15) + 1;
                questionsList.push(question)
            }
        }
    }
};

displayQuestion();