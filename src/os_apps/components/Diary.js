import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import {connect} from 'react-redux';
import * as diaryActions from '../../actions/diary';
// import {addApp} from '../../actions/recentApps';
import {closeApp} from '../../actions/recentApps';

import './Diary.css';

class Diary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryHTML: null
        }
    }

    componentDidMount() {
        fetch('https://www.yousifmansour.space/api/online-os/diaries/' + this.props.match.params.currentWeek).then((data) => {
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