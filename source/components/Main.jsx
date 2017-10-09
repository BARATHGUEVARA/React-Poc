import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './about.jsx'
import Home from './Home.jsx'
import Info from './Info.jsx'
import Page1 from './Page1.jsx'


class Main extends React.Component {
    render() {
        return (
            <Switch>
                 <Route  exact path="/" getComponent={(nextState, cb) => {
                  require.ensure([], require => {
                      // default import is not supported in CommonJS standard
                      cb(null, require('./Home.jsx'))
                  });
              }} />
                <Route  exact path="/home" getComponent={(nextState, cb) => {
                  require.ensure([], require => {
                      // default import is not supported in CommonJS standard
                      cb(null, require('./Home.jsx'))
                  });
              }} />
                <Route  exact path="/about" getComponent={(nextState, cb) => {
                  require.ensure([], require => {
                      // default import is not supported in CommonJS standard
                      cb(null, require('./about.jsx'))
                  });
              }} />
                <Route  exact path="/info" getComponent={(nextState, cb) => {
                  require.ensure([], require => {
                      // default import is not supported in CommonJS standard
                      cb(null, require('./Info.jsx'))
                  });
              }} />
                <Route  exact path="/page1" getComponent={(nextState, cb) => {
                  require.ensure([], require => {
                      // default import is not supported in CommonJS standard
                      cb(null, require('./Page1.jsx'))
                  });
              }} />
            </Switch>
        );
    }
}

export default Main;