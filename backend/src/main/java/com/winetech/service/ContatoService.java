package com.winetech.service;

import com.winetech.dto.ContatoDTO;
import com.winetech.model.Contato;
import com.winetech.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContatoService {

    private final ContatoRepository contatoRepository;

    @Autowired
    public ContatoService(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    public Contato salvar(ContatoDTO dto) {
        Contato contato = new Contato();
        contato.setNome(dto.getNome());
        contato.setEmail(dto.getEmail());
        contato.setMensagem(dto.getMensagem());
        return contatoRepository.save(contato);
    }

    public List<Contato> listarTodos() {
        return contatoRepository.findAll();
    }

    public List<Contato> buscarPorEmail(String email) {
        return contatoRepository.findByEmail(email);
    }

    public List<Contato> buscarPorNome(String nome) {
        return contatoRepository.findByNomeContainingIgnoreCase(nome);
    }
}
