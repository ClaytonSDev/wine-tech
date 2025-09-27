// src/pages/Contato.tsx
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  font-family: ${({ theme }) => theme.fonts.montserrat};

  h1 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-weight: ${({ theme }) => theme.fonts.light};

    strong {
      font-weight: ${({ theme }) => theme.fonts.bold};
      color: ${({ theme }) => theme.colors.light};
    }
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
      border: 1px solid ${({ theme }) => theme.colors.border};
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.input};
      color: ${({ theme }) => theme.colors.text};
      resize: vertical;
      font-family: ${({ theme }) => theme.fonts.montserrat};
      font-weight: ${({ theme }) => theme.fonts.light};
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
      font-weight: ${({ theme }) => theme.fonts.bold};
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-family: ${({ theme }) => theme.fonts.montserrat};

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

const Contato = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/contato", form);
      toast.success("Mensagem enviada com sucesso!");
      setForm({ nome: "", email: "", mensagem: "" });
    } catch (error: any) {
      if (error.response?.data) {
        toast.error(error.response.data);
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    }
  };

  return (
    <Container>
      <h1>Fale Conosco</h1>
      <p>
        Vamos conversar sobre o futuro da sua empresa?
        <br />
        <strong>Email:</strong> contato@winetech.com.br
        <br />
        <strong>Telefone:</strong> (11) 95489-2095
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <ToastContainer position="top-right" autoClose={4000} />
    </Container>
  );
};

export default Contato;
