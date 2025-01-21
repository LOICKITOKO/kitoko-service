import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Demande envoyée !');
    // Logique de soumission du formulaire (par exemple avec fetch() pour une API)
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">KITOKO-SERVICE</Link>
          </div>
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
                <h1>Bienvenue sur KITOKO-SERVICE</h1>
                <p>Des solutions de nettoyage adaptées à vos besoins.</p>
                <Link to="/demander-devis" className="cta-button">Demander un devis gratuit maintenant</Link>
              </header>

              <section className="services-overview">
                <h2>Aperçu de nos services</h2>
                <div className="services-icons">
                  <div className="service">
                    <img src="/service_icons/cleaning-icon.png" alt="Service 1" />
                    <p>Nettoyage de bureaux</p>
                  </div>
                  <div className="service">
                    <img src="/service_icons/housekeeping-icon.png" alt="Service 2" />
                    <p>Entretien ménager</p>
                  </div>
                  <div className="service">
                    <img src="/service_icons/office-icon.png" alt="Service 3" />
                    <p>Nettoyage industriel</p>
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

          {/* Page À propos de nous */}
          <Route path="/a-propos" element={
            <div className="about-page">
              <h1>À propos de KITOKO-SERVICE</h1>
              <p>Nous sommes une entreprise spécialisée dans le nettoyage et l'entretien de locaux professionnels et résidentiels.</p>
              <p>Avec des années d'expérience, nous proposons des solutions sur-mesure pour répondre à vos besoins spécifiques.</p>
	      <p>Nous nous engageons à fournir un service de nettoyage fiable, efficace et respectueux de l'environnement pour garantir la satisfaction de nos clients.</p>
	      <p>Notre équipe professionnelle utilise des équipements modernes et des produits de qualité pour assurer un nettoyage impeccable à chaque intervention.</p>
            </div>
          } />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 KITOKO-SERVICE - Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

