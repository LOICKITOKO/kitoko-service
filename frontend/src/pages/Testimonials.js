import React, { useState, useEffect } from "react";
import "./Testimonials.css";

// Liste réduite à 10 témoignages
const testimonialsList = [
  "Excellent travail ! - Julien",
  "Service client au top ! - Emma",
  "Une vraie qualité de prestation. - Lucas",
  "Je referai appel à eux sans hésiter. - Nora",
  "Travail soigné et rapide. - Mehdi",
  "Rapidité et efficacité. - Pierre",
  "Excellent service. - Claire",
  "Un travail soigné et précis. - Marc",
  "Très satisfait de la prestation. - Sophie",
  "Une équipe professionnelle. - Léa",
  "Je recommande sans hésiter. - Thomas",
  "Un service irréprochable. - Antoine",
  "De vrais experts ! - Sarah",
  "Merci pour votre efficacité. - Léo",
  "Impressionné par la qualité. - Camille",
  "Rapide et à l'écoute. - Hugo",
  "Une prestation parfaite. - Julie",
  "Des résultats impressionnants. - Eric",
  "Un service exceptionnel. - Amandine",
  "Je reviendrai sans hésiter. - Vincent",
  "Professionnalisme et rapidité. - Mathilde",
  "Le meilleur service que j'ai eu ! - Paul",
  "Très bonne expérience. - Élodie",
  "Super qualité et service. - Alain",
  "Au top, merci beaucoup ! - Lila",
  "Travail bien fait et dans les délais. - Victor",
  "Un grand merci à l'équipe. - Pauline",
  "Toujours satisfait ! - Gabriel",
  "Service exceptionnel à chaque fois. - Inès",
  "Un vrai plaisir de travailler avec vous. - Jérôme"
];

const Testimonials = () => {
  const [activeTestimonials, setActiveTestimonials] = useState([]);

  // Fonction pour obtenir 5 témoignages aléatoires
  const getRandomTestimonials = () => {
    let randomTestimonials = [];
    let remainingTestimonials = [...testimonialsList];

    while (randomTestimonials.length < 5) {
      const randomIndex = Math.floor(Math.random() * remainingTestimonials.length);
      randomTestimonials.push(remainingTestimonials.splice(randomIndex, 1)[0]);
    }

    return randomTestimonials;
  };

  useEffect(() => {
    // Initialiser avec 5 témoignages aléatoires au démarrage
    setActiveTestimonials(getRandomTestimonials());

    // Mettre à jour les témoignages toutes les 8 secondes
    const interval = setInterval(() => {
      setActiveTestimonials(getRandomTestimonials());
    }, 8000); // Mettre à jour tous les 8 secondes avec de nouveaux témoignages

    // Nettoyer l'intervalle à la destruction du composant
    return () => clearInterval(interval);
  }, []); // L'effet ne se lance qu'une seule fois au démarrage

  return (
    <div className="testimonials-container">
      <h1>Témoignages Clients</h1>

      <div className="testimonial-mosaic">
        {activeTestimonials.map((testimonial, i) => (
          <div key={i} className="testimonial-card">
            {testimonial}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
