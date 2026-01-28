import { populateships, populatestratboard } from "../dom/dommethods"
import { currentplayer } from "./Savedinfo"

export const gameloop = function(){
populateships()
populatestratboard()
}