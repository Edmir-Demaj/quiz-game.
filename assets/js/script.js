// Wait for the DOM finishing load before starting the game.
document.addEventListener("DOMContentLoaded", function () {
    // hidde info box on DOM Load
    document.getElementById("rules").style.display = "none";
    let info = document.getElementById("info");
    info.addEventListener("click", showInfoBox);

    let close = document.getElementById("closeInfo");
    close.addEventListener("click", closeInfoBox);

    // hide user details form
    document.getElementById("user").style.display = "none";
    let user = document.getElementById("start");
    user.addEventListener("click", getName);

    // hide game box
    document.getElementById("questionsBox").style.display = "none";
    let openGame = document.getElementById("user");
    openGame.addEventListener("submit", startGame);




});


/** showes the info & rules box after click "How to play game?" */
function showInfoBox() {
    document.getElementById("rules").style.display = "block";
}

/** hides the info & rules box after click "Understand!*/
function closeInfoBox() {
    document.getElementById("rules").style.display = "none";
}

/** shows user details form after click "Start Game" */
function getName() {
    document.getElementById("user").style.display = "block";
    document.getElementById("rules").style.display = "none";
}

/** this function shows game box */
function startGame(event) {

    event.preventDefault();
    // get users name and assing to game
    document.getElementById("name").textContent = document.getElementById("userDetails").value;
    // shows questions box
    document.getElementById("questionsBox").style.display = "block";

    // call function showQuestions to show question number 1
    showQuestions(0);

}




/** this function get questions and functions from the array questions */
function showQuestions(index) {
    const questionText = document.getElementById("questionText");
    const optionsText = document.getElementById("options");


    let newQuestions = questions[index].numb + "." + " " + questions[index].question;
    let newOptions = '<div class="option">' + questions[index].alternatives[0] + '</div>' + '<div class="option">' + questions[index].alternatives[1] + '</div>' + '<div class="option">' + questions[index].alternatives[2] + '</div>' + '<div class="option">' + questions[index].alternatives[3] + '</div>';



    questionText.innerHTML = newQuestions;
    optionsText.innerHTML = newOptions;
}

// an array that will contain all questions and answers of game.

const questions = [{
        numb: 1,
        question: "What company is also the name of one of the longest rivers in the world?",
        answer: "Amazon",
        alternatives: ["Ebay", "Twitter", "Amazon", "Google"]
    },
    {
        numb: 2,
        question: "What is the capital of Norway?",
        answer: "Oslo",
        alternatives: ["Tromso", "Oslo", "Alesund", "Trondheim"]
    },
    {
        numb: 3,
        question: "Where is Babylon remain located?",
        answer: "Iran",
        alternatives: ["Iran", "Iraq", "Jeruzalem", "Palestina"]
    },
    {
        numb: 4,
        question: "Elon Musk is the CEO of which global automotive brand?",
        answer: "Tesla",
        alternatives: ["Audi", "Toyota", "Lotus", "Tesla"]
    },
    {
        numb: 5,
        question: "In which state was former US President Barack Obama born?",
        answer: "Hawaii",
        alternatives: ["Washington", "Haiti", "Michigan", "Hawaii"]
    },
    {
        numb: 6,
        question: "What is the currency of Denmark?",
        answer: "Krone",
        alternatives: ["Krone", "Euro", "Dinar", "Paund"]
    },
    {
        numb: 7,
        question: "Which of the characters is not Marvel?",
        answer: "Batman",
        alternatives: ["Hulk", "Batman", "Spider-Man", "Thor"]
    },
    {
        numb: 8,
        question: "How many times has England won the men's football World Cup?",
        answer: "1",
        alternatives: ["0", "2", "1", "4"]
    },
    {
        numb: 9,
        question: "Gouda is a popular cheese originating from which country?",
        answer: "Netherlands",
        alternatives: ["France", "Netherlands", "Italy", "Belgium"]
    },
    {
        numb: 10,
        question: "How many planets are in our solar system?",
        answer: "8",
        alternatives: ["12", "8", "9", "6"]
    },
]