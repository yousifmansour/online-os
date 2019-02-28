import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'system/Home/components/Home';
import RecentAppsContainer from 'system/RecentApps/containers/RecentAppsContainer';
import RecentAppsBar from 'system/RecentAppsBar/components/RecentAppsBar';
import CalculatorContainer from 'user/Calculator/containers/CalculatorContainer';
import NotesContainer from 'user/Notes/containers/NotesContainer';
import NotePageContainer from 'user/Notes/containers/NotePageContainer';
import DiariesContainer from 'user/Diaries/containers/DiariesContainer';
import Diary from 'user/Diaries/components/Diary';

import 'system/App.css';
import 'system/Animations.css';

const App = (props) => (
    <div className="App">
        <div className='viewport'>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/recent" component={RecentAppsContainer}/>

                <Route exact path="/calculator" component={CalculatorContainer}/>
                <Route exact path="/notes" component={NotesContainer}/>
                <Route exact path="/note" component={NotePageContainer}/>

                <Route exact path="/diaries" component={DiariesContainer}/>

                <Route exact path="/diaries/:currentWeek" component={Diary}/>
            </Switch>
        </div>
        <div className="navbar">
            <RecentAppsBar/>
        </div>
    </div>
);

export default App;