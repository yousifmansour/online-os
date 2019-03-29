import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import {connect} from 'react-redux';
import * as diaryActions from 'actions/diary';
import {closeApp} from 'actions/recentApps';

import 'user/Diaries/components/Diary.css';

class Diary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryHTML: null
        }
    }

    componentDidMount() {
        let url = 'http://localhost:5000';
        // let url = 'https://www.yousifmansour.space/api/online-os';
        fetch(url + '/diaries/' + this.props.match.params.currentWeek).then((data) => {
            data
                .text()
                .then((text) => {
                    var diary = new DOMParser()
                        .parseFromString(text, "text/html")
                        .querySelector('body')
                        .innerHTML;
                    this.setState({diaryHTML: diary});

                    // UPDATE SCROLL POSITION AFTER HTML DATA IS LOADED
                    document
                        .querySelector('.viewport')
                        .scrollTop = this.props.scrollPosition;
                });
        });

        document
            .querySelector('.viewport')
            .addEventListener('scroll', this.updateScrollPosition);
        document
            .querySelector('.viewport')
            .scrollTop = this.props.scrollPosition;
    }

    componentWillUnmount() {
        document
            .querySelector('.viewport')
            .removeEventListener('scroll', this.updateScrollPosition);

        document
            .querySelector('.viewport')
            .scrollTop = 0;
    }

    updateScrollPosition = () => {
        this
            .props
            .setScrollPosition(document.querySelector('.viewport').scrollTop);
    }

    render() {
        return (
            <div className="diary-container">
                {this.state.diaryHTML
                    ? <div>
                            {ReactHtmlParser(this.state.diaryHTML)}
                        </div>
                    : 'loading'}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.diary;
}

export default connect(mapStateToProps, {
    ...diaryActions,
    closeApp
})(Diary);