import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as notesActions from 'actions/notes';
import {addApp} from 'actions/recentApps';
import Notes from 'user/Notes/components/Notes';

class NotesContainer extends React.Component {
    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);
    }

    render() {
        // if there is an open note, redirect to it if not show the notes list
        if (this.props.selectedNoteID) 
            return (<Redirect to={"/note"}/>);
        else {
            if (!this.props.notes) 
                this.props.loadNotesFromDB();
            return (<Notes
                notes={this.props.notes}
                createNote={this.props.createNote}
                deleteNote={this.props.deleteNote}
                setSelectedNoteID={this.props.setSelectedNoteID}/>);
        }

    };
}

function mapStateToProps(state) {
    return state.notes;
}

export default connect(mapStateToProps, {
    addApp,
    ...notesActions
})(NotesContainer);