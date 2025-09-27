# 🛠 Wine Tech Backend

Este módulo contém a API REST da plataforma **Wine Tech**, desenvolvida com **Java 17** e **Spring Boot**, responsável pela autenticação, lógica de negócio e integração com o frontend.

---

## 🚀 Tecnologias Utilizadas

- Java 17
- Spring Boot
- Spring Security (JWT)
- PostgreSQL
- Maven
- Railway (Deploy)

---

## 📡 Endpoints principais

- `POST /api/auth/login` – Autenticação via JWT
- `GET /api/users/me` – Dados do usuário autenticado
- `POST /api/contact` – Envio de mensagens de contato

> ⚠️ Todos os endpoints protegidos exigem token JWT no header `Authorization`.

---

## 🔐 Segurança

- Autenticação baseada em JWT
- CORS habilitado para integração com o frontend
- Proteção de rotas privadas via filtros do Spring Security

---

## 🧪 Como rodar localmente

### Pré-requisitos

- Java 17 instalado
- PostgreSQL rodando localmente ou em nuvem
- Maven

### Passos

```bash
# Clonar o repositório
git clone https://github.com/ClaytonSDev/wine-tech.git
cd wine-tech/backend

# Rodar a aplicação
./mvnw spring-boot:run
