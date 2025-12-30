// PriceCard.js
import styled from 'styled-components';
import PricingTab from '../../components/PriceCards/PriceTab'; // Importa o componente do cartão individual

const PriceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PriceCard = () => {
  return (
    <PriceCardContainer>
      {/* Plano Gratuito */}
      <PricingTab
        planName="Reajuste abusivo de plano de saúde"
        features={[
          'Um reajuste abusivo de plano de saúde é aquele que não segue os parâmetros estabelecidos pela Agência Nacional de Saúde Suplementar (ANS). A Justiça também pode ser acionada para questionar o reajuste abusivo',
        ]}
        description={''}
      />

      {/* Plano Básico (Popular) */}
      <PricingTab
        planName="Negativa de tratamento e medicamentos"
        features={[
          'É quando um plano de saúde ou o sistema público de saúde se recusa a fornecer ou cobrir um tratamento ou medicamento prescrito por um médico.;',
        ]}
        description={''}
      />

      {/* Plano Avançado */}
      <PricingTab
        planName="Negativa de cirurgias"
        features={[
          'Em caso de negativa de cirurgia pelo plano de saúde, é possível recorrer à Justiça com o auxílio de um advogado especializado em direito da saúde. A negativa de cobertura de material cirúrgico ou de cirurgia indicada pelo médico pode ser considerada abusiva e revista judicialmente;',
        ]}
        description={''}
      />
    </PriceCardContainer>
  );
};

export default PriceCard;
