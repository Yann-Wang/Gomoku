/**
 * Created by a_wav on 2016/12/12.
 */
import React from 'react';


class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let black_piece_url = "http://okup5z621.bkt.clouddn.com/black.png";
        let white_piece_url = "http://okup5z621.bkt.clouddn.com/white.png";
        let piece_url;

        if(this.props.value === "X"){
            piece_url = black_piece_url;
        }else if(this.props.value === "O"){
            piece_url = white_piece_url;
        }else{
            piece_url = "";
        }

        const btnStyle = {
            backgroundImage: 'url(' + piece_url + ')',
            backgroundSize: '25px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        };

        return (
            <button className="square" style={ btnStyle } onClick={(e) => this.props.onClick(e)}>
                {/*{this.props.value}*/}
            </button>
        );
    }
}

export default Square;