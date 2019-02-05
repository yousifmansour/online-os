import './Notes.css';

import React from 'react';
import {connect} from 'react-redux';

import * as notesActions from '../actions/notes';
import {addApp} from '../actions/recentApps';
// import NavBar from '../NavBar';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.name = 'notes';
    }

    componentDidMount() {
        this
            .props
            .addApp(this.name);
    }

    render() {
        return (
            <div className='notes-container'>
                {/* <NavBar/> */}
                <h2>Notes</h2>
                <textarea
                    name='note'
                    value={this.props.note}
                    onChange={(e) => this.props.setNote(e.target.value)}></textarea>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return state.notes;
}

export default connect(mapStateToProps, {
    addApp,
    ...notesActions
})(Notes);