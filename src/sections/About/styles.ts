import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  /* Cor de fundo base caso a imagem demore a carregar */
  background-color: #113123;
  overflow: hidden;

  .section-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    max-width: 100%; /* Ocupa a largura total para a imagem de fundo */
    margin: 0 auto;
    padding: 100px 60px; /* Aumentei o respiro vertical */

    /* Configuração da Imagem de Fundo */
    background-image: linear-gradient(
        rgba(17, 49, 35, 0.85),
        rgba(17, 49, 35, 0.85)
      ),
      url('../capa-2.png'); /* O gradiente cria o filtro escuro para o texto ler bem */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; /* Efeito Parallax (opcional, fica muito premium) */
  }

  /* Ajuste da Foto do Advogado dentro desse novo container */
  .image-motion {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    z-index: 2;
  }

  .image-motion img {
    width: 100%;
    max-width: 480px;
    border-radius: 20px;
    padding: 12px;
  }

  /* Texto e Artigo */
  article {
    flex: 1.1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    color: #ffffff;
  }

  .highlight-title {
    font-size: 3rem; /* Texto maior conforme seu pedido */
    font-weight: 800;
    margin-bottom: 25px;
    line-height: 1.1;
    color: #ffffff;
  }

  article p {
    font-size: 1.5rem; /* Texto maior */
    line-height: 1.8;
    margin-bottom: 40px;
    opacity: 0.95;
  }
  .whatsapp-button-main {
    /* Cores e Degradê */
    background: linear-gradient(180deg, #ffffff 0%, #d1d1d1 100%);
    color: #0b1d10;

    /* Tamanho e Proporção */
    min-height: 60px;
    width: 100%;
    max-width: 400px; /* Limita o tamanho no PC, mas encolhe no celular */

    /* Formato das Pontas (Estilo Assíncrono) */
    border-radius: 0px 20px 0px 20px;
    border: 1px solid #ccc;

    /* Espaçamento e Texto */
    padding: 15px 25px;
    font-size: 1.4rem; /* Ajustei de 2rem para 1.4rem para caber melhor no botão */
    font-weight: 700;
    text-transform: none;

    /* Alinhamento Centralizado */
    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza o conteúdo dentro do botão */
    gap: 12px;
    cursor: pointer;
    text-decoration: none;

    /* Sombra e Efeitos */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    svg {
      color: #25d366; /* Mudei para o verde do Zap para dar um destaque profissional */
      font-size: 1.8rem;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      background: linear-gradient(180deg, #ffffff 0%, #e6e6e6 100%);
      filter: brightness(1.05);
    }

    &:active {
      transform: translateY(0);
    }

    /* Ajuste para telas pequenas */
    @media (max-width: 480px) {
      font-size: 1.1rem;
      width: 100%;
      height: auto;
      padding: 12px 15px;
    }
  }

  /* Responsivo para não quebrar a imagem de fundo no celular */
  @media (max-width: 930px) {
    .section-container {
      flex-direction: column;
      padding: 60px 20px;
      gap: 50px;
      background-attachment: scroll; /* Desativa parallax no celular para melhor performance */
    }

    .image-motion {
      justify-content: center;
    }

    .highlight-title {
      font-size: 2.2rem;
      text-align: center;
    }

    article p {
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;

export default Container;
