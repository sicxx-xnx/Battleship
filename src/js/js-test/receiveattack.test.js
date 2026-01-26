import { gameboard } from "../gameboard/gameboardcon"
import { ship } from "../shipgeneration"


test("does hitAmmount increase when a hit is dected",()=>{
const game = new gameboard
game.board[0][0] = new ship(1)
game.receiveAttack(0,0)
expect(game.board[0][0].hitAmount).not.toBe(0)
})

test("does hit function return thats a miss on misses",()=>{
const game = new gameboard
game.board[0][0] = ''
game.receiveAttack(0,0)
expect(game.receiveAttack(0,0)).toBe("thats a miss")
})