import React from 'react';
import 'user/Notes/components/Notes.css';

const Notes = ({notes, createNote, deleteNote, setSelectedNoteID}) => {
    let listOfNotes;
    let firstColumn = [];
    let secondColumn = [];
    if (notes) {
        // create two columns
        listOfNotes = notes.sort((a, b) => a.id - b.id);
        firstColumn = listOfNotes.filter((note, i) => i % 2 === 0).map((note, i) => (
            <div className='card' key={note.id} onClick={() => setSelectedNoteID(note.id)}>
                <div className='note'>{note.text}</div>
                <button className='delete-button' onClick={() => deleteNote(note.id)}>X</button>
            </div>
        ));

        secondColumn = listOfNotes.filter((note, i) => i % 2 !== 0).map((note, i) => (
            <div className='card' key={note.id} onClick={() => setSelectedNoteID(note.id)}>
                <div className='note'>{note.text}</div>
                <button className='delete-button' onClick={() => deleteNote(note.id)}>X</button>
            </div>
        ));
    }
    return (
        <div className='notes-component'>
            <h2>Notes</h2>
            <button className='new-note' onClick={createNote}>+</button>
            <div className='cards-container'>
                <div className='cards-column'>
                    {firstColumn}
                </div>
                <div className='cards-column'>
                    {secondColumn}
                </div>
            </div>
        </div>
    );
};

export default Notes;