import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <footer className="footer-main">
        <div className="section-container">
          {/* LADO ESQUERDO: LOGO */}
          <div className="footer-brand">
            <img src="logoM.png" alt="Logo Marcelo Advogado" />
          </div>

          {/* LADO DIREITO: INFORMAÇÕES */}
          <div className="footer-info">
            <h3>Mais informações</h3>
            <p>(81) 98413-5753</p>
            <a href="mailto:marcellorod@hotmail.com">
              <FaEnvelope /> marcellorod@hotmail.com
            </a>
            <p>
              <FaMapMarkerAlt /> Rua Francisco da Cunha, 392, Boa Viagem –
              Recife PE.
            </p>
          </div>
        </div>

        {/* PARTE INFERIOR: COPYRIGHT (CENTRALIZADO E CINZA) */}
        <div className="footer-bottom">
          <p>
            © Copyright 2024. Todos os direitos reservados. Desenvolvido por
            <span> Serpa Soluções Tecnológicas.</span>
          </p>
        </div>
      </footer>
    </Container>
  );
}
