export const ship = function (length){
if (isNaN(length)) {
    throw new Error("Error, must be a number");
}
this.length = length
this.hitAmount = 0
this.sunk = false
this.position = Math.random() > 0.49 ? "horizontial":"verticle"
}