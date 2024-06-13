
function checkDiagonals(Board, Victory) {
    const storedValuesDiags = [];

    for (let i = 0; i < Board.length - 1; i++) {
        if (Board[i] === Board[i + 4] && Board[i + 4] === Board[i + 8]) {
            storedValuesDiags.push(i)
            storedValuesDiags.push(i + 4)
            storedValuesDiags.push(i + 8)
            console.log("from diagonal 1 generic")
            console.log(storedValuesDiags)
            if (storedValuesDiags === Victory[6] || storedValuesDiags === Victory[7]) {
                console.log("from diagonal 1 meeting victory 6 and 7")
                console.log(true)
            }
        }


        for (let i = 0; i < Board.length - 1; i++) {
            if (Board[i + 2] === Board[i + 4] && Board[i + 4] === Board[i + 6]) {
                storedValuesDiags.push(i + 2)
                storedValuesDiags.push(i + 4)
                storedValuesDiags.push(i + 6)
                console.log("from diagonal 2 generic")
                console.log(storedValuesDiags)
                if (storedValuesDiags === Victory[6] || storedValuesDiags === Victory[7]) {
                    console.log("from diagonal 2 meeting victory 6 and 7")
                    console.log(true)
                }
            }


        }
    }
}


function checkRows(Board, Victory) {
    const storedValuesRows = [];
    for (let i = 0; i < Board.length - 1; i++) {
        if (Board[i] === Board[i + 1] && Board[i + 1] === Board[i + 2]) {
            storedValuesRows.push(i);
            storedValuesRows.push(i + 1);
            storedValuesRows.push(i + 2)
            console.log(storedValuesRows)
            if (storedValuesRows === Victory[3] || storedValuesRows === Victory[4] || storedValuesRows === Victory[5]) {
                console.log("from checkRows")
                console.log(true)
                console.log(storedValuesRows)
            }
        }
    }
}

function checkColumns(Board, Victory) {
    const storedValuesColumns = [];
    for (let i = 0; i < Board.length - 1; i++) {
        if (Board[i] === Board[i + 3] && Board[i + 3] === Board[i + 6]) {
            storedValuesColumns.push(i);
            storedValuesColumns.push(i + 3);
            storedValuesColumns.push(i + 6)
            console.log(storedValuesColumns)
            if (storedValuesColumns === Victory[6] || storedValuesColumns === Victory[7]) {
                console.log("from checkColumns")
                console.log(true)
                console.log(storedValuesColumns)
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


const Board = [

    "", "", "X",
    "", "X", "",
    "X", "", "",

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

const diagonalVictory = [
    [0, 4, 8],
    [2, 4, 6]
] satisfies [number, number, number][]


const rowVictory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
] satisfies [number, number, number][]

const checkAllRows = (board: string[], rowVictoryCases: [number, number, number][]) => {
    for (let i = 0; rowVictoryCases.length; i++) {
        const index1 = rowVictoryCases[i];
        const index2 = rowVictoryCases[i + 1];
        const index3 = rowVictoryCases[i + 2]

        if (board[index1] === board[index2] && board[index2] === board[index3] && board[index1] !== "") {
            return { winner: board[index1] }
        }
    }

}


























const checkDiagonals2 = (board: string[], victoryCases: [number, number, number][]) => {
    for (let i = 0; i < victoryCases.length; i++) {
        const currentVictoryCase = victoryCases[i];
        const idx1 = currentVictoryCase[0]
        const idx2 = currentVictoryCase[1]
        const idx3 = currentVictoryCase[2]

        if (board[idx1] === board[idx2] && board[idx2] === board[idx3] && board[idx1] !== "") {
            return { winner: board[idx1] }
        }
    }


}

const checkWinner2 = (board: string[]) => {
    const diagonalWinner = checkDiagonals2(board, diagonalVictory)
    console.log(diagonalWinner);
}

const board = [

    "O", "", "X",
    "", "O", "",
    "X", "", "O",

]

checkWinner2(board)

// checkWinner(Board, Victory)