const xhr = new XMLHttpRequest()
const imgLoady = document.getElementById('loader')
const item = document.querySelector('.item')

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === xhr.DONE){
        imgLoady.classList.remove('loader_active')
        create()
    }
    


})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

function create(){
    const itemCode = document.createElement('div')
    const itemValue = document.createElement('div')
    const itemCurrency = document.createElement('div')
    
    item.appendChild(itemCode)
    item.appendChild(itemValue)
    item.appendChild(itemCurrency)

    itemCode.textContent = JSON.parse(window.localStorage.getItem('CharCode'))
    //itemValue.textContent = '32'
    //itemCurrency.textContent = 'руб'

    itemCode.classList.add('item__code')
    itemValue.classList.add('item__value')
    itemCurrency.classList.add('item__currency')


}