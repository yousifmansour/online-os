import React from 'react';
import {withRouter} from "react-router";

import './NotePage.css';
import 'user/Notes/components/Notes.css';

const NotePage = ({
    text,
    id,
    deleteNote,
    setNote,
    history,
    resetSelectedNote
}) => (
    <div className='note-page-component'>
        <div>
            <button
                onClick={() => {
                resetSelectedNote();
                history.push('/notes')
            }}>

                <i className="fas fa-2x fa-chevron-left"></i>
            </button>
        </div>

        <textarea
            className='note'
            autoFocus={true}
            value={text}
            onChange={(e) => setNote({id, text: e.target.value})}></textarea>
        <button className='delete-button' onClick={deleteNote}>X</button>

    </div>
);
export default withRouter(NotePage);