// import {Switch, Route} from 'react-router'
import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import About from './about.jsx'
import Home from './Home.jsx'
import Info from './Info.jsx'
import Page1 from './Page1.jsx'

export default class RouterComp extends Component {
    render() {
        return (
            <Router>
              <Switch>
              {/* <Route  exact path="/" getComponent={(nextState, cb) => {
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
            }} /> */}

                <Route  exact path="/" component={Home} />
                <Route  exact path="/home" component={Home} />
                <Route  exact path="/about" component={About} />
                <Route  exact path="/info" component={Info} />
                <Route  exact path="/page1" component={Page1} />


                </Switch>
            </Router>
        )
    }
}


// working piece

{/* <Route  exact path="/" component={Home} />
                <Route  exact path="/home" component={Home} />
                <Route  exact path="/about" component={About} />
                <Route  exact path="/info" component={Info} />
                <Route  exact path="/page1" component={Page1} /> */}


// working piece end










                // <Route  exact path="/" getComponent={() => System.import('./Home.jsx').then(c => c.default)} />
                // <Route  exact path="/home" getComponent={() => System.import('./Home.jsx').then(c => c.default)} />
                // <Route  exact path="/about" getComponent={() => System.import('./about.jsx').then(c => c.default)} />
                // <Route  exact path="/info" getComponent={() => System.import('./Info.jsx').then(c => c.default)} />
                // <Route  exact path="/page1" getComponent={() => System.import('./Page1.jsx').then(c => c.default)} />

    //     getComponent(location, cb) {
    //     System.import('./Page1')
    //       .then(loadRoute(cb, false))
    //       .catch(errorLoading);
    //   },

    // getComponent={(nextState, cb) => {
    //               require.ensure([], require => {
    //                   // default import is not supported in CommonJS standard
    //                   cb(null, require('./Info.jsx'))
    //               });
    //           }} />

//     import ReactDOM from 'react-dom';
// import RouterComponent from 'Router.jsx'

// ReactDOM.render(<RouterComponent/>,document.getElementById('App'))


{/* <Route  exact path="/"    getComponent={(nextState, cb) => {
                    System.import('./Home.jsx')
                    .then(loadRoute(cb, false))
                    .catch(errorLoading);
              }} />
                <Route  exact path="/home"     getComponent={(nextState, cb) => {
                    System.import('./Home.jsx')
                    .then(loadRoute(cb, false))
                    .catch(errorLoading);
              }} />
                <Route  exact path="/about"     getComponent={(nextState, cb) => {
                    System.import('./about.jsx')
                    .then(loadRoute(cb, false))
                    .catch(errorLoading);
              }} />
                <Route  exact path="/info"     getComponent={(nextState, cb) => {
                    System.import('./Info.jsx')
                    .then(loadRoute(cb, false))
                    .catch(errorLoading);
              }} />
                <Route  exact path="/page1"     getComponent={(nextState, cb) => {
                    System.import('./Page1.jsx')
                    .then(loadRoute(cb, false))
                    .catch(errorLoading);
              }} /> */}


            //   <Route  exact path="/" getComponent={(nextState, cb) => {
            //       require.ensure([], require => {
            //           // default import is not supported in CommonJS standard
            //           cb(null, require('./Home.jsx'))
            //       });
            //   }} />
            //     <Route  exact path="/home" getComponent={(nextState, cb) => {
            //       require.ensure([], require => {
            //           // default import is not supported in CommonJS standard
            //           cb(null, require('./Home.jsx'))
            //       });
            //   }} />
            //     <Route  exact path="/about" getComponent={(nextState, cb) => {
            //       require.ensure([], require => {
            //           // default import is not supported in CommonJS standard
            //           cb(null, require('./about.jsx'))
            //       });
            //   }} />
            //     <Route  exact path="/info" getComponent={(nextState, cb) => {
            //       require.ensure([], require => {
            //           // default import is not supported in CommonJS standard
            //           cb(null, require('./Info.jsx'))
            //       });
            //   }} />
            //     <Route  exact path="/page1" getComponent={(nextState, cb) => {
            //       require.ensure([], require => {
            //           // default import is not supported in CommonJS standard
            //           cb(null, require('./Page1.jsx'))
            //       });
            //   }} />

            // <Route  exact path="/"    getComponent={(_, cb) => {
            //     System.import('./Home.jsx')
            //         .then(homeModule => homeModule.default)
            //         .then(homePage => cb(null,homePage))
            //         .catch(e=> cb(e,null));
            //   }} />
            //     <Route  exact path="/home"     getComponent={(_, cb) => {
            //         System.import('./Home.jsx')
            //         .then(homeModule => homeModule.default)
            //         .then(homePage => cb(null,homePage))
            //         .catch(e=> cb(e,null));
            //   }} />
            //     <Route  exact path="/about"     getComponent={(_, cb) => {
            //         System.import('./about.jsx')
            //         .then(homeModule => homeModule.default)
            //         .then(homePage => cb(null,homePage))
            //         .catch(e=> cb(e,null));
            //   }} />
            //     <Route  exact path="/info"    getComponent={(_, cb) => {
            //         System.import('./Info.jsx')
            //         .then(homeModule => homeModule.default)
            //         .then(homePage => cb(null,homePage))
            //         .catch(e=> cb(e,null));
            //   }} />
            //     <Route  exact path="/page1"     getComponent={(_, cb) => {
            //         System.import('./Page1.jsx')
            //         .then(homeModule => homeModule.default)
            //         .then(homePage => cb(null,homePage))
            //         .catch(e=> cb(e,null));
            //   }} />