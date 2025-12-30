import styled from 'styled-components';

const Container = styled.div`
  #about.section-blue {
    background-color: #0b301c; /* Cor exata da imagem */
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 80px 0;
  }

  .section-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px; /* Espaço entre a foto e o texto */
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  /* FOTO COM EFEITO DE MOLDURA */
  .image-motion {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  /* TEXTO E TIPOGRAFIA */
  article {
    flex: 1;
    color: #ffffff;
  }

  .highlight-title {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 25px;
    line-height: 1.2;
  }

  article p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 35px;
    color: rgba(255, 255, 255, 0.9);
  }

  /* BOTÃO WHATSAPP ESTILO PREMIUM */
  .whatsapp-button-main {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #e6e6e6; /* Cinza bem claro */
    color: #0b1d10;
    padding: 16px 32px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    width: fit-content;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    svg {
      font-size: 1.6rem;
      color: #25d366; /* Ícone verde */
    }

    &:hover {
      background: #ffffff;
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }
  }

  /* RESPONSIVO */
  @media (max-width: 992px) {
    .section-container {
      flex-direction: column;
      text-align: center;
      gap: 50px;
    }

    .image-motion {
      justify-content: center;
    }

    .image-motion img {
      max-width: 300px;
    }

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .highlight-title {
      font-size: 2.2rem;
    }
  }
`;

export default Container;
