//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;
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
        return ( <div className="container">
                      <ParkNotes notes={notes}/>
        </div>

        );
    };

    export default App;