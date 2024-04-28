const titleTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

function getTooltipActive(){
    return tooltip = document.querySelector('.tooltip_active')
}

titleTooltip.forEach(item => item.addEventListener('click', event => {
    event.preventDefault()
    getTooltipActive()
    const topCoordinate = item.getBoundingClientRect().top + 23
    const leftCoordinate = item.getBoundingClientRect().left
    if(tooltip !== null){
        getTooltipActive()
        if(item.title === tooltip.textContent){
            tooltip.classList.remove('tooltip_active')
            tooltip.remove()
        }else{
            tooltip.textContent = item.title
            tooltip.style.left = parseInt(leftCoordinate) + 'px'
            tooltip.style.top = parseInt(topCoordinate) + 'px'
        }
    }else{
        item.insertAdjacentHTML('afterend', `<div class="tooltip" style="left: ${leftCoordinate}px; top: ${topCoordinate}px">
        </div> `)
        const tooltipActive = document.querySelector('.tooltip')
        tooltipActive.classList.toggle('tooltip_active')
        tooltipActive.textContent = item.title
    }

}))



        
        