const signinBtn = document.getElementById('signin__btn')
const input = Array.from(document.querySelectorAll('input'))
const welcome = document.querySelector('.welcome ')
const userId = document.getElementById('user_id')

document.forms[0].addEventListener('submit', event =>{
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === xhr.DONE){

        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formData = new FormData(document.forms[0])
    xhr.send(formData)
})



input[0].addEventListener('keyup', ()=>{
    localStorage.setItem('name', input[0].value)
})
input[1].addEventListener('keyup', ()=>{
    localStorage.setItem('id', input[1].value)
})

// не могу задать уловия IF
if(){
    welcome.classList.add('welcome_active')
    userId.textContent = localStorage.getItem('id')
}else{
alert('Неверный логин/пароль')
}