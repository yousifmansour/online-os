import React from 'react';
import {connect} from 'react-redux';
import * as notesActions from 'actions/notes';
import {addApp} from 'actions/recentApps';
import Notes from 'user/Notes/components/Notes';

class NotesContainer extends React.Component {
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
        if (!this.props.notes) 
            this.props.loadNotesFromDB();
        return (<Notes
            notes={this.props.notes}
            setNote={this.props.setNote}
            createNote={this.props.createNote}/>);
    };
}

function mapStateToProps(state) {
    return state.notes;
}

export default connect(mapStateToProps, {
    addApp,
    ...notesActions
})(NotesContainer);