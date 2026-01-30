import { currentplayer, firelock, opponent, playerone, playertwo, setCurrentPlayer, setOpponent, setPlayer1, setPlayer2,  } from "../gamelogic/Savedinfo";
import { player } from "../player/playercon";
import { background, currentplayername, currentships, gameboards, gameinitholder, startGame, stratboard } from "./currentdomelements";
import { player1border, player1holderel, player1inputdiv, player1nameinputel, player1namelabel, player1title, player2border, player2holderel, player2humanorpccheckmarkholder, player2inputdiv, player2nameinputel, player2namelabel, player2pccheckbox, player2pccheckboxlabel, player2title, spanel, startGameButton, submitPlayerButton } from "./newdomelements";

export function startplayer1(){
gameinitholder.replaceChild(player1holderel,startGame)  
gameinitholder.append(player1holderel)  
player1holderel.append(player1title,player1inputdiv,submitPlayerButton)
player1inputdiv.append(player1nameinputel,player1namelabel,player1border)
submitPlayerButton.addEventListener('click',initPlayer1)
}

export function startPlayer2(){
gameinitholder.replaceChild(player2holderel,player1holderel)
player2holderel.append(player2title,player2humanorpccheckmarkholder,player2inputdiv,startGameButton)
player2humanorpccheckmarkholder.append(player2pccheckboxlabel)
player2pccheckboxlabel.append(player2pccheckbox,spanel)
player2inputdiv.append(player2nameinputel,player2namelabel,player2border)
player2pccheckbox.addEventListener('click',enablePayer2Name)
startGameButton.addEventListener('click',initPLayer2)


}

function initPlayer1(){
if (player1nameinputel.value.trim() === "") {
alert("error must enter in a name")    
}   else {
const player1 = new player(player1nameinputel.value,false)
setPlayer1(player1) 
player1.gameboard.placeShips()
startPlayer2()  
} 
}

function enablePayer2Name(){
if (player2pccheckbox.checked) {
player2nameinputel.disabled = false    
}    else {
player2nameinputel.disabled = true    
}
player2nameinputel.value = ""

}

function initPLayer2(){
if (player2nameinputel.disabled) {
const player2 = new player("pc",true)  
player2.gameboard.placeShips() 
setPlayer2(player2)  
setupGameboards()
populateships()
populatestratboard()
}    else {
if (player2nameinputel.value.trim() === "") {
alert("error must enter in a name")    
}   else {
const player2 = new player(player2nameinputel.value,false)
player2.gameboard.placeShips()
setPlayer2(player2) 
setupGameboards() 
populateships()
populatestratboard()
}    
}

  
}

function setupGameboards(){
background.replaceChild(gameboards,gameinitholder)
setCurrentPlayer(playerone)  
setOpponent(playertwo) 
currentplayername.innerText = currentplayer.name
}

export function populateships(){
currentships.innerHTML = ""    
for (let i = 0; i < currentplayer.gameboard.board.length; i++) {
const maprow = document.createElement("div")
maprow.classList = "maprow"

    for (let index = 0; index < currentplayer.gameboard.board[i].length; index++) {
        const mapcell = document.createElement("div")
        if (currentplayer.gameboard.board[i][index]) {
         mapcell.classList = "shippresent"  
        } else {
         mapcell.classList = "shipmissing"   
        }
        if (currentplayer.gameboard.stratgy.board[i][index]) {
         mapcell.innerText =  currentplayer.gameboard.stratgy.board[i][index]  
        }
        maprow.appendChild(mapcell)
    }   
currentships.appendChild(maprow)     
}    
}

export function populatestratboard(){
stratboard.innerHTML = ""  
stratboard.addEventListener("click",(event) => {
if (firelock) {
return     
}
currentplayer.gameboard.sendattack(event)    
}
)  
for (let i = 0; i < opponent.gameboard.stratgy.board.length; i++) {
const maprow = document.createElement("div")
maprow.classList = "maprow"    
    for (let index = 0; index < opponent.gameboard.stratgy.board[i].length; index++) {
        const mapcell = document.createElement("div")
        mapcell.classList.add("cell")
        mapcell.dataset.y = i;
        mapcell.dataset.x = index
        if (opponent.gameboard.stratgy.board[i][index]) {
         mapcell.innerText =  opponent.gameboard.stratgy.board[i][index]  
        }
        if (opponent.gameboard.board[i][index].sunk) {
        mapcell.classList.add("sunk")    
        }
        maprow.appendChild(mapcell)
    }   
stratboard.appendChild(maprow)
}
}


