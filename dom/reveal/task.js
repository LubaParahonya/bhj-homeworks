
function isVisible(){
    const reveal = document.querySelector('.reveal');
    const {top, bottom } = reveal.getBoundingClientRec();
    if(bottom > 0){
        reveal.classList.add('reveal_active')
    } else if(top < window.innerHeight){
        reveal.classList.add('reveal_active')
    } else{
        if(reveal.classList.contains('reveal_active')){
            reveal.classList.remove('reveal_active')
        }
    }
}


window.addEventListener('scroll', isVisible)