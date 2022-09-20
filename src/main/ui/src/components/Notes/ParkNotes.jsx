import Note from './Note';
import AddNote from './AddNote';

export default function ParkNotes({ notes, handleAddNote }) {
<<<<<<< HEAD
    return (
        <div className='notes-list'>
            {notes.map((note, index) => (<Note key={index} id={note.id} text={note.text} date={note.date}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
};



=======
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
>>>>>>> 571d595541abfd32279729786ed7895dc29e79cb
