<<<<<<< HEAD
// src/main/java/com/winetech/controller/ContatoController.java
package com.winetech.controller;

import com.winetech.dto.ContatoDTO;
import com.winetech.model.Contato;
import com.winetech.repository.ContatoRepository;
=======
package com.winetech.controller;

import com.winetech.dto.ContatoDTO;
import com.winetech.service.ContatoService;
>>>>>>> dev-back
import com.winetech.service.EmailService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato")
@CrossOrigin(origins = "http://localhost:5173")
=======
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contato")
>>>>>>> dev-back
public class ContatoController {

    private static final Logger logger = LoggerFactory.getLogger(ContatoController.class);

<<<<<<< HEAD
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
=======
    private final ContatoService contatoService;
    private final EmailService emailService;

    public ContatoController(ContatoService contatoService, EmailService emailService) {
        this.contatoService = contatoService;
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> receberContato(@Valid @RequestBody ContatoDTO dto) {
        try {
            contatoService.salvar(dto);
            emailService.enviar(dto);
            logger.info("Contato recebido e email enviado: {}", dto.getEmail());

            return ResponseEntity.ok(Map.of(
                    "status", "sucesso",
                    "mensagem", "Mensagem enviada com sucesso"
            ));
        } catch (Exception e) {
            logger.error("Erro ao processar contato", e);
            return ResponseEntity.status(500).body(Map.of(
                    "status", "erro",
                    "mensagem", "Erro ao enviar mensagem"
            ));
        }
    }
}
>>>>>>> dev-back
