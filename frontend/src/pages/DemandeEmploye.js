// src/pages/DemandeEmploye.js

import React, { useState } from 'react';
import './DemandeEmploye.css';

function DemandeEmploye() {
  const [formData, setFormData] = useState({
    poste: '',
    sexe: '',
    dateArrivee: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez envoyer ici les données vers une API ou un serveur
    console.log('Demande d\'employé envoyée:', formData);
    alert('Votre demande a été envoyée avec succès.');
    setFormData({
      poste: '',
      sexe: '',
      dateArrivee: '',
    });
  };

  return (
    <div>
      <h1>Demander un(e) Employé(e)</h1>
      <p>
        Si vous avez besoin d'un employé pour un poste spécifique, remplissez le formulaire ci-dessous pour
        décrire les détails du poste, le sexe requis et la date d’arrivée souhaitée.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="poste">Poste souhaité :</label>
          <input
            type="text"
            name="poste"
            id="poste"
            value={formData.poste}
            onChange={handleChange}
            required
          />
        </div>

	  <div>
	  <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
	  <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
	</div>

        <div>
	  <input
            type="text"
            name="address"
            placeholder="Adresse"
            value={formData.address}
            onChange={handleChange}
            required
          />
	</div>

        <div>
          <label htmlFor="sexe">Sexe de l'employé(e) :</label>
          <select
            name="sexe"
            id="sexe"
            value={formData.sexe}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Indifférent">Indifférent</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateArrivee">Date d'arrivée :</label>
          <input
            type="date"
            name="dateArrivee"
            id="dateArrivee"
            value={formData.dateArrivee}
            onChange={handleChange}
            required
          />
        </div>

        <div>
	  <select
                  name="companyOrIndividual"
                  value={formData.companyOrIndividual}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez Entreprise ou Particulier</option>
                  <option value="Entreprise">Entreprise</option>
                  <option value="Particulier">Particulier</option>
                </select>
	       </div>

	<div>
	  <input
            type="text"
            name="companyOrIndividualName"
            placeholder="Nom Entreprise ou Particulier"
            value={formData.companyOrIndividualName}
            onChange={handleChange}
            required
           />
         </div>

        <button type="submit">Envoyer la demande</button>
      </form>
    </div>
  );
}

export default DemandeEmploye;
