import React from 'react';
import {connect} from 'react-redux';
import * as notesActions from 'actions/notes';
import {addApp} from 'actions/recentApps';
import Notes from 'user/components/Notes';

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
        return (<Notes note={this.props.note} setNote={this.props.setNote}/>);
    };
}

function mapStateToProps(state) {
    return state.notes;
}

export default connect(mapStateToProps, {
    addApp,
    ...notesActions
})(NotesContainer);