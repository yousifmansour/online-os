import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import ListOfApps from './ListOfApps';
import RecentApps from './RecentApps';

import Calculator from './os_apps/Calculator';
import Notes from './os_apps/Notes';
import Diary from './os_apps/Diary';

import RecentAppsBar from './RecentAppsBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/calculator" component={Calculator}/>

                    <Route exact path="/notes" component={Notes}/>

                    <Route exact path="/diary" component={Diary}/>

                    <Route exact path="/" component={ListOfApps}/>

                    <Route exact path="/recent" component={RecentApps}/>
                </Switch>
                <RecentAppsBar/>
            </div>
        );
    }
}

export default App;
