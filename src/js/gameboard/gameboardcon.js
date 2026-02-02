import { gameloop } from "../gamelogic/gamelogic"
import { currentplayer, opponent } from "../gamelogic/Savedinfo"
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
this.resetBoard = function(){
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
];
    this.stratgy.board = [
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
}
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
this.resetShips = function (){
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
 ];
 this.placeShips()  

}
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
this.lasthit.sunk = isSunkCheck(this.board[y][x]) 
this.lasthit.result = "hit" 
this.lasthit.cords = [x,y]
} else {
this.stratgy.board[y][x] = 'O'
this.stratgy.missCount.push([x,y]) 
this.lasthit.result = "miss" 
this.lasthit.cords = [x,y]   
return "thats a miss"    
}

}
this.gameOver = function (){
let outcome;      
for (let index = 0; index < this.ships.length; index++) {  
if (this.ships[index].sunk) {
outcome = true    
} else {return false}
    
}
return outcome
}
this.sendattack = function(event){
if (currentplayer.pc) {
    let attackRecived = false;
    let x;
    let y;

    while (!attackRecived) {

        if (opponent.gameboard.lasthit.result === "hit") {
            y = opponent.gameboard.lasthit.cords[1];
            x = opponent.gameboard.lasthit.cords[0];

            if (Math.random() > .49) {
                if (y + 1 < opponent.gameboard.board.length) {
                    y++;
                } else {
                    y = Math.floor(Math.random() * 8);
                }
            } else {
                if (x + 1 < opponent.gameboard.board[0].length) {
                    x++;
                } else {
                    x = Math.floor(Math.random() * 8);
                }
            }

        } else {
            x = Math.floor(Math.random() * 8);
            y = Math.floor(Math.random() * 8);
        }

        if (!opponent.gameboard.stratgy.board[y][x]) {
            opponent.gameboard.receiveAttack(y,x);
            attackRecived = true;
        }
    }

    gameloop();

} else {
    const attackcell = event.target;
    opponent.gameboard.receiveAttack(attackcell.dataset.y, attackcell.dataset.x);
    gameloop();
}
}
this.lasthit = {
result : null,
cords: null,
sunk : false
}
}
