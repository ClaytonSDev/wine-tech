import styled from "styled-components";

const Container = styled.div`
  padding: 80px 1.5rem 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;

    input,
    textarea {
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors.border || "#ccc"};
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.input || "#fff"};
      color: ${({ theme }) => theme.colors.text};
      resize: vertical;
    }

    textarea {
      min-height: 120px;
    }

    button {
      padding: 0.75rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
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
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }

    form {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.95rem;
    }

    input,
    textarea,
    button {
      font-size: 0.95rem;
    }
  }
`;

function Contato() {
  return (
    <Container>
      <h1>Fale Conosco</h1>
      <p>
        Vamos conversar sobre o futuro da sua empresa?
        <br />
        <strong>Email:</strong> contato@winetech.com.br
        <br />
        <strong>Telefone:</strong> (13) 99180-2871
      </p>
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
