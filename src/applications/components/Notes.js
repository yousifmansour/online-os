import React from 'react';
import 'applications/components/Notes.css';

const Notes = ({note, setNote}) => (
    <div className='notes-container'>
        <h2>Notes</h2>
        <textarea name='note' value={note} onChange={(e) => setNote(e.target.value)}></textarea>
    </div>
)

export default Notes;