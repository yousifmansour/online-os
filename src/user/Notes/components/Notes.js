import React from 'react';
import 'user/Notes/components/Notes.css';

const Notes = ({notes, setNote, createNote, deleteNote}) => {
    let listOfNotes;
    if (notes) {
        listOfNotes = notes.sort((a, b) => a.id - b.id).map((note, i) => (
            <div key={i}>
                <textarea
                    className='note'
                    value={note.text}
                    onChange={(e) => setNote({id: note.id, text: e.target.value})}></textarea>
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