import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import ListOfApps from './ListOfApps';
import RecentApps from './RecentApps';
import RecentAppsBar from './RecentAppsBar';

import Calculator from './os_apps/containers/Calculator';
import Notes from './os_apps/containers/Notes';
import DiaryContainer from './os_apps/containers/DiaryContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='viewport'>
                    <Switch>
                        <Route exact path="/calculator" component={Calculator}/>
                        <Route exact path="/notes" component={Notes}/>
                        <Route exact path="/diary" component={DiaryContainer}/>

                        <Route exact path="/" component={ListOfApps}/>
                        <Route exact path="/recent" component={RecentApps}/>
                    </Switch>
                </div>
                <div className="navbar">
                    <RecentAppsBar/>
                </div>
            </div>
        );
    }
}

export default App;
