export function horizontialCheck(array,x,length){
let outcome = false    
for (let index = x; index < x + length; index++) {
if (array[index] === "") {
outcome = true    
}  else {
outcome = false    
}  return outcome
    
}    

}

export function verticleCheck(array,y,x,length){
let outcome = false;
for (let index = y; index < y + length ; index++) {
    if(array[index][x] === "") {
     outcome = true   
    } else {
     return false   
    }   
}    
return outcome
}