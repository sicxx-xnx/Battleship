import { currentplayername } from "../dom/currentdomelements"
import { populateships, populatestratboard } from "../dom/dommethods"
import { addRestart } from "../dom/restart"
import { currentplayer, holder, opponent, setCurrentPlayer, setHolder, setOpponent } from "./Savedinfo"

export const gameloop = function(){    
populateships()
populatestratboard()
if (opponent.gameboard.gameOver()) {
alert(`${currentplayer.name} wins!`) 
addRestart()   
return
}
setTimeout(() => {
switchturn()
populateships()
populatestratboard()  
if (currentplayer.pc) {
currentplayer.gameboard.sendattack()    
}   
}, 2000);


}

function switchturn(){
setHolder(currentplayer)
setCurrentPlayer(opponent)
setOpponent(holder)  
currentplayername.innerText = currentplayer.name  
}