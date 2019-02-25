import React from 'react';
import 'user/Notes/components/Notes.css';

const Notes = ({notes, setNote, createNote}) => {
    let listOfNotes;
    if (notes) {
        listOfNotes = notes.sort((a, b) => a.id - b.id).map((note, i) => (
            <textarea
                className='note'
                key={i}
                value={note.text}
                onChange={(e) => setNote({id: note.id, text: e.target.value})}></textarea>
        ));
    }
    return (
        <div className='notes-component'>
            <h2>Notes</h2>

            <button className='new-note' onClick={createNote}>+</button>

            {notes
                ? listOfNotes
                : null}

            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>

        </div>
    );
};

export default Notes;