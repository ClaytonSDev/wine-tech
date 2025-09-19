import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../contexts/UserContext"; // ✅ Importa o contexto

const Container = styled.div`
  /* ... estilos mantidos exatamente como você enviou ... */
`;

const Login = () => {
  const { login } = useUser(); // ✅ Função de login do contexto
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de login — aqui você pode integrar com API futuramente
    const userData = {
      name: "Clayton",
      email,
    };

    login(userData); // ✅ Atualiza o contexto
    navigate("/");   // ✅ Redireciona para a Home
  };

  return (
    <Container>
      <h2>Área do Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/recuperar-senha">Esqueceu a senha?</Link>
    </Container>
  );
};

export default Login;
