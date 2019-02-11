import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import RecentAppsContainer from '../containers/RecentAppsContainer';
import RecentAppsBar from './RecentAppsBar';
import CalculatorContainer from '../../applications/containers/CalculatorContainer';
import NotesContainer from '../../applications/containers/NotesContainer';
import DiariesContainer from '../../applications/containers/DiariesContainer';
import Diary from '../../applications/components/Diary';

import './App.css';

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