export function isSunkCheck(shipobj) {
if (shipobj.hitAmount === shipobj.length) {
shipobj.sunk = true 
return true   
} else {
return false    
}   

}