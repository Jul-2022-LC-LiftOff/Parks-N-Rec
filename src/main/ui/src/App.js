import './App.css';
import { Header } from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Register from './components/Header/Register.jsx';
import { Route, Routes } from 'react-router-dom';
import SearchByName from './components/SearchByName/SearchByName';
import SearchByStatePage from './components/SearchByStatePage/SearchByStatePage';
import Login from './components/Header/Login'

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/searchByName" element={<SearchByName />} />
          <Route path="/searchByState" element={<SearchByStatePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
