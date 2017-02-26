/**
 * Created by a_wav on 2017/2/26.
 */

import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})
