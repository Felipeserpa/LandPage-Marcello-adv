import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Container from './styles';

export default function Presentation() {
  const WHATSAPP_URL = 'https://wa.me/5581984135753';

  return (
    <Container>
      {/* Botão Flutuante no canto direito */}
      <a
        href={WHATSAPP_URL}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <div className="presentation-container" id="inicio">
        <div className="content-wrapper">
          <div className="logo-container">
            <img src="logo.png" alt="Marcello Rodrigues" />
          </div>

          <div className="text-container">
            <h1>
              Teve seu plano de saúde negado? Podemos te auxiliar da forma que
              você merece!
            </h1>
            <h2>Nossa equipe está pronta para te atender, entre em contato!</h2>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button-main"
            >
              <FaWhatsapp /> Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
