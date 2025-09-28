package com.winetech.controller;

import com.winetech.dto.ContatoDTO;
import com.winetech.service.ContatoService;
import com.winetech.service.EmailService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato")
@CrossOrigin(origins = "https://wine-tech.vercel.app", allowCredentials = "true")
public class ContatoController {

    private static final Logger logger = LoggerFactory.getLogger(ContatoController.class);

    private final ContatoService contatoService;
    private final EmailService emailService;

    public ContatoController(ContatoService contatoService, EmailService emailService) {
        this.contatoService = contatoService;
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<String> receberContato(@Valid @RequestBody ContatoDTO dto) {
        try {
            contatoService.salvar(dto);
            emailService.enviar(dto);

            logger.info("Contato recebido e email enviado: {}", dto.getEmail());
            return ResponseEntity.ok("Mensagem enviada com sucesso");
        } catch (Exception e) {
            logger.error("Erro ao processar contato", e);
            return ResponseEntity.status(500).body("Erro ao enviar mensagem");
        }
    }
}
