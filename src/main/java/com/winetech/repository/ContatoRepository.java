package com.winetech.repository;

import com.winetech.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
    List<Contato> findByEmail(String email);
    List<Contato> findByNomeContainingIgnoreCase(String nome);
<<<<<<< HEAD:backend/src/main/java/com/winetech/repository/ContatoRepository.java
}

}
05c512e (Reestrutura backend, adiciona API de contato e configura .env):src/main/java/com/winetech/repository/ContatoRepository.java
