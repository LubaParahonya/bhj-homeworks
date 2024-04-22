const tasksAdd = document.querySelector('.tasks__add')
const tasksList = document.querySelector('.tasks__list')
const tasksInput = document.querySelector('.tasks__input')
let taskRemove 
let taskMain 


function create(){
    tasksList.insertAdjacentHTML('afterbegin', `
<div class="task">
  <div class="task__title">
    ${tasksInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
`);
}

tasksAdd.addEventListener('click', event => {
    event.preventDefault()
    create()  
    getArray()
})

function getArray(){
     taskRemove = Array.from(document.querySelectorAll('.task__remove'))
     taskMain = Array.from(document.querySelectorAll('.task'))
}

function deleteTask(indexElement){
    getArray()
    taskMain[indexElement].remove()

}

taskRemove.forEach(item => item.addEventListener('click', event => {
            event.preventDefault()
            indexElement = taskRemove.indexOf(item)
            deleteTask(indexElement)
            alert('jmngjngj')
}))


    






