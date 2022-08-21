 import {useState} from 'react';


 const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    //target event value is the user input. setNoteText will become target event value. It will be updated anytime the user types

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };


// Add warning that text needs to be added?
    const handleSaveClick = () => {
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

 export default AddNote;