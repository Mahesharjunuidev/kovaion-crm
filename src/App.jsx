import { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/style/theme.scss';

import Navbar from './components/navbar';
import Header from './layouts/header';

import Home from './pages/home';
import Leadprofile from './pages/leadprofile';
import Leadedit from './pages/leadedit';

export const RootContext = createContext();

function App() {
  return (
    <Router>
      <div className="application-root d-md-flex d-block">
        <Navbar />
        <div className='main-body' style={{ flexGrow: '1' }}>
          <div className='container'>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lead-profile" element={<Leadprofile />} />
              <Route path="/lead-edit" element={<Leadedit />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
