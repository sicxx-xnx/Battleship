import { currentplayer, opponent, setCurrentPlayer, setOpponent } from "../gamelogic/Savedinfo";
import { background, currentplayername, currentships, stratboard } from "./currentdomelements";
import { populateships, populatestratboard } from "./dommethods";
import { resetButton, resetDiv, winnerText } from "./newdomelements";


export function addRestart(){
background.append(resetDiv)
winnerText.innerText = `${currentplayer.name} is the winner!`
resetDiv.append(winnerText,resetButton)
resetButton.addEventListener('click',resetGame)
}

export function resetGame(){
currentplayer.gameboard.resetBoard()    
currentplayer.gameboard.resetShips()
opponent.gameboard.resetBoard() 
opponent.gameboard.resetShips()
setCurrentPlayer(currentplayer)
setOpponent(opponent)
stratboard.innerHTML = ""
currentships.innerHTML = ""
currentplayername.innerText = currentplayer.name 
populateships()
populatestratboard()
background.removeChild(resetDiv)
}