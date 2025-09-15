import styled from "styled-components";

const Container = styled.div`
  padding: 80px 1.5rem;
  background-color: ${({ theme }) =>
    theme.colors.background}; // cor 3 - fundo escuro
  color: ${({ theme }) => theme.colors.text}; // cor 5 - texto claro
  min-height: 100vh;

  h1 {
    color: ${({ theme }) => theme.colors.ligth}; // cor 1 - destaque no título
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      background-color: ${({ theme }) =>
        theme.colors.accent}; // cor 4 - destaque nos itens
      color: ${({ theme }) => theme.colors.light}; // cor 5 - texto claro
      padding: 0.75rem 1rem;
      margin-bottom: 0.75rem;
      border-radius: 6px;
      font-size: 1rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.secondary}; // cor 2 - hover elegante
      }
    }
  }
`;

function Servicos() {
  return (
    <Container>
      <h1>Nossos Serviços</h1>
      <ul>
        <li>Infraestrutura de TI</li>
        <li>Monitoramento inteligente</li>
        <li>Consultoria tecnológica</li>
      </ul>
    </Container>
  );
}

export default Servicos;
