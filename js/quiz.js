/*function contadorQuest(){
    var contador = 0;
    var questaoRespondida = 0;

    if(questaoRespondida < 5){
        contador++
    }
}

function barraProgresso() {
    var element = document.getElementById("barra__progresso");   
    var width = 1;
    var questoes = setInterval(progresso, 100);
    function progresso() {
    if (width >= 100) {
        clearInterval(questoes);
    } else {
        width++; 
        element.style.width = width + '%'; 
        element.innerHTML = width * 1  + '%';
    }
    }
}

const form = document.querySelector('#form')
const btnSubmit = document.querySelector('.myButton')

const answer = {
    name: "q1",
    options: {
        a: "Inglaterra",
        b: "Italia",
        c: "Brasil"
    }, 
    correctAnwser: "Inglaterra"}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    const response = document.createElement("h1")
    const userAnwser = form.q1.value
    if (userAnwser != answer.correctAnwser) {
        response.textContent = 'Resposta errada!'
        document.body.appendChild(response)        
        document.getElementById(answer.options.a).disabled = true;
        document.getElementById(answer.options.b).disabled = true;
        document.getElementById(answer.options.c).disabled = true;
        document.querySelector('.myButton').disabled = true;
    } else {
        response.textContent = 'Resposta correta!'
        document.body.appendChild(response)
        document.getElementById(answer.options.a).disabled = true;
        document.getElementById(answer.options.b).disabled = true;
        document.getElementById(answer.options.c).disabled = true;
        document.querySelector('.myButton').disabled = true;
    } 

    if ((document.getElementById('Inglaterra').checked == false) && (document.getElementById('Brasil').checked == false) && (document.getElementById('Italia').checked == false)){
        response.textContent = 'Você precisa selecionar uma resposta!'
        document.getElementById(answer.options.a).disabled = false;
        document.getElementById(answer.options.b).disabled = false;
        document.getElementById(answer.options.c).disabled = false;
        document.querySelector('.myButton').disabled = false;
        document.body.appendChild(response)
    }
})*/

const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "mumbai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {
    // Getting the result display section
    var result = document.getElementsByClassName("resultado");
    result[0].innerText = "";
    
    // Getting the question
    const question = document.getElementById("question");
    
    
    // Setting the question text
    question.innerText = Questions[id].q;
    
    // Getting the options
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    
    
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    
    var selected = "";
    
    // Show selection for op1
    op1.addEventListener("checked", () => {
        console.log("op1")
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
    
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
    
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
    
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
    
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
    
    // Evaluate method
    evaluate[0].addEventListener("click", (event) => {
        event.preventDefault();
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", (event) => {
    event.preventDefault();
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
    
})