var quizData = [{
        question: 1,
        text: 'What does HTML stand for?',
        options: {
            a: 'Hyperlinks and Text Markup Language',
            b: 'Home Tool Markup Language',
            c: 'Hyper Text Markup Language',
            d: 'Hyperlinking Text Management Language',
        },
        correctAns: 'Hyper Text Markup Language',
    },
    {
        question: 2,
        text: 'Which HTML tag is used to define a paragraph?',
        options: {
            a: '<p>',
            b: '<h1>',
            c: '<para>',
        },
        correctAns: '<p>',
    },
    {
        question: 3,
        text: 'Which HTML tag is used to define an image?',
        options: {
            a: '<img>',
            b: '<picture>',
            c: '<image>',
            d: '<src>',
        },
        correctAns: '<img>',
    },
    {
        question: 4,
        text: 'What does the "alt" attribute in <img> specify?',
        options: {
            a: 'Alternate text for the image',
            b: 'Image resolution',
            c: 'Image source',
        },
        correctAns: 'Alternate text for the image',
    },
    {
        question: 5,
        text: 'Which tag is used for the largest heading?',
        options: {
            a: '<h1>',
            b: '<header>',
        },
        correctAns: '<h1>',
    }
];

var bodyElm = document.getElementsByTagName('body')[0]
var questionNumbering = document.createElement('p')
var boxDiv = document.getElementsByClassName('box')[0]
var gettingForm = document.getElementsByClassName('form')[0];
var currentQuestionIndex = 0;
var count = 0;
var score = 0;

// Timer Variables
let timerDuration = 1 * 60; // 1 minute in seconds
let timerInterval;

// Timer Function
function startTimer() {
    let timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        timerElement.textContent = `Time Left: ${minutes}:${seconds}`;
        if (timerDuration === 0) {
            clearInterval(timerInterval);
            showResults("");
        } else {
            timerDuration--;
        }
    }, 1000);
}

// Show Results Function
function showResults(message) {
    clearInterval(timerInterval); // Stop the timer if quiz is completed
    gettingForm.innerHTML = `
    <h1 class="show-result"> Result <br>
     ${userName}  Score is :${message} ${score}/${quizData.length} <br>
       Thanks For Play       </h1>`;
    let playAgainButton = document.createElement('button');
    playAgainButton.setAttribute('class', 'play-again-btn');
    playAgainButton.innerText = 'Attempt Again';
    playAgainButton.setAttribute('onClick', "playAgain()");
    gettingForm.appendChild(playAgainButton);
    let timerElement = document.getElementById("timer");
    timerElement.innerText = "";
}


var toRenderData = () => {
    gettingForm.innerHTML = ''; // Clear previous question
    count++;
    questionNumbering.innerText = `Question NO ${count}/${quizData.length}`;
    gettingForm.appendChild(questionNumbering);

    if (currentQuestionIndex < quizData.length) {
        let questionData = quizData[currentQuestionIndex];
        var forQuestion = document.createElement('p');
        forQuestion.innerText = questionData.text;
        gettingForm.appendChild(forQuestion);

        //creating input and rendering 
        for (let key in questionData.options) {
            let optionInput = document.createElement('input');
            optionInput.setAttribute('type', 'radio');
            optionInput.setAttribute('name', `question-${questionData.question}`);
            optionInput.setAttribute('value', questionData.options[key]);
           

            let label = document.createElement('label');
            label.textContent = questionData.options[key];
            label.setAttribute('for', `option-${key}-${questionData.question}`);

            gettingForm.appendChild(optionInput);
            gettingForm.appendChild(label);
            gettingForm.appendChild(document.createElement('br')); // Line break for better layout



        }

        var submitButton = document.createElement('button');
        submitButton.innerText = currentQuestionIndex === quizData.length - 1 ? 'Submit' : 'Next';
        submitButton.setAttribute('onClick', 'toSubmit(event)');
        gettingForm.appendChild(submitButton);
         // When user not select any option next is DIsabled
        submitButton.disabled=true;
        const radioButtons = document.querySelectorAll(`input[name="question-${quizData[currentQuestionIndex].question}"]`);
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                submitButton.disabled = false; 
            });
        });


    }
};

// Restart Quiz Function
var playAgain = () => {

    window.location.replace('../Pages/../index.html')
};

// Compare Answer
let ansCompare = () => {
    let questionData = quizData[currentQuestionIndex];
    let UserAns = document.querySelector(`input[name="question-${questionData.question}"]:checked`);

    if (UserAns) {
        let userAnswerValue = UserAns.value;
        let correctAns = questionData.correctAns;

        if (correctAns === userAnswerValue) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    } else {
        alert("Please select an answer!");
    }
};

// Submit Data
var toSubmit = (e) => {
    e.preventDefault();
    ansCompare();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        toRenderData();
    } else {
     showResults("");
    }
};


startTimer();
toRenderData();


// Retrieve the stored user name from localStorage

function getUserName() {
   
    const data = localStorage.getItem('register-users');
    
    if (data) {
        
        const users = JSON.parse(data);
        const lastUser = users[users.length - 1]; 
        
        // Return the user's name (or handle case where no users exist)
        return lastUser ? lastUser.name : 'Guest';
    } else {
       
        return 'Guest';
    }
}


var userName = getUserName();

