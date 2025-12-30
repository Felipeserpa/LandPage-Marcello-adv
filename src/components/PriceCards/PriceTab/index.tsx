import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  /* 📌 Formato assimétrico idêntico à foto (Top-Left e Bottom-Right maiores) */
  border-radius: 70px 15px 70px 15px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
  padding: 60px 40px;
  width: 100%;
  max-width: 380px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #f2f2f2;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: auto;
    padding: 40px 20px;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 2.5rem;
  img {
    width: 90px; /* Ícone de globo maior como na foto */
    height: auto;
    opacity: 0.6;
  }
`;

const Title = styled.h3`
  color: #0b1d10;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem; /* H1 interno do card aumentado */
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.8rem;
`;

const Description = styled.p`
  color: #444;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem; /* Descrição maior e mais legível */
  line-height: 1.7;
  font-weight: 500;

  strong {
    color: #0b1d10;
    font-weight: 700;
  }
`;

const PriceTab = ({
  planName,
  features,
}: {
  planName: string;
  features: string[];
}) => {
  return (
    <Card>
      <IconWrapper>
        <img src="/servico.png" alt="Globo" />
      </IconWrapper>
      <Title>{planName}</Title>
      <Description>
        {/* Usamos o join para transformar o array de texto em um parágrafo único */}
        {features && typeof features[0] === 'string' ? (
          <span
            dangerouslySetInnerHTML={{
              __html: features[0]
                .replace(
                  'A Justiça também pode ser acionada',
                  '<strong>A Justiça também pode ser acionada</strong>'
                )
                .replace(
                  'sistema público de saúde',
                  '<strong>sistema público de saúde</strong>'
                ),
            }}
          />
        ) : null}
      </Description>
    </Card>
  );
};

export default PriceTab;
