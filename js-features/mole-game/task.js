const element = index => document.getElementById(`hole${index}`)
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

(function countClick(){
    if(dead.textContent === 10){
        alert("Победа!")
        dead.textContent = 0
        dead.textContent =0
    } else if(lost.textContent === 5){
        alert("Вы проиграли")
        dead.textContent = 0
        dead.textContent =0
    }else{
        for(let i = 1; i <= 9; i++){
            element(i).onclick = function(){
                if(element(i).className === "hole hole_has-mole"){
                    dead.textContent++
                }else{
                    lost.textContent++
                }
            }
        }
}
})()

