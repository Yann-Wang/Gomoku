import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h1 className="title">Gomoku</h1>

                <ul role="nav">
                    <li><NavLink to="/Gomoku-bundle" onlyActiveOnIndex>Home</NavLink></li>
                    <li><NavLink to="/Gomoku-bundle/profile">Gomoku profile</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
})
