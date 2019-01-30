import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Calculator from './os_apps/Calculator';
import Notes from './os_apps/Notes';

import ListOfApps from './ListOfApps';
import RecentApps from './RecentApps';

import RecentAppsBar from './RecentAppsBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/calculator" component={Calculator}/>

                    <Route exact path="/notes" component={Notes}/>

                    <Route exact path="/" component={ListOfApps}/>

                    <Route exact path="/recent" component={RecentApps}/>
                </Switch>
                <RecentAppsBar/>
            </div>
        );
    }
}

export default App;
