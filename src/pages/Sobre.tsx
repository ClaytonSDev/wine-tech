import styled from "styled-components";
import bgImage from "../assets/background-sobre.png"; // imagem que você enviou

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
    background: rgba(0, 0, 0, 0.6); // overlay escuro
    z-index: -1;
  }

  > div {
    padding: 100px 2rem 60px; // conteúdo interno com espaçamento controlado
    max-width: 900px;
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
`;

function Sobre() {
  return (
    <SobreContainer>
      <div>
      <h1>Sobre</h1>
      <h2>A Tradição da Qualidade, a Precisão da Tecnologia</h2>
      <p>
        Fundada com o compromisso de unir tradição e inovação, a Wine Tech
        oferece soluções tecnológicas com excelência e precisão. Nossa atuação é
        guiada por valores sólidos e uma missão clara: transformar o setor de TI
        com inteligência e responsabilidade.
      </p>
      <h2>Nossa Missão</h2>
      <p>
        Impulsionar o progresso humano por meio da tecnologia, entregando
        soluções seguras, escaláveis e personalizadas para cada cliente.
      </p>
      <h2>Nossos Valores</h2>
      <ul>
        <li>Excelência Técnica</li>
        <li>Compromisso com o Cliente</li>
        <li>Inovação e Adaptabilidade</li>
      </ul>
      </div>
    </SobreContainer>
  );
}

export default Sobre;
