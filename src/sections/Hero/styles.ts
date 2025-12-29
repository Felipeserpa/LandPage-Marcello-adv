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
  .whatsapp-button-main {
    background-color: #c5a059;
    color: #ffffff;
    border: none;
    padding: 14px 30px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    transition: 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: fit-content;

    svg {
      color: #ffffff;
      font-size: 1.3rem;
    }

    &:hover {
      background-color: #d4af37;
      transform: translateY(-2px);
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
