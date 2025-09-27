// src/main/java/com/winetech/service/EmailService.java
package com.winetech.service;

import com.winetech.dto.ContatoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviar(ContatoDTO contato) {
        SimpleMailMessage mensagem = new SimpleMailMessage();
        mensagem.setTo("contato@winetech.com.br"); // email que vai receber
        mensagem.setSubject("Novo contato via site");
        mensagem.setText(
                "Nome: " + contato.getNome() + "\n" +
                        "Email: " + contato.getEmail() + "\n" +
                        "Mensagem:\n" + contato.getMensagem()
        );
        mailSender.send(mensagem);
    }
}
