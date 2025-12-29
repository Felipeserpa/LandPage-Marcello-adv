// PricingTab.js
import styled from 'styled-components';

interface PricingTabProps {
  popular?: boolean;
  planName: string;
  price: number;
  features: string[];
}

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #10b981;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

const PlanName = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const PriceText = styled.p`
  font-size: 2.25rem;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 1.5rem;
`;

const CTAButton = styled.a`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  display: block;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  color: #4b5563;
`;

const CheckIcon = styled.span`
  color: #22c55e;
  margin-right: 0.5rem;
  font-weight: bold;
`;

function PricingTab(props: PricingTabProps) {
  return (
    <Card>
      {props.popular && <PopularBadge></PopularBadge>}
      <PlanName>{props.planName}</PlanName>
      <PriceText>A partir de R${props.price.toFixed(2)}</PriceText>
      <CTAButton
        href="https://wa.me/5581995773197?text=Olá%2C%20gostaria%20de%20fazer%20um%20orçamento!"
        target="_blank"
        rel="noreferrer"
      >
        EU QUERO
      </CTAButton>
      <PlanName as="h3">Inclui:</PlanName>
      <FeaturesList>
        {props.features.map((feature, index) => (
          <FeatureItem key={index}>
            <CheckIcon>✔</CheckIcon>
            {feature}
          </FeatureItem>
        ))}
      </FeaturesList>
    </Card>
  );
}

export default PricingTab;
