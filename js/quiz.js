const form = document.querySelector('#form')
const btnSubmit = document.querySelector('.submit')

const userAnswer = document.querySelector('input[name="q1"]:checked').value

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const response = document.createElement("p")
    const userAnwser = form.q1.value
    if (userAnwser != anwser.correctAnwser) {
      response.innerHTML = '<h1>Resposta errada!</h1>'
      document.body.appendChild(response)
    } else {
      response.innerHTML = '<h1>Resposta correta!</h1>'
      document.body.appendChild(response)
    }
})