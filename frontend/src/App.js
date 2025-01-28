import React, { useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './videos/logo.png';
import CleaningTips from './pages/CleaningTips';
import GeneralInfo from './pages/GeneralInfo';
import AvisEtEvaluations from './pages/AvisEtEvaluations';
import FAQ from './pages/FAQ';
import PersonnelQualifie from './pages/PersonnelQualifie';
import SansEngagement from './pages/SansEngagement';
import DemandeEmploye from './pages/DemandeEmploye';
import image1 from './videos/image1.png';
import image2 from './videos/image2.png';
import image3 from './videos/image3.png';
import image4 from './videos/image4.png';
import image5 from './videos/image5.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    address: '',
    companyOrIndividual: '',
    companyOrIndividualName: '',
    gender: '',
    desiredDate: '',
  });

  const csrftoken = Cookies.get('csrftoken');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/devis/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Demande envoyée avec succès !');
        setFormData({ name: '', email: '', phone: '', message: '', address: '', companyOrIndividual: '', companyOrIndividualName: '', gender: '', desiredDate: '' });
      } else {
        const errorData = await response.json();
        alert(`Erreur : ${errorData.error}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la demande :', error);
      alert('Impossible d\'envoyer votre demande pour le moment.');
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-links">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/a-propos" className="navbar-link">À propos</Link>
            <Link to="/nos-tarifs" className="navbar-link">Nos Tarifs</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="home">
              <header className="header">
                <div className="header-content">
                  <img src={logo} alt="KITOKO-SERVICE Logo" className="logo" />
                  <p>Des solutions de nettoyage adaptées à vos besoins.</p>
                  <Link to="/demander-devis" className="cta-button">Demander un devis gratuit maintenant</Link>
                </div>
              </header>

		  <section className="service-line">
  <div className="service-image-container">
    <img src={image1} alt="Service Image" className="service-image" />
  </div>
  <div className="blue-page"></div> {/* Page bleue à droite */}
</section>

<section className="service-line reverse">
  <div className="blue-page"></div> {/* Page bleue à gauche */}
  <div className="service-image-container">
    <img src={image2} alt="Service Image" className="service-image" />
  </div>
</section>

<section className="service-line">
  <div className="service-image-container">
    <img src={image3} alt="Service Image" className="service-image" />
  </div>
  <div className="blue-page"></div> {/* Page bleue à droite */}
</section>

<section className="service-line reverse">
  <div className="blue-page"></div> {/* Page bleue à gauche */}
  <div className="service-image-container">
    <img src={image4} alt="Service Image" className="service-image" />
  </div>
</section>

<section className="service-line">
  <div className="service-image-container">
    <img src={image5} alt="Service Image" className="service-image" />
  </div>
  <div className="blue-page"></div> {/* Page bleue à droite */}
</section>
            </div>
          } />

          <Route path="/demander-devis" element={
            <div className="quote-request">
              <h1>Demandez un devis gratuit</h1>
              <p>Nous vous contacterons dans les plus brefs délais pour discuter de vos besoins de nettoyage.</p>

              <form onSubmit={handleSubmit} className="quote-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
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
                <input
                  type="text"
                  name="companyOrIndividualName"
                  placeholder="Nom de l'entreprise ou du particulier"
                  value={formData.companyOrIndividualName}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Envoyer la demande</button>
              </form>
            </div>
          } />

          <Route path="/demande-employe" element={
            <div className="employee-request">
              <h1>Demander un(e) employé(e)</h1>
              <p>Nous vous mettrons en relation avec un employé qualifié en fonction de vos besoins.</p>

              <form onSubmit={handleSubmit} className="employee-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez le sexe de l'employé</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Indifféré">Indifféré</option>
                </select>
                <input
                  type="date"
                  name="desiredDate"
                  value={formData.desiredDate}
                  onChange={handleChange}
                  required
                />
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
                <input
                  type="text"
                  name="companyOrIndividualName"
                  placeholder="Nom de l'entreprise ou du particulier"
                  value={formData.companyOrIndividualName}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Envoyer la demande</button>
              </form>
            </div>
          } />

          <Route path="/contact" element={
            <div className="contact-page">
              <h1>Contactez-nous</h1>
              <p>Nous sommes à votre disposition pour toute question ou demande.</p>
              <p>Email: kitokoservice@gmail.com</p>
              <p>Téléphone: 06 04 12 36 61</p>
            </div>
          } />

          <Route path="/a-propos" element={
            <div className="about-page">
              <h1>À propos de KITOKO-SERVICE</h1>
              <p>Nous sommes une entreprise spécialisée dans le nettoyage et l'entretien de locaux professionnels et résidentiels.</p>
              <p>Avec des années d'expérience, nous proposons des solutions sur-mesure pour répondre à vos besoins spécifiques.</p>
              <p>Nous nous engageons à fournir un service de nettoyage fiable, efficace et respectueux de l'environnement pour garantir la satisfaction de nos clients.</p>
              <p>Notre équipe professionnelle utilise des équipements modernes et des produits de qualité pour assurer un nettoyage impeccable à chaque intervention.</p>
            </div>
          } />

          <Route path="/nos-tarifs" element={
            <div className="pricing-page">
              <h1>Nos Tarifs</h1>
              <div className="pricing">
                <h2>Nos Tarifs</h2>
                <ul>
                  <li>Nettoyage de bureaux : Mensuel / Sur devis , 25€ / Passage</li>
                  <li>Entretien ménager : 50€ / visite</li>
                  <li>Nettoyage industriel : Mensuel / Sur devis , 150€ / Intervention</li>
                  <li>Nettoyage hôtelier : Sur devis</li>
                </ul>
                <p>Contactez-nous pour un devis personnalisé adapté à vos besoins !</p>
              </div>
            </div>
          } />

	  {/* Page Conseils de nettoyage */}
          <Route path="/conseils-de-nettoyage" element={<CleaningTips />} />
	  <Route path="/informations-generales" element={<GeneralInfo />} />
	  <Route path="/avis-et-evaluations" element={<AvisEtEvaluations />} />
	  <Route path="/faq" element={<FAQ />} />
	  <Route path="/personnel-qualifie" element={<PersonnelQualifie />} />
          <Route path="/sans-engagement" element={<SansEngagement />} />
          <Route path="/demande-employe" element={<DemandeEmploye />} />
        </Routes>

	  {/* Nouveau Footer avant l'existant */}
<div className="footer-second-alt">
  <div className="footer-second-alt-content">
    {/* Cercle avec salutation des mains */}
    <div className="footer-second-alt-circle">
      <span role="img" aria-label="salutation">✅</span>
    </div>
    <Link to="/personnel-qualifie" className="footer-link">
      <p>Personnel qualifié</p>
    </Link>

    {/* Cercle avec X */}
    <div className="footer-second-alt-circle">
      <span role="img" aria-label="X">❌</span>
    </div>
    <Link to="/sans-engagement" className="footer-link">
      <p>Sans engagement</p>
    </Link>

    {/* Cercle avec Yes */}
    <div className="footer-second-alt-circle">
      <span role="img" aria-label="Yes">📋</span>
    </div>
    <Link to="/demande-employe" className="footer-link">
      <p>Demandez un(e) employé(e)</p>
    </Link>
  </div>
</div>

        {/* Footer */}
        <footer className="footer-second">
          <div className="footer-content">
            {/* Blog ou actualités */}
            <div className="footer-section">
              <h3>Blog ou Actualités</h3>
              <ul>
                <li>
                  <button onClick={() => alert('Offres à venir')} className="link-button">Offres à venir</button>
                </li>
	           <li>
                   <Link to="/conseils-de-nettoyage" className="link-button">Conseils de nettoyage</Link>
                   </li>
                 </ul>
            </div>

            {/* Témoignages Clients */}
            <div className="footer-section">
              <h3>Témoignages Clients</h3>
              <ul>
                <li>
                  <button onClick={() => alert('Ce que disent nos clients')} className="link-button">Ce que disent nos clients</button>
                </li>
	           <li>
                   <Link to="/avis-et-evaluations" className="link-button">Avis et évaluations</Link>
                   </li>
                 </ul>
            </div>

            {/* FAQ */}
            <div className="footer-section">
              <h3>FAQ</h3>
              <ul>
                <li>
                  <Link to="/faq" className="link-button">Questions Fréquentes</Link>
                </li>
	           <li>
                   <Link to="/informations-generales" className="link-button">Informations Générales</Link>
                   </li>
                 </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 KITOKO-SERVICE - Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
