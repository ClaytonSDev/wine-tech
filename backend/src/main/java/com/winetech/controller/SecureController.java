package com.winetech.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/secure")
public class SecureController {

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
<<<<<<< HEAD
        return ResponseEntity.ok("Acesso autorizado! 🍷");
=======
        return ResponseEntity.ok("Acesso autorizado!");
>>>>>>> dev-back
    }
}
