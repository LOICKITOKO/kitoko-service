import React, { useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import videoD from './videos/videoD.mp4'; // Vidéo d'arrière-plan
import videoA from './videos/videoA.mp4';
import videoB from './videos/videoB.mp4';
import videoC from './videos/videoC.mp4';
import videoE from './videos/videoE.mp4'; // Vidéo ajoutée pour nettoyage hôtelier
import CleaningTips from './pages/CleaningTips'; // Import du composant CleaningTips
import GeneralInfo from './pages/GeneralInfo';
import AvisEtEvaluations from './pages/AvisEtEvaluations';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const csrftoken = Cookies.get('csrftoken');

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/devis/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken, // Inclut le token CSRF
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Demande envoyée avec succès !');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-links">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/a-propos" className="navbar-link">À propos</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Page d'Accueil */}
          <Route path="/" element={
            <div className="home">
              <header className="header">
                {/* Vidéo d'arrière-plan */}
                <video className="background-video" autoPlay loop muted>
                  <source src={videoD} type="video/mp4" />
                  Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
                {/* Contenu au-dessus de la vidéo */}
                <div className="header-content">
                  <h1>Bienvenue sur KITOKO-SERVICE</h1>
                  <p>Des solutions de nettoyage adaptées à vos besoins.</p>
                  <Link to="/demander-devis" className="cta-button">Demander un devis gratuit maintenant</Link>
                </div>
              </header>

              {/* Section des services */}
              <section className="services-overview">
                <h2>Aperçu de nos services</h2>
                <div className="services-icons">
                  <div className="service">
                    <p>Nettoyage de bureaux</p>
                    <video controls className="service-video">
                      <source src={videoA} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                  <div className="service">
                    <p>Entretien ménager</p>
                    <video controls className="service-video">
                      <source src={videoB} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                  <div className="service">
                    <p>Nettoyage industriel</p>
                    <video controls className="service-video">
                      <source src={videoC} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                  {/* Nouvelle vidéo ajoutée */}
                  <div className="service">
                    <h3>Nettoyage hôtelier</h3>
                    <video controls className="service-video">
                      <source src={videoE} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                </div>
              </section>
            </div>
          } />

          {/* Page Demander un devis */}
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

          {/* Page Contact */}
          <Route path="/contact" element={
            <div className="contact-page">
              <h1>Contactez-nous</h1>
              <p>Nous sommes à votre disposition pour toute question ou demande.</p>
              <p>Email: kitokoservice@gmail.com</p>
              <p>Téléphone: 06 04 12 36 61</p>
            </div>
          } />

          {/* Page À propos */}
          <Route path="/a-propos" element={
            <div className="about-page">
              <h1>À propos de KITOKO-SERVICE</h1>
              <p>Nous sommes une entreprise spécialisée dans le nettoyage et l'entretien de locaux professionnels et résidentiels.</p>
              <p>Avec des années d'expérience, nous proposons des solutions sur-mesure pour répondre à vos besoins spécifiques.</p>
              <p>Nous nous engageons à fournir un service de nettoyage fiable, efficace et respectueux de l'environnement pour garantir la satisfaction de nos clients.</p>
              <p>Notre équipe professionnelle utilise des équipements modernes et des produits de qualité pour assurer un nettoyage impeccable à chaque intervention.</p>
            </div>
          } />

          {/* Page Conseils de nettoyage */}
          <Route path="/conseils-de-nettoyage" element={<CleaningTips />} />
	  <Route path="/informations-generales" element={<GeneralInfo />} />
	  <Route path="/avis-et-evaluations" element={<AvisEtEvaluations />} />
        </Routes>

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
                   <Link to="/conseils-de-nettoyage" className="link-button">
                     Conseils de nettoyage
                   </Link>
                 </ul>
            </div>

            {/* Témoignages Clients */}
            <div className="footer-section">
              <h3>Témoignages Clients</h3>
              <ul>
                <li>
                  <button onClick={() => alert('Ce que disent nos clients')} className="link-button">Ce que disent nos clients</button>
                </li>
                   <Link to="/avis-et-evaluations" className="link-button">
                     Avis et évaluations
                   </Link>
                 </ul>
            </div>

            {/* FAQ */}
            <div className="footer-section">
              <h3>FAQ</h3>
              <ul>
                <li>
                  <button onClick={() => alert('Questions Fréquentes')} className="link-button">Questions Fréquentes</button>
                </li>
                   <Link to="/informations-generales" className="link-button">
                     Informations Générales
                   </Link>
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

