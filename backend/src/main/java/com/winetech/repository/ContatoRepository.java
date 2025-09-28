package com.winetech.repository;

import com.winetech.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
    List<Contato> findByEmail(String email);
    List<Contato> findByNomeContainingIgnoreCase(String nome);
}