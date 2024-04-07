

const rotators = Array.from(document.querySelectorAll('.rotator__case'))

function changeRotator(){
rotators.forEach((index, array) => {
    array[index].classList.add('rotator__case_active');
    array[index-1].classList.remove('rotator__case_active')
});
}
setInterval(changeRotator, 1000)