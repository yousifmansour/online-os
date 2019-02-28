import React from 'react';
// import './NotePage.css';
import 'user/Notes/components/Notes.css';

const NotePage = ({text, id, deleteNote, setNote}) => (
    <div className='notes-component'>
        <div>
            <textarea
                autoFocus={true}
                className='note'
                value={text}
                onChange={(e) => setNote({id, text: e.target.value})}></textarea>
            <button className='delete-button' onClick={deleteNote}>X</button>
        </div>
    </div>
);
export default NotePage;