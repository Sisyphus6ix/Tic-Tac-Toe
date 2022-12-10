const squares = document.getElementsByClassName('square')

// Creating board
const createBoard = {
     gameBoard : ['O', 'X', 'O', 'X', 'O', 'X', 
     'O', 'X', 'O' ]
    }

const player = (name, selection) => {
    const message = () => `${name} has chosen ${selection}`
    return { name, selection, message }
}

const me = player('Ryan', 'X')
console.log(me.message())

let game = createBoard.gameBoard
console.table(game)

// for (let i = 0; i < game.length; i++){
//     let squares = document.createElement('div')
//     squares.appendChild(game[i])
// }

// for (spot of game){
//     squares.appendChild(spot)
// }
