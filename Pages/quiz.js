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
    },
    {
        question: 6,
        text: 'What does CSS stand for?',
        options: {
            a: 'Creative Style Sheets',
            b: 'Cascading Style Sheets',
            c: 'Colorful Style Sheets',
        },
        correctAns: 'Cascading Style Sheets',
    },
    {
        question: 7,
        text: 'How do you change the background color in CSS?',
        options: {
            a: 'color',
            b: 'background-color',
            c: 'bgcolor',
            d: 'background',
        },
        correctAns: 'background-color',
    },
    {
        question: 8,
        text: 'Which CSS property is used to set the text alignment?',
        options: {
            a: 'text-align',
            b: 'align',
            c: 'font-align',
        },
        correctAns: 'text-align',
    },
    {
        question: 9,
        text: 'How can you include an external CSS file?',
        options: {
            a: '<style src="style.css">',
            b: '<link rel="stylesheet" href="style.css">',
            c: '<css href="style.css">',
            d: '<import stylesheet="style.css">',
        },
        correctAns: '<link rel="stylesheet" href="style.css">',
    },
    {
        question: 10,
        text: 'What is the correct syntax to select elements by their class in CSS?',
        options: {
            a: '.classname',
            b: '#classname',
            c: 'classname',
        },
        correctAns: '.classname',
    },
    // {
    //     question: 11,
    //     text: 'Which keyword is used to declare a variable?',
    //     options: {
    //         a: 'let',
    //         b: 'var',
    //         c: 'define',
    //     },
    //     correctAns: 'var',
    // },
    // {
    //     question: 12,
    //     text: 'What is the output of 2 + "2" in JavaScript?',
    //     options: {
    //         a: '4',
    //         b: '22',
    //         c: 'undefined',
    //     },
    //     correctAns: '22',
    // },
    // {
    //     question: 13,
    //     text: 'How do you call a function in JavaScript?',
    //     options: {
    //         a: 'call myFunction',
    //         b: 'execute myFunction()',
    //         c: 'myFunction()',
    //         d: 'invokeFunction myFunction',
    //     },
    //     correctAns: 'myFunction()',
    // },
    // {
    //     question: 14,
    //     text: 'Which event occurs when the user clicks on an element?',
    //     options: {
    //         a: 'onmouseover',
    //         b: 'onclick',
    //         c: 'onpress',
    //     },
    //     correctAns: 'onclick',
    // },
    // {
    //     question: 15,
    //     text: 'What is the purpose of the "return" statement in JavaScript?',
    //     options: {
    //         a: 'To end the function',
    //         b: 'To return a value from the function',
    //         c: 'To break a loop',
    //     },
    //     correctAns: 'To return a value from the function',
    // },
    // {
    //     question: 16,
    //     text: 'Which HTML element is used for creating a hyperlink?',
    //     options: {
    //         a: '<link>',
    //         b: '<a>',
    //         c: '<href>',
    //     },
    //     correctAns: '<a>',
    // },
    // {
    //     question: 17,
    //     text: 'Which CSS property controls the text color?',
    //     options: {
    //         a: 'color',
    //         b: 'font-color',
    //         c: 'text-color',
    //     },
    //     correctAns: 'color',
    // },
    // {
    //     question: 18,
    //     text: 'Which JavaScript operator is used to compare both value and type?',
    //     options: {
    //         a: '==',
    //         b: '===',
    //     },
    //     correctAns: '===',
    // },
    // {
    //     question: 19,
    //     text: 'How do you declare a JavaScript array?',
    //     options: {
    //         a: 'let arr = [];',
    //         b: 'let arr = {};',
    //         c: 'let arr = "";',
    //         d: 'let arr = ();',
    //     },
    //     correctAns: 'let arr = [];',
    // },
    // {
    //     question: 20,
    //     text: 'Which CSS property is used to make the text bold?',
    //     options: {
    //         a: 'font-weight: bold;',
    //         b: 'text-style: bold;',
    //     },
    //     correctAns: 'font-weight: bold;',
    // },
];


var bodyElm = document.getElementsByTagName('body')[0]
var questionNumbering = document.createElement('p')
var boxDiv = document.getElementsByClassName('box')[0]
var gettingForm = document.getElementsByClassName('form')[0];
var currentQuestionIndex = 0;
var count = 0
 var score=0;

var toRenderData = () => {
    gettingForm.innerHTML = ''; //to clear previous question
    count++
    questionNumbering.innerText = `Question NO ${count}/20`
    gettingForm.appendChild(questionNumbering);
    //rendering data
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
            optionInput.setAttribute('id', `option-${key}-${questionData.question}`)
            console.log(optionInput.setAttribute('id', questionData.options[key]));
            



            let label = document.createElement('label');
            label.textContent = questionData.options[key];
            // label.setAttribute('for', questionData.options[key]);
            label.setAttribute('for', `option-${key}-${questionData.question}`);
            

           

            gettingForm.appendChild(optionInput);
            gettingForm.appendChild(label);
            gettingForm.appendChild(document.createElement('br')); // Line break for better layout
        }
        var submitButton = document.createElement('button');
       

       

        submitButton.innerText = 'Next';
        if (currentQuestionIndex === quizData.length - 1) {
            
            submitButton.innerText = 'Submit'
        }
        submitButton.setAttribute('onClick', 'toSubmit(event)');
        gettingForm.appendChild(submitButton);
        
       
    } else {
        gettingForm.removeChild(questionNumbering) //to remove question numbering 
        var completionMessage = document.createElement('h1');
        completionMessage.setAttribute('class', 'show-result')
        completionMessage.innerText = `Your Score is ${score}/${quizData.length}`;
        //add button for reattempt
        var playAgainButton = document.createElement('button');
        playAgainButton.setAttribute('class', 'play-again-btn')
        playAgainButton.innerText = 'Attempt Again';
        playAgainButton.setAttribute('onClick', "playAgain()")
        gettingForm.appendChild(completionMessage);
        bodyElm.appendChild(playAgainButton);
    }
    
};

var playAgain = () => {
    window.location.replace('../Pages/../index.html')
}


// Answer Comparing User select Ans vs Correct Answer

let ansCompare = () => {
    let questionData = quizData[currentQuestionIndex];
    let UserAns = document.querySelector(`input[name="question-${questionData.question}"]:checked`);

    if (UserAns) {
        let userAnswerValue = UserAns.value; 
        let correctAns = questionData.correctAns; // The correct answer

       
            if (correctAns === userAnswerValue) {
                
               score++
                alert("Right");
            } else {
            
                alert("Wrong");
            }
       
    } else {
        alert("Please select an answer!");
    }
};











var toSubmit = (e) => {
    e.preventDefault();
 
    ansCompare();
    currentQuestionIndex++;
    toRenderData();
};




toRenderData();