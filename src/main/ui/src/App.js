import './App.css';
import { Header } from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Header/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import Results from './components/Header/Results.jsx';
import SearchByName from './components/SearchByName/SearchByName';
import SearchByStatePage from './components/SearchByStatePage/SearchByStatePage';

const App = () => {
  return (
    <div>
      <div>
         <Header />
        <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/results" element={<Results />} />
                <Route path="/searchByName" element={<SearchByName />} />
                <Route path="/searchByState" element={<SearchByStatePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
