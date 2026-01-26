import { horizontialCheck, verticleCheck } from "../helperfunctions/verticleandhorizontialcheck"
import { hit } from "../hits/hitmethod"
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
this.player = null   
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
}
this.receiveAttack = function(y,x){
if (this.board[y][x]) {
hit(this.board[y][x])   
} else {
return "thats a miss"    
}

}
}