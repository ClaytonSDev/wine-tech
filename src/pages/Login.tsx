import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 1.5rem 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;

  h2 {
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  form {
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
    }

    button {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  a {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.light};
    text-decoration: underline;
    font-size: 0.9rem;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (max-width: 768px) {
    padding-top: 70px;

    h2 {
      font-size: 1.6rem;
    }

    form {
      padding: 1.5rem;
    }

    input,
    button {
      font-size: 0.95rem;
    }

    a {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.4rem;
    }

    form {
      padding: 1rem;
    }

    input,
    button {
      font-size: 0.9rem;
    }

    a {
      font-size: 0.8rem;
    }
  }
`;

const Login = () => {
  return (
    <Container>
      <h2>Área do Cliente</h2>
      <form>
        <input type="email" placeholder="Seu e-mail" required />
        <input type="password" placeholder="Sua senha" required />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/recuperar-senha">Esqueceu a senha?</Link>
    </Container>
  );
};

export default Login;
