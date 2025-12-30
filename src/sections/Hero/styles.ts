import styled from 'styled-components';

const Container = styled.section`
  .presentation-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100%;
    background-image: url('/img1.webp');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding-top: 80px;
    }
  }

  .presentation-container::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(11, 29, 16, 0.85); /* Overlay Verde da foto */
    z-index: -1;
  }

  .content-wrapper {
    max-width: 1120px;
    margin-left: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinha tudo na esquerda */

    @media (max-width: 768px) {
      margin: 0 auto;
      padding: 0 20px;
    }
  }

  .logo-container {
    max-width: 500px;
    margin-bottom: 0;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .text-container {
    max-width: 550px;
    margin-bottom: 40px;

    color: white;

    h1 {
      /* 📌 MARGEM NEGATIVA: Puxa o texto para cima da logo */
      margin-top: -80px;
      font-size: 4rem;
      line-height: 1.1;
      font-weight: 800;
      margin-bottom: 12px;

      @media (max-width: 768px) {
        font-size: 2.2rem;
        margin-top: -25px;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  /* 📌 BOTÃO PRINCIPAL (ESTILO DA FOTO) */
  /* 📌 BOTÃO PRINCIPAL (ESTILO EXATO DA FOTO) */
  .whatsapp-button-main {
    /* Cores e Degradê */
    background: linear-gradient(180deg, #ffffff 0%, #d1d1d1 100%);
    color: #0b1d10;
    height: 60px;
    width: 400px;

    /* Formato das Pontas */
    border-radius: 0px 20px 0px 20px;
    border: 1px solid #ccc;
    /* Espaçamento e Texto */
    padding: 15px 10px;
    font-size: 2rem;
    font-weight: 700;
    text-transform: none; /* Mantém o texto normal, sem ser tudo maiúsculo */
    /* Alinhamento */
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    text-decoration: none;
    /* Sombra para dar profundidade */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    svg {
      color: #0b1d10; /* Ícone escuro conforme o texto */
      font-size: 1.3rem;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
      background: #ffffff;
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* 📌 BOTÃO FLUTUANTE (CANTO DIREITO) */
  .whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
      background-color: #128c7e;
    }
  }
`;

export default Container;
