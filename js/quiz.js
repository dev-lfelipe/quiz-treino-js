const form = document.querySelector('#form')
const btnSubmit = document.querySelector('.myButton')


const anwser = {
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
    if (userAnwser != anwser.correctAnwser) {
      response.textContent = 'Resposta errada!'
      document.body.appendChild(response)
<<<<<<< HEAD
      document.getElementById('Brasil').disabled = true;
      document.getElementById('Italia').disabled = true;
      document.getElementById('Inglaterra').disabled = true;
      document.querySelector('.myButton').disabled = true;
    } else {
      response.textContent = 'Resposta correta!'
      document.body.appendChild(response)
      document.getElementById('Brasil').disabled = true;
      document.getElementById('Italia').disabled = true;
      document.getElementById('Inglaterra').disabled = true;
      document.querySelector('.myButton').disabled = true;
=======
      document.getElementById(answer.options.a).disabled = true;
      document.getElementById(answer.options.b).disabled = true;
      document.getElementById(answer.options.c).disabled = true;
    } else {
      response.textContent = 'Resposta correta!'
      document.body.appendChild(response)
      document.getElementById(answer.options.a).disabled = true;
      document.getElementById(answer.options.b).disabled = true;
      document.getElementById(answer.options.c).disabled = true;
>>>>>>> e5d83c99f839501d04e0b575890660145a986a6c
    }
})