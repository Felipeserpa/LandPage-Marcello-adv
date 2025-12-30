// App.js ou o arquivo principal
import PriceCard from '../../components/PriceCards'; // Importa o componente de cartões de preços
import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #9b9595;

  text-align: center;
`;

function App() {
  return (
    <SectionWrapper>
      <PriceCard />
    </SectionWrapper>
  );
}

export default App;
