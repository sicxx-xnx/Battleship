import { horizontialCheck } from "../helperfunctions/verticleandhorizontialcheck"
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
["","","","","","","","",""] 
]
this.player = null   
this.placeShips = function (){
this.ships.forEach((battleship)=>{   
if (battleship.position === 'horizontial') {
    let isPlaced = false
    while (isPlaced == false) {
    const x = Math.floor(Math.random() * 8)
    const y = Math.floor(Math.random() * 8)
    if (horizontialCheck(this.board[y],x,battleship.length) ) {
    this.board[y][x] = battleship
    isPlaced = true     
    }
    } 
} else {
let isPlaced = false
    while (isPlaced == false) {
    const x = Math.floor(Math.random() * 8)
    const y = Math.floor(Math.random() * 8)
    if (horizontialCheck(this.board,y,x,battleship.length) ) {
    this.board[y][x] = battleship
    isPlaced = true     
    }
    }    
}
})    
}
this.ships = [
cruiser1 = new ship(1),
cruiser2 = new ship(1),
cruiser3 = new ship(1),
cruiser4 = new ship(1),
destroyer1 = new ship(3),
destroyer2 = new ship(3),
battleship = new ship(5),
patroll = new ship(2),
patrol2 = new ship(2)
]

}