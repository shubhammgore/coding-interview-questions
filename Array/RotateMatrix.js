// Output-
//   [ [ 6, 3, 0 ], 
//     [ 7, 4, 1 ], 
//     [ 8, 5, 2 ] 
//   ]


function rotateMatrix(matrix) {
    let rotatedMatrix = [];
  
    for (let col = 0; col < matrix[0].length; col++) {
      let newRow = [];
      for (let row = matrix.length - 1; row >= 0; row--) {
        newRow.push(matrix[row][col]);
      }
      rotatedMatrix.push(newRow);
    }
  
    return rotatedMatrix;
  }
  
  let m = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  
  let rotated = rotateMatrix(m);
  console.log(rotated);
  