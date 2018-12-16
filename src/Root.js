import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Settings from './containers/settings'
import Main from './components/App'
import { Provider } from "react-redux"

const Root = ({ store }) => (
<Provider store={store}>
    <Router>
        <div>
            <Route path='/' component={Main} />
            <Route path='/Settings' component={Settings} />
        </div>
    </Router>
</Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root