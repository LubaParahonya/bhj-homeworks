const tasksAdd = document.querySelector('.tasks__add')
const tasksList = document.querySelector('.tasks__list')
const tasksInput = document.querySelector('.tasks__input')

function create(){
const element = document.createElement('div')
tasksList.appendChild(element)
element.classList.add('task')

const elementTitle = document.createElement('div')
elementTitle.textContent  = tasksInput.value
element.appendChild(elementTitle)
elementTitle.classList.add('task__title')

const elementRemove = document.createElement('a')
elementRemove.href = '#'
elementRemove.textContent = 'x'
element.appendChild(elementRemove)
elementRemove.classList.add('task__remove')
}


tasksAdd.addEventListener('click', () => {
    event.preventDefault()
    create()
    const taskRemove = Array.from(document.querySelectorAll('.task__remove'))
})


function deleteTask(indexElement){
    taskRemove[indexElement].remove()

}

taskRemove.forEach(item => item.addEventListener('click', function(){
    event.preventDefault()
    indexElement = taskRemove.indexOf(item)
    deleteTask(indexElement)
}))