import React from 'react';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import * as diaryActions from 'actions/diary';
import {addApp} from 'actions/recentApps';

import {Link} from 'react-router-dom';

import DiariesList from 'user/Diaries/components/DiariesList';

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

        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';
        fetch(url + '/diaries/').then((data) => {
            data
                .json()
                .then((data) => this.setState({avalibleWeeks: data}));
        });
    }

    render() {
        if (this.props.currentWeek && 0) {
            // render opened week
            return (
                <Redirect to={"/diaries/" + this.props.currentWeek}></Redirect>
            );
        } else {
            // setup diaries list
            let diaries = this
                .state
                .avalibleWeeks
                .map((week) => {
                    week = week.substring(0, week.indexOf('.html'));
                    return (
                        <div key={week}>
                            <Link to={'/diaries/' + week} onClick={() => this.props.setCurrentWeek(week)}>
                                <h2 className='diary'>
                                    {week}
                                </h2>
                            </Link>
                        </div>

                    );
                });
            return (<DiariesList diaries={diaries}/>);
        }
    }
}

function mapStateToProps(state) {
    return state.diary;
}

export default connect(mapStateToProps, {
    addApp,
    ...diaryActions
})(DiariesContainer);