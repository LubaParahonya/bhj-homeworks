
const titleTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

function toolTipActiv(indexElement){
   const tooltip = document.createElement('div')
   tooltip.textContent = 'Проверка!'
   tooltip.style = 'left: 0; top: 0'
   titleTooltip[indexElement].insertAdjacentElement('afterEnd', tooltip )
   tooltip.classList.add('tooltip_active')


}

titleTooltip.forEach(item => item.addEventListener('click', function(){
    event.preventDefault()
    indexElement = titleTooltip.indexOf(item)
    toolTipActiv(indexElement)
}))