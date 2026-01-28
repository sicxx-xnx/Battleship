import { currentplayername } from "../dom/currentdomelements"
import { populateships, populatestratboard } from "../dom/dommethods"
import { currentplayer, holder, opponent, setCurrentPlayer, setHolder, setOpponent } from "./Savedinfo"

export const gameloop = function(){    
populateships()
populatestratboard()
setTimeout(() => {
switchturn()
populateships()
populatestratboard()     
}, 2000);


}

function switchturn(){
setHolder(currentplayer)
setCurrentPlayer(opponent)
setOpponent(holder)  
currentplayername.innerText = currentplayer.name  
}