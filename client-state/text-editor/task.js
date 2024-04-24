const editor = document.getElementById('editor')
const reset = document.querySelector('.reset')

function saveEditor(){
    localStorage.setItem('keyEditor', JSON.stringify(editor.value))   
}
editor.addEventListener('keyup', saveEditor)

editor.value = JSON.parse(localStorage.getItem('keyEditor'))

reset.addEventListener('click', event =>{
    event.preventDefault()
    editor.value = ''
    localStorage.removeItem('keyEditor')

})
