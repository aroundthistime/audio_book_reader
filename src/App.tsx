import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Footer from './components/partials/Footer/Footer';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/reader' element={} */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
