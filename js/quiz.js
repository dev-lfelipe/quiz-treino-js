function contadorQuest(){
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
        /*var textoRes = document.createElement("h1");
        var conteudoRes = document.createTextNode("Resposta errada!");
        textoRes.appendChild(conteudoRes); 
        
        var textoResultado = document.getElementById("resultado");
        document.body.insertBefore(textoRes, textoResultado.nextSibling);*/

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
})