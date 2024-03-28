const countTime  = function(){
    const time = document.getElementById("timer");
  
    if (time.textContent >= 1){
        time.textContent --;
    }	else if(time.textContent = '0'){
        alert("Время кончилось!");
        

    }
  }
  
  setInterval(countTime,1000);
  clearInterval(setInterval)

  //setTimeout(() => { clearInterval(setInterval) }, 3000);
  
  
  //Повышенный уровень сложности #2
  
  /*const countTime  = function(){
    const time = document.getElementById("timer");
  
    if (time.textContent >= 1){
        time.textContent --;
    }	else if(time.textContent = '0'){
        location.assign("https://netology.ru/");
    }
  }
  
  setInterval(countTime,1000); */