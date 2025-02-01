import React from 'react';
import { Link } from 'react-router-dom';
import './CleaningTips.css';

const CleaningTips = () => {
  return (
    <div className="cleaning-tips-page">
      <h1>Conseils de Nettoyage</h1>

      <div className="cleaning-list">
        <Link to="/cleaning-bureaux" className="cleaning-link">Conseils nettoyage bureaux</Link>
        <Link to="/cleaning-residentiel" className="cleaning-link">Conseils nettoyage résidentiel</Link>
        <Link to="/cleaning-industriel" className="cleaning-link">Conseils nettoyage industriel</Link>
        <Link to="/cleaning-hotelier" className="cleaning-link">Conseils nettoyage hôtelier</Link>
        <Link to="/cleaning-magasin" className="cleaning-link">Conseils nettoyage magasin</Link>
      </div>
    </div>
  );
};

export default CleaningTips;
