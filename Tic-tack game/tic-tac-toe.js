//this document below represents the HTML file that will be loaded on web page
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    //an array of 9 elements is created name board filled with null or empty slots
    let board = Array(9).fill(null);
    let gameActive = true;

    const checkWinner = () => {
        const winningCombinations = [
            //these are the winning combination with proper indexing wrt to box
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]
        ];
        //this for loops iterates over every combination array of the winningCombination
        for (let combination of winningCombinations) {
            //it extracts values from an array and assigns them to individual variables a,b,c
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                //below line shows that a=b=c and winner is declared 
                gameActive = false;
                alert(`${currentPlayer} wins!`);
                return;
            }
        }
        //the condition in if() states that it checks if there are no null values and all boxes are filled without any winningCombination
        if (!board.includes(null)) {
            gameActive = false;
            alert("It's a draw!");
        }
    };
//boxes is an array here 
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            if (!gameActive || board[index]) 
            return;
            board[index] = currentPlayer;
            //this below line sets the text content of an HTML element(box) to the value of current player
            box.textContent = currentPlayer;
            checkWinner();
            //if currentplayer is X is true then O will come next otherwise X will be there only
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });
//HERE FOR THE RESET BUTTON BELOW THE PAGE
    resetButton.addEventListener("click", () => {
        //when reset is clicked, all the boxes are filled with null values again
        board.fill(null);
        gameActive = true;
        //current player is set to X again
        currentPlayer = "X";
        //clears each box 
        boxes.forEach(box => box.textContent = "");
    });
});
