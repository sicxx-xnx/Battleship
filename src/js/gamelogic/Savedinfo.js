export let playerone;
export let playertwo;
export let currentplayer;
export let opponent;
export let holder;
export let firelock;


export function setPlayer1(x){playerone = x
    return playerone
}
export function setPlayer2(x){playertwo = x
    return playerone
}

export function setCurrentPlayer(x){
currentplayer = x
return currentplayer    
}
export function setOpponent(x){
opponent = x
}
export function setHolder(x){
holder = x
}

export function firelocktrue(){
firelock = true
}
export function firelockfalse(){
firelock = false    
}