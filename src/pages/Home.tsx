import styled from "styled-components";
import logo from "../assets/logo1.png";
import bgImage from "../assets/background-tech.png"; // imagem de fundo

const Container = styled.div`
  padding: 80px 1.5rem;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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
    img {
      width: 180px;
      height: 180px;
    }

    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
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
        setor de TI por meio de soluções inteligentes, seguras e escaláveis. Com
        sede em Guarulhos e presença estratégica em Osasco, oferecemos serviços
        que vão desde infraestrutura de data center até consultoria em
        cibersegurança e LGPD.
        <br />
        <br />
        Nossa missão é impulsionar o progresso humano através da tecnologia, com
        uma equipe altamente qualificada e apaixonada por inovação.
      </p>
    </Container>
  );
}

export default Home;

