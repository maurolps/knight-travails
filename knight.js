const CHESS_BOARD_SIZE = 8;

const Knight = (x, y, child) => {
  return { x, y, child }
}

const gameBoard = () => {
  const size = CHESS_BOARD_SIZE;
  const board = [];
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}

const possibleMoves = (knight) => {
  const possibleMove = [];
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  for (let index in moves) {
    const moveX = knight.x + moves[index][0];
    const moveY = knight.y + moves[index][1];
    if (moveX >= 0 && moveY >= 0 && moveX < CHESS_BOARD_SIZE && moveY < CHESS_BOARD_SIZE)
    possibleMove.push([moveX, moveY]);
  }

  return possibleMove;
}

const knight = Knight(1,1,null);

console.log('Possible moves: ', possibleMoves(knight));
