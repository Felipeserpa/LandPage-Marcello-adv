import styled from 'styled-components';

const Container = styled.div`
  section#skills {
    background-color: #1e293b; /* bg-slate-900 */
    padding: 4rem 1rem 4rem 1rem;
    text-align: center; /* centraliza título e texto */
  }

  section#skills .content-wrapper {
    max-width: 1120px;
    margin: 0 auto;
  }

  section#skills h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  section#skills p {
    font-size: 1.125rem;
    color: white;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  #skills-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* para quebrar linha no mobile */
    gap: 2rem;
    align-items: flex-start; /* alinha cards no topo */
  }

  #skills-container .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 280px; /* largura fixa */
    background: #0f172a; /* um azul escuro para contraste */
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  #skills-container .skill-card:hover {
    transform: scale(1.05);
  }

  #skills-container .skill-card h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    #skills-container .skill-card {
      width: 100%; /* no mobile, ocupa toda largura */
    }
  }
`;

export default Container;
