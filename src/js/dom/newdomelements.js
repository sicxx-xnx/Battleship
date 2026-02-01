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

const submitPlayerButton = document.createElement("div")
submitPlayerButton.className = "submit-player"
submitPlayerButton.innerText = "Submit"


const player2holderel = document.createElement("div")
player2holderel.className = "player-2-holder"

const player2title = document.createElement("h2")
player2title.classList = "player-2-title"
player2title.innerText = "PlayerTwo"

const player2humanorpccheckmarkholder = document.createElement("div")
player2humanorpccheckmarkholder.className = "checkbox-holder"

const player2pccheckboxlabel = document.createElement("label")
player2pccheckboxlabel.classList = "switch"

const player2pccheckbox = document.createElement("input")
player2pccheckbox.type = "checkbox"

const spanel = document.createElement("span")
spanel.classList="slider"

const player2inputdiv = document.createElement("div")
player2inputdiv.className = "input-container"

const player2nameinputel = document.createElement("input")
player2nameinputel.type = "text"
player2nameinputel.id = "player-2-name"
player2nameinputel.className = "player-2-name"
player2nameinputel.placeholder = ""
player2nameinputel.disabled = true


const player2namelabel = document.createElement("label")
player2namelabel.htmlFor = "player-2-name"
player2namelabel.classList = "input-label-2"
player2namelabel.innerText = "Enter_Name"

const player2border = document.createElement("div")
player2border.className = "name-input-label-2"


const startGameButton = document.createElement("div")
startGameButton.className = "submit-player"
startGameButton.innerText = "Start Game"


const resetDiv = document.createElement("div")
resetDiv.classList.add("reset-holder")

const resetButton = document.createElement('div')
resetButton.classList.add('reset')
resetButton.innerText = 'Restart'

const winnerText = document.createElement("h2")

export {player1border,player1holderel,player1title,player1inputdiv,player1nameinputel,player1namelabel,submitPlayerButton,player2holderel,player2title,player2inputdiv,player2nameinputel,player2namelabel,player2border,
player2humanorpccheckmarkholder,player2pccheckboxlabel,player2pccheckbox,spanel,startGameButton,resetDiv,resetButton,winnerText    
}