import styled from 'styled-components';

const Container = styled.section`
  .presentation-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-image: url('/img1.webp');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    padding: 20px 0; /* Reduzi o padding vertical */

    @media (max-width: 768px) {
      padding-top: 40px;
      justify-content: flex-start;
    }
  }

  .presentation-container::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(11, 29, 16, 0.85);
    z-index: -1;
  }

  .content-wrapper {
    max-width: 1120px;
    margin-left: 8%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
      margin: 0 auto;
      width: 100%;
      padding: 0 20px;
      align-items: center;
      text-align: center;
    }
  }

  .logo-container {
    width: 100%;
    max-width: 400px; /* Reduzi um pouco o tamanho máximo da logo */
    margin-bottom: -10px; /* Margem negativa para aproximar o texto */

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    @media (max-width: 768px) {
      max-width: 220px;
      margin-bottom: 10px;
    }
  }

  .text-container {
    max-width: 650px;
    color: white;

    h1 {
      /* Sem margem negativa gigante, apenas ajuste fino */
      margin-top: 0;
      font-size: clamp(2rem, 5vw, 3.8rem);
      line-height: 1.1;
      font-weight: 800;
      margin-bottom: 15px;
    }

    h2 {
      font-size: clamp(1rem, 2vw, 1.3rem);
      font-weight: 400;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.85);
    }
  }

  /* 📌 BOTÃO PRINCIPAL */
  .whatsapp-button-main {
    background: linear-gradient(180deg, #ffffff 0%, #d1d1d1 100%);
    color: #0b1d10;
    min-height: 60px;
    width: 100%;
    max-width: 400px;
    border-radius: 0px 20px 0px 20px;
    border: 1px solid #ccc;
    padding: 15px 25px;
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    svg {
      font-size: 1.5em;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }
  }

  /* WhatsApp Flutuante */
  .whatsapp-float {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }
`;

export default Container;
