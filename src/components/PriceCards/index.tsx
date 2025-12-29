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
        planName="Landing Pages"
        price={600}
        features={[
          'Design responsivo e moderno',
          'Otimização para conversão',
          'Integração com redes sociais',
          'Formulário de contato',
        ]}
      />

      {/* Plano Básico (Popular) */}
      <PricingTab
        popular
        planName="Sites Portfólio"
        price={800}
        features={[
          'Design personalizado',
          'Galeria de projetos',
          'Blog integrado',
          'SEO básico',
        ]}
      />

      {/* Plano Avançado */}
      <PricingTab
        planName="Sistemas Personalizados + Apps"
        price={1000}
        features={[
          'Analise de requisitos',
          'Desenvolvimento sob medida',
          'Integração com APIs',
          'Suporte técnico',
        ]}
      />
    </PriceCardContainer>
  );
};

export default PriceCard;
