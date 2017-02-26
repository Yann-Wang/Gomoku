import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Gomoku from './Gomoku'
import Profile from './Profile'

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Gomoku}/>
        <Route path="/profile" component={Profile}/>
    </Route>
);
