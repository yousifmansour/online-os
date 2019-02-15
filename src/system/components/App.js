import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'system/components/Home';
import RecentAppsContainer from 'system/containers/RecentAppsContainer';
import RecentAppsBar from 'system/components/RecentAppsBar';
import CalculatorContainer from 'user/containers/CalculatorContainer';
import NotesContainer from 'user/containers/NotesContainer';
import DiariesContainer from 'user/containers/DiariesContainer';
import Diary from 'user/components/Diary';

import 'system/components/App.css';
import 'system/components/Animations.css';

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