const element = index => document.getElementById(`hole${index}`)
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

(function countClick(){
        for(let i = 1; i <= 9; i++){
            element(i).onclick = function(){
                if(dead.textContent >= 10){
                    lost.textContent = 0
                    dead.textContent = 0
                    alert("Победа!")
                } else if(lost.textContent >= 5){
                    lost.textContent = 0
                    dead.textContent = 0
                    alert("Вы проиграли")
                } else if(element(i).className === "hole hole_has-mole"){
                        dead.textContent++}   
                else{lost.textContent++
                    }
                }
            }
        }
)()

