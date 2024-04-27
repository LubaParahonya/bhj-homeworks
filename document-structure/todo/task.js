const tasksAdd = document.querySelector('.tasks__add')
const tasksList = document.querySelector('.tasks__list')
const tasksInput = document.querySelector('.tasks__input')



function create(){
  const inputValue = tasksInput.value.trim()
    tasksList.insertAdjacentHTML('afterbegin', `
<div class="task">
  <div class="task__title">
    ${inputValue}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
`);

}

tasksAdd.addEventListener('click', event => {
  if(tasksInput.value !== ''){
    event.preventDefault()
    create()  
    getArray()
    tasksInput.value = ''
  }
})

function getArray(){
      return taskMain = Array.from(document.querySelectorAll('.task'))
}


tasksList.addEventListener('click', event =>{
         event.preventDefault()
         event.target.closest('.task').remove()
         
})

    






