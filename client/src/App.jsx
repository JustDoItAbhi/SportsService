import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';
import './i18n';
import './App.css';
import honey from './components/massagetypes/Honey';
import Honey from './components/massagetypes/Honey';
import TherapeuticPreventive from './components/massagetypes/TherapeuticPreventive';
import Sports from './components/massagetypes/Sports';
import LymphaticDrainage from './components/massagetypes/LymphaticDrainage';
import AntiCellulite from './components/massagetypes/AntiCellulite';
import GeneralMassage from './components/massagetypes/GeneralMassage';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app-container">
      {/* Language Switcher */}
      <div className="language-switcher">
        <button 
          className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button 
          className={`lang-btn ${i18n.language === 'uk' ? 'active' : ''}`}
          onClick={() => changeLanguage('uk')}
        >
          UA
        </button>
        
      </div>

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/massage/therapeutic-preventive" element={<TherapeuticPreventive />} />
    <Route path="/massage/sports" element={<Sports />} />
    <Route path="/massage/lymphatic-drainage" element={<LymphaticDrainage />} />
    <Route path="/massage/honey" element={<Honey />} />
    <Route path="/massage/anti-cellulite" element={<AntiCellulite />} />
             <Route path="/massage/general-massage" element={<GeneralMassage />} />
             <Route path="/massage/anti-cellulite" element={<AntiCellulite />} />
    
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;