import React from 'react';
import styled from 'styled-components';
import PricingTab from './PriceTab';

const SectionWrapper = styled.section`
  background-color: #f8f9fa; /* Fundo cinza bem claro igual à foto */
  padding: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem; /* Título "Nossos Serviços" maior */
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 60px;
  text-align: center;
`;

const PriceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch; /* Garante que todos os cards tenham a mesma altura */

  /* 📌 ESPAÇAMENTO: Gap aumentado para 3.5rem (aprox 56px) para dar o ar premium */
  gap: 3.5rem;

  flex-wrap: wrap;
  max-width: 1300px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const PriceCard = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Veja alguns dos nossos serviços:</SectionTitle>
      <PriceCardContainer>
        <PricingTab
          planName="Reajuste abusivo de plano de saúde"
          features={[
            'Um reajuste abusivo de plano de saúde é aquele que não segue os parâmetros estabelecidos pela Agência Nacional de Saúde Suplementar (ANS). A Justiça também pode ser acionada para questionar o reajuste abusivo.',
          ]}
        />

        <PricingTab
          planName="Negativa de tratamento e medicamentos"
          features={[
            'É quando um plano de saúde ou o sistema público de saúde se recusa a fornecer ou cobrir um tratamento ou medicamento prescrito por um médico.',
          ]}
        />

        <PricingTab
          planName="Negativa de cirurgias"
          features={[
            'Em caso de negativa de cirurgia pelo plano de saúde, é possível recorrer à Justiça com o auxílio de um advogado especializado em direito da saúde. A negativa de cobertura de material cirúrgico ou de cirurgia indicada pelo médico pode ser considerada abusiva e revista judicialmente.',
          ]}
        />
      </PriceCardContainer>
    </SectionWrapper>
  );
};

export default PriceCard;
