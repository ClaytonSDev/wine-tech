import styled from 'styled-components';

const Container = styled.div`
  padding: 80px 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.light};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.light};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;

    input,
    textarea {
      padding: 0.75rem;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.light};
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    button {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
      padding: 0.75rem;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

function Contato() {
  return (
    <Container>
      <h1>Fale Conosco</h1>
      <p>contato@winetech.com.br<br />(69) 99999-9999</p>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default Contato;
