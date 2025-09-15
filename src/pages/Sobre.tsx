import styled from "styled-components";
import bgImage from "../assets/background-sobre.png";

const SobreContainer = styled.div`
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.light};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  > div {
    padding: 80px 2rem 60px;
    max-width: 900px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-style: italic;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.2rem;

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      padding: 70px 1.5rem 40px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }

    ul li {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    > div {
      padding: 60px 1rem 30px;
    }

    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p,
    ul li {
      font-size: 0.95rem;
    }
  }
`;

function Sobre() {
  return (
    <SobreContainer>
      <div>
        <h1>Sobre</h1>
        <h2>A Tradição da Qualidade, a Precisão da Tecnologia</h2>
        <p>Fundada com o compromisso de unir tradição e inovação...</p>
      </div>
    </SobreContainer>
  );
}

export default Sobre;
