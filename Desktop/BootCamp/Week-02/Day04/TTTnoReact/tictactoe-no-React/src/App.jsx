import './App.css'



function checkDiagonals(Board, Victory) {
  const storedValues = [];

  for (let i = 0; i < Board.length - 1; i++) {
    if (Board[i] === Board[i + 4] && Board[i + 4] === Board[i + 8]) {
      storedValues.push(i)
      storedValues.push(i + 4)
      storedValues.push(i + 8)

      if (storedValues === Victory[6] || storedValues === Victory[7]) {
        return true
      }
    }

    for (let i = 0; i < Board.length - 1; i++) {
      if (Board[i] === Board[i + 2] && Board[i + 2] === Board[i + 4]) {
        storedValues.push(i)
        storedValues.push(i + 2)
        storedValues.push(i + 4)

        if (storedValues === Victory[6] || storedValues === Victory[7]) {
          return true
        }
      }


    }
  }
}


function checkRows(Board, Victory) {
  const storedValues = [];
  for (let i = 0; i < Board.length - 1; i++) {
    if (Board[i] === Board[i + 1] && Board[i + 1] === Board[i + 2]) {
      storedValues.push(i);
      storedValues.push(i + 1);
      storedValues.push(i + 2)

      if (storedValues === Victory[3] || storedValues === Victory[4] || storedValues === Victory[5]) {
        return true
      }
    }
  }
}

function checkColumns(Board, Victory) {
  const storedValues = [];
  for (let i = 0; i < Board.length - 1; i++) {
    if (Board[i] === Board[i + 3] && Board[i + 3] === Board[i + 6]) {
      storedValues.push(i);
      storedValues.push(i + 3);
      storedValues.push(i + 6)

      if (storedValues === Victory[6] || storedValues === Victory[7]) {
        return true
      }
    }
  }

}

function checkWinner(Board, Victory) {
  let winner = false;

  console.log(checkDiagonals(Board, Victory))
  console.log(checkRows(Board, Victory));
  console.log(checkColumns(Board, Victory));

}


// function checkWinner(Board) {

//   //approach counting without Victory
//   for (let i=0; i<Board.length-1; i++) {
//     //check for rows
//     if (Board[i] === Board[i+1] && Board[i+1] === Board[i+2])
//     {return true}

//     //check for columns
//     if (Board[i] === Board[i+3] && Board[i+3] === Board[i+6])
//     {return true}



//     //check for diagonal 1
//     if (Board[i] === Board[i+4] && Board[i+4] === Board[i+8])
//     {return true}

//     //check for diagonal 2
//     if (Board[i] === Board[i+2] && Board[i+2] === Board[i+4])

//     //problem: there are other cases where diagonals meet without
//     //being diagonals: e.g., 
//     // "X", "", "X",
//     // "", "X", "",
//     // "", "", "",
//     //where i[0]==i[2]==i[4], i.e., i[j]==i[j+2]==i[j+4]


//   }


//   // for diagonals, Victory array index 6 and 7

// }

const Board = [

  "", "", "",
  "", "", "",
  "", "", "",

]

const Victory = [
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
]


function App() {

  return (
    <>

    </>
  )
}

export default App
