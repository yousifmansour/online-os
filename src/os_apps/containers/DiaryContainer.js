import React from 'react';

import Diary from '../components/Diary';

import {connect} from 'react-redux';
import * as diaryActions from '../../actions/diary';
import {addApp} from '../../actions/recentApps';

import './DiaryContainer.css';

class DiaryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avalibleWeeks: []
        }

        this.name = 'diary';
    }
    componentDidMount() {
        this
            .props
            .addApp(this.name);

        // get avalible weeks and show them
        fetch('https://www.yousifmansour.space/api/online-os/diaries/').then((data) => {
            data
                .json()
                .then((data) => this.setState({avalibleWeeks: data}));
        });

        // when on of them is clicked, update redux with current chosed diary name then
        // show a Diary component with that name passed down as aprops
    }

    render() {
        let weeks = this
            .state
            .avalibleWeeks
            .map((week) => {
                week = week.substring(0, week.indexOf('.html'));
                return (
                    <h2 className='week' key={week} onClick={() => this.props.setCurrentWeek(week)}>{week}</h2>
                );
            });
        if (this.props.currentWeek !== '') 
            return <Diary/>
        else 
            return (
                <div className='avalible-weeks'>
                    <h1>Documentation For Online OS</h1>
                    <h2>Avalible Weeks</h2>
                    {weeks}
                </div>
            );
        }
    }

function mapStateToProps(state) {
    return state.diary;
}

export default connect(mapStateToProps, {
    addApp,
    ...diaryActions
})(DiaryContainer);