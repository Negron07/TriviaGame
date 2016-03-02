// below are the questions which I made into an array/object



var questions = [{
    question: "1. What is the largest city in terms of population in the North?",
    choices: ["White Harbor", "Winterfell", "Torren's Square", "Dreatfort"],
    correctAnswer: 0
}, {
    question: "2. Which group of 5 declared themselves kings during the War of the Five Kings? ",
    choices: ["Renly Baratheon, Robert Baratheon, Ned Stark, Mace Tyrell, Balon Greyjoy", "Mance Rayder, Rob Stark, Stannis Baratheon, Renly Baratheon, Joffery Baratheon", "Rob Stark, Stannis Baratheon, Balon Greyjoy, Joffery Baratheon, Renly Baratheon", "Stannis Baratheon, Rob Stark, Balon Greyjoy, Mance Rayder, Joffery Baratheon"],
    correctAnswer: 2
}, {
    question: "3. Which of the following Great House does not have the title of Warden of the...",
    choices: ["Lannister", "Arryn", "Stark", "Tyrell", "Martell"],
    correctAnswer: 4
}, {
    question: "4. Aegon I Targaryen conquered all of the kingdoms except",
    choices: ["Riverlands", "Stormlands", "Dorne", "The Reach"],
    correctAnswer: 2
}, {
    question: "5. What location is not considered the seat of power for their respected kingdom?",
    choices: ["Sunspear", "OldTown", "Winterfell", "Pyke"],
    correctAnswer: 1
},{
    question: "6. Which diety is not considered a part of The Faith of the Seven?",
    choices: ["Rholler", "Stranger", "Crone", "Maiden"],
    correctAnswer: 0
},{
    question: "7. Which great house words are, Ours is the Fury",
    choices: ["Lannister", "Baratheon", "Tully", "Arryn"],
    correctAnswer: 1
},{
    question: "8. The bear sigil is on the coat of arms of which Northen house?",
    choices: ["Starks", "Reeds", "Boltons", "Mormont"],
    correctAnswer: 3
},{
    question: "9. What famous sword is not made up of Valaryian steel?",
    choices: ["Ice", "Dawn", "Oathkeeper", "Longclaw"],
    correctAnswer: 1
},{
    question: "10. The Red Wedding was orchestrated by which three houses?",
    choices: ["Freys, Lannisters, Greyjoys", "Lannister, Boltons, Umbers", "Botlons, Freys, Tullys", "Freys, Lannisters, Boltons"],
    correctAnswer: 3

}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".continue").on("click", function () {
        if (!quizOver) {

        //radio button is used to select one of the following selections from a list
            value = $("input[type='radio']:checked").val();
        
            if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
             currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
    
                    $(document).find(".continue").text("Play the Game of Thrones?");
                    $(document).find(".correct").text("Correct Answers = 1. White Harbor 2.Rob Stark, Stannis Baratheon, Balon Greyjoy, Joffery Baratheon, Renly Baratheon, 3. Martell, 4. Dorne, 5. OldTown, 6. Rholler, 7. Baratheon, 8. Mormont, 9. Dawn, 10. Freys, Lannisters, Boltons");
                    $(document).find(".correctAnswers").text("")
                    quizOver = true;
                }
            

        } else { 
            quizOver = false;
            $(document).find(".continue").text("");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// not sure if this is causing my problems

function displayCurrentQuestion() {

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".container > .question");
    var choiceList = $(document).find(".container > .list");
    var numChoices = questions[currentQuestion].choices.length;

    
    $(questionClass).text(question);
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".container > .result").text("Results: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".container > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}

function hideCorrectAnswers(){
    $(document).find(".correct").hide();
}