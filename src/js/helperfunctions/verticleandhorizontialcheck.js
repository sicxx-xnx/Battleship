export function horizontialCheck(array,x,length){
let outcome = false    
for (let index = x; index < x + length; index++) {
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
<<<<<<< HEAD
for (let index = y ; index <= y + length ; index++) {
=======
for (let index = y; index < y + length ; index++) {
>>>>>>> parent of 06ae917 (fix a bug in verticle and horizontial check)
    if (y + length > array.length) return false    
    if(array[index][x] === "") {
     outcome = true   
    } else {
     return false   
    }   
}    
return outcome
}