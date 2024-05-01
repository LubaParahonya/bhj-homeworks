const signinBtn = document.getElementById('signin__btn')
const input = Array.from(document.querySelectorAll('input'))
const welcome = document.querySelector('.welcome ')
const userId = document.getElementById('user_id')
const login = document.getElementsByName('login')
const password = document.getElementsByName('login')
const idTrue = localStorage.getItem('userID')


if(idTrue){
    welcome.classList.add('welcome_active')
    userId.textContent = idTrue
}

document.forms[0].addEventListener('submit', event =>{
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', ()=>{
        xhr.responseType = 'json' 
        const response = xhr.responseText
        if(response['success']){
            welcome.classList.add('welcome_active')
            localStorage.setItem('idTrue', response['user_id'] )
            userId.textContent = response['user_id']

        }else{
            alert('Неверный логин/пароль')
        }
        
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    
    const formData = new FormData(document.forms[0])
    xhr.send(formData)
})



