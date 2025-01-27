import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa'; // Icône pour les questions
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    { question: "Quels services proposez-vous ?", answer: "Nous proposons le nettoyage de bureaux, entretien ménager, nettoyage industriel, et bien plus." },
    { question: "Comment demander un devis ?", answer: "Cliquez sur le bouton 'Demander un devis' en haut de la page et remplissez le formulaire." },
    { question: "Travaillez-vous avec des particuliers ou des entreprises ?", answer: "Nous travaillons avec les deux, particuliers et entreprises." },
    { question: "Quels produits utilisez-vous ?", answer: "Nous utilisons des produits respectueux de l'environnement et efficaces pour tout type de nettoyage." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>Questions Fréquentes</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'open' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              <FaAngleRight className="icon" />
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'visible' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

