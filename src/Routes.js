import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './core/components/header.jsx';
import Footer from './core/components/footer/footer.jsx';
import Cursor from './core/components/cursor.jsx';
import Home from './home/home.jsx';

function Routes () {
    return (
        <Router>
            <Cursor />
            <Header />
            <div className="container-app">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="*" />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default Routes;