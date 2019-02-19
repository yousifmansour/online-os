import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'system/Home/components/Home';
import RecentAppsContainer from 'system/RecentApps/containers/RecentAppsContainer';
import RecentAppsBar from 'system/RecentAppsBar/components/RecentAppsBar';
import CalculatorContainer from 'user/Calculator/containers/CalculatorContainer';
import NotesContainer from 'user/Notes/containers/NotesContainer';
import DiariesContainer from 'user/Diaries/containers/DiariesContainer';
import Diary from 'user/Diaries/components/Diary';

import 'system/App.css';
import 'system/Animations.css';

const App = (props) => (
    <div className="App">
        <div className='viewport'>
            <Switch>
                <Route exact path="/calculator" component={CalculatorContainer}/>
                <Route exact path="/notes" component={NotesContainer}/>

                <Route exact path="/diaries" component={DiariesContainer}/>

                <Route exact path="/" component={Home}/>
                <Route exact path="/recent" component={RecentAppsContainer}/>

                <Route exact path="/diaries/:currentWeek" component={Diary}/>
            </Switch>
        </div>
        <div className="navbar">
            <RecentAppsBar/>
        </div>
    </div>
);

export default App;