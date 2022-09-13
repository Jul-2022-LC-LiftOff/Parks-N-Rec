import Note from './Note';
import AddNote from './AddNote';

export default function ParkNotes({ notes, handleAddNote }) {
    return (
        <div className='notes-list'>
            {notes.map((note, index) => (<Note key={index} text={note.text} date={note.date}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
};



