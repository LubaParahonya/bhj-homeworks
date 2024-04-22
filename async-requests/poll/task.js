const xhr = new XMLHttpRequest()
const pollTitle = document.querySelector('.poll__title')
const pollAnswers = document.getElementById('poll__answers')
let answer 

xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === xhr.DONE){
      createElem()
      answer = Array.from(document.querySelectorAll('.poll__answer'))  
      answer.forEach(el => el.addEventListener('click', event =>{
        event.preventDefault()
        alert('Спасибо, ваш голос засчитан')
      }))    
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()

function createElem(){
      const option1 = JSON.stringify(window.data.answers[0])
      const option2 = JSON.stringify(window.data.answers[1])

    pollAnswers.insertAdjacentHTML('afterbegin', `
    <button class="poll__answer">
              ${option1}
            </button>
            <button class="poll__answer">
            ${option2}
            </button>
    `)

    pollTitle.textContent = JSON.stringify(window.data.title)

}






