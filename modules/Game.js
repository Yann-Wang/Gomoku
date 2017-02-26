/**
 * Created by a_wav on 2016/12/9.
 */
import React from 'react'
import Board from './Board'
import MoveList from './MoveList'

class Game extends React.Component {
    constructor() {
        super();
        this.jumpTo = this.jumpTo.bind(this);
        this.chooseBoardType = this.chooseBoardType.bind(this);
        this.winner = null;

        this.state = {
            history: [{
                squares: (new Matrix(15,15)),
                active:null
            }],
            xIsNext: true,
            stepNumber: 0,
            boardType: 15
        };
    }

    handleClick(x, y, e) {
        let history = this.state.history;
        let stepNumber = this.state.stepNumber;
        let current, squaresCopy, squaresCopyMtx, historyCopy;
        let boardType = this.state.boardType;

        current = history[stepNumber];

        // copy squares, avoid change this.state.history.
        squaresCopy = current.squares.copy();
        squaresCopyMtx = squaresCopy.init();

        //this.winner = calculateWinner(squares);
        // when this square has already have a piece, or one side win,
        // stop playing.


        if (this.winner || squaresCopyMtx[x][y]) {
            return;
        }

        squaresCopyMtx[x][y] = this.state.xIsNext ? 'X' : 'O';

        ++stepNumber;

        if(stepNumber != history.length){
            historyCopy = history.slice(0,stepNumber);
        }else{
            historyCopy = history.slice();
        }

        this.winner = calculateWinner(squaresCopy, x, y, boardType);

        historyCopy = historyCopy.concat([{
            squares: squaresCopy,
            active:{
                x:x,
                y:y
            }
        }]);


        this.setState({
            stepNumber: stepNumber,
            history: historyCopy,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step,e) {
        let history = this.state.history;
        let boardType = this.state.boardType;

        if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
            e.preventDefault();
        }

        let squaresCopy = history[step].squares.copy();
        let active      = history[step].active;

        if(active){
            this.winner = calculateWinner(squaresCopy, active.x, active.y, boardType);
        }else{
            this.winner = null;
        }


        this.setState({
            stepNumber: step,
            xIsNext: (!(step % 2))
        });
    }


    chooseBoardType(e){
        let boardType = +e.target.value;
        this.winner = null;
        this.setState({
            history:[{
                squares: (new Matrix(boardType,boardType)),
                active:null
            }],
            stepNumber: 0,
            xIsNext: true,
            boardType:boardType
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.winner;
        const boardType = this.state.boardType;

        let status;
        if (winner) {
            status = 'Winner: ' + winner.winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'black piece' : 'white piece');
        }


        return (
            <div className="game">
                <div className="game-board">
                    <select className="board-type" defaultValue="15" onChange={(e) => this.chooseBoardType(e)}>
                        <option value="19">19x19</option>
                        <option value="15">15x15</option>
                    </select>
                    <Board
                        squares={current.squares}
                        onClick={(x, y, e) => this.handleClick(x, y, e)}
                        winner={this.winner}
                        boardType={boardType}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <MoveList history={history} jumpTo={this.jumpTo} stepNumber={this.state.stepNumber} ascending={this.state.ascending} />
                </div>
            </div>
        );
    }

    componentDidMount(){

        window.addEventListener('mousedown', function(e) {
            document.body.classList.add('mouse-navigation');
            document.body.classList.remove('kbd-navigation');
        });

        window.addEventListener('keydown', function(e) {
            if (e.keyCode === 9) { // tab
                document.body.classList.add('kbd-navigation');
                document.body.classList.remove('mouse-navigation');
            }
        });


    }
}

function Matrix(x,y){
    let arr = (new Array(x)).fill(null);

    for(let c=0; c<x;++c){
        arr[c] = (new Array(y)).fill(null);
    }

    arr.row = x;
    arr.col = y;

    this.matrix = arr;
}

Matrix.prototype.init = function(){
    return this.matrix;
};

Matrix.prototype.copy = function(){
    let mtx = this.matrix;
    let row = mtx.row;
    let col = mtx.col;
    let mtx2 = (new Matrix(row, col));
    let arrCopy = mtx2.init();

    for(let i=0; i<row; ++i){
        for(let j=0; j<col; ++j){
            arrCopy[i][j] = mtx[i][j];
        }
    }

    return mtx2;
};

/**
 *
 * @param squares
 * @param x
 * @param y
 * @param boardType
 * @returns {*}
 */
function calculateWinner(squares, x, y, boardType) {
    let mtx = squares.init();
    let ele = mtx[x][y];

    let horizontal=1, vertical=1, diagonal=1, back_diagonal=1;
    let line=[[{x:x,y:y}],[{x:x,y:y}],[{x:x,y:y}],[{x:x,y:y}]];
    let winnerLine = [];

    let i,j,k;


    // calc horizontal count of same element
    i = y-1;

    while(i>=0){
        if(mtx[x][i] === ele){
            line[0].push({x:x,y:i});
            ++horizontal;
            --i;
        }else{
            break;
        }
    }

    i = y+1;

    while(i<boardType){
        if(mtx[x][i] === ele){
            line[0].push({x:x,y:i});
            ++horizontal;
            ++i;
        }else{
            break;
        }

    }


    // calc vertical count of same element
    i = x-1;

    while(i>=0){
        if(mtx[i][y] === ele){
            line[1].push({x:i,y:y});
            ++vertical;
            --i;
        }else{
            break;
        }
    }

    i = x+1;

    while(i<boardType){
        if(mtx[i][y] === ele){
            line[1].push({x:i,y:y});
            ++vertical;
            ++i;
        }else{
            break;
        }
    }

    // calc diagonal count of same element
    i = x+1;
    j = y-1;

    while(i<boardType && j>=0){
        if(mtx[i][j] === ele){
            line[2].push({x:i,y:j});
            ++diagonal;
            ++i;
            --j;
        }else{
            break;
        }
    }

    i = x-1;
    j = y+1;

    while(i>=0 && j<boardType){
        if(mtx[i][j] === ele){
            line[2].push({x:i,y:j});
            ++diagonal;
            --i;
            ++j;
        }else{
            break;
        }
    }

    // calc back_diagonal count of same element
    i = x-1;
    j = y-1;

    while(i>=0 && j>=0){
        if(mtx[i][j] === ele){
            line[3].push({x:i,y:j});
            ++back_diagonal;
            --i;
            --j;
        }else{
            break;
        }
    }

    i = x+1;
    j = y+1;

    while(i<boardType && j<boardType){
        if(mtx[i][j] === ele){
            line[3].push({x:i,y:j});
            ++back_diagonal;
            ++i;
            ++j;
        }else{
            break;
        }
    }

    for(k=0;k<4;++k){
        if(line[k].length>=5){
            winnerLine.push(line[k]);
        }
    }

    if(winnerLine.length){
        return {
            winner:ele,
            line: winnerLine
        };
    }

    return null;


}

export default Game;