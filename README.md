
#### Gomoku
> Gomoku is an abstract strategy board game. Also called Gobang or Five in a Row, it is traditionally played with Go pieces (black and white stones) on a go board with 19x19 (15x15) intersections; however, because pieces are not moved or removed from the board, gomoku may also be played as a paper and pencil game. This game is known in several countries under different names.

> Black plays first if white did not win in the previous game, and players alternate in placing a stone of their color on an empty intersection. The winner is the first player to get an unbroken row of five stones horizontally, vertically, or diagonally.

##### Final presentation
- access https://yann-wang.github.io/

##### start project

```shell

cd tic_tac_toe
npm install

# start project in development environment
# for Linux/Mac users
NODE_ENV=development npm start
# for Windows users
SET "NODE_ENV=development" && npm start

# start project in production environment
# for Linux/Mac users
NODE_ENV=production npm start
# for Windows users
SET "NODE_ENV=production" && npm start

```

##### presentation
- access http://localhost:8080/

##### features
- Declaring a Winner
- Storing a History, Showing the Moves, Implementing time Travel
- Display the move locations in the format "(2, 3)" instead of "6".
- Bold the currently-selected item in the move list.
- Rewrite Board to use two loops to make the squares instead of hardcoding them.
- Add a toggle button that lets you sort the moves in either ascending or descending order.
- When someone wins, highlight the three squares that caused the win.

##### tag
- v2.0  game displayed at /index.html
- v1.8  game displayed at /game

##### cite
- [wikipedia](https://en.wikipedia.org/wiki/Gomoku)
- [Tutorial: Intro To React](https://facebook.github.io/react/tutorial/tutorial.html)
