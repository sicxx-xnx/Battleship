import { background } from "./currentdomelements";
import { resetButton, resetDiv } from "./newdomelements";


export function addRestart(){
background.append(resetDiv)
resetDiv.append(resetButton)
}