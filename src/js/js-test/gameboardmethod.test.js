import { gameboard } from "../gameboard/gameboardcon"
import { horizontialCheck, verticleCheck } from "../helperfunctions/verticleandhorizontialcheck"
import { ship } from "../shipgeneration"


// issue with below text, power is out and i dont know how to do an actual contains test, currently the test fails but it passes what i was actuley testing for wich is does cruiser 1 appear on the board






test("verfiicle check returns true when all spaces empty",()=>{
const game2 = new gameboard()
expect(horizontialCheck(game2.board[3],4,3)).toBe(true)    
})

test("verticle check returns true when all spaces empty",()=>{
const game2 = new gameboard()
expect(verticleCheck(game2.board,1,2,3)).toBe(true)    
})

test("horz check return false when 1 spaces taken",()=>{
const game2 = new gameboard()
game2.board[3][4] = 'x'
expect(verticleCheck(game2.board[3],4,3)).toBe(false)    
})

test("horz check return false when last space taken",()=>{
const game2 = new gameboard()
game2.board[3][7] = 'x'
expect(verticleCheck(game2.board[3],4,3)).toBe(false)    
})

test("verticle check returns false when 1 spaces taken",()=>{
const game2 = new gameboard()
game2.board[1][2] = 'x'
expect(verticleCheck(game2.board,1,2,3)).toBe(false)    
})
test("verticle check returns false when last spaces taken",()=>{
const game2 = new gameboard()
game2.board[2][0] = 'x'
expect(verticleCheck(game2.board,0,0,3)).toBe(false)    
})


test("expect gameboard to hold 19 objects",() => {
const game2 = new gameboard()
game2.placeShips()
    let count = 0;
    for (const subArr of game2.board) {
        for (const item of subArr) {
            if (item) { 
                count++;
            }
        }
    }

    count;
    expect(count).toBe(19)      
})