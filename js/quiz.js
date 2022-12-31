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
    q: "Qual foi a seleção campeã da Copa do Mundo de 1966?",
    a: [{ text: "Itália", isCorrect: false },
        { text: "Brasil", isCorrect: false },
        { text: "Inglaterra", isCorrect: true },
        { text: "Uruguai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Qual o nome verdadeiro do Homem-Aranha?",
    a: [{ text: "Clark Kent", isCorrect: false, isSelected: false },
        { text: "Kanye West", isCorrect: false },
        { text: "Bruce Wayne", isCorrect: false },
        { text: "Peter Parker", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Qual a capital do Acre?",
    a: [{ text: "Brasília", isCorrect: false },
        { text: "Pernambuco", isCorrect: false },
        { text: "Rio Branco", isCorrect: true },
        { text: "Itaberá", isCorrect: false }
    ]

}

]

var start = true;

// Interação
function iterate(id) {
    // Pegando o display da div resultado
    var result = document.getElementsByClassName("resultado");
    result[0].innerText = "";
    
    // Pegando a questão
    const question = document.getElementById("question");
    
    
    // Pegando o texto da questão
    question.innerText = Questions[id].q;
    
    // Pegando as opções
    const op = [
        document.getElementById("op1"),
        document.getElementById('op2'),
        document.getElementById('op3'),
        document.getElementById('op4')
    ];

    
    const Opcoes = [
        document.getElementById('option1'),
        document.getElementById('option2'),
        document.getElementById('option3'),
        document.getElementById('option4'),  
    ];    
    
    // Definindo o texto das questões
    op[0].innerText = Questions[id].a[0].text;
    op[1].innerText = Questions[id].a[1].text;
    op[2].innerText = Questions[id].a[2].text;
    op[3].innerText = Questions[id].a[3].text;
    
    // Definindo verdadeiro ou falso para as questões
    Opcoes[0].value = Questions[id].a[0].isCorrect;
    Opcoes[1].value = Questions[id].a[1].isCorrect;
    Opcoes[2].value = Questions[id].a[2].isCorrect;
    Opcoes[3].value = Questions[id].a[3].isCorrect;
    
    var selected = "";
    
    // Eventos para mostrar a seleção
    /*option1.addEventListener("click", () => {
        op1.style.color = "lightgoldenrodyellow";
        op2.style.color = "lightskyblue";
        op3.style.color = "lightskyblue";
        op4.style.color = "lightskyblue";
        selected = option1.value;
    })
    
    option2.addEventListener("click", () => {
        op1.style.color = "lightskyblue";
        op2.style.color = "lightgoldenrodyellow";
        op3.style.color = "lightskyblue";
        op4.style.color = "lightskyblue";
        selected = option2.value;
    })
    
    option3.addEventListener("click", () => {
        op1.style.color = "lightskyblue";
        op2.style.color = "lightskyblue";
        op3.style.color = "lightgoldenrodyellow";
        op4.style.color = "lightskyblue";
        selected = option3.value;
    })
    
    option4.addEventListener("click", () => {
        op1.style.color = "lightskyblue";
        op2.style.color = "lightskyblue";
        op3.style.color = "lightskyblue";
        op4.style.color = "lightgoldenrodyellow";
        selected = option4.value;
    })*/
    
    // Pegando o botão de verificação
    const evaluate = document.getElementsByClassName("evaluate");
    
    // O método para verificar
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

    if (Questions[id].a[0].isCorrect){
        Opcoes[0].addEventListener("click", () => {
            op[0].style.color = "green";

            selected = Opcoes[0].value;
        })
    } else {
        Opcoes[0].addEventListener("click", () => {
            op[0].style.color = "red";

            selected = Opcoes[0].value;
        })
    }

    
    /*for(let contador = 0; contador < Opcoes.length; contador++){
        const opcaoSelecionada = Opcoes[contador];

        if (Questions[id].a.isCorrect){
            opcaoSelecionada.addEventListener("click", () => {
                op[0].style.color = "green";
    
                selected = Opcoes[0].value;
            })
        } else {
            opcaoSelecionada.addEventListener("click", () => {
                op[0].style.color = "red";
    
                selected = Opcoes[0].value;
            })
        }

    }*/
}

if (start) {
    iterate("0");
}

// Botão next e seu método
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