const squares = document.getElementsByClassName('square')

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

//Setting the starting player to player1
let currentPlayer = player1
let winner = false

// Giving each spot on the board the corresponding spot in the array
const linkingArrayAndBoard = () => {
    for (let i = 0; i < squares.length; i++){
        spots[i] = squares[i].innerText
    }
}

const selectedSquare = (e) => {

    // console.log(e.target)
    if (e.target.innerText !== ''){
        return
    }
    
    e.target.innerText = currentPlayer.selection
    linkingArrayAndBoard()
    checkForWinner()
    whosTurnIsIt()
    console.log(spots)
}


const checkForWinner = () => {

    if (spots[0] === spots[1] && spots[2]){
        alert(`${currentPlayer.name} won`)
    } else if (spots[3] === spots[4] && spots[5]){
        alert(`${currentPlayer.name} won`)
    } else if (spots[6] === spots[7] && spots[8]){
        alert(`${currentPlayer.name} won`)
    } else if (spots[0] === spots[3] && spots[6]){
        alert(`${currentPlayer.name} won`)
    } else if (spots[1] === spots[4] && spots[7]){
        alert(`${currentPlayer.name} won`)
    } else if (spots[2] === spots[5] && spots[8]){
        alert(`${currentPlayer.name} won`)
    } else if (spots[0] === spots[4] && spots[8]){
        alert(`${currentPlayer.name} won`)
    } else if (spots[2] === spots[4] && spots[6]){
        alert(`${currentPlayer.name} won`)
    }
}

// Deciding who's turn it is
const whosTurnIsIt = () => {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }

    // return (currentPlayer ? player1 : player2)
}

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', selectedSquare)
}
