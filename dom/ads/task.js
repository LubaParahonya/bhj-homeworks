const rotatorCase = Array.from(document.querySelectorAll('span.rotator__case'));
const lengthRotatorCase = rotatorCase.length


function isActiveRotator(element) {
    return element.classList.contains('rotator__case_active');
};


function newIndex(index){
    return (index === lengthRotatorCase -1)? index = 0 : ++index

 }

 function changeClass(rotator){
    rotator.classList.toggle('rotator__case_active');

 }


setInterval(function () {
        let currentRotator = rotatorCase.findIndex(isActiveRotator);
        let newRotator = newIndex(currentRotator);
        changeClass(rotatorCase[currentRotator]);
        changeClass(rotatorCase[newRotator]);

        
    }, 1000)



 