import { gameloop } from "../gamelogic/placeships"
import { opponent } from "../gamelogic/Savedinfo"
import { horizontialCheck, verticleCheck } from "../helperfunctions/verticleandhorizontialcheck"
import { hit } from "../hits/hitmethod"
import { isSunkCheck } from "../hits/sunkmethod"
import { ship } from "../shipgeneration"




export const gameboard = function () {
this.board = [
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],
["","","","","","","","",""] 
] 
this.ships = [
new ship(1),
new ship(1),
new ship(1),
new ship(1),
new ship(3),
new ship(3),
new ship(5),
new ship(2),
new ship(2)
]
this.placeShips = function (){
this.ships.forEach((battleship)=>{   
if (battleship.position === 'horizontial') {
    let isPlaced = false
    while (isPlaced == false) {
    const x = Math.floor(Math.random() * 8)
    const y = Math.floor(Math.random() * 8)
    if (horizontialCheck(this.board[y],x,battleship.length) ) {
    for (let index = x; index < x + battleship.length; index++) {  
        this.board[y][index] = battleship  
    }  
    isPlaced = true     
    }
    } 
} else {
let isPlaced = false
    while (isPlaced == false) {
    const x = Math.floor(Math.random() * 8)
    const y = Math.floor(Math.random() * 8)
    if (verticleCheck(this.board,y,x,battleship.length) ) {
    for (let index = y; index < y + battleship.length; index++) {  
        this.board[index][x] = battleship  
    }  
    isPlaced = true     
    }
    }    
}
})   
// check to ensure 19 peices are in play
let count = 0
 for (const subArr of this.board) {
        for (const item of subArr) {
            if (item) { 
                count++;
            }
        }
    }
// rerun from recurision if it is not.
if (count !== 19) {
this.board =  [
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],
["","","","","","","","",""] 
];
this.placeShips()   
}
}
this.stratgy = {
board :  [
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],   
["","","","","","","","",""],
["","","","","","","","",""],
["","","","","","","","",""] 
],
missCount: [],
hitCount: []    
}
this.receiveAttack = function(y,x){
if (this.board[y][x]) {
hit(this.board[y][x])
this.stratgy.board[y][x] = "X";
this.stratgy.hitCount.push([x,y]) 
isSunkCheck(this.board[y][x])  
} else {
this.stratgy.board[y][x] = 'O'
this.stratgy.missCount.push([x,y])    
return "thats a miss"    
}

}
this.gameOver = function (){
for (let index = 0; index < this.ship.length; index++) {
let outcome  
if (this.ships[index].sunk) {
outcome = true    
} else {outcome = false}
    
}
return outcome
}
this.sendattack = function(event){
const attackcell = event.target
opponent.gameboard.receiveAttack(attackcell.dataset.y,attackcell.dataset.x)  
console.log(attackcell)  
gameloop()
}
}
