 import {useState} from 'react';

export default function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
              event.preventDefault();
//               fetch("http://localhost:8080/notes/addNotes", {
//                 method: "POST",
//                 headers:{"Content-Type":"application/json",
//                 'Accept': 'application/json'
//                 },
//                 body:JSON.stringify(noteText)
//              })
//             .then((res)=>{
//                  res.json()
//                  console.log(res.json())
//             })
        setNoteText(event.target.value);
    };

//     const handleSaveClick = (event) => {
//          event.preventDefault();
//          const noteInfo={noteText}
//          console.log(noteInfo);
//            fetch("http://localhost:8080/notes/addNotes", {
//               method: "POST",
//               headers:{"Content-Type":"application/json"},
//               body:JSON.stringify(noteText)
//               }).then(()=>{
//                 console.log("New Note Added")
//               })
//         if(noteText.trim().length > 0){
//           handleAddNote(noteText);
//           setNoteText('')
//         }
//     };


    const handleSaveClick = (event) => {
         event.preventDefault();
         const noteInfo={noteText}
           fetch("http://localhost:8080/notes/addNotes", {
              method: "POST",
              headers:{"Content-Type":"application/json",
              'Accept': 'application/json'
              },
              body:JSON.stringify(noteText)
           })
           .then((res)=>{
                console.log(res)
                handleAddNote(noteText);
                console.log("New Note Added")
           })
        if(noteText.trim().length > 0){

          setNoteText('')
        }
    };

return(
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




