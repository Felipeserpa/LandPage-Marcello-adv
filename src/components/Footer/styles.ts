import styled from 'styled-components';

const Container = styled.div`
  background-color: #f8f9fa;
  position: relative;

  /* Linha Dourada no Topo */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #c4a77d;
  }

  .footer-main {
    padding: 60px;
  }

  .section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    //argin-bottom: 50px; /* Espaço para o copyright em baixo */
  }

  /* Logo */
  .footer-brand img {
    max-width: 220px; /* Aumentado conforme a foto */
    height: auto;
  }

  /* Bloco de Informações (Direita) */
  .footer-info {
    text-align: right;

    h3 {
      color: #c5a059;
      font-size: 1.4rem; /* Texto maior */
      margin-bottom: 15px;
      font-weight: 700;
    }

    p,
    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 1.1rem; /* Texto maior */
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-bottom: 8px;
      opacity: 0.9;
    }

    svg {
      color: #c5a059;
    }
  }

  /* Parte de Baixo (Desenvolvido por...) */
  .footer-bottom {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1); /* Linha divisória sutil */
    padding-top: 20px;
    text-align: center;

    p {
      color: rgba(255, 255, 255, 0.5); /* Cinza Transparente */
      font-size: 1rem;
      letter-spacing: 0.5px;

      span {
        font-weight: bold;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  /* Responsivo */
  @media (max-width: 930px) {
    .section-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 40px;
    }

    .footer-info {
      text-align: center;
      align-items: center;

      p,
      a {
        justify-content: center;
      }
    }
  }
`;

export default Container;
