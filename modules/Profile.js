/**
 * Created by a_wav on 2017/2/26.
 */

import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.errors = null;
    }

    render() {
        return (
            <div className="gomoku_profile">
                Gomoku is an abstract strategy board game. Also called Gobang or Five in a Row, it is traditionally played with Go pieces (black and white stones) on a go board with 19x19 (15x15) intersections; however, because pieces are not moved or removed from the board, gomoku may also be played as a paper and pencil game. This game is known in several countries under different names.
                <br/>Black plays first if white did not win in the previous game, and players alternate in placing a stone of their color on an empty intersection. The winner is the first player to get an unbroken row of five stones horizontally, vertically, or diagonally.
            </div>
        );
    }

}

export default Profile;
