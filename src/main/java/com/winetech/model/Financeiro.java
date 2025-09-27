package com.winetech.model;

import jakarta.persistence.*;

@Entity
public class Financeiro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projeto;
    private Double faturamento;
    private Double custoHora;
    private Double margemLucro;

    public Financeiro() {}

    public Long getId() {
        return id;
    }

    public String getProjeto() {
        return projeto;
    }

    public Double getFaturamento() {
        return faturamento;
    }

    public Double getCustoHora() {
        return custoHora;
    }

    public Double getMargemLucro() {
        return margemLucro;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setProjeto(String projeto) {
        this.projeto = projeto;
    }

    public void setFaturamento(Double faturamento) {
        this.faturamento = faturamento;
    }

    public void setCustoHora(Double custoHora) {
        this.custoHora = custoHora;
    }

    public void setMargemLucro(Double margemLucro) {
        this.margemLucro = margemLucro;
    }
}
