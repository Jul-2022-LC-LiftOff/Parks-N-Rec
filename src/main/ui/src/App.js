import SearchByName from './components/SearchByName/SearchByName';
import './App.css';
import { Header } from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Homepage />
      <SearchByName />
    </div>
  );
};

export default App;
