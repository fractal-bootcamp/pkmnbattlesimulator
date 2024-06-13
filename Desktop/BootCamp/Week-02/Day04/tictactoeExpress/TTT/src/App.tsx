import { useState } from "react"
import './App.css'




function Squares({ value, onSquaresClick }) {

  return (
    <button className="square" onClick={onSquaresClick} >{value}</button>
  )
}

export function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  console.log("tic tac toe re-rendered")

  function handleOnClick() {
    // declare a var nextSquares that will slice() the array squares
    const nextSquares = squares.slice();
    //the var nexSquares will slice [0] in the array squares and replace null with "X" value
    nextSquares[0] = "X";
    // the function setSquares will actualize the useState of squares to nextSquares
    //in this sense, everything but squares.slice() in 0 with new value "X" will be
    //still the same
    setSquares(nextSquares)

  }

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <div>
        <Squares value={squares[0]} onSquaresClick={handleOnClick} />
        <Squares value={squares[1]} />
        <Squares value={squares[2]} />
      </div>

      <div>
        <Squares value={squares[3]} />
        <Squares value={squares[4]} />
        <Squares value={squares[5]} />
      </div>

      <div>
        <Squares value={squares[6]} />
        <Squares value={squares[7]} />
        <Squares value={squares[8]} />
      </div>

    </>
  )
}

const NamePlate = () => {
  const [name, setName] = useState("")

  console.log("name plate re-rendered")

  return <div>
    <input value={name} onChange={(e) => setName(e.target.value)} />
  </div>
}

export default function App() {
  console.log("app re-rendered")

  return <>
    <NamePlate />
    <TicTacToe />
  </>
}


// import { useState } from 'react'
// import './App.css'


// function Square({ value, onSquareClick }) {

//   return (
//     <>
//       <button className='square' onClick={onSquareClick}>{value}</button>
//     </>
//   )
// }

// function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null))

//   function handleClick() {
//     const nextSquares = squares.slice();
//     nextSquares[0] = "X";
//     setSquares(nextSquares)
//   }

//   return (
//     <>
//       <div>
//         <Square value={squares[0]} onSquareClick={handleClick} />
//         <Square value={squares[1]} />
//         <Square value={squares[2]} />
//       </div>

//       <div>
//         <Square value={squares[3]} />
//         <Square value={squares[4]} />
//         <Square value={squares[5]} />
//       </div>

//       <div>
//         <Square value={squares[6]} />
//         <Square value={squares[7]} />
//         <Square value={squares[8]} />
//       </div>
//     </>
//   )
// }

// export default Board
