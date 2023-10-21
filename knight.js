const CHESS_BOARD_SIZE = 8;

const Knight = (x, y, child = null) => {
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

const possibleMovesTree = (knight) => {
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

  let tempKnight = knight;
  for (let [ x , y ] of moves) {
    const moveX = knight.x + x;
    const moveY = knight.y + y;
    if (moveX >= 0 && moveY >= 0 && moveX < CHESS_BOARD_SIZE && moveY < CHESS_BOARD_SIZE) 
    {
      const newKnight = Knight(moveX, moveY);
      tempKnight.child = newKnight;
      tempKnight = newKnight;
    }
  }

  return knight;
}

const knight = Knight(1,1,null);

console.log('Root move: ', possibleMovesTree(knight));
