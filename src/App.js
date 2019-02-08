import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import ListOfApps from './ListOfApps';
import RecentApps from './RecentApps';
import RecentAppsBar from './RecentAppsBar';

import Calculator from './os_apps/containers/Calculator';
import Notes from './os_apps/containers/Notes';
import DiariesContainer from './os_apps/containers/DiariesContainer';
import Diary from './os_apps/components/Diary';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='viewport'>
                    <Switch>
                        <Route exact path="/calculator" component={Calculator}/>
                        <Route exact path="/notes" component={Notes}/>
                        
                        <Route exact path="/diaries" component={DiariesContainer}/>

                        <Route exact path="/" component={ListOfApps}/>
                        <Route exact path="/recent" component={RecentApps}/>

                        <Route exact path="/diaries/:currentWeek" component={Diary}/>

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
