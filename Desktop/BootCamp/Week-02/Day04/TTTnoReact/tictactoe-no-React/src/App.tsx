import './App.css'
import React from "react"
import { useState } from "react"



function calculateWinner({ squares }) {


  const lines = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  //a for-loop will run for the length of that array

  for (let i = 0; i < lines.length; i++) {

    //each array will be fragmented in three components, into a new array
    const [a, b, c] = lines[i];

    //inside this level, if a exists, a = b, and a = c, that means that they are equivalent

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      //in that case, return squares[a] as the value for declarin the winner.
      //if the value is "X", X is the winner, if its "O", O is the winner
      return squares[a];
    }
  }
  return null;
}

// function isXNext() {

//   let flip = true;

//   if (flip = true) {
//     let value2 = "X"
//   }

//   else

//     let value1 = "O";

// }

function Square({ value, onClickFunction }) {

  return (
    <>
      <div>
        <button className="square" onClick={onClickFunction} >{value}</button>
      </div>
    </>
  )
}


function App() {
  const [squares, setSquare] = useState<string[]>(Array(9).fill(""));
  const [history, setHistory] = useState<string>("");
  const [isXNext, setIsXNext] = useState<boolean>(false);
  const [whoIsWinner, setWhoIsWinner] = useState<string>("");


  const handleClick = (n: number) => {
    //everytime something clicks

    //"X" will be displayed in the square


    const winner = calculateWinner({ squares })
    if (calculateWinner({ squares }) != null) {

      setWhoIsWinner(`${winner} is the winner!`)
    }

    if (isXNext == false) {

      const nextSquare = squares.slice();
      nextSquare[n] = "X";
      squares[n] = "O";
      setSquare(nextSquare);
      setIsXNext(true)
      return winner;
      // setHistory(() => "X")
    }

    else if (isXNext == true) {
      const nextSquare = squares.slice();
      nextSquare[n] = "X";
      squares[n] = "O";
      setIsXNext(false)
      return winner;
      // setHistory(() => "O")
    }




  }

  // //we will keep track of all the index of the squares in an array of numbers
  // const indexOfMove = squares.indexOf(squares[n]);
  // setHistory(history.concat(indexOfMove));






  //we have lines, the possible winner combinations


  return (
    <div id="root">
      <h2>Tic Tac Toe</h2>
      <div className="board">
        <Square value={squares[0]} onClickFunction={() => handleClick(0)} />
        <Square value={squares[1]} onClickFunction={() => handleClick(1)} />
        <Square value={squares[2]} onClickFunction={() => handleClick(2)} />
        <Square value={squares[3]} onClickFunction={() => handleClick(3)} />
        <Square value={squares[4]} onClickFunction={() => handleClick(4)} />
        <Square value={squares[5]} onClickFunction={() => handleClick(5)} />
        <Square value={squares[6]} onClickFunction={() => handleClick(6)} />
        <Square value={squares[7]} onClickFunction={() => handleClick(7)} />
        <Square value={squares[8]} onClickFunction={() => handleClick(8)} />
      </div>
      <h3>{whoIsWinner}</h3>
    </div>
  );
};
export default App






// const columnsVictory = [

//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
// ] satisfies [number, number, number][]

// const rowVictory = [
//   [0, 1, 2], // case 0
//   [3, 4, 5],
//   [6, 7, 8],
// ] satisfies [number, number, number][]

// const diagonalVictory = [
//   [0, 4, 8],
//   [2, 4, 6]
// ] satisfies [number, number, number][]



// const checkRows = (board: string[], victoryCases: [number, number, number][]) => {
//   for (let i = 0; i < victoryCases.length; i++) {
//     const currentVictoryCase = victoryCases[i]
//         const idx1 = currentVictoryCase[0]
//         const idx2 = currentVictoryCase[1]
//         const idx3 = currentVictoryCase[2]

//     if (idx1 === idx2 && idx2 === idx3) {

//       if (idx1 === board[idx1] )


//       return { winner: board[idx1] }
//     }
//   }

// }

// const checkColumns = (board: number[], victoryCases: [number, number, number][]) => {
//   for (let i = 0; victoryCases.length; i++) {
//     const currentVictoryCase = victoryCases[i]
//     const idx1 = currentVictoryCase[0]
//     const idx2 = currentVictoryCase[1]
//     const idx3 = currentVictoryCase[2]

//     if (board[idx1] === idx1 && board[idx2] === idx2 && board[idx3] === idx3 && board[idx1] && board[idx1]) {
//       return { winner: board[idx1] }
//     }
//   }

// }


// // in the checking Fs, we take an array (board) and an array of arrays(VictoryCases)
// //we do a for loop for as long as the victoryCases are, in this case, in Diagonals,
// // twice, and we store each element of each victory case array inside the general array
// // and we store it in idx1, idx2, idx3

// const checkDiagonals = (board: number[], victoryCases: [number, number, number][]) => {
//   for (let i = 0; i < victoryCases.length; i++) {
//     const currentVictoryCase = victoryCases[i];
//     const idx1 = currentVictoryCase[0]
//     const idx2 = currentVictoryCase[1]
//     const idx3 = currentVictoryCase[2]

//     console.log(idx1)
//     console.log(idx2)
//     console.log(idx3)

//     //then we compare
//     if (idx1 === board[idx1] && idx2 === board[idx2] && idx3 === board[idx3] && board[idx1] !== "") {
//       return { winner: board[idx1] }
//     }
//   }
// }


// const checkWinnerRows = (squares: string[]) => {
//   const rowsWinner = checkRows(squares, rowVictory)
//   console.log(rowsWinner);
// }
// const checkWinnerColumns = (squares: string[]) => {
//   const columnsWinner = checkColumns(squares, columnsVictory)
//   console.log(columnsWinner);
// }

// const checkWinnerDiagonal = (squares: string[]) => {
//   const diagonalWinner = checkDiagonals(squares, diagonalVictory)
//   console.log(diagonalWinner);
// }

// // const board: string[] = [

// //   "O", "", "X",
// //   "", "O", "",
// //   "X", "", "O",

// // ]


// const checkWinner = (squares: string[]) => {
//   checkWinnerRows(squares)
//   checkWinnerColumns(squares)
//   checkWinnerDiagonal(squares)

// }

// const winner = checkWinner(squares)

// console.log(winner)



// let board = squares

