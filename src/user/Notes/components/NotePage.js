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
        <div className='navbar'>
            <button
                className='back-button'
                onClick={() => {
                resetSelectedNote();
                history.push('/notes')
            }}>
                <i className="fas fa-2x fa-chevron-left"></i>
            </button>
            <button className='delete-button' onClick={deleteNote}>X</button>
        </div>

        <div className='card'>
            <textarea
                className='note'
                autoFocus={true}
                value={text}
                onChange={(e) => setNote({id, text: e.target.value})}></textarea>
        </div>
    </div>
);
export default withRouter(NotePage);