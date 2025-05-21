import logo from './logo.svg';
import './App.scss';
import Banner_Header from './Header/Banner_Header';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner_Header/>
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
