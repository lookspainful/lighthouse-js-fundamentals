function generateBoard(white, black){
  //Let's create a board
  const board = new Array(8);
  for (let i = 0; i < 8; i++){
    board[i] = new Array(8);
    board[i].fill(0);
  }

  //Get x and y coordinates of queens
  let wX = white[0];
  let wY = white[1];
  let bX = black[0];
  let bY = black[1];

  //Put them on the board
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (wX === i && wY === j){
        board[i].splice([j], 1, 1);
      }
      else if (bX === i && bY === j){
        board[i].splice([j], 1, 1);
      }
    }
  }

  return board;
}

function queenThreat(board){
  //Index the position of both queens
  let index = [];
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (board[i][j] === 1){
        index.push([i, j]);
      }
    }
  }
  //Compare the index positions and see if they ever touch
  //If they're in the same row
  if (index[0][0] === index[1][0]){
    return true;
  }
  //If they're in the same column
  if (index[0][1] === index[1][1]){
    return true;
  }
  //Math.abs is super, super good for this. It returns a positive integer.
  //Subtract your columns from your rows. If the values are the same, they're diagonal.
  //i.e, [1,4] and [5,0]. 1-5 = -4 (or absolute of 4), and 4-0 = 4. 4=4, return true. Math is crazy.
  console.log(Math.abs(index[0][0] - index[1][0]), Math.abs(index[0][1] - index[1][1]))
  if (Math.abs(index[0][0] - index[1][0]) === Math.abs(index[0][1] - index[1][1])){
    return true;
  }

  return index;
}




let whiteQueen = [1, 4];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));