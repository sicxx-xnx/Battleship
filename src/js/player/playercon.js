import { gameboard } from "../gameboard/gameboardcon"

export function player(name, pcplayertrueorfalse){
this.name = name
this.pc = pcplayertrueorfalse
this.gameboard = new gameboard()   
}