import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo1.png"; // substituído pelo logo1

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.light};
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 2rem;
    margin: 0;
    letter-spacing: 0.8px;
  }

  @media (max-width: 768px) {
    img {
      width: 60px;
      height: 60px;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: 768px) {
    gap: 0.8rem;

    a {
      font-size: 0.95rem;
      padding: 0.4rem 0.6rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand>
        <img src={logo} alt="Logo Wine Tech" />
        <h2>Wine Tech</h2>
      </Brand>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Área do Cliente</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
