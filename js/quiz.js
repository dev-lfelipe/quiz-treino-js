const form = document.querySelector('#form')
const btnSubmit = document.querySelector('.myButton')

const userAnswer = document.querySelector('input[name="q1"]:checked').value

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(userAnswer)
})