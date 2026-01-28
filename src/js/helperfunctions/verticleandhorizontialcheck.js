export function horizontialCheck(array,x,length){
let outcome = false    
for (let index = Math.max(0,x-1); index <= x + length; index++) {
if (x + length > array.length) return false    
if (array[index] === "") {
outcome = true    
}  else {
outcome = false    
}  return outcome
    
}    

}

export function verticleCheck(array,y,x,length){
let outcome = false;
for (let index = y ; index <= y + length ; index++) {
    if (y + length > array.length) return false    
    if(array[index][x] === "") {
     outcome = true   
    } else {
     return false   
    }   
}    
return outcome
}

