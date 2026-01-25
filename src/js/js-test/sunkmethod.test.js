
import { hit } from "../hits/hitmethod";
import { isSunkCheck } from "../hits/sunkmethod";
import { ship } from "../shipgeneration";


test("test returns false when length does not match hitammount",()=>{
let test = new ship(3)    
isSunkCheck(test)
expect(test.sunk).toBe(false)    
})

test("test returns true from a object standpoint",()=>{
let test = new ship(1)  
hit(test)  
isSunkCheck(test)
expect(test.sunk).toBe(true)    
})