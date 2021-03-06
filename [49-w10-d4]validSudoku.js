// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input:

  // board = [
  //   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  //   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  //   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  //   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  //   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  //   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  //   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  //   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  //   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  // ];

//return true

// Input:
board =
[
 ["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Solution:

function validSudoku(board) {
	let rowsObj = {};
	let colsObj = {};
	let squareObj = {};
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board.length; col++) {
      
			if (board[row][col] == '.') {continue}
				if (rowsObj[row] === undefined) rowsObj[row] = {};
				if (colsObj[col] === undefined) colsObj[col] = {};
				if (squareObj[(Math.floor(row / 3) * 3 + Math.floor(col / 3))] === undefined)
					squareObj[Math.floor(row / 3) * 3 + Math.floor(col / 3)] = {};
				if (
					board[row][col] in rowsObj[row] ||
					board[row][col] in colsObj[col] ||
					board[row][col] in squareObj[Math.floor(row / 3) * 3 + Math.floor(col / 3)]
				) {
					return false;
				}    
				rowsObj[row][board[row][col]] = true;
				colsObj[col][board[row][col]] = true;
				squareObj[(Math.floor(row / 3) * 3 + Math.floor(col / 3))][
					board[row][col]
				] = true;
			
		}
	}
	return true;
}

