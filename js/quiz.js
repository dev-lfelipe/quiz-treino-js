const form = document.querySelector('#form')
const btnSubmit = document.querySelector('.myButton')

const anwser = {name: "q1", correctAnwser: "Inglaterra"}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const response = document.createElement("p")
    const userAnwser = form.q1.value
    if (userAnwser != anwser.correctAnwser) {
      response.innerHTML = '<h1>Resposta errada!</h1>'
      document.body.appendChild(response)
      document.getElementById('Brasil').disabled = true;
      document.getElementById('Italia').disabled = true;
      document.getElementById('Inglaterra').disabled = true;
      document.querySelector('.myButton').disabled = true;
    } else {
      response.innerHTML = '<h1>Resposta correta!</h1>'
      document.body.appendChild(response)
      document.getElementById('Brasil').disabled = true;
      document.getElementById('Italia').disabled = true;
      document.getElementById('Inglaterra').disabled = true;
      document.querySelector('.myButton').disabled = true;
    }
})