/**
 * Created by a_wav on 2016/12/12.
 */
import React from 'react'
import Square from './Square'

class Board extends React.Component {
    constructor(props) {
        super(props);

    }

    renderSquare(x, y, c) {
        return <Square key={c} value={(this.props.squares.init())[x][y]} onClick={(e) => this.props.onClick(x, y, e)}/>;
    }

    renderBoard(){
        let i,j,row,board=[];
        let boardType = this.props.boardType;
        let bt = boardType === 15 ? 495 : 627;
        let boardRow = {
            width: bt + 'px'
        };

        for(i=0;i<boardType;++i){
            row = [];

            for(j=0;j<boardType;++j){
                row[j] = this.renderSquare(i, j, j);
            }

            board[i] = (<div className="board-row" style={boardRow} key={i}>{row}</div>);
        }

        return (
            <div className="board" ref={(brd) => this.brd = brd }>
                {board}
            </div>
        );
    }

    render() {
        return this.renderBoard();
    }


    boardWinnerFocus(winner) {
        let children = this.brd.children;
        let len = children.length;
        let row,column;
        let arr;

        if(winner && winner.line){
            arr = winner.line;

            for(let i=0;i<arr.length;++i){
                for(let j=0;j<arr[i].length;++j){
                    let x = arr[i][j].x;
                    let y = arr[i][j].y;
                    row = children[x];
                    column = row.children[y];
                    column.classList.add('board-winner-focus');
                }
            }
        }else{
            for (let i = 0; i < len; ++i) {
                row = children[i];
                column = row.children;

                for(let j=0;j<column.length;++j){
                    column[j].classList.remove('board-winner-focus');
                }
            }



        }
    }

    componentDidUpdate() {
        this.boardWinnerFocus(this.props.winner);
    }
}

export default Board;