function sudokuSolver(matrix) {
	let nonPossibility = {},notThese = [], empties = 81;
	while (empties ) {
		empties = 0;
		for (var vert = 0; vert < matrix.length; vert++) {
			for (var hor = 0; hor < matrix.length; hor++) {
				if (matrix[vert][hor] === 0) {
					nonPossibility = {};
					for (var check = 0; check < matrix.length; check++) {
						if (matrix[vert][check] > 0) {
							nonPossibility[matrix[vert][check]] = true;
						}
						if (matrix[check][hor] > 0) {
							nonPossibility[matrix[check][hor]] = true;
						}
						//console.log(possibleNumbers);
					}
					for (var boxVert = Math.floor(vert / 3) * 3; boxVert < Math.floor(vert / 3) * 3 + 3; boxVert++) {
						for (var boxHor = Math.floor(hor / 3) * 3; boxHor < Math.floor(hor / 3) * 3 + 3; boxHor++) {
							if (matrix[boxVert][boxHor]) {
								nonPossibility[matrix[boxVert][boxHor]] = true;
							}
						}
					}
					notThese = Object.keys(nonPossibility);
					if (notThese.length == 8) {
						for (var i = 1; i <= 9; i++) {
							if (notThese.indexOf('' + i) < 0) {
								matrix[vert][hor] = i;
							}
						}
					} else {
						empties++;
					}
				}
			}
		}
	}
	return matrix;
}

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];
console.log(sudokuSolver(puzzle));
