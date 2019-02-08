import React from 'react';

import {connect} from 'react-redux';
import * as diaryActions from '../../actions/diary';
import {addApp} from '../../actions/recentApps';

import {Link} from 'react-router-dom';

import Diaries from '../components/Diaries';

class DiariesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avalibleWeeks: []
        }

        this.name = 'diaries';
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
                    <div key={week}>
                        <Link to={'/diaries/' + week}>
                            <h2 className='diary'>
                                {week}
                            </h2>
                        </Link>
                    </div>

                );
            });
        return (<Diaries weeks={weeks}/>);
    }
}

function mapStateToProps(state) {
    return state.diary;
}

export default connect(mapStateToProps, {
    addApp,
    ...diaryActions
})(DiariesContainer);