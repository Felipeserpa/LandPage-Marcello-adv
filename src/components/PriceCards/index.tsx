import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // 1. Importar o motion
import PricingTab from './PriceTab';

const SectionWrapper = styled.section`
  background-color: #f8f9fa;
  padding: 100px 20px; /* Ajustado para não quebrar no mobile */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; /* Importante para não dar scroll lateral na animação */
  border-top: 4px solid #0b1d10;

  position: relative;

  /* 2. Opcional: Se quiser a borda fina de ponta a ponta também */
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px; /* Largura do traço */
    height: 5px; /* Espessura do traço */
    background-color: #c4a77d; /* Exemplo de cor Dourada/Bege da logo MR */
    border-radius: 0 0 5px 5px; /* Arredonda só a parte de baixo */
    z-index: 10;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const PriceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 50px;
  flex-wrap: wrap;
  max-width: 1300px;
  width: 100%;

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
        {/* CARD 1: Esquerda para Direita */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <PricingTab
            planName="Reajuste abusivo de plano de saúde"
            features={[
              'Um reajuste abusivo de plano de saúde é aquele que não segue os parâmetros estabelecidos pela Agência Nacional de Saúde Suplementar (ANS). A Justiça também pode ser acionada para questionar o reajuste abusivo.',
            ]}
          />
        </motion.div>

        {/* CARD 2: Cima para Baixo */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <PricingTab
            planName="Negativa de tratamento e medicamentos"
            features={[
              'É quando um plano de saúde ou o sistema público de saúde se recusa a fornecer ou cobrir um tratamento ou medicamento prescrito por um médico.',
            ]}
          />
        </motion.div>

        {/* CARD 3: Direita para Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <PricingTab
            planName="Negativa de cirurgias"
            features={[
              'Em caso de negativa de cirurgia pelo plano de saúde, é possível recorrer à Justiça com o auxílio de um advogado especializado em direito da saúde. A negativa de cobertura de material cirúrgico ou de cirurgia indicada pelo médico pode ser considerada abusiva e revista judicialmente.',
            ]}
          />
        </motion.div>
      </PriceCardContainer>
    </SectionWrapper>
  );
};

export default PriceCard;
