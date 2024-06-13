function calculateWinner(squares) {

    //we have lines, the possible winner combinations

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

