const form = document.querySelector('#form')
const btnSubmit = document.querySelector('.myButton')

const anwser = {name: "q1", correctAnwser: "Inglaterra"}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const response = document.createElement("h1")
    const userAnwser = form.q1.value
    if (userAnwser != anwser.correctAnwser) {
      response.textContent = 'Resposta errada!'
      document.body.appendChild(response)
    } else {
      response.textContent = 'Resposta correta!'
      document.body.appendChild(response)
    }
})