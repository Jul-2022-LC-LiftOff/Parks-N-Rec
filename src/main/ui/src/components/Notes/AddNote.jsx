 import {useState} from 'react';

export default function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');
    //target event value is the user input. setNoteText will become target event value. It will be updated anytime the user types

    const handleChange = (event) => {
              event.preventDefault();
        setNoteText(event.target.value);

    };

    const handleSaveClick = (event) => {
         event.preventDefault();
         const noteInfo={noteText}
         console.log(noteInfo);
           fetch("http://localhost:3306/notes/addNotes", {
              method: "POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(noteText)
              }).then(()=>{
                console.log("New Note Added")
              })

        if(noteText.trim().length > 0){
          handleAddNote(noteText);
          //returns add note text to blank box
          setNoteText('')
        }
    };



    return(
    // provides text box to add new note and button to trigger save note event

        <div className="note new">

                        <textarea
                        rows="8"
                        cols="10"
                        placeholder="Type to add notes about this park"
                        value={noteText}
                        onChange={handleChange}
                        >
                        </textarea>

                        <div className="note=footer">

                            <button className="save" onClick={handleSaveClick}>Save Note</button>
                        </div>

        </div>
    );
 };


