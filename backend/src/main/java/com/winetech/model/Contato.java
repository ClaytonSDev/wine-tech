package com.winetech.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;

    @Column(columnDefinition = "TEXT")
    private String mensagem;

    private LocalDateTime dataEnvio = LocalDateTime.now();

    // Getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMensagem() { return mensagem; }
    public void setMensagem(String mensagem) { this.mensagem = mensagem; }

    public LocalDateTime getDataEnvio() { return dataEnvio; }
    public void setDataEnvio(LocalDateTime dataEnvio) { this.dataEnvio = dataEnvio; }
}
