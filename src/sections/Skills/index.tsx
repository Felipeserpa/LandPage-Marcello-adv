// App.js ou o arquivo principal
import PriceCard from '../../components/PriceCards'; // Importa o componente de cartões de preços
import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #fff;
  padding: 4rem 1rem;
  text-align: center;
`;

const SectionHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0e0c0c;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const SectionParagraph = styled.p`
  font-size: 1.125rem;
  color: white;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <SectionWrapper>
      <SectionHeader>Veja alguns dos nossos serviços:</SectionHeader>
      <PriceCard />
    </SectionWrapper>
  );
}

export default App;
