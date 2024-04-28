const tasksAdd = document.querySelector('.tasks__add')
const tasksList = document.querySelector('.tasks__list')
const tasksInput = document.querySelector('.tasks__input')

function create(){
    tasksList.insertAdjacentHTML('afterbegin', `
<div class="task">
  <div class="task__title">
    ${tasksInput.value.trim()}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
`);

}

tasksAdd.addEventListener('click', event => {
  event.preventDefault()
  if(tasksInput.value.trim() !== ''){
    create()  
    tasksInput.value = ''
  }
})

tasksList.addEventListener('click', event =>{
         event.preventDefault()
         event.target.closest('.task').remove()
         
})

    





