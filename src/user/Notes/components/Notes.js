import React from 'react';
import 'user/Notes/components/Notes.css';

const Notes = ({notes, setNote, createNote}) => {
    let listOfNotes;
    if (notes) {
        listOfNotes = notes.map((note, i) => (
            <textarea
                key={i}
                value={note.text}
                onChange={(e) => setNote({id: note.id, text: e.target.value})}></textarea>
        ));
    }
    return (
        <div className='notes-container'>
            <h2>Notes</h2>
            {notes
                ? listOfNotes
                : null}
            <button onClick={createNote}>New note</button>
        </div>
    );
};

export default Notes;