import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Gomoku from './Gomoku'
import Profile from './Profile'

module.exports = (
    <Route path="/Gomoku-bundle" component={App}>
        <IndexRoute component={Gomoku}/>
        <Route path="/Gomoku-bundle/profile" component={Profile}/>
    </Route>
);
