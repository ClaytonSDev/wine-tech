// src/main/java/com/winetech/controller/ContatoController.java
package com.winetech.controller;

import com.winetech.dto.ContatoDTO;
import com.winetech.model.Contato;
import com.winetech.repository.ContatoRepository;
import com.winetech.service.EmailService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato")
@CrossOrigin(origins = "http://localhost:5173")
public class ContatoController {

    private static final Logger logger = LoggerFactory.getLogger(ContatoController.class);

    @Autowired
    private EmailService emailService;

    @Autowired
    private ContatoRepository contatoRepository;

    @PostMapping
    public ResponseEntity<String> receberContato(@Valid @RequestBody ContatoDTO dto) {
        try {
            // Salvar no banco
            Contato contato = new Contato();
            contato.setNome(dto.getNome());
            contato.setEmail(dto.getEmail());
            contato.setMensagem(dto.getMensagem());
            contatoRepository.save(contato);

            // Enviar email
            emailService.enviar(dto);

            logger.info("Contato recebido e email enviado: {}", dto.getEmail());
            return ResponseEntity.ok("Mensagem enviada com sucesso");
        } catch (Exception e) {
            logger.error("Erro ao processar contato: {}", e.getMessage());
            return ResponseEntity.status(500).body("Erro ao enviar mensagem");
        }
    }
}
