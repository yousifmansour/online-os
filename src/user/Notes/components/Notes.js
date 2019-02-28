import React from 'react';
import 'user/Notes/components/Notes.css';

const Notes = ({notes, createNote, deleteNote, setSelectedNoteID}) => {
    let listOfNotes;
    if (notes) {
        listOfNotes = notes.sort((a, b) => a.id - b.id).map((note, i) => (
            <div key={i} onClick={() => setSelectedNoteID(note.id)}>
                <span className='note'>{note.text}</span>
                <button className='delete-button' onClick={() => deleteNote(note.id)}>X</button>
            </div>
        ));
    }
    return (
        <div className='notes-component'>
            <h2>Notes</h2>
            <button className='new-note' onClick={createNote}>+</button>
            {listOfNotes}
        </div>
    );
};

export default Notes;