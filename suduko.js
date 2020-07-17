function sudokuSolver(matrix) {
	let nonPossibility = {},notThese = [], empties = 81;  // Declaration
	while (empties) { //loop till 81
		empties = 0; //declaring a new values for empties till 81
		for (var vert = 0; vert < matrix.length; vert++) { //vertical loop till matrix length(0-8)
			for (var hor = 0; hor < matrix.length; hor++) { //hortizontal loop till matrix length(0-8)
				if (matrix[vert][hor] === 0) { //looking for horizontal zero value if zero occur then processes it!!
					nonPossibility = {}; //everytime intiate a empty Object whenever loop processes
					for (var check = 0; check < matrix.length ; check++) { //check all the value within a horizontal and on specify zero element vertical column 
						//console.log(matrix[vert])
						if (matrix[vert][check] > 0) { // setting a all the value true if it's greater than zero 
							nonPossibility[matrix[vert][check]] = true; //initated a value 
							//console.log(nonPossibility);
						}
						if (matrix[check][hor] > 0) { //again for horizontal intitates true if value is greater than zero 
							nonPossibility[matrix[check][hor]] = true; //initated
							//console.log(nonPossibility);
						}
						//console.log(possibleNumbers);
					}
					for (var boxVert = Math.floor(vert / 3) * 3; boxVert < Math.floor(vert / 3) * 3 + 3; boxVert++) { //this is loop for specify box of vertical processes all the element of vertical. 
						for (var boxHor = Math.floor(hor / 3) * 3; boxHor < Math.floor(hor / 3) * 3 + 3; boxHor++) {//this is loop for specify box of horizontal processes
							          // 0       0
							          // 0       1  processes
							if (matrix[boxVert][boxHor] > 0) { //checking a value in box which is greater then zero
								nonPossibility[matrix[boxVert][boxHor]] = true;//initated
							}
						}
					}
					notThese = Object.keys(nonPossibility); //taking all the keys into empty array notThese
					if (notThese.length == 8) {//totall length of notThese starting from zero to 8(0-8)
						for (var i = 1; i <= 9; i++) { //accessing of each keys value in notThese
							if (notThese.indexOf('' + i) < 0) { //checking the values of array of notThese with specify index is metioned and if value of index is greater than zero than processes it ..!!!
								matrix[vert][hor] = i; // store that i value in specify location 
							}
						}
					} else {
						empties++; //continue till the empties= 81 ;;;;
					}
				}
			}
		}
	}
	return matrix; //return a whole matrix after completition of 81 empties
}
var puzzle = [
	  // 0 1 2 3 4 5 6 7 8 -> check for hortizontal
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];
console.log(sudokuSolver(puzzle)); //printing a upper function matrix
