import "../css/style.css"
import { background, gameboards, startGame } from "./dom/currentdomelements"
import { startplayer1 } from "./dom/dommethods"

startGame.addEventListener("click",startplayer1)
background.removeChild(gameboards)

