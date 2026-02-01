import { currentplayername } from "../dom/currentdomelements"
import { populateships, populatestratboard } from "../dom/dommethods"
import { addRestart } from "../dom/restart"
import { currentplayer, firelock, firelockfalse, firelocktrue, holder, opponent, setCurrentPlayer, setHolder, setOpponent } from "./Savedinfo"

export const gameloop = function(){    
populateships()
populatestratboard()
if (opponent.gameboard.gameOver()) {
// alert(`${currentplayer.name} wins!`) 
return addRestart()   
}
firelocktrue()
setTimeout(() => {
switchturn()
populateships()
populatestratboard()  
if (currentplayer.pc) {
currentplayer.gameboard.sendattack()    
}  
firelockfalse()
}, 1000);


}

function switchturn(){
setHolder(currentplayer)
setCurrentPlayer(opponent)
setOpponent(holder)  
currentplayername.innerText = currentplayer.name  
}