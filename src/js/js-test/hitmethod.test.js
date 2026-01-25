import { ship } from "../shipgeneration"
import "../hits/hitmethod"
import { hit } from "../hits/hitmethod"

test("does hit function increase hitammount",()=>{
let test = new ship(3)    
hit(test)
expect(test.hitAmount).toBe(1)    
})