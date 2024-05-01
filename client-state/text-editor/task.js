const editor = document.getElementById('editor')
const reset = document.querySelector('.reset')

function saveEditor(){
    localStorage.setItem('keyEditor', editor.value)   
}
editor.addEventListener('keyup', saveEditor)

editor.value = localStorage.getItem('keyEditor')

reset.addEventListener('click', event =>{
    event.preventDefault()
    editor.value = ''
    localStorage.removeItem('keyEditor')

})

