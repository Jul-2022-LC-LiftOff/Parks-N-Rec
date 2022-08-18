import ParkNotes from './components/ParkNotes';
import {useState} from 'react';
import { nanoid } from 'nanoid'

    const App = () => {
        const[notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "This is my first Note!!",
            date: "This is where the first date will be"
        },
        {
            id: nanoid(),
            text: "This is my second Note!!",
            date: "This is where the second date will be"
        },
        {
            id: nanoid(),
            text: "This is my third Note!!",
            date: "This is where the third date will be"
        }
        ]);

        const addNote = (text) => {
            const date = new Date();
            const newNote = {
                text: text,
                date: date.toLocaleDateString()
            }
         //spread operator (...) expands an array into its elements. Will create new array instead of updating old array
            const newNotes = [...notes, newNote];
            setNotes(newNotes);
        };

        return ( <div className="container">
             <ParkNotes notes={notes} handleAddNote={addNote}/>
        </div>

        );
    };

    export default App;