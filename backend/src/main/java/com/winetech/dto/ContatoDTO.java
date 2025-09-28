package com.winetech.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class ContatoDTO {

    @NotBlank(message = "Nome é obrigatório")
    private String nome;

    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    private String email;

    @NotBlank(message = "Mensagem é obrigatória")
    private String mensagem;

<<<<<<< HEAD
    // Getters e setters
=======
HEAD:backend/src/main/java/com/winetech/dto/ContatoDTO.java
    public ContatoDTO() {
        // Construtor padrão necessário para deserialização
    }

    public ContatoDTO(String nome, String email, String mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }

05c512e (Reestrutura backend, adiciona API de contato e configura .env):src/main/java/com/winetech/dto/ContatoDTO.java
>>>>>>> dev-back
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
<<<<<<< HEAD
        this.nome = nome;
=======
        this.nome = nome != null ? nome.trim() : null;
>>>>>>> dev-back
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
<<<<<<< HEAD
        this.email = email;
=======
        this.email = email != null ? email.trim() : null;
>>>>>>> dev-back
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
<<<<<<< HEAD
        this.mensagem = mensagem;
    }
}
=======
        this.mensagem = mensagem != null ? mensagem.trim() : null;
    }
}
>>>>>>> dev-back
