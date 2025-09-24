import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import LayoutWrapper from "./components/LayoutWrapper";
import whatsappIcon from "./assets-webp/whatsapp-icon.webp";
import linkedinIcon from "./assets-webp/linkedin-icon.webp";
import facebookIcon from "./assets-webp/facebook-icon.webp";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      <WhatsAppButton
        href="https://wa.me/5511985492095"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <img src={whatsappIcon} alt="Ícone do WhatsApp" />
      </WhatsAppButton>
    </AppContainer>
  );
}

export default App;
