import styled from "styled-components";
import logo from "../assets/logo1.png";
import bgImage from "../assets/background-tech.png";

const Container = styled.div`
  padding: 80px 1.5rem 40px;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  img {
    width: 260px;
    height: 260px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.light};
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.7;
    max-width: 720px;
    color: ${({ theme }) => theme.colors.light};
  }

  @media (max-width: 768px) {
    padding-top: 70px;

    img {
      width: 180px;
      height: 180px;
    }

    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 140px;
      height: 140px;
    }

    h1 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

function Home() {
  return (
    <Container>
      <img src={logo} alt="Logo Wine Tech" />
      <h1>Bem-vindo à Wine Tech</h1>
      <p>
        Fundada em 2015, a Wine Tech nasceu com o propósito de transformar o
        setor de TI por meio de soluções inteligentes, seguras e escaláveis...
      </p>
    </Container>
  );
}

export default Home;
