import React from 'react';
import styled from 'styled-components';

interface PricingTabProps {
  planName: string;
  description: string; // Adicionado para o texto do card
  features?: string[]; // Mantido para compatibilidade futura
}

const Card = styled.div`
  background-color: #ffffff;
  /* 📌 O segredo das pontas: Top-Left, Top-Right, Bottom-Right, Bottom-Left */
  border-radius: 60px 15px 60px 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 3rem 2rem;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza ícone e textos */
  text-align: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 2rem;
  img {
    width: 80px;
    height: auto;
    opacity: 0.7; /* Para dar o efeito suave do ícone da foto */
  }
`;

const Title = styled.h3`
  color: #0b1d10; /* Verde escuro do site */
  font-size: 1.4rem;

  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
`;

const Description = styled.p`
  color: #444;
  font-size: 0.95rem;
  line-height: 1.6;

  strong {
    color: #0b1d10;
    font-weight: 700;
  }
`;
const Feature = styled.p`
  color: #1c1c1c;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

function PricingTab({ planName, description, features }: PricingTabProps) {
  return (
    <Card>
      <IconWrapper>
        {/* Substitua pelo caminho correto da sua imagem de globo */}
        <img src="/servico.png" alt="Ícone de Serviço" />
      </IconWrapper>

      <Title>{planName}</Title>
      <>
        {features &&
          features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}{' '}
      </>
      <Description>{description}</Description>
    </Card>
  );
}

export default PricingTab;
