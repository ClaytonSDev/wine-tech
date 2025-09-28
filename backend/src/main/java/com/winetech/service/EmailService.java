<<<<<<< HEAD
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
=======
package com.winetech.service;

import com.winetech.dto.ContatoDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;
    private final String destinatario = "winetech33@gmail.com";

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void enviar(ContatoDTO dto) {
        if (dto.getNome() == null || dto.getEmail() == null || dto.getMensagem() == null) {
            throw new IllegalArgumentException("Campos obrigatórios não preenchidos");
        }

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo(destinatario);
            helper.setSubject("Novo contato recebido via Wine Tech");
            helper.setFrom("winetech33@gmail.com");

            String corpoHtml = "<strong>Nome:</strong> " + dto.getNome() + "<br>" +
                    "<strong>Email:</strong> " + dto.getEmail() + "<br>" +
                    "<strong>Mensagem:</strong><br>" + dto.getMensagem();

            helper.setText(corpoHtml, true);
            mailSender.send(mimeMessage);

            logger.info("Email enviado com sucesso para {}", destinatario);
        } catch (Exception e) {
            logger.error("Erro ao enviar email", e);
            throw new RuntimeException("Falha ao enviar e-mail", e);
        }
    }
}
>>>>>>> dev-back
