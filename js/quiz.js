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
})