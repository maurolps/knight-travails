# Knight Travails

Knight Travails finds and showcases the shortest path for a chess knight to move from a start position to a target. It utilizes breadth-first search (BFS) and Graph concepts to determinate the optimal path.

<h2>Factories and methods</h2>
<ul>
  <li><b>Knight: </b> A factory function for creating knight objects, with attributes for the knight's position, child knight, and path to its current position.</li>
  <li><b>gameBoard: </b>  Generates an 8x8 chessboard represented as a 2D array.</li>
  <li><b>possibleMovesTree: </b> Treat all possible moves the knight could make as children in a tree. Prevent any moves to go off the board.</li>
  <li><b>knightMoves: </b> The main method that finds and displays the shortest path for the knight to travel. This method uses recursive function to traverse and keep track of all the moves the knight can do.</li>
</ul>

Built in example:
```javascript
=>knightMoves([3, 3], [4, 3]);

 Output:
 
 You made it in 3 moves! Here´s your path:

[ 3, 3 ]
[ 5, 4 ]
[ 3, 5 ]
[ 4, 3 ]

```

This project is part of The Odin Project Curriculum: https://www.theodinproject.com/