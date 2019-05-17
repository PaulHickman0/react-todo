import React, { Component } from 'react';
import { 
    HashRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';

import Home from 'pages/home';

export default class Routes extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}