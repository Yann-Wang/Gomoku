/**
 * Created by a_wav on 2016/12/9.
 */
import React from 'react'
import Errors from './Errors'
import Game from './Game'


class Tic_tac_toe extends React.Component {
    render() {
        return (
            <div className="m-bd">
                <Errors/>
                <Game/>
            </div>
        );
    }
}

export default Tic_tac_toe;