import React from 'react';
import { Link } from 'react-router-dom';
import './CleaningTips.css';

const CleaningTips = () => {
  return (
    <div className="cleaning-tips-page">
      <h1>Conseils de Nettoyage</h1>

      <div className="cleaning-list">
	  <ul>
	    <li>
              <Link to="/cleaning-bureaux" className="cleaning-link">Conseils nettoyage bureaux</Link>
	    </li>
	     <li>
              <Link to="/cleaning-residentiel" className="cleaning-link">Conseils nettoyage résidentiel</Link>
	     </li>
	    <li>
              <Link to="/cleaning-industriel" className="cleaning-link">Conseils nettoyage industriel</Link>
	    </li>
	    <li>
              <Link to="/cleaning-hotelier" className="cleaning-link">Conseils nettoyage hôtelier</Link>
	    </li>
	    <li>
              <Link to="/cleaning-magasin" className="cleaning-link">Conseils nettoyage magasin</Link>
	    </li>
	  </ul>
      </div>
    </div>
  );
};

export default CleaningTips;
