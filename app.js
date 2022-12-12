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

// Giving each spot on the board the corresponding spot in the array
const updateHTML = () => {
    for (let i = 0; i < squares.length; i++){
        squares[i] = spots[i]
    }
}

const selectedSquare = (e) => {
    // console.log(e.target)
    e.target.innerText = currentPlayer.selection
    whosTurnIsIt()
    
    console.log(spots)
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
    squares[i].addEventListener('click', selectedSquare)
}



// PREVIOUS VERSION BELOW

// const gameFlow = () => {
//     let currentPlayer = player1

//     for (let i = 0; i < squares.length; i++){
//         squares[i].addEventListener('click', () => {

//             if (spots[i] !== ''){
//                 return
//             }

//             // Setting the square to that players choice
//             spots[i] = currentPlayer.selection

//             // Deciding who's turn it is 
//             if (currentPlayer === player1){
//                 currentPlayer = player2
//             } else {
//                 currentPlayer = player1
//             }

//             // Updating HTML
//             updateHTML()
//         })
//     }
// }
