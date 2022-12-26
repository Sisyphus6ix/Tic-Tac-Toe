const squares = document.getElementsByClassName('square')
const main = document.getElementById('main')

// Creating board
const createBoard = {
     gameBoard : [
    '', '', '',
    '', '', '',
    '', '', '' ]
}

let spots = createBoard.gameBoard

// Creating player
const player = (name, selection) => {
    return { name, selection }
}

const player1 = player('Player1', 'X')
const player2 = player('Player2', 'O')

// Default state of game
let currentPlayer = player1
let winner = false
let winnerMessage = undefined

// Giving each spot on the board the corresponding spot in the array
const linkingArrayAndBoard = () => {
    for (let i = 0; i < squares.length; i++){
        spots[i] = squares[i].innerText
    }
}

const selectedSquare = (e) => {
    if (e.target.innerText !== ''){
        return
    }
    
    e.target.innerText = currentPlayer.selection
    linkingArrayAndBoard()
    checkForWinner()
    whosTurnIsIt()
    restartGame()
    console.log(spots)
}

const checkForWinner = () => {

    if (spots[0] === spots[1] && spots[2]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    } else if (spots[3] === spots[4] && spots[5]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    } else if (spots[6] === spots[7] && spots[8]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    } else if (spots[0] === spots[3] && spots[6]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    } else if (spots[1] === spots[4] && spots[7]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    } else if (spots[2] === spots[5] && spots[8]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    } else if (spots[0] === spots[4] && spots[8]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    } else if (spots[2] === spots[4] && spots[6]){
        winnerMessage = `${currentPlayer.selection} won`
        winner = true
    }

    if (winner === true){
        for (let i = 0; i < squares.length; i++ ){
            squares[i].removeEventListener('click', selectedSquare, true)
        }
    }

}

const restartGame = () => {
    // Creating DOM Elements
    let announcementDiv = document.createElement('div')
    let announcementMessage = document.createElement('h2')
    let restartBtn = document.createElement('button')
    announcementDiv.setAttribute('class', 'winner')
    restartBtn.setAttribute('type', 'button')
    restartBtn.setAttribute('name', 'restartBtn')
    restartBtn.insertAdjacentText('beforeend', 'Play Again')

    if (winnerMessage !== undefined){
        console.log(winnerMessage)

        main.appendChild(announcementDiv)
        announcementDiv.appendChild(announcementMessage)
        announcementDiv.appendChild(restartBtn)
        announcementMessage.innerText = winnerMessage
    }
    
    // Event listener for restart button
    // Loops through array and board to set values to empty string
    restartBtn.addEventListener('click', () => {
        for (let i = 0; i < squares.length; i++){
            squares[i].innerText = ''
            spots[i] = squares[i]
            squares[i].addEventListener('click', selectedSquare, true)
        }

        winner = false
        winnerMessage = undefined
        currentPlayer = player1
        main.removeChild(announcementDiv)
    })
}

// Deciding who's turn it is
const whosTurnIsIt = () => {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', selectedSquare, true)
}