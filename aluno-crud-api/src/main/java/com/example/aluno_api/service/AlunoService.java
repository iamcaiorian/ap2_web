package com.example.aluno_api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.aluno_api.entity.Aluno;
import com.example.aluno_api.repository.AlunoRepository;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    public List<Aluno> listarAlunos() {
        return alunoRepository.findAll();
    }

    public Optional<Aluno> buscarAlunoPorId(String id) {
        return alunoRepository.findById(id);
    }

    public Aluno salvarAluno(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public void deletarAluno(String id) {
        alunoRepository.deleteById(id);
    }
}
