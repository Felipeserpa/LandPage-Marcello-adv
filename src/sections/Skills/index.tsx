// App.js ou o arquivo principal
import PriceCard from '../../components/PriceCards'; // Importa o componente de cartões de preços
import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #9b9595;
  padding: 4rem 1rem;
  text-align: center;
`;

const SectionHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6d6666;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
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
