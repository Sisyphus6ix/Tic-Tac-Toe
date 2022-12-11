const squares = document.getElementsByClassName('square')

// Creating board
const createBoard = {
     gameBoard : ['', '', '', '', '', '', 
     '', '', '' ]
}

// Creating player
const player = (name, selection) => {
    return { name, selection }
}

const player1 = player('Ryan', 'X')
const player2 = player('Joe', 'O')

let spots = createBoard.gameBoard
// console.table(spots)

// Giving each spot on the board the corresponding spot in the array
const populateHTML = () => {
    for (let i = 0; i < squares.length; i++){
        squares[i].innerText = spots[i]
    }
}

// const checkForWinner = () => {
//     if (spots[0] && spots[1] && spots[2] === 'X'){
//         alert('This combination wins')
//     } else if 
// }



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

//             // checkForWinner()

//             // Updating HTML
//             populateHTML()
//         })
//     }
// }

// gameFlow()

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        console.log('Working')
    })
}