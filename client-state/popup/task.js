const subscribeModal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')

modalClose.addEventListener('click', event =>{
    event.preventDefault()
    subscribeModal.classList.remove('modal_active')
   
})

