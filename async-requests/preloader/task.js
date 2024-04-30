const xhr = new XMLHttpRequest()
const imgLoady = document.getElementById('loader')
const item = document.getElementById('items')

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === xhr.DONE){
        imgLoady.classList.remove('loader_active')
        create()
    }
}
)

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

function create(){
    const xhrText = JSON.parse(xhr.responseText)['response']['Valute']
    for(let text in xhrText){
        item.insertAdjacentHTML('afterbegin', `
        <div class='item'>
                <div class="item__code">
                    ${xhrText[text]['CharCode']}
                </div>
                <div class="item__value">
                ${xhrText[text]['Value']}
                </div>
                <div class="item__currency">
                    руб.
                </div> 
            </div> ` )
    }
}
