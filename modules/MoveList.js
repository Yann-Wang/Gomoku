/**
 * Created by a_wav on 2016/12/11.
 */
import React from 'react'

class MoveList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const moves = this.props.history.map((step, move) => {
            const coordinate = step.active ? "(" + step.active.x + "," + step.active.y + ")" : move;
            const desc = move ?
            'Move #' + coordinate :
                (<button>Reset</button>);
            return (
                <li key={move}>
                    <a href="#" onClick={(e) => this.props.jumpTo(move, e)}>{desc}</a>
                </li>
            );
        });

        return (
            <ol ref={(ol) => this.ol = ol }>
                {moves}
            </ol>
        );
    }

    setFocus(n) {
        var children = this.ol.children;
        var len = children.length;

        for (var i = 0; i < len; ++i) {
            children[i].classList.remove('movelist-focus');
        }

        children[n].classList.add('movelist-focus');
    }

    componentDidMount() {
        this.setFocus(this.props.stepNumber);
    }

    componentDidUpdate() {
        this.setFocus(this.props.stepNumber);
    }
}

export default MoveList;