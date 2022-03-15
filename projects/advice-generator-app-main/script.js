const numberTitle = document.querySelector('[data-title="number"]');
const advice = document.querySelector('[data-text="advice"]');
const button = document.querySelector('[data-text="button"]');
const url = 'https://api.adviceslip.com/advice'

function showAdvice () {
  axios.get(url)
  .then(response => {
    numberTitle.innerHTML = response.data.slip.id
    advice.innerHTML = response.data.slip.advice
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
}

button.addEventListener('click', showAdvice);