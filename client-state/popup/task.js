const subscribeModal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')

modalClose.addEventListener('click', event =>{
    event.preventDefault()
    subscribeModal.classList.remove('modal_active')
    document.cookie = 'removeModalActiv=true'
   
})

function checkModalActive(){
    const status = getCookie('removeModalActiv')
    if(typeof status === 'undefined'){
        subscribeModal.classList.add('modal_active')
    }else{
        subscribeModal.classList.remove('modal_active')
    }
}

 function getCookie(name){
    const value = document.cookie.split(';')
    const findValue = value.find( el => el.startsWith(name + '='))
    return findValue.substring(name.length +1)

 }

 document.addEventListener('DOMContentLoaded', checkModalActive);