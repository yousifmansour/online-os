import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import {connect} from 'react-redux';
import {addApp} from '../actions/recentApps';

import './Diary.css';

class Diary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryHTML: null
        }
        this.name = 'diary'
    }

    componentDidMount() {
        fetch('https://www.yousifmansour.space/api/online-os/diaries').then((data) => {
            data
                .text()
                .then((text) => {
                    var diary = new DOMParser()
                        .parseFromString(text, "text/html")
                        .querySelector('body')
                        .innerHTML;
                    this.setState({diaryHTML: diary});
                });
        });

        this
            .props
            .addApp(this.name);
    }

    render() {
        return (
            <div className="diary-container">
                {this.state.diaryHTML
                    ? ReactHtmlParser(this.state.diaryHTML)
                    : 'loading'}
                <div
                    style={{
                    height: '1px',
                    width: '1px',
                    paddingBottom: '10vh'
                }}></div>
            </div>
        );
    }
}

export default connect(null, {addApp})(Diary);