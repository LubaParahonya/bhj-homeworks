const titleTooltip = Array.from(document.querySelectorAll('.has-tooltip'))
function getTooltipActive(){
    return tooltip = document.querySelector('.tooltip_active')
}
titleTooltip.forEach(item => item.addEventListener('click', event => {
    event.preventDefault()
    getTooltipActive()
    if(tooltip !== null){
        getTooltipActive()
        if(item.title === tooltip.textContent){
            tooltip.classList.remove('tooltip_active')
            tooltip.remove()
        }else{
            tooltip.textContent = item.title
        }
    }else{
        item.insertAdjacentHTML('afterbegin', `
        <div class="tooltip" style="left: 0; top: 0">
         </div> `)
        const tooltipActive = document.querySelector('.tooltip')
        tooltipActive.classList.toggle('tooltip_active')
        tooltipActive.textContent = item.title
    }
   
}))

