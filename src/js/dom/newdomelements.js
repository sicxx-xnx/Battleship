const player1holderel = document.createElement("div")
player1holderel.className = "player-1-holder"

const player1title = document.createElement("h2")
player1title.classList = "player-1-title"
player1title.innerText = "PlayerOne"

const player1inputdiv = document.createElement("div")
player1inputdiv.className = "input-container"

const player1nameinputel = document.createElement("input")
player1nameinputel.type = "text"
player1nameinputel.id = "player-1-name"
player1nameinputel.className = "player-1-name"
player1nameinputel.placeholder = ""

const player1namelabel = document.createElement("label")
player1namelabel.htmlFor = "player-1-name"
player1namelabel.classList = "input-label"
player1namelabel.innerText = "Enter_Name"

const player1border = document.createElement("div")
player1border.className = "name-input-label"



export {player1border,player1holderel,player1title,player1inputdiv,player1nameinputel,player1namelabel}