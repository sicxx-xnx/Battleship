import { ship } from "../shipgeneration"

test.skip("check ship generation",()=>{
const data = new ship(1)    
expect(data).toEqual({length: 1, hitAmount: 0, sunk: false,})    
})