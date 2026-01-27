import { gameinitholder, startGame } from "./currentdomelements";
import { player1border, player1holderel, player1inputdiv, player1nameinputel, player1namelabel, player1title } from "./newdomelements";

export function startplayer1(){
gameinitholder.replaceChild(player1holderel,startGame)  
gameinitholder.append(player1holderel)  
player1holderel.append(player1title,player1inputdiv)
player1inputdiv.append(player1nameinputel,player1namelabel,player1border)
}