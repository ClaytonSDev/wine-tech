import styled from "styled-components";

const Container = styled.div`
  padding: 80px 1.5rem 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  h1 {
    color: ${({ theme }) => theme.colors.light};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.light};
      padding: 0.75rem 1rem;
      margin-bottom: 0.75rem;
      border-radius: 6px;
      font-size: 1rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media (max-width: 480px) {
    padding-top: 70px;

    h1 {
      font-size: 1.5rem;
    }

    ul li {
      font-size: 0.95rem;
      padding: 0.6rem 0.8rem;
    }
  }
`;

function Servicos() {
  return (
    <Container>
      <h1>Nossos Serviços</h1>
      <ul>
        <li>Desenvolvimento de sistemas personalizados</li>
        <li>Infraestrutura de TI e Cloud</li>
        <li>Consultoria em transformação digital</li>
        <li>Monitoramento inteligente e automação</li>
        <li>Integração de dados e segurança da informação</li>
      </ul>
    </Container>
  );
}

export default Servicos;
