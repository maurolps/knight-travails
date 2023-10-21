const CHESS_BOARD_SIZE = 8;

const Knight = (x, y, child = null, path = null) => {
  return { x, y, child, path }
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
  const path = knight;
  const moves = [
    [ 2, 1],
    [ 1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [ 1, -2],
    [ 2, -1],
  ];

  let tempKnight = knight;
  for (let [ x , y ] of moves) {
    const moveX = knight.x + x;
    const moveY = knight.y + y;
    if (moveX >= 0 && moveY >= 0 && moveX < CHESS_BOARD_SIZE && moveY < CHESS_BOARD_SIZE) 
    {
      const newKnight = Knight(moveX, moveY, null, path);
      tempKnight.child = newKnight;
      tempKnight = newKnight;
    }
  }

  return knight;
}

const knightMoves = (start, end) => {
  const [knightX, knightY] = start;
  const [targetX, targetY] = end;

  if (
    knightX < 0 || knightY < 0 || knightX >= CHESS_BOARD_SIZE || knightY >= CHESS_BOARD_SIZE ||
    targetX < 0 || targetY < 0 || targetX >= CHESS_BOARD_SIZE || targetY >= CHESS_BOARD_SIZE )
  {
    console.log('Please enter valid coordinates within the range: [0,0] to [7,7]');
    return;
  }

  const knight = Knight(knightX, knightY);
  const target = Knight(targetX, targetY);
  const queue = [possibleMovesTree(knight)];
  board = gameBoard();
  
  const traverse = (root) => {
    if (queue.length < 1) return;
    const tmpKnight = queue.shift();
    const { x , y } = tmpKnight;
    board[x][y] = 1;
    if (x === target.x && y === target.y) {
      return tmpKnight;
    }
    while (root !== null) {
      const { x , y } = root;
      if (board[x][y] !== 1) {
        queue.push(root);
      }
      root = root.child;
    }
    const nextMove = possibleMovesTree(queue[0]);
    return traverse(nextMove);
  }

  let tracePath = (traverse(queue[0]));
  if (tracePath) {
    const path = [];
    while (tracePath) {
      path.unshift([tracePath.x , tracePath.y]);
      tracePath = tracePath.path;
    }
    console.log(`You made it in ${path.length-1} moves! Here's your path:`);
    for (x in path) {
      console.log(path[x]);
    }
  } else {
    console.log('Path not found.');
  }
}

knightMoves ([3,3],[4,3]);
// Output:
// You made it in 3 moves! Here's your path:
// [ 3, 3 ]
// [ 5, 4 ]
// [ 3, 5 ]
// [ 4, 3 ]


