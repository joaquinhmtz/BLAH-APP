import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './core/header/header.jsx';
import Footer from './core/footer/footer.jsx';
import SideTab from './core/others/SideTab.jsx';
// import Cursor from './core/components/cursor.jsx';
import Home from './pages/home/home.jsx';
import Info from './pages/Info/Info.jsx';
import Contact from './pages/contact/contact.jsx';
import Services from './pages/services/services.jsx';

function Routes () {
    return (
        <Router>
            {/* <Cursor /> */}
            <Header />
            <div className="container-app">
                <SideTab />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/info" component={Info}></Route>
                    <Route exact path="/contacto" component={Contact}></Route>
                    <Route exact path="/servicios" component={Services}></Route>
                    <Route path="*" />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default Routes;