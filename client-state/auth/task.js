const signinBtn = document.getElementById('signin__btn')
const input = Array.from(document.querySelectorAll('input'))
const welcome = document.querySelector('.welcome ')
const userId = document.getElementById('user_id')
const login = document.getElementsByName('login')
const password = document.getElementsByName('login')
const idTrue = localStorage.getItem('idTrue')
const signin = document.getElementById('signin')

function removeSignin(){
    signin.classList.remove('signin_active')
}


if(idTrue){
    welcome.classList.add('welcome_active')
    userId.textContent = idTrue
    removeSignin()
}

document.forms[0].addEventListener('submit', event =>{
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', ()=>{ 
        const response = xhr.response
        if(response.success){
            welcome.classList.add('welcome_active')
            localStorage.setItem('idTrue', response.user_id)
            userId.textContent = response.user_id
            removeSignin()

        }else{
            alert('Неверный логин/пароль')
        }
        
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    
    const formData = new FormData(document.forms[0])
    xhr.send(formData)
})



