import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Banner_Header from './Header/Banner_Header';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import ProductMain from './ProductMain/ProductMain';

import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Banner_Header/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/sanpham' element={<ProductMain/>}/> */}
          </Routes>
          <Footer/>
        </Router>
      </header>
    </div>
  );
}

export default App;
