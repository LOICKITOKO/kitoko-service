import React from 'react';
import { Link } from 'react-router-dom';
import './CleaningTips.css';

const CleaningTips = () => {
  return (
    <div className="cleaning-tips-page">
      <h1>Conseils de Nettoyage</h1>

      <div className="cleaning-grid">
        <Link to="/cleaning-bureaux" className="cleaning-card">Nettoyage Bureaux</Link>
        <Link to="/cleaning-residentiel" className="cleaning-card">Nettoyage Résidentiel</Link>
        <Link to="/cleaning-industriel" className="cleaning-card">Nettoyage Industriel</Link>
        <Link to="/cleaning-hotelier" className="cleaning-card">Nettoyage Hôtelier</Link>
        <Link to="/cleaning-magasin" className="cleaning-card">Nettoyage Magasin</Link>
        <Link to="/cleaning-restaurant" className="cleaning-card">Nettoyage Restaurant</Link>
        <Link to="/cleaning-cabinet" className="cleaning-card">Nettoyage Cabinets Médicaux</Link>
      </div>
    </div>
  );
};

export default CleaningTips;
