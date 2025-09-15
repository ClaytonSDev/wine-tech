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

  // ...restante do código
`;

function Contato() {
  return (
    <Container>
      <h1>Fale Conosco</h1>
      <p>
        contato@winetech.com.br
        <br />
        (69) 99999-9999
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
