const xhr = new XMLHttpRequest()
const pollTitle = document.querySelector('.poll__title')
const pollAnswers = document.getElementById('poll__answers')


xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === xhr.DONE){
      pollTitle.textContent = JSON.parse(xhr.responseText)['data']['title']
      const answers = JSON.parse(xhr.responseText)['data']['answers']
      for(let answer in answers){
        pollAnswers.insertAdjacentHTML('afterbegin', `
    <button class="poll__answer">
              ${answers[answer]}
            </button>
    `)
      }
      function getArray(){
         btn = Array.from(document.querySelectorAll('.poll__answer'))
        return btn
      }
      getArray()
      btn.forEach(element => element.addEventListener('click', event => {
        event.preventDefault()
        alert('Спасибо, ваш голос засчитан!')
      }))
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()








