let winningStreak=0
let bestStreak=0
 
function greaterGuess(){
    let input = document.getElementById('guess') //taking the number from the write in
    let element = document.getElementById('congrats') //for their streak (best or winning)
 
    let index= Math.floor((Math.random()*1000)) //generating random number
        if (input.value>=index) {
          element.innerHTML = 'You guessed Correct!'; //if the number generated was less than their number
          winningStreak++ //if correct then add one to winning streak 
          if(winningStreak>bestStreak){
            bestStreak=winningStreak;
           
          }
          streakUpdate();
        }else{
            winningStreak=0 //if incorrect winning streak will update to 0
           element.innerHTML = 'You guessed incorrect';
           streakUpdate();
        }
}
 
function lesserGuess()
{
    let input = document.getElementById('guess') //taking the number from the write in
    let element = document.getElementById('congrats') //for their streak (best or winning)
 
    let index= Math.floor((Math.random()*1000)) //generating random number
        if (input.value<=index) {
          element.innerHTML = 'You guessed Correct!'; //if the number generated was greater than their number
          winningStreak++
          if(winningStreak>bestStreak){
            bestStreak=winningStreak;
           
          }
          streakUpdate();
        }else{
         winningStreak=0 //if incorrect winning streak will update to 0
           element.innerHTML = 'You guessed incorrect';
           streakUpdate();
        }
}
 
    function streakUpdate(){
        document.getElementById('winningStreak').innerHTML = winningStreak;
       
        document.getElementById('bestStreak').innerHTML=bestStreak;
    }  
 
 
 
 
 
 
 
