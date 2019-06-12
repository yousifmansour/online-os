import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import NotePage from 'user/Notes/components/NotePage';
import * as notesActions from 'actions/notes';
import {addApp} from 'actions/recentApps';

class NotePageContainer extends React.Component {
    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);
    }

    render() {
        if (this.props.selectedNoteID === null) 
            return (<Redirect to={"/notes"}/>);
        else {
            let selectedNote = this
                .props
                .notes
                .filter(note => note.id === this.props.selectedNoteID)[0];
            return (<NotePage
                {...selectedNote}
                setNote={this.props.setNote}
                resetSelectedNote={this.props.resetSelectedNote}
                deleteNote=
                {() => this.props.deleteNote(this.props.selectedNoteID)}/>);
        }
    }
};

function mapStateToProps(state) {
    return state.notes;
}
export default connect(mapStateToProps, {
    addApp,
    ...notesActions
})(NotePageContainer);