// src/main/java/com/winetech/controller/FinanceiroController.java
package com.winetech.controller;

import com.winetech.model.Financeiro;
import com.winetech.repository.FinanceiroRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/financeiro")
@CrossOrigin(origins = "*") // permite acesso do frontend
public class FinanceiroController {

    private final FinanceiroRepository repository;

    public FinanceiroController(FinanceiroRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Financeiro> listar() {
        return repository.findAll();
    }
}
