

var myQuestions = [
    {
        question: "OULHIBOUVIT",
        answers: {
            a: 'Heiiiin?',
            b: 'Dans un arbre?',
            c: 'sbradaravdjan'
        },
        correctAnswer: 'b'
    }
];
let pute=0;
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var spermatoto = document.querySelector(".spermatoto");
var girl = document.querySelector(".girl");
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);



function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
                        submitButton.innerHTML= "BRAVO MAGGLE";
                        quizContainer.style.opacity= "0"
                        girl.style.opacity = "1";
                        girl.style.transform = "translateY(-160px)";
                        girl.style.transition = "all 1s"

            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
                        submitButton.innerHTML= "MERCI QUAND MEME D'AVOIR PARTICIPE BOLOSS!";
                        quizContainer.style.opacity= "0"
                        spermatoto.style.opacity = "1";
                        spermatoto.style.transform = "translateY(-200px)";
                        spermatoto.style.transition = "all 3s"
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.addEventListener(
      'click',
        function(){
        showResults(questions, quizContainer, resultsContainer);
        // Ca c'est mon rappel à l'image

        }
      )

    }
